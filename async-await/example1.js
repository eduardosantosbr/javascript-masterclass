function sum(a, b) {
    return new Promise(function (resolve, reject) {
        if (!a || !b) return reject("Invalid input");
        setTimeout(function () {
            resolve(a + b);
        }, 1000);
    })
}

(async function () {
    try {
        let result1 = await sum(2, 2);
        console.log(result1);
        let result2 = await sum(2, undefined);
        console.log(result2);
    } catch (e) {
        console.log(e);
    }
})();