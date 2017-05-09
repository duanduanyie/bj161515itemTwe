var myApp = angular.module("myApp",["ngRoute","controllerModule"]);

myApp.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"templateView/home.html",
        controller:"homeC"
    });
})

