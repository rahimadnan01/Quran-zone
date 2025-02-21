import Router from "express"
import { verifyJwt } from "../../middleware/auth.middleware.js"
import { loginAdmin, logoutAdmin, registerAdmin } from "../../controllers/admin.controller.js"
const router = Router()
router.route("/admin/register").post(verifyJwt("admin"), registerAdmin)
router.route("/admin/login").post(loginAdmin)
router.route("/admin/logout").post(logoutAdmin)

export default router