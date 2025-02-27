import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.Email,
        pass: process.env.Password,
    },
    tls: {
        rejectUnauthorized: false, // Allow self-signed certs
    },
    connectionTimeout: 10000, // 10 seconds timeout
});
export { transporter }