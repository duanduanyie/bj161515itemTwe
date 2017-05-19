//在线客服现实隐藏
$(".onlineService").mouseover(function () {
    $("#serviceLink").show();
});
$(".onlineService").mouseout(function () {
    $("#serviceLink").hide();
});
//图片轮播部分
var mySwiper = new Swiper ('.swiper-container', {
    autoplay: 2000,
    loop : true,
    speed:1000,
    autoplayDisableOnInteraction : false,
    pagination : '.swiper-pagination',
    paginationClickable :true,
    nextButton: '.swiper-button-next',
    prevButton:'.swiper-button-prev',
})
//一二级菜单随便切
$(".carouselNav_list").mouseover(function () {
    $("#sanj").css("transform","rotate(180deg)");
    $(".carouselNav_list0").show();
});
$(".carouselNav_list").mouseout(function () {
    $(".carouselNav_list0").hide();
    $("#sanj").css("transform","rotate(-180deg)");
});
$(".carouselNav_list0").mouseout(function () {
    $(".carouselNav_list0").show();
});
$(".carouselNav_list0 li").mouseover(function () {
    var index = $(this).index();
    $(".carouselNav_list2 li").eq(index).show().siblings().hide();
});

//订单
function isExist(){
    if(localStorage.users){
        var user=JSON.parse(localStorage.users);
        var user2=JSON.parse(user.user);
        if(user2.username) {
            $("#alLo").html(user2.username);
            $("#noEx").html("<a href='###'>退出</a>").click(function(){
                localStorage.clear();
                $("#alLo").html("<a href='login.html'>登录</a>");
                $("#noEx").html("<a href='register.html'>注册</a>");
            });
        }
    }
}
isExist();
$("#order").click(function(){
    if(localStorage.users){
        isExist();
    }else{
        location.href="login.html";
    }
});

















