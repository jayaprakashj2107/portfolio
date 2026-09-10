import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="section-subtitle">Academic Journey</div>
          <h2 className="display-5 fw-bold text-gradient-cyan">Education</h2>
          <div className="mx-auto bg-primary rounded mb-3" style={{ width: '60px', height: '4px' }}></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="glass-card p-4 p-md-5">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                    <span className="badge badge-glow">
                      <Calendar size={14} /> 2022 - 2026 (Graduating)
                    </span>
                    <span className="text-muted small d-flex align-items-center gap-1">
                      <MapPin size={14} className="text-danger" /> Trichy, Tamil Nadu
                    </span>
                  </div>

                  <h3 className="fw-bold mb-2 text-gradient-cyan">
                    B.E. Electronics and Communication Engineering
                  </h3>
                  <h5 className="fw-semibold text-main mb-3 d-flex align-items-center gap-2">
                    <GraduationCap className="text-primary" size={22} /> SRM TRP Engineering College, Trichy
                  </h5>

                  <p className="text-secondary fs-6 mb-4" style={{ lineHeight: '1.8' }}>
                    Pursuing a Bachelor of Engineering in Electronics and Communication Engineering. Built strong fundamental knowledge in software programming, microcontrollers, signals & systems, electronic circuits, and web application development.
                  </p>

                  <div className="row g-3 pt-3 border-top border-secondary border-opacity-10">
                    <div className="col-md-6">
                      <div className="d-flex align-items-start gap-2">
                        <BookOpen size={18} className="text-info mt-1" />
                        <div>
                          <div className="fw-bold small text-main">Core Subjects</div>
                          <div className="text-muted small">Python, Data Structures, Microprocessors, Embedded Logic, Computer Networks</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="d-flex align-items-start gap-2">
                        <Award size={18} className="text-warning mt-1" />
                        <div>
                          <div className="fw-bold small text-main">Practical Focus</div>
                          <div className="text-muted small">Full Stack Web Projects, Machine Learning Soil Classification, IoT Security</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
