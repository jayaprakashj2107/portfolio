import React from 'react';
import { Briefcase, Calendar, Cpu, CheckCircle2, ShieldAlert } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="section-subtitle">Practical Exposure</div>
          <h2 className="display-5 fw-bold text-gradient-cyan">Internships & Training</h2>
          <div className="mx-auto bg-primary rounded mb-3" style={{ width: '60px', height: '4px' }}></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="timeline-container">
              {/* Item 1: NoviTech AI Internship */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="glass-card p-4 p-md-5">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                    <span className="badge badge-glow">
                      <Calendar size={14} /> AI Internship
                    </span>
                    <span className="text-muted small">NoviTech</span>
                  </div>

                  <h3 className="fw-bold mb-2 text-gradient-cyan">AI Internship</h3>
                  <h5 className="fw-semibold text-main mb-3 d-flex align-items-center gap-2">
                    <Briefcase className="text-primary" size={20} /> NoviTech
                  </h5>

                  <p className="text-secondary fs-6 mb-4" style={{ lineHeight: '1.8' }}>
                    Completed an intensive Artificial Intelligence Internship program focused on machine learning fundamentals, data preprocessing, neural networks, and Python-based model deployment.
                  </p>

                  <div className="row g-2 pt-2 border-top border-secondary border-opacity-10">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-2">
                        <CheckCircle2 size={16} className="text-success" />
                        <span className="small text-main">Machine Learning & AI Concepts</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-2">
                        <CheckCircle2 size={16} className="text-success" />
                        <span className="small text-main">Python Data Preprocessing</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-2">
                        <CheckCircle2 size={16} className="text-success" />
                        <span className="small text-main">Neural Network Workflows</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-2">
                        <CheckCircle2 size={16} className="text-success" />
                        <span className="small text-main">Model Evaluation & Testing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 2: Codebind Technologies In-Plant Training */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="glass-card p-4 p-md-5">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                    <span className="badge badge-vibrant">
                      <Calendar size={14} /> In-Plant Training
                    </span>
                    <span className="text-muted small">Codebind Technologies, Trichy</span>
                  </div>

                  <h3 className="fw-bold mb-2 text-gradient-cyan">In-Plant Training</h3>
                  <h5 className="fw-semibold text-main mb-2 d-flex align-items-center gap-2">
                    <Cpu className="text-info" size={20} /> Codebind Technologies, Trichy
                  </h5>

                  <div className="p-3 glass-card bg-opacity-10 mb-4 border-info">
                    <div className="fw-bold text-info small mb-1 d-flex align-items-center gap-1">
                      <ShieldAlert size={16} /> Key Hands-On Project:
                    </div>
                    <div className="fw-semibold text-main">
                      "Intruder Alarm System using Arduino IDE with Ultrasonic Sensor"
                    </div>
                  </div>

                  <p className="text-secondary fs-6 mb-4" style={{ lineHeight: '1.8' }}>
                    Participated in practical embedded system training. Programmed Arduino microcontrollers using Arduino IDE, calibrated ultrasonic sensors for distance detection, integrated buzzer/alarm outputs, and solved real-world hardware/software interfacing challenges.
                  </p>

                  <div className="row g-2 pt-2 border-top border-secondary border-opacity-10">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-2">
                        <CheckCircle2 size={16} className="text-info" />
                        <span className="small text-main">Arduino Programming & C/C++</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-2">
                        <CheckCircle2 size={16} className="text-info" />
                        <span className="small text-main">Ultrasonic Sensor Integration</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-2">
                        <CheckCircle2 size={16} className="text-info" />
                        <span className="small text-main">Embedded Hardware/Software</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-2">
                        <CheckCircle2 size={16} className="text-info" />
                        <span className="small text-main">Security Alarm Logic</span>
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

export default Experience;
