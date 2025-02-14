import Router from "express"
import { createUser, deleteUser, getUser, showUsers, updateUser } from "../controllers/user.controller.js"
const router = Router()
router.route("/users").post(createUser).get(showUsers)
router.route("/users/:userId").put(updateUser).delete(deleteUser).get(getUser)
export default router