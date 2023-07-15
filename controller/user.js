import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  res
    .status(201)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 10000,
    })
    .json({
      success: true,
      message: "User registered",
    });
};

export const loginUser = async (req, res) => {};

export const GetuserDetails = async (req, res) => {};

//Extra functins
// export const UpdateUser = async (req, res) => {
//   const { id } = req.params;
//   const user = await User.findById(id);
//   res.json({
//     success: true,
//     Message: "Updated",
//   });
// };
// export const DeleteUser = async (req, res) => {
//   const { id } = req.params;
//   const user = await User.findById(id);
//   res.json({
//     success: true,
//     Message: "Deleted",
//   });
// };
