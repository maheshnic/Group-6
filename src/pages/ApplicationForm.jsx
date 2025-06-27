
import React, { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    qualifications: '',
    resume: null
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) tempErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) tempErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) tempErrors.phone = 'Phone number is required';
    if (!formData.qualifications.trim()) tempErrors.qualifications = 'Qualifications are required';
    if (!formData.resume) tempErrors.resume = 'Resume is required';
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted', formData);
      setSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Job Application Form</h1>
      {submitted ? (
        <div className="text-green-600 font-semibold">Application submitted successfully!</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="w-full border rounded px-3 py-2"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded px-3 py-2"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="w-full border rounded px-3 py-2"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <label className="block font-semibold">Qualifications</label>
            <textarea
              name="qualifications"
              className="w-full border rounded px-3 py-2"
              value={formData.qualifications}
              onChange={handleChange}
            ></textarea>
            {errors.qualifications && <p className="text-red-600 text-sm">{errors.qualifications}</p>}
          </div>

          <div>
            <label className="block font-semibold">Upload Resume (PDF, DOC)</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="mt-1"
            />
            {errors.resume && <p className="text-red-600 text-sm">{errors.resume}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
};

export default ApplicationForm;
