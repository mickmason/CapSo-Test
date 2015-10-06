'use strict';

/**
 * @ngdoc function
 * @name capsotestApp.controller:CompaniesCtrl
 * @description
 * # CompaniesCtrl
 * Controller of the capsotestApp
 */
angular.module('capsotestApp')
    .controller('CompaniesCtrl', ['$scope', 'GetDataService', function($scope, GetDataService) {
        /* Use the data service to get all companies, put them on the scope */
        GetDataService.getCompaniesData(function(data) {            
            $scope.companies = angular.fromJson(data.results);   
        });
}]);
