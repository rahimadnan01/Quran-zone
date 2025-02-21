import Router from "express"
import { deleteStudent, getAllStudents, getSingleStudent, updateStudent } from "../controllers/student.controller.js"
import { verifyJwt } from "../middleware/auth.middleware.js"
const router = Router()
router.route("/students").get(verifyJwt("admin"), getAllStudents)
router.route("/students/:studentId").put(verifyJwt("admin"), updateStudent).delete(verifyJwt("admin"), deleteStudent).get(getSingleStudent)

export default router
