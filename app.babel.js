/* global  __dirname */
/* global  process */

"use strict";

import fs from "fs";
import https from "https";
import path from "path";
import express from "express";
import exphbs from "express-handlebars";
import handlebars from "handlebars";
import bodyParser from "body-parser";
import compression from "compression";
import session from "express-session";

// custom helpers
import { handleRender } from "./server/server";
import { requireHttps, requireWww } from "./server/helpers/routing.js";
import { generateXmlSitemap } from "./server/helpers/sitemap.js";

// api imports
import Api from "./service/main";

const API_URL = `${process.env.API_URL}`;

// configuration
const config = {
  environment: process.env.NODE_ENV || "development",
  isHttps: (!process.env.port && process.env.isHttps === true) || false
};

const app = express();
app.use(compression());

const viewsDir = "./templates";

// setup express to use handlebars as the templating engine
const hbs = exphbs.create({
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, `${viewsDir}/layouts`),
  partialsDir: path.join(__dirname, `${viewsDir}/partials`),
  extname: ".hbs"
});

// allows partials to be organised in subfolders
hbs
  .getTemplates(path.join(__dirname, `${viewsDir}/partials`))
  .then(function(partials) {
    for (let partial in partials) {
      handlebars.registerPartial(partial, "{{" + partial + "}}");
    }
  })
  .catch(error => {
    console.log(`Unable to retrieve templates. Error: ${error}`);
  });

app.set("views", path.join(__dirname, `${viewsDir}`));
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

// preload webfonts
app.use("/fonts", (req, res, next) => {
  const protocol = req.get("x-arr-ssl") ? req.protocol + "s" : req.protocol;
  // https://coderead.wordpress.com/2014/09/05/redirecting-to-https-in-node-js-on-azure-websites/

  res.set(
    "Link",
    `${protocol +
      "://" +
      req.get("host") +
      req.originalUrl}; rel=preload; as=style`
  );
  next();
});

// setup server for static assets
app.use(
  "/",
  express.static(path.join(__dirname, "dist"), { maxAge: 604800000 })
);

//if request url matches /media/* then redirect to API_URL/media/*
app.use((req, res, next) => {
  if (/\/media\/[^\/]+/.test(req.url)) {
    return res.redirect(API_URL.concat(req.url));
  }
  next();
});

// https://medium.com/@yash.kulshrestha/using-lets-encrypt-with-express-e069c7abe625
app.use("/.well-known", express.static(path.join(__dirname, ".well-known")));

app.use("/sitemap.xml", (req, res) => {
  generateXmlSitemap(req, res).then(response => {
    res.header("Content-Type", "text/xml");
    res.send(response);
  });
});

// require HTTPS
app.use(requireHttps);

// redirect to include www
app.use(requireWww);

// Setup body parser for parsing POST request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sessionExpiration = 20 * 60 * 1000; // 20 * 60 seconds * 1000ms

// Setup session middleware
app.use(
  session({
    secret: "test",
    cookie: { maxAge: sessionExpiration },
    unset: "destroy",
    resave: true,
    saveUninitialized: false,
    sameSite: true
  })
);

// Middleware for the creation of session variables
app.use((req, res, next) => {
  if (!req.session.messages) {
    req.session.messages = [];
  }
  if (!req.session.formValues) {
    req.session.formValues = {};
  }
  next();
});

// Path validation middleware
app.use((req, res, next) => {
  // Get the URL path only from the whole URL
  const urlPath = Api.router.extractUrlPath(req.path);
  Api.router
    .isValidPath(urlPath)
    .then(valid => {
      // If the request is valid, then continue on
      if (valid) {
        next();
        return;
      }
      console.log(`${urlPath} is not a valid path, checking for exceptions`);
      // If they are not trying to get html, return a 404
      if (!req.headers.accept || !req.headers.accept.includes("html")) {
        // Return just a 404
        console.log(`${urlPath} does not accept HTML`);
        res.status(404).send();
        return;
      }
      // Check against the exceptions to see if this urlPath matches an exception
      const exceptions = [];
      for (let i = exceptions.length - 1; i >= 0; i--) {
        const isException = urlPath.match(new RegExp(exceptions[i]));
        if (isException) {
          console.log(`${urlPath} is an exception, not showing 404`);
          next();
          return;
        }
      }
      // Otherwise, pass a flag with the request for the 404 page to be rendered
      console.log(`${urlPath} is not an exception, showing 404`);
      req.show404 = true;
      next();
      return;
    })
    .catch(error => {
      console.error(`Unable to retrieve routing table: ${error}`);
      req.show500 = true;
      next();
    });
});

// React-Redux middleware
app.use(handleRender);

app.use(function(error, req, res, next) {
  console.error(error.message);
  if (config.environment === "development") {
    throw error;
  } else {
    res.status(500);
    res.render("500", { layout: false });
  }
  return;
});

// use the environment's port or a random port
const port =
  process.env.port ||
  (process.env.isDev
    ? 3000
    : Math.floor(Math.random() * (65535 - 1024)) + 1024);
app.listen(port, () => {
  console.log(`Running ${config.environment} on localhost:${port}`);
});

if (config.isHttps) {
  const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.crt"),
    requestCert: false,
    rejectUnauthorized: false
  };

  // create a different random port for HTTPS
  let httpsPort = process.env.isDev
    ? 6001
    : Math.floor(Math.random() * 65535) + 1024;
  while (httpsPort === port) {
    httpsPort = Math.floor(Math.random() * 65535) + 1024;
  }

  const server = https.createServer(options, app).listen(httpsPort, () => {
    console.log(
      `Running ${config.environment} (HTTPS) on localhost:${httpsPort}`
    );
  });
}

module.exports = app;
