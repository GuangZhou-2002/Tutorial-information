"use strict";

var a = 1;
var c = 24;

function showA() {
  console.log("--------");
}

console.log(a);
/* 导出这三个数据给外部使用 */

module.exports = {
  a: a,
  c: c,
  showA: showA
};