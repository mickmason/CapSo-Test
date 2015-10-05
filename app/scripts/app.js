'use strict';

/**
 * @ngdoc overview
 * @name capsotestApp
 * @description
 * # capsotestApp
 *
 * Main module of the application.
 */
angular.module('capsotestApp', [
	'ui.router',
	'ngAnimate',
	'ngResource',
	'ngSanitize',
	'ngTouch'
]).config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('main', {
			url: '/',
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		});
    $stateProvider
		.state('companies', {
			url: '/companies',
			templateUrl: 'views/companies.html',
			controller: 'CompaniesCtrl'
		});
     $stateProvider
		.state('company', {
			url: '/company/:coId',
			templateUrl: 'views/company.html',
			controller: 'CompanyCtrl',

		});
});


