<?php
    require_once 'SQL.php';
    if(!empty($_GET)){
    	$username=$_GET["username"];
    	$password=$_GET["password"];
    	$sql="SELECT * FROM project2 WHERE username='{$username}' AND password='{$password}'";
    	selectData($sql,function($data){
    		// data从SQL中返回，数组格式
    		$user=json_encode($data[0]);
    		$userInfo=array("user"=>$user,"msg"=>"登录成功");
    		$jsonInfo=json_encode($userInfo);
    		echo $jsonInfo;
    	},function($err){
    		    $errInfo=array("msg"=>$err,"code"=>0);
                echo json_encode($errInfo);
    	});
    }
?>