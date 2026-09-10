import React from 'react';
import { User, GraduationCap, Target, Cpu, CheckCircle2, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="section-subtitle">Get To Know Me</div>
          <h2 className="display-5 fw-bold text-gradient-cyan">About Me</h2>
          <div className="mx-auto bg-primary rounded" style={{ width: '60px', height: '4px' }}></div>
        </div>

        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <div className="glass-card p-4 p-md-5">
              <h3 className="fw-bold mb-3 d-flex align-items-center gap-2 text-gradient-cyan">
                <User size={24} className="text-primary" /> Python Full Stack Developer
              </h3>
              <p className="text-secondary lead fs-6 mb-3" style={{ lineHeight: '1.8' }}>
                I am a passionate and detail-oriented Python Full Stack Developer with a strong foundation in Electronics and Communication Engineering from <strong>SRM TRP Engineering College, Trichy</strong>.
              </p>
              <p className="text-secondary fs-6 mb-4" style={{ lineHeight: '1.8' }}>
                I have hands-on experience learning and working with Python, React.js, JavaScript, SQL, REST APIs, and modern web development technologies. My goal is to begin my career as a Software Engineer and contribute to real-world software solutions while continuously improving my technical and professional skills.
              </p>

              <div className="row g-3 pt-2 border-top border-secondary border-opacity-10">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle2 className="text-info" size={18} />
                    <span className="fw-medium text-main">Frontend & Backend Integration</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle2 className="text-info" size={18} />
                    <span className="fw-medium text-main">RESTful API Design</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle2 className="text-info" size={18} />
                    <span className="fw-medium text-main">Database Management (SQL)</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <CheckCircle2 className="text-info" size={18} />
                    <span className="fw-medium text-main">Embedded Hardware & IoT Basics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="glass-card p-4 h-100">
                  <GraduationCap size={32} className="text-primary mb-3" />
                  <h5 className="fw-bold mb-2">Education</h5>
                  <p className="text-muted small mb-1">B.E. Electronics & Communication</p>
                  <p className="fw-semibold text-main mb-0">SRM TRP Engineering College, Trichy (2026)</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="glass-card p-4 h-100">
                  <Target size={32} className="text-info mb-3" />
                  <h5 className="fw-bold mb-2">Career Objective</h5>
                  <p className="text-muted small mb-0">
                    To land an entry-level Software Developer role where I can apply Python & React skills to impactful projects.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="glass-card p-4 h-100">
                  <Cpu size={32} className="text-warning mb-3" />
                  <h5 className="fw-bold mb-2">Technical Interests</h5>
                  <p className="text-muted small mb-0">
                    Full Stack Web Apps, Computer Vision & Machine Learning, REST APIs, Microcontrollers & IoT.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="glass-card p-4 h-100">
                  <Award size={32} className="text-success mb-3" />
                  <h5 className="fw-bold mb-2">Developer Mindset</h5>
                  <p className="text-muted small mb-0">
                    Problem solver, fast learner, clean code advocate, detail-oriented team contributor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
