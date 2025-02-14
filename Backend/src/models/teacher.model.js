import mongoose from "mongoose"
const teacherSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    numOfClasses: {
        type: Number,
        required: true,
        default: 0
    },
    salary: {
        type: String,
        required: true,
        default: 0
    }
}, { timestamps: true })

const Teacher = mongoose.model("Teacher", teacherSchema)
export { Teacher }