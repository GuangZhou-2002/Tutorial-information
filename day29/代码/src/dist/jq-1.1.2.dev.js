"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  //.....

  /* 1、jQuery的外层是一个立即执行函数 */
  "use strict";

  var version = "1.0.0";
  /* 大版本-小版本-编号 */

  /* 2、jQuery是一个函数(工厂函数)：调用jQuery函数的时候总是会返回一个创建好的实例对象 */

  var jQuery = function jQuery(selector) {
    /* jQuery.fn.init 是构造函数 */
    return new jQuery.fn.init(selector);
  }; // jQuery.trim = $.trim;
  // jQuery.isObject = $.isObject;
  // jQuery.isArray = $.isArray;

  /* 封装函数：遍历对象把对象中所有的方法都添加到jQuery上面去。 */


  jQuery.extend = function (o) {
    for (var key in o) {
      jQuery[key] = o[key];
    }
  };

  jQuery.extend({
    isArray: function isArray(arr) {
      if (Array.isArray) {
        return Array.isArray(arr);
      } else {
        return Object.prototype.toString.call(arr) == "[object Array]";
      }
    },
    isFunction: function isFunction(fn) {
      return typeof fn === "function";
    },
    isString: function isString(str) {
      return typeof str === "string";
    },
    isHTMLString: function isHTMLString(html) {
      return html.charAt(0) == "<" && html.charAt(html.length - 1) == ">" && html.length >= 3;
    },
    isLikeArr: function isLikeArr(likeArr) {
      return $.isObject(likeArr) && "length" in likeArr && likeArr.length - 1 in likeArr;
    },
    isObject: function isObject(obj) {
      return _typeof(obj) === "object" && obj != null;
    },
    trim: function trim(str) {
      // "  ss  fs "
      return str.replace(/^\s+|\s+$/g, "");
    }
  });
  /* 3、设置jQuery的原型对象 */

  jQuery.fn = jQuery.prototype = {
    constructor: jQuery,
    init: function init(selector) {
      /* 策略：检查参数的类型，根据类型不同来执行不同的逻辑 */

      /* (0) 没有传递参数或者传递的参数为false,总是会返回一个空的实例对象（init构造函数） */
      if (!selector) {
        return this;
      }
      /* (1) 参数是函数 */
      else if ($.isFunction(selector)) {
          document.addEventListener("DOMContentLoaded", selector);
        }
        /* (2) 参数是字符串 */
        else if ($.isString(selector)) {
            /* (2-1) 如果参数是标签字符串*/
            if ($.isHTMLString(selector)) {
              /* 技巧：先创建临时空标签，设置该标签的节点内容，通过children来获取子标签，遍历并依次添加到jquery实例对象中 */
              var ele = document.createElement("div");
              ele.innerHTML = selector;
              [].push.apply(this, ele.children);
            } else {
              /* (2-2) 传递选择器字符串:会先获取页面中所有对应的标签，并且把这些标签保存到jQuery实例对象中(key-value)返回*/
              [].push.apply(this, document.querySelectorAll(selector));
            }
          }
          /* (3) 参数是数组或者伪数组(是对象 && length && length-1) */
          else if ($.isArray(selector) || $.isLikeArr(selector)) {
              [].push.apply(this, selector);
            }
            /* (4) 参数是普通的对象|非零的数字|true */
            else {
                this[0] = selector;
                this.length = 1;
              }
    },
    text: function text() {},
    html: function html() {},
    css: function css() {},
    on: function on() {},
    click: function click() {},
    toArray: function toArray() {},
    eq: function eq() {},
    get: function get() {},
    each: function each() {}
  };
  /* 4、设置原型对象共享：为了让实例对象能够访问到jquery原型上面的这些方法 */

  jQuery.fn.init.prototype = jQuery.fn;
  /* jQuery.prototype  ? jQuery.prototype.init.prototype  */

  /* 暴露jQuery给外部 */

  /* jQuery框架中通过把内部需要暴露的对外的数据绑定在了window上面 */

  window.$ = window.jQuery = jQuery; // window.$ = $;
})();