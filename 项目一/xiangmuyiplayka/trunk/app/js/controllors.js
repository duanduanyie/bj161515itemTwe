var controllerModule = angular.module("controllerModule", []);
controllerModule.controller("mainC", function () {

});
controllerModule.controller("homeC", function () {
    var img = document.getElementsByTagName("img");
    var mid1 = document.getElementById("mid1");
    var _left = 0;
    var timer1;
        timer1 = setInterval(function () {
            _left++;
            if (_left > 3) {
                _left = 0;
                mid1.style.transition = "all 0s";
            } else {
                mid1.style.transition = "all 2s";
            }
            mid1.style.marginLeft = -_left * 100 + "%";

        }, 2000);
});
controllerModule.controller("videoC", function () {
    var bol = true;
    $("#videoNav").click(function () {
        var videoW = window.innerWidth + "px";
        $("#videoBox").css("width",videoW);
        if(bol==true){
            $("#videoBox").css("margin-left","72%");
            bol=false;
        }else {
            $("#videoBox").css("margin-left","0");
            bol=true;
        }
    });
    var loginH = window.innerHeight + "px";
    $(".loginContent").css("height",loginH);
    var loginTuAW = $(".loginTuA").width()/2;
    $(".loginTu").css("margin-left",-loginTuAW)
    var vBox = document.getElementById("vBox");
    var x = 0;
    var timer = setInterval(function () {
        x++;
        if(x>3){
            x=0;
            vBox.style.transition = "all 0s";
        }else {
            vBox.style.transition = "all  2s";
        }
        vBox.style.marginLeft = -100*x + "%";
    },2000);
});
controllerModule.controller("moreVideoC", function () {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 1000,
        loop : true,
        speed:1000,
        autoplayDisableOnInteraction : false,
        pagination : '.swiper-pagination',
        paginationClickable :true,
    })
    //最新视频和视频排行的切换
    var div = document.querySelectorAll("#moreVideo1 div div");
    var p = document.querySelectorAll("#moreVideo1 div p");
    console.log(div,p);
    for (var i =0;i<p.length;i++){
        p[i].index = i;
        p[i].onclick=function () {
            for(var i=0;i<div.length;i++){
                div[i].style.display="none";
            }
            for(var i=0;i<p.length;i++){
                p[i].style.color="";
            }
            this.style.color = "rgb(217,39,39)"
            div[this.index].style.display="block";
        }
    }
});
controllerModule.controller("shoppingC", function () {
//商城轮播
$('.owl-carousel').owlCarousel({
    items : 1,
    autoplay:true,
    autoplayTimeout:3000,
//  autoplayHoverPause:true,
    loop:true,
    touchDrag:true,
//  navigation: true,
//	nav:true,	
    dots:true
});
});



controllerModule.controller("myC", function ($scope) {
    //关于我们js部分
    console.log(222);
    $(".aboutA").click(function () {
        $(".about").fadeIn(500);
    });
    $(".aboutBtn").click(function () {
        $(".about").fadeOut(500);
    });
    var aboutH = $(".about").height()/2;
    console.log(-aboutH);
    $(".about").css("margin-top",-aboutH);
});

//我的礼包控制器
controllerModule.controller("giftListC", function ($scope) {
    $scope.giftList = [
        {
            title:"天天酷跑",
            date:"失效日期：2017-09-09",
            imgSrc:"img/myImg/gift-2.png",
            ma:"15s88d16dssd91dsa",
            useIt:"使用教程：进入游戏主界面-点击右上角齿轮-点击兑换-输入兑换么-确定领奖"
        },
        {
            title:"英雄联盟",
            date:"失效日期：2017-09-10",
            imgSrc:"img/myImg/gift-3.png",
            ma:"15s88d16dssd91dsa",
            useIt:"使用教程：进入游戏主界面-点击右上角齿轮-点击兑换-输入兑换么-确定领奖"
        },
        {
            title:"王者荣耀",
            date:"失效日期：2018-03-20",
            imgSrc:"img/myImg/gift-4.png",
            ma:"15s88d16dssd91dsa",
            useIt:"使用教程：进入游戏主界面-点击右上角齿轮-点击兑换-输入兑换么-确定领奖"
        },
        {
            title:"仙剑奇侠",
            date:"失效日期：2021-09-30",
            imgSrc:"img/myImg/gift-5.png",
            ma:"15s88d16dssd91dsa",
            useIt:"使用教程：进入游戏主界面-点击右上角齿轮-点击兑换-输入兑换么-确定领奖"
        }
    ];

    //nav返回上一级按钮
    var giftImg = document.querySelector(".giftNav img");
    giftImg.onclick=function () {
        history.go(-1);
    }
});

//我的收藏部分控制器
controllerModule.controller("strategyC", function ($scope) {
    $scope.strategy=[
        {
            content:"僵尸大战终极副本53关攻略通关视频",
            time:"更新时间：2017.5.8"
        },
        {
            content:"僵尸大战终极副本53关攻略通关视频",
            time:"更新时间：2017.5.8"
        },
        {
            content:"僵尸大战终极副本53关攻略通关视频",
            time:"更新时间：2017.5.8"
        },
        {
            content:"僵尸大战终极副本53关攻略通关视频",
            time:"更新时间：2017.5.8"
        }
    ];
    // $("#tabbar").css("display","none");
    $(".giftNav img").on("click",function () {
        history.go(-1);
    });

    var w = window.innerWidth + "px";
    $scope.touchS = function (index) {
        $(".li").css("width",w);
        $(".li").eq(index).css("marginLeft","-8rem").siblings().css("marginLeft","0rem");
    }
    $scope.clickS = function (index) {
        $(".li a").eq(index).parent().remove();
    }

});


//新手攻略部分控制器
controllerModule.controller("raidersC", function ($scope) {
    $(".giftNav img").on("click",function () {
        history.go(-1);
    });

    $scope.raiders=[{
        raiderImg:"img/myImg/raiders-1.png",
        title:"单排上分最强打野英雄Tops5排行",
        time:"更改时间：2017-6-18"
    },{
        raiderImg:"img/myImg/raiders-2.png",
        title:"单排上分最强打野英雄Tops5排行",
        time:"更改时间：2017-6-18"
    },{
        raiderImg:"img/myImg/raiders-3.png",
        title:"单排上分最强打野英雄Tops5排行",
        time:"更改时间：2017-6-18"
    },{
        raiderImg:"img/myImg/raiders-4.png",
        title:"单排上分最强打野英雄Tops5排行",
        time:"更改时间：2017-6-18"
    },{
        raiderImg:"img/myImg/raiders-5.png",
        title:"单排上分最强打野英雄Tops5排行",
        time:"更改时间：2017-6-18"
    },{
        raiderImg:"img/myImg/raiders-6.png",
        title:"单排上分最强打野英雄Tops5排行",
        time:"更改时间：2017-6-18"
    }];
});












