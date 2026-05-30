import mongoose from "mongoose"

const resume_data_schema = new mongoose.Schema({
    userId: String,
    fileUrl: String,
    publicId: String,
    status: {
        type: String,
        enum: ["uploaded", "processing", "completed"],
        default: "uploaded"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }    
})

export default mongoose.model("Resume", resume_data_schema)