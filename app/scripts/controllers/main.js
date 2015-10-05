'use strict';

/**
 * @ngdoc function
 * @name capsotestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the capsotestApp
 */
angular.module('capsotestApp')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
});