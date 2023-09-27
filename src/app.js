import express from "express";
import morgan from "morgan";
import cors from "cors";
import { configDotenv } from "dotenv";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import taskRoutes from "./routes/task.routes.js";
configDotenv();
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use("/api/v1", authRoutes);
app.use("/api/v1", taskRoutes);
app.use(express.json());
app.use(cookieParser());
export default app;
