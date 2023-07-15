import mongoose from "mongoose";

//Creating Scheema
const UserScheema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    unique: true,
  },

  isCompleted: {
    type: Boolean,
    default: false,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

//Creating User in Database
export const task = mongoose.model("task", UserScheema);
