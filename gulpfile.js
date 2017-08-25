var gulp = require('gulp'),
	webpack = require('webpack-stream'),
	WebpackDevServer = require("webpack-dev-server"),
	rename = require("gulp-rename"),
	livereload = require('gulp-livereload');


livereload({ start: true });

gulp.task('default', ['build', 'copy-css', 'copy-font', 'copy-images']);

var renameTheFile = {
	dirname: "public",
	prefix: "bundle",
	basename: "",
	suffix: "",
	extname: ".js"
}

gulp.task('build', function() {
	return gulp.src('src/index.js')
	.pipe(webpack(require('./webpack.config.js')))
	.pipe(rename(renameTheFile))
	.pipe(gulp.dest('./'));
});

gulp.task('copy-css', function() {
	gulp.src('./src/includes/css/*.css')
	.pipe(gulp.dest('./public/css'));
});

gulp.task('copy-font', function() {
	gulp.src('./src/includes/bootstrap/*/*')
	.pipe(gulp.dest('./public/bootstrap'));
});


gulp.task('copy-images', function() {
	gulp.src('./src/includes/images/*')
	.pipe(gulp.dest('./public/images'));
});

gulp.task('watch', function() {
	gulp.watch('./src/**/**/*.js', ['default']);
});