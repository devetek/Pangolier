const path = require("path");
const appRootDir = require("app-root-dir");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ScriptExtPlugin = require("script-ext-html-webpack-plugin");
const AngularCompilerPlugin = require("@ngtools/webpack").AngularCompilerPlugin;
const pkg = require("../../package.json");
const getPath = require("./../baseDir");

const webpackConfig = {
  target: "web",
  context: appRootDir.get(),
  mode: process.env.NODE_ENV,
  devtool: "cheap-module-source-map",
  entry: getPath("./src/main.ts"),
  output: {
    path: getPath("./dist"),
    filename: "app.js"
  },
  resolve: {
    alias: {
      "@app": getPath("./src/app"),
      "@layout": getPath("./src/app/layout"),
      "@routes": getPath("./src/app/routes"),
      "@modules": getPath("./src/app/modules")
    },
    extensions: [".ts", ".js"]
  },
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
        from: "./src/assets",
        to: "./assets"
      }
    ]),
    new HtmlWebpackPlugin({
      template: getPath("./src/index.html"),
      output: getPath("./dist"),
      inject: "head"
    }),
    new ScriptExtPlugin({
      defaultAttribute: "defer"
    }),
    new AngularCompilerPlugin({
      tsConfigPath: getPath("./tsconfig.json"),
      entryModule: getPath("./src/app/init#AppModule"),
      sourceMap: true
    })
  ],
  module: {
    // Makes missing export becomes compile error
    strictExportPresence: true,
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: "@ngtools/webpack"
      },
      { test: /\.css$/, loader: "raw-loader" },
      { test: /\.html$/, loader: "raw-loader" }
    ]
  }
};

module.exports = webpackConfig;
