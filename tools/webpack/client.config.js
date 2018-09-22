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
  devtool: "cheap-module-source-map",
  entry: path.resolve(appRootDir.get(), "./src/main.ts"),
  output: {
    path: path.resolve(appRootDir.get(), "./dist"),
    filename: "app.js"
  },
  resolve: {
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
      template: path.resolve(appRootDir.get(), "./src/index.html"),
      output: path.resolve(appRootDir.get(), "./dist"),
      inject: "head"
    }),
    new ScriptExtPlugin({
      defaultAttribute: "defer"
    }),
    new AngularCompilerPlugin({
      tsConfigPath: path.resolve(appRootDir.get(), "./tsconfig.json"),
      entryModule: path.resolve(appRootDir.get(), "./src/app/init#AppModule"),
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
