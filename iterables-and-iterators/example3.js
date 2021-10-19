const languages = new Map([["Fortran", 1957], ["Lisp", 1958],["COBOL", 1959]]);

/**
 * ES6 provides a new feature called destructing assignment that allows you destructure properties of an object or elements of an array into individual variables.
 */
for(let [language, year] of languages) {
    console.log(language, year);
}