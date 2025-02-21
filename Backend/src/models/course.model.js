import mongoose from "mongoose"
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    Enrolled: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true,
    },
    months: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    certificate: {
        type: String,
        enum: ["yes", "no"],

    }


}, { timestamps: true })

const Course = mongoose.model("Course", courseSchema)
export { Course }