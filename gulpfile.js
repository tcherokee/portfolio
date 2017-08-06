'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    gulpSequence = require('gulp-sequence'),
    rename = require('gulp-rename'),
    pump = require('pump'),
    htmlmin = require('gulp-htmlmin'),
    del = require('del');
