'use strict';

var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    gulpIf       = require('gulp-if'),
    cleanCss     = require('gulp-clean-css'),
    browserSync  = require('browser-sync').create();
    

var config = {
    path: {
        scss: './src/scss/**/*.scss',
        html: './public/index.html',
        js: './public/js/src/*.js'
    },
    output: {
        cssName: 'bundle.min.css',
        jsName: 'main.min.js',
        path: './public',
        pathCss: './public/css',
        pathJs: './public/js'
    },
    isDevelop: false
};

gulp.task('scss', function() {
    return gulp.src(config.path.scss)
        .pipe(gulpIf(config.isDevelop, sourcemaps.init()))
        .pipe(sass())
        .pipe(concat(config.output.cssName))
        .pipe(autoprefixer())
        .pipe(gulpIf(!config.isDevelop, cleanCss()))
        .pipe(gulpIf(config.isDevelop, sourcemaps.write()))
        .pipe(gulp.dest(config.output.pathCss))
        .pipe(browserSync.stream())
});

gulp.task('scripts', function() {
    return gulp.src(config.path.js) // путь к папке со скриптами
     .pipe(concat(config.output.jsName)) // в какой файл объединить
     .pipe(gulp.dest(config.output.pathJs))
  });

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: config.output.path
        }
    });

    gulp.watch(config.path.scss, gulp.parallel('scss'));
    gulp.watch(config.path.html).on('change', browserSync.reload);

});

gulp.task('default', gulp.parallel('scss', 'serve'));