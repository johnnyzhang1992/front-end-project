'use strict';

/**
 * @ngdoc overview
 * @name htmlBlogApp
 * @description
 * # htmlBlogApp
 *
 * Main module of the application.
 */
angular
  .module('htmlBlogApp', [
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
      .otherwise({
        redirectTo: '/'
      });
  });
