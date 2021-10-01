/**
 * get(key) - return the value associated with the key. 
 * If the key does not exist, it returns undefined.
 */

 const timeUnits = new Map();
 timeUnits.set("second", 1);
 timeUnits.set("minute", 60);
 timeUnits.set("hour", 3600);
 
 console.log(timeUnits.get(("hour")));
 console.log(timeUnits.get(("not-exist")));