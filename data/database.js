import mongoose from "mongoose"

//Connecting to MongoDb
export const connectDB = () => {
  mongoose
    .connect(process.env.MONOG_URI, {
      dbName: "formapi",
    })
    .then((e) => console.log("Database is running"))
    .catch((e) => console.log("Database is not running"))
}
