var webpack = require('webpack');
var path = require('path');
var NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');
var SRC_PATH = path.resolve(__dirname, 'src');
var DIST_PATH = path.resolve(__dirname, 'dist');

var config = {
  entry: path.resolve(SRC_PATH, 'main.jsx'),
  output: {
    path: DIST_PATH,
    filename: 'bundle.js'
  },
  resolve:{
    extensions: ['', '.js', '.jsx']
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: [NODE_MODULES_PATH],
      }, {
        test: /\.css$/,
        loaders: ['style', 'css'],
      }, {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      }
    ]
  },
  devServer: {
    port: 8080,
    hot: true,
    inline: true,
    progress: true
    // proxy: {  
    //   '/api/**': {  
    //     target: 'http://faner.m.jd.com/', 
    //     secure: false,
    //     changeOrigin: true,
    //     withCredentials: true

    //   }  
    // }  
  }
};

module.exports = config;