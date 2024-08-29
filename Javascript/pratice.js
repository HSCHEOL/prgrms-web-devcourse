// 1
// const numbers = [5, 10, 15, 20, 25, 30];

// numbers.forEach((element, index) => {
//   if (element % 2 === 0) {
//     numbers.splice(index, 1);
//   }
// });

// console.log(numbers);

// 2번
// const fruits = [
//   {
//     name: "apple",
//     number: 2,
//     price: 1000,
//   },
//   {
//     name: "banana",
//     number: 3,
//     price: 2500,
//   },
//   {
//     name: "orange",
//     number: 5,
//     price: 5000,
//   },
// ];

// function findFruit(FruitsName) {
//   Findfruits = fruits.find((fruits) => fruits.name === FruitsName);
//   if (Findfruits) {
//     console.log(
//       `과일: ${Findfruits.name}
//     수량: ${Findfruits.number}
//     가격: ${Findfruits.price}`
//     );
//   } else {
//     console.log("과일 없음");
//   }
// }

// findFruit("apple");

// find를 사용해서 할 수가 있나?
// const array = ["javascript", "csssdfsdf", "react", "html"];

// const Array2 = array.filter((element) => element.length >= 5);
// console.log(Array2);

const number = [5, 19, 42, 36, 70];
const number2 = number2.map((element) =>
  (element * 2) % 3 === 0 ? element * 2 : element
);

console.log(number2);
