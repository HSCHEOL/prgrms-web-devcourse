// server.js
const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

const index = require("./router/index");
console.log("Index module loaded:", index);
app.use("/", index);

app.listen(5001, () => {
  console.log("Server is running on port 5000");
});
