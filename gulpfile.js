const gulp = require('gulp')
const sass = require('gulp-sass')
const del = require('del');
gulp.task('clean', () => {
    del('dist');
})
gulp.task('default',['clean'], () => {
    return gulp.src('./style/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'))
})

