// ----------- //
// Import Gulp //
// ----------- //
const gulp   = require('gulp');
const config = require('./gulp-config');
// -------- //
// Pluggins //
// -------- //
const sass      = require('gulp-sass');
const concat    = require('gulp-concat');
const uglify    = require('gulp-uglify');
const rename    = require('gulp-rename');
const ts        = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
// --------------------------------------------- //

// ---------- //
// Gulp Tasks //
// ---------- //

// ---- //
// SASS //
// ---- //
gulp.task('sass', function() {
    return gulp.src(config.Dev_SCSS)
        .pipe(sass({
                outputStyle : 'compressed'
            }))
        .pipe(concat('app.css'))
        .pipe(gulp.dest(config.Dist_SCSS))
});

// ------------------------------ //
// Concatenate & Minify Vendor JS //
// ------------------------------ //
gulp.task('vendor', function() {
    return  tsProject.src()
                  .pipe(concat('vendor.js'))
                  .pipe(gulp.dest(config.Dist_JS))
                  .pipe(rename('vendor.min.js'))
                  .pipe(uglify())
                  .pipe(gulp.dest(config.Dist_JS));
});

// ----------------------- //
// Concatenate & Minify JS //
// ----------------------- //
gulp.task('scripts', function() {
    return 	tsProject.src()
                  .pipe(ts(tsProject))
		          .pipe(concat('app.js'))
		          .pipe(gulp.dest(config.Dist_JS))
		          .pipe(rename('app.min.js'))
		          .pipe(uglify())
	              .pipe(gulp.dest(config.Dist_JS));
});

// ----------------------- //
// Watch Files For Changes //
// ----------------------- //
gulp.task('watch', function() {
    gulp.watch(config.Dev_JS, ['scripts']);
    gulp.watch(config.Dev_SCSS, ['sass']);
});

// ------------ //
// Default Task //
// ------------ //
gulp.task('default', ['sass', 'scripts', 'watch']);

