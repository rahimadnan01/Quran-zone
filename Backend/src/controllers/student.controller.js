import { wrapAsync } from "../utils/wrapAsync.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Student } from "../models/Student.model.js";
import mongoose from "mongoose";

const createStudent = wrapAsync(async (req, res) => {
    let { fee, from, to } = req.body
    let { userId } = req.params
    if (req.user.role !== "admin") {
        throw new ApiError(403, "Access Denied you can only modify your own data")
    }
    let ObjectId = new mongoose.Types.ObjectId(userId)
    console.log(ObjectId)
    if (!fee || !from || !to) {
        throw new ApiError(400, "All fields are required")
    }

    if (!userId) {
        throw new ApiError(404, "Student may not found or invalid Id")
    }

    let user = await User.findById(userId)
    if (!user) {
        throw new ApiError(404, "User may not found")
    }


    if (!ObjectId) {
        throw new ApiError(500, "Failed to generate objectId")
    }

    let student = await Student.findOneAndUpdate(
        { user: ObjectId },
        {
            $set: {
                user: ObjectId,
                fee: fee,
                from: from,
                to: to
            }
        },
        {
            new: true
        }
    )

    if (!student) {
        throw new ApiError(500, "Something went wrong while generating the Student")
    }

    res.status(200)
        .json(
            new ApiResponse(
                200,
                "Student created successfully",
                student
            )
        )
})
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
    let { userId, studentId } = req.params
    if (req.user.role !== "admin") {
        throw new ApiError(403, "Access Denied you can only modify your own data")
    }
    if (!userId || !studentId) {
        throw new ApiError(404, "User may not found")
    }
    const deletedStudent = await Student.findByIdAndDelete(studentId)
    if (!deletedStudent) {
        throw new ApiError(500, "Something went wrong while deleting the Student")
    }

    const deletedUser = await User.findByIdAndDelete(userId)
    if (!deletedUser) {
        throw new ApiError(500, "Something went wrong while deleting the User")
    }

    res.status(200)
        .json(
            200,
            "Student deleted successfully",
            {
                deletedStudent,
                deletedUser
            }
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
export { createStudent, updateStudent, deleteStudent, getAllStudents, getSingleStudent }