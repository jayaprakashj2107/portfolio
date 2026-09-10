import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard, FolderKanban, Cpu, Award, Mail, Trash2, Edit, Plus, Check, X, RefreshCw
} from 'lucide-react';
import { getProjectsAPI, getSkillsAPI, getCertificationsAPI, initialProfile } from '../services/api';
import axios from 'axios';

const API_BASE = 'http://localhost:8000/api';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');

  // Data states
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [messages, setMessages] = useState([]);

  // Modals & Form states
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: '', short_description: '', full_description: '', technologies: '', category: 'Web Development', image_url: '', github_url: '', live_demo_url: ''
  });

  const [showSkillModal, setShowSkillModal] = useState(false);
  const [skillForm, setSkillForm] = useState({
    name: '', category: 'Frontend', proficiency: 80, level_label: 'Intermediate'
  });

  const [showCertModal, setShowCertModal] = useState(false);
  const [certForm, setCertForm] = useState({
    title: '', organization: '', issue_date: '2024', credential_url: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const projData = await getProjectsAPI();
    setProjects(projData);

    const skillData = await getSkillsAPI();
    setSkills(skillData);

    const certData = await getCertificationsAPI();
    setCertifications(certData);

    // Messages local or API
    try {
      const token = localStorage.getItem('admin_jwt_token');
      const res = await axios.get(`${API_BASE}/contact`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessages(res.data);
    } catch {
      const localMsgs = JSON.parse(localStorage.getItem('contact_messages') || '[]');
      setMessages(localMsgs);
    }
  };

  // Handle Project Create / Edit
  const handleSaveProject = (e) => {
    e.preventDefault();
    if (editingProject) {
      setProjects(projects.map(p => p.id === editingProject.id ? { ...p, ...projectForm } : p));
    } else {
      const newP = { ...projectForm, id: Date.now() };
      setProjects([newP, ...projects]);
    }
    setShowProjectModal(false);
    setEditingProject(null);
  };

  const handleDeleteProject = (id) => {
    if (window.confirm('Delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  // Handle Skill Add / Delete
  const handleSaveSkill = (e) => {
    e.preventDefault();
    const newS = { ...skillForm, id: Date.now() };
    setSkills([...skills, newS]);
    setShowSkillModal(false);
  };

  const handleDeleteSkill = (id) => {
    setSkills(skills.filter(s => s.id !== id));
  };

  // Handle Cert Add / Delete
  const handleSaveCert = (e) => {
    e.preventDefault();
    const newC = { ...certForm, id: Date.now() };
    setCertifications([...certifications, newC]);
    setShowCertModal(false);
  };

  const handleDeleteCert = (id) => {
    setCertifications(certifications.filter(c => c.id !== id));
  };

  // Delete Contact Message
  const handleDeleteMessage = (id) => {
    setMessages(messages.filter(m => m.id !== id));
    const stored = JSON.parse(localStorage.getItem('contact_messages') || '[]');
    localStorage.setItem('contact_messages', JSON.stringify(stored.filter(m => m.id !== id)));
  };

  return (
    <div className="container py-5 mt-5">
      <div className="glass-card p-4 mb-4 d-flex flex-wrap align-items-center justify-content-between gap-3">
        <div>
          <h2 className="fw-bold mb-1 text-gradient-cyan d-flex align-items-center gap-2">
            <LayoutDashboard size={28} /> Admin Control Center
          </h2>
          <p className="text-muted small mb-0">Manage projects, skills, certifications, and review contact submissions</p>
        </div>
        <button onClick={fetchData} className="btn btn-outline-custom">
          <RefreshCw size={16} /> Sync Data
        </button>
      </div>

      {/* Tabs */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setActiveTab('projects')}
          className={`btn ${activeTab === 'projects' ? 'btn-gradient' : 'btn-outline-custom'} d-flex align-items-center gap-2`}
        >
          <FolderKanban size={18} /> Projects ({projects.length})
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`btn ${activeTab === 'skills' ? 'btn-gradient' : 'btn-outline-custom'} d-flex align-items-center gap-2`}
        >
          <Cpu size={18} /> Skills ({skills.length})
        </button>
        <button
          onClick={() => setActiveTab('certs')}
          className={`btn ${activeTab === 'certs' ? 'btn-gradient' : 'btn-outline-custom'} d-flex align-items-center gap-2`}
        >
          <Award size={18} /> Certifications ({certifications.length})
        </button>
        <button
          onClick={() => setActiveTab('messages')}
          className={`btn ${activeTab === 'messages' ? 'btn-gradient' : 'btn-outline-custom'} d-flex align-items-center gap-2`}
        >
          <Mail size={18} /> Messages ({messages.length})
        </button>
      </div>

      {/* TAB 1: PROJECTS */}
      {activeTab === 'projects' && (
        <div className="glass-card p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold mb-0">Projects Directory</h4>
            <button
              onClick={() => {
                setEditingProject(null);
                setProjectForm({ title: '', short_description: '', full_description: '', technologies: '', category: 'Web Development', image_url: '', github_url: '', live_demo_url: '' });
                setShowProjectModal(true);
              }}
              className="btn btn-gradient btn-sm"
            >
              <Plus size={16} /> Add New Project
            </button>
          </div>

          <div className="table-responsive">
            <table className="table align-middle text-main">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Technologies</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map(p => (
                  <tr key={p.id}>
                    <td className="fw-semibold">{p.title}</td>
                    <td><span className="badge badge-glow">{p.category}</span></td>
                    <td className="small text-muted">{p.technologies}</td>
                    <td className="text-end">
                      <button
                        onClick={() => {
                          setEditingProject(p);
                          setProjectForm(p);
                          setShowProjectModal(true);
                        }}
                        className="btn btn-sm btn-outline-info me-2"
                      >
                        <Edit size={14} />
                      </button>
                      <button onClick={() => handleDeleteProject(p.id)} className="btn btn-sm btn-outline-danger">
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: SKILLS */}
      {activeTab === 'skills' && (
        <div className="glass-card p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold mb-0">Skills Matrix</h4>
            <button onClick={() => setShowSkillModal(true)} className="btn btn-gradient btn-sm">
              <Plus size={16} /> Add Skill
            </button>
          </div>

          <div className="row g-3">
            {skills.map(s => (
              <div key={s.id} className="col-md-4">
                <div className="glass-card p-3 d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="fw-bold mb-1">{s.name}</h6>
                    <span className="badge badge-vibrant me-2">{s.category}</span>
                    <span className="small text-primary">{s.proficiency}%</span>
                  </div>
                  <button onClick={() => handleDeleteSkill(s.id)} className="btn btn-sm btn-outline-danger p-1">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: CERTIFICATIONS */}
      {activeTab === 'certs' && (
        <div className="glass-card p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold mb-0">Certifications & Workshops</h4>
            <button onClick={() => setShowCertModal(true)} className="btn btn-gradient btn-sm">
              <Plus size={16} /> Add Certification
            </button>
          </div>

          <div className="row g-3">
            {certifications.map(c => (
              <div key={c.id} className="col-md-6">
                <div className="glass-card p-3 d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="fw-bold mb-1">{c.title}</h6>
                    <p className="small text-muted mb-0">{c.organization} ({c.issue_date})</p>
                  </div>
                  <button onClick={() => handleDeleteCert(c.id)} className="btn btn-sm btn-outline-danger p-1">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: MESSAGES */}
      {activeTab === 'messages' && (
        <div className="glass-card p-4">
          <h4 className="fw-bold mb-4">Contact Form Submissions</h4>

          {messages.length === 0 ? (
            <p className="text-muted">No messages received yet.</p>
          ) : (
            <div className="d-flex flex-column gap-3">
              {messages.map(m => (
                <div key={m.id} className="glass-card p-3">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h5 className="fw-bold mb-0 text-gradient-cyan">{m.subject}</h5>
                      <span className="small text-muted">From: {m.name} ({m.email}) {m.phone && `• ${m.phone}`}</span>
                    </div>
                    <button onClick={() => handleDeleteMessage(m.id)} className="btn btn-sm btn-outline-danger">
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <p className="text-secondary small mb-0">{m.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* PROJECT ADD/EDIT MODAL */}
      {showProjectModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content glass-card border-0 p-4">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold text-gradient-cyan">{editingProject ? 'Edit Project' : 'Add New Project'}</h5>
                <button onClick={() => setShowProjectModal(false)} className="btn btn-outline-custom p-1 rounded-circle"><X size={18} /></button>
              </div>
              <form onSubmit={handleSaveProject}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label small fw-semibold">Title</label>
                    <input type="text" className="form-control glass-input" value={projectForm.title} onChange={e => setProjectForm({...projectForm, title: e.target.value})} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-semibold">Short Description</label>
                    <input type="text" className="form-control glass-input" value={projectForm.short_description} onChange={e => setProjectForm({...projectForm, short_description: e.target.value})} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-semibold">Full Description</label>
                    <textarea rows="3" className="form-control glass-input" value={projectForm.full_description} onChange={e => setProjectForm({...projectForm, full_description: e.target.value})}></textarea>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold">Category</label>
                      <select className="form-select glass-input" value={projectForm.category} onChange={e => setProjectForm({...projectForm, category: e.target.value})}>
                        <option value="Web Development">Web Development</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Embedded Systems">Embedded Systems</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold">Technologies (comma separated)</label>
                      <input type="text" className="form-control glass-input" value={projectForm.technologies} onChange={e => setProjectForm({...projectForm, technologies: e.target.value})} required />
                    </div>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold">GitHub URL</label>
                      <input type="url" className="form-control glass-input" value={projectForm.github_url} onChange={e => setProjectForm({...projectForm, github_url: e.target.value})} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold">Live Demo URL</label>
                      <input type="url" className="form-control glass-input" value={projectForm.live_demo_url} onChange={e => setProjectForm({...projectForm, live_demo_url: e.target.value})} />
                    </div>
                  </div>
                </div>
                <div className="modal-footer border-0">
                  <button type="button" onClick={() => setShowProjectModal(false)} className="btn btn-outline-custom">Cancel</button>
                  <button type="submit" className="btn btn-gradient">Save Project</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
