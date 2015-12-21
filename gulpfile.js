var gulp = require("gulp"),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;

gulp.task('server', function(){
	browserSync.init({
		notify:false,
		port: 8000,
		proxy: 'http://loftblog/app'
	});
});

gulp.task('watch', function(){
	gulp.watch([
		'app/*.html',
		'app/js/**/*.js',
		'app/css/**/*.css'
	]).on('change', browserSync.reload);
});

gulp.task('default', ['server', 'watch']);
