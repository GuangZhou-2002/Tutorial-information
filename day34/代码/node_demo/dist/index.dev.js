"use strict";

/* 1、核心模块 */
var http = require("http");
/* 2、第三方模块 */


var jQ = require("jquery"); // console.dir(jq());

/* 3、自定义模块 */


var _require = require("./js/jq"),
    jq = _require.jq;

console.log(jq);