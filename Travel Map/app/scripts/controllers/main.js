'use strict';

/**
 * @ngdoc function
 * @name baidumapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the baidumapApp
 */
angular.module('baidumapApp')
    .controller('MainCtrl',function () {
        // window.onload = loadJScript();  //异步加载地图
        $(document).ready(
            bdMapController.init.handle(function () {
                bdMapController.render.addMarker();
            })
        );
    })
    .controller('poiController',function ($scope, $http) {
        $http.get("data/data.json")
            .success(function(response) {$scope.poi_data = response.poi_data;});
    });



