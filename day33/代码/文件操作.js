/* 01-引入核心模块fs */
let fs = require("fs");

/* 基本操作：读文件 | 写文件 | 文件重命名 */
/* 基本常识：node中对于文件操作提供了两套API，一套是同步的，一套是异步的(常用)。 */

/* 读文件 
fs.readFileSync()  同步：阻塞线程 + 异常处理
*/
// let fileData = fs.readFileSync("./1.txt", "utf-8");

/* 同步 */
// try {
//     let fileData = fs.readFileSync("./2.txt", { encoding: "utf-8", flag: "r" });
//     console.log(fileData);
// } catch (e) {
//     console.log(e)
// }

/* 异步：error-first */
// fs.readFile("./3.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("读取文件出错", err)
//         return;
//     }

//     console.log(data);
// })


/* 写文件 */
fs.writeFileSync("./1.txt", "问君能有几多愁，恰似一江春水向东流。", { flag: "a+" });