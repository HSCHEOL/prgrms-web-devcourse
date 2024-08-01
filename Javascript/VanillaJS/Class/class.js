// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Point.prototype = {
//   toString: function () {
//     return `${this.x} , ${this.y}`;
//   },
// };

// let pt1 = new Point(10, 20);
// let pt2 = new Point(100, 200);
// console.log(pt1.toString());
// console.log(pt2.toString());
// console.log(pt1 instanceof Point);

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.getArea = function() {
//     return Math.PI * this.radius **2;
// }
// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea);

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(`Hi ${this.name}`);
//   }
//   static sayHello() {
//     console.log(`Hello`);
//   }
// }
// const me = new Person(`Lee`);
// me.sayHi();
// Person.sayHello();

// const Person = function () {
//   function Person(name) {
//     this.name = name;
//   }
//   Person.prototype.sayJi = function () {
//     console.log(`Hi` + this.name);
//   };
//   Person.sayHello = function () {
//     console.log("Hello");
//   };
//   return Person;
// };
// const me = new Person(`Lee`);
// console.log(me.name);
// me.sayHi();
// Person.sayHello();

// class Square {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   area() {
//     return this.width * this.height;
//   }
//   static area(width, height) {
//     return width * height;
//   }
// }

// const square = new Square(10, 10);
// console.log(square.area());
// console.log(Square.area(20, 10));

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(`안녕하세요. 제 이름은
//         ${this.name}이고 , 나이는 ${this.age}살 입니다.`);
//   }
// }

// const person = new Person("한승철", 25);
// console.log(person.introduce());

// class Calculator {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   static add(a, b) {
//     return a + b;
//   }
//   static subtract(a, b) {
//     return a - b;
//   }
// }

// const a1 = new Calculator(5, 4);
// console.log(Calculator.add(5, 4));

// function Calculator() {}

// Calculator.add = function (a, b) {
//   return a + b;
// };

// Calculator.subtract = function (a, b) {
//   return a - b;
// };
