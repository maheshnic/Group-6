import React, { useState, useRef, useEffect } from "react";

const qualificationsList = [
  "10th",
  "12th",
  "Diploma",
  "Graduation",
  "Post Graduation",
  "PhD",
];
const experienceLevels = [
  "Fresher",
  "0-1 Years",
  "1-3 Years",
  "3-5 Years",
  "5+ Years",
];
const jobRoles = [
  "Data Entry",
  "Software Developer",
  "Business Analyst",
  "Designer",
  "Other",
];
const workLocations = [
  "Kolkata",
  "Agartala",
  "Mumbai",
  "Delhi",
  "Pune",
  "Ahmedabad",
  "Chennai",
  "Bangaluru",
  "Hyderabad",
  "Uttar Pradesh",
];

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    highestQualification: "Graduation",
    stream: "Computer Science",
    skills: "",
    experienceLevel: "1-3 Years",
    yearsOfExperience: "1",
    preferredJobRole: "Data Entry",
    preferredWorkLocation: [],
    resume: null,
    coverLetter: null,
    certifications: null,
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file && file.size > 2 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          [name]: "File size must be less than 2MB",
        }));
        return;
      }
      if (file && !file.name.endsWith(".pdf")) {
        setErrors((prev) => ({
          ...prev,
          [name]: "Only PDF files are allowed",
        }));
        return;
      }
      setFormData((prev) => ({ ...prev, [name]: file }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const toggleLocation = (location) => {
    setFormData((prev) => {
      if (prev.preferredWorkLocation.includes(location)) {
        return {
          ...prev,
          preferredWorkLocation: prev.preferredWorkLocation.filter(
            (loc) => loc !== location
          ),
        };
      } else {
        return {
          ...prev,
          preferredWorkLocation: [...prev.preferredWorkLocation, location],
        };
      }
    });
  };

  const removeLocation = (locationToRemove) => {
    setFormData((prev) => ({
      ...prev,
      preferredWorkLocation: prev.preferredWorkLocation.filter(
        (loc) => loc !== locationToRemove
      ),
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.highestQualification)
      tempErrors.highestQualification = "Highest qualification is required";
    if (!formData.stream.trim())
      tempErrors.stream = "Stream/Specialization is required";
    if (!formData.experienceLevel)
      tempErrors.experienceLevel = "Experience level is required";
    if (!formData.preferredJobRole)
      tempErrors.preferredJobRole = "Preferred job role is required";
    if (!formData.resume) tempErrors.resume = "Resume is required";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted", formData);
      setSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">
        Job Application Form
      </h1>
      {submitted ? (
        <div className="text-green-600 font-semibold">
          Application submitted successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Qualification Info Section */}
          <div className="border-b pb-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Qualification Info
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Highest qualification
                </label>
                <div className="relative">
                  <select
                    name="highestQualification"
                    value={formData.highestQualification}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 bg-gray-50 appearance-none"
                  >
                    {qualificationsList.map((q, i) => (
                      <option key={i} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {errors.highestQualification && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.highestQualification}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Stream/Specialization
                </label>
                <input
                  name="stream"
                  value={formData.stream}
                  onChange={handleChange}
                  placeholder="Computer Science"
                  className="w-full border rounded px-3 py-2 bg-gray-50"
                />
                {errors.stream && (
                  <p className="text-red-600 text-sm mt-1">{errors.stream}</p>
                )}
              </div>
            </div>
          </div>

          {/* Skills & Experience Section */}
          <div className="border-b pb-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Skills & Experience
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Skills
                </label>
                <input
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="Ms word, excel etc"
                  className="w-full border rounded px-3 py-2 bg-gray-50"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Add as comma separated tags
                </p>
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Experience Level
                </label>
                <div className="relative">
                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 bg-gray-50 appearance-none"
                  >
                    {experienceLevels.map((level, i) => (
                      <option key={i} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {errors.experienceLevel && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.experienceLevel}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-medium text-gray-700 mb-1">
                Years of Experience
              </label>
              <input
                type="number"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                placeholder="1"
                min="1"
                max="99"
                className="w-full border rounded px-3 py-2 bg-gray-50 max-w-xs"
              />
            </div>
          </div>

          {/* Job Preference Section */}
          <div className="border-b pb-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Job Preference
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Preferred Job Role
                </label>
                <div className="relative">
                  <select
                    name="preferredJobRole"
                    value={formData.preferredJobRole}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 bg-gray-50 appearance-none"
                  >
                    {jobRoles.map((role, i) => (
                      <option key={i} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {errors.preferredJobRole && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.preferredJobRole}
                  </p>
                )}
              </div>

              <div className="relative" ref={dropdownRef}>
                <label className="block font-medium text-gray-700 mb-1">
                  Preferred Work Location
                </label>
                <div
                  className="w-full border rounded px-3 py-2 bg-gray-50 min-h-[42px] flex flex-wrap gap-2 items-center cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {formData.preferredWorkLocation.length > 0 ? (
                    formData.preferredWorkLocation.map((location) => (
                      <div
                        key={location}
                        className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                      >
                        {location}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeLocation(location);
                          }}
                          className="ml-1 text-blue-600 hover:text-blue-800"
                        >
                          ×
                        </button>
                      </div>
                    ))
                  ) : (
                    <span className="text-gray-400">Select locations...</span>
                  )}
                  <svg
                    className={`w-5 h-5 ml-auto text-gray-500 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {dropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg max-h-60 overflow-auto">
                    {workLocations.map((location) => (
                      <div
                        key={location}
                        className={`px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center ${
                          formData.preferredWorkLocation.includes(location)
                            ? "bg-blue-100"
                            : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLocation(location);
                        }}
                      >
                        {location}
                        {formData.preferredWorkLocation.includes(location) && (
                          <svg
                            className="w-4 h-4 ml-auto text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Documents
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Upload Resume (PDF only, max size 2MB)
                </label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
                {errors.resume && (
                  <p className="text-red-600 text-sm mt-1">{errors.resume}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Upload Cover Letter (PDF only, max size 2MB, optional)
                </label>
                <input
                  type="file"
                  name="coverLetter"
                  accept=".pdf"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Upload Certification (PDF only, max size 2MB, optional)
                </label>
                <input
                  type="file"
                  name="certifications"
                  accept=".pdf"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Application
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ApplicationForm;