import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendCookie } from "../utils/features.js";

export const getAllUser = async (req, res) => {};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user) {
    res.status(404).json({
      success: false,
      message: "user already exist",
    });
  }
  const hashPass = await bcrypt.hash(password, 10);
  user = await User.create({ name, email, password: hashPass });

  sendCookie(user, res, "Registered Successfully", 201);
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = User.findOne({ email }).select("+password");

  if (!user)
    res.status(404).json({
      success: false,
      message: "Invalid Email or Password",
    });

  const isMatch = bcrypt.compare(password, user.passsword);

  if (!isMatch)
    res.status(404).json({
      success: false,
      message: "Invalid Email or Password",
    });
};
export const GetuserDetails = async (req, res) => {};
