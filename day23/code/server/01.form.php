<?php
/*
 * @Author: your name
 * @Date: 2020-06-10 09:34:03
 * @LastEditTime: 2020-06-10 09:55:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /day23/code/server/01.form.php
 */ 
$user = $_REQUEST["user"];
$pwd  = $_REQUEST["pwd"];

/* 约定：返回的是JSON数据*/
/* {status:"success",data:"登录成功!!"}  */
/* {status:"error",data:"密码错误!"} */
/* {status:"error",data:"账户不存在!!!"} */

$obj = array("status"=>"","data"=>"");

if ($user != "zs") {
  // echo '{"status":"error","data":"账户不存在!!!"}';
  $obj["status"] = "error";
  $obj["data"] = "账户不存在!!!";

} else {
  if ($pwd == "123456") {
    // echo "登录成功!!!";
    $obj["status"] = "success";
    $obj["data"] = "登录成功!!!";
  } else {
    $obj["status"] = "error";
    $obj["data"] = "密码不正确!!!";
  }
}

/* 返回响应数据:把php关联数组->JSON字符串 */
echo json_encode($obj,true);

// if($user != "zs"){
//   echo "账户不存在";
// }else{
//   if($pwd == "123456")
//   {
//     echo "登录成功!!!";
//   }else{
//     echo "密码错误!";
//   }
// }

?>