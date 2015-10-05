'use strict';

/* Services */
angular.module('capsotestApp').service('GetDataService', function($http) {
        return {
            getCompaniesData: function(cb) {
                $http.get('http://localhost:8888/Capsco/data/companies.php').then(function(resp) {
                        cb(resp.data);
                    }, function() {
                        cb('There was an error');
                });     
            },
            getBondsData: function(cb) {
                $http.get('http://localhost:8888/Capsco/data/bonds.php').then(function(resp) {
                        cb(resp.data);
                    }, function() {
                        cb('There was an error');
                });     
            }
        };
});