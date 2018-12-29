require('@babel/register');
const path = require('path');
const appRootDir = require('app-root-dir');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');
const openBrowserPlugin = require('open-browser-webpack-plugin');
const pkg = require('../../package.json');
const getPath = require('./../baseDir');

const entryFile =
  process.env.NODE_ENV === 'development'
    ? getPath('./src/dev-server.js')
    : getPath('./src/server.js');

const developmentPlugins = () => {
  if (process.env.NODE_ENV === 'development') {
    // need to lazy load this plugin
    const StartServerPlugin = require('start-server-webpack-plugin');

    return [
      new StartServerPlugin('server.js'),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new openBrowserPlugin({
        url: `http://${process.env.HOST}:${process.env.SSR}`,
      }),
    ];
  }

  return [];
};

const webpackConfig = {
  target: 'node',
  context: appRootDir.get(),
  mode: process.env.NODE_ENV,
  performance: false,
  entry: {
    server: ['webpack/hot/poll?1000', entryFile],
  },
  output: {
    path: getPath('./dist/server'),
    filename: '[name].js',
  },
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000'],
    }),
  ],
  plugins: [...developmentPlugins(), new Dotenv()],
  module: {
    // Makes missing export becomes compile error
    strictExportPresence: true,
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true, // TODO: created by process env variable
          babelrc: false,
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: pkg.engines.node.match(/(\d+\.?)+/)[0],
                },
                modules: false,
                useBuiltIns: 'entry',
              },
            ],
          ],
          plugins: [
            'babel-plugin-macros',
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-export-namespace-from',
            [
              '@babel/plugin-proposal-object-rest-spread',
              { useBuiltIns: true },
            ],
            '@babel/plugin-proposal-optional-chaining',
            '@babel/plugin-syntax-async-generators',
            '@babel/plugin-syntax-dynamic-import',
            ['@babel/plugin-transform-destructuring', { useBuiltIns: true }],
            [
              '@babel/plugin-transform-runtime',
              { helpers: false, regenerator: true },
            ],
          ],
        },
      },
    ],
  },
};

module.exports = webpackConfig;
