var controllerModule = angular.module("controllerModule", []);
controllerModule.controller("mainC", function () {

});
controllerModule.controller("navC", function () {

});
controllerModule.controller("businessC", function ($scope) {
    $scope.arr=[
        {
            name:"李杰",
            number:"13698200146",
            address:"山西省五台县"
        }
    ];
});