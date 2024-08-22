import express from "express";
import { create } from "../controller/userController";

const route = express.Router();

route.post("/create", create);

export default route;
