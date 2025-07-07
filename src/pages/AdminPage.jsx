import React, { useState } from "react";
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

import Dashboard from './admin/Dashboard.jsx';
import DepartmentList from './admin/DepartmentList.jsx';
import CandidateList from './admin/CandidateList.jsx';
import JobListContent from './admin/JobListContent.jsx';
import CreateJobForm from './admin/CreateJobForm.jsx';
import LogsContent from './admin/LogsContent.jsx';
import NotificationsContent from './admin/NotificationsContent.jsx';
import SettingsContent from './admin/SettingsContent.jsx';

// Mock data
const initialJobApplications = [
  {
    id: "app1",
    jobId: "job1",
    jobTitle: "Software Engineer",
    candidateName: "Alice Johnson",
    candidateEmail: "alice@example.com",
    status: "Pending",
  },
  {
    id: "app2",
    jobId: "job2",
    jobTitle: "Project Manager",
    candidateName: "Bob Williams",
    candidateEmail: "bob@example.com",
    status: "Approved",
  },
  {
    id: "app3",
    jobId: "job1",
    jobTitle: "Software Engineer",
    candidateName: "Charlie Brown",
    candidateEmail: "charlie@example.com",
    status: "Pending",
  },
  {
    id: "app4",
    jobId: "job3",
    jobTitle: "Data Analyst",
    candidateName: "Diana Prince",
    candidateEmail: "diana@example.com",
    status: "Rejected",
  },
  {
    id: "app5",
    jobId: "job2",
    jobTitle: "Project Manager",
    candidateName: "Eve Adams",
    candidateEmail: "eve@example.com",
    status: "Pending",
  },
];

const initialDepartments = [
  {
    id: "dept1",
    name: "Engineering",
    description: "Manages software development and infrastructure.",
    permissions: { canPostJobs: true, canApproveReject: false },
  },
  {
    id: "dept2",
    name: "Human Resources",
    description: "Handles recruitment, employee relations, and benefits.",
    permissions: { canPostJobs: true, canApproveReject: true },
  },
  {
    id: "dept3",
    name: "Finance",
    description: "Oversees financial operations and budgeting.",
    permissions: { canPostJobs: false, canApproveReject: false },
  },
  {
    id: "dept4",
    name: "Marketing",
    description: "Responsible for brand promotion and campaigns.",
    permissions: { canPostJobs: true, canApproveReject: false },
  },
];

const initialCandidates = [
  {
    id: "cand1",
    name: "Alice Johnson",
    email: "alice@example.com",
    contact: "123-456-7890",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    resumeUrl: "https://example.com/resumes/alice_johnson.pdf",
    appliedJobs: [
      {
        jobId: "job1",
        jobTitle: "Software Engineer",
        status: "Pending",
        applicationId: "app1",
      },
      {
        jobId: "job3",
        jobTitle: "Data Analyst",
        status: "Approved",
        applicationId: "app_cand1_job3",
      },
    ],
  },
  {
    id: "cand2",
    name: "Bob Williams",
    email: "bob@example.com",
    contact: "098-765-4321",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    resumeUrl: "https://example.com/resumes/bob_williams.pdf",
    appliedJobs: [
      {
        jobId: "job2",
        jobTitle: "Project Manager",
        status: "Approved",
        applicationId: "app2",
      },
    ],
  },
  {
    id: "cand3",
    name: "Charlie Brown",
    email: "charlie@example.com",
    contact: "555-123-4567",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    resumeUrl: "https://example.com/resumes/charlie_brown.pdf",
    appliedJobs: [
      {
        jobId: "job1",
        jobTitle: "Software Engineer",
        status: "Pending",
        applicationId: "app3",
      },
    ],
  },
];

