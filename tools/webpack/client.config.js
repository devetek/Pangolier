const path = require("path");
const appRootDir = require("app-root-dir");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ScriptExtPlugin = require("script-ext-html-webpack-plugin");
const AngularCompilerPlugin = require("@ngtools/webpack").AngularCompilerPlugin;
const pkg = require("../../package.json");

const webpackConfig = {
  target: "web",
  context: appRootDir.get(),
  mode: process.env.NODE_ENV,
  entry: path.resolve(appRootDir.get(), "./src/main.ts"),
  output: {
    path: path.resolve(appRootDir.get(), "./dist"),
    filename: "app.js"
  },
  // resolve: {
  //   extensions: [".ts", ".js"]
  // },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          filename: "vendor.js"
        }
      }
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "src/assets",
        to: "assets"
      }
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(appRootDir.get(), "./src/index.html"),
      output: path.resolve(appRootDir.get(), "./dist"),
      inject: "head"
    })
    // new ScriptExtPlugin({
    //   defaultAttribute: "defer"
    // }),
    // new AngularCompilerPlugin({
    //   tsConfigPath: path.resolve(appRootDir.get(), "./tsconfig.json"),
    //   mainPath: path.resolve(appRootDir.get(), "./src/app/main"),
    //   entryModule: path.resolve(
    //     appRootDir.get(),
    //     "./src/app/app.module#AppModule"
    //   ),
    //   sourceMap: true
    // })
  ],
  module: {
    // Makes missing export becomes compile error
    strictExportPresence: true,
    rules: [
      // {
      //   test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
      //   loaders: ["@ngtools/webpack"]
      // },
      // { test: /\.css$/, loader: "raw-loader" },
      // { test: /\.html$/, loader: "raw-loader" },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true, // TODO: created by process env variable
          babelrc: false,
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  node: pkg.engines.node.match(/(\d+\.?)+/)[0]
                },
                modules: false,
                useBuiltIns: "entry"
              }
            ]
          ],
          plugins: [
            "babel-plugin-macros",
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }],
            "@babel/plugin-proposal-export-default-from",
            "@babel/plugin-proposal-export-namespace-from",
            [
              "@babel/plugin-proposal-object-rest-spread",
              { useBuiltIns: true }
            ],
            "@babel/plugin-proposal-optional-chaining",
            "@babel/plugin-syntax-async-generators",
            "@babel/plugin-syntax-dynamic-import",
            ["@babel/plugin-transform-destructuring", { useBuiltIns: true }],
            [
              "@babel/plugin-transform-runtime",
              { helpers: false, regenerator: true }
            ]
          ]
        }
      }
    ]
  }
};

module.exports = webpackConfig;
