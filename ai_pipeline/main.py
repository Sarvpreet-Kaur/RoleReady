from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def home():
    return{
        "message": "AI service running"
    }
    
@app.post("/analyze")
async def analyze(data: dict):
    print(data)
    return {
        "success": True,
        "received": data
    }
    
    