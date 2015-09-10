import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

gulp.task('default', () => {
  var b = browserify('./js/main.js').bundle();
    return b
    .pipe(source('./js/main.js'))
    .pipe(gulp.dest('public'));
});
