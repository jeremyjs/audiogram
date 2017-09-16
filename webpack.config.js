var nodeExternals = require('webpack-node-externals');
var path = require('path');

const config = {
  target: 'node',

  externals: [nodeExternals()],

  entry: './src',

  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'index.js'
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};

module.exports = config;
