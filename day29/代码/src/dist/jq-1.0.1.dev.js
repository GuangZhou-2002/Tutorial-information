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
    init: function init(selector) {
      /* 策略：检查参数的类型，根据类型不同来执行不同的逻辑 */

      /* (1) 没有传递参数或者传递的参数为false,总是会返回一个空的实例对象（init构造函数） */
      if (!selector) {
        return this;
      }
      /* (2) 传递选择器字符串:会先获取页面中所有对应的标签，并且把这些标签保存到jQuery实例对象中(key-value)返回 */


      if (typeof selector === "string") {
        // $("div")  $(".box")  
        // document.getElementsByTagName(selector)
        // document.getElementsByClassName()
        var nodes = document.querySelectorAll(selector);

        for (var i = 0; i < nodes.length; i++) {
          this[i] = nodes[i];
        }

        this.length = nodes.length;
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

  window.$ = window.jQuery = jQuery;
})();