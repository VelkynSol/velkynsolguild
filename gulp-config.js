const VENDOR_PATH = 'bower_components/';
const DEV_PATH    = 'dev/';
const DIST_PATH   = 'dist/';

module.exports = {
	// ---------------- //
	// Javascript Paths //
	// ---------------- //
	Vendor_JS : [
		VENDOR_PATH + 'angular/angular.min.js',
		VENDOR_PATH + 'modernizr/modernizr.js'
	],
	Dev_JS : [
		DEV_PATH + '/scripts/*.ts'
	],
	Dist_JS : DIST_PATH + '/scripts/',
	// ---------- //
	// SCSS Paths //
	// ---------- //
	Vendor_SCSS : [

	],
	Dev_SCSS : [
		DEV_PATH + '/scss/app.scss'
	],
	Dist_SCSS : DIST_PATH + 'css/',
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