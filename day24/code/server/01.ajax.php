<?php

# (1) 先加载获取JSON文件中的数据
$json = file_get_contents("data.json");

# (2) 对数据进行处理(请求)
# 001-先获取前端提交的参数(知道前端需要的是什么数据：女装 鞋子 包包)
$type = $_REQUEST["type"];
# 002-对数据进行一层过滤
// $json[$type];  ?  因为$json是字符串，因此不支持对象的语法
# 策略：先把JSON->PHP关联数组-过滤->JSON
$data = json_decode($json,true);
$data = $data[$type];


# (3) 返回JSON数据给前端页面
// print_r($data[$type]);
echo json_encode($data,true);
?>