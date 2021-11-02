function sum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid imput");
        setTimeout(function () {
            resolve(a + b);
        }, 1000);
    });
}

Promise.all([
    sum(2, 2),
    sum(4, 4),
]).then(function (values) {
    const [a, b] = values;
    sum(a, b).then(function (result) {
        console.log(result);
    })
}).catch(function (e) {
    console.log(e);
});