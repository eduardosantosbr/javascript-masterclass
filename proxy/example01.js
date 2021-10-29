/**
 * What is a JavaScript Proxy object and Reflect API?
 * A JavaScript Proxy is an object that wraps another object (target) and intercepts the fundamental operations of the target object.
 * The fundamental operations can be the property lookup, assignment, enumeration, and function invocations, etc.
 * 
 * In computer programming, reflection is the ability of a program to manipulate variables, properties, and methods of objects at runtime.
 * The Reflect API is important because it allows you to develop programs and frameworks that are able to handle dynamic code.
 */

function createArray() {
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 0;
            target.length++;
            Reflect.set(target, key, value);
        },
        get(target, key) {
            if (typeof key === "string" && key.match(/\d+/)) {
                if (!Reflect.has(target, key)) {
                    throw `Property ${key} not fund`;
                }
            }
            return target[key];
        },
        deleteProperty(target, key) {
            if (Reflect.has(target, key)) {
                target.length--;
                Reflect.deleteProperty(target, key);
            }
        },
    });
}

const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";
console.log(languages);
console.log(languages.length);
delete languages[1];
delete languages[2];
delete languages[3];
console.log(languages);
console.log(languages.length);
console.log(languages[0]);
console.log(languages[3]);