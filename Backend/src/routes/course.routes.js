import Router from "express"
const router = Router()
import { verifyJwt } from "../middleware/auth.middleware.js"
import { upload } from "../middleware/multer.middleware.js"
import { createCourse, deleteCourse, getAllCourses, getSingleCourse, updateCourse } from "../controllers/courses.controller.js"
router.route("/courses").post(verifyJwt("admin"), upload.fields([
    {
        name: "thumbnail",
        maxCount: 1
    }
]), createCourse).get(getAllCourses)
router.route("/courses/:courseId").put(verifyJwt("admin"), upload.fields([
    {
        name: "thumbnail",
        maxCount: 1
    }
]), updateCourse).delete(verifyJwt("admin"), deleteCourse).get(getSingleCourse)

export default router
