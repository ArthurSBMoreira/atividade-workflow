var gulp 		= require("gulp");
var sass 		= require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

gulp.task('compilar-css', function() {
	return gulp.src('./source/scss/*.scss')
			.pipe(sass({compressed: true}))
    		.pipe(gulp.dest('./dist/css'));		   
});

gulp.task('compilar-html', function() {
	return gulp.src('./source/*.html')
			.pipe(htmlmin({collapseWhitespace: true}))
    	.pipe(gulp.dest('./dist'));		   
});

gulp.task('background', function() {
	 gulp.watch('./source/scss/**/*.scss', ['compilar-css']);
	 gulp.watch('./source/*.html', ['compilar-html']);
});