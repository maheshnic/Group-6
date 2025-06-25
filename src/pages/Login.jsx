import React, { useState } from 'react';


const Login = ({ navigate, onLoginSuccess }) => {
  const [loginType, setLoginType] = useState('Candidate');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); 
    setMessage(''); 

    if (!email || !password) {
      setError('Please fill in all fields.');
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
        {}
        {error && (
          <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        {}
        {message && (
          <div className="bg-green-100 border-green-400 text-green-700 px-4 py-3 rounded mb-4">
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
        <div className="mb-6">
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
