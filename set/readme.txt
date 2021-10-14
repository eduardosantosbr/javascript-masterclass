Introduction to the JavaScript Set Object

ES6 provides a new type named Set that stores a collection of unique values of any type.

Useful Set methods

The Set object provides the following useful methods:

add(value) - appends a new element with a specified value to the set. It returns the Set object, therefore, you can chain this method with another Set method.
clear() - removes all elements from the Set object.
delete(value) - deletes an element specified by the value.
entries() - return a new Interator that contains an array of [values, value].
forEach(callback [, thisArg]) - invokes a callback on each element of the Set with the this value sets to thisArg in each call.
has(value) - return true if an element with a given value is in the set, or false if it is not.
keys() - is t he same as values() function.

WeakSets

A WeakSet is similar to a Set except that itt contains only object.
Since objects in a WeakSet may be automatically garbage-collected, a WeakSet does not have  size property.
Like a WeakMap, you cannot interate elements of a WeakSet, therefore, you will find that WeakSet is rarely used in practice.
In fact, you only use a WeakSet to check if a specified value is in the set.