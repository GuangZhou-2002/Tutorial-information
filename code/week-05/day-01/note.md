> 类型检查关键代码
```javascript
console.log(typeof "abc")                   /* string */
console.log(typeof 12345)                   /* number */
console.log(typeof true)                    /* boolean */
console.log(typeof undefined)               /* undefined */
console.log(typeof Symbol())                /* symbol */
console.log(typeof null)                    /* object */
console.log(typeof typeof typeof Symbol())  /* string */

console.log(typeof {})                      /* object */
console.log(typeof [])                      /* object */
console.log(typeof /abc/)                   /* object */
console.log(typeof function(){})            /* function */

console.log(({}).toString())                              /* [object Object]  */
console.log(Object.prototype.toString.call({}))           /* [object Object]  */
console.log(Object.prototype.toString.call([]))           /* [object Array]   */
console.log(Object.prototype.toString.call(new Function)) /* [object Function]*/
console.log(Object.prototype.toString.call(new RegExp))   /* [object RegExp]  */
console.log(Object.prototype.toString.call(new Error))    /* [object Error]   */
console.log(Object.prototype.toString.call(new Set))      /* [object Set]     */
console.log(Object.prototype.toString.call(new Map))      /* [object Map]     */

function Person() {};
let p = new Person;

class Animal {};
let a = new Animal;
console.log(Object.prototype.toString.call(p)) /* [object Object] */
console.log(Object.prototype.toString.call(a)) /* [object Object] */

console.log(p instanceof Person)                            /* true */
console.log(a instanceof Person)                            /* false */
console.log(a instanceof Animal)                            /* true */
console.log(a instanceof Function, a instanceof Object)     /* false true */

console.log(a.constructor == Person);                       /* false */
console.log(a.constructor == Animal);                       /* true */
console.log(a.constructor == Object);                       /* false */
console.log(p.constructor == Person);                       /* true */

console.log(({}).constructor == Object)                     /* true */
console.log(([]).constructor == Array)                      /* true */

function mockInstanceof(instance,constructor){
  let B = constructor.prototype;
  let A = instance.__proto__;

  while(true)
  {
    /* Object.prototype.__proto__ -> null */
    if (A == null){
      return false;
    }
    if (A === B){
      return true;
    }
    A = A.__proto__;   }

}
```

> 常见运算符和类型转换关键代码

```javascript
/* 1、条件表达式 */
/* if() 里面的条件表达式的结果一定是布尔值 true | false */
/* false ：null undefined "" 0 NaN*/
/* ！    : 取反操作得到的一定是布尔值 */
if (NaN) {
    console.log("1");
}


/* 2、+ 运算符的使用注意点 */
/* (1) + 存在字符串,则进行字符串的拼接 */
console.log(1 + "123abc"); /* 1123abc */

/* (2) + 没有字符串 */
/* [1] 数字和数字 */
/* [2] 数字和非字符串类型的数据 */
console.log(1 + true) /* 把布尔值转换为数字1  == 2*/
console.log(1 + null) /* 把 null 转换为  0  == 1*/
console.log(1 + undefined) /* NaN 因为 undefined 无法转换为数字，得到NaN */
/* NaN残余任何计算得到的都是 NaN */

console.log(1 + {}); /* "1[object object]"*/
/* 逻辑：先调用valueOf()转换为数字，如果得到的仍然是对象，则继续调用 toString方法 */
console.log({}.valueOf()); /* {} */
console.log({}.toString()); /* "[object Object]" */
let o = {
    valueOf() {
        return 100;
    },
    toString() {
        return 200;
    }
}
console.log(o.valueOf()) /* 100 */
console.log(o.toString()) /* 200 */
console.log(1 + o); /* 101 */

let o1 = {
    valueOf() {
        return {};
    },
    toString() {
        return 200;
    }
}
console.log(1 + o1); /* 201 */

/* (3) + 可以用来将字符串转换为数字 */
console.log(123 + "6"); /* 1236 */
console.log(123+ +"6"); /* 129 */


/* 3.比较运算符的使用注意点 */
console.log("a" < "b");       /* true */
console.log("aa" < "ab");     /* true */
console.log("aaa" < "aac");   /* true */

/* 比较的是字符的 ascii 码值 */
/* 说明：我们可以通过 str.charAt(index) 的方式来获取指定字符对应的 ascii 值 */

/* 4、相等和全等运算符 */
/* 相等 == ： 比较值，允许类型转换 */
/* 全等 ===： 比较值和类型 */
console.log(1 ==  "1");  /* true */
console.log(1 === "1");  /* false */

/* 注意点：null | undefined 和其它类型比较返回的是否 false */
console.log(undefined ==  null)  /* true */

console.log(undefined === null)  /* false */ 
console.log(null == 0)           /* false */
console.log(undefined == 0)      /* false */

/* NaN 跟任何数比较都不等，包括它自己 */
console.log(NaN == NaN);         /* false */
console.log(isNaN(NaN))          /* true */

/* Object.is几乎等同于全等比较 */
/* (1) 能够比较 NaN */
/* (2) 比较+0和-0的时候识别符号 */
console.log(Object.is(NaN,NaN)); /* true */
console.log(Object.is(-0, +0), -0 === +0);  /* false true */

/* 特殊的几种情况 */
console.log({}  == {})                /* false 因为这是引用类型的数据 */
console.log({} == "[object Object]")  /* true  {}.toString()      */
console.log([] == ![]);               /* true */
/* [1] [] == false   因为单目运算符优先级最高*/
/* [2] [] == 0       在比较的时候 false被转换为数字 */
/* [3] [] == 0       [].valueOf()   */
/* [4] "" == 0       [].toString()   */
/* [5] 0  == 0       Number("")->0 */
/* [6] true */

```

> call && apply && bind 关键代码

```javascript
/* call 原理 */
Function.prototype.call = function(context) {
    /* 01-上下文环境的容错处理，如果context是原始类型那么就先包装 */
    context = context ? Object(context) : window;

    /* 02-获取方法并把该方法添加到当前的对象上 */
    context.f = this;

    /* 03-拿到参数列表(剔除了绑定 this的第一个参数) */
    let args = [];
    for (let i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    /* 04-调用并执行函数，利用了数组的 toString来处理参数 */
    return eval("context.f(" + args + ")");
}

/* apply 原理 */
Function.prototype.apply = function(context, args) {
    /* 01-上下文环境的容错处理，如果context是原始类型那么就先包装 */
    context = context ? Object(context) : window;

    /* 02-获取方法并把该方法添加到当前的对象上 */
    context.f = this;

    /* 03-如果没有以数组传递参数那么就直接调用并返回*/
    if (!args) {
        return context.f();
    }

    /* 04-如果以数组传递了参数那么就利用 eval 来执行函数并返回结果 */
    return eval("context.f(" + args + ")");
}

/* bind 方法的实现原理 */
Function.prototype.bind = function(context) {
    let that = this;

    /* 获取第一部分参数 ： ex 获取 let F = f1.bind(f2, 10); 中的10*/
    let argsA = [].slice.call(arguments, 1); /* [10] */

    function bindFunc() {
        /* 获取第二部分的参数：ex 获取 F(20, 30); 中的 20 和 30 */
        let argsB = [].slice.call(arguments); /* [20,30] */
        let args = [...argsA, ...argsB];
        return that.apply(this instanceof bindFunc ? this : context, args);
    }

    /* 原型处理 */
    function Fn() {};
    Fn.prototype = this.prototype;
    bindFunc.prototype = new Fn();

    /* 返回函数 */
    return bindFunc;
}
```
