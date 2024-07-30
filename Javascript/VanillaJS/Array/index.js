// const me = [1, 2, 3, 4, 5];

// let carSales = [
//   300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450,
// ];

// let carSales2 = new Array(
//   300,
//   350,
//   400,
//   450,
//   500,
//   600,
//   650,
//   620,
//   580,
//   620,
//   580,
//   620,
//   500,
//   450
// );

// let copy = Array.from(carSales);

// let concat = [0, 10, 20, carSales.sort()];

// let number = [..."0123456789"];
// //확산 연산자

// carSales[12] = -50;

// let a = [..."1234567890"];
// a.length = 0; w

// console.log(a);

// for (let sale of carSales) {
//   sum += sale;
// }
// let average = sum / carSales.length;

// let sum = 0;
// for (let [index, sale] of carSales.entries()) { //entries는 객체를 배열로
//   if (index % 2 === 0) {
//     sum += sale;
//   }
// }

// let list = [4, 5, 6];
// for (let i in list) { //인덱스 뽑기
//       console.log(i);
// }
// for (let i of list) { //값 뽑기
//   console.log(i);
// }

// const car = {
//   maker: "BMW",
//   color: "red",
//   year: "2012",
// };

// for (let prop in car) {
//   console.log(prop);
// }

// let sum = 0;
// carSales.forEach((Curent) => {
//   sum += Curent;
// });
// let average = sum / carSales.length;

// carSales.forEach((sale, index, array) => {
//   array[index] = sale + 50;
// });

// let sum = 0;
// let newCarSales = carSales.map((cur) => cur + 100);

// let highSales = carSales.filter((sale) => sale > 500);

// let evenSales = carSales.filter((index, sale) => index % 2 === 1);

// let firstSaleSix = carSales.find((sale) => sale >= 600); //조건에 맞는 첫번째 값을
// let firstSaleSixIndex = carSales.findIndex((sale) => sale > 600); //조건에 맞는 첫번째 값의 인덱스

// let highest = carSales.reduce((t1, t2) => (t1 > t2 ? t1 : t2));

// let flat = [1, [2, 3]].flat(); // 배열 속 배열을 풀어서 하나의 배열로 만들기.

// let message = ["오늘은", "비가 옵니다."];
// let words = message.flatMap((msg) => msg.split(""));

// const array1 = ["a", "b", "c"];
// const array2 = ["a", "b", "f"];
// const array3 = array1.concat(array2);

// let original = [1, 2, 3];
// let newArray;

// newArray = original.concat([4, 5], [6, 7]);

// let a = [1, 2, 3, 4, 5];
// // // a.splice(0, 2);

// // a.splice(0, 2, 10, 20);
// // console.log(a);
// let b = a.slice(0, 2);
// let c = a.slice(1, -1);
// console.log(b);
// console.log(a);
// console.log(c);

// let a = new Array(5);

// // a.fill(1, 1);
// a.fill(1, 1, -1);

// console.log(a);

// let a = [0, 1, 2, 3, 2, 1, 0];

// let b = a.indexOf(2);
// let c = a.lastIndexOf(2);
// let d = a.indexOf(5);
// console.log(d );

// let a = [0, true, 2, false, NaN];
// let b = a.includes(NaN);

// let a = [-2, -3, -1, -6];

// let b = a.sort();

// let c = [22, 333, 121];
// let d = c.sort();
// console.log(c);
// let e = c.sort((a, b) => a - b);
// console.log(e);

// let a = [1, 2, 3];
// let b = a.join("");
// console.log(b);

// let scores = [67, 82, 97, 100, 92];

// // 1번 문제
// // for (i = 0; i < scores.length; i++) {
// //   console.log(scores[i]);
// // }

// // 2번 문제
// for (let i of scores) {
//   document.write(i);
// }

// let tel = ["010", "1234", "5678"];

// let tel1 = tel.join("-");

// console.log(tel1);

//let arr = new Array(3);
// for (let i; i < arr.length; i++) {
//   arr[i] = new Array(3);
// }

let arr = Array.from(new Array(2), () => new Array(3));

// arr[0][0] = 1;
// arr[0][1] = 2;
// arr[0][2] = 3;
// arr[1][0] = 4;
// arr[1][1] = 5;
// arr[1][2] = 6;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; ++j) {
//     console.log(arr[i][j]);
//   }
// }

// let sum, average;

// const scores = [
//   [83, 90, 70, 87],
//   [87, 93, 62, 83],
//   [98, 90, 77, 97],
// ];
// text = "";
// for (let i = 0; i < 3; i++) {
//   sum = 0;
//   for (let j = 0; j < 4; j++) {
//     sum += scores[i][j];
//   }
//   average = sum / 4;
//   text += i + 1 + "번째 학생의 합계:" + sum + ", 평균: " + average + "<br>";
// }

// document.write(text);

// let mathScores = [90, 85, 70, 86, 97];

// let dfs = mathScores.reduce((acc, cur) => acc + cur) / mathScores.length;

// console.log(dfs.toFixed(0));

let number2 = [1, 3, 5];

let dfs = number2.map((cur) => cur * 10);

console.log(dfs);
