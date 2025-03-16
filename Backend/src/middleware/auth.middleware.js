import { wrapAsync } from "../utils/wrapAsync.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken"

const verifyJwt = (role) => wrapAsync(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");


    if (!token) {
      throw new ApiError(401, "Unauthorized User token not found");
    }

    let decodedToken = jwt.verify(token, process.env.ACCESS_SECRET_KEY);

    if (!decodedToken) {
      throw new ApiError(400, "User is unauthorized ");
    }

    let user = await User.findById(decodedToken._id).select("-password");
    if (role && user.role !== role) {
      throw new ApiError(403, `Access Denied only ${role} can accessed to this path`)
    }
    if (!user) {
      throw new ApiError(500, "Something went wrong while decoding the token");
    }

    req.user = user;

    next();
  } catch (error) {
    throw new ApiError(error.statusCode, error.message);
  }
});


export { verifyJwt }