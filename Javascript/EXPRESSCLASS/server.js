const express = require("express");
const app = express();
const port = 3000;
const path = require("path"),
  async = require("async"),
  fs = require("fs");

app.use(express.static(__dirname + "/pubilc"));

app.listen(3000, () => {
  console.log("서버 실행이다");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/post", (req, res) => {
  res.send("포스트 페이지 입니다.");
});

app.get("/shop", (req, res) => {
  res.send("쇼핑페이지");
});
