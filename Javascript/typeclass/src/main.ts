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

type Name = {
  //타입을 생성
  firstName: string;
  lastName: string;
};

const user: Name = {
  firstName: "한",
  lastName: "승철",
};

type MathO = (a: number, b: number) => number; // 두 숫자를 받아 숫자 반환

const add: MathO = (a, b) => a + b;
const mp: MathO = (a, b) => a * b;
