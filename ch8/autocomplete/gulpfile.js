var gulp = require('gulp'),
  react = require('gulp-react'),
  watch = require('gulp-watch'),
  nodemon = require('gulp-nodemon'),
  browserify = require('gulp-browserify')

gulp.task('build', function (done) {
  return gulp.src('./src/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('src/build'))
})

gulp.task('scripts', ['build'], function() {
  gulp.src('./src/build/app.js')
    .pipe(browserify({
      insertGlobals : true,
      debug: true
    }))
    .pipe(gulp.dest('./public/js'))
})

gulp.task('watch', ['build', 'scripts'], function(done){
    gulp.watch('src/*.jsx', ['build','scripts'] )
})

gulp.task('nodemon', ['build', 'scripts'], function(done){
  nodemon({ script: 'index.js',
    ext: 'html js' })
})

gulp.task('default', ['build', 'scripts', 'watch', 'nodemon'])
