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
        var current_lat,current_lng;
        $(document).ready(
            bdMapController.init.handle(function () {
                bdMapController.render.addMarker();
            })
        );
        $scope.remove_latlng = true;
        $scope.get_latlng = function () {
            $scope.remove_latlng = !$scope.remove_latlng;
            //单击获取点击的经纬度
            bdMapController.map.addEventListener("click", function (e) {
                $('#current_lat').html("纬度："+e.point.lat);
                $('#current_lng').html("经度："+e.point.lng);
            });
        };
        $scope.box_show = true;
        $scope.tool_toogle_box = function () {
            $scope.box_show = !$scope.box_show;
        };
        $scope.measure = function () {
            bdMapController.render.open_distance_tool()
        };
        $scope.hide_latlng = function () {
            $scope.remove_latlng = true;
            // bdMapController.map.removeEventListener("click", function () {});
        };

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



