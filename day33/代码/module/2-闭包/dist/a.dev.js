"use strict";

var moduleA = function () {
  var a = 1;
  var c = 24;

  function showA() {
    console.log("--------");
  }

  console.log(a);
  return {
    a: a,
    showA: showA
  };
}();