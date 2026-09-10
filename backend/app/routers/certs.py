from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app import models, schemas, auth

router = APIRouter(prefix="/api/certifications", tags=["Certifications"])

@router.get("", response_model=List[schemas.CertificationOut])
def get_certifications(db: Session = Depends(get_db)):
    return db.query(models.Certification).order_by(models.Certification.id.asc()).all()

@router.post("", response_model=schemas.CertificationOut, status_code=status.HTTP_201_CREATED)
def create_certification(
    cert: schemas.CertificationCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user)
):
    db_cert = models.Certification(**cert.model_dump())
    db.add(db_cert)
    db.commit()
    db.refresh(db_cert)
    return db_cert

@router.put("/{cert_id}", response_model=schemas.CertificationOut)
def update_certification(
    cert_id: int,
    cert_update: schemas.CertificationCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user)
):
    db_cert = db.query(models.Certification).filter(models.Certification.id == cert_id).first()
    if not db_cert:
        raise HTTPException(status_code=404, detail="Certification not found")
    
    for key, value in cert_update.model_dump().items():
        setattr(db_cert, key, value)
    
    db.commit()
    db.refresh(db_cert)
    return db_cert

@router.delete("/{cert_id}")
def delete_certification(
    cert_id: int,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user)
):
    db_cert = db.query(models.Certification).filter(models.Certification.id == cert_id).first()
    if not db_cert:
        raise HTTPException(status_code=404, detail="Certification not found")
    
    db.delete(db_cert)
    db.commit()
    return {"message": "Certification deleted successfully"}
