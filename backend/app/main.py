import os
import sys

# Ensure backend root directory is in sys.path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
from app.seed import seed_database
from app.routers import auth, projects, skills, certs, contact, profile

# Initialize DB and Seed Data automatically on startup
seed_database()

app = FastAPI(
    title="Jayaprakash J Portfolio API",
    description="REST API backend for Jayaprakash J Python Full Stack Developer Portfolio",
    version="1.0.0"
)

# CORS configuration
cors_origins_str = os.getenv("CORS_ORIGINS", "http://localhost:5173,http://localhost:3000,http://127.0.0.1:5173")
origins = [origin.strip() for origin in cors_origins_str.split(",") if origin.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins if origins else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(auth.router)
app.include_router(projects.router)
app.include_router(skills.router)
app.include_router(certs.router)
app.include_router(contact.router)
app.include_router(profile.router)

@app.get("/")
def read_root():
    return {
        "status": "online",
        "message": "Jayaprakash J Portfolio API is running",
        "docs_url": "/docs",
        "developer": "Jayaprakash J",
        "role": "Python Full Stack Developer"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
