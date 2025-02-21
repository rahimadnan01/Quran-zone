import { wrapAsync } from "../utils/wrapAsync.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Course } from "../models/course.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
const createCourse = wrapAsync(async (req, res) => {
    let { name, startDate, Enrolled, duration, months, language, certificate } = req.body
    console.log(name, startDate, Enrolled, duration, months, language, certificate)
    if (!name || !startDate || !Enrolled || !duration || !months || !language || !certificate) {
        throw new ApiError(400, "All fields are required")
    }
    const thumbnailPath = req.files?.thumbnail?.[0].path

    let thumbnail = null

    if (thumbnailPath) {
        thumbnail = await uploadOnCloudinary(thumbnailPath)
    }
    if (!thumbnail) {
        throw new ApiError(500, "Something went wrong while uloading the picture")
    }
    const course = await Course.create({
        name: name,
        thumbnail: thumbnail.url,
        startDate: startDate,
        Enrolled: Enrolled,
        duration: duration,
        months: months,
        language: language,
        certificate: certificate
    })

    if (!course) {
        throw new ApiError(401, "Something went wrong while making an course")
    }

    res.status(200)
        .json(
            new ApiResponse(
                200,
                "Course generated successfully",
                course
            )
        )
})

const updateCourse = wrapAsync(async (req, res) => {
    let { name, startDate, Enrolled, duration, months, language, certificate } = req.body
    let { courseId } = req.params

    const course = await Course.findById(courseId)
    if (!course) {
        throw new ApiError(404, "No such course found")
    }

    const thumbnailPath = req.files?.thumbnail?.[0].path

    let thumbnail = null

    if (thumbnailPath) {
        thumbnail = await uploadOnCloudinary(thumbnailPath)
    }
    if (!thumbnail) {
        throw new ApiError(500, "Something went wrong while uloading the picture")
    }


    if (name) course.name = name;
    if (thumbnail) course.thumbnail = thumbnail.url
    if (startDate) course.startDate = startDate;
    if (Enrolled) course.Enrolled = Enrolled;
    if (duration) course.duration = duration;
    if (months) course.months = months;
    if (language) course.language = language;
    if (certificate) course.certificate = certificate;

    let updatedCourse = await course.save({ validateBeforeSave: true })
    if (!updatedCourse) {
        throw new ApiError(500, "Failed to update course")
    }

    res.status(200)
        .json(
            new ApiResponse(
                200,
                "Course updated successfully",
                course
            )
        )
})

const deleteCourse = wrapAsync(async (req, res) => {
    const { courseId } = req.params
    if (!courseId) {
        throw new ApiError(401, "Invalid id")
    }

    const deletedCourse = await Course.findByIdAndDelete(courseId)
    if (!deletedCourse) {
        throw new ApiError(500, "Something went wrong while deleting the course")
    }

    res.status(200)
        .json(
            new ApiResponse(
                200,
                "Course deleted successfully",
                deletedCourse
            )
        )
})

const getAllCourses = wrapAsync(async (req, res) => {
    const allCourses = await Course.find({})
    if (!allCourses) {
        throw new ApiError(404, "No courses found")
    }
    res.status(200)
        .json(
            new ApiResponse(
                200,
                "Courses shown successfully",
                allCourses
            )
        )
})

const getSingleCourse = wrapAsync(async (req, res) => {
    const { courseId } = req.params
    if (!courseId) {
        throw new ApiError(401, "Invalid ID")
    }
    const course = await Course.findById(courseId)
    if (!course) {
        throw new ApiError(404, "Course not found")
    }

    res.status(200)
        .json(
            new ApiResponse(
                200,
                "Course shown successfully",
                course
            )
        )
})

export { createCourse, updateCourse, deleteCourse, getAllCourses, getSingleCourse }