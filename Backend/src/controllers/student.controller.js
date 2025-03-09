import { wrapAsync } from "../utils/wrapAsync.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Student } from "../models/Student.model.js";
import { generateAccessAndRefreshToken } from "../utils/tokens.js";
import mongoose from "mongoose";

// register student
const registerStudent = wrapAsync(async (req, res) => {
    let { username, email, password } = req.body;
    if ([username, email, password].some((field) => field?.trim()) === "") {
        throw new ApiError(400, "Provide all fields");
    }

    let existedUser = await User.findOne({
        email: email,

    });
    if (existedUser) {
        throw new ApiError(401, "User already exists");
    }

    let user = await User.create({
        username: username,
        email: email,
        password: password,
        role: "student",
    });

    let createdUser = await User.findById(user._id).select(
        "-password -refreshToken",
    );

    const student = await Student.create({
        user: user._id
    })

    let createdStudent = await Student.findById(student._id).populate(
        {
            path: "user",
            select: "username email role"
        }
    )
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering a User");
    }

    if (!createdStudent) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }
    res
        .status(200)
        .json(new ApiResponse(200, "User registered successfully", createdStudent));
});
// login student
const loginStudent = wrapAsync(async (req, res) => {
    let { email, password } = req.body;

    if (email == "" || password == "") {
        throw new ApiError(400, "Both email and password are required");
    }

    let user = await User.findOne({ email });
    if (!user) {
        throw new ApiError(400, "User not found email not found");
    }

    if (user.role !== "student") {
        throw new ApiError(403, "Access Denied only student can login on this page")
    }

    let validatePassword = await user.isPasswordCorrect(password);
    if (!validatePassword) {
        throw new ApiError(400, "Invalid Credentials");
    }

    let tokens = await generateAccessAndRefreshToken(user._id);

    if (!tokens || !tokens.accessToken || !tokens.refreshToken) {
        throw new ApiError(500, "Failed to generate tokens");
    }
    let { accessToken, refreshToken } = tokens;

    let loggedInUser = await User.findById(user._id).select(
        "-password -refreshToken",
    );
    if (!loggedInUser) {
        throw new ApiError(500, "Failed to login");
    }

    let options = {
        httpOnly: true,
        secure: true,
    };

    res
        .status(200)
        .cookie("refreshToken", refreshToken, options)
        .cookie("accessToken", accessToken, options)
        .json(
            new ApiResponse(
                200,
                "User loggedIn successfully",
                {
                    loggedInUser,
                    accessToken,
                    refreshToken,
                }

            ),
        );
});


const updateStudent = wrapAsync(async (req, res) => {
    let { fee, from, to } = req.body
    const { studentId } = req.params
    if (req.user.role !== "admin") {
        throw new ApiError(403, "Access Denied you can only modify your own data")
    }
    if (!studentId) {
        throw new ApiError(404, "Student may not found or invalid Id")
    }

    const student = await Student.findById(studentId)

    if (!student) {
        throw new ApiError(404, "Student may not found")
    }

    if (fee) student.fee = fee
    if (from) student.from = from
    if (to) student.to = to

    let updatedStudent = await student.save()

    if (!updatedStudent) {
        throw new ApiError(500, "Failed to update student")
    }

    res.status(200)
        .json(
            new ApiResponse(
                200,
                "Student updated successfully",
                updatedStudent
            )
        )
})
const deleteStudent = wrapAsync(async (req, res) => {
    let { studentId } = req.params
    if (req.user.role !== "admin") {
        throw new ApiError(403, "Access Denied you can only modify your own data")
    }
    if (!studentId) {
        throw new ApiError(404, "User may not found")
    }

    let student = await Student.findById(studentId)
    if (!student) {
        throw new ApiError(404, "Student not found")
    }

    const deletedStudent = await Student.findByIdAndDelete(studentId)
    if (!deletedStudent) {
        throw new ApiError(500, "Something went wrong while deleting the Student")
    }

    const deletedUser = await User.findByIdAndDelete(student.user)
    if (!deletedUser) {
        throw new ApiError(500, "Something went wrong while deleting the User")
    }

    res.status(200)
        .json(
            new ApiResponse(200,
                "Student deleted successfully",
                deletedStudent,
                deletedUser)

        )
})
const getAllStudents = wrapAsync(async (req, res) => {
    if (req.user.role !== "admin") {
        throw new ApiError(403, "Access Denied you can only modify your own data")
    }
    let allStudents = await Student.find({}).populate({
        path: "user",
        select: "_id username email"
    })

    if (!allStudents) {
        throw new ApiError(500, "Something went wrong while creating the User")
    }
    res.status(200)
        .json(
            new ApiResponse(
                200,
                "Student shown successfully",
                allStudents
            )
        )

})
const getSingleStudent = wrapAsync(async (req, res) => {
    if (req.user.role !== "admin") {
        throw new ApiError(403, "Access Denied you can only modify your own data")
    }
    const { studentId } = req.params
    if (!studentId) {
        throw new ApiError(404, "Student may deleted or Invalid Id")
    }

    const student = await Student.findById(studentId).populate(
        {
            path: "user",
            select: "username email role"
        }
    )

    if (!student) {
        throw new ApiError(500, "Something went wrong while getting the user")
    }

    res.status(200)
        .json(
            new ApiResponse(
                200,
                "Student shown successfully",
                student
            )
        )
})
export { registerStudent, loginStudent, updateStudent, deleteStudent, getAllStudents, getSingleStudent }