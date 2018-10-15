/* constants */
const isDev = process.env.NODE_ENV !== "production";
const isHttps = true;
const outputFolder = "dist";
const isDeploy = process.env.DEPLOY;

/* imports */
const packageJson = require("./package.json")
const path = require("path");
const webpack = require("webpack");
const NodeExternals = require("webpack-node-externals");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

const node = {
    name: "node",
    devtool: isDev ? "eval" : "hidden-source-map",
    target: "node",
    node: {
        __dirname: true
    },
    externals: [NodeExternals()],
    entry: ["./app.babel.js"],
    output: {
        path: __dirname,
        filename: "app.js"
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            "process.env.isDev": isDev,
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
            "process.env.NAME": JSON.stringify(packageJson.name),
            "process.env.DESCRIPTION": JSON.stringify(packageJson.description),
            "process.env.VERSION": JSON.stringify(packageJson.version),
            "process.env.AUTHOR.NAME": JSON.stringify(packageJson.author.name),
            "process.env.AUTHOR.EMAIL": JSON.stringify(packageJson.author.email),
            "process.env.AUTHOR.URL": JSON.stringify(packageJson.author.url),
            "process.env.isHttps": isHttps,
            "process.env.outputFolder": JSON.stringify(outputFolder),
            "process.env.API_URL": JSON.stringify(process.env.API_URL),
            "process.env.STORAGE_URL": JSON.stringify(
                ""
            ),
            "process.env.GOOGLEMAPS_IFRAME_URL": JSON.stringify(
                "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12927.13118421834!2d14.484345!3d35.903335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x492510f12c4b4149!2sIncredible+Web+Ltd!5e0!3m2!1sen!2smt!4v1539605219871"
            )
        })
    ].concat(
        isDev
            ? []
            : [
                  new webpack.optimize.UglifyJsPlugin({
                      mangle: false,
                      sourceMap: false
                  })
              ]
    ),
    module: {
        loaders: [
            {
                enforce: "pre",
                test: /\.jsx?$/,
                loader: "eslint-loader",
                exclude: /node_modules/,
                options: {
                    fix: true,
                    emitWarning: true
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"],
                    plugins: [
                        "transform-object-rest-spread",
                        "syntax-dynamic-import"
                    ]
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "iw-service": path.resolve(__dirname, "./service/sdk")
        }
    }
};

const web = {
    name: "web",
    devtool: isDev ? "eval" : "hidden-source-map",
    context: path.join(__dirname, "src"),
    entry: {
        "main.js": ['babel-polyfill',"./js/index.jsx"],
        "style.css": "./scss/style.scss",
        "inline.css": "./scss/inline.scss",
        vendor: [
            "react",
            "react-dom",
            "react-redux",
            "immutable",
            "react-router-dom",
            "react-transition-group",
            "react-helmet",
            "redux-immutable",
            "redux-thunk",
            "redux-form/immutable",
            "moment",
            "joi-browser",
            "node-cache",
            "axios",
            "lodash/throttle",
            "slugify",
            "babel-polyfill"
        ]
    },
    output: {
        path: path.join(__dirname, outputFolder),
        filename: "[name]"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js",
            minChunks: 2
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
            "process.env.NAME": JSON.stringify(packageJson.name),
            "process.env.DESCRIPTION": JSON.stringify(packageJson.description),
            "process.env.VERSION": JSON.stringify(packageJson.version),
            "process.env.AUTHOR.NAME": JSON.stringify(packageJson.author.name),
            "process.env.AUTHOR.EMAIL": JSON.stringify(packageJson.author.email),
            "process.env.AUTHOR.URL": JSON.stringify(packageJson.author.url),
            "process.env.API_URL": JSON.stringify(process.env.API_URL),
            "process.env.STORAGE_URL": JSON.stringify(
                ""
            ),
            "process.env.GOOGLEMAPS_IFRAME_URL": JSON.stringify(
                "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12927.13118421834!2d14.484345!3d35.903335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x492510f12c4b4149!2sIncredible+Web+Ltd!5e0!3m2!1sen!2smt!4v1539605219871"
            )
        }),
        new CleanWebpackPlugin("./dist"),
        new ExtractTextPlugin({
            filename: `[name]`,
            allChunks: true
        }),
        new CopyWebpackPlugin([
            {
                from: "./img/",
                to: "img/"
            },
            {
                from: "./favicon.ico",
                to: "./"
            },
            {
                from: "./manifest.json",
                to: "./"
            }
        ]),
        new StyleLintPlugin(),
        new SWPrecacheWebpackPlugin({
            cacheId: "sample-react-website",
            filename: "sw.js",
            minify: true,
            staticFileGlobs: [
                `/${outputFolder}/**/*.{css,js}`,
                `/${outputFolder}/img/**`
            ],
            stripPrefix: `/${outputFolder}`
        })
    ]
        .concat(isDev ? [] : [new webpack.optimize.UglifyJsPlugin()])
        .concat(isDeploy ? [] : [new BundleAnalyzerPlugin()]),
    module: {
        loaders: [
            {
                enforce: "pre",
                test: /\.jsx?$/,
                loader: "eslint-loader",
                exclude: /node_modules/,
                options: {
                    fix: true,
                    emitWarning: true
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"],
                    plugins: [
                        "transform-object-rest-spread",
                        "syntax-dynamic-import"
                    ]
                }
            },
            {
                test: /\.(sass|scss)$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                ident: "postcss",
                                plugins: loader => [
                                    require("autoprefixer")(),
                                    require("cssnano")({ zindex: false })
                                ]
                            }
                        },
                        "sass-loader"
                    ]
                })
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                  loader: "file-loader",
                  options: {
                    name: "fonts/[name].[ext]",
                  },
                },
              },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
                    "image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false"
                ]
            },
            {
                test: /\.modernizrrc.js$/,
                loader: "modernizr-loader"
            },
            {
                test: /\.modernizrrc(\.json)?$/,
                loader: "modernizr-loader!json-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            modernizr$: path.resolve(__dirname, "./.modernizrrc"),
            joi: "joi-browser",
            "iw-service": path.resolve(__dirname, "./service/modules")
        }
    }
};

module.exports = [node, web];
