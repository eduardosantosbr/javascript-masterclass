export class Parser {
    constructor() {
        this.commands = new Map();
        this.commands.set("createTable", /create table (\w+) \((.+)\)/);
        this.commands.set("insert", /insert into ([a-z]+) \((.+)\) values \((.+)\)/);
        this.commands.set("select", /select (.+) from ([a-z]+)(?: where (.+))?/);
        this.commands.set("delete", /delete from ([a-z]+)(?: where (.+))?/);
    }

    parse (statement) {
        for(let [command, regExp] of this.commands) {
            const parsedStatement = statement.match(regExp);
            if (parsedStatement) {
                return {
                    command,
                    parsedStatement,
                }
            }
        }
    }
};