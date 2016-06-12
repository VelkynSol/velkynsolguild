// ----------- //
// Import Gulp //
// ----------- //
const gulp = require('gulp');
// -------- //
// Pluggins //
// -------- //
const sass   = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// ---------- //
// Gulp Tasks //
// ---------- //

// ------------------ //
// Javascript Linting //
// ------------------ //
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// ---- //
// SASS //
// ---- //
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// ----------------------- //
// Concatenate & Minify JS //
// ----------------------- //
gulp.task('scripts', function() {
    return 	gulp.src('./dev/scripts/*.js')
		        .pipe(concat('app.js'))
		        .pipe(gulp.dest('./dist/scripts'))
		        .pipe(rename('app.min.js'))
		        .pipe(uglify())
		        .pipe(gulp.dest('./dist/scripts'));
});

// ----------------------- //
// Watch Files For Changes //
// ----------------------- //
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// ------------ //
// Default Task //
// ------------ //
gulp.task('default', ['scripts']);

