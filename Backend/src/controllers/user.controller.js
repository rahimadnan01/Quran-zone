import { wrapAsync } from "../utils/wrapAsync.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Student } from "../models/Student.model.js";
import { Teacher } from "../models/teacher.model.js";
import mongoose from "mongoose";
const createUser = wrapAsync(async (req, res) => {
    let { username, email, password, role } = req.body
    if (!username || !email || !password || !role) {
        throw new ApiError(400, "All fields are required")
    }
    let existedUser = await User.findOne({ $or: [{ username }, { email }] })

    if (existedUser) {
        throw new ApiError(401, "User already exists by this username or email")
    }

    let user = new User({
        username: username,
        email: email,
        password: password,
        role: role
    })

    await user.save()

    if (!user) {
        throw new ApiError(500, "Something went wrong while creating a new user")
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


    let createdUser = await User.findById(user._id).select("-password")

    res.status(200)
        .json(
            new ApiResponse(
                200,
                "User created successfully",
                createdUser
            )
        )
})

const updateUser = wrapAsync(async (req, res) => {
    let { username, email, password, role } = req.body
    let { userId } = req.params



    if (!userId) {
        throw new ApiError(404, "User may not found or invalidID")
    }

    const user = await User.findById(userId)
    if (!user) {
        throw new ApiError(404, "User not found")
    }

    if (username) user.username = username
    if (email) user.email = email
    if (password) user.password = password
    if (role) user.role = role

    let updatedUser = await user.save()



    if (!updatedUser) {
        throw new ApiError(500, "Something went wrong while updating the user")
    }
    res.status(200)
        .json(
            new ApiResponse(
                200,
                "User updated successfully",
                updatedUser
            )
        )
})

const deleteUser = wrapAsync(async (req, res) => {
    let { userId } = req.params
    let objectId = new mongoose.Types.ObjectId(userId)

    if (!userId || !objectId) {
        throw new ApiError(404, "User may not found or invalid Id")
    }

    let user = await User.findById(userId)
    let deletedUser = await User.findByIdAndDelete(
        userId,
        {
            new: true
        }
    )

    if (!deletedUser) {
        throw new ApiError(500, "Something went wrong while deleting the User")
    }

    if (user.role === "student") {
        await Student.deleteOne({ user: objectId })
    }

    if (user.role === "teacher") {
        await Teacher.deleteOne({ user: objectId })
    }

    res.status(200)
        .json(
            new ApiResponse(
                200,
                "User deleted successfully",
                deletedUser
            )
        )
})

const showUsers = wrapAsync(async (req, res) => {
    const allUsers = await User.find({})
    if (!allUsers) {
        throw new ApiError(404, "Users not found")
    }
    res.status(200)
        .json(
            new ApiResponse(
                200,
                "Users shown successfully",
                allUsers
            )
        )
})

const getUser = wrapAsync(async (req, res) => {
    let { userId } = req.params
    let objectId = new mongoose.Types.ObjectId(userId)
    if (!userId) {
        throw new ApiError(404, "User not found")
    }

    let user = await User.findById(userId)
    if (!user) {
        throw new ApiError(500, "Failed to fetch the user")
    }

    let additionalData;
    if (user.role === "student") {
        additionalData = await Student.findOne({ user: objectId })
        if (!additionalData) {
            throw new ApiError(404, "Student not found")
        }
    }
    if (user.role === "teacher") {
        additionalData = await Teacher.findOne({ user: objectId })
        if (!additionalData) {
            throw new ApiError(404, "teacher not found")
        }
    }

    res.status(200)
        .json(
            new ApiResponse(
                200,
                "user fetched successfully",
                {
                    user,
                    additionalData
                }
            )
        )
})

export { createUser, updateUser, deleteUser, showUsers, getUser }

