from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app import models, schemas, auth

router = APIRouter(prefix="/api/profile", tags=["Profile"])

@router.get("", response_model=schemas.ProfileOut)
def get_profile(db: Session = Depends(get_db)):
    profile = db.query(models.Profile).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return profile

@router.put("", response_model=schemas.ProfileOut)
def update_profile(
    profile_update: schemas.ProfileBase,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user)
):
    profile = db.query(models.Profile).first()
    if not profile:
        profile = models.Profile(**profile_update.model_dump())
        db.add(profile)
    else:
        for key, value in profile_update.model_dump().items():
            setattr(profile, key, value)
    
    db.commit()
    db.refresh(profile)
    return profile
