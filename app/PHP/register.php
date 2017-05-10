<?php
    require_once 'SQL.php';
    if(!empty($_GET)){
        $username=$_GET["username"];
        $password=$_GET["password"];
        $sql="SELECT * FROM project2 WHERE username='{$username}'";
        selectData($sql,function($data){
        	global $username;
        	$info=array("msg"=>$username."注册过了");
        	exit(json_encode($info));
        },function($err){
        	global $username,$password;
        	//判断条件：找SQL中查询函数的$fail输出值
        	if($err=="err"){
        		//可以进行注册
        		$insertSql="INSERT INTO project2(username,password) VALUES('{$username}','{$password}')";
        		insertData($insertSql,function($id){
        			global $username,$password;
        			$user=array("id"=>$id,"username"=>$username,"密码"=>$password);
        			//注册成功
        			$userInfo=array("user"=>$user,"msg"=>"注册成功");
        			echo json_encode($userInfo);
        		},function(){
        			echo "注册失败";
        		});
        	}
        });
    }
?>