var gulp = require('gulp');
var webpack = require('webpack');

gulp.task('default', function(callback) {
  webpack(require('./webpack.config'), function(err, stats) {
    console.log(err, stats);
    callback();
  });
});
