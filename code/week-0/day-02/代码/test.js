let arr = [1, 2, [3, 4, [5, 6]],
    [7, [8]]
];

function flatten(array) {
    let result = [];
    array.forEach(function(item, index) {
        result = result.concat(item);
    })
    return result;
}

function tool(array) {
    let r = flatten(array);
    while (!r.every(item => !Array.isArray(item))) {
        r = flatten(r);
    }
    return r;
}

console.log(tool(arr));