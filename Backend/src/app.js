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
import adminAuthRoute from "./routes/authentication/adminAuth.routes.js"
import studentAuthRoute from "./routes/authentication/studentAuth.routes.js"
import teacherAuthRoute from "./routes/authentication/teacherAuth.routes.js"
import userRoute from "./routes/user.routes.js"
import studentRoute from "./routes/Student.routes.js"
import teacherRoute from "./routes/teacher.routes.js"
import adminRoute from "./routes/admin.routes.js"
// declare routes
app.use("/api/v1", adminAuthRoute)
app.use("/api/v1", studentAuthRoute)
app.use("/api/v1", teacherAuthRoute)
app.use("/api/v1", userRoute)
app.use("/api/v1", studentRoute)
app.use("/api/v1", teacherRoute)
app.use("/api/v1", adminRoute)
app.all("*", (req, res, next) => {
  next(new ApiError(404, "Page not found"))
})
app.use(errorHandler)
