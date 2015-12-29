'use strict';

var gulp = require('gulp');
var jslint = require('gulp-jslint-simple');

gulp.task('lint', function () {
  gulp.src('*.js')
    .pipe(jslint.run({
      node: true,
      vars: true,
      indent: 2
    }))
    .pipe(jslint.report({
      reporter: require('jshint-stylish').reporter
    }));
});