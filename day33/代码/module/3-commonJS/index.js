/* index.js文件需要使用到a.js文件中的数据，应该通过require来导入 */
let moduleA = require("./a");
console.log('a.js', moduleA);


// let moduleB = require("./b");
// console.log('b.js', moduleB);

let { a, b } = require("./b");
console.log("b.js", a, b);