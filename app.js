'use strict';

// ------------------ //
// Import config file //
// ------------------ //
const config = require('./config');
// ---------------- //
// App Dependencies //
// ---------------- //
const express = require('express');
const ejs     = require('ejs');
// -------------- //
// Initialize App //
// -------------- //
const app = express();

// -------------------------------------------------- //
// Configurate Production and Development Enviorments //
// -------------------------------------------------- //
let viewPath;

if (process.env.NODE_ENV === 'production') {
	viewPath = './views/';
} else {
	viewPath = './dist/views/';

	app.engine('html', ejs.renderFile);
	app.set('views', __dirname + viewPath);
}

app.set('view engine', 'ejs');

// ------------------ //
// Application Routes //
// ------------------ //

// ----- //
// Index //
// ----- //
app.get('*', function(request, response, next) {
	response.sendfile(viewPath + 'index.html');
});

// ------------- //
// Start the app //
// ------------- //
const port = process.env.PORT || config.port;

app.listen(port, function() {
	console.log('Express is serving at: '+port);
});