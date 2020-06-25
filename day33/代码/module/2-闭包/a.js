let moduleA = (function() {
    var a = 1;
    let c = 24;

    function showA() {
        console.log("--------");
    }
    console.log(a);

    return { a, showA }
})()