'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('btcnano-build');

bitcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
