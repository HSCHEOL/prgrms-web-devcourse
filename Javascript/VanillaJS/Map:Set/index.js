// const set = new Set();
// console.log(set);

// const set1 = new Set([1, 2, 3, 3]);
// console.log(set1);

// const uniq = (array) => [...new Set(array)];
// console.log(uniq([2, 1, 2, 3, 4, 5]));

// const { size } = new Set([1, 2, 3, 3]);
// console.log(size);

// const set = new Set();
// set.add(1).add(2);
// console.log(set);

// const set = new Set([1, 2, 3]);
// // console.log(set.has(3));   //특정요소가 존재하는가?
// set.clear();
// console.log(set);

// let odds = new Set([1, 3, 5, 7, 9]);
// let sum = 0;
// for (let o of odds) {
//   sum += o;
// }

// let product = 1;
// odds.forEach((o) => (product *= o));
// console.log(product);

// const userID = [101, 102, 101, 103, 102];
// const uniqueUserIDs = new Set(userID);

// console.log(uniqueUserIDs);

// uniqueUserIDs.forEach((user) => {
//   console.log(`ID: ${user}`);
// });

// const tags = ["JS", "CSS", "HTML", "CSS"];
// const newTags = new Set(tags);

// newTags.forEach((cur) => {
//   console.log(`태그는 : ${cur}`);
// });

// const set = new Set([1, 2, 3]);
// console.log([...set]);
// const [a, ...rest] = set;
// console.log(a, rest);

// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([4, 2, 3]);
// let union = new Set([...set1, ...set2]);
// let intersection = new Set([...set1].filter((x) => set2.has(x)));
// console.log(intersection);
// let difference = new Set([...set1].filter((x) => !set2.has(x)));
// console.log(difference);

// let { size } = new Set(["I am a student"]);
// console.log(size);

// const map1 = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
// ]);
// console.log(map1);
// const map2 = new Map([[1, 2]]);
// console.log(map2);
// const map = new Map([
//   ["key1", "value1"],
//   ["key1", "value2"],
// ]);
// map.set("key2", "sss");
// console.log(map);

// const map = new Map();
// const lee = { name: "Lee" };
// const kim = { name: "KIm" };
// map.set(lee, `developer`).set(kim, `designer`);
// console.log(map.clear());
// console.log(map);

// let map = new Map();
// map
//   .set(0, "zero")
//   .set(1, "one")
//   .forEach((value, key) => console.log(key, value));

//문제

// number = [3, 7, 12, 3, 12, 3];

// const set = new Set(number);
// console.log(set);

// const book = new Map([
//   ["title", "유럽 책방 문화 탐구"],
//   ["author", "한미화"],
//   ["price", "2223"],
// ]);
// let text = "";
// book.forEach(function (value, key) {
//   text += key + ":" + value;
// });
// console.log(text);
