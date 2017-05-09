var controllerModule = angular.module("controllerModule", []);
controllerModule.controller("mainC", function () {

});
controllerModule.controller("navC", function () {
    var ni = document.getElementsByClassName("header");
    console.log(ni);
});