var gulp = require('gulp'),
	webpack = require('webpack-stream'),
	WebpackDevServer = require("webpack-dev-server"),
	rename = require("gulp-rename"),
	livereload = require('gulp-livereload');
	

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
	.pipe(gulp.dest('./'))
	.pipe(livereload());
});

gulp.task('copy-css', function() {
	gulp.src([
			'!./src/includes/css/loader.css',
			'./src/includes/css/*.css'
		])
	.pipe(gulp.dest('./public/css'))
	.pipe(livereload());
});

gulp.task('copy-font', function() {
	gulp.src('./src/includes/bootstrap/*/*')
	.pipe(gulp.dest('./public/bootstrap'));
});


gulp.task('copy-images', function() {
	gulp.src('./src/includes/images/*')
	.pipe(gulp.dest('./public/images'))
	.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('./src/**/**/*.js', ['default']);
});