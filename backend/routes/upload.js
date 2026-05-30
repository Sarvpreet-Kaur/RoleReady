import express from "express"
import { upload } from "../middleware/upload.js"
import {uploadToCloud} from "../services/upload_resume.js"
import { sendToAI } from "../services/ai_service.js"

const router = express.Router()

router.post("/upload", upload.single("resume"), async(req, res)=>{
    try{
        const file = req.file
        if(!file){
            return res.status(400).json({ success:false, message: "No file uploaded"})
        }
        // upload RAM → Cloudinary
        const uploaded = await uploadToCloud(file.buffer, file.originalname )
        // response

        const analysis = await sendToAI({
            resumeUrl: uploaded.secure_url,
            fileName: file.originalname,
            uploadedAt: Date.now()
        })
        return res.status(200).json({ success:true, 
            message: "Uploaded successfully",
            originalName: file.originalname,
            cloudinaryUrl: uploaded.secure_url,
            publicId: uploaded.public_id,
            aiResponse: analysis
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            error: err.message
        })
    }
    finally{
        req.file = null
    }
})
export default router