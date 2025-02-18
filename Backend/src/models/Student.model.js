import mongoose from "mongoose"
const studentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    fee: {
        type: String,
        required: true,
        default: 0
    },
    from: {
        type: String,

    },
    to: {
        type: String
    }

}, { timestamps: true })

const Student = mongoose.model("Student", studentSchema)
export { Student }