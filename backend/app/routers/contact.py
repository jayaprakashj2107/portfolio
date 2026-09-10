from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app import models, schemas, auth

router = APIRouter(prefix="/api/contact", tags=["Contact"])

@router.post("", response_model=schemas.ContactOut, status_code=status.HTTP_201_CREATED)
def submit_contact_message(
    message: schemas.ContactCreate,
    db: Session = Depends(get_db)
):
    db_message = models.ContactMessage(**message.model_dump())
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message

@router.get("", response_model=List[schemas.ContactOut])
def get_contact_messages(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user)
):
    return db.query(models.ContactMessage).order_by(models.ContactMessage.created_at.desc()).all()

@router.delete("/{message_id}")
def delete_contact_message(
    message_id: int,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user)
):
    db_msg = db.query(models.ContactMessage).filter(models.ContactMessage.id == message_id).first()
    if not db_msg:
        raise HTTPException(status_code=404, detail="Message not found")
    
    db.delete(db_msg)
    db.commit()
    return {"message": "Message deleted successfully"}
