'use strict';

/**
 * @ngdoc overview
 * @name personalWebsiteApp
 * @description
 * # personalWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('personalWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl',
        controllerAs: 'portfolio'
      })
      .when('/materials/382b', {
        templateUrl: 'views/materials-382b.html',
        controller: 'Materials382bCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/classes/mus382b', {
        templateUrl: 'views/mus382b.html',
        controller: 'Mus382bCtrl',
        controllerAs: 'mus382b'
      })
      .when('/classes/mus482b', {
        templateUrl: 'views/mus482b.html',
        controller: 'Mus482bCtrl',
        controllerAs: 'mus482b'
      })
      .when('/classes/mus485', {
        templateUrl: 'views/mus485.html',
        controller: 'Mus485Ctrl',
        controllerAs: 'mus485'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);
