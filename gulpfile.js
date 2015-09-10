var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var browserSync = require('browser-sync').create();
var packageJSON  = require('./package');
var jscsConfig = packageJSON.jscsConfig;

var jsFiles = [
	'src/browserStorage.js',
	'demo/demo.js'
];

gulp.task('check-js', ['jshint', 'jscs']);

// runs the jshint
gulp.task('jshint', function() {
	return gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('jscs', function() {
	return gulp.src(jsFiles)
		.pipe(jscs(jscsConfig));
});

gulp.task('run', function () {
	browserSync.init({
		server: {
			baseDir: './'
		},
		port: 3000,
		ui: {
			port: 3001,
			weinre: {
				port: 3002
			}
		},
		files: ['./src', './demo/*'],
		reloadDelay: 0,
		open: false
	});
});
