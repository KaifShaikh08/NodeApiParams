import express from "express";
import userRouter from "./Routes/user.js";
import { config } from "dotenv";

export const app = express();

config({
  path: "./data/config.env",
});

//Using Middleware
app.use(express.json());
app.use("/users", userRouter);

//Get Method
app.get("/", (req, res) => {
  res.send("Nice");
});
