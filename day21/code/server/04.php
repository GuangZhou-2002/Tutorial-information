<?php
# 序列化     PHP对象(关联数组)转换为JSON字符串
# 反序列化   把JSON字符串转换为PHP对象

$obj1 = array("name"=>"zs","age"=>19,"address"=>"东莞");
print_r($obj1); /* Array ( [name] => zs [age] => 19 [address] => 东莞 ) */

# 序列化     PHP对象(关联数组)转换为JSON字符串
echo "<br>";
$json = json_encode($obj1);   /* JSON.stringify() */
echo $json;   /* {"name":"zs","age":19,"address":"\u4e1c\u839e"} */


# 反序列化   把JSON字符串转换为PHP对象
$obj = json_decode($json,true); /* JSON.parse() */
echo "<br>";
print_r($obj); 

?>