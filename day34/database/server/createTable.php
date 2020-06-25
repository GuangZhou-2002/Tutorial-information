<?php
include_once "./connectDB.php";

/* 创建一张表(user) */
$sql = "CREATE TABLE user( " .
  "user_id INT NOT NULL AUTO_INCREMENT, " .
  "user_name VARCHAR(100) NOT NULL, " .
  "user_password VARCHAR(40) NOT NULL, " .
  "user_email VARCHAR(40) NOT NULL, " .
  "user_date DATE, " .
  "PRIMARY KEY ( user_id ))ENGINE=InnoDB DEFAULT CHARSET=utf8; ";

$retval = mysqli_query($db, $sql);

if (!$retval) {
  die('数据表创建失败: ' . mysqli_error($conn));
}
echo "数据表创建成功\n";
?>