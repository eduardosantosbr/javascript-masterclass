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
        const functions = [
            sum(2, 2),
            sum(4, 4),
        ];
        
        let results = [];
        for(let fn of functions) {//for of without await 
            let result = await fn;
            results.push(result);
        }

        for await (let fn of functions) {//for of with await
            let result = fn;
            results.push(result);
        }

        let [a, b, c, d] = results;
        let result1 = await sum(a, b);
        let result2 = await sum(c, d);
        console.table([result1, result2]);
    } catch (e) {
        console.log(e);
    }
})();