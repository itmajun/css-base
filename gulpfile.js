'use strict';

var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var cssmin = require('gulp-cssmin')
var postcss = require('gulp-postcss');
var pxtoviewport = require('postcss-px-to-viewport');
var svg = require('postcss-write-svg');

gulp.task('compile', function() {

    var processors = [
        pxtoviewport({
            viewportWidth: 750,
            viewportUnit: 'vw',
            unitPrecision: 3,
            minPixelValue: 1,
            selectorBlackList: ['.ignore', '.hairlines'],
            mediaQuery: false
        }),
        svg
    ];

    return gulp.src('./src/*.scss')
        .pipe(sass.sync())
        .pipe(postcss(processors))
        .pipe(autoprefixer({
            browsers: ['ie > 9', 'last 2 versions'],
            cascade: false
        }))

        .pipe(cssmin())
        .pipe(gulp.dest('./lib'));
})

gulp.task('copyfont', function() {
    return gulp.src('./src/fonts/**')
        .pipe(cssmin())
        .pipe(gulp.dest('./lib/fonts'));
})

gulp.task('build', ['compile', 'copyfont'])