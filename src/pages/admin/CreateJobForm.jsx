import React, {useState} from "react";
import {
  LayoutDashboard,
  Building2,
  Users,
  FileText,
  Briefcase,
  Bell,
  Settings,
  LogOut,
  PlusCircle,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  Download,
  Mail,
  ExternalLink,
} from "lucide-react";



// CreateJobForm Component
const CreateJobForm = ({ onAddJob, departments, onCancel }) => {
  const [title, setTitle] = useState("");
  const [vacancies, setVacancies] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleAddJobSubmit = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!title || !vacancies || !qualifications || !departmentId) {
      setError("Please fill in all fields.");
      return;
    }

    const selectedDept = departments.find((dept) => dept.id === departmentId);
    if (!selectedDept) {
      setError("Invalid department selected.");
      return;
    }

    const newJob = {
      id: `job${Date.now()}`,
      title,
      vacancies: parseInt(vacancies, 10),
      qualifications,
      departmentId,
      departmentName: selectedDept.name,
    };

    onAddJob(newJob);
    setMessage("Job added successfully!");

    setTitle("");
    setVacancies("");
    setQualifications("");
    setDepartmentId("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Create New Job Posting
      </h3>
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
      <form onSubmit={handleAddJobSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="jobTitle"
            className="block text-gray-700 font-semibold mb-2"
          >
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="vacancies"
            className="block text-gray-700 font-semibold mb-2"
          >
            Vacancies
          </label>
          <input
            type="number"
            id="vacancies"
            value={vacancies}
            onChange={(e) => setVacancies(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
            required
          />
        </div>
        <div>
          <label
            htmlFor="qualifications"
            className="block text-gray-700 font-semibold mb-2"
          >
            Qualifications
          </label>
          <textarea
            id="qualifications"
            value={qualifications}
            onChange={(e) => setQualifications(e.target.value)}
            rows="4"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="department"
            className="block text-gray-700 font-semibold mb-2"
          >
            Department
          </label>
          <select
            id="department"
            value={departmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex space-x-2">
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Add Job
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateJobForm;