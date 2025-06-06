import express from "express";
import router from "./routes/job.route.js";
import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()

mongoose
  .connect(process.env.ATLAS_CONNECTION_STRING)
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log("Error in conecting DB", err));

const app = express();

app.use(express.json());

app.use("/api/v1", router);

app.listen(8080, () => console.log("Server is up and running on port 8080"));
