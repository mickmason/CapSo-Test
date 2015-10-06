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
        /** 
            Get all company data. 
            Parse out any data for the specific company using the coId stateParam 
            Add it to the $scope
        */
        GetDataService.getCompaniesData(function(data) {
            for (var i in data.results) {
                if (data.results[i].companyId === parseInt($stateParams.coId)) {
                    $scope.company = data.results[i];
                }
            }
        }) ;
        /* Toggles state between company and company.companybonds */
        $scope.toggleBondsState = function() {
            if (!$state.is('company.companybonds')) {
                $state.go('company.companybonds') ;
            } else {
                $state.go('company') ;
            }
        };
        /* This gets the bonds data for the company and adds it to the scope */
        GetDataService.getBondsData(function(data) {
            $scope.companyBonds = {};
            var bonds = data;   
            /** Get the bonds **/
            for (var bond in bonds) {
                if (bonds[bond].issuerId === parseInt($stateParams.coId)) {
                    $scope.companyBonds[''+bond+''] = bonds[bond];
                }
            }

            /** I add some properties to each bond to make the information more useful, all decimals are rounded down to .00 */
            for (var i in $scope.companyBonds) {
                /* Last price for the bond */
                $scope.companyBonds[i].lastPrice = $scope.companyBonds[i].prices[$scope.companyBonds[i].prices.length -1].price.toFixed(2);
                /* Second from last price */
                $scope.companyBonds[i].secondFromLastPrice = $scope.companyBonds[i].prices[$scope.companyBonds[i].prices.length -2].price .toFixed(2);
                /* +/- Change between the two */ 
                $scope.companyBonds[i].change = ($scope.companyBonds[i].prices[$scope.companyBonds[i].prices.length -1].price - $scope.companyBonds[i].prices[$scope.companyBonds[i].prices.length -2].price).toFixed(2);
                /* Round the coupon rate up or down to two 00s */
                $scope.companyBonds[i].couponRate = $scope.companyBonds[i].couponRate.toFixed(2);                
            }
        });
}]);