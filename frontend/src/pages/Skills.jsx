import React, { useState, useEffect } from 'react';
import { Code, Terminal, Database, Wrench, Box, Check } from 'lucide-react';
import { getSkillsAPI } from '../services/api';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    getSkillsAPI().then(data => setSkills(data));
  }, []);

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Programming', 'Tools'];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category.toLowerCase() === activeCategory.toLowerCase());

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend': return <Code size={18} className="text-primary" />;
      case 'Backend': return <Terminal size={18} className="text-info" />;
      case 'Database': return <Database size={18} className="text-warning" />;
      case 'Tools': return <Wrench size={18} className="text-success" />;
      default: return <Box size={18} className="text-purple" />;
    }
  };

  return (
    <section id="skills" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="section-subtitle">Technical Proficiency</div>
          <h2 className="display-5 fw-bold text-gradient-cyan">Skills & Expertise</h2>
          <div className="mx-auto bg-primary rounded mb-3" style={{ width: '60px', height: '4px' }}></div>
          <p className="text-muted max-w-600 mx-auto">
            A realistic overview of my technical capabilities spanning Frontend, Backend, Database Systems, and Tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn ${activeCategory === cat ? 'btn-gradient' : 'btn-outline-custom'} px-4 py-2 rounded-pill`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="row g-4">
          {filteredSkills.map((skill) => (
            <div key={skill.id || skill.name} className="col-md-6 col-lg-4">
              <div className="glass-card p-4 h-100">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center gap-2">
                    {getCategoryIcon(skill.category)}
                    <h5 className="fw-bold mb-0 text-main">{skill.name}</h5>
                  </div>
                  <span className="badge badge-vibrant">{skill.level_label || 'Intermediate'}</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-muted small fw-medium">{skill.category}</span>
                  <span className="fw-bold small text-primary">{skill.proficiency}%</span>
                </div>

                <div className="skill-progress-wrapper">
                  <div
                    className="skill-progress-fill"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
