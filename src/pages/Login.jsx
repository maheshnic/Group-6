
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
  const [loginMethod, setLoginMethod] = useState('Email');
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [timer, setTimer] = useState(45);

  useEffect(() => {
    const captchaInterval = setInterval(() => {
      setCaptcha(generateCaptcha());
      setTimer(45);
    }, 45000);
    return () => clearInterval(captchaInterval);
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;

    if (!emailOrMobile || !password || !userCaptcha) {
      setError('Please fill in all fields including captcha.');
      return;
    }

    if (loginMethod === 'Email' && !emailRegex.test(emailOrMobile)) {
      setError('Please enter a valid email address in the form of username@domain.tld');
      return;
    }

    if (loginMethod === 'Mobile' && !mobileRegex.test(emailOrMobile)) {
      setError('Please enter a valid 10-digit mobile number starting with 6-9.');
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
          <label className="block text-gray-700 font-semibold mb-1">Login Using</label>
          <select
            value={loginMethod}
            onChange={(e) => setLoginMethod(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option value="Email">Email</option>
            <option value="Mobile">Mobile Number</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="identifier" className="block text-gray-700 font-semibold mb-1">
            {loginMethod === 'Email' ? 'Email ID' : 'Mobile Number'}
          </label>
          <input
            type="text"
            id="identifier"
            placeholder={loginMethod === 'Email' ? 'Enter your registered email' : 'Enter your 10-digit mobile number'}
            value={emailOrMobile}
            onChange={(e) => setEmailOrMobile(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute top-2 right-2 text-sm text-blue-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Captcha</label>
          <div className="flex items-center space-x-3 mb-2">
            <div className="px-4 py-2 text-lg font-bold bg-gray-200 rounded-md select-none tracking-widest">{captcha}</div>
            <span className="text-sm text-gray-500">Refreshing in {timer}s</span>
          </div>
          <input
            type="text"
            placeholder="Enter captcha text"
            value={userCaptcha}
            onChange={(e) => setUserCaptcha(e.target.value)}
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

        <div className="mt-2 text-center">
  <button
    className="text-sm text-blue-600 hover:underline"
    onClick={() => navigate('forgot-password')}
  >
    Forgot Password?
  </button>
</div>
      </form>

      <div className="mt-4 text-center text-gray-600">
        <p>Don't have an account? <button onClick={() => navigate('register')} className="text-blue-600 hover:underline">Register here</button></p>
      </div>
    </div>
      
    
  );
};

export default Login;
