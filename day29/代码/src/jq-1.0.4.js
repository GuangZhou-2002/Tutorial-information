(function() {
    //.....

    /* 1、jQuery的外层是一个立即执行函数 */
    "use strict";
    let version = "1.0.0"; /* 大版本-小版本-编号 */

    /* 2、jQuery是一个函数(工厂函数)：调用jQuery函数的时候总是会返回一个创建好的实例对象 */
    let jQuery = function(selector) {

        /* jQuery.fn.init 是构造函数 */
        return new jQuery.fn.init(selector);
    }

    function isArray(arr) {
        if (Array.isArray) {
            return Array.isArray(arr);
        } else {
            return Object.prototype.toString.call(arr) == "[object Array]";
        }
    }

    /* 3、设置jQuery的原型对象 */
    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        init: function(selector) {
            /* 策略：检查参数的类型，根据类型不同来执行不同的逻辑 */
            /* (1) 没有传递参数或者传递的参数为false,总是会返回一个空的实例对象（init构造函数） */
            if (!selector) {
                return this;
            }

            /* (2) 参数是字符串 */
            if (typeof selector === "string") {

                /* (2-1) 如果参数是标签字符串*/
                // $("<div>我是div1</div><span>我是span</span>") 
                /* 检查：第一个字符是< 最后一个字符> 并且长度>=3 */
                if (selector.charAt(0) == "<" && selector.charAt(selector.length - 1) == ">" && selector.length >= 3) {
                    /* 技巧：先创建临时空标签，设置该标签的节点内容，通过children来获取子标签，遍历并依次添加到jquery实例对象中 */
                    let ele = document.createElement("div");
                    ele.innerHTML = selector;
                    // let nodes = ele.children;
                    // for (let i = 0; i < nodes.length; i++) {
                    //     this[i] = nodes[i];
                    // }
                    // this.length = nodes.length;

                    [].push.apply(this, ele.children)
                    console.log("标签字符串")
                } else {
                    /* (2-2) 传递选择器字符串:会先获取页面中所有对应的标签，并且把这些标签保存到jQuery实例对象中(key-value)返回*/
                    // $("div")  $(".box")  
                    // let nodes = document.querySelectorAll(selector);
                    // for (let i = 0; i < nodes.length; i++) {
                    //     this[i] = nodes[i];
                    // }
                    // this.length = nodes.length;
                    // console.log("选择器字符串")
                    [].push.apply(this, document.querySelectorAll(selector));
                }
            }

            /* (3) 参数是数组或者伪数组(是对象 && length && length-1) */
            if (isArray(selector) || (typeof selector == "object" && "length" in selector && selector.length - 1 in selector)) {
                // for (let i = 0; i < selector.length; i++) {
                //     this[i] = selector[i];
                // }
                // this.length = selector.length;
                [].push.apply(this, selector);
            }


        },
        text() {},
        html() {},
        css() {},
        on() {},
        click() {},
        toArray() {},
        eq() {},
        get() {},
        each() {},
    }

    /* 4、设置原型对象共享：为了让实例对象能够访问到jquery原型上面的这些方法 */
    jQuery.fn.init.prototype = jQuery.fn;
    /* jQuery.prototype  ? jQuery.prototype.init.prototype  */

    /* 暴露jQuery给外部 */
    /* jQuery框架中通过把内部需要暴露的对外的数据绑定在了window上面 */
    window.$ = window.jQuery = jQuery;
})()