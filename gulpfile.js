'use strict';

var gulp          = require('gulp'),
    concat        = require('gulp-concat'),
    babel         = require('gulp-babel'),
    uglify        = require('gulp-uglify'),
    cleanCSS      = require('gulp-clean-css'),
    gulpSequence  = require('gulp-sequence'),
    rename        = require('gulp-rename'),
    pump          = require('pump'),
    htmlmin       = require('gulp-htmlmin'),
    sass          = require('gulp-sass'),
    maps          = require('gulp-sourcemaps'),
    del           = require('del');

    gulp.task('cleanTasks', function(){
      return del('dist');
    });

    gulp.task('compileSass', ['cleanTasks'], function(){
      return gulp.src('src/scss/main.scss')
          .pipe(maps.init())
          .pipe(sass())
          .pipe(maps.write('./'))
          .pipe(gulp.dest('dist/css'))
    });

    gulp.task('processCSS', ['compileSass'], function(){
      gulp.src('dist/css/main.css')
          .pipe(rename('main.min.css'))
          .pipe(cleanCSS({
              level: {
                1: {
                },
                2: {
                }
              }
            }))
          .pipe(gulp.dest('dist/css'))
    });

    gulp.task('concatScripts', function(){
      return gulp.src([
                'src/js/scripts.js'
              ])
                 .pipe(maps.init())
                 .pipe(babel({
                   presets: ['env']
                 }))
                 .pipe(concat('app.js'))
                 .pipe(maps.write('./'))
                 .pipe(gulp.dest('dist/js'))
    });

    gulp.task('compressJS', ['concatScripts'], function(err){
      pump([
        gulp.src('dist/js/app.js'),
        uglify(),
        rename({suffix: '.min'}),
        gulp.dest('dist/js')
      ],err)
    });

    gulp.task('copyIndexImg', function(){
      return gulp.src(['src/img/**', 'src/index.html'],
                  {base:'src'})
                  .pipe(gulp.dest('dist'))
    })

    gulp.task('inlineSourceCSS', ['copyIndexImg'], function(){
      gulp.src('dist/index.html')
                 .pipe(htmlmin({collapseWhitespace: true}))
                 .pipe(gulp.dest('dist'))
    });

    gulp.task('watchFiles', function(){
      gulp.watch(['src/scss/**/*.scss', 'src/js/*.js', 'src/index.html'], ['default']);
    });

    gulp.task('default', gulpSequence('processCSS', 'compressJS', 'inlineSourceCSS'));
