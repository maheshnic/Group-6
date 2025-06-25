import React, { useState } from 'react';

const Register = ({ navigate, onLoginSuccess }) => { 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('Candidate');
  const [accessId, setAccessId] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage(''); 

    
    if (!firstName || !lastName || !gender || !age || !email || !password || !confirmPassword) {
      setError('Please fill in all mandatory fields.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password and Confirm Password do not match.');
      return;
    }

    if ((role === 'Admin' || role === 'Department') && !accessId) {
      setError(`Please enter the mandatory ${role} ID.`);
      return;
    }

    
    console.log({
      firstName,
      lastName,
      gender,
      age,
      email,
      role,
      accessId: role === 'Candidate' ? 'N/A' : accessId
    });

    
    if (role === 'Admin') {
      
      onLoginSuccess({ role: 'Admin', name: `${firstName} ${lastName}`, email: email });
      
      setFirstName('');
      setLastName('');
      setGender('');
      setAge('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setAccessId('');
      setRole('Candidate');
    } else {
      
      setMessage('Registration successful! You can now proceed to login.');
    
      setFirstName('');
      setLastName('');
      setGender('');
      setAge('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setAccessId('');
      setRole('Candidate');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">New User Registration</h3>

      {}
      {error && (
        <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      {message && (
        <div className="bg-green-100 border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {}
        <div>
          <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-label="First Name"
          />
        </div>

        {}
        <div>
          <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-label="Last Name"
          />
        </div>

        {}
        <div>
          <label htmlFor="gender" className="block text-gray-700 font-semibold mb-2">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-label="Gender"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {}
        <div>
          <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="18"
            max="120"
            required
            aria-label="Age"
          />
        </div>

        {}
        <div className="md:col-span-2">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email ID</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-label="Email ID"
          />
        </div>

        {}
        <div>
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            minLength="8"
            aria-label="Password"
          />
        </div>

        {}
        <div>
          <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-label="Confirm Password"
          />
        </div>

        {}
        <div className="md:col-span-2">
          <label htmlFor="role" className="block text-gray-700 font-semibold mb-2">Register As</label>
          <select
            id="role"
            value={role}
            onChange={(e) => { setRole(e.target.value); setAccessId(''); }} 
            className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Register As Role"
          >
            <option value="Candidate">Candidate</option>
            <option value="Admin">Admin</option>
            <option value="Department">Department</option>
          </select>
        </div>

        {}
        {(role === 'Admin' || role === 'Department') && (
          <div className="md:col-span-2">
            <label htmlFor="accessId" className="block text-gray-700 font-semibold mb-2">
              {role} ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="accessId"
              value={accessId}
              onChange={(e) => setAccessId(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Enter valid ${role} ID`}
              required
              aria-label={`${role} ID`}
            />
          </div>
        )}

        {}
        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-3 rounded-md hover:bg-green-700 transition-colors duration-200"
          >
            Register
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-gray-600">
        <p>Already have an account? <button onClick={() => navigate('login')} className="text-blue-600 hover:underline">Login here</button></p>
      </div>
    </div>
  );
};

export default Register;
