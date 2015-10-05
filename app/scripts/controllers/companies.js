'use strict';

/**
 * @ngdoc function
 * @name capsotestApp.controller:CompaniesCtrl
 * @description
 * # CompaniesCtrl
 * Controller of the capsotestApp
 */
angular.module('capsotestApp')
    .controller('CompaniesCtrl', function($scope, GetDataService) {
        $scope.greeting = 'Hello';
        GetDataService.getCompaniesData(function(data) {            
            $scope.companies = angular.fromJson(data.results);   
            console.log($scope.companies);
        });
});
