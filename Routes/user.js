import express from "express"
import {
  getAllUser,
  registerUser,
  loginUser,
  GetMyProfile,
} from "../controller/user.js"
import { isAuthenticated } from "../middlewares/auth.js"

const router = express.Router()

router.get("/all", getAllUser)

router.get("/me", isAuthenticated, GetMyProfile)

//Post Method
router.post("/register", registerUser)
router.post("/login", loginUser)

export default router
