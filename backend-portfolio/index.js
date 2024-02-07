import express from "express";
import mongoose from "mongoose";
import formRouter from "./routes/form_routes.js";
import { errorMiddleware } from "./utils/error.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({path:"./config/config.env"})

const app = express();
const port = 5000;
const mongoURL = process.env.mongoURL;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/form", formRouter);
app.get("/", (req, res) => {
  res.json("Hello World!");
});

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(errorMiddleware);
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

export default app;
