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
/* CLIENT                                                                    */
/*===========================================================================*/
function _scss(style, mq) {
    gulp.src([
        './src/styles/_core.scss',
        './src/styles/_core_{0}.scss'.format(mq),
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
/*===========================================================================*/
gulp.task('watch', function () {
    gulp.watch(['./src/**/*.scss'], ['build-client-scss']);
});

gulp.task('default', ['build-client-scss', 'watch']);

/*===========================================================================*/
/*             Copyright © 2016. APCON, Inc. All Rights Reserved.            */
/*===========================================================================*/
