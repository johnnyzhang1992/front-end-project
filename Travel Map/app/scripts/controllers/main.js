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

        $scope.get_latlng = function () {
            //单击获取点击的经纬度
            bdMapController.map.addEventListener("click", function (e) {
                console.log(e.point.lat);
                console.log(e.point.lng);
                current_lat = e.point.lat;
                current_lng = e.point.lng;
                $scope.current_lat = current_lat;
                $scope.current_lng = current_lng;
            });
        };
        $scope.box_show = true;
        $scope.tool_toogle_box = function () {
            $scope.box_show = !$scope.box_show;
        };
        $scope.measure = function () {
            bdMapController.render.open_distance_tool()
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



