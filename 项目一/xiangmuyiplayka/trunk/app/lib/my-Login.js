/**
 * Created by lanou3g on 17/5/5.
 */
$("#login-ipt1").blur(function(){
    if($("#login-ipt1").val()==""){
        $("#login-p1").html("不能为空").css({"color":"red","font-size":"1.2rem"});
    }else{
        $("#login-p1").html("");
    }
});
$("#login-ipt2").blur(function(){
    if($("#login-ipt2").val()==""){
        $("#login-p1").html("不能为空").css({"color":"red","font-size":"1.2rem"});
    }else{
        $("#login-p1").html("");
    }
});
$("#login-btn").click(function(){
    var url1="../php/login.php";
    $.ajax(url1,{

    })
});

