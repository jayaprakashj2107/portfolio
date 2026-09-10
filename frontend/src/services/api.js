import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

// Create Axios Instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add JWT token if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_jwt_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Default Fallback Initial Data for Jayaprakash J
export const initialProfile = {
  name: "Jayaprakash J",
  role: "Python Full Stack Developer",
  education: "B.E. Electronics and Communication Engineering",
  college: "SRM TRP Engineering College, Trichy",
  graduation_year: "2026",
  phone: "+91 9025623299",
  email: "jayaprakashj2107@gmail.com",
  location: "Karnatham Post, Virudhachalam Taluk, Cuddalore District, Tamil Nadu, India",
  bio: "I am a passionate and detail-oriented Python Full Stack Developer with a strong foundation in Electronics and Communication Engineering. I enjoy building responsive, user-friendly web applications and solving real-world problems using modern technologies.",
  about_text: "I am a passionate and detail-oriented Python Full Stack Developer with a strong foundation in Electronics and Communication Engineering from SRM TRP Engineering College, Trichy.\n\nI have experience learning and working with Python, React.js, JavaScript, SQL, REST APIs, and modern web development technologies.\n\nMy goal is to begin my career as a Software Engineer and contribute to real-world software solutions while continuously improving my technical and professional skills.",
  github_url: "https://github.com/jayaprakash2107",
  linkedin_url: "https://linkedin.com/in/jayaprakash2107"
};

export const initialProjects = [
  {
    id: 1,
    title: "Soil Crop Vision",
    short_description: "Texture Classification in Real Field Conditions",
    full_description: "An image-based machine learning project designed to classify soil texture under real field conditions. It processes soil images, extracts surface features, and classifies soil texture to assist in agricultural decision-making.",
    technologies: "Python, Machine Learning, Image Processing, Computer Vision",
    category: "Machine Learning",
    image_url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    github_url: "https://github.com/jayaprakash2107/soil-crop-vision",
    live_demo_url: "https://soil-crop-vision.demo.app",
    featured: true
  },
  {
    id: 2,
    title: "Intruder Alarm System",
    short_description: "Arduino-based security system using ultrasonic sensors",
    full_description: "An Arduino-based security system using an ultrasonic sensor to detect nearby objects and trigger an alarm. Built during In-Plant Training at Codebind Technologies, Trichy.",
    technologies: "Arduino, Arduino IDE, Ultrasonic Sensor, Embedded Systems",
    category: "Embedded Systems",
    image_url: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
    github_url: "https://github.com/jayaprakash2107/intruder-alarm-system",
    live_demo_url: "https://intruder-alarm.demo.app",
    featured: true
  },
  {
    id: 3,
    title: "Smart Traffic Signal System",
    short_description: "Software-based traffic management dynamic signal control",
    full_description: "A software-based smart traffic management concept that dynamically manages traffic signals based on real-time traffic density.",
    technologies: "React.js, Python, REST API",
    category: "Web Development",
    image_url: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80",
    github_url: "https://github.com/jayaprakash2107/smart-traffic-signal",
    live_demo_url: "https://smart-traffic.demo.app",
    featured: true
  },
  {
    id: 4,
    title: "Complaint Management System",
    short_description: "Full-stack web application for lodging and resolving complaint status",
    full_description: "A web application for users to submit complaints and administrators to track, update, and manage complaint status.",
    technologies: "React.js, Python, FastAPI, MySQL",
    category: "Web Development",
    image_url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    github_url: "https://github.com/jayaprakash2107/complaint-management-system",
    live_demo_url: "https://complaint-sys.demo.app",
    featured: true
  },
  {
    id: 5,
    title: "Developer Portfolio",
    short_description: "Responsive personal portfolio website showcasing skills & projects",
    full_description: "A responsive personal portfolio website showcasing skills, projects, education, certifications, and contact information.",
    technologies: "React.js, JavaScript, HTML5, CSS3, Bootstrap",
    category: "Web Development",
    image_url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    github_url: "https://github.com/jayaprakash2107/developer-portfolio",
    live_demo_url: "https://jayaprakash-portfolio.demo.app",
    featured: true
  }
];

