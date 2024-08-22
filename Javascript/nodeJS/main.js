// import _ from "lodash";
import Data from "./Data.json";
import axios from "axios";

// const userA = [
//   { userId: "1", name: "한승철" },
//   { userId: "1", name: "한승" },
//   { userId: "1", name: "한승철철" },
//   { userId: "1", name: "한승철추" },
// ];

// const userB = [
//   { userId: "1", name: "한승철" },
//   { userId: "1", name: "한승" },
//   { userId: "1", name: "한승철철" },
//   { userId: "1", name: "한승철추" },
// ];

// console.log(_.uniqBy(userA, "userId")); //고유화 작업 중복된것을 제거한다.
// const userD = _.unionBy(userA, userB, "userId"); //여러 데이터 중에서 중복된것 제거

// const foundUser = _.find(userA, { name: "한승철" }); //name:한승철인거를 찾기
// console.log(foundUser);
// const foundUserIndex = _.findIndex(userA, { name: "한승철" }); // 갯수를
// console.log(foundUserIndex);

// _.remove(userA, { name: "한승철" });
// _.remove(userA, { name: "한승철철" });
// console.log(userA);

// console.log(Data);
// const user = {
//   name: "sung",
//   age: 25,
//   emails: ["knr0013@gmail.com"],
// };

// console.log(user);

// const str = JSON.stringify(Data); //JSON.stringify( )는 자바스크립트의 값을 JSON 문자열로 변환한다.
// console.log("문자열변경", str);
// console.log(typeof str);

// const obj = JSON.parse(str); //str을 JSON 형식으로 변경한다. 객체를 -> json
// console.log("json 변경", obj);

// const user = {
//   name: "sung",
//   age: 25,
//   emails: ["knr0013@gmail.com"],
// };

// localStorage.setItem(`user`, JSON.stringify(user));
// console.log(JSON.parse(localStorage.getItem("user")));

// const str = localStorage.getItem("user");
// const obj = JSON.parse(str);
// obj.name = "한승철";
// console.log(obj);
// localStorage.setItem("user", JSON.parse(obj));

const input = document.querySelector("input");
const button = document.querySelector("button");

function fetchMovies() {
  axios
    .get(`https://www.omdbapi.com/?apikey=7035c60c&s=${input.value}`) //api 받아오고
    .then((response) => {
      //then은 바로 이전 반환값을 사용한다.
      // 제대로 받아왔으면 then 실행
      console.log(response);
      const h1El = document.querySelector("h1");
      const imgEl = document.querySelector("img");
      response.data.Search.map((obj) => {
        h1El.innerHTML = `<div>${obj.Title}</div>`;
        imgEl.src = obj.Poster;
      });
      return response;
    })
    .then((response) => {
      console.log("성공", response);
    });
}

button.onclick = () => {
  console.log(input.value);
  fetchMovies();
};
