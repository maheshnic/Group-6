
import React, { useState } from 'react';

import { Menu, X, LayoutDashboard, Building2, Users, FileText, Briefcase, Bell, Settings, LogOut } from 'lucide-react';
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AdminPage from "./pages/AdminPage.jsx";

const initialNotifications = [
  { id: 'notif1', timestamp: new Date().toLocaleString(), type: 'Job Alert', message: 'New Job Opening: Senior Software Engineer in Engineering Department.', deadline: '2025-07-15' },
  { id: 'notif2', timestamp: new Date(Date.now() - 600000).toLocaleString(), type: 'Application Update', message: 'Your application for Project Manager has been reviewed.', status: 'Reviewed' },
  { id: 'notif3', timestamp: new Date(Date.now() - 1200000).toLocaleString(), type: 'System Message', message: 'Platform maintenance scheduled for next Saturday.', date: '2025-06-29' },
  { id: 'notif4', timestamp: new Date(Date.now() - 1800000).toLocaleString(), type: 'Form Release', message: 'UPSC CSE 2025 Application Forms released!', releaseDate: '2025-06-20' },
  { id: 'notif5', timestamp: new Date(Date.now() - 2400000).toLocaleString(), type: 'Job Alert', message: 'Vacancy for Data Analyst in Finance Department.', deadline: '2025-07-20' },
];

const Header = ({ navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { title: 'About Us', page: 'about' },
    { title: 'Contact Us', page: 'contact' },
    { title: 'List Candidates', page: 'candidates' },
    { title: 'FAQ', page: 'faq' },
    { title: 'Terms', page: 'terms' },
    { title: 'Apply for Jobs', page: 'apply-jobs' }
  ];
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center cursor-pointer" onClick={() => navigate('home')}>
          <img src="/emblem.png" alt="Emblem of India" className="h-14 w-14 mr-3" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/64x64/EBF4FF/333333?text=Logo'; }}/>
          <div>
            <h1 className="text-lg font-bold text-blue-800">संघ लोक सेवा आयोग</h1>
            <h2 className="text-md font-semibold text-orange-600">Union Public Service Commission</h2>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <button onClick={() => navigate('login')} className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700">Login</button>
          <button onClick={() => navigate('register')} className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700">Register</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </div>
      <nav className="hidden md:flex w-full bg-blue-800 text-white"><div className="container mx-auto flex justify-center">{navLinks.map(link => <button key={link.page} onClick={() => navigate(link.page)} className="px-4 py-2 hover:bg-blue-700 font-semibold">{link.title}</button>)}</div></nav>
      {isMenuOpen && (<div className="md:hidden bg-white border-t">{navLinks.map(link => <button key={link.page} onClick={() => { navigate(link.page); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 hover:bg-gray-100 font-semibold">{link.title}</button>)}<div className="p-4 border-t flex flex-col space-y-3"><button onClick={() => { navigate('login'); setIsMenuOpen(false); }} className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Login</button><button onClick={() => { navigate('register'); setIsMenuOpen(false); }} className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md">Register</button></div></div>)}
    </header>
  );
};

const Footer = () => (
  <footer className="w-full text-center text-gray-600 bg-gray-200 py-6 mt-auto">
    <p>&copy; {new Date().getFullYear()} Union Public Service Commission. All rights reserved.</p>
    <p className="text-sm">Designed & Developed by National Informatics Centre (NIC)</p>
  </footer>
);

const PublicLayout = ({ children, navigate }) => (
  <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
    <Header navigate={navigate} />
    {}
    <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
    <Footer />
  </div>
);



const About = () => <div className="bg-white p-8 rounded-lg shadow-xl w-full"><h1 className="text-2xl font-bold">About Us</h1></div>;
const Contact = () => <div className="bg-white p-8 rounded-lg shadow-xl w-full"><h1 className="text-2xl font-bold">Contact Us</h1></div>;
const Candidates = () => <div className="bg-white p-8 rounded-lg shadow-xl w-full"><h1 className="text-2xl font-bold">List of Candidates</h1></div>;
const FAQ = () => <div className="bg-white p-8 rounded-lg shadow-xl w-full"><h1 className="text-2xl font-bold">Frequently Asked Questions</h1></div>;
const Terms = () => <div className="bg-white p-8 rounded-lg shadow-xl w-full"><h1 className="text-2xl font-bold">Terms & Conditions</h1></div>;

const ApplyJobs = () => (
  <div className="bg-white p-8 rounded-lg shadow-xl w-full">
    <h1 className="text-2xl font-bold">Apply for Jobs</h1>
    <p className="mt-2 text-gray-600">This section will contain the job application portal.</p>
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
      case 'register': return <Register navigate={navigate} onLoginSuccess={handleLoginSuccess} />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      case 'candidates': return <Candidates />;
      case 'faq': return <FAQ />;
      case 'terms': return <Terms />;
      case 'apply-jobs': return <ApplyJobs />; {}
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
