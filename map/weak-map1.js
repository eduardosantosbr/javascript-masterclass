/**
 * WeakMap
 * A WeakMap is similar to a Map except the keys of a WeakMap must be a objects.
 * It means that when a reference to a key (an object) is out of scope,
 * the corresponding value is automatically released from the memory.
 * 
 * A WeakMap only has subset methods of a Map object:
 * get(key)
 * set(key, value)
 * has(key)
 * delete(key)
 * 
 * Here are the main difference between a Map and a WeekMap:
 * Elements of a WeakMap cannot be iterated.
 * Cannot clear all elements at once.
 * Cannot check the size of a WeakMap.
 */

const wm1 = new WeakMap();
const obj1 = {};
const obj2 = {};
wm1.set(obj1, "obj1");
wm1.set(obj2, "obj2");

console.log(wm1);
console.log(wm1.has(obj1));
console.log(wm1.has(obj2));

console.log(wm1.get(obj1));
console.log(wm1.get(obj2));

console.log(wm1.delete(obj1));
console.log(wm1.delete(obj2));