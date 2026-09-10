import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';

import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

const MainPortfolio = () => (
  <main>
    <Home />
    <About />
    <Skills />
    <Education />
    <Projects />
    <Experience />
    <Certifications />
    <Contact />
  </main>
);

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className="flex-grow-1">
              <Routes>
                <Route path="/" element={<MainPortfolio />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
