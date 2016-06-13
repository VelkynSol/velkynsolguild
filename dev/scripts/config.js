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