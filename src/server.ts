import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { setupRoutes } from "./app";

dotenv.config({path:'.env'});

const app: Application = express();
const PORT = process.env.PORT;

setupRoutes(app);

const DB = process.env.DATABASE_URL || "";
if (!DB) {
  throw new Error("DATABASE_URL is not defined in the environment variables");
}
mongoose
  .connect(DB)
  .then(() => console.log("DB Connection Successful"))
  .catch((err: any) => console.error("DB Connection Error:", err));

app.listen(PORT, () => {
  console.log(`CV-Prime-Pro running on port ${PORT}.... `);
});