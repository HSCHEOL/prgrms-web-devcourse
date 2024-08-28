// type UserT = {
//   name: string;
//   age: number;
// };

// const user: UserT = {
//   name: "한승철",
//   age: 12,
// };

// interface UserI {
//   name: string;
//   readonly age: number;
//   isValid?: boolean; // ?는 있어도 되고 없어도 되고
// }

// const user2: UserI = {
//   name: "한승찰",
//   age: 23,
//   isValid: false,
// };

// user2.age = 22;

// type Name = {
//   //타입을 생성
//   firstName: string;
//   lastName: string;
// };

// const user: Name = {
//   firstName: "한",
//   lastName: "승철",
// };

// type MathO = (a: number, b: number) => number; // 두 숫자를 받아 숫자 반환

// const add: MathO = (a, b) => a + b;
// const mp: MathO = (a, b) => a * b;

// interface Shape {
//   color: string;
// }

// interface Circle extends Shape {
//   radius: number;
// }

// const circle: Circle = {
//   color: "red",
//   radius: 10,
// };

// interface Animal {
//   name: string;
//   age: number;
// }

// interface Dog extends Animal {
//   breed: number;
// }

// const dog: Dog = {
//   name: "콩이",
//   age: 3,
//   breed: 2,
// };

// namespace Exam {
//   export interface Inner {
//     test: string;
//   }
//   export type test2 = number;
// }

// const ex1: Exam.Inner = {
//   test: "hello",
// };

// const ex2: Exam.test2 = 123;

// interface Te {
//   hello: string;
//   world: number;
//   readonly check: boolean;
//   mulitply?: symbol;
// }

// const a: Te = {
//   hello: "hello",
//   world: 2,
//   check: true,
// };

// const obj = {
//   hello: "world",
//   name: "kim",
//   age: 28,
// };

// type Keys = keyof typeof obj;
// type Values = (typeof obj)["hello" | "age"];

// type Arr = [1, 2, 3];
// type First = Arr[1];
// type length = Arr["length"];

// type Arr2 = (string | Boolean)[];
// type El = Arr2[number];

// type HelloHi = {
//   [key in "hello" | "hi"]: string;
// };

// let a: ["hi", "readonly"] = ["hi", "readonly"];
// let b: string[] = ["hi", "normal"];

//   interface Product {
//     name: string;
//     price: number;
//     description?: string;
//   }

// interface Dictionary {
//   [key: string]: string;
// }

// const dictionary: Dictionary = {};

// interface Person<T, A> {
//   type: "human";
//   race: "yellow";
//   name: T;
//   age: A;
// }

// interface Kim extends Person<"kim", 10> {}

// interface Lee extends Person<"Lee", 20> {}

// interface Array<T> {
//   [key: number]: T;
//   length: number;
// }

// const numbers: Array<number> = [1, 2, 3, 4];

// function getMax<T>(a: T, b: T) {
//   return a > b ? a : b;
// }

// const maxNumber = getMax(10, 20);
// const maxString = getMax("apple", "banana");

// console.log(typeof maxNumber);
// function firstEl<T>(arr: T[]) {
//   return arr[0];
// }
// console.log(firstEl([3, 3, 5, 4]));

// type IsString<T> = T extends string ? true : false;

// type Test1 = IsString<1>;

// function addString(x: string, y: string): string {
//   console.log(x + y);
//   return x + y;
// }

// function addNumber(x: number, y: number): number {
//   console.log(x + y);
//   return x + y;
// }
// function add(x: string, y: string): string;
// function add(x: number, y: number): number;
// function add(x: any, y: any): any {
//   console.log(x + y);
//   return x + y;
// }

// interface UserBase {
//   name: string;
//   age: number;
// }

// interface User extends UserBase {
//   updateInfo(newUser: UserBase): User;
//   updateInfo(name: string, age: number): User;
// }
// const user: User = {
//   name: "Han",
//   age: 25,
//   updateInfo(nameOrUser: UserBase | string, age?: number) {},
// };

// interface ToObj<T> {
//   a: T;
//   b: T;
// }

// function toObj<T extends string | number | boolean>(a: T, b: T): ToObj<T> {
//   return { a, b };
// }

// toObj<number>(3, 2);
// toObj<boolean>(true, false);
// toObj(null, null);

// interface User<T, U, V> {
//   name: T;
//   age: U;
//   isValid: V;
// }

// type User<T, U, V> = { name: T; age: U; isValid: V } | [T, U, V];
// type U = User<string, number, boolean>;

// const evan: User<string, number, boolean> = ["Evan", 77, false];

// class Basket<T extends string | number> {
//   public items: T[]; //어디서나 접근 가능하다
//   constructor(...rest: T[]) {
//     this.items = rest;
//   }
//   putItem(item: T) {
//     this.items.unshift(item);
//   }
//   takeOutItems(count: number) {
//     return this.items.splice(0, count); //자른 배열을 반환
//   }
// }

// const fruitsBasket = new Basket<string>("apple", "banana", "cherry");
// fruitsBasket.putItem("orange");
// const fruits = fruitsBasket.takeOutItems(2);
// console.log(fruits);
// console.log(fruitsBasket.items);

// const moneyBasket = new Basket<number>(10000, 1000, 100);
// moneyBasket.putItem(50000);
// const money = moneyBasket.takeOutItems(1);
// console.log(moneyBasket);

// type MyType<T> = T extends string | number ? boolean : never;

// const a: MyType<string> = true;
// const b: MyType<number> = true;

// console.log(typeof a);

type MyExclude<T, U> = T extends U ? never : T;
type MyUnion = string | number | boolean | null;

const a: MyExclude<MyUnion, boolean | null> = 123;
