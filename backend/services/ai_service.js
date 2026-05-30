import axios from "axios"

export const sendToAI = async(payload)=>{
    const response = await axios.post("http://localhost:8000/analyze", payload)
    return response.data
}
