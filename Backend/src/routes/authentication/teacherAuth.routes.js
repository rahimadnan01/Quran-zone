import Router from "express"
import { verifyJwt } from "../../middleware/auth.middleware.js"
import { loginTeacher, logoutTeacher, registerTeacher } from "../../controllers/teacher.controller.js"
const router = Router()
router.route("/teacher/register").post(verifyJwt("admin"), registerTeacher)
router.route("/teacher/login").post(loginTeacher)
router.route("/teacher/logout").post(logoutTeacher)
export default router