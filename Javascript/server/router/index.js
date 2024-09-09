// ./router/index.js
const express = require("express");
const router = express.Router();

// 예제 라우트
router.get("/api/todo", (req, res) => {
  res.send({
    name: "힌승",
    age: 10,
  });
});

module.exports = router;
