const classicLanguages = ["Fortran", "Lisp", "COBOL"];
const modernLanguages = ["Python", "Ruby", "JavaScript"];

languages = classicLanguages.concat(modernLanguages);
console.log(languages);

/**
 * ES6 provides a new operator called spread operator that consists of three dots (...).
 * The spread operator allows you to spread out elements of an iterable object such as an array, a map, or a set.
 */
languages = [...classicLanguages, ...modernLanguages];
console.log(languages);