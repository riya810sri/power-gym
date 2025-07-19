import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import { authHandler } from '../handlers';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Admin login shortcut (bypass API)
      if (email === 'admin@Durbhasi Gurukulam.com' && password === 'admin123') {
        localStorage.setItem('isAdmin', 'true');
        localStorage.setItem('token', 'admin-token');
        window.location.href = 'http://localhost:5173/admin';
        return;
      }

      // Normal login via API
      const response = await authHandler.login({ email, password });

      const isAdmin = response.role === 'admin';
      localStorage.setItem('token', response.token || 'user-token');
      localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');

      if (isAdmin) {
        window.location.href = 'http://localhost:5173/admin';
      } else {
        // Redirect regular users to home page instead of dashboard
        navigate('/');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err?.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="max-w-md w-full bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-700">
        <h2 className="text-2xl font-semibold text-white mb-2">Log in</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-white text-sm mb-1">Email address</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-black border border-zinc-700 rounded-md text-white"
              required
              disabled={loading}
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-2 bg-black border border-zinc-700 rounded-md text-white"
              required
              disabled={loading}
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md"
          >
            {loading ? 'Logging in...' : (
              <>
                <FaEnvelope />
                Log in with Email
              </>
            )}
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-white underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
