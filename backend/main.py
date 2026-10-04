from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(
    title="ARGUS API",
    description="Centralized Geo-Verified NGO & Facility Vigilance Network API",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class HealthCheck(BaseModel):
    status: str
    version: str

@app.get("/", response_model=HealthCheck)
async def health_check():
    """
    Health check endpoint to verify backend status.
    """
    return HealthCheck(status="operational", version="1.0.0")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
