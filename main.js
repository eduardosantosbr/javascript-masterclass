const DatabaseError = function (statement, message) {
    return {
        statement,
        message,
    };
}

const Parser = function() {
    const commands = new Map();
    commands.set("createTable", /create table (\w+) \((.+)\)/);
    commands.set("insert", /insert into ([a-z]+) \((.+)\) values \((.+)\)/);
    commands.set("select", /select (.+) from ([a-z]+)(?: where (.+))?/);
    commands.set("delete", /delete from ([a-z]+)(?: where (.+))?/);

    this.parse = function(statement) {
        for(let [command, regExp] of commands) {
            const parsedStatement = statement.match(regExp);
            if (parsedStatement) {
                return {
                    command,
                    parsedStatement,
                }
            }
        }
    }
}

const database = {
    tables: {},
    parser: new Parser(),
    createTable(parsedStatement) {
        let [, tableName, columns] = parsedStatement; //Destructuring 

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
    insert(parsedStatement) {
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
    select(parsedStatement) {
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
        return rows;
    },
    delete(parsedStatement) {
        let [, tableName, whereClause] = parsedStatement;
        if (whereClause) {
            let [columnWhere, valueWhere] = whereClause.split(" = ");
            this.tables[tableName].data = this.tables[tableName].data.filter(function (row) {
                return row[columnWhere] !== valueWhere;
            });
        } else {
            this.tables[tableName].data = [];
        }
        console.log(this.tables[tableName].data);
    },
    execute(statement) {
        const result = this.parser.parse(statement);
        if (result) {
            return this[result.command](result.parsedStatement);
        }
        throw new DatabaseError(statement, `Syntax error: ${statement}`);
    }
};

const statements = [
    "create table author (id number, name string, age number, city string, state string, country string)",
    "insert into author (id, name, age) values (1, Douglas Crockford, 62)",
    "insert into author (id, name, age) values (2, Linus Torvalds, 47)",
    "insert into author (id, name, age) values (3, Martin Fowler, 54)",
    "delete from author where id = 2",
];

statements.forEach(statement => {
    try {
        database.execute(statement);
    } catch (error) {
        console.log(error.message);
    }
});
console.log(JSON.stringify(database, undefined, 4));