const initialJobs = [
  {
    id: "job1",
    title: "Software Engineer",
    description: "Develop scalable web applications using React and Node.js.",
    location: "New Delhi, India",
    companyName: "Tech Innovators Pvt Ltd",
    companyWebsite: "https://techinnovators.com",
    category: "Software Development",
    jobType: "Full-Time",
    deadline: "2025-08-01",
    featured: true,
    vacancies: 5,
    qualifications: "B.Tech/BE in CS, 2+ years experience in React and Node.js",
    departmentId: "dept1",
    departmentName: "Engineering",
  },
  {
    id: "job2",
    title: "Project Manager",
    description: "Lead software development projects and manage timelines.",
    location: "Remote",
    companyName: "GlobalTech Solutions",
    companyWebsite: "https://globaltech.com",
    category: "Management",
    jobType: "Contract",
    deadline: "2025-08-15",
    featured: true,
    vacancies: 2,
    qualifications: "MBA or PMP, 5+ years project management experience",
    departmentId: "dept1",
    departmentName: "Engineering",
  },
  {
    id: "job3",
    title: "Data Analyst",
    description: "Analyze datasets to support strategic decisions.",
    location: "Mumbai, India",
    companyName: "Finance Analytics Inc.",
    companyWebsite: "https://financeanalytics.com",
    category: "Analytics",
    jobType: "Full-Time",
    deadline: "2025-09-01",
    featured: true,
    vacancies: 3,
    qualifications: "Bachelor's in Statistics/Math, proficiency in Python/R and SQL",
    departmentId: "dept3",
    departmentName: "Finance",
  },
];



const initialLogs = [
  {
    id: "log1",
    timestamp: new Date().toLocaleString(),
    type: "System Event",
    action: "Application started",
    user: "System",
    details: "Admin panel initialized.",
  },
  {
    id: "log2",
    timestamp: new Date(Date.now() - 3600000).toLocaleString(),
    type: "Security",
    action: "Admin Login Attempt",
    user: "admin@example.com",
    details: "Successful login by Admin User.",
  },
  {
    id: "log3",
    timestamp: new Date(Date.now() - 7200000).toLocaleString(),
    type: "User Action",
    action: "Candidate Registered",
    user: "new_candidate@example.com",
    details: "New candidate account created.",
  },
  {
    id: "log4",
    timestamp: new Date(Date.now() - 10800000).toLocaleString(),
    type: "User Action",
    action: "Job Application Approved",
    user: "Admin User",
    details: "Application app2 for Bob Williams approved.",
  },
];

const initialNotifications = [
  {
    id: "notif1",
    timestamp: new Date().toLocaleString(),
    type: "Job Alert",
    message:
      "New Job Opening: Senior Software Engineer in Engineering Department.",
    deadline: "2025-07-15",
  },
  {
    id: "notif2",
    timestamp: new Date(Date.now() - 600000).toLocaleString(),
    type: "Application Update",
    message: "Your application for Project Manager has been reviewed.",
    status: "Reviewed",
  },
];

