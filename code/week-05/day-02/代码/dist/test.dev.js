"use strict";

var arr = [1, 2, [3, 4, [5, 6]], [7, [8]]];

function flatten(array) {
  var result = [];
  array.forEach(function (item, index) {
    result = result.concat(item);
  });
  return result;
}

function tool(array) {
  var r = flatten(array);

  while (!r.every(function (item) {
    return !Array.isArray(item);
  })) {
    r = flatten(r);
  }

  return r;
}

console.log(tool(arr));