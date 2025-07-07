// src/components/ForgotPassword.jsx
import React, { useState } from 'react';

const ForgotPassword = ({ navigate }) => {
  const [role, setRole] = useState('');
  const [method, setMethod] = useState('Email');
  const [identifier, setIdentifier] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const simulateOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    alert(`Simulated OTP (for testing): ${otp}`);
    setOtpSent(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[6-9]\d{9}$/;

  if (!role || !identifier) {
    setError('Please select role and enter registered email or mobile.');
    return;
  }

  if (method === 'Email' && !emailRegex.test(identifier)) {
    setError('Please enter a valid email address.');
    return;
  }

  if (method === 'Mobile' && !mobileRegex.test(identifier)) {
    setError('Please enter a valid 10-digit mobile number starting with 6-9.');
    return;
  }

    simulateOtp();
  };

  const handleVerify = (e) => {
    e.preventDefault();

    if (enteredOtp !== generatedOtp) {
      setError('Invalid OTP. Please try again.');
      return;
    }

    if (!newPassword || newPassword !== confirmPassword) {
      setError('Passwords do not match or are empty.');
      return;
    }

   
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map((user) => {
      if (
        user.role === role &&
        (user.email === identifier || user.mobile === identifier)
      ) {
        return { ...user, password: newPassword };
      }
      return user;
    });

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setMessage('Password updated successfully. Redirecting to login...');
    setTimeout(() => navigate('login'), 2000);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Forgot Password</h3>

      {!otpSent ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-600">{error}</p>}
          <div>
            <label className="block font-semibold">Select Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full border px-3 py-2 rounded-md">
              <option value="">-- Choose Role --</option>
              <option>Candidate</option>
              <option>Admin</option>
              <option>Department</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold">Login Using</label>
            <select value={method} onChange={(e) => setMethod(e.target.value)} className="w-full border px-3 py-2 rounded-md">
              <option>Email</option>
              <option>Mobile</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold">{method === 'Email' ? 'Registered Email' : 'Registered Mobile'}</label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full border px-3 py-2 rounded-md"
              placeholder={`Enter your ${method.toLowerCase()}`}
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700">
            Send OTP
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerify} className="space-y-4">
          {error && <p className="text-red-600">{error}</p>}
          {message && <p className="text-green-600">{message}</p>}

          <div>
            <label className="block font-semibold">Enter OTP</label>
            <input
              type="text"
              value={enteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
              className="w-full border px-3 py-2 rounded-md"
              placeholder={"Enter OTP here"}
            />
          </div>

          <div>
            <label className="block font-semibold">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded-md"
              placeholder={"Enter your new password"}
            />
          </div>

          <div>
            <label className="block font-semibold">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded-md"
              placeholder={"Confirm password here"}
            />
          </div>

          <button type="submit" className="w-full bg-green-600 text-white font-bold py-2 rounded-md hover:bg-green-700">
            Reset Password
          </button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
