<?php
function initMySqli() {
	//1.链接数据库
	$mySqli = new mySqli("localhost", "root", "", "20170323");
	//判断数据库是否链接成功
	if ($mySqli -> connect_error) {
		# code...
		die("链接失败,失败信息:{$mySqli->connect_error}");
	}
	//设置编码格式
	//$mySqli->set_charset('utf8');
	//2.设置编码格式
	$mySqli -> query("set charset utf8");
	return $mySqli;
}

function insertData($sql, $success = 0, $fail = 0) {

	$mySqli = initMySqli();
	//返回一个bool类型
	$rel = $mySqli -> query($sql);
	if ($rel) {
		//echo("添加成功");
		if ($success)
			$success($mySqli -> insert_id);
	} else {
		//echo "添加失败";
		if ($fail)
			$fail();
	}
	//4.断开数据库
	$mySqli -> close();
}

//更新
function upDateData($sql, $success = 0, $fail = 0) {

	$mySqli = initMySqli();
	//执行sql
	$rel = $mySqli -> query($sql);
	if ($rel) {
		# code...
		//echo "更新成功";
		if ($success)
			$success();

	} else {
		//echo "更新失败";
		if ($fail)
			$fail();
	}
	//4.断开数据库
	$mySqli -> close();
}

//删除数据
function deleteData($sql, $success = 0, $fail = 0) {
	$mySqli = initMySqli();
	//执行sql
	$rel = $mySqli -> query($sql);
	if ($rel) {
		# code...
		//echo "更新成功";
		if ($success)
			$success();

	} else {
		//echo "更新失败";
		if ($fail)
			$fail();
	}
	//4.断开数据库
	$mySqli -> close();
}

//查询
function selectData($sql, $success = 0, $fail = 0) {
	$mySqli = initMySqli();
	$rel = $mySqli -> query($sql);

	if ($rel && $rel -> num_rows) {
		$arr = array();
		while ($row = $rel -> fetch_object()) {
			array_push($arr, $row);
		}
		if ($success)
			$success($arr);
	} else {
		if ($fail)
			$fail("err");
	}
	//4.断开数据库
	$mySqli -> close();
}
?>