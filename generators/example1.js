/**
 * Introduction to JavaScript Generators
 * In JavaScript, a regular function is executed based on the run-to-completion model. It cannot pause midway and then continues from where it paused.
 * 
 * ES6 introduces a new kind of function that is different from a regular function: function generator or generator.
 * A generator can pause midway and then continues from where it paused.
 */

function* forever() {
    let value = 0;
    while (true) {
        try {
            const reset = yield value++;
            if (reset) value = 0;
        } catch (e) {
            console.log(e);
        }
    }
}

function today() {
    const date = new Date();
    console.log(date);
}

const foreverGenerator = forever();
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
console.log(foreverGenerator.next(true));
today();
console.log(foreverGenerator.throw("error"))