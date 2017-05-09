//在线客服现实隐藏
$(".onlineService").mouseover(function () {
    $("#serviceLink").show();
});
$(".onlineService").mouseout(function () {
    $("#serviceLink").hide();
});
//图片轮播部分
var mySwiper = new Swiper ('.swiper-container', {
    autoplay: 1000,
    loop : true,
    speed:1000,
    autoplayDisableOnInteraction : false,
    pagination : '.swiper-pagination',
    paginationClickable :true,
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


















