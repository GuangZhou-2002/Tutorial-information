"use strict";function get(t,e,n,o,u){var r=new XMLHttpRequest;t+=e?"?"+obj2QueryString(e):"?t="+Math.random(),t=encodeURI(t),r.open("GET",t),r.send(),r.timeout=u||1e4,r.onload=function(){200==r.status?n(r.responseText):o(r.statusText)},r.ontimeout=function(){alert("网络请求超时，请检查网络")}}function obj2QueryString(t){var e=[];for(var n in t)e.push("".concat(n,"=").concat(t[n]));return e.join("&")}function post(t,e,n,o,u){var r=new XMLHttpRequest;r.open("POST",t),r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.send(obj2QueryString(e)),r.timeout=u||1e4,r.onload=function(){200==r.status?n(r.responseText):o(r.statusText)},r.ontimeout=function(){alert("网络请求超时，请检查网络")}}