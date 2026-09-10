import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, Key, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await login(username, password);
    setLoading(false);

    if (result.success) {
      navigate('/admin');
    } else {
      setError(result.message || 'Login failed. Check credentials.');
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="container" style={{ maxWidth: '450px' }}>
        <div className="glass-card p-4 p-md-5">
          <div className="text-center mb-4">
            <div className="p-3 rounded-circle bg-opacity-10 bg-primary d-inline-block text-primary mb-3">
              <Lock size={32} />
            </div>
            <h3 className="fw-bold text-gradient-cyan">Admin Dashboard Login</h3>
            <p className="text-muted small">Sign in to manage portfolio content & view contact messages</p>
          </div>

          {error && (
            <div className="alert alert-danger glass-card d-flex align-items-center gap-2 mb-4" role="alert">
              <AlertCircle size={18} />
              <div className="small">{error}</div>
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label text-muted small fw-semibold">Username</label>
              <div className="input-group">
                <span className="input-group-text glass-input border-end-0">
                  <User size={18} className="text-muted" />
                </span>
                <input
                  type="text"
                  className="form-control glass-input border-start-0 ps-0"
                  placeholder="admin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label text-muted small fw-semibold">Password</label>
              <div className="input-group">
                <span className="input-group-text glass-input border-end-0">
                  <Key size={18} className="text-muted" />
                </span>
                <input
                  type="password"
                  className="form-control glass-input border-start-0 ps-0"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-gradient btn-lg w-100 d-flex align-items-center justify-content-center gap-2"
            >
              {loading ? (
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              ) : (
                'Login to Admin'
              )}
            </button>
          </form>

          <div className="mt-4 pt-3 border-top border-secondary border-opacity-10 text-center">
            <span className="text-muted small">Default Credentials: <strong>admin</strong> / <strong>admin123</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
