/**
 * delete(key) - removes an element specified by the key. 
 * It returns if the element is in the map, or false if it does not.
 */

 const timeUnits = new Map();
 timeUnits.set("second", 1);
 timeUnits.set("minute", 60);
 timeUnits.set("hour", 3600);

 console.log(timeUnits.size);
 console.log(timeUnits.delete("hour")); 
 console.log(timeUnits.size);