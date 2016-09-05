/**
 * Created by zq199 on 2016/9/4.
 * Detail.html controller
 */
'use strict';
angular.module('baidumapApp')
    .controller('DetailCtrl',function ($scope, $http,$routeParams) {
        $http.get("data/data.json")
            .success(
                function(response) {
                    $scope.poi_data = response.poi_data;
                    $scope.poi = response.poi_data[$routeParams.id];
                }
            );
        $scope.savePoi = function () {
            $scope.poi.id = $scope.id;
            $scope.poi.lat = $scope.lat;
            $scope.poi.lng = $scope.lng;
            $scope.poi.name = $scope.name;
            $scope.poi.address = $scope.address;
            $scope.poi.description = $scope.description;
            $scope.poi_data.push($scope.poi);
            $http({
                url:'/data/data.json',
                method: 'get',
                data: {
                    id:$scope.id,
                    lat:$scope.lat,
                    lng:$scope.lng,
                    name:$scope.name,
                    address:$scope.address,
                    tag:$scope.tag,
                    description:$scope.description
                }
            }).success(function(){
                console.log("success!");
            }).error(function(){
                console.log("error");
            });
            // $http.post("data/data.json")
            //     .success(
            //         function(response) {
            //             $scope.poi_data = response.poi_data;
            //             $scope.poi = response.poi_data[$routeParams.id];
            //         }
            //     );
        };

    });