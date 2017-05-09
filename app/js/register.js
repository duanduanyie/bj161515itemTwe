/**
 * Created by lanou3g on 17/5/9.
 */
//正则验证
$("#register_ipt1").blur(function(){
    var reg=/^1[3578][0-9]{9}$/g;
    var result=reg.test($("#register_ipt1").val());
    if($("#register_ipt1").val()!=""){
        if(!result){
            $(".register_midErr").eq(0).html("手机号码错误,请重新输入");
        }else{
            $(".correctS").eq(0).show();
        }
    }else{
        $(".register_midErr").eq(0).html("请输入手机号");
    }
});
$("#register_ipt1").focus(function(){
    $(".register_midErr").eq(0).html("");
    $(".correctS").eq(0).hide();
});
$("#register_ipt2").blur(function(){
    var reg=/^[0-9A-Za-z]{6,20}$/g;
    var result=reg.test($("#register_ipt2").val());
    if($("#register_ipt2").val()!=""){
        if(!result){
            $(".register_midErr").eq(1).html("请输入6到20位的密码");
        }else{
            $(".correctS").eq(1).show();
        }
    }else{
        $(".register_midErr").eq(1).html("请输入密码");
    }
});
$("#register_ipt2").focus(function(){
    $(".register_midErr").eq(1).html("");
    $(".correctS").eq(1).hide();
});
$("#register_ipt3").blur(function(){
    if($("#register_ipt3").val()!=""){
        if($("#register_ipt3").val()==$("#register_ipt2").val()){
            $(".correctS").eq(2).show();
        }else{
            $(".register_midErr").eq(2).html("两次输入的密码不一致,看仔细点");
        }
    }else{
        $(".register_midErr").eq(2).html("请输入确认密码");
    }
});
$("#register_ipt3").focus(function(){
    $(".register_midErr").eq(2).html("");
    $(".correctS").eq(2).hide();
});
//随机验证码
function rand(min,max){
    return parseInt(Math.random()*(max-min+1)+min);
}
// var randNum=rand(0,9).toString()+rand(0,9).toString()+rand(0,9).toString()+rand(0,9).toString();
$(".register_midRand").html(rand(1001,9999));
$(".randClick").click(function(){
    $(".register_midRand").html(rand(1001,9999));
});
//判断是否输入正确
$("#register_ipt4").blur(function(){
    if($("#register_ipt4").val()){
        if($("#register_ipt4").val()==$(".register_midRand").html()){
            $(".register_midErr").eq(3).html("✅");
        }else{
            $(".register_midErr").eq(3).html("看准了再输入");
        }
    }
    else{
        $(".register_midErr").eq(3).html("请输入验证码");
    }
});
$("#register_ipt4").focus(function(){
    $(".register_midErr").eq(3).html("");
});

















