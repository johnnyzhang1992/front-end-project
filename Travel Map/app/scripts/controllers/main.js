'use strict';

/**
 * @ngdoc function
 * @name baidumapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the baidumapApp
 */
angular.module('baidumapApp')
    .controller('MainCtrl',function ($scope,$http) {
        $http.get("data/data.json")
            .success(function(response) {
                $scope.poi_data = response.poi_data;
            });
        // window.onload = loadJScript();  //异步加载地图
        var current_lat,current_lng;
        $(document).ready(
            bdMapController.init.handle(function () {
                bdMapController.render.addMarker();
            })
        );
        $scope.searchbox_toggle = false;
        $scope.remove_latlng = true;
        $scope.get_latlng = function () {
            $scope.remove_latlng = !$scope.remove_latlng;
            //单击获取点击的经纬度
            bdMapController.map.addEventListener("click", function (e) {
                $('#current_lat').html("纬度："+e.point.lat);
                $('#current_lng').html("经度："+e.point.lng);
            });
        };
        $scope.box_show = false;
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
        // searchbox
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

        };
        // 百度地图API功能
        function G(id) {
            return document.getElementById(id);
        }

        var ac = new BMap.Autocomplete({//建立一个自动完成的对象
            "input" : "sole-input"
            ,"location" : bdMapController.map
        });

        ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
            var str = "";
            var _value = e.fromitem.value;
            var value = "";
            if (e.fromitem.index > -1) {
                value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
            }
            str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

            value = "";
            if (e.toitem.index > -1) {
                _value = e.toitem.value;
                value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
            }
            str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
            G("searchResultPanel").innerHTML = str;
        });
        function setPlace(){
            bdMapController.map.clearOverlays();    //清除地图上所有覆盖物
            function myFun(){
                var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
                bdMapController.map.centerAndZoom(pp, 18);
                bdMapController.map.addOverlay(new BMap.Marker(pp));    //添加标注
            }
            var local = new BMap.LocalSearch(bdMapController.map, { //智能搜索
                onSearchComplete: myFun
            });
            local.search(myValue);
        }
        var myValue;
        ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
            var _value = e.item.value;
            myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
            G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

            setPlace();
        });
        // routebox
        $scope.route_searchbox = true;
        $scope.route_type= 'bus';
        $scope.route_toggle = function () {
            $scope.route_searchbox = !$scope.route_searchbox;
            $scope.searchbox_toggle = !$scope.searchbox_toggle;
        };
        $scope.show_bus = function () {
            $scope.route_type= 'bus';
        };
        $scope.show_drive = function () {
            $scope.route_type= 'drive';
        };
        $scope.show_walk = function () {
            $scope.route_type= 'walk';
        };
        $scope.show_bike = function () {
            $scope.route_type= 'bike';
        };
        $scope.route_revert =function () {
            //交换起点和终点
            $scope.route_mid = $scope.route_start;
            $scope.route_start = $scope.route_end;
            $scope.route_end = $scope.route_mid;
        }

    });



