import React, { useState, useEffect } from 'react';

const generateCaptcha = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; 
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const Login = ({ navigate, onLoginSuccess }) => {
  const [loginType, setLoginType] = useState('Candidate');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setCaptcha(generateCaptcha()); 
  }, [loginType]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!email || !password || !userCaptcha) {
      setError('Please fill in all fields including captcha.');
      return;
    }

    if (userCaptcha.toUpperCase() !== captcha) {
      setError('Captcha does not match. Please try again.');
      setCaptcha(generateCaptcha()); 
      setUserCaptcha('');
      return;
    }

    if (loginType === 'Admin') {
      console.log("Attempting Admin login...");
      onLoginSuccess({ role: 'Admin', name: 'Admin User' });
    } else if (loginType === 'Candidate') {
      console.log("Attempting Candidate login...");
      setMessage("Candidate login successful! (Dashboard not implemented yet).");
    } else if (loginType === 'Department') {
      console.log("Attempting Department login...");
      setMessage("Department login successful! (Dashboard not implemented yet).");
    } else {
      setError("Invalid login type selected.");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Login Dashboard</h3>
      
      <div className="flex border-b mb-6">
        {['Candidate', 'Admin', 'Department'].map(type => (
          <button
            key={type}
            onClick={() => setLoginType(type)}
            className={`flex-1 py-2 font-semibold text-center ${loginType === type ? 'border-b-4 border-blue-600 text-blue-600' : 'text-gray-500'}`}
          >
            {type} Login
          </button>
        ))}
      </div>

      <form onSubmit={handleLogin}>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        {message && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {message}
          </div>
        )}

        <h4 className="text-xl font-semibold text-gray-700 mb-4 text-center">Login as a {loginType}</h4>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email ID</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-label="Email ID"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-label="Password"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Captcha</label>
          <div className="flex items-center space-x-3">
            <div className="px-4 py-2 text-lg font-bold bg-gray-200 rounded-md select-none tracking-widest">{captcha}</div>
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
              onClick={() => setCaptcha(generateCaptcha())}
            >
              Refresh
            </button>
          </div>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter Captcha"
            value={userCaptcha}
            onChange={e => setUserCaptcha(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Login as {loginType}
        </button>
      </form>

      <div className="mt-4 text-center text-gray-600">
        <p>Don't have an account? <button onClick={() => navigate('register')} className="text-blue-600 hover:underline">Register here</button></p>
      </div>
    </div>
  );
};

export default Login;
