var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var babel = require('gulp-babel')
var concat = require('gulp-concat')
var watch = require('gulp-watch')

gulp.task('build', function () {
  return gulp.src('./*.jsx')
    .pipe(sourcemaps.init())
    .pipe(babel())
    // .pipe(concat('script.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'))
})
gulp.task('watch', function() {
    gulp.watch('./*.jsx', ['build'])
});

gulp.task('default', ['build', 'watch'])
