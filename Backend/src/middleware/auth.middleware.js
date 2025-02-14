import { wrapAsync } from "../utils/wrapAsync.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken"

const verifyJwt = wrapAsync(async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization").replace("Bearer", "")

        if (!token) {
            throw new ApiError(400, "User is Unauthorized")
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_SECRET_KEY)

        if (!decodedToken) {
            throw new ApiError(500, "Something went wrong while decoding the token")
        }

        let user = await User.findById(decodedToken._id)
        if (!user) {
            throw new ApiError(400, "User not found")
        }
        req.user = user
        next()
    } catch (error) {
        throw new ApiError(500, error.message)
    }
})

export { verifyJwt }