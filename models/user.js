import mongoose from "mongoose";

//Creating Scheema
const UserScheema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

//Creating User in Database
export const User = mongoose.model("user", UserScheema);
