<?php
// echo "hi!";

# 需要获取前端提交的用户名和密码？
# 我们在后端页面中可以通过$_GET超级全局变量来获取请求提交的参数
// var_dump($_GET);

$user = $_GET["user"];
$pwd  = $_GET["pwd"];

// echo "用户名:".$user." 密码：".$pwd;

echo '用户名：$user 密码：$pwd';
echo "<br>";

# 建议写法
echo "用户名：$user 密码：$pwd";

?>