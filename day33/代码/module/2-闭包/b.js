let moduleB = (function() {
    var a = 11111;
    let b = 2;
    console.log(b);
    return { a, b };
})()