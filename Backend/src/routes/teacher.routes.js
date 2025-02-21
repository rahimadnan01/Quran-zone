import Router from "express"
import { verifyJwt } from "../middleware/auth.middleware.js"
import { deleteTeacher, getAllTeachers, getSingleTeacher, updateTeacher } from "../controllers/teacher.controller.js"
const router = Router()
router.route("/teachers").get(verifyJwt("admin"), getAllTeachers)
router.route("/teachers/:teacherId").put(verifyJwt("admin"), updateTeacher).delete(verifyJwt("admin"), deleteTeacher).get(getSingleTeacher)

export default router