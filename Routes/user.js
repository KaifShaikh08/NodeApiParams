import express from "express";
import { User } from "../models/user.js";
import {
  getAllUser,
  registerUser,
  GetuserDetails,
  loginUser,
} from "../controller/user.js";

const router = express.Router();

router.get("/all", getAllUser);

router.route("/userid/:id").get(GetuserDetails);

//Post Method
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
