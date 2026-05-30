import streamifier from "streamifier"
/**
 * to convert a Buffer or a String into a Node.js readable stream. 
 * It enables seamless piping of in-memory data into stream-based APIs 
 * or cloud services without requiring a temporary file on disk.
 */
import cloudinary from "../config/cloudinary.js"

/**
 * After passing from multer
 * file format looks like {
        originalname:"resume.pdf",
        mimetype:"application/pdf",
        size:345678,
        buffer:<Buffer ... > - stores actual data and is passed to function
    }
 */

export const uploadToCloud = (buffer, originalName)=>{
    return new Promise((resolve, reject)=>{
        const stream = cloudinary.uploader.upload_stream({
            folder: "roleready/resumes",
            resource_type: "auto",
            use_filename:true,
            filename_override: originalName
        }, (err, result) =>{
            if(err) reject(err)
            
            resolve(result)
        })
        streamifier
        .createReadStream(buffer)
        .pipe(stream)
    })
}

