var controllersModule = angular.module("controllerModule", []);

controllersModule.controller("mainC", function () {

});
controllersModule.controller("navC", function () {


});

controllersModule.controller("homeC", function ($scope) {

    (function(list){
        $(".item",list).mouseover(function(){
            var _t = $(this);
            var _p = _t.parent();
            var _l = _t.position().left;
            $(".curr",_p).animate({"left":_l+"px"},200);
            var _i = _t.index();
            var ps = _t.parents("div.marks");
            var currView = ps.next();
            $("ul",currView).eq(_i).addClass("active");
            $("ul",currView).eq(_i).siblings().removeClass("active");
        });
    }($(".small-nav")));

    $scope.car1 = ["images/home-page/decorate-1-1.png","images/home-page/decorate-1-2.png","images/home-page/decorate-1-3.png"]
    $scope.car2 = ["images/home-page/decorate-1-4.png","images/home-page/decorate-1-5.png","images/home-page/decorate-1-6.png"]

    $scope.hotel1 = ["images/home-page/hotel-2.png","images/home-page/hotel-3.png","images/home-page/hotel-4.png"]
    $scope.hotel2 = ["images/home-page/hotel-5.png","images/home-page/hotel-6.png","images/home-page/hotel-7.png"]

    $scope.cloth1 = ["images/home-page/clothing-2.png","images/home-page/clothing-3.png","images/home-page/clothing-4.png"]
    $scope.cloth2 = ["images/home-page/clothing-5.png","images/home-page/clothing-6.png","images/home-page/clothing-7.png"]

    $scope.build1 = ["images/home-page/build-2.png","images/home-page/build-3.png","images/home-page/build-4.png"]
    $scope.build2 = ["images/home-page/build-5.png","images/home-page/build-6.png","images/home-page/build-7.png"]

    $scope.sift = ["images/home-page/sift1.png","images/home-page/sift-3.png","images/home-page/sift-4.png","images/home-page/sift-5.png","images/home-page/sift-6.png","images/home-page/sift-7.png","images/home-page/sift-8.png","images/home-page/sift-9.png","images/home-page/sift-10.png","images/home-page/sift-11.png","images/home-page/sift-12.png","images/home-page/sift-13.png"]
});







