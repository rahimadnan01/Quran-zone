import Router from "express"
import { verifyJwt } from "../middleware/auth.middleware.js"
import { deleteAdmin, updateAdmin } from "../controllers/admin.controller.js"

const router = Router()
router.route("/admin/:adminId").put(verifyJwt("admin"), updateAdmin).delete(verifyJwt("admin"), deleteAdmin)

export default router