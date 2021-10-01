/** 
 * set(key, value) - sets the value for the key in the map object. 
 * It return the map object itself therefore you can chain this method with other methods.
 * */

const timeUnits = new Map();
timeUnits.set("second", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600);
console.log(timeUnits);