> 浅拷贝和深拷贝核心代码
```javascript
// let o = { name: "zs", age: 18, car: { id: 666, color: "red" } };
// /* 浅拷贝 */
// /* 特点：拷贝一层 */
// /* [1] for...in循环 */
let o1 = {};
for (const key in o) {
    if (o.hasOwnProperty(key)) {
        o1[key] = o[key];
    }
}
console.log(o1);
o1.car.id = 888;
console.log(o);

/* [2] Object.assign() 合并对象 */
let o2 = {};
Object.assign(o2, o);
console.log(o2);


/* 深拷贝 */
/* 特点：拷贝 N 层 ，没有共享问题*/
/* 实现: */
/* [1] JSON转换  缺点：undefined */
/* 1.JSON 中没有 undefined | 函数，遇见 undefined | 函数就直接丢弃 */
/* 2.正则表达式要序列化之后就设置为空正则 */

let o = {
    name: "zs",
    age: 18,
    car: { id: 666, color: "red" },
    test: undefined,
    show() {
        console.log("0-0")
    },
    reg: /abc/
};
let o1 = {};
o1 = JSON.parse(JSON.stringify(o));
console.log(o);
console.log(o1);

/* [2] deepCopy() 递归调用 */
let deepClone = (val, wm = new WeakMap) => {
    if (val == null) return val;
    if (typeof val !== "object") return val;
    if (val instanceof Date) return new Date(val);
    if (val instanceof RegExp) return new RegExp(val);
    if (wm.has(val)) return wm.get(val);
    let _instance = new val.constructor;
    wm.set(val, _instance);

    for (let key in val) {
        if (val.hasOwnProperty(key)) _instance[key] = deepClone(val[key], wm);
    }
    return _instance;
}
```
