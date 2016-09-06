'use strict';

/**
 * @ngdoc function
 * @name personalWebsiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the personalWebsiteApp
 */
angular.module('personalWebsiteApp')
  .controller('ContactCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.goTo = function(url){
      window.location.href = url;
    }

    $scope.open = function(url){
      window.open(
        url,
        '_blank' // <- This is what makes it open in a new window.
      );
    }
  });
