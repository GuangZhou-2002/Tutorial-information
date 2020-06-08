<?php

/* 响应头信息：当浏览器在解析该文件的时候，告诉浏览器这是一个html文件，应该使用utf8 */
header("Content-type:text/html;charset=utf8");

# 控制输出(4)
# 01 echo  字符串    表示在页面中输出字符串
# 02 print(内容)     打印内容
# 03 print_r(内容)   打印内容(如果内容是数组等复杂的数据结构能够查看内部的细节)
# 04 var_dump()   

$str = "nice";
$num = 18;
echo $str;
echo "<br>";
echo $num;
echo "<br>";


# javascript  let arr = [10,20,30] | let arr = new Array(10,20,30)
$arr1 = [10,20,30,40.5];
$arr2 = array(100,200,300);
echo $arr1;   /* Array */
echo "<br>";
echo $arr2;   /* Array */
echo "<br>";

print($str);
echo "<br>";

print($arr1);  /* Array */
echo "<br>";


print_r($arr1);
echo "<br>";
print_r($arr2);
echo "<br>";
echo $arr1[1];

echo "<br>";
var_dump($arr1);


# 数组
# 创建方法
# 01 $arr1 = [10,20,30]
# 02 $arr2 = array(10,20,30);

# 数组分类
# (1) 索引数组，0,1,2,3,一次递增
# (2) 关联数组，类似于js中的对象 key-value
$a1 = array(100,200,300);
$a2 = array("name"=>"lw","age"=>18,"address"=>"东莞");
echo "<br>";
var_dump($a1);
echo "<br>";
var_dump($a2);
echo "<br>";
echo $a2["age"];
echo "<br>";

# 数组的遍历
# for(let i = 0;i<arr.length;i++){console.log(i,arr[i])}
for($i = 0;$i<count($a1);$i++){
 echo "当前的索引值=".$i.",当前的元素项=".$a1[$i]."<br>";
}


# 语句：JavaScript语句可以省略分号，但是PHP代码语句结束的分号是不可以被省略的。
$num = 1000;
echo $num;

# 流程控制语句
# (1) 顺序结构
# (2) 选择结构 if..else  switch
# (3) 循环结构

echo "<br>";

$age = 99;
if($age >= 90){
  echo "你好，老奶奶";
}elseif($age >= 30){
  echo "你好，阿姨";
} elseif ($age >= 18) {
  echo "你好，姑娘";
} else{
  echo "你好，表妹";
}

# 函数


?>