// let div = document.querySelector("div");
// function changeContent() {
//   div.outerHTML = "<h1>Dom API</h1> <p>선수 조건: 없음</p>";
// }
//innerHTML에서 지정한 요소 태그를 제외한 안쪽 태그만 값을 가져온다. 자기자신 미포함
//outerHTML에서 지정한 요소 태그도 포함하여 값을 가져오고 선택한 엘리멘트를 포함

// const element = document.getElementsByTagName(`li`);
// [...element].forEach((element) => {
//   element.style.color = "red";
// });

// const elems = document.getElementsByClassName("fruit");
// [...elems].forEach((cur) => {
//   cur.style.color = "red";
// });

// const apple = document.getElementsByClassName("fruit apple");
// [...apple].forEach((cur) => {
//   cur.style.color = "blue";
// });

// const boxEl = document.querySelector(".box");
// boxEl.addEventListener("click", function () {
//   if (boxEl.classList.contains(`active`)) {
//     boxEl.classList.remove("active");
//   } else {
//     boxEl.classList.add("active");
//   }
// });

// // const boxEl = document.querySelector(".box");
// // boxEl.addEventListener("click", function () {
// //   console.log("Click");
// //   boxEl.classList.toggle("active");
// // });

// const boxEls = document.querySelectorAll(".box");
// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`order-${index + 1}`);
// });

// const div = document.getElementsByClassName("my_div");
// const clearbtn = document.getElementsByClassName("clear");
// const result = document.getElementsById("result");

// div.addEventListener("click", (event) => {
//   //잘 안됐던 부분 다시보기
//   result.innerHTML += "<div>click</div>";
// });
// div.addEventListener("mousedown", (event) => {
//   result.innerHTML += "<div>mousedown</div>";
// });
// div.addEventListener("mouseup", (event) => {
//   result.innerHTML += "<div>mousedown</div>";
// });
// clearbtn.addEventListener("click", (event) => {
//   result.innerHTML = "";
// });

// function sayHi(name) {
//   console.log(`Hi ${name}`);
// }

// const button = document.querySelector("button");

// const handleClick = () => console.log(`button click`);

// button.onclick = handleClick;

// button.removeEventListener("click", handleClick);

// button.onclick = null;

// const msg = document.querySelector(".message");
//  const msg = document.getElementsByClassName(".massage");

// function showCoords(e) {
//   msg.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}`;
// }
//  document.onclick = showCoords;

// const fruits = document.getElementById("fruits");
// function activate({ target }) {
//   [...fruits.children].forEach((fruit) => {
//     fruit.classList.toggle("active", fruit === target);
//   });
// }
// document.getElementById("apple").onclick = activate;
// document.getElementById("banana").onclick = activate;
// document.getElementById("cherry").onclick = activate;

// const x = document.forms[0].id;
// console.log(x);
// document.getElementById("show").innerHTML;

// function getInput() {
//   const x = document.forms["form1"];
//   let text = "";
//   for (let i = 0; i < x.length; i++) text += x.elements[i].value + "<br>";
//   document.getElementById("show").innerHTML = text;
// }

// function myFunction() {
//   let name = document.getElementById("name").value;
//   let id = document.getElementById("id").value;
//   let pw = document.getElementById("pass").value;

//   if (pw.length < 1) {
//     document.getElementById("show").innerHTML = "비밀번호를 입력해주세요.";
//   } else if (pw.length > 10) {
//     document.getElementById("show").innerHTML =
//       "비밀번호는 10자 이하이어야 합니다.";
//   } else {
//     document.getElementById("show").innerHTML =
//       "이름:" + name + "<br>" + "ID: " + id + "<br>" + "PW:" + pw;
//   }
//   ["id", "pass"].forEach(
//     (field) => (document.getElementById(field).value = "")
//   );
//   setTimeout(() => {
//     document.getElementById("show").innerHTML = "";
//   }, 2000);
// }

// let check = document.querySelector("#shippingInfo");
// check.addEventListener("click", function () {
//   if (check.checked == true) {
//     document.querySelector("#shippingName").value =
//       document.querySelector("#billingName").value;
//     document.querySelector("#shippingTel").value =
//       document.querySelector("#billingTel").value;
//     document.querySelector("#shippingAddr").value =
//       document.querySelector("#billingAddr").value;
//   } else {
//     document.querySelector("#shippingName").value = "";
//     document.querySelector("#shippingTel").value = "";
//     document.querySelector("#shippingAddr").value = "";
//   }
// });

const labels = document.getElementsByTagName("label");
const inputs = document.getElementsByTagName("input");
[...labels].forEach((label) => {
  label.style.display = "inline-block"; // Ensure labels are block-level elements
  label.style.width = "200px";
  label.style.textAlign = "right";
  label.style.fontSize = "20px";
  label.style.margin = "11px"; // Set margin
});

[...inputs].forEach((input) => {
  input.style.width = "300px";
  input.style.height = "50px";
});

function reg() {
  const id = document.querySelector("#id").value;
  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  const confirm = document.querySelector("#confirm").value;

  if (id && password.length >= 8 && password.length <= 15 && email && confirm) {
    alert("가입완료");
  }
  console.log(id);
}
