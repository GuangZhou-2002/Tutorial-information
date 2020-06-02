/*
01-数据类型
  (1) 原始数据类型和对象类型
  (2) 检测数据类型的方法
  (3) 变量声明、命名规范等
  (4) NaN 类型转换 parseInt、parseFloat和 toFixed等
  
02-基本运算符
  (1) 算术运算符 + - * / %
  (2) 逻辑运算符 || && !
  (3) 关系运算符 > >= < <= == != === 
  (4) 三元运算符 expression ? A : B
  (5) 赋值运算符 += -=
  (6) 自增运算符 
  
03-流程控制语句
  (1) 顺序结构
  (2) 选择结构
      单分支 if(){}
      双分支 if(){}else{}
      多分支 if(){}else if(){}else{}
      多分支 switch(){}

  (3) 循环结构
      for循环
      while循环
      do..while循环

04-函数和上下文环境
  (1) 函数创建
      * 函数声明
      * 函数表达式
      * 构造函数创建
  (2) 函数参数
      * 实际参数  
      * 形式参数
  (3) 函数调用
      * 001-传递参数
      * 002-执行代码
  (4) 函数返回值
      * 如果没有返回值，那么默认总是返回 undefined
      * 主动 return 提供返回值
  (5) 作用域和变量声明提升
      * 全局作用域 + 局部作用域
      * 变量声明的提升
------------------------------------------------------------
  (5) call apply 和 bind 
      * call 和 apply 的基本使用
      * bind 的基本使用
      * call 和 apply 方法的实现原理
  (6) 箭头函数
      * 基本写法
      * 使用注意
  (7) 默认参数和剩余参数
      * 默认参数
      * 剩余参数
  (8) this 指向总结  总结五种 this 指向的情况
  (9) 高阶函数和闭包  
  
05-字符串
  (1) 字符串表示 双引号 单引号 反引号
  (2) 字符串常用方法介绍
      indexOf lastIndexOf charAt trim split includes toUpperCase slice 等

06-数组类型
  (1) 数组的创建
      * 字面量创建    var arr = [1,2,3];
      * 构造函数创建  var arr = new Array(1,2,3);
  (2) 操作数组的方法
      * 基本操作(改变) push unshift  pop shift  splice  sort reverse 
      * 基本操作(不变) concat slice  join toString indexOf lastIndexOf includes
      * 基本操作(迭代) some every reduce reduceRight map filter forEach
  (3) 数组的遍历
      * for 循环
      * forEach循环
      * for...in循环
      * for of 循环
*/
"use strict";