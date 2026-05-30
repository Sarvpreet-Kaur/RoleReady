import multer from "multer" // handles file uploads

const storage = multer.memoryStorage()
export const upload = multer({
    storage, 
    limits: {
        fileSize: 5*1024*1024
    },
    fileFilter: (req, file, cb)=>{
        //file types allowed: pdf, doc, docx
        const allowed = [
            "application/pdf", 
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ]

        if(!allowed.includes(file.mimetype)){
            return cb(new Error("Invalid file"))
        }
        cb(null, true)
    }    
})