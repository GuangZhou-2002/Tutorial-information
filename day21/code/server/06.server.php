<?php
/*
 * @Author: your name
 * @Date: 2020-06-08 16:01:37
 * @LastEditTime: 2020-06-08 16:03:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /code/day21/code/server/06.server.php
 */ 
// echo "hi!";

# 需要获取前端提交的用户名和密码？
# 我们在后端页面中可以通过$_GET超级全局变量来获取请求提交的参数
// var_dump($_GET);

# $_GET  获取的是GET请求提交的参数
# $_POST 获取的是POST请求提交的参数

$user = $_POST["user"];
$pwd  = $_POST["pwd"];

// echo "用户名:".$user." 密码：".$pwd;

echo '用户名：$user 密码：$pwd';
echo "<br>";

# 建议写法
echo "用户名：$user 密码：$pwd";

?>