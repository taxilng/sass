const gulp = require('gulp')
const sass = require('gulp-sass')
gulp.task('default', () => {
    return gulp.src('./style/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'))
})

