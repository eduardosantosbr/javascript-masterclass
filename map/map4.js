/**
 * has(key) - return true if a value associated with the key exists, otherwise, return false.
 */

 const timeUnits = new Map();
 timeUnits.set("second", 1);
 timeUnits.set("minute", 60);
 timeUnits.set("hour", 3600);
 
 console.log(timeUnits.has(("hour")));