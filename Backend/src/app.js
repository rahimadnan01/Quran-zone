import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/errorHandler.js";
import { ApiError } from "./utils/ApiError.js";
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(cookieParser());
export { app };

// route import
import authRoute from "./routes/auth.routes.js"
import userRoute from "./routes/user.routes.js"
import studentRoute from "./routes/Student.routes.js"
// declare routes
app.use("/api/v1/auth", authRoute)
app.use("/api/v1", userRoute)
app.use("/api/v1", studentRoute)
app.all("*", (req, res, next) => {
  next(new ApiError(404, "Page not found"))
})
app.use(errorHandler)
