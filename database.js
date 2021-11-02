import { Parser } from './parser.js';
import { DatabaseError } from './database-error.js';

export class Database {
    constructor() {
        this.tables = {};
        this.parser = new Parser();
    }

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
    }

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
    }

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
    }

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
    }

    execute(statement) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = this.parser.parse(statement);
                if (result) {
                    resolve(this[result.command](result.parsedStatement));
                }
                reject(new DatabaseError(statement, `Syntax error: ${statement}`));
            }, 1000);
        });
    }
};