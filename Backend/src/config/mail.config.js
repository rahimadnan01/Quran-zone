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
        rejectUnauthorized: false, 
    },
    connectionTimeout: 10000, 
    socketTimeout: 10000,
});
export { transporter }