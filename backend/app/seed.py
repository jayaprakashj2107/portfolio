import os
from sqlalchemy.orm import Session
from app.database import engine, Base, SessionLocal
from app import models, auth

def seed_database():
    Base.metadata.create_all(bind=engine)
    db: Session = SessionLocal()

    # Seed Admin User if not exists
    admin_username = os.getenv("ADMIN_USERNAME", "admin")
    admin_password = os.getenv("ADMIN_PASSWORD", "admin123")
    existing_user = db.query(models.User).filter(models.User.username == admin_username).first()
    if not existing_user:
        hashed_pwd = auth.get_password_hash(admin_password)
        admin_user = models.User(
            username=admin_username,
            password_hash=hashed_pwd,
            full_name="Jayaprakash J",
            email="jayaprakashj2107@gmail.com"
        )
        db.add(admin_user)

    # Seed Profile if not exists
    existing_profile = db.query(models.Profile).first()
    if not existing_profile:
        profile = models.Profile(
            name="Jayaprakash J",
            role="Python Full Stack Developer",
            education="B.E. Electronics and Communication Engineering",
            college="SRM TRP Engineering College, Trichy",
            graduation_year="2026",
            phone="+91 9025623299",
            email="jayaprakashj2107@gmail.com",
            location="Karnatham Post, Virudhachalam Taluk, Cuddalore District, Tamil Nadu, India",
            bio="I am a passionate and detail-oriented Python Full Stack Developer with a strong foundation in Electronics and Communication Engineering. I enjoy building responsive, user-friendly web applications and solving real-world problems using modern technologies.",
            about_text="I am a passionate and detail-oriented Python Full Stack Developer with a strong foundation in Electronics and Communication Engineering from SRM TRP Engineering College, Trichy.\n\nI have experience learning and working with Python, React.js, JavaScript, SQL, REST APIs, and modern web development technologies.\n\nMy goal is to begin my career as a Software Engineer and contribute to real-world software solutions while continuously improving my technical and professional skills.",
            github_url="https://github.com/jayaprakash2107",
            linkedin_url="https://linkedin.com/in/jayaprakash2107"
        )
        db.add(profile)

    # Seed Projects if empty
    if db.query(models.Project).count() == 0:
        projects = [
            models.Project(
                title="Soil Crop Vision",
                short_description="Texture Classification in Real Field Conditions",
                full_description="An image-based machine learning project designed to classify soil texture under real field conditions. It processes input images of soil, applies preprocessing & noise reduction, analyzes texture characteristics, and outputs precise soil classifications to aid agricultural planning.",
                technologies="Python, Machine Learning, Image Processing, Computer Vision",
                category="Machine Learning",
                image_url="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
                github_url="https://github.com/jayaprakash2107/soil-crop-vision",
                live_demo_url="https://soil-crop-vision.demo.app",
                featured=True
            ),
            models.Project(
                title="Intruder Alarm System",
                short_description="Arduino-based security system using ultrasonic sensors",
                full_description="An Arduino-based security system using an ultrasonic sensor to detect nearby objects and trigger an alarm. Designed during In-Plant Training at Codebind Technologies, Trichy to solve perimeter intrusion challenges using microcontrollers.",
                technologies="Arduino, Arduino IDE, Ultrasonic Sensor, Embedded Systems",
                category="Embedded Systems",
                image_url="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
                github_url="https://github.com/jayaprakash2107/intruder-alarm-system",
                live_demo_url="https://intruder-alarm.demo.app",
                featured=True
            ),
            models.Project(
                title="Smart Traffic Signal System",
                short_description="Dynamic traffic signal control system based on real-time vehicle density",
                full_description="A software-based smart traffic management concept that dynamically manages traffic signals based on traffic density algorithms, prioritizing emergency vehicles and reducing urban traffic wait times.",
                technologies="React.js, Python, REST API",
                category="Web Development",
                image_url="https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80",
                github_url="https://github.com/jayaprakash2107/smart-traffic-signal",
                live_demo_url="https://smart-traffic.demo.app",
                featured=True
            ),
            models.Project(
                title="Complaint Management System",
                short_description="Web application for user complaint submission and administrative tracking",
                full_description="A web application for users to submit complaints and administrators to track, update, and manage complaint status dynamically. Built with a React frontend, FastAPI backend, and MySQL database.",
                technologies="React.js, Python, FastAPI, MySQL",
                category="Web Development",
                image_url="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
                github_url="https://github.com/jayaprakash2107/complaint-management-system",
                live_demo_url="https://complaint-sys.demo.app",
                featured=True
            ),
            models.Project(
                title="Developer Portfolio",
                short_description="Responsive personal full-stack developer portfolio application",
                full_description="A responsive personal portfolio website showcasing skills, projects, education, certifications, and contact information with custom glassmorphic styling, dark/light themes, and an interactive admin panel.",
                technologies="React.js, JavaScript, HTML5, CSS3, Bootstrap",
                category="Web Development",
                image_url="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
                github_url="https://github.com/jayaprakash2107/developer-portfolio",
                live_demo_url="https://jayaprakash-portfolio.demo.app",
                featured=True
            )
        ]
        for p in projects:
            db.add(p)

    # Seed Skills if empty
    if db.query(models.Skill).count() == 0:
        skills = [
            models.Skill(name="HTML5", category="Frontend", proficiency=90, level_label="Proficient", icon_name="code", display_order=1),
            models.Skill(name="CSS3", category="Frontend", proficiency=88, level_label="Proficient", icon_name="layout", display_order=2),
            models.Skill(name="JavaScript", category="Frontend", proficiency=85, level_label="Intermediate", icon_name="code", display_order=3),
            models.Skill(name="React.js", category="Frontend", proficiency=82, level_label="Intermediate", icon_name="layers", display_order=4),
            models.Skill(name="Bootstrap", category="Frontend", proficiency=88, level_label="Proficient", icon_name="layout", display_order=5),
            models.Skill(name="Python", category="Backend", proficiency=88, level_label="Proficient", icon_name="terminal", display_order=6),
            models.Skill(name="FastAPI", category="Backend", proficiency=80, level_label="Intermediate", icon_name="cpu", display_order=7),
            models.Skill(name="REST API", category="Backend", proficiency=85, level_label="Intermediate", icon_name="globe", display_order=8),
            models.Skill(name="MySQL", category="Database", proficiency=82, level_label="Intermediate", icon_name="database", display_order=9),
            models.Skill(name="SQL", category="Database", proficiency=85, level_label="Intermediate", icon_name="database", display_order=10),
            models.Skill(name="Git", category="Tools", proficiency=88, level_label="Proficient", icon_name="git-branch", display_order=11),
            models.Skill(name="GitHub", category="Tools", proficiency=88, level_label="Proficient", icon_name="github", display_order=12),
            models.Skill(name="VS Code", category="Tools", proficiency=92, level_label="Proficient", icon_name="settings", display_order=13),
            models.Skill(name="Object-Oriented Programming", category="Programming", proficiency=85, level_label="Intermediate", icon_name="box", display_order=14),
            models.Skill(name="Problem Solving", category="Programming", proficiency=85, level_label="Intermediate", icon_name="cpu", display_order=15)
        ]
        for s in skills:
            db.add(s)

    # Seed Certifications if empty
    if db.query(models.Certification).count() == 0:
        certs = [
            models.Certification(title="Introduction to Artificial Intelligence", organization="LinkedIn Learning", issue_date="2024", credential_url="#", icon_name="award"),
            models.Certification(title="Generative AI", organization="Google", issue_date="2024", credential_url="#", icon_name="award"),
            models.Certification(title="IoT Workshop", organization="Kongu Engineering College", issue_date="2023", credential_url="#", icon_name="award"),
            models.Certification(title="Claude AI Master Class", organization="Skill NATION", issue_date="2024", credential_url="#", icon_name="award"),
            models.Certification(title="Full Stack Development Session", organization="NoviTech", issue_date="2024", credential_url="#", icon_name="award")
        ]
        for c in certs:
            db.add(c)

    db.commit()
    db.close()
