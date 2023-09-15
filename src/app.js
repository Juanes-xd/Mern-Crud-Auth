import express from "express";
import morgan from "morgan";
import { configDotenv } from "dotenv";
configDotenv();
const app = express();
app.use(morgan("dev"));

export default app;
