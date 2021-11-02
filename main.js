import {Database} from './database.js';

const statements = [
    "create table author (id number, name string, age number, city string, state string, country string)",
    "insert into author (id, name, age) values (1, Douglas Crockford, 62)",
    "insert into author (id, name, age) values (2, Linus Torvalds, 47)",
    "insert into author (id, name, age) values (3, Martin Fowler, 54)",
    "delete from author where id = 2",
];

const database = new Database();
statements.forEach(statement => {
    try {
        database.execute(statement);
    } catch (error) {
        console.log(error.message);
    }
});
console.log(JSON.stringify(database, undefined, 4));