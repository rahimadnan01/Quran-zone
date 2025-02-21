import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { wrapAsync } from "../utils/wrapAsync.js";
import { User } from "../models/user.model.js";

const refreshAccessToken = wrapAsync(async (req, res) => {
    const incomingRefreshToken =
        req.cookies?.refreshToken || req.body.refreshToken;
    console.log("incoming :", incomingRefreshToken);
    if (!incomingRefreshToken) {
        throw new ApiError(500, "failed to fetch incoming token");
    }

    let verifyRefreshToken;

    try {
        verifyRefreshToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET,
        );

        console.log("verifiedToken", verifyRefreshToken);
    } catch (error) {
        throw new ApiError(500, error.message);
    }

    if (!verifyRefreshToken) {
        throw new ApiError(400, "User is unauthorized");
    }

    const user = await User.findById(verifyRefreshToken._id);
    console.log("user:", user.refreshToken);
    if (incomingRefreshToken !== user.refreshToken) {
        throw new ApiError(400, "User is unauthorized");
    }

    let { accessToken, refreshToken: newRefreshToken } =
        await generateAccessAndRefreshToken(user._id);

    if (!accessToken || !newRefreshToken) {
        throw new ApiError(
            500,
            "Something went wrong while refreshing access token",
        );
    }

    let options = {
        httpOnly: true,
        secure: true,
    };

    res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200,
                "refresh Access token successfully",
                {
                    accessToken,
                    refreshToken: newRefreshToken,
                }
            ),
        );
});

export { refreshAccessToken }