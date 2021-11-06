function createIterable(...array) {
    return {
        [Symbol.iterator]() {
            let i = 0;
            return {
                next() {
                    if (i < array.length) {
                        return {
                            value: array[i++],
                            done: false,
                        }
                    } else {
                        return {
                            value: undefined,
                            done: true,
                        }
                    }
                }
            }
        }
    };
}

const languages = createIterable("Fortran", "Lisp", "COBOL");
for (let language of languages) {
    console.log(language);
}