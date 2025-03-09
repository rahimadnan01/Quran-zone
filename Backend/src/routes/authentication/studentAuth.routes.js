import Router from "express"
import { loginStudent, registerStudent } from "../../controllers/student.controller.js"
const router = Router()
router.route("/student/register").post(registerStudent)
router.route("/student/login").post(loginStudent)

export default router