var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('dev' , function() {
return gulp.src('js/**/*.js')
.pipe(jshint())
.pipe(jshint.reporter('default'))
});

gulp.task('sass', function() {
    return gulp.src('scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({errLogToConsole:true, outputStyle: 'expanded'}))
    .pipe(sourcemaps.write()) 
    .pipe(gulp.dest('css'))
});

gulp.task('serve', ['sass'], function(){
    
    browserSync.init({
        server: "./"
    });
    
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('css/*.css').on('change', browserSync.reload);
    gulp.watch('js/*.js').on('change', browserSync.reload);
});

gulp.task('watch', function(){
gulp.watch('scss/**/*.scss', ['sass']);
});


gulp.task('default', ['serve', 'dev', 'sass', 'watch']);

