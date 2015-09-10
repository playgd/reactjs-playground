module.exports = {
  entry: './js/**/*.js',
  output: {
    path: './public',
    filename: 'react.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }]
  }
};
