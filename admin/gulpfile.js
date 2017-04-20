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
gulp.task('build-client-scss', function () {
    gulp.src([
        './src/app/**/*.scss'
    ], {
            base: './src'
        })
        .pipe(concat('styles.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('styles.css'))
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('./src/assets/css'));
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
