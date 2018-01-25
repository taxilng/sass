const gulp = require('gulp')
const sass = require('gulp-sass')
const del = require('del');
const cleanCSS = require('gulp-clean-css');
gulp.task('clean', () => {
    del('dist');
})

gulp.task('default',['clean'], () => {
    return gulp.src('./style/*.scss')
        .pipe(sass())
        // .pipe(cleanCSS())
        .pipe(gulp.dest('dist'))
})

