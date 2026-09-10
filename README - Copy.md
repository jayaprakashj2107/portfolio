# Python Full Stack Developer Portfolio - Jayaprakash J

A modern, responsive, and colorful Full Stack Personal Portfolio Website designed for **Jayaprakash J** (Python Full Stack Developer & B.E. ECE Student at SRM TRP Engineering College, Trichy). 

This application showcases Jayaprakash's technical skills, real-world full-stack & machine learning projects, education timeline, internships/certifications, interactive contact form with backend database persistence, and a secure JWT-authenticated Admin Control Center.

---

## 🌟 Features

- **Dynamic Hero & Visual Canvas**: Interactive particle floating node visual canvas built with HTML5 Canvas API.
- **Glassmorphic UI/UX Design**: Modern dark & light mode switcher with persistent preference in `localStorage`, glowing gradient buttons, and responsive Bootstrap 5 card layouts.
- **Categorized Skills Matrix**: Interactive skill cards with realistic proficiency indicators across Frontend, Backend, Database, Programming, and Tools.
- **Academic & Experience Timeline**: Highlighted degree details for B.E. ECE at SRM TRP Engineering College, Trichy (2022–2026), NoviTech AI Internship, and Codebind Technologies In-Plant Training.
- **Filterable Projects Gallery**: Project cards with real field Machine Learning (Soil Crop Vision), Embedded Systems (Intruder Alarm), and Full Stack Web Apps (Complaint Management System, Smart Traffic Signal, Portfolio) with modal breakdown popups, GitHub repo links, and Live Demos.
- **Interactive Contact Form**: Client-side validation, live success/error alerts, and database message storage.
- **Admin Control Center**: Protected JWT route (`/admin`) for full CRUD management of Projects, Skills, Certifications, and review/deletion of Contact messages.
- **Robust API Resilience**: Auto-fallback service layer in React to ensure complete UI functionality offline or online.

---

## 🛠️ Technology Stack

### Frontend
- **HTML5 & CSS3**: Glassmorphic UI design, Google Fonts (Outfit & Inter), responsive media queries.
- **JavaScript (ES6+)**: Async/await API calls, canvas animations, state handling.
- **React.js (v18)**: Component-driven UI architecture, React Router v6, Context API.
- **Bootstrap 5**: Mobile-first grid, responsive navigation menu, utility classes.

### Backend
- **Python (3.12)**: Core logic, REST API framework.
- **FastAPI**: Asynchronous high-performance RESTful API endpoints.
- **SQLAlchemy ORM**: Database object-relational mapping.
- **PyJWT & Passlib**: Secure JWT authentication and bcrypt password hashing.

### Database
- **SQLite**: Zero-configuration default database for instant local development.
- **MySQL**: Production-ready schema supplied in `schema.sql`.

---

## 📁 Folder Structure

```
portfolio.data/
├── frontend/                     # React.js + Bootstrap 5 Frontend App
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   ├── TechCanvas.jsx
│   │   │   ├── ProjectModal.jsx
│   │   │   ├── SocialIcons.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Login.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   └── custom.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/                      # Python FastAPI Backend
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── auth.py
│   │   ├── seed.py
│   │   └── routers/
│   │       ├── auth.py
│   │       ├── projects.py
│   │       ├── skills.py
│   │       ├── certs.py
│   │       ├── contact.py
│   │       └── profile.py
│   ├── requirements.txt
│   ├── schema.sql                # MySQL DDL & Seed Script
│   └── .env.example
│
└── README.md
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18+) & `npm`
- Python (3.10+) & `pip`
- (Optional) MySQL Server (if running with MySQL instead of SQLite)

---

### 1. Backend Setup (FastAPI)

```bash
cd backend

# Create virtual environment (optional)
python -m venv venv
# Windows activate:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start FastAPI server
python app/main.py
# or using uvicorn directly:
uvicorn app.main:app --reload --port 8000
```
- API Documentation available at: `http://localhost:8000/docs`

---

### 2. MySQL Database Setup (Optional for Production)

1. Open MySQL workbench or CLI.
2. Execute `backend/schema.sql` script:
   ```bash
   mysql -u root -p < backend/schema.sql
   ```
3. Update `.env` in `backend/`:
   ```env
   DATABASE_URL=mysql+pymysql://username:password@localhost:3306/portfolio_db
   ```

---

### 3. Frontend Setup (React.js)

```bash
cd frontend

# Install dependencies
npm install

# Run Vite development server
npm run dev
```
- Application will open at: `http://localhost:5173`

---

## 🔐 Environment Variables (`backend/.env`)

```env
DATABASE_URL=sqlite:///./portfolio.db
JWT_SECRET=super_secret_jwt_key_jayaprakash_portfolio_2026
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=1440
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
CORS_ORIGINS=http://localhost:5173,http://localhost:3000
```

---

## 🔑 Admin Dashboard Access

1. Navigate to `http://localhost:5173/login` or click the **Admin** button in the navbar.
2. Enter default credentials:
   - **Username**: `admin`
   - **Password**: `admin123`
3. Manage projects, skills, certifications, and review contact messages.

---

## 🛠️ API Endpoints Summary

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/auth/login` | Admin Login & Token Generation | No |
| `GET` | `/api/projects` | Fetch all projects | No |
| `POST` | `/api/projects` | Create a new project | Yes (JWT) |
| `PUT` | `/api/projects/{id}` | Update project | Yes (JWT) |
| `DELETE` | `/api/projects/{id}` | Delete project | Yes (JWT) |
| `GET` | `/api/skills` | Fetch all skills | No |
| `POST` | `/api/skills` | Add skill | Yes (JWT) |
| `DELETE` | `/api/skills/{id}` | Delete skill | Yes (JWT) |
| `GET` | `/api/certifications` | Fetch certifications | No |
| `POST` | `/api/certifications` | Add certification | Yes (JWT) |
| `POST` | `/api/contact` | Submit contact form | No |
| `GET` | `/api/contact` | Fetch received messages | Yes (JWT) |
| `DELETE` | `/api/contact/{id}` | Delete message | Yes (JWT) |

---

## 🌐 Production Build & Deployment

### Frontend (Vercel / Netlify)
```bash
cd frontend
npm run build
```
Deploy the `dist/` directory to Vercel or Netlify.

### Backend (Render / Railway)
Deploy `backend/` directory to Render or Railway with Python runtime, setting environment variables as specified in `.env.example`.

---

## 📸 Future Improvements
- Multi-language support (Tamil / English).
- Live visitor analytics counter on admin panel.
- Direct blog / technical article publishing module.
