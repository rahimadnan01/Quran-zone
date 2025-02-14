import { wrapAsync } from "../utils/wrapAsync.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Student } from "../models/Student.model.js";
import { Teacher } from "../models/teacher.model.js";
import jwt from "jsonwebtoken"
const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)
        let accessToken = user.generateAccessToken()
        let refreshToken = user.generateRefreshToken()
        user.refreshToken = refreshToken
        let updatedUser = await User.findByIdAndUpdate(userId,
            {
                $set: {
                    refreshToken: refreshToken
                }
            }
        )

        await user.save({ validateBeforeSave: false })
        return { accessToken, refreshToken }
    } catch (error) {
        throw new ApiError(500, error.message)
    }
}

const registerUser = wrapAsync(async (req, res) => {
    let { username, email, password, role } = req.body
    if (!username || !email || !password || !role) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({ $or: [{ username }, { email }] })

    if (existedUser) {
        throw new ApiError(401, "username and email already exists")
    }

    const user = new User({
        username: username,
        email: email,
        password: password,
        role: role
    })

    await user.save()
    if (!user) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    let student;
    let teacher;
    if (user.role === "student") {
        student = await Student.create({
            user: user._id
        })
        if (!student) {
            throw new ApiError(500, "Something went wrong while creating student")
        }
    }

    if (user.role === "teacher") {
        teacher = await Teacher.create({
            user: user._id
        })
        if (!teacher) {
            throw new ApiError(500, "Something went wrong while creating teacher")
        }
    }

    const registeredUser = await User.findById(user._id).select("-password")

    if (!registeredUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    res.status(200)
        .json(new ApiResponse(
            200,
            registeredUser,
            "user created successfully"
        ))
})


const loginUser = wrapAsync(async (req, res) => {
    let { email, password, } = req.body

    if (!email || !password) {
        throw new ApiError(400, "All fields are required")
    }

    const user = await User.findOne({
        email: email
    })

    if (!user) {
        throw new ApiError(400, "User not found invalid credentials")
    }

    let isValid = await user.isPasswordCorrect(password)

    if (!isValid) {
        throw new ApiError(400, "Incorrect Password")
    }


    let { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id)

    if (!accessToken || !refreshToken) {
        throw new ApiError(500, "Something went wrong while generating the tokens")
    }

    const loggedInUser = await User.findById(user._id).select("-password")
    if (!loggedInUser) {
        throw new ApiError(500, "Something went wrong while logging the User")
    }
    let options = {
        httpOnly: true,
        secure: true
    }

    res.status(200)
        .cookie("refreshToken", refreshToken, options)
        .cookie("accessToken", accessToken, options)
        .json(new ApiResponse(
            200,
            "User logged in successfully",
            {
                user: loggedInUser,
                refreshToken: refreshToken,
                accessToken: accessToken,
            }
        ))

})

const logoutUser = wrapAsync(async (req, res) => {
    const loggedOutUser = await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1
            }
        },
        {
            new: true
        }
    ).select("-password")

    if (!loggedOutUser) {
        throw new ApiError(500, "Something went wrong while logging out the user")
    }

    const options = {
        httpOnly: true,
        secure: true
    }
    res.status(200)
        .clearCookie("refreshToken", options)
        .clearCookie("accessToken", options)
        .json(
            new ApiResponse(
                200,
                "User loggedOut successfully",
                loggedOutUser,
            )
        )

})

const refreshAccessToken = wrapAsync(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        throw new ApiError(400, "Refresh Token not found")
    }

    let verifyRefreshToken;
    verifyRefreshToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_SECRET_KEY)

    if (!verifyRefreshToken) {
        throw new ApiError(500, "Failed to decode incoming tokens")
    }

    const user = await User.findById(verifyRefreshToken._id)

    if (!user) {
        throw new ApiError(400, "User not found invalid refreshToken")
    }
    if (incomingRefreshToken !== user.refreshToken) {
        throw new ApiError(400, "Invalid credentials")
    }

    let { accessToken, refreshToken: newRefreshToken } = await generateAccessAndRefreshTokens(user._id)

    if (!accessToken || !newRefreshToken) {
        throw new ApiError(500, "Failed to refresh access Token")
    }

    let options = {
        httpOnly: true,
        secure: true
    }
    res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200,
                "refresh Access Token successfully",
                {
                    accessToken: accessToken,
                    refreshToken: newRefreshToken,
                }

            )
        )

})

export { registerUser, loginUser, logoutUser, refreshAccessToken }