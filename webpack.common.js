// http://clarkdave.net/2015/01/how-to-use-webpack-with-rails/
// https://github.com/webpack-contrib/css-loader/issues/151
const webpack = require('webpack');
const path = require('path');

const config = module.exports = {
  // the base path which will be used to resolve entry points
  context: __dirname,
  // the main entry point for our application's frontend JS
  entry: { 
    //'./app/frontend/javascripts/entry.js',
    react_one: './src/app/index.js',
    brain_leader: './src/brain_leader/index.js',
    //'./app/frontend/javascripts/google-analytics.js',
  },
  output: {
    // this is our app/assets/javascripts directory, which is part of the Sprockets pipeline
    //path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    path: path.join(__dirname, 'public', 'js'),
    // the filename of the compiled bundle, e.g. app/assets/javascripts/bundle.js
    filename: '[name].bundle.js',
    // if the webpack code-splitting feature is enabled, this is the path it'll use to download bundles
    publicPath: '/assets',
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /src\/.+js$/, loader: 'babel-loader', },
      { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/, loader: 'url-loader?limit=10000' },
      { test: /\.(eot|ttf|wav|mp3)$/, loader: 'file-loader' },
    ],
  },
  plugins: [
  ],
};

config.resolve = {
  // tell webpack which extensions to auto search when it resolves modules. With this,
  // you'll be able to do `require('./utils')` instead of `require('./utils.js')`
  extensions: ['.js', '.coffee'],
  // by default, webpack will search in `web_modules` and `node_modules`. Because we're using
  // Bower, we want it to look in there too
  //modulesDirectories: [ 'node_modules', 'bower_components' ],
};
