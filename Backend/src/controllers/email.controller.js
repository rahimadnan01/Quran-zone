import { wrapAsync } from "../utils/wrapAsync.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { transporter } from "../config/mail.config.js";

const sendEmail = wrapAsync(async (req, res) => {
    const { email, name, message } = req.body
    if (!email || !name || !message) {
        throw new ApiError(401, "All fields are required")
    }

    const mailOptions = {
        from: email,
        to: process.env.Email,
        subject: name,
        text: message
    }

    try {
        const info = await transporter.sendMail(mailOptions)
        res.status(200).json(new ApiResponse(
            200,
            "Email sent successfully",
            info
        ));
    } catch (error) {
        throw new ApiError(500, error.message)
    }
})

export { sendEmail }