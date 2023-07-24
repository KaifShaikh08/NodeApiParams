import mongoose from "mongoose";

//Connecting to MongoDb
export const connectDB = () => {
  mongoose
    .connect(process.env.MONOG_URI, {
      dbName: "formapi",
    })
    .then((c) => console.log(`Database is connected ${c.connection.host}`))
    .catch((e) => console.log("Database is not connected"));
};
