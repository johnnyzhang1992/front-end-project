'use strict';

/**
 * @ngdoc function
 * @name baidumapApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the baidumapApp
 */
angular.module('baidumapApp')
  .controller('AddCtrl', function ($scope, $http) {
      $http.get("data/data.json")
          .success(
              function(response) {
                  $scope.poi_data = response.poi_data;
                  $scope.id = response.poi_data.length+1;
              }
          );
      $scope.title = "添加一个新的足迹";
      $scope.addNewPoi = function () {
          
      }
  });
