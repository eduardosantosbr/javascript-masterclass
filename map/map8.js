/**
 * Map vs Object
 * 
 * Map - is a data structure which helps in storing the data in the form of pairs.
 * The pair consists of a unique key and value mapped to the key.
 *  
 * Object - follows the same concept as that of map, for example using key-value pair for storing data.
 * 
 */

 console.log("-----Object-----")
const obj = {};
obj[10] = "Number";
obj["10"] = "String";
obj[true] = "Boolean";
obj["true"] = "String";

console.log(obj[10]);
console.log(obj["10"]);
console.log(obj[true]);
console.log(obj["true"]);

console.log("-----Map-----")
const map = new Map();
map.set(10, "Number");
map.set("10", "String");
map.set(true, "Boolean");
map.set("true", "String");

console.log(map.get(10));
console.log(map.get("10"));
console.log(map.get(true));
console.log(map.get("true"));