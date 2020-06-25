/* 需要使用a.js文件中的内容，导入 */
import { a, showA, c } from "./a.js";
console.log("index.js", a, c)
showA();


import moduleB from "./b.js";
console.log(moduleB.a, moduleB.b);