"use strict";

var GET = "GET";
var POST = "POST";

function ajax(options) {
  console.log("options", options);
  var type = options.type,
      url = options.url,
      data = options.data,
      success = options.success,
      error = options.error,
      timeout = options.timeout;
  type = type.toUpperCase();
  var xhr = new XMLHttpRequest();

  if (type === GET) {
    if (!data) {
      url += "?t=" + Math.random();
    } else {
      url += "?" + obj2QueryString(data);
    }

    url = encodeURI(url);
    xhr.open("GET", url);
    xhr.send();
  } else if (type === POST) {
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(obj2QueryString(data));
  }

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

function get(options) {
  options.type = "GET";
  ajax(options);
}

function obj2QueryString(o) {
  /* {user: "lw",pwd:"123456"}=> "user=lw&pwd=123456" */
  var arr = [];

  for (var key in o) {
    arr.push("".concat(key, "=").concat(o[key]));
  }

  return arr.join("&");
}

function post(options) {
  options.type = "POST";
  ajax(options);
}