
var myApp = angular.module("myApp",["controllerModule","ngRoute"]);
myApp.config(function ($routeProvider) {
    $routeProvider.when("/home",{
        templateUrl: "templateView/home.html",
        controller:"homeC"
    }).when("/video",{
        templateUrl: "templateView/video.html",
        controller:"videoC"
    }).when("/shopping",{
        templateUrl: "templateView/shopping.html",
        controller:"shoppingC"
    }).when("/my",{
        templateUrl: "templateView/my.html",
        controller:"myC"
    }).when("/moreVideo",{
        templateUrl: "templateView/moreVideo.html",
        controller:"moreVideoC"
    }).when("/giftList",{
        templateUrl: "templateView/giftList.html",
        controller:"giftListC"
    }).when("/strategy",{
        templateUrl: "templateView/strategy.html",
        controller:"strategyC"
    }).when("/raiders",{
        templateUrl: "templateView/raiders.html",
        controller:"raidersC"
    }).otherwise({
        redirectTo: "/home"
    });
})



