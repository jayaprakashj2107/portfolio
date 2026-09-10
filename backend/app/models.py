from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime
from sqlalchemy.sql import func
from app.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(100), unique=True, nullable=False, index=True)
    password_hash = Column(String(255), nullable=False)
    full_name = Column(String(150))
    email = Column(String(150))
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Profile(Base):
    __tablename__ = "profile"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(150), nullable=False)
    role = Column(String(150), nullable=False)
    education = Column(String(255), nullable=False)
    college = Column(String(255), nullable=False)
    graduation_year = Column(String(20), nullable=False)
    phone = Column(String(30), nullable=False)
    email = Column(String(150), nullable=False)
    location = Column(String(255), nullable=False)
    bio = Column(Text, nullable=False)
    about_text = Column(Text, nullable=False)
    github_url = Column(String(255))
    linkedin_url = Column(String(255))

class Skill(Base):
    __tablename__ = "skills"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    category = Column(String(50), nullable=False) # Frontend, Backend, Database, Programming, Tools
    proficiency = Column(Integer, default=80)
    level_label = Column(String(50), default="Intermediate")
    icon_name = Column(String(50), default="code")
    display_order = Column(Integer, default=0)

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    short_description = Column(Text, nullable=False)
    full_description = Column(Text, nullable=False)
    technologies = Column(String(255), nullable=False)
    category = Column(String(50), default="Web Development")
    image_url = Column(String(255))
    github_url = Column(String(255))
    live_demo_url = Column(String(255))
    featured = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Certification(Base):
    __tablename__ = "certifications"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    organization = Column(String(150), nullable=False)
    issue_date = Column(String(50))
    credential_url = Column(String(255))
    icon_name = Column(String(50), default="award")
    display_order = Column(Integer, default=0)

class ContactMessage(Base):
    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(150), nullable=False)
    email = Column(String(150), nullable=False)
    phone = Column(String(30))
    subject = Column(String(200), nullable=False)
    message = Column(Text, nullable=False)
    is_read = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
