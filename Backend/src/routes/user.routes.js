import Router from "express"
import { createUser, deleteUser, getUser, showUsers, updateUser, logoutUser } from "../controllers/user.controller.js"
const router = Router()
router.route("/users").post(createUser).get(showUsers)
router.route("/users/:userId").put(updateUser).delete(deleteUser).get(getUser)
router.route("/users/logout").post(logoutUser)
export default router