<?php

/* 1、先连接数据库 */
include_once "./connectDB.php";

/* 2、执行插入的操作 */
$sql = "SELECT * FROM user";

$result = mysqli_query($db, $sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);  /* 获取的是一个关联数组 */

/* 把查询得到的结果转换为JSON并且返回 */
echo json_encode($data,true);

?>