var myApp = angular.module("myApp",["ngRoute","controllerModule"]);

myApp.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"templateView/startPages.html",
        controller:"homeC"
    });
})

