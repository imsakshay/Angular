/// <reference path="angular.js" />

var app = angular
            .module("myModule", [])
            .controller("myController", function ($scope) {

                var employee = [
                    { name: "kakashi", gender: "Male", age: 32 },
                {name : "naruto" , gender : "Male", age : 21 },
                {name : "sakura" , gender : "Female", age : 20 }

                ]
                $scope.employee = employee;

            });