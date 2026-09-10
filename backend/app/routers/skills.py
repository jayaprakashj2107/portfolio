from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app import models, schemas, auth

router = APIRouter(prefix="/api/skills", tags=["Skills"])

@router.get("", response_model=List[schemas.SkillOut])
def get_skills(db: Session = Depends(get_db)):
    return db.query(models.Skill).order_by(models.Skill.display_order.asc(), models.Skill.id.asc()).all()

@router.post("", response_model=schemas.SkillOut, status_code=status.HTTP_201_CREATED)
def create_skill(
    skill: schemas.SkillCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user)
):
    db_skill = models.Skill(**skill.model_dump())
    db.add(db_skill)
    db.commit()
    db.refresh(db_skill)
    return db_skill

@router.put("/{skill_id}", response_model=schemas.SkillOut)
def update_skill(
    skill_id: int,
    skill_update: schemas.SkillCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user)
):
    db_skill = db.query(models.Skill).filter(models.Skill.id == skill_id).first()
    if not db_skill:
        raise HTTPException(status_code=404, detail="Skill not found")
    
    for key, value in skill_update.model_dump().items():
        setattr(db_skill, key, value)
    
    db.commit()
    db.refresh(db_skill)
    return db_skill

@router.delete("/{skill_id}")
def delete_skill(
    skill_id: int,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user)
):
    db_skill = db.query(models.Skill).filter(models.Skill.id == skill_id).first()
    if not db_skill:
        raise HTTPException(status_code=404, detail="Skill not found")
    
    db.delete(db_skill)
    db.commit()
    return {"message": "Skill deleted successfully"}
