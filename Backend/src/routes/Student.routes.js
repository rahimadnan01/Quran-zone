import Router from "express"
import { createStudent, deleteStudent, getAllStudents, getSingleStudent, updateStudent } from "../controllers/student.controller.js"
import { verifyJwt } from "../middleware/auth.middleware.js"
const router = Router()
router.route("/students").get(verifyJwt, getAllStudents)
router.route("/users/:userId/students").post(verifyJwt, createStudent)
router.route("/users/:userId/students/:studentId").put(verifyJwt, updateStudent).delete(verifyJwt, deleteStudent).get(verifyJwt, getSingleStudent)

export default router
