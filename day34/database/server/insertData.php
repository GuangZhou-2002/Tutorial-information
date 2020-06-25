<?php

/* 1、先连接数据库 */
include_once "./connectDB.php";

/* 2、执行插入的操作 */
$sql = "INSERT INTO user " .
  "(user_id,user_name,user_password,user_date,user_email)" .
  "VALUES " .
  "(NULL,'wbq','1234567','2020-06-26','wbq@126.com')";

$retval = mysqli_query($db, $sql);

if (!$retval) {
  die('无法插入数据: ' . mysqli_error($conn));
}
echo "数据插入成功\n";
?>