const gulp = require('gulp')

const sass = require('gulp-sass')
const del = require('del');
const cleanCSS = require('gulp-clean-css');
let timer = null
gulp.task('clean', () => {
    return del('dist');
})

gulp.task('default', ['clean'], () => {
    return gulp.src('./style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(cleanCSS())
        .pipe(gulp.dest('dist'))
})

// gulp.task('watcher', () => {
//     gulp.watch('style/**', () => {
//         clearTimeout(timer)
//         timer = setTimeout(function () {
//            gulp.start('default')
//         },2000)
//     })
// })

gulp.task('watcher', () => {
    gulp.watch('style/**', ['default'])
})


// 痛点，解决CSS哪些问题
// SASS的背景
// 如何在我们项目中使用
