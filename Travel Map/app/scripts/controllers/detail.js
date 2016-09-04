/**
 * Created by zq199 on 2016/9/4.
 * Detail.html controller
 */
angular.module('baidumapApp')
    .controller('DetailCtrl',function ($scope, $http,$routeParams) {
        $http.get("data/data.json")
            .success(
                function(response) {
                    $scope.poi_data = response.poi_data;
                    $scope.poi = response.poi_data[$routeParams.id];
                }
                );

    });