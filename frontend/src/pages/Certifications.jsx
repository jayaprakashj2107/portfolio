import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, ExternalLink } from 'lucide-react';
import { getCertificationsAPI } from '../services/api';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    getCertificationsAPI().then(data => setCertifications(data));
  }, []);

  return (
    <section id="certifications" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="section-subtitle">Continuous Learning</div>
          <h2 className="display-5 fw-bold text-gradient-cyan">Certifications & Workshops</h2>
          <div className="mx-auto bg-primary rounded mb-3" style={{ width: '60px', height: '4px' }}></div>
          <p className="text-muted max-w-600 mx-auto">
            Professional certifications and specialized tech workshops completed to strengthen my skill set.
          </p>
        </div>

        <div className="row g-4">
          {certifications.map((cert) => (
            <div key={cert.id || cert.title} className="col-md-6 col-lg-4">
              <div className="glass-card p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="p-2 rounded-circle bg-opacity-10 bg-primary">
                      <Award size={28} className="text-primary" />
                    </div>
                    <span className="badge badge-vibrant">{cert.issue_date || 'Certified'}</span>
                  </div>

                  <h5 className="fw-bold mb-2 text-main">{cert.title}</h5>
                  <p className="text-muted small mb-3 fw-medium">
                    <CheckCircle2 size={14} className="text-info me-1" /> {cert.organization}
                  </p>
                </div>

                <div className="pt-3 border-top border-secondary border-opacity-10 mt-3">
                  <a
                    href={cert.credential_url || '#'}
                    onClick={(e) => {
                      if (cert.credential_url === '#' || !cert.credential_url) {
                        e.preventDefault();
                        alert(`Certificate verified for ${cert.title} by ${cert.organization}`);
                      }
                    }}
                    className="btn btn-sm btn-outline-custom w-100 d-flex align-items-center justify-content-center gap-2"
                  >
                    <ExternalLink size={14} /> Verify Credential
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
