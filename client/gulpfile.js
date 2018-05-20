/*===========================================================================*/

'use strict';

String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
}

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var del = require('del');
var exec = require('child_process').exec;
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

/*===========================================================================*/
/* CLEAN                                                                     */
/*===========================================================================*/
gulp.task('clean', function () {
    return del(['./dist/*']);
});

/*===========================================================================*/
/* SLICK                                                                     */
/*===========================================================================*/
gulp.task('slick', function () {
    gulp.src([
        './src/assets/css/slick/slick.css',
        './src/assets/css/slick/slick-theme.css'
    ], {
            base: './src'
        })
        .pipe(concat('slick_.css'))
        .pipe(cleanCSS())
        .pipe(rename('slick.min.css'))
        .pipe(gulp.dest('./src/assets/css/slick'));
});

/*===========================================================================*/
/* CLIENT                                                                    */
/*===========================================================================*/
function _scss(style, mq) {
    gulp.src([
        './node_modules/clarity-ui/clarity-ui.min.css',
        './src/styles/_core.scss',
        './src/styles/{0}.scss'.format(style),
        './src/styles/{0}_{1}.scss'.format(style, mq),
        './src/app/**/*.scss'
    ], {
            base: './src'
        })
        .pipe(concat('{0}_{1}.scss'.format(style, mq)))
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('{0}_{1}.css'.format(style, mq)))
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(rename('{0}_{1}.min.css'.format(style, mq)))
        .pipe(gulp.dest('./src/assets/css'));
}

gulp.task('build-client-scss', function () {
    [
        'default'

    ].forEach(function (s) {
        _scss(s, 'pc');
        _scss(s, 'sp');
    });
});

/*===========================================================================*/
/* BUILD                                                                     */
/*===========================================================================*/
gulp.task('build', function () {
    exec('gulp build-client-scss && npm run build:prod', {
        cwd: '.',
        maxBuffer: 2000 * 1024
    }, function (error, stdout, stderr) {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error) {
            console.error(`exec error: ${error}`);
            process.exit(1);
        }

        gulp.src('./src/sitemap.xml')
            .pipe(gulp.dest('./dist'));

        console.log('DONE');
    });
});

/*===========================================================================*/
/*===========================================================================*/
gulp.task('watch', function () {
    gulp.watch(['./src/**/*.scss'], ['build-client-scss']);
});

gulp.task('default', ['build-client-scss', 'watch']);

/*===========================================================================*/
