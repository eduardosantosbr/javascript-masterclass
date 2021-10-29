/**
 * A JavaScript class is a blueprint for creating objects. A class encapsulates data and functions that manipulate data.
 * Unlike other programming languages such as Java and C#, JavaScript classes are syntactic sugar over the prototypal inheritance. In other words, ES6 classes are just special functions.
 */

const Square = class {
    constructor(side) {
        this.side = side;
    }

    calculateArea() {
        return Math.pow(this.side, 2);
    }

    toString() {
        return `side: ${this.side} area: ${this.calculateArea()}`;
    }

    static fromArea(area) {
        return new Square(Math.sqrt(area));
    }
}

const square = Square.fromArea(16);
console.log(square.toString());
console.log(square.calculateArea());