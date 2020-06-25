<?php
/* 1、先连接数据库 */
include_once "./connectDB.php";

/* 2、执行更新的操作 */
/* 更新user_id */
$sql = 'UPDATE user
        SET user_password="loveShaoLi"
        WHERE user_id=2';

$retval = mysqli_query($db, $sql);

if (!$retval) {
  die('无法更新数据: ' . mysqli_error($conn));
}
echo '数据更新成功！';
?>