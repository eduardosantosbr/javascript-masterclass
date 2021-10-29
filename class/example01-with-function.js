const Square = function(size) {
    this.size = size;
}

Square.prototype.toString = function() {
    return `size: ${this.size} area: ${this.calculateArea()}`;
}

Square.prototype.calculateArea = function() {
    return Math.pow(this.size, 2);
}

Square.fromArea = function(area) {
    return new Square(Math.sqrt(area));
}

const square = Square.fromArea(16);
console.log(square.toString());
console.log(square.calculateArea());