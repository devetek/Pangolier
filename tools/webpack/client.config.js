const path = require('path');
const cssnano = require('cssnano');
const webpack = require('webpack');
const appRootDir = require('app-root-dir');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const pkg = require('../../package.json');
const getPath = require('./../baseDir');
const progressHandler = require('./../progress');

const webpackConfig = {
  target: 'web',
  context: appRootDir.get(),
  mode: process.env.NODE_ENV,
  devtool: 'cheap-module-source-map',
  entry: {
    app: [getPath('./src/main.ts')],
  },
  output: {
    path: getPath('./dist'),
    filename: '[name].js',
  },
  resolve: {
    alias: {
      '@app': getPath('./src/app'),
      '@layout': getPath('./src/app/layout'),
      '@routes': getPath('./src/app/routes'),
      '@modules': getPath('./src/app/modules'),
      '@helpers': getPath('./src/helpers'),
    },
    extensions: ['.ts', '.js'],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          ecma: 8,
          output: {
            ascii_only: true,
          },
        },
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: cssnano,
        ccssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          filename: 'vendor.js',
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CopyWebpackPlugin([
      {
        from: './src/assets',
        to: './assets',
      },
      {
        from: './src/styles',
        to: './styles',
      },
    ]),
    new HtmlWebpackPlugin({
      template: getPath('./src/index.html'),
      output: getPath('./dist'),
      filename: 'index.html',
      inject: true,
      minify: true,
    }),
    new ScriptExtPlugin({
      defaultAttribute: 'defer',
    }),
    new AngularCompilerPlugin({
      tsConfigPath: getPath('./tsconfig.json'),
      entryModule: getPath('./src/app/init#AppModule'),
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.ProgressPlugin({ handler: progressHandler }),
  ],
  module: {
    // Makes missing export becomes compile error
    strictExportPresence: true,
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: '@ngtools/webpack',
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 500,
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'to-string-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1, minimize: true },
          },
        ],
      },
      { test: /\.html$/, loader: 'raw-loader' },
    ],
  },
};

module.exports = webpackConfig;
