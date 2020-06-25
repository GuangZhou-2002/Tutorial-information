// /* 01-引入核心模块(http) */
let http = require("http");

// console.log(http);
/* 02-创建server服务 */
let server = http.createServer((req, res) => {
    /* req : 接收到的请求信息  */
    /* res : 响应对象，我们可以通过该对象来设置响应头和响应体信息 */
    res.setHeader("Content-Type", "text/html;charset=utf-8");

    // res.write("响应1:哈哈哈");
    // res.write("响应2:呵呵呵");
    // res.write("响应3:嘿嘿嘿");
    // res.end("Nice!");

    let data = [{
        name: "zs",
        age: 18
    }, {
        name: "lw",
        age: 18
    }, {
        name: "ww",
        age: 18
    }]

    res.end(JSON.stringify(data));
})

/* 03-开始server服务 */
server.listen(8888, () => {
    /* 当服务开启监听的时候会触发该回调函数 */
    console.log("开启了服务监听，监听的端口号是8888");
})