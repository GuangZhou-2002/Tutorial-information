"use strict";

/* index.js文件需要使用到a.js文件中的数据，应该通过require来导入 */
var moduleA = require("./a");

console.log('a.js', moduleA); // let moduleB = require("./b");
// console.log('b.js', moduleB);

var _require = require("./b"),
    a = _require.a,
    b = _require.b;

console.log("b.js", a, b);