/*
 * Root component on the server-side
 */
import React from "react";
import { StaticRouter, matchPath } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import Helmet from "react-helmet";

import { injectReducer } from "../src/js/util/store";
import {
  Routes,
  getRoutes,
  getRouteComponent
} from "../src/js/containers/routes/index";
import Header from "../src/js/containers/header/index";
import Footer from "../src/js/containers/footer/index";
import { configureStore } from "../src/js/util/store";
import { defaultPathConfig } from "./helpers/pathConfig";
import Contact from "../src/js/containers/contact/index";
import { validateContactForm } from "../models/contactForm";

// api imports
import Api from "../service/main";

export function handleRender(req, res) {
  // Create a new Redux store instance
  const store = configureStore();

  getRoutes(store)
    .then(routes => {
      // retrieve data for all components on the current route
      const promises = [];

      // if req.show404 value was set to "false" by path validation middleware in app.babel.js
      // then redirect to /page-not-found/ here
      const path = req.show404 ? "/page-not-found/" : req.path;
      const { query, url } = req;

      // used for HTTP POST
      const responsePromise = new Promise((resolve, reject) => {
        if (req.method === "POST") {
          if (
            matchPath(path, {
              path: "/contact/",
              exact: true
            })
          ) {
            const formValues = req.body;
            validateContactForm(formValues)
              .then((errors, values) => {
                if (!errors) {
                  Api.contact
                    .submit(formValues)
                    .then(() => {
                      // once successful, redirect to the thank you page
                      resolve({ redirectUrl: "/contact/thank-you/" });
                    })
                    .catch(error => {
                      reject(error);
                    });
                } else {
                  promises.push(
                    Contact.fetchMessages(store, {
                      messages: errors,
                      formValues: formValues
                    })
                  );
                  resolve();
                }
              })
              .catch(error => {
                reject(error);
              });
          }
        } else {
          resolve();
        }
      });

      let isMatch = false;

      // iterate through the routes and prepare fetchData and reducers
      routes.forEach(route => {
        const match = matchPath(path, {
          path: route.url,
          exact: route.exact
        });

        if (match) {
          // inform the parent that we have found at least one match
          if (!isMatch) {
            isMatch = !isMatch;
          }

          // GET routes
          const routeComponent = getRouteComponent(route.name);

          if (routeComponent) {
            // inject the reducers for the route
            routeComponent.getReducers.forEach(fn => {
              const { key, reducer } = fn();
              injectReducer(store, key, reducer);
            });

            // add the promise to fetch the route data
            routeComponent.fetchData.forEach(fn => {
              promises.push(
                fn(store, {
                  path,
                  match,
                  query,
                  url,
                  route
                })
              );
            });
          }

          return true;
        }
      });

      responsePromise
        .then(response => {
          if (response) {
            const { redirectUrl, statusCode } = response;
            if (redirectUrl) {
              res.redirect(redirectUrl);
            } else if (statusCode) {
              res.status(statusCode).send();
            }
          } else {
            if (req.show404) {
              res.status(404);
            }

            // add layout promises, such as header & footer
            if (Header) {
              const { key, reducer } = Header.getReducer();
              injectReducer(store, key, reducer);
              promises.push(
                Header.fetchData(store, {
                  path,
                  query,
                  url
                })
              );
            }
            if (Footer) {
              const { key, reducer } = Footer.getReducer();
              injectReducer(store, key, reducer);
              promises.push(
                Footer.fetchData(store, {
                  path,
                  query,
                  url
                })
              );
            }

            Promise.all(promises)
              .then(response => {
                const staticContext = {};

                // render the component to a string
                const html = renderToString(
                  <Provider store={store}>
                    <div id="app">
                      <StaticRouter context={staticContext} location={req.url}>
                        <Routes routes={routes} />
                      </StaticRouter>
                    </div>
                  </Provider>
                );

                // Grab the initial state from our Redux store
                const preloadedState = store.getState();

                const data = Object.assign(defaultPathConfig, {
                  html: html,
                  preloadedState: JSON.stringify(preloadedState.toJS()).replace(
                    /</g,
                    "\\u003c"
                  )
                });

                const helmet = Helmet.renderStatic();

                // Send the rendered page back to the client using the server's view engine
                res.render("index", {
                  htmlAttributes: helmet.htmlAttributes,
                  bodyAttributes: helmet.bodyAttributes,
                  head: `${helmet.title} ${helmet.meta} ${helmet.link}`,
                  data
                });
              })
              .catch(error => {
                console.error(error);
                throw error;
              });
          }
        })
        .catch(error => {
          res.status(500);
          res.render("500", { layout: false });
        });
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}
