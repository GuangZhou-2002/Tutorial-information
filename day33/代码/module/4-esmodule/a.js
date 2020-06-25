var a = 1;
export let c = 24;

function showA() {
    console.log("--------");
}
console.log(a);


/* 把需要暴露给外部的数据导出 */
export { a, showA };