const languages = ["Fortran", "Lisp", "COBOL"];

const iterator = languages[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/**
Output:
{ value: 'Fortran', done: false }
{ value: 'Lisp', done: false }
{ value: 'COBOL', done: false }
{ value: undefined, done: true }
*/