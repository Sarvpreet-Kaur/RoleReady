import express from "express"
import uploadRoute from "./routes/upload.js"

const app = express()

app.use(express.json())

app.use( "/upload", uploadRoute)

app.listen( 5000, ()=>{
    console.log( "Server running" )
})