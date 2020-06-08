<?php
/*
 * @Author: your name
 * @Date: 2020-06-08 16:15:19
 * @LastEditTime: 2020-06-08 16:27:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/day21/code/server/07.upload.php
 */ 

 # 先试着拿到这张图片
 # var_dump($_POST);  /* array(1) { ["fileName"]=> string(10) "peiQi.jpeg" } */

 # 文件上传需要用到$_FIles
// print_r($_FILES);
/* 
Array ( 
  [fileName] => Array (
     [name] => peiQi.jpeg                                    文件的名字
     [type] => image/jpeg                                    文件的类型
     [tmp_name] => /Applications/MAMP/tmp/php/phpJPzDeH      文件上传到服务器后的临时存储路径(临时)
     [error] => 0                                            错误信息
     [size] => 37597 )                                       文件大小

*/

# sleep(3);
# 把用户上传的图片保存到file文件夹下面
/* 第一个参数：源位置 */
/* 第二个参数：目标位置 */
$pathA = $_FILES["fileName"]["tmp_name"];
// $pathB = "./file/PQ.jpeg";

$pathB = "./file/".$_FILES["fileName"]["name"];

move_uploaded_file($pathA,$pathB);

?>