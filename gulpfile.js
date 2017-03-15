var gulp = require("gulp");
var sqwish = require('gulp-sqwish');

gulp.task('move-scss', function() {
	return gulp.src('./source/scss/*.scss')
			.pipe(sqwish())
    		.pipe(gulp.dest('./dist/css'));		   
});

gulp.task('background', function() {
	return gulp.watch('./source/**', ['move-scss']);
});