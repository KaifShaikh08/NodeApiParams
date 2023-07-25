import express from "express";
import userRouter from "./Routes/user.js";
import taskRouter from "./Routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
import bodyParser from "body-parser";

export const app = express();

config({
  path: "./data/config.env",
});

//Using Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);

//Get Method
app.get("/", (req, res) => {
  res.send("Nice");
});

app.use(errorMiddleware);
