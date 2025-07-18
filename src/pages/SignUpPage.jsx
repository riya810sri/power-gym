import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { authHandler } from '../handlers';

export default function SignUpPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      console.log('Function handleSignUp executing with:', { name, email, password });
      await authHandler.register({ username: name, email, password });
      navigate('/login');
    } catch (err) {
      setError(err?.response?.data?.message || 'Sign up failed');
      console.log('Sign up error:', err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label className="block mb-1 text-sm">Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" required />
          </div>
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" required />
          </div>
          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" required />
          </div>
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Already have an account? 
          <Link to="/login" className="text-purple-400 hover:underline ml-1">Login</Link>
        </p>
      </div>
    </div>
  );
}
