class Rectangle {
  constructor(length, breadth) {
    Rectangle.validate(length, breadth);

    this.length = length;
    this.breadth = breadth;
  }

  calculateArea() {
    return this.length * this.breadth;
  }

  calculatePerimeter() {
    return this.length * 2 + this.breadth * 2;
  }
  calculateDiagonalLength() {
    return Math.sqrt(this.length ** 2 + this.breadth ** 2);
  }

  hasBiggerArea(otherRectangle) {
    return this.calculateArea > otherRectangle.calculateArea();
  }

  isEqual(otherRect) {
    if (!(otherRect instanceof Rectangle)) {
      false;
    }
    return this.length === otherRect.length && this.width === otherRect.breadth;
  }

  static validate(length, breadth) {
    const errors = [];

    if (!this.isValidateLength(length)) {
      errors.push("Invalid value for length, only positive value are allowed");
    }
    if (!this.isValidateLength(breadth)) {
      errors.push("Invalid value for breadth, only positive value are allowed");
    }

    if (errors.length) {
      throw Error(errors);
    }
  }

  static isValidateLength(n) {
    return !isNaN(n) && n > 0;
  }
}

class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }

  isEqual(otherSquare) {
    if (!(otherSquare instanceof Square)) {
      false;
    }
    return this.length === otherSquare.length;
  }
}

const rect1 = new Rectangle(12, 5);
console.log(
  `rect1: area: ${rect1.calculateArea()}, perimeter: ${rect1.calculatePerimeter()}, diagonal: ${rect1.calculateDiagonalLength()}`
);

const rect2 = new Rectangle(18, 13);
console.log(
  `rect2: area: ${rect2.calculateArea()}, perimeter: ${rect2.calculatePerimeter()},`
);

console.log(rect1.hasBiggerArea(rect2));

console.log(rect1.isEqual(new Rectangle(10, 5)));

console.log(rect1.isEqual(new Rectangle(5, 10)));
console.log(rect1.isEqual({ length: 10, breadth: 5 }));

const rect4 = new Rectangle(20, 5);
const square1 = new Square(10);

console.log(
  `rect4 area === square1 area`,
  rect4.calculateArea(),
  square1.calculateArea()
);

console.log(square1.isEqual(new Square(10)));

// const invalidRectangle = new Rectangle(10);
// console.log(
//   invalidRectangle.calculateArea(),
//   invalidRectangle.calculatePerimeter()
// );
