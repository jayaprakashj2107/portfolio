import React, { useState, useEffect } from 'react';
import { ExternalLink, Info, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { getProjectsAPI } from '../services/api';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjectsAPI()
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Unable to load projects. Please try again.');
        setLoading(false);
      });
  }, []);

  const categories = ['All', 'Web Development', 'Machine Learning', 'Embedded Systems'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => (p.category || '').toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="projects" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="section-subtitle">My Work</div>
          <h2 className="display-5 fw-bold text-gradient-cyan">Featured Projects</h2>
          <div className="mx-auto bg-primary rounded mb-3" style={{ width: '60px', height: '4px' }}></div>
          <p className="text-muted max-w-600 mx-auto">
            Explore my real-world full-stack web applications, machine learning projects, and embedded hardware systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`btn ${activeFilter === cat ? 'btn-gradient' : 'btn-outline-custom'} px-4 py-2 rounded-pill`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading projects...</span>
            </div>
            <p className="text-muted mt-3">Loading projects from API...</p>
          </div>
        ) : error ? (
          <div className="alert alert-danger text-center glass-card" role="alert">
            {error}
          </div>
        ) : (
          <div className="row g-4">
            {filteredProjects.map((project) => {
              const techArray = project.technologies ? project.technologies.split(',').map(t => t.trim()) : [];
              return (
                <div key={project.id || project.title} className="col-md-6 col-lg-4">
                  <div className="glass-card project-card h-100 d-flex flex-column">
                    <div className="img-overflow-container">
                      <img
                        src={project.image_url || 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80'}
                        alt={project.title}
                        className="project-card-img"
                      />
                    </div>

                    <div className="p-4 d-flex flex-column flex-grow-1">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="badge badge-glow">{project.category || 'Web Development'}</span>
                      </div>

                      <h4 className="fw-bold mb-2 text-main">{project.title}</h4>
                      <p className="text-muted small mb-3 flex-grow-1" style={{ lineHeight: '1.6' }}>
                        {project.short_description}
                      </p>

                      <div className="mb-4">
                        <div className="d-flex flex-wrap gap-1">
                          {techArray.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="badge badge-vibrant">
                              {tech}
                            </span>
                          ))}
                          {techArray.length > 3 && (
                            <span className="badge badge-vibrant">+{techArray.length - 3} more</span>
                          )}
                        </div>
                      </div>

                      <div className="d-flex align-items-center justify-content-between gap-2 pt-3 border-top border-secondary border-opacity-10 mt-auto">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="btn btn-sm btn-outline-custom"
                        >
                          <Info size={15} /> Details
                        </button>

                        <div className="d-flex gap-2">
                          {project.github_url && (
                            <a
                              href={project.github_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-outline-custom p-2"
                              title="GitHub Repository"
                            >
                              <GithubIcon size={16} />
                            </a>
                          )}
                          {project.live_demo_url && (
                            <a
                              href={project.live_demo_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-gradient p-2"
                              title="Live Demo"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal Viewer */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
