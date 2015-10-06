'use strict';

/* Services */
angular.module('capsotestApp').service('GetDataService', function($http) {
        return {
            /* Gets all companies data */
            getCompaniesData: function(cb) {
                $http.get('http://localhost:8888/Capsco/data/companies.php').then(function(resp) {
                        cb(resp.data);
                    }, function() {
                        cb('There was an error');
                });     
            },
            /* Gets all bonds data */
            getBondsData: function(cb) {
                $http.get('http://localhost:8888/Capsco/data/bonds.php').then(function(resp) {
                        cb(resp.data);
                    }, function() {
                        cb('There was an error');
                });     
            }
        };
});