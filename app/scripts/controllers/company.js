'use strict';

/**
 * @ngdoc function
 * @name capsotestApp.controller:CompaniesCtrl
 * @description
 * # CompaniesCtrl
 * Controller of the capsotestApp
 */
angular.module('capsotestApp')
    .controller('CompanyCtrl', ['$scope', 'GetDataService', '$stateParams', '$state', function($scope, GetDataService, $stateParams, $state) {
        
        GetDataService.getCompaniesData(function(data) {
            for (var i in data.results) {
                if (data.results[i].companyId === parseInt($stateParams.coId)) {
                    $scope.company = data.results[i];
                }
            }
        }) ;
        /* Toggle state between company and company.companybonds */
        $scope.toggleBondsState = function() {
            if (!$state.is('company.companybonds')) {
                $state.go('company.companybonds') ;
            } else {
                $state.go('company') ;
            }
        } ;
        
        GetDataService.getBondsData(function(data) {
            $scope.companyBonds = {};
            var bonds = data;   
            for (var bond in bonds) {
                if (bonds[bond].issuerId === parseInt($stateParams.coId)) {
                    $scope.companyBonds[''+bond+''] = bonds[bond];
                }
            }


            for (var i in $scope.companyBonds) {

                $scope.companyBonds[i].bondId = i;
                $scope.companyBonds[i].lastPrice = $scope.companyBonds[i].prices[$scope.companyBonds[i].prices.length -1].price.toFixed(2);
                $scope.companyBonds[i].secondFromLastPrice = $scope.companyBonds[i].prices[$scope.companyBonds[i].prices.length -2].price .toFixed(2);
                $scope.companyBonds[i].change = ($scope.companyBonds[i].prices[$scope.companyBonds[i].prices.length -1].price - $scope.companyBonds[i].prices[$scope.companyBonds[i].prices.length -2].price).toFixed(2);
                $scope.companyBonds[i].couponRate = $scope.companyBonds[i].couponRate.toFixed(2);
                
            }
            

                
        }) ;
}]);