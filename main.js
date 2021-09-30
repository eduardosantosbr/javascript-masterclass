const DatabaseError = function (statement, message) {
    return {
        statement,
        message,
    };
}

const database = {
    tables: {},
    createTable(statement) {
        const regExp = /create table (\w+) \((.+)\)/;
        const result = statement.match(regExp);
        let [, tableName, columns] = result;

        this.tables[tableName] = {
            columns: {},
            data: [],
        };

        columns = columns.split(",");

        for (let column of columns) {
            column = column.trim().split(" ");
            const [name, type] = column;
            this.tables[tableName].columns[name] = type;
        }
    },
    insert(statement) {
        const regExp = /insert into ([a-z]+) \((.+)\) values \((.+)\)/;
        const parsedStatement = statement.match(regExp);
        let [, tableName, columns, values] = parsedStatement; //Destructuring 
        columns = columns.split(", ");
        values = values.split(", ");
        let row = {};
        for (let i = 0; i < columns.length; i++) {
            const column = columns[i];
            const value = values[i];
            row[column] = value;
        }
        this.tables[tableName].data.push(row);
    },
    select(statement) {
        const regExp = /select (.+) from ([a-z]+)(?: where (.+))?/;
        const parsedStatement = statement.match(regExp);
        let [, columns, tableName, whereClause] = parsedStatement; //Destructuring 
        columns = columns.split(", ");
        let rows = this.tables[tableName].data;

        if (whereClause) {
            const [columnWhere, valueWhere] = whereClause.split(" = ");
            rows = rows.filter(function (row) {
                return row[columnWhere] === valueWhere;
            });
        }

        rows = rows.map(function (row) {
            let selectedRow = {};
            columns.forEach(function (column) {
                selectedRow[column] = row[column];
            })
            return selectedRow;
        });
        return [];
    },
    execute(statement) {
        if (statement.trim().startsWith("create table")) {
            return this.createTable(statement);
        }
        if (statement.startsWith("insert")) {
            return this.insert(statement);
        }
        if (statement.startsWith("select")) {
            return this.select(statement);
        }
        throw new DatabaseError(statement, `Syntax error: ${statement}`);
    }
};

const statements = [
    "create table author (id number, name string, age number, city string, state string, country string)",
    "insert into author (id, name, age) values (1, Douglas Crockford, 62)",
    "insert into author (id, name, age) values (2, Linus Torvalds, 47)",
    "insert into author (id, name, age) values (3, Martin Fowler, 54)",
    "select name, age from author",
    "select name, age from author where id = 1",
];

statements.forEach(statement => {
    try {
        database.execute(statement);
    } catch (error) {
        console.log(error.message);
    }
});
console.log(JSON.stringify(database, undefined, 4));