import React, { useState } from 'react';

import { LayoutDashboard, Building2, Users, FileText, Briefcase, Bell, Settings, LogOut, PlusCircle, CheckCircle, XCircle } from 'lucide-react';

const initialJobApplications = [
  { id: 'app1', jobId: 'job1', jobTitle: 'Software Engineer', candidateName: 'Alice Johnson', candidateEmail: 'alice@example.com', status: 'Pending' },
  { id: 'app2', jobId: 'job2', jobTitle: 'Project Manager', candidateName: 'Bob Williams', candidateEmail: 'bob@example.com', status: 'Approved' },
  { id: 'app3', jobId: 'job1', jobTitle: 'Software Engineer', candidateName: 'Charlie Brown', candidateEmail: 'charlie@example.com', status: 'Pending' },
  { id: 'app4', jobId: 'job3', jobTitle: 'Data Analyst', candidateName: 'Diana Prince', candidateEmail: 'diana@example.com', status: 'Rejected' },
  { id: 'app5', jobId: 'job2', jobTitle: 'Project Manager', candidateName: 'Eve Adams', candidateEmail: 'eve@example.com', status: 'Pending' },
];

const initialDepartments = [
  { id: 'dept1', name: 'Engineering', description: 'Manages software development and infrastructure.', permissions: { canPostJobs: true, canApproveReject: false } },
  { id: 'dept2', name: 'Human Resources', description: 'Handles recruitment, employee relations, and benefits.', permissions: { canPostJobs: true, canApproveReject: true } },
  { id: 'dept3', name: 'Finance', description: 'Oversees financial operations and budgeting.', permissions: { canPostJobs: false, canApproveReject: false } },
  { id: 'dept4', name: 'Marketing', description: 'Responsible for brand promotion and campaigns.', permissions: { canPostJobs: true, canApproveReject: false } },
];

const initialCandidates = [
  {
    id: 'cand1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    contact: '123-456-7890',
    resumeUrl: 'https://placehold.co/100x100/EBF4FF/333333?text=Resume',
    appliedJobs: [
      { jobId: 'job1', jobTitle: 'Software Engineer', status: 'Pending', applicationId: 'app1' },
      { jobId: 'job3', jobTitle: 'Data Analyst', status: 'Approved', applicationId: 'app_cand1_job3' }, 
    ],
  },
  {
    id: 'cand2',
    name: 'Bob Williams',
    email: 'bob@example.com',
    contact: '098-765-4321',
    resumeUrl: 'https://placehold.co/100x100/EBF4FF/333333?text=Resume',
    appliedJobs: [
      { jobId: 'job2', jobTitle: 'Project Manager', status: 'Approved', applicationId: 'app2' },
    ],
  },
  {
    id: 'cand3',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    contact: '555-123-4567',
    resumeUrl: 'https://placehold.co/100x100/EBF4FF/333333?text=Resume',
    appliedJobs: [
      { jobId: 'job1', jobTitle: 'Software Engineer', status: 'Pending', applicationId: 'app3' },
    ],
  },
];

const initialJobs = [
  { id: 'job1', title: 'Software Engineer', vacancies: 5, qualifications: 'B.Tech/BE in CS, 2+ years experience in React and Node.js', departmentId: 'dept1', departmentName: 'Engineering' },
  { id: 'job2', title: 'Project Manager', vacancies: 2, qualifications: 'MBA or PMP, 5+ years project management experience', departmentId: 'dept1', departmentName: 'Engineering' },
  { id: 'job3', title: 'Data Analyst', vacancies: 3, qualifications: 'Bachelor\'s in Statistics/Math, proficiency in Python/R and SQL', departmentId: 'dept3', departmentName: 'Finance' },
];


const initialLogs = [
  { id: 'log1', timestamp: new Date().toLocaleString(), type: 'System Event', action: 'Application started', user: 'System', details: 'Admin panel initialized.' },
  { id: 'log2', timestamp: new Date(Date.now() - 3600000).toLocaleString(), type: 'Security', action: 'Admin Login Attempt', user: 'admin@example.com', details: 'Successful login by Admin User.' },
  { id: 'log3', timestamp: new Date(Date.now() - 7200000).toLocaleString(), type: 'User Action', action: 'Candidate Registered', user: 'new_candidate@example.com', details: 'New candidate account created.' },
  { id: 'log4', timestamp: new Date(Date.now() - 10800000).toLocaleString(), type: 'User Action', action: 'Job Application Approved', user: 'Admin User', details: 'Application app2 for Bob Williams approved.' },
];