export const initialSkills = [
  { id: 1, name: "HTML5", category: "Frontend", proficiency: 90, level_label: "Proficient", icon_name: "code" },
  { id: 2, name: "CSS3", category: "Frontend", proficiency: 88, level_label: "Proficient", icon_name: "layout" },
  { id: 3, name: "JavaScript", category: "Frontend", proficiency: 85, level_label: "Intermediate", icon_name: "code" },
  { id: 4, name: "React.js", category: "Frontend", proficiency: 82, level_label: "Intermediate", icon_name: "layers" },
  { id: 5, name: "Bootstrap", category: "Frontend", proficiency: 88, level_label: "Proficient", icon_name: "layout" },
  { id: 6, name: "Python", category: "Backend", proficiency: 88, level_label: "Proficient", icon_name: "terminal" },
  { id: 7, name: "FastAPI", category: "Backend", proficiency: 80, level_label: "Intermediate", icon_name: "cpu" },
  { id: 8, name: "REST API", category: "Backend", proficiency: 85, level_label: "Intermediate", icon_name: "globe" },
  { id: 9, name: "MySQL", category: "Database", proficiency: 82, level_label: "Intermediate", icon_name: "database" },
  { id: 10, name: "SQL", category: "Database", proficiency: 85, level_label: "Intermediate", icon_name: "database" },
  { id: 11, name: "Git", category: "Tools", proficiency: 88, level_label: "Proficient", icon_name: "git-branch" },
  { id: 12, name: "GitHub", category: "Tools", proficiency: 88, level_label: "Proficient", icon_name: "github" },
  { id: 13, name: "VS Code", category: "Tools", proficiency: 92, level_label: "Proficient", icon_name: "settings" },
  { id: 14, name: "Object-Oriented Programming", category: "Programming", proficiency: 85, level_label: "Intermediate", icon_name: "box" },
  { id: 15, name: "Problem Solving", category: "Programming", proficiency: 85, level_label: "Intermediate", icon_name: "cpu" }
];

export const initialCertifications = [
  { id: 1, title: "Introduction to Artificial Intelligence", organization: "LinkedIn Learning", issue_date: "2024", credential_url: "#" },
  { id: 2, title: "Generative AI", organization: "Google", issue_date: "2024", credential_url: "#" },
  { id: 3, title: "IoT Workshop", organization: "Kongu Engineering College", issue_date: "2023", credential_url: "#" },
  { id: 4, title: "Claude AI Master Class", organization: "Skill NATION", issue_date: "2024", credential_url: "#" },
  { id: 5, title: "Full Stack Development Session", organization: "NoviTech", issue_date: "2024", credential_url: "#" }
];

// API Call Wrapper with Fallback
export const getProjectsAPI = async () => {
  try {
    const response = await api.get('/projects');
    return response.data;
  } catch (error) {
    console.warn("FastAPI backend offline, using initial project data.", error.message);
    return initialProjects;
  }
};

export const getSkillsAPI = async () => {
  try {
    const response = await api.get('/skills');
    return response.data;
  } catch (error) {
    console.warn("FastAPI backend offline, using initial skills data.", error.message);
    return initialSkills;
  }
};

export const getCertificationsAPI = async () => {
  try {
    const response = await api.get('/certifications');
    return response.data;
  } catch (error) {
    console.warn("FastAPI backend offline, using initial certs data.", error.message);
    return initialCertifications;
  }
};

export const submitContactAPI = async (contactData) => {
  try {
    const response = await api.post('/contact', contactData);
    return { success: true, data: response.data };
  } catch (error) {
    console.warn("Backend offline, storing contact locally in session.", error.message);
    const existing = JSON.parse(localStorage.getItem('contact_messages') || '[]');
    const newMsg = { ...contactData, id: Date.now(), created_at: new Date().toISOString() };
    localStorage.setItem('contact_messages', JSON.stringify([newMsg, ...existing]));
    return { success: true, data: newMsg };
  }
};

export default api;
