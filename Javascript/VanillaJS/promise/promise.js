// function callback() {
//   console.log("콜백함수가 호출");
// }
// setTimeout(callback, 0);

// console.log("작업을 수행");

// function getUsers(callback) {
//   let users = [];
//   setTimeout(() => {
//     const users = [
//       { name: "Kim", email: "kim@gmail.com" },
//       { name: "Lee", email: "lee@gmail.com" },
//       { name: "Park", email: "park@gmail.com" },
//     ];
//     callback(users);
//   }, 1000);
// }

// function findUser(name, callback) {
//   const users = getUsers();
//   const user = users.find((user) => user.name === name);
//   return user;
// }
// let user = findUser("Kim");
// console.log(user);

// let success = false;
// function getUsers() {
//   return new Promise((resolve, reject) => {
//     if (success) {
//       setTimeout(() => {
//         resolve([
//           { name: "Kim", email: "kim@gmail.com" },
//           { name: "Lee", email: "lee@gmail.com" },
//           { name: "Park", email: "park@gmail.com" },
//         ]);
//       }, 1000);
//     } else {
//       reject("실패")
//     }
//   });
// }
// let promise = getUsers();
// promise.then(
//   (users) => console.log(users),
//   (error) => console.log(error)
// );
