'use strict';

const path 				= require('path');
const gulp 				= require('gulp');
const sass 				= require('gulp-sass');
const sourcemaps 	= require('gulp-sourcemaps');

var path_to = {
	src: {
		sass: path.join(__dirname, 'src', 'sass')
	},
	dist: {
		css: path.join(__dirname, 'css')
	}
};

gulp.task('default', ['css:dist']);

gulp.task('css:watch', () => {
	gulp.watch([path_to.src.sass + '/**/*.scss', path_to.src.sass + '/**/*.sass'], ['css:dev']);
});

gulp.task('css:dev', () => {
	return gulp.src([path_to.src.sass + '/**/*.scss', path_to.src.sass + '/**/*.sass'])
    	.pipe(sass().on('error', sass.logError))
    	.pipe(gulp.dest(path_to.dist.css));
});

gulp.task('css:dist', () => {
	return gulp.src([path_to.src.sass + '/**/*.scss', path_to.src.sass + '/**/*.sass'])
    	.pipe(sass({
    		outputStyle: 'compressed'
    	}).on('error', sass.logError))
    	.pipe(gulp.dest(path_to.dist.css));
});