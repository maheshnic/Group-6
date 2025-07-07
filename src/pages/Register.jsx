import React, { useState, useEffect } from 'react';

const Register = ({ navigate, onLoginSuccess }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('Candidate');
  const [accessId, setAccessId] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isTripuraResident, setIsTripuraResident] = useState('');
  const [prtcNumber, setPrtcNumber] = useState('');
  const [prtcDistrict, setPrtcDistrict] = useState('');
  const [prtcDate, setPrtcDate] = useState('');
  const [prtcFile, setPrtcFile] = useState(null);
  const [title, setTitle] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [dob, setDob] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [category, setCategory] = useState('');
  const [username, setUsername] = useState('');

 const [timer, setTimer] = useState(45);

useEffect(() => {
  generateCaptcha();
  const regenInterval = setInterval(() => {
    generateCaptcha();
    setTimer(45);
  }, 45000);

  const countdown = setInterval(() => {
    setTimer((prev) => (prev > 0 ? prev - 1 : 0));
  }, 1000);

  return () => {
    clearInterval(regenInterval);
    clearInterval(countdown);
  };
}, []);

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');





    if (!firstName || !lastName || !gender || !age || !email || !mobile || !password || !confirmPassword) {
      setError('Please fill in all mandatory fields.');
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setError('Please enter a valid 10-digit mobile number.');
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

    if (userCaptcha !== captcha) {
      setError('Captcha does not match. Please try again.');
      return;
    }


    




    if (role === 'Candidate') {
      if (!username || !dob || !aadhaar || !category || !title) {
        setError('Please fill in all Candidate-specific mandatory fields.');
        return;
      }
      if (!/^\d{12}$/.test(aadhaar)) {
        setError('Aadhaar number must be a valid 12-digit number.');
        return;
      }
      if (isTripuraResident === 'Yes') {
        if (!prtcNumber || !prtcDistrict || !prtcDate || !prtcFile) {
          setError('Please complete all PRTC details.');
          return;
        }
      }
    }

    console.log({
      firstName, lastName, gender, age, email, mobile, role, accessId,
      username, dob, aadhaar, category, title, isTripuraResident,
      prtcNumber, prtcDistrict, prtcDate, prtcFile
    });

    
    




    if (role === 'Admin') {
      onLoginSuccess({ role: 'Admin', name: `${firstName} ${lastName}`, email });
    } else {
      setMessage('Registration successful! You can now proceed to login.');
    }

    setFirstName('');
    setLastName('');
    setGender('');
    setAge('');
    setEmail('');
    setMobile('');
    setPassword('');
    setConfirmPassword('');
    setAccessId('');
    setUserCaptcha('');
    setUsername('');
    setDob('');
    setAadhaar('');
    setCategory('');
    setTitle('');
    setFatherName('');
    setMotherName('');
    setIsTripuraResident('');
    setPrtcNumber('');
    setPrtcDistrict('');
    setPrtcDate('');
    setPrtcFile(null);
    setRole('Candidate');
    generateCaptcha();
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white px-4 md:px-8 py-8 rounded-lg shadow-xl">
  <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">New User Registration</h3>

      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
      {message && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">{message}</div>}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">First Name</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your First Name here"
            className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your Last Name here"
            className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" required>
            <option value="">Select</option>
            <option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Age</label>
          <input type="number" min="18" max="100" value={age} onChange={(e) => setAge(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Mobile Number</label>
          <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)}
           placeholder="Enter your 10-digit mobile number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your valid email-id here"
            className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password here"
            className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Enter the same password here"
            className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-2">Register As</label>
          <select value={role} onChange={(e) => { setRole(e.target.value); setAccessId(''); }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" required>
            <option value="Candidate">Candidate</option>
            <option value="Admin">Admin</option>
            <option value="Department">Department</option>
          </select>
        </div>

        {(role === 'Admin' || role === 'Department') && (
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">{role} ID <span className="text-red-500">*</span></label>
            <input type="text" value={accessId} onChange={(e) => setAccessId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
          </div>
        )}

        {role === 'Candidate' && (
          <>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter a valid Username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Title</label>
              <select value={title} onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" required>
                <option value="">Select</option><option>Mr</option><option>Ms</option><option>Mrs</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Date of Birth</label>
              <input type="date" value={dob} onChange={(e) => setDob(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Aadhaar Number</label>
              <input type="password" value={aadhaar} onChange={(e) => setAadhaar(e.target.value)}
              placeholder="Enter your 12-digit valid Adhaar number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" required>
                <option value="">Select</option><option>General</option><option>SC</option><option>ST</option><option>OBC</option><option>EWS</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Are you Permanent Resident of Tripura?</label>
              <select value={isTripuraResident} onChange={(e) => setIsTripuraResident(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" required>
                <option value="">--Please Select--</option>
                <option value="Yes">Yes</option><option value="No">No</option>
              </select>
            </div>

            {isTripuraResident === 'Yes' && (
              <>
                <div className="md:col-span-2 text-gray-700 font-semibold">Tripura Residence Detail (You selected Yes)</div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">PRTC Number</label>
                  <input type="text" value={prtcNumber} onChange={(e) => setPrtcNumber(e.target.value)}
                   placeholder="Enter your PRTC number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">PRTC Issuing District</label>
                  <select value={prtcDistrict} onChange={(e) => setPrtcDistrict(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white">
                    <option value="">--Select--</option>
                    <option>West Tripura</option>
                    <option>Dhalai</option>
                    <option>North Tripura</option>
                    <option>South Tripura</option>
                    <option>Khowai</option>
                    <option>Sepahijala</option>
                    <option>Unakoti</option>
                    <option>Gomati</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">PRTC Issue Date</label>
                  <input type="date" max={new Date().toISOString().split('T')[0]} value={prtcDate} onChange={(e) => setPrtcDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">PRTC Certificate Document</label>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => setPrtcFile(e.target.files[0])}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
              </>
            )}
          </>
        )}

        <div className="md:col-span-2">
  <label className="block text-gray-700 font-semibold mb-2">Captcha</label>
  <div className="flex items-center gap-4">
    <span className="bg-gray-200 px-4 py-2 font-mono tracking-widest rounded-md text-lg">
      {captcha}
    </span>
    <span className="text-sm text-gray-500">Refreshing in {timer}s</span>
  </div>
  <input
    type="text"
    value={userCaptcha}
    onChange={(e) => setUserCaptcha(e.target.value)}
    className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md"
    placeholder="Enter Captcha"
    required
  />
</div>

        <div className="md:col-span-2 mt-4">
          <button type="submit"
            className="w-full bg-green-600 text-white font-bold py-3 rounded-md hover:bg-green-700 transition-colors duration-200">
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
