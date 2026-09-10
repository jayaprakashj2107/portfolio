import React from 'react';
import { ArrowRight, Mail, Code, Database, Cpu, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import TechCanvas from '../components/TechCanvas';

const Home = () => {
  return (
    <section id="home" className="hero-section min-vh-100 d-flex align-items-center position-relative pt-5 pb-4 overflow-hidden">
      <TechCanvas />

      <div className="container hero-content py-5">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-7">
            <div className="mb-3 d-inline-flex align-items-center gap-2 badge badge-vibrant py-2 px-3">
              <span className="spinner-grow spinner-grow-sm text-info" role="status" aria-hidden="true"></span>
              <span className="fw-semibold text-gradient-cyan">Open for Entry-Level Roles</span>
            </div>

            <h1 className="display-3 fw-bold mb-3">
              Hi, I'm <span className="text-gradient-cyan">Jayaprakash J</span>
            </h1>

            <h2 className="fs-3 fw-semibold text-muted mb-4 d-flex align-items-center gap-2">
              <Terminal className="text-primary" size={28} />
              <span>Python Full Stack Developer</span>
            </h2>

            <p className="lead text-secondary mb-4 pe-lg-4" style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
              I am a passionate and detail-oriented Python Full Stack Developer with a strong foundation in Electronics and Communication Engineering from SRM TRP Engineering College, Trichy. I enjoy building responsive, user-friendly web applications and solving real-world problems using modern technologies.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-5">
              <a href="#projects" className="btn btn-gradient btn-lg">
                View My Projects <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn btn-outline-custom btn-lg">
                <Mail size={20} /> Contact Me
              </a>
            </div>

            <div className="d-flex align-items-center gap-3">
              <span className="text-muted small fw-semibold">Connect with me:</span>
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

          <div className="col-lg-5 text-center">
            <div className="position-relative d-inline-block">
              <div className="glass-card p-4 p-md-5 float-element text-start" style={{ maxWidth: '420px', margin: '0 auto' }}>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <div className="rounded-circle bg-danger p-1" style={{ width: 12, height: 12 }}></div>
                    <div className="rounded-circle bg-warning p-1" style={{ width: 12, height: 12 }}></div>
                    <div className="rounded-circle bg-success p-1" style={{ width: 12, height: 12 }}></div>
                  </div>
                  <span className="text-muted small font-monospace">developer.py</span>
                </div>

                <div className="font-monospace small mb-3">
                  <span className="text-primary">class</span> <span className="text-warning">FullStackDeveloper</span>:
                  <br />
                  &nbsp;&nbsp;<span className="text-info">def __init__</span>(self):
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;self.name = <span className="text-success">"Jayaprakash J"</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;self.degree = <span className="text-success">"B.E. ECE"</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;self.college = <span className="text-success">"SRM TRP"</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;self.stack = [<span className="text-success">"React"</span>, <span className="text-success">"Python"</span>, <span className="text-success">"FastAPI"</span>, <span className="text-success">"MySQL"</span>]
                </div>

                <hr className="border-secondary opacity-25 my-3" />

                <div className="row g-2 text-center pt-2">
                  <div className="col-4">
                    <div className="p-2 rounded bg-opacity-10 bg-primary">
                      <Code size={20} className="text-primary mb-1" />
                      <div className="fw-bold small">React.js</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 rounded bg-opacity-10 bg-info">
                      <Cpu size={20} className="text-info mb-1" />
                      <div className="fw-bold small">FastAPI</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 rounded bg-opacity-10 bg-purple">
                      <Database size={20} className="text-warning mb-1" />
                      <div className="fw-bold small">MySQL</div>
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

export default Home;