const DashboardContent = ({ applications, onUpdateApplicationStatus }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Current Job Applications</h3>
      {applications.length === 0 ? (
        <p className="text-gray-600">No new job applications at the moment.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Job Title</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Candidate Name</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Candidate Email</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-800">{app.jobTitle}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{app.candidateName}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{app.candidateEmail}</td>
                  <td className="py-3 px-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${app.status === 'Approved' ? 'bg-green-100 text-green-800' :
                        app.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'}`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm flex space-x-2">
                    {app.status === 'Pending' && (
                      <>
                        <button
                          onClick={() => onUpdateApplicationStatus(app.id, 'Approved')}
                          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors duration-200 text-xs"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => onUpdateApplicationStatus(app.id, 'Rejected')}
                          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-200 text-xs"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {app.status !== 'Pending' && (
                       <span className="text-gray-500 text-xs italic">Actioned</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};


const DepartmentList = ({ departments }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Departments</h3>
      {departments.length === 0 ? (
        <p className="text-gray-600">No departments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Department Name</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Description</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Can Post Jobs</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Can Approve/Reject</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept) => (
                <tr key={dept.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-800 font-medium">{dept.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{dept.description}</td>
                  <td className="py-3 px-4 text-sm text-center">
                    {dept.permissions.canPostJobs ? <CheckCircle className="text-green-500 mx-auto" size={20} /> : <XCircle className="text-red-500 mx-auto" size={20} />}
                  </td>
                  <td className="py-3 px-4 text-sm text-center">
                    {dept.permissions.canApproveReject ? <CheckCircle className="text-green-500 mx-auto" size={20} /> : <XCircle className="text-red-500 mx-auto" size={20} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};


const CandidateList = ({ candidates }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Registered Candidates</h3>
      {candidates.length === 0 ? (
        <p className="text-gray-600">No candidates registered yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Candidate Name</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Email</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Contact</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Applied Jobs</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Profile/Resume</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-800 font-medium">{candidate.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{candidate.email}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{candidate.contact}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {candidate.appliedJobs.length === 0 ? (
                      <span className="italic text-gray-500">No applications yet.</span>
                    ) : (
                      <ul className="list-disc pl-5">
                        {candidate.appliedJobs.map((job, index) => (
                          <li key={index} className="mb-1">
                            {job.jobTitle} (<span className={`font-semibold
                              ${job.status === 'Approved' ? 'text-green-600' :
                                job.status === 'Rejected' ? 'text-red-600' :
                                'text-yellow-600'}`}
                            >
                              {job.status}
                            </span>)
                          </li>
                        ))}
                      </ul>
                    )}
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <a href={candidate.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      View Profile
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const JobListContent = ({ jobs }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Job Postings</h3>
      {jobs.length === 0 ? (
        <p className="text-gray-600">No job postings available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Job Title</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Department</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Vacancies</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Qualifications</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-800 font-medium">{job.title}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{job.departmentName}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{job.vacancies}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{job.qualifications}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const CreateJobForm = ({ onAddJob, departments, onCancel }) => {
  const [title, setTitle] = useState('');
  const [vacancies, setVacancies] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleAddJobSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!title || !vacancies || !qualifications || !departmentId) {
      setError('Please fill in all fields.');
      return;
    }

    const selectedDept = departments.find(dept => dept.id === departmentId);
    if (!selectedDept) {
        setError('Invalid department selected.');
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
    setMessage('Job added successfully!');
    
    setTitle('');
    setVacancies('');
    setQualifications('');
    setDepartmentId('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Create New Job Posting</h3>
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
          <label htmlFor="jobTitle" className="block text-gray-700 font-semibold mb-2">Job Title</label>
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
          <label htmlFor="vacancies" className="block text-gray-700 font-semibold mb-2">Vacancies</label>
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
          <label htmlFor="qualifications" className="block text-gray-700 font-semibold mb-2">Qualifications</label>
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
          <label htmlFor="department" className="block text-gray-700 font-semibold mb-2">Department</label>
          <select
            id="department"
            value={departmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Department</option>
            {departments.map(dept => (
              <option key={dept.id} value={dept.id}>{dept.name}</option>
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


const LogsContent = ({ logs, onAddLog }) => {
  const [logType, setLogType] = useState('');
  const [logAction, setLogAction] = useState('');
  const [logUser, setLogUser] = useState('');
  const [logDetails, setLogDetails] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSimulateLog = () => {
    setErrorMessage('');
    setSuccessMessage('');
    if (!logType || !logAction || !logUser || !logDetails) {
      setErrorMessage("Please fill all fields to simulate a log entry.");
      return;
    }
    onAddLog(logType, logAction, logUser, logDetails);
    setSuccessMessage('Log entry simulated successfully!');
    setLogType('');
    setLogAction('');
    setLogUser('');
    setLogDetails('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">System Logs & Audit Trail</h3>

      <div className="mb-6 border p-4 rounded-md bg-gray-50">
        <h4 className="text-xl font-semibold mb-3">Simulate New Log Entry (For Demo)</h4>
        {errorMessage && (
          <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="bg-green-100 border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {successMessage}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="logType" className="block text-gray-700 text-sm font-semibold mb-1">Type</label>
            <select
              id="logType"
              value={logType}
              onChange={(e) => setLogType(e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Type</option>
              <option value="User Action">User Action</option>
              <option value="System Event">System Event</option>
              <option value="Security">Security</option>
            </select>
          </div>
          <div>
            <label htmlFor="logAction" className="block text-gray-700 text-sm font-semibold mb-1">Action</label>
            <input
              type="text"
              id="logAction"
              value={logAction}
              onChange={(e) => setLogAction(e.target.value)}
              placeholder="e.g., Login Success, Data Update"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="logUser" className="block text-gray-700 text-sm font-semibold mb-1">User/Source</label>
            <input
              type="text"
              id="logUser"
              value={logUser}
              onChange={(e) => setLogUser(e.target.value)}
              placeholder="e.g., admin@example.com, System"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="logDetails" className="block text-gray-700 text-sm font-semibold mb-1">Details</label>
            <textarea
              id="logDetails"
              value={logDetails}
              onChange={(e) => setLogDetails(e.target.value)}
              rows="2"
              placeholder="Detailed description of the event"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>
        <button
          onClick={handleSimulateLog}
          className="mt-4 bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200"
        >
          Add Simulated Log
        </button>
      </div>

      {logs.length === 0 ? (
        <p className="text-gray-600">No log entries to display.</p>
      ) : (
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Timestamp</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Type</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Action</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">User/Source</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Details</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-800">{log.timestamp}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{log.type}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{log.action}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{log.user}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{log.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};


const NotificationsContent = ({ notifications, onAddNotification }) => {
  const [notifType, setNotifType] = useState('');
  const [notifMessage, setNotifMessage] = useState('');
  const [notifDeadline, setNotifDeadline] = useState(''); 
  const [notifReleaseDate, setNotifReleaseDate] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePostNotification = () => {
    setErrorMessage('');
    setSuccessMessage('');
    if (!notifType || !notifMessage) {
      setErrorMessage("Please select a type and enter a message for the notification.");
      return;
    }

    const details = {};
    if (notifType === 'Job Alert' && notifDeadline) {
      details.deadline = notifDeadline;
    }
    if (notifType === 'Form Release' && notifReleaseDate) {
      details.releaseDate = notifReleaseDate;
    }

    onAddNotification(notifType, notifMessage, details); 
    setSuccessMessage('Notification posted successfully!');
    setNotifType('');
    setNotifMessage('');
    setNotifDeadline(''); 
    setNotifReleaseDate(''); 
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Notifications & Updates</h3>

      <div className="mb-6 border p-4 rounded-md bg-gray-50">
        <h4 className="text-xl font-semibold mb-3">Post New Notification (For Admin/Recruiters)</h4>
        {errorMessage && (
          <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="bg-green-100 border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {successMessage}
          </div>
        )}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="notifType" className="block text-gray-700 text-sm font-semibold mb-1">Notification Type</label>
            <select
              id="notifType"
              value={notifType}
              onChange={(e) => {
                setNotifType(e.target.value);
                setNotifDeadline(''); 
                setNotifReleaseDate('');
              }}
              className="w-full px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Type</option>
              <option value="Job Alert">Job Alert</option>
              <option value="Application Update">Application Update</option>
              <option value="System Message">System Message</option>
              <option value="Message from Recruiter">Message from Recruiter</option>
              <option value="Form Release">Form Release</option> {}
            </select>
          </div>
          {notifType === 'Job Alert' && (
            <div>
              <label htmlFor="notifDeadline" className="block text-gray-700 text-sm font-semibold mb-1">Submission Deadline</label>
              <input
                type="date"
                id="notifDeadline"
                value={notifDeadline}
                onChange={(e) => setNotifDeadline(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          {notifType === 'Form Release' && (
            <div>
              <label htmlFor="notifReleaseDate" className="block text-gray-700 text-sm font-semibold mb-1">Release Date</label>
              <input
                type="date"
                id="notifReleaseDate"
                value={notifReleaseDate}
                onChange={(e) => setNotifReleaseDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <div className="col-span-full"> {}
            <label htmlFor="notifMessage" className="block text-gray-700 text-sm font-semibold mb-1">Message</label>
            <textarea
              id="notifMessage"
              value={notifMessage}
              onChange={(e) => setNotifMessage(e.target.value)}
              rows="3"
              placeholder="Enter notification message"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>
        <button
          onClick={handlePostNotification}
          className="mt-4 bg-teal-600 text-white font-bold py-2 px-4 rounded-md hover:bg-teal-700 transition-colors duration-200"
        >
          Post Notification
        </button>
      </div>

      {notifications.length === 0 ? (
        <p className="text-gray-600">No notifications to display.</p>
      ) : (
        <div className="overflow-x-auto mt-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">Recent Notifications</h4>
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Timestamp</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Type</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Message</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Date/Deadline</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((notif) => (
                <tr key={notif.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-800">{notif.timestamp}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{notif.type}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{notif.message}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {notif.deadline || notif.releaseDate || 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};



const SettingsContent = ({ adminUser, onUpdateAdminProfile, onUpdateAdminPassword, departments, onUpdateDepartmentPermissions }) => {
  const [adminEmail, setAdminEmail] = useState(adminUser.email || '');
  const [adminId, setAdminId] = useState(adminUser.adminId || 'admin-001'); 
  const [profileMessage, setProfileMessage] = useState('');
  const [profileError, setProfileError] = useState('');

  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');


  
  const [tempDepartmentPermissions, setTempDepartmentPermissions] = useState(() => {
    const perms = {};
    departments.forEach(dept => {
      perms[dept.id] = { ...dept.permissions };
    });
    return perms;
  });
  const [deptMessage, setDeptMessage] = useState('');
  const [deptError, setDeptError] = useState('');


  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setProfileMessage('');
    setProfileError('');
    if (!adminEmail || !adminId) {
      setProfileError('Email and Admin ID cannot be empty.');
      return;
    }
    
    onUpdateAdminProfile({ ...adminUser, email: adminEmail, adminId: adminId });
    setProfileMessage('Admin profile updated successfully!');
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    setPasswordMessage('');
    setPasswordError('');

    if (!newPassword || !confirmNewPassword) {
      setPasswordError('Please fill in both new password fields.');
      return;
    }
    if (newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setPasswordError('New password and confirm password do not match.');
      return;
    }

    
    onUpdateAdminPassword(newPassword); 
    setPasswordMessage('Password updated successfully!');
    setNewPassword('');
    setConfirmNewPassword('');
  };


  const handlePermissionChange = (deptId, permissionType) => {
    setTempDepartmentPermissions(prev => ({
      ...prev,
      [deptId]: {
        ...prev[deptId], 
        [permissionType]: !prev[deptId][permissionType]
      }
    }));
  };

  const handleSaveDepartmentPermissions = () => {
    setDeptMessage('');
    setDeptError('');
    onUpdateDepartmentPermissions(tempDepartmentPermissions);
    setDeptMessage('Department permissions updated successfully!');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h3>

      {}
      <div className="mb-8 p-4 border rounded-md bg-gray-50">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Admin Profile</h4>
        {profileError && (
          <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {profileError}
          </div>
        )}
        {profileMessage && (
          <div className="bg-green-100 border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {profileMessage}
          </div>
        )}
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label htmlFor="adminEmail" className="block text-gray-700 font-semibold mb-2">Admin Email</label>
            <input
              type="email"
              id="adminEmail"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="adminId" className="block text-gray-700 font-semibold mb-2">Admin ID</label>
            <input
              type="text"
              id="adminId"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Update Profile
          </button>
        </form>
      </div>

      {}
      <div className="mb-8 p-4 border rounded-md bg-gray-50">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Change Password</h4>
        {passwordError && (
          <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {passwordError}
          </div>
        )}
        {passwordMessage && (
          <div className="bg-green-100 border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {passwordMessage}
          </div>
        )}
        <form onSubmit={handlePasswordUpdate} className="space-y-4">
          <div>
            <label htmlFor="newPassword" className="block text-gray-700 font-semibold mb-2">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              minLength="8"
              aria-label="New Password"
            />
          </div>
          <div>
            <label htmlFor="confirmNewPassword" className="block text-gray-700 font-semibold mb-2">Confirm New Password</label>
            <input
              type="password"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              minLength="8"
              aria-label="Confirm New Password"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200"
          >
            Update Password
          </button>
        </form>
      </div>


      {}
      <div className="p-4 border rounded-md bg-gray-50">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Department Permissions</h4>
        {deptError && (
          <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {deptError}
          </div>
        )}
        {deptMessage && (
          <div className="bg-green-100 border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {deptMessage}
          </div>
        )}
        {departments.length === 0 ? (
          <p className="text-gray-600">No departments to manage permissions for.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Department</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Can Post Jobs</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Can Approve/Reject</th>
                </tr>
              </thead>
              <tbody>
                {departments.map(dept => (
                  <tr key={dept.id} className="border-b last:border-b-0 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-800 font-medium">{dept.name}</td>
                    <td className="py-3 px-4 text-sm">
                      <input
                        type="checkbox"
                        checked={tempDepartmentPermissions[dept.id]?.canPostJobs || false}
                        onChange={() => handlePermissionChange(dept.id, 'canPostJobs')}
                        className="form-checkbox h-5 w-5 text-blue-600 rounded"
                      />
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <input
                        type="checkbox"
                        checked={tempDepartmentPermissions[dept.id]?.canApproveReject || false}
                        onChange={() => handlePermissionChange(dept.id, 'canApproveReject')}
                        className="form-checkbox h-5 w-5 text-blue-600 rounded"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={handleSaveDepartmentPermissions}
              className="mt-6 bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              Save Permissions
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


const AdminPage = ({ user, onLogout, notifications, addNotificationEntry }) => { 
  const [activeSection, setActiveSection] = useState('dashboard');
  const [jobApplications, setJobApplications] = useState(initialJobApplications);
  const [departments, setDepartments] = useState(initialDepartments); 
  const [candidates] = useState(initialCandidates); 
  const [jobs, setJobs] = useState(initialJobs); 
  const [logs, setLogs] = useState(initialLogs);
  
  const [showCreateJobForm, setShowCreateJobForm] = useState(false);

  
  const [adminProfile, setAdminProfile] = useState(() => ({
    name: user.name || 'Admin',
    email: user.email || 'admin@example.com', 
    adminId: user.adminId || 'admin-001', 
    password: 'securePassword123' 
  }));


  
  const handleUpdateApplicationStatus = (appId, newStatus) => {
    setJobApplications(prevApplications =>
      prevApplications.map(app =>
        app.id === appId ? { ...app, status: newStatus } : app
      )
    );
    
    setCandidates(prevCandidates =>
      prevCandidates.map(candidate => ({
        ...candidate,
        appliedJobs: candidate.appliedJobs.map(job =>
          job.applicationId === appId ? { ...job, status: newStatus } : job
        )
      }))
    );

    
    addLogEntry('User Action', `Job Application ${newStatus}`, adminProfile.name || 'Admin', `Application ${appId} for ${jobApplications.find(a => a.id === appId)?.candidateName} was ${newStatus.toLowerCase()}.`);
    
    addNotificationEntry('Application Update', `Your application for ${jobApplications.find(a => a.id === appId)?.jobTitle} has been ${newStatus.toLowerCase()}.`);
  };

  
  const handleAddJob = (newJob) => {
    setJobs(prevJobs => [...prevJobs, newJob]);
    setShowCreateJobForm(false); 
    addLogEntry('User Action', 'New Job Posted', adminProfile.name || 'Admin', `New job "${newJob.title}" posted with ${newJob.vacancies} vacancies.`);
    addNotificationEntry('Job Alert', `New job opening: ${newJob.title} in ${newJob.departmentName} department!`, { deadline: 'N/A' }); 
  };

  
  const addLogEntry = (type, action, user, details) => {
    const newLog = {
      id: `log${Date.now()}`,
      timestamp: new Date().toLocaleString(),
      type,
      action,
      user,
      details,
    };
    setLogs(prevLogs => [newLog, ...prevLogs]); 
  };

  
  const handleUpdateAdminProfile = (updatedProfile) => {
    setAdminProfile(prev => ({ ...prev, email: updatedProfile.email, adminId: updatedProfile.adminId }));
    addLogEntry('User Action', 'Admin Profile Updated', updatedProfile.name, `Admin email updated to ${updatedProfile.email}, ID to ${updatedProfile.adminId}.`);
  };

  
  const handleUpdateAdminPassword = (newPassword) => {
    setAdminProfile(prev => ({ ...prev, password: newPassword })); 
    addLogEntry('Security', 'Admin Password Changed', adminProfile.name, 'Admin password has been successfully changed.');
  };

  
  const handleUpdateDepartmentPermissions = (updatedPermissions) => {
    setDepartments(prevDepartments =>
      prevDepartments.map(dept => ({
        ...dept,
        permissions: updatedPermissions[dept.id] || dept.permissions
      }))
    );
    addLogEntry('User Action', 'Department Permissions Updated', adminProfile.name, 'Department permissions have been updated.');
  };


  const menuItems = [
    { id: 'dashboard', title: 'Dashboard', icon: LayoutDashboard },
    { id: 'departments', title: 'List Department', icon: Building2 },
    { id: 'candidates', title: 'List Candidate', icon: Users },
    { id: 'jobs', title: 'Job List', icon: Briefcase },
    { id: 'logs', title: 'Logs', icon: FileText },
    { id: 'notifications', title: 'Notification', icon: Bell },
    { id: 'settings', title: 'Setting', icon: Settings },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <DashboardContent
            applications={jobApplications}
            onUpdateApplicationStatus={handleUpdateApplicationStatus}
          />
        );
      case 'departments':
        return (
          <DepartmentList departments={departments} />
        );
      case 'candidates':
        return (
          <CandidateList candidates={candidates} />
        );
      case 'jobs':
        return (
          <div className="space-y-6">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowCreateJobForm(!showCreateJobForm)}
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 flex items-center space-x-2 transition-colors duration-200"
              >
                <PlusCircle size={20} />
                <span>{showCreateJobForm ? 'View Job List' : 'Add New Job'}</span>
              </button>
            </div>
            {showCreateJobForm ? (
              <CreateJobForm
                onAddJob={handleAddJob}
                departments={departments}
                onCancel={() => setShowCreateJobForm(false)}
              />
            ) : (
              <JobListContent jobs={jobs} />
            )}
          </div>
        );
      case 'logs':
        return (
          <LogsContent
            logs={logs}
            onAddLog={addLogEntry} 
          />
        );
      case 'notifications':
        return (
          <NotificationsContent
            notifications={notifications} 
            onAddNotification={addNotificationEntry} 
          />
        );
      case 'settings':
        return (
          <SettingsContent
            adminUser={adminProfile}
            onUpdateAdminProfile={handleUpdateAdminProfile}
            onUpdateAdminPassword={handleUpdateAdminPassword} 
            departments={departments}
            onUpdateDepartmentPermissions={handleUpdateDepartmentPermissions}
          />
        );
      default:
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800">Welcome to Admin Panel</h2>
            <p className="mt-2 text-gray-600">Select a section from the sidebar to manage your data.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      {}
      <aside className="w-64 bg-blue-900 text-white flex flex-col shadow-lg rounded-r-lg">
        <div className="p-4 border-b border-blue-800 text-center">
          <h2 className="text-xl font-bold">Admin Panel</h2>
        </div>
        <nav className="flex-grow">
          <ul>
            {menuItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveSection(item.id);
                    setShowCreateJobForm(false); 
                  }}
                  className={`w-full text-left flex items-center px-4 py-3 transition-colors duration-200 rounded-md m-2 mr-0
                    ${activeSection === item.id ? 'bg-blue-700 shadow-inner' : 'hover:bg-blue-800'}`}
                >
                  <item.icon className="mr-3" size={20} />
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-blue-800">
          <button
            onClick={onLogout}
            className="w-full text-left flex items-center px-4 py-3 hover:bg-blue-800 rounded-md transition-colors duration-200"
          >
            <LogOut className="mr-3" size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {}
      <main className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center rounded-bl-lg">
          <h1 className="text-xl font-semibold text-gray-700">Welcome, {adminProfile.name}!</h1>
        </header>
        <div className="p-6 flex-grow overflow-auto">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
