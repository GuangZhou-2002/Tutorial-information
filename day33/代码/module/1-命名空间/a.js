// var a = 1;
// console.log(a);

/* 把当前这个文件中所有的变量和函数都写到这个对象中来 */
var NameSpaceA = {
    a: 1,
    info: {
        id: "111",
        color: "red",
        data: {
            address: "广东",
            info: {
                n1: 11,
                n2: 22,
                sum(a, b) {
                    return a + b;
                }
            }
        }
    }
}