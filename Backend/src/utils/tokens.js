import { User } from "../models/user.model.js";
const generateAccessAndRefreshToken = async (userId) => {
    try {
        let user = await User.findById(userId);
        if (!user) {
            throw new ApiError(400, "user not found");
        }
        let accessToken = user.generateAccessToken();
        let refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });
        await User.findByIdAndUpdate(userId, {
            refreshToken: refreshToken,
        });
        return { accessToken, refreshToken };
    } catch (err) {
        if (err) {
            throw new ApiError(
                500,
                "Something went wrong while generating an access and refresh Tokens",
            );
        }
    }
};
export { generateAccessAndRefreshToken }