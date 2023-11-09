import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, MongoDbUrl } from "./config.js";
import PostRoute from "./routes/PostRoute.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["https://ctc-web.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to MERN Stack");
});

app.use("/Post", PostRoute);

mongoose
  .connect(MongoDbUrl)
  .then(() => {
    console.log("App is connected to the database");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
