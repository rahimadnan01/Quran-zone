import { wrapAsync } from "../utils/wrapAsync.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Teacher } from "../models/teacher.model.js";

// generate access and refresh token


// register student
const registerTeacher = wrapAsync(async (req, res) => {
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
        role: "teacher",
    });

    let createdUser = await User.findById(user._id).select(
        "-password -refreshToken",
    );

    const teacher = await Teacher.create({
        user: user._id
    })

    let createdTeacher = await Teacher.findById(teacher._id).populate(
        {
            path: "user",
            select: "username email role"
        }
    )
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering a User");
    }

    if (!createdTeacher) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }
    res
        .status(200)
        .json(new ApiResponse(200, "User registered successfully", createdTeacher));
});

// login student

const loginTeacher = wrapAsync(async (req, res) => {
    let { email, password } = req.body;

    if (email == "" || password == "") {
        throw new ApiError(400, "Both email and password are required");
    }

    let user = await User.findOne({ email });
    if (!user) {
        throw new ApiError(400, "User not found email not found");
    }

    if (user.role !== "teacher") {
        throw new ApiError(403, "Access Denied only teacher can login on this page")
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

// logout student
const logoutTeacher = wrapAsync(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user?._id,
        {
            $unset: {
                refreshToken: 1,
            },
        },
        {
            new: true,
        },
    );

    let options = {
        httpOnly: true,
        secure: true,
    };

    res
        .status(200)
        .clearCookie("refreshToken", options)
        .clearCookie("accessToken", options)
        .json(new ApiResponse(200, {}, "User log out successfully"));
});




const updateTeacher = wrapAsync(async (req, res) => {
    let { teacherId } = req.params
    let { salary, numOfClasses } = req.body

    if (req.user.role !== "admin") {
        throw new ApiError(403, "Access Denied you can only modify your own data")
    }

    if (!teacherId) {
        throw new ApiError(401, "Invalid Teacher Id")
    }

    const teacher = await Teacher.findByIdAndUpdate(
        teacherId,
        {
            $set: {
                numOfClasses,
                salary
            }
        },
        {
            new: true
        }
    )

    if (!teacher) {
        throw new ApiError(500, "Something went wrong while updating the teacher")
    }

    res.status(200)
        .json(
            new ApiResponse(
                200,
                "Teacher updated successfully",
                teacher
            )
        )
})

const deleteTeacher = wrapAsync(async (req, res) => {
    const { teacherId } = req.params
    if (!teacherId) {
        throw new ApiError(401, "Invalid ID of teacher")
    }

    if (req.user.role !== "admin") {
        throw new ApiError(403, "Access Denied you can only modify your own data")
    }

    const teacher = await Teacher.findById(teacherId)
    if (!teacher) {
        throw new ApiError(404, "Teacher not found")
    }

    const deletedTeacher = await Teacher.findByIdAndDelete(teacherId)
    if (!deletedTeacher) {
        throw new ApiError(500, "Something went wrong while deleting the teacher")
    }
    const deletedUser = await User.findByIdAndDelete(teacher.user)
    if (!deletedUser) {
        throw new ApiError(500, "Something went wrong while deleting the user")
    }

    res.status(200)
        .json(new ApiResponse(
            200,
            "Teacher deleted successfully",
            deletedTeacher,
            deletedUser
        ))

})

const getAllTeachers = wrapAsync(async (req, res) => {

    if (req.user.role !== "admin") {
        throw new ApiError(403, "Access Denied you can only modify your own data")
    }

    const allTeachers = await Teacher.find({}).populate(
        {
            path: "user",
            select: "username email role"
        }
    )

    if (!allTeachers) {
        throw new ApiError(500, "something went wrong while getting the teachers")
    }

    res.status(200)
        .json(
            new ApiResponse(
                200,
                "Teachers shown successfully",
                allTeachers
            )
        )
})

const getSingleTeacher = wrapAsync(async (req, res) => {
    const { teacherId } = req.params
    if (!teacherId) {
        throw new ApiError(404, "Teacher may deleted")
    }

    const teacher = await Teacher.findById(teacherId).populate(
        {
            path: "user",
            select: "username email role"
        }
    )
    res.status(200)
        .json(
            new ApiResponse(
                200,
                "Teacher shown successfully",
                teacher
            )
        )
})

export { registerTeacher, loginTeacher, logoutTeacher, updateTeacher, deleteTeacher, getAllTeachers, getSingleTeacher }
