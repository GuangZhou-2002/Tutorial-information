<?php
/* 该文件的作用是创建数据库 */
$db = mysqli_connect("127.0.0.1", "root", "root");

if (!$db) {
  die('连接错误: ' . mysqli_error($db));
}

echo '连接成功<br />';

$sql = 'CREATE DATABASE LILI';

$retval = mysqli_query($db, $sql);

if (!$retval) {
  die('创建数据库失败: ' . mysqli_error($db));
}
echo "数据库LILI创建成功\n";

?>