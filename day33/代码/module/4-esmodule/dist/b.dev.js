"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var a = 11111;
var b = 2;
console.log(b);
/* 如果是默认导出，那么在导入的时候可以用对象来接收 */

var _default = {
  a: a,
  b: b
};
exports["default"] = _default;