import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitContactAPI } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setAlert({ type: 'danger', message: 'Please fill in all required fields.' });
      return;
    }

    setLoading(true);
    setAlert(null);

    const result = await submitContactAPI(formData);
    setLoading(false);

    if (result.success) {
      setAlert({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } else {
      setAlert({ type: 'danger', message: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="section-subtitle">Get In Touch</div>
          <h2 className="display-5 fw-bold text-gradient-cyan">Contact Me</h2>
          <div className="mx-auto bg-primary rounded mb-3" style={{ width: '60px', height: '4px' }}></div>
          <p className="text-muted max-w-600 mx-auto">
            Have a project idea, job opportunity, or question? Feel free to send me a message!
          </p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="glass-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="fw-bold mb-4 text-gradient-cyan">Contact Details</h3>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="p-3 rounded-circle bg-opacity-10 bg-primary text-primary">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="text-muted small fw-semibold">Phone</div>
                    <a href="tel:+919025623299" className="fw-bold text-main fs-6 text-decoration-none">
                      +91 9025623299
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="p-3 rounded-circle bg-opacity-10 bg-info text-info">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="text-muted small fw-semibold">Email</div>
                    <a href="mailto:jayaprakashj2107@gmail.com" className="fw-bold text-main fs-6 text-decoration-none">
                      jayaprakashj2107@gmail.com
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="p-3 rounded-circle bg-opacity-10 bg-warning text-warning">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className="text-muted small fw-semibold">Location</div>
                    <div className="fw-bold text-main fs-6" style={{ lineHeight: '1.5' }}>
                      Karnatham Post, Virudhachalam Taluk, Cuddalore District, Tamil Nadu, India
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 glass-card bg-opacity-10 border-primary">
                <div className="fw-bold text-primary mb-1">Entry-Level Roles</div>
                <div className="text-muted small">
                  Ready to join as Python Full Stack Developer, Junior Software Engineer, or React Developer.
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="glass-card p-4 p-md-5">
              <h3 className="fw-bold mb-4 text-main">Send a Message</h3>

              {alert && (
                <div className={`alert alert-${alert.type} d-flex align-items-center gap-2 glass-card mb-4`} role="alert">
                  {alert.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                  <div>{alert.message}</div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-semibold">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control glass-input"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-semibold">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control glass-input"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-semibold">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control glass-input"
                      placeholder="+91 9000000000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-semibold">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control glass-input"
                      placeholder="Job Opportunity / Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label text-muted small fw-semibold">Message *</label>
                  <textarea
                    name="message"
                    rows="5"
                    className="form-control glass-input"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-gradient btn-lg w-100 d-flex align-items-center justify-content-center gap-2"
                >
                  {loading ? (
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
