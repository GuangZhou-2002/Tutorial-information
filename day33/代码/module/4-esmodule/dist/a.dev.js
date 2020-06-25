"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showA = showA;
exports.a = exports.c = void 0;
var a = 1;
exports.a = a;
var c = 24;
exports.c = c;

function showA() {
  console.log("--------");
}

console.log(a);
/* 把需要暴露给外部的数据导出 */