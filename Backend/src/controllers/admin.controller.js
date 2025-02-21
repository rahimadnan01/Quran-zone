import { User } from "../models/user.model.js";
import { Admin } from "../models/admin.model.js"
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { wrapAsync } from "../utils/wrapAsync.js";
import { generateAccessAndRefreshToken } from "../utils/tokens.js"


const registerAdmin = wrapAsync(async (req, res) => {
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
        role: "admin",
    });

    let createdUser = await User.findById(user._id).select(
        "-password -refreshToken",
    );

    const admin = await Admin.create({
        user: user._id
    })

    let createdAdmin = await Admin.findById(admin._id).populate(
        {
            path: "user",
            select: "username email role"
        }
    )
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering a User");
    }

    if (!createdAdmin) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }
    res
        .status(200)
        .json(new ApiResponse(200, "User registered successfully", createdAdmin));
});


const loginAdmin = wrapAsync(async (req, res) => {
    let { email, password } = req.body;

    if (email == "" || password == "") {
        throw new ApiError(400, "Both email and password are required");
    }

    let user = await User.findOne({ email });
    if (!user) {
        throw new ApiError(400, "User not found email not found");
    }

    if (user.role !== "admin") {
        throw new ApiError(403, "Access Denied only admin can login on this page")
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



const logoutAdmin = wrapAsync(async (req, res) => {
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


const updateAdmin = wrapAsync(async (req, res) => {
    const { adminId } = req.params
    const { username, email, password, role } = req.body
    if (!adminId) {
        throw new ApiError(404, "No admin of such Id")
    }
    const admin = await Admin.findById(adminId).populate("user")
    if (!admin) {
        throw new ApiError(404, "No admin found of such Id")
    }

    const user = await User.findById(
        admin.user._id,
    )
    if (!user) {
        throw new ApiError(404, "No user found of such id")
    }

    if (username) user.username = username
    if (email) user.email = email
    if (password) user.password = password
    if (role) user.role = role

    const updatedUser = await user.save({ validateBeforeSave: true })
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


const deleteAdmin = wrapAsync(async (req, res) => {
    const { adminId } = req.params
    if (!adminId) {
        throw new ApiError(404, "No admin of such Id")
    }
    const admin = await Admin.findById(adminId)
    if (!admin) {
        throw new ApiError(404, "No admin found of such Id")
    }
    const deletedAdmin = await Admin.findByIdAndDelete(adminId)
    if (!deletedAdmin) {
        throw new ApiError(404, "Found no such admin to delete")
    }
    const deletedUser = await User.findByIdAndDelete(admin.user)
    if (!deletedUser) {
        throw new ApiError(500, "Something went wrong while deleting the user")
    }

    res.status(200)
        .json(
            new ApiResponse(
                200,
                "Admin deleted successfully",
                deletedAdmin
            )
        )

})

export { registerAdmin, loginAdmin, logoutAdmin, updateAdmin, deleteAdmin }