<?php
	$result = array();
	$callback = $_GET['callback'];
	$postId = $_GET['postId'];
	$resultData = 'failed';
	//데이터베이스에 연결합니다.
	$connection = mysqli_connect("localhost","root","duddnjs3wh","phptest");
	mysqli_query("set names utf8");//한글 안깨지도록 유니코드
	//새로운 레코드를 삽입
	$query = mysqli_query($connection,"DELETE FROM MYSNS_COMMENT WHERE pid = ".$postId);
	//쿼리문이 성공했나
	if($query) $resultData = "success";
	$result = array('result' => $resultData);
	mysqli_close($connection);
	echo $callback."(".json_encode($result).")";
?>
