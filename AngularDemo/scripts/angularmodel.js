/// <reference path="angular.js" />

var app = angular
            .module("myModule", [])
            .controller("myController", function ($scope, $http) {

                $http.get('EmployeeService.asmx/getAllEployees')
                .then(function (response) {
                    $scope.employees = response.data;
                });

            });