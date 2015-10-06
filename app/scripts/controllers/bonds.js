'use strict';

/**
 * @ngdoc function
 * @name capsotestApp.controller:CompaniesCtrl
 * @description
 * # CompaniesCtrl
 * Controller of the capsotestApp
 */
angular.module('capsotestApp')
    .controller('BondsCtrl', ['$scope', 'GetDataService', '$stateParams', '$state', function($scope, GetDataService, $stateParams, $state) {
        GetDataService.getBondsData(function(data) {
            $scope.bond = {};
            var bonds = data;
            for (var bond in bonds) {
                if (parseInt(bond) === parseInt($stateParams.bondId)) {
                    $scope.bond = bonds[bond];
                }
            }        
            console.log($scope.bond.prices.length) ;
            $scope.bond.priceHistory = [] ;
            for (var i=($scope.bond.prices.length - 1); i>=5; i -= 6) {
                //console.log(i) ;    
                $scope.bond.priceHistory.push($scope.bond.prices[i]) ;
            }
            console.log($scope.bond.priceHistory[0].timestamp) ;
        }) ;
}]);