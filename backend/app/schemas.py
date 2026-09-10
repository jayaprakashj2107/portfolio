from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

# Auth Schemas
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class UserLogin(BaseModel):
    username: str
    password: str

# Profile Schemas
class ProfileBase(BaseModel):
    name: str
    role: str
    education: str
    college: str
    graduation_year: str
    phone: str
    email: str
    location: str
    bio: str
    about_text: str
    github_url: Optional[str] = None
    linkedin_url: Optional[str] = None

class ProfileOut(ProfileBase):
    id: int
    class Config:
        from_attributes = True

# Skill Schemas
class SkillBase(BaseModel):
    name: str
    category: str
    proficiency: int = 80
    level_label: str = "Intermediate"
    icon_name: str = "code"
    display_order: int = 0

class SkillCreate(SkillBase):
    pass

class SkillOut(SkillBase):
    id: int
    class Config:
        from_attributes = True

# Project Schemas
class ProjectBase(BaseModel):
    title: str
    short_description: str
    full_description: str
    technologies: str
    category: str = "Web Development"
    image_url: Optional[str] = None
    github_url: Optional[str] = None
    live_demo_url: Optional[str] = None
    featured: bool = True

class ProjectCreate(ProjectBase):
    pass

class ProjectOut(ProjectBase):
    id: int
    created_at: Optional[datetime] = None
    class Config:
        from_attributes = True

# Certification Schemas
class CertificationBase(BaseModel):
    title: str
    organization: str
    issue_date: Optional[str] = None
    credential_url: Optional[str] = None
    icon_name: str = "award"
    display_order: int = 0

class CertificationCreate(CertificationBase):
    pass

class CertificationOut(CertificationBase):
    id: int
    class Config:
        from_attributes = True

# Contact Message Schemas
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    subject: str
    message: str

class ContactOut(ContactCreate):
    id: int
    is_read: bool = False
    created_at: Optional[datetime] = None
    class Config:
        from_attributes = True
