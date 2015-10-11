var gulp = require('gulp'),
  react = require('gulp-react'),
  watch = require('gulp-watch'),
  nodemon = require('gulp-nodemon')

gulp.task('default', function (done) {
  nodemon({ script: 'index.js',
    ext: 'html js' })
  return gulp.src('public/js/app.jsx')
    .pipe(watch('public/js/*.jsx'))
    .pipe(react())
    .pipe(gulp.dest('public/js/'))
})
