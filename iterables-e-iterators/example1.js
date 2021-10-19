const languages = ["Fortran", "Lisp", "COBOL"];

for(let i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}

for(let i in languages) {
    console.log(languages[i]);
}

languages.forEach((language) => {
    console.log(language);
});

for(let language of languages) {
    console.log(language);
}