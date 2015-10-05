'use strict';

/**
 * @ngdoc function
 * @name capsotestApp.controller:CompaniesCtrl
 * @description
 * # CompaniesCtrl
 * Controller of the capsotestApp
 */
angular.module('capsotestApp')
    .controller('CompanyCtrl', ['$scope', 'GetDataService', '$stateParams', function($scope, GetDataService, $stateParams) {
        console.log($stateParams);
        
        GetDataService.getCompaniesData(function(data) {
            
            for (var i in data.results) {
                console.log(data.results[i]);
                if (data.results[i].companyId == $stateParams.coId) {
                    $scope.company = data.results[i];
                }
                
            }
            console.log($scope.company);
        }) ;
}]);