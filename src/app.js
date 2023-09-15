import express from "express";
import morgan from "morgan";
import { configDotenv } from "dotenv";
import authRoutes from "./routes/auth.route.js";

configDotenv();
const app = express();
app.use(morgan("dev"));
app.use("/api/v1", authRoutes);
app.use(express.json());
export default app;
