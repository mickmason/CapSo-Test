'use strict';

/**
 * @ngdoc overview
 * @name capsotestApp
 * @description
 * # capsotestApp
 *
 * Main module of the application.
 */
angular
  .module('capsotestApp', [
    'ngAnimate',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]).config(function($stateProvider, $urlRouterProvider) {
	  
	  $urlRouterProvider.otherwise("/");

 	 $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "views/main.html",
      controler: 'MainCtrl'
    });
});
