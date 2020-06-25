"use strict";

var moduleB = function () {
  var a = 11111;
  var b = 2;
  console.log(b);
  return {
    a: a,
    b: b
  };
}();