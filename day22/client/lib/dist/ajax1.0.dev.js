"use strict";

function get(url, data, success, error, timeout) {
  var xhr = new XMLHttpRequest();

  if (!data) {
    url += "?t=" + Math.random();
  } else {
    url += "?" + obj2QueryString(data);
  }

  url = encodeURI(url);
  xhr.open("GET", url);
  xhr.send();
  xhr.timeout = timeout || 10000;

  xhr.onload = function () {
    if (xhr.status == 200) {
      success(xhr.responseText);
    } else {
      error(xhr.statusText);
    }
  };

  xhr.ontimeout = function () {
    alert("网络请求超时，请检查网络");
  };
}

function obj2QueryString(o) {
  /* {user: "lw",pwd:"123456"}=> "user=lw&pwd=123456" */
  var arr = [];

  for (var key in o) {
    arr.push("".concat(key, "=").concat(o[key]));
  }

  return arr.join("&");
}

function post(url, data, success, error, timeout) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(obj2QueryString(data));
  xhr.timeout = timeout || 10000;

  xhr.onload = function () {
    if (xhr.status == 200) {
      success(xhr.responseText);
    } else {
      error(xhr.statusText);
    }
  };

  xhr.ontimeout = function () {
    alert("网络请求超时，请检查网络");
  };
}