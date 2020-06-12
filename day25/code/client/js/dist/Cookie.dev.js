"use strict";

var Cookie = function () {
  function getItem(key) {
    var cookieSting = document.cookie; // "color=red; id=red2324"

    var cookies = cookieSting.split("; "); //["color=red","id=red2324"]

    for (var i = 0; i < cookies.length; i++) {
      var currentItem = cookies[i]; //"color=red"

      var temp = currentItem.split("="); //["color","red"];

      if (key === temp[0]) {
        return temp[1];
      }
    }
  }

  function setItem(key, value, day) {
    if (typeof day === "number" && day > 0) {
      var date = new Date();
      date.setDate(date.getDate() + day);
      document.cookie = "".concat(key, "=").concat(value, "; expires=") + date;
    } else {
      document.cookie = "".concat(key, "=").concat(value);
    }
  }

  function removeItem(key) {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    document.cookie = "".concat(key, "=\"\"; expires=") + date;
  }

  function clear() {
    /* 策略：先获取所有的cookie的key,遍历它们逐个删除 ["color","id"]*/
    var keys = getKeys();
    keys.forEach(function (key) {
      return removeItem(key);
    });
  }

  function getKeys(key) {
    var keys = [];
    var cookieSting = document.cookie; // "color=red; id=red2324"

    var cookies = cookieSting.split("; "); //["color=red","id=red2324"]

    for (var i = 0; i < cookies.length; i++) {
      var currentItem = cookies[i]; //"color=red"

      var temp = currentItem.split("="); //["color","red"];

      keys.push(temp[0]);
    }

    return keys;
  }

  return {
    setItem: setItem,
    getItem: getItem,
    removeItem: removeItem,
    getKeys: getKeys,
    clear: clear
  };
}();