const gulp = require('gulp')
const sass = require('gulp-sass')
const sassRuby = require('gulp-ruby-sass');
gulp.task('default', () => {
    return gulp.src('*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('result'))
})