const AdminPage = ({ user, onLogout, notifications, addNotificationEntry }) => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [jobApplications, setJobApplications] = useState(
    initialJobApplications
  );
  const [departments, setDepartments] = useState(initialDepartments);
  const [candidates, setCandidates] = useState(initialCandidates);
  const [jobs, setJobs] = useState(initialJobs);
  const [logs, setLogs] = useState(initialLogs);
  const [showCreateJobForm, setShowCreateJobForm] = useState(false);
  const [adminProfile, setAdminProfile] = useState({
    name: user.name || "Admin",
    email: user.email || "admin@example.com",
    adminId: user.adminId || "admin-001",
    password: "securePassword123",
  });

  const handleUpdateApplicationStatus = (appId, newStatus) => {
    setJobApplications((prevApplications) =>
      prevApplications.map((app) =>
        app.id === appId ? { ...app, status: newStatus } : app
      )
    );

    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) => ({
        ...candidate,
        appliedJobs: candidate.appliedJobs.map((job) =>
          job.applicationId === appId ? { ...job, status: newStatus } : job
        ),
      }))
    );

    addLogEntry(
      "User Action",
      `Job Application ${newStatus}`,
      adminProfile.name,
      `Application ${appId} was ${newStatus.toLowerCase()}.`
    );
  };

  const handleAddJob = (newJob) => {
    setJobs((prevJobs) => [...prevJobs, newJob]);
    setShowCreateJobForm(false);
    addLogEntry(
      "User Action",
      "New Job Posted",
      adminProfile.name,
      `New job "${newJob.title}" posted.`
    );
  };

  const handleUpdateDepartments = (updatedDepartments) => {
    setDepartments(updatedDepartments);
    addLogEntry(
      "User Action",
      "Departments Updated",
      adminProfile.name,
      "Department list has been modified."
    );
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
    setLogs((prevLogs) => [newLog, ...prevLogs]);
  };

  const handleUpdateAdminProfile = (updatedProfile) => {
    setAdminProfile((prev) => ({ ...prev, ...updatedProfile }));
    addLogEntry(
      "User Action",
      "Admin Profile Updated",
      updatedProfile.name,
      "Profile information updated."
    );
  };

  const handleUpdateAdminPassword = (newPassword) => {
    setAdminProfile((prev) => ({ ...prev, password: newPassword }));
    addLogEntry(
      "Security",
      "Password Changed",
      adminProfile.name,
      "Admin password updated."
    );
  };

  const handleUpdateDepartmentPermissions = (updatedPermissions) => {
    setDepartments((prevDepartments) =>
      prevDepartments.map((dept) => ({
        ...dept,
        permissions: updatedPermissions[dept.id] || dept.permissions,
      }))
    );
    addLogEntry(
      "User Action",
      "Permissions Updated",
      adminProfile.name,
      "Department permissions modified."
    );
  };

  const menuItems = [
    { id: "dashboard", title: "Dashboard", icon: LayoutDashboard },
    { id: "departments", title: "List Department", icon: Building2 },
    { id: "candidates", title: "List Candidate", icon: Users },
    { id: "jobs", title: "Job List", icon: Briefcase },
    { id: "logs", title: "Logs", icon: FileText },
    { id: "notifications", title: "Notification", icon: Bell },
    { id: "settings", title: "Setting", icon: Settings },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <Dashboard
            applications={jobApplications}
            onUpdateApplicationStatus={handleUpdateApplicationStatus}
          />
        );
      case "departments":
        return (
          <DepartmentList
            departments={departments}
            onUpdateDepartments={handleUpdateDepartments}
          />
        );
      case "candidates":
        return <CandidateList candidates={candidates} />;
      case "jobs":
        return showCreateJobForm ? (
          <CreateJobForm
            onAddJob={handleAddJob}
            departments={departments}
            onCancel={() => setShowCreateJobForm(false)}
          />
        ) : (
          <JobListContent
            jobs={jobs}
            setJobs={setJobs}
            onAddJobClick={() => setShowCreateJobForm(true)}
          />
        );
      case "logs":
        return <LogsContent logs={logs} onAddLog={addLogEntry} />;
      case "notifications":
        return (
          <NotificationsContent
            notifications={notifications}
            onAddNotification={addNotificationEntry}
          />
        );
      case "settings":
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
          <DashboardContent
            applications={jobApplications}
            onUpdateApplicationStatus={handleUpdateApplicationStatus}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-4 flex items-center justify-center border-b border-blue-800">
          <h1 className="text-xl font-bold">Admin</h1>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="p-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveSection(item.id);
                    setShowCreateJobForm(false);
                  }}
                  className={`w-full text-left flex items-center p-3 rounded-md transition-colors ${
                    activeSection === item.id
                      ? "bg-blue-800"
                      : "hover:bg-blue-800"
                  }`}
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
            className="w-full text-left flex items-center p-3 rounded-md hover:bg-blue-800 transition-colors"
          >
            <LogOut className="mr-3" size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">
              {menuItems.find((item) => item.id === activeSection)?.title ||
                "Dashboard"}
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">{adminProfile.name}</span>
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                {adminProfile.name.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">{renderSection()}</main>
      </div>
    </div>
  );
};

export default AdminPage;