"use strict";

var _a = require("./a.js");

var _b = _interopRequireDefault(require("./b.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* 需要使用a.js文件中的内容，导入 */
console.log("index.js", _a.a, _a.c);
(0, _a.showA)();
console.log(_b["default"].a, _b["default"].b);