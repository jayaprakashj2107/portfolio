import React from 'react';
import { Mail, ArrowUp, Code2, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section py-5 mt-5 border-top border-secondary border-opacity-10 position-relative">
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-between">
          <div className="col-lg-6 text-center text-lg-start">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 mb-2">
              <Code2 size={24} className="text-primary" />
              <span className="fw-bold fs-5 text-gradient-cyan">Jayaprakash J</span>
            </div>
            <p className="text-muted small mb-0">
              Python Full Stack Developer • B.E. ECE student at SRM TRP Engineering College, Trichy
            </p>
          </div>

          <div className="col-lg-6">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-end gap-3">
              <a
                href="https://github.com/jayaprakash2107"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-custom rounded-circle p-2"
                title="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/in/jayaprakash2107"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-custom rounded-circle p-2"
                title="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:jayaprakashj2107@gmail.com"
                className="btn btn-outline-custom rounded-circle p-2"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-4 pt-4 border-top border-secondary border-opacity-10 align-items-center">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <p className="text-muted small mb-0">
              © {new Date().getFullYear()} Jayaprakash J. Built with HTML5, CSS3, JavaScript, React.js & Python FastAPI.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <button onClick={scrollToTop} className="btn btn-sm btn-outline-custom py-1 px-3">
              Back to Top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
