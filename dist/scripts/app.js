var app = angular.module('velkyn', ['ui.router']);
app.component('pageHeader', {
	template: (
		'<header class="page-header" >' +
			'<h2> {{$ctrl.title}} </h2>' +
		'</header>'
	),
	controller: pageHeader_controller
});

function pageHeader_controller () {
	var pageHeader = this;
	
	pageHeader.title = 'Velkyn Sol';

};
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  // --------------------------------------- //
  // For any unmatched url, redirect to home //
  // --------------------------------------- //
  $urlRouterProvider.otherwise("/");
  
  var partialsPath = './views/partials/';

  // ----------------- //
  // Set up the states //
  // ----------------- //
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: partialsPath + "home.html"
    });

}]);