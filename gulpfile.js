var gulp = require('gulp');
var webpack = require('webpack-stream');
var WebpackDevServer = require("webpack-dev-server");
var rename = require("gulp-rename");


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