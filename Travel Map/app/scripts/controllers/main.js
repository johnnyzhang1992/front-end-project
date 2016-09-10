'use strict';

/**
 * @ngdoc function
 * @name baidumapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the baidumapApp
 */
angular.module('baidumapApp')
    .controller('MainCtrl',function ($scope) {
        // window.onload = loadJScript();  //异步加载地图
        $(document).ready(
            bdMapController.init.handle(function () {
                bdMapController.render.addMarker();
            })
        );
        $scope.box_show = true;
        $scope.tool_toogle_box = function () {
            $scope.box_show = !$scope.box_show;
        };
        $scope.measure = function () {
            console.log('tool-open');
         bdMapController.render.open_distance_tool()
        }
    })
    .controller('poiController',function ($scope, $http) {
        $http.get("data/data.json")
            .success(function(response) {
                $scope.poi_data = response.poi_data;
            });
    })
    .controller('SearchCtrl',function ($scope) {
        $scope.clear = false;

        $scope.input_change = function () {
            $scope.sole_input =$('#sole-input').val();
            // console.log($scope.sole_input.length);
            if($scope.sole_input.length>=2){
                $scope.clear = true;
            }else{
                $scope.clear = false;
            }
        };
        $scope.clear_input = function () {
            $scope.sole_input= '';
            $scope.clear = false;
        };
        $scope.route_loading = function () {
            
        }
    });



