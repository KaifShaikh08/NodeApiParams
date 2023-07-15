import { User } from "../models/user.js";

export const getAllUser = async (req, res) => {
  const users = await User.find({});
  console.log(req.query);
  res.json({
    success: true,
    users,
  });
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  res.status(201).cookie("I am in ", "token").json({
    success: true,
    Message: "Registered Succesfully",
  });
};

export const GetuserDetails = async (req, res) => {
  // const { id } = req.body;
  const { id } = req.params;
  const user = await User.findById(id);
  res.json({
    success: true,
    user,
  });
};
export const UpdateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json({
    success: true,
    Message: "Updated",
  });
};
export const DeleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  await user.remove();
  res.json({
    success: true,
    Message: "Deleted",
  });
};
export const CrudOperation = "Crud";
