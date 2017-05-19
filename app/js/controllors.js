var controllersModule = angular.module("controllerModule", []);

controllersModule.controller("mainC", function () {

});


controllersModule.controller("homeC", function ($scope) {
    $scope.car1 = ["../images/home-page/decorate-1-1.png","../images/home-page/decorate-1-2.png","../images/home-page/decorate-1-3.png"]
    $scope.car2 = ["../images/home-page/decorate-1-4.png","../images/home-page/decorate-1-5.png","../images/home-page/decorate-1-6.png"]

    $scope.hotel1 = ["../images/home-page/hotel-2.png","../images/home-page/hotel-3.png","../images/home-page/hotel-4.png"]
    $scope.hotel2 = ["../images/home-page/hotel-5.png","../images/home-page/hotel-6.png","../images/home-page/hotel-7.png"]

    $scope.cloth1 = ["../images/home-page/clothing-2.png","../images/home-page/clothing-3.png","../images/home-page/clothing-4.png"]
    $scope.cloth2 = ["../images/home-page/clothing-5.png","../images/home-page/clothing-6.png","../images/home-page/clothing-7.png"]

    $scope.build1 = ["../images/home-page/build-2.png","../images/home-page/build-3.png","../images/home-page/build-4.png"]
    $scope.build2 = ["../images/home-page/build-5.png","../images/home-page/build-6.png","../images/home-page/build-7.png"]

    $scope.sift = ["../images/home-page/sift1.png","../images/home-page/sift-3.png","../images/home-page/sift-4.png","../images/home-page/sift-5.png","../images/home-page/sift-6.png","../images/home-page/sift-7.png","../images/home-page/sift-8.png","../images/home-page/sift-9.png","../images/home-page/sift-10.png","../images/home-page/sift-11.png","../images/home-page/sift-12.png","../images/home-page/sift-13.png"]
});


//精品商家
controllersModule.controller("businessC", function ($scope) {
    $scope.business = [
        {
            imgSrc1:"../images/navImg/business-1.png",
            name:"李杰",
            inpone:"18699563265",
            address:"山西省五台县"
        },{
            imgSrc1:"../images/navImg/business-1.png",
            name:"李杰",
            inpone:"18699563265",
            address:"山西省五台县"
        },{
            imgSrc1:"../images/navImg/business-1.png",
            name:"李杰",
            inpone:"18699563265",
            address:"山西省五台县"
        },{
            imgSrc1:"../images/navImg/business-1.png",
            name:"李杰",
            inpone:"18699563265",
            address:"山西省五台县"
        },{
            imgSrc1:"../images/navImg/business-1.png",
            name:"李杰",
            inpone:"18699563265",
            address:"山西省五台县"
        },{
            imgSrc1:"../images/navImg/business-1.png",
            name:"李杰",
            inpone:"18699563265",
            address:"山西省五台县"
        },{
            imgSrc1:"../images/navImg/business-1.png",
            name:"李杰",
            inpone:"18699563265",
            address:"山西省五台县"
        },{
            imgSrc1:"../images/navImg/business-1.png",
            name:"李杰",
            inpone:"18699563265",
            address:"山西省五台县"
        },
    ]

});
//今日特价
controllersModule.controller("specialC", function ($scope) {
    $scope.special=[{imgSrc:"../images/navImg/special-5.png",title:"自家礼包送亲人，送朋友的不二选择",priceB:"￥20.0",priceA:"￥11.8"},{imgSrc:"../images/navImg/special-6.png",title:"自家礼包送亲人，送朋友的不二选择",priceB:"￥20.0",priceA:"￥11.8"},{imgSrc:"../images/navImg/special-7.png",title:"自家礼包送亲人，送朋友的不二选择",priceB:"￥20.0",priceA:"￥11.8"},{imgSrc:"../images/navImg/special-8.png",title:"自家礼包送亲人，送朋友的不二选择",priceB:"￥20.0",priceA:"￥11.8"},{imgSrc:"../images/navImg/special-9.png",title:"自家礼包送亲人，送朋友的不二选择",priceB:"￥20.0",priceA:"￥11.8"},{imgSrc:"../images/navImg/special-5.png",title:"自家礼包送亲人，送朋友的不二选择",priceB:"￥20.0",priceA:"￥11.8"},{imgSrc:"../images/navImg/special-6.png",title:"自家礼包送亲人，送朋友的不二选择",priceB:"￥20.0",priceA:"￥11.8"},{imgSrc:"../images/navImg/special-7.png",title:"自家礼包送亲人，送朋友的不二选择",priceB:"￥20.0",priceA:"￥11.8"},{imgSrc:"../images/navImg/special-8.png",title:"自家礼包送亲人，送朋友的不二选择",priceB:"￥20.0",priceA:"￥11.8"},{imgSrc:"../images/navImg/special-9.png",title:"自家礼包送亲人，送朋友的不二选择",priceB:"￥20.0",priceA:"￥11.8"}];

});
//积分商城
controllersModule.controller("integralC", function ($scope) {
    $scope.integral = [{imgSrc:"../images/navImg/integral-1.png",title:"自家礼包送亲人，送朋友的不二选择",integral:"积分：50",price:"￥20.0"},{imgSrc:"../images/navImg/integral-1.png",title:"自家礼包送亲人，送朋友的不二选择",integral:"积分：50",price:"￥20.0"},{imgSrc:"../images/navImg/integral-1.png",title:"自家礼包送亲人，送朋友的不二选择",integral:"积分：50",price:"￥20.0"},{imgSrc:"../images/navImg/integral-1.png",title:"自家礼包送亲人，送朋友的不二选择",integral:"积分：50",price:"￥20.0"},{imgSrc:"../images/navImg/integral-1.png",title:"自家礼包送亲人，送朋友的不二选择",integral:"积分：50",price:"￥20.0"},{imgSrc:"../images/navImg/integral-1.png",title:"自家礼包送亲人，送朋友的不二选择",integral:"积分：50",price:"￥20.0"},{imgSrc:"../images/navImg/integral-1.png",title:"自家礼包送亲人，送朋友的不二选择",integral:"积分：50",price:"￥20.0"},{imgSrc:"../images/navImg/integral-1.png",title:"自家礼包送亲人，送朋友的不二选择",integral:"积分：50",price:"￥20.0"},{imgSrc:"../images/navImg/integral-1.png",title:"自家礼包送亲人，送朋友的不二选择",integral:"积分：50",price:"￥20.0"},{imgSrc:"../images/navImg/integral-1.png",title:"自家礼包送亲人，送朋友的不二选择",integral:"积分：50",price:"￥20.0"}
    ]

});

//footerD控制器
controllersModule.controller("footerC", function ($scope) {

});




