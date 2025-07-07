
import React, { useState } from 'react';

import { Menu, X, LayoutDashboard, Building2, Users, FileText, Briefcase, Bell, Settings, LogOut } from 'lucide-react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Candidates from "./pages/Candidates.jsx";
import FAQ from "./pages/FAQ.jsx";
import Terms from "./pages/Terms.jsx";
import ApplyJobs from "./pages/ApplyJobs.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import ApplicationForm from "./pages/ApplicationForm.jsx";
import AboutCoordinators from './pages/AboutCoordinators.jsx';
import AboutGroups from './pages/AboutGroups.jsx';
import AboutMandate from './pages/AboutMandate.jsx';
import AboutOfficers from './pages/AboutOfficers.jsx';
import AboutOffices from './pages/AboutOffices.jsx';
import AboutTeam from './pages/AboutTeam.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';



const initialNotifications = [
  { id: 'notif1', timestamp: new Date().toLocaleString(), type: 'Job Alert', message: 'New Job Opening: Senior Software Engineer in Engineering Department.', deadline: '2025-07-15' },
  { id: 'notif2', timestamp: new Date(Date.now() - 600000).toLocaleString(), type: 'Application Update', message: 'Your application for Project Manager has been reviewed.', status: 'Reviewed' },
  { id: 'notif3', timestamp: new Date(Date.now() - 1200000).toLocaleString(), type: 'System Message', message: 'Platform maintenance scheduled for next Saturday.', date: '2025-06-29' },
  { id: 'notif4', timestamp: new Date(Date.now() - 1800000).toLocaleString(), type: 'Form Release', message: 'UPSC CSE 2025 Application Forms released!', releaseDate: '2025-06-20' },
  { id: 'notif5', timestamp: new Date(Date.now() - 2400000).toLocaleString(), type: 'Job Alert', message: 'Vacancy for Data Analyst in Finance Department.', deadline: '2025-07-20' },
];



const PublicLayout = ({ children, navigate }) => (
  <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
    <Header navigate={navigate} />
    {}
    <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
    <Footer />
  </div>
);


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [notifications, setNotifications] = useState(initialNotifications);

  const navigate = (page) => {
    setCurrentPage(page);
  };

  const handleLoginSuccess = (user) => {
    setLoggedInUser(user);
  
    if (user.role !== 'Admin') {
        setCurrentPage('home');
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setCurrentPage('home');
  };

  const addNotificationEntry = (type, message, details = {}) => {
    const newNotification = {
      id: `notif${Date.now()}`,
      timestamp: new Date().toLocaleString(),
      type,
      message,
      ...details 
    };
    setNotifications(prevNotifications => [newNotification, ...prevNotifications]); 
  };

  
  if (loggedInUser && loggedInUser.role === 'Admin') {
    return (
      <AdminPage
        user={loggedInUser}
        onLogout={handleLogout}
        notifications={notifications} 
        addNotificationEntry={addNotificationEntry} 
      />
    );
  }

  
  const renderPublicPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigate={navigate} notifications={notifications} />;
      case 'login': return <Login navigate={navigate} onLoginSuccess={handleLoginSuccess} />;
      case 'forgot-password': return <ForgotPassword navigate={navigate} />;
      case 'register': return <Register navigate={navigate} onLoginSuccess={handleLoginSuccess} />;
      case 'about': return <About />;
      case 'about-mandate': return <AboutMandate />;
      case 'about-team': return <AboutTeam />;
      case 'about-groups': return <AboutGroups />;
      case 'about-coordinators': return <AboutCoordinators />;
      case 'about-officers': return <AboutOfficers />;
      case 'about-offices': return <AboutOffices />;
      case 'contact': return <Contact />;
      case 'candidates': return <Candidates />;
      case 'faq': return <FAQ />;
      case 'terms': return <Terms />;
      case 'apply-jobs': return <ApplyJobs navigate={navigate} />;
      case 'application-form': return <ApplicationForm navigate={navigate} />;
      default: return <Home navigate={navigate} notifications={notifications} />;
    }
  };

  return (
    <PublicLayout navigate={navigate}>
      {renderPublicPage()}
    </PublicLayout>
  );
}
export default App;
