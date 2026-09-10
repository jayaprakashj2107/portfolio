import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Code2, Lock, LogOut, LayoutDashboard } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'About', path: '/#about' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Education', path: '/#education' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Certifications', path: '/#certifications' },
    { name: 'Contact', path: '/#contact' },
  ];

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const targetId = path.substring(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const elem = document.getElementById(targetId);
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const elem = document.getElementById(targetId);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top glass-navbar ${scrolled ? 'py-2 shadow-lg' : 'py-3'}`}>
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2 fw-bold text-gradient-cyan fs-4">
          <Code2 size={28} className="text-primary" />
          <span>Jayaprakash J</span>
        </Link>

        <div className="d-flex align-items-center gap-3 d-lg-none">
          <ThemeToggle />
          <button
            className="btn btn-outline-custom p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show mt-3 glass-card p-4' : ''}`}>
          <ul className="navbar-menu navbar-nav ms-auto align-items-lg-center gap-lg-1 gap-2">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <a
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.path);
                  }}
                  className="nav-link fw-medium px-3 text-main hover-cyan"
                  style={{ cursor: 'pointer' }}
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li className="nav-item ms-lg-2">
              {isAuthenticated ? (
                <div className="d-flex align-items-center gap-2">
                  <Link to="/admin" className="btn btn-sm btn-gradient py-2 px-3">
                    <LayoutDashboard size={16} /> Admin
                  </Link>
                  <button onClick={logout} className="btn btn-sm btn-outline-danger py-2 px-2" title="Logout">
                    <LogOut size={16} />
                  </button>
                </div>
              ) : (
                <Link to="/login" className="btn btn-sm btn-outline-custom py-2 px-3">
                  <Lock size={15} /> Admin
                </Link>
              )}
            </li>

            <li className="nav-item d-none d-lg-block ms-2">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
