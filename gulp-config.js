const VENDOR_PATH = 'bower_components/';
const DEV_PATH    = 'dev/';
const DIST_PATH   = 'dist/';

module.exports = {
	// ---------------- //
	// Javascript Paths //
	// ---------------- //
	Vendor_JS : [
		VENDOR_PATH + 'angular/angular.min.js',
		VENDOR_PATH + 'angular-ui-router/angular-ui-router.min.js',
		VENDOR_PATH + 'modernizr/modernizr.js',
	],
	Dev_JS : [
		DEV_PATH + '/scripts/app.js',
		DEV_PATH + '/scripts/services/*.js',
		DEV_PATH + '/scripts/controllers/*.js',
		DEV_PATH + '/scripts/components/*.js',
		DEV_PATH + '/scripts/config.js'
	],
	Dist_JS : DIST_PATH + '/scripts/',
	// ---------- //
	// SCSS Paths //
	// ---------- //
	Vendor_SCSS : [

	],
	Dev_Watchable_SCSS : [
		DEV_PATH + '/scss/*.scss'
	],
	Dev_SCSS : [
		DEV_PATH + '/scss/app.scss'
	],
	Dist_SCSS : DIST_PATH + 'css/',
	// ---------- //
	// Html Views //
	// ---------- //
	Dev_Views : [
		DEV_PATH + 'views/**/*.html'
	],
	Dist_Views : DIST_PATH + 'views/',
	// ----------- //
	// Image Paths //
	// ----------- //
	Images : [
		DEV_PATH + '/images/*.svg',
		DEV_PATH + '/images/*.png',
		DEV_PATH + '/images/*.jpg',
		DEV_PATH + '/images/*.jpeg',
	],
	Dist_Images : DIST_PATH + 'images/',
};