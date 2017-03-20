var gulp = require('gulp'),
    sass = require('gulp-sass'),
    inlineCss = require('gulp-inline-css'),
    browserSync = require('browser-sync').create();


gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});
 
gulp.task('watch', function() {
  gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch('src/*.html', ['html']);
});


gulp.task('default', ['sass','html','browser-sync','js','watch']);