"use strict";

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
  };
  /* 3、设置jQuery的原型对象 */


  jQuery.fn = jQuery.prototype = {
    constructor: jQuery,
    init: function init(s) {// this.name = "我是jQuery实例对象的name属性";
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

  window.$ = window.jQuery = jQuery;
})();