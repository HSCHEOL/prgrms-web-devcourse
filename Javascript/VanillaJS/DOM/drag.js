// const item = document.querySelector(".item");
// const container = document.querySelector(".container");
// const container2 = document.querySelector(".container2");

// item.addEventListener("dragstart", () => {
//   console.log("드래그 시작!");
// });

// // item.addEventListener("drag", (e) => {
// //   console.log("드래그 하면 나와라!");
// // });

// container.addEventListener("dragenter", (e) => {
//   console.log("1박스 영억에 최초 진입!");
// });
// container.addEventListener("dragleave", (e) => {
//   console.log("1박스 영역 탈출");
// });

// container.addEventListener("dragover", (e) => {
//   console.log("1여기 있어!");
//   e.preventDefault();
// });

// container.addEventListener("drop", (e) => {
//   console.log("1놓다");
// });

// container2.addEventListener("dragenter", (e) => {
//   console.log("2박스 영억에 최초 진입!");
// });
// container2.addEventListener("dragleave", (e) => {
//   console.log("2박스 영역 탈출");
// });

// container2.addEventListener("dragover", (e) => {
//   console.log("2여기 있어!");
//   e.preventDefault();
// });
// container2.addEventListener("drop", (e) => {
//   console.log("2놓다");
// });

// document.getElementById("appendChildBtn").onclick = function () {
//   const parent = document.getElementById("parent");
//   const newElement = document.createElement("div");
//   newElement.textContent = "New Child";
//   parent.appendChild(newElement);
// };

// document.getElementById("inserBeforeBtn").onclick = function () {
//   const parentEl = document.getElementById("parent");
//   const newEl = document.createElement("div");
//   newEl.textContent = "New Child";

//   const reference = document.getElementById(`reference`);
//   parentEl.insertBefore(newEl, reference);
// };

const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", () => {
    const draggable = document.querySelector(".dragging");
  });
});
