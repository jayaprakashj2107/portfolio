import React from 'react';
import { X, ExternalLink, Layers, CheckCircle } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const techList = project.technologies ? project.technologies.split(',').map(t => t.trim()) : [];

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', zIndex: 1050 }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content glass-card border-0 p-3">
          <div className="modal-header border-0 pb-0">
            <h4 className="modal-title fw-bold text-gradient-cyan">{project.title}</h4>
            <button type="button" className="btn btn-outline-custom p-1 rounded-circle" onClick={onClose}>
              <X size={20} />
            </button>
          </div>

          <div className="modal-body">
            {project.image_url && (
              <img
                src={project.image_url}
                alt={project.title}
                className="img-fluid rounded-4 mb-4 shadow-sm w-100"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
            )}

            <div className="mb-3">
              <span className="badge badge-glow mb-2">{project.category || 'Web Development'}</span>
              <p className="lead text-muted fs-6 mb-3">{project.short_description}</p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold mb-2 text-main">Full Overview</h6>
              <p className="text-secondary" style={{ lineHeight: '1.7' }}>
                {project.full_description || project.short_description}
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold mb-2 text-main d-flex align-items-center gap-2">
                <Layers size={18} className="text-primary" /> Technologies Used
              </h6>
              <div className="d-flex flex-wrap gap-2">
                {techList.map((tech, idx) => (
                  <span key={idx} className="badge badge-vibrant">
                    <CheckCircle size={12} className="text-success" /> {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="d-flex flex-wrap gap-3 pt-2 border-top border-secondary border-opacity-10">
              {project.github_url && (
                <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-custom">
                  <GithubIcon size={18} /> GitHub Repository
                </a>
              )}
              {project.live_demo_url && (
                <a href={project.live_demo_url} target="_blank" rel="noopener noreferrer" className="btn btn-gradient">
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
