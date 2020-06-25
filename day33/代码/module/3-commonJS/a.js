var a = 1;
let c = 24;

function showA() {
    console.log("--------");
}
console.log(a);

/* 导出这三个数据给外部使用 */
module.exports = {
    a,
    c,
    showA
}