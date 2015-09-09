var path = require('path');
var config = {
  entry: path.resolve(__dirname, './react/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'react.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }]
  }
};

module.exports = config;
