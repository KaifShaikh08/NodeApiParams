import express from "express";
import { User } from "../models/user.js";
import {
  getAllUser,
  registerUser,
  GetuserDetails,
  UpdateUser,
  DeleteUser,
} from "../controller/user.js";

const router = express.Router();

router.get("/all", getAllUser);

router.get("/userid/:id", GetuserDetails);
router.put("/userid/:id", UpdateUser);
router.get("/userid/:id", DeleteUser);

//Post Method
router.post("/new", registerUser);

export default router;
