'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var bs = require('browser-sync');
var reload = bs.reload;
var when = require('gulp-if');
var shell = require('gulp-shell');


var paths = {
  scripts: ['client/app/**/*.js'],
  html: ['client/app/**/*.html', 'client/index.html'],
  styles: ['client/styles/style.css'],
  test: ['specs/**/*.js']
};

gulp.task('start', ['serve'], function () {
  bs({
    notify: true,
    injectChanges: true,
    files: paths.scripts.concat(paths.html, paths.styles),
    proxy: 'localhost:8000'
  });
});

gulp.task('karma', shell.task([
  'karma start'
]));

gulp.task('serve', function () {
  nodemon({
    script: './server/server.js',
    ignore: 'node_modules/**/*.js'
  });
});

gulp.task('default', ['start']);
