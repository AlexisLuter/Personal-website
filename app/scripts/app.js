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
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/literatureProject', {
        templateUrl: 'views/literatureproject.html',
        controller: 'LiteratureprojectCtrl',
        controllerAs: 'literatureProject'
      })
      .when('/mod1reflection', {
        templateUrl: 'views/mod1reflection.html',
        controller: 'Mod1reflectionCtrl',
        controllerAs: 'mod1reflection'
      })
      .when('/improvMaterials', {
        templateUrl: 'views/improvmaterials.html',
        controller: 'ImprovmaterialsCtrl',
        controllerAs: 'improvMaterials'
      })
      .when('/improvLP', {
        templateUrl: 'views/improvlp.html',
        controller: 'ImprovlpCtrl',
        controllerAs: 'improvLP'
      })
      .when('/compReflection', {
        templateUrl: 'views/compreflection.html',
        controller: 'CompreflectionCtrl',
        controllerAs: 'compReflection'
      })
      .when('/485songReflection', {
        templateUrl: 'views/485songreflection.html',
        controller: '485songreflectionCtrl',
        controllerAs: '485songReflection'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);
