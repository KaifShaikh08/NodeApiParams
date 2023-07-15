import mongoose from "mongoose";

//Creating Scheema
const UserScheema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, select: false, required: true },
});

//Creating User in Database
export const User = mongoose.model("user", UserScheema);
