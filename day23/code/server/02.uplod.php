<?php
/*
 * @Author: your name
 * @Date: 2020-06-10 14:19:04
 * @LastEditTime: 2020-06-10 14:25:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /day23/code/server/02.uploda.php
 */ 
print_r($_FILES);
move_uploaded_file($_FILES["fileName"]["tmp_name"],"./file/". $_FILES["fileName"]["name"]);
?>