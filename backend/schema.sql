-- Database Schema for Jayaprakash J Portfolio Website (MySQL)
-- Run this script in MySQL database server

CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Admin Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(150),
    email VARCHAR(150),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Profile Info Table
CREATE TABLE IF NOT EXISTS profile (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    role VARCHAR(150) NOT NULL,
    education VARCHAR(255) NOT NULL,
    college VARCHAR(255) NOT NULL,
    graduation_year VARCHAR(20) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    email VARCHAR(150) NOT NULL,
    location VARCHAR(255) NOT NULL,
    bio TEXT NOT NULL,
    about_text TEXT NOT NULL,
    github_url VARCHAR(255),
    linkedin_url VARCHAR(255),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Skills Table
CREATE TABLE IF NOT EXISTS skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL, -- Frontend, Backend, Database, Programming, Tools
    proficiency INT NOT NULL DEFAULT 80, -- 1-100 percentage
    level_label VARCHAR(50) NOT NULL DEFAULT 'Intermediate', -- Beginner, Intermediate, Proficient
    icon_name VARCHAR(50) DEFAULT 'code',
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    short_description TEXT NOT NULL,
    full_description TEXT NOT NULL,
    technologies VARCHAR(255) NOT NULL, -- Comma separated
    category VARCHAR(50) DEFAULT 'Web Development', -- Machine Learning, Embedded, Web Development
    image_url VARCHAR(255),
    github_url VARCHAR(255),
    live_demo_url VARCHAR(255),
    featured BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Certifications Table
CREATE TABLE IF NOT EXISTS certifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    organization VARCHAR(150) NOT NULL,
    issue_date VARCHAR(50),
    credential_url VARCHAR(255),
    icon_name VARCHAR(50) DEFAULT 'award',
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Education Table
CREATE TABLE IF NOT EXISTS education (
    id INT AUTO_INCREMENT PRIMARY KEY,
    degree VARCHAR(150) NOT NULL,
    institution VARCHAR(200) NOT NULL,
    location VARCHAR(100),
    duration VARCHAR(50) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Experience & Internships Table
CREATE TABLE IF NOT EXISTS experience (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(150) NOT NULL,
    organization VARCHAR(150) NOT NULL,
    type VARCHAR(50) NOT NULL, -- Internship, In-Plant Training, Experience
    duration VARCHAR(50),
    description TEXT NOT NULL,
    highlights TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(30),
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Default Seed Data for Jayaprakash J

-- Admin user (Default password 'admin123' bcrypt hashed)
INSERT INTO users (username, password_hash, full_name, email)
VALUES ('admin', '$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeg6Lruj3vjPGga31lW', 'Jayaprakash J', 'jayaprakashj2107@gmail.com')
ON DUPLICATE KEY UPDATE username=username;

-- Profile info
INSERT INTO profile (id, name, role, education, college, graduation_year, phone, email, location, bio, about_text, github_url, linkedin_url)
VALUES (
    1,
    'Jayaprakash J',
    'Python Full Stack Developer',
    'B.E. Electronics and Communication Engineering',
    'SRM TRP Engineering College, Trichy',
    '2026',
    '+91 9025623299',
    'jayaprakashj2107@gmail.com',
    'Karnatham Post, Virudhachalam Taluk, Cuddalore District, Tamil Nadu, India',
    'I am a passionate and detail-oriented Python Full Stack Developer with a strong foundation in Electronics and Communication Engineering. I enjoy building responsive, user-friendly web applications and solving real-world problems using modern technologies.',
    'I am a passionate and detail-oriented Python Full Stack Developer with a strong foundation in Electronics and Communication Engineering from SRM TRP Engineering College, Trichy. I have experience learning and working with Python, React.js, JavaScript, SQL, REST APIs, and modern web development technologies. My goal is to begin my career as a Software Engineer and contribute to real-world software solutions while continuously improving my technical and professional skills.',
    'https://github.com/jayaprakash2107',
    'https://linkedin.com/in/jayaprakash2107'
) ON DUPLICATE KEY UPDATE name=VALUES(name);

-- Sample Projects
INSERT INTO projects (title, short_description, full_description, technologies, category, image_url, github_url, live_demo_url, featured) VALUES
('Soil Crop Vision', 'Texture Classification in Real Field Conditions', 'An image-based machine learning project designed to classify soil texture under real field conditions. It processes soil images, extracts key surface features, and accurately classifies soil texture to assist farmers and agronomists in crop planning.', 'Python, Machine Learning, Image Processing, Computer Vision', 'Machine Learning', '/images/project-soil.jpg', 'https://github.com/jayaprakash2107/soil-crop-vision', 'https://soil-crop-vision.demo.app', 1),
('Intruder Alarm System', 'Arduino-based ultrasonic security detector with alarm system', 'An Arduino-based security system using an ultrasonic sensor to detect nearby objects and trigger an alarm. Designed during In-Plant Training at Codebind Technologies, Trichy to demonstrate hardware/software integration and embedded logic.', 'Arduino, Arduino IDE, Ultrasonic Sensor, Embedded Systems', 'Embedded Systems', '/images/project-intruder.jpg', 'https://github.com/jayaprakash2107/intruder-alarm-system', 'https://intruder-alarm.demo.app', 1),
('Smart Traffic Signal System', 'Software-based traffic management system dynamically optimizing signals', 'A software-based smart traffic management concept that dynamically manages traffic signals based on real-time traffic density to reduce congestion and improve emergency vehicle priority routing.', 'React.js, Python, REST API', 'Web Development', '/images/project-traffic.jpg', 'https://github.com/jayaprakash2107/smart-traffic-signal', 'https://smart-traffic.demo.app', 1),
('Complaint Management System', 'Full-stack web application for lodging and resolving complaint statuses', 'A web application for users to submit complaints and administrators to track, update, and manage complaint status in real-time with MySQL persistence and role-based workflows.', 'React.js, Python, FastAPI, MySQL', 'Web Development', '/images/project-complaint.jpg', 'https://github.com/jayaprakash2107/complaint-management-system', 'https://complaint-sys.demo.app', 1),
('Developer Portfolio', 'Responsive, colorful full-stack developer portfolio application', 'A responsive personal portfolio website showcasing skills, projects, education, certifications, and contact information with light/dark theme support and admin dashboard.', 'React.js, JavaScript, HTML5, CSS3, Bootstrap', 'Web Development', '/images/project-portfolio.jpg', 'https://github.com/jayaprakash2107/developer-portfolio', 'https://jayaprakash-portfolio.demo.app', 1);

-- Skills
INSERT INTO skills (name, category, proficiency, level_label, icon_name, display_order) VALUES
('HTML5', 'Frontend', 88, 'Proficient', 'code', 1),
('CSS3 & Bootstrap', 'Frontend', 85, 'Proficient', 'layout', 2),
('JavaScript (ES6+)', 'Frontend', 82, 'Intermediate', 'code', 3),
('React.js', 'Frontend', 80, 'Intermediate', 'layers', 4),
('Python', 'Backend', 85, 'Proficient', 'terminal', 5),
('FastAPI & REST APIs', 'Backend', 78, 'Intermediate', 'cpu', 6),
('MySQL & SQL', 'Database', 80, 'Intermediate', 'database', 7),
('Git & GitHub', 'Tools', 85, 'Proficient', 'git-branch', 8),
('VS Code', 'Tools', 90, 'Proficient', 'settings', 9),
('Object-Oriented Programming', 'Programming', 82, 'Intermediate', 'box', 10);

-- Certifications
INSERT INTO certifications (title, organization, issue_date, credential_url, icon_name) VALUES
('Introduction to Artificial Intelligence', 'LinkedIn Learning', '2024', '#', 'award'),
('Generative AI', 'Google', '2024', '#', 'award'),
('IoT Workshop', 'Kongu Engineering College', '2023', '#', 'award'),
('Claude AI Master Class', 'Skill NATION', '2024', '#', 'award'),
('Full Stack Development Session', 'NoviTech', '2024', '#', 'award');
