
import React, { useState } from 'react';

import { Menu, X, LayoutDashboard, Building2, Users, FileText, Briefcase, Bell, Settings, LogOut } from 'lucide-react';
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import ApplicationForm from "./pages/ApplicationForm.jsx";


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



const About = () => (
  <div className="bg-white p-8 rounded-lg shadow-xl w-full text-gray-800 space-y-6">
    <h1 className="text-3xl font-bold mb-6 text-blue-800 border-b pb-2">About Us</h1>

    <section>
      <h2 className="text-xl font-semibold mb-2">About UPSC</h2>
      <p>
        The Union Public Service Commission (UPSC) is a constitutional body established under Part XIV of the Indian Constitution.
        It is headquartered at Dholpur House, New Delhi, and is responsible for recruiting officers to All India Services and the Central Civil Services (Group A & B).
        UPSC conducts a variety of competitive examinations, including the Civil Services Examination, NDA, CDS, and more.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">Mandate of NIC</h2>
      <p>
        The National Informatics Centre (NIC), under the Ministry of Electronics & IT (MeitY), was established in 1976 as the technology partner of the Government of India.
        NIC’s mandate includes:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>Design & develop IT systems for central and state governments</li>
        <li>Provide ICT infrastructure and services across India</li>
        <li>Advise on and implement emerging technologies for public administration</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
      <p>
        Our mission is to ensure transparent, efficient, and accountable governance through the deployment of cutting-edge technology and innovative platforms.
        Working collaboratively, UPSC and NIC strive to empower citizens and strengthen administrative processes through digital transformation.
      </p>
    </section>
  </div>
);

const Contact = () => (
  <div className="bg-white p-8 rounded-lg shadow-xl w-full text-gray-800 space-y-6">
    <h1 className="text-3xl font-bold mb-6 text-blue-800 border-b pb-2">Contact Us</h1>

    <section>
      <h2 className="text-xl font-semibold mb-2">UPSC Office Address</h2>
      <p>
        Dholpur House, Shahjahan Road, New Delhi - 110069
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">Contact Numbers</h2>
      <ul className="list-disc list-inside">
        <li>UPSC Facilitation Counter: 011-23385271 / 011-23381125 / 011-23098543</li>
        <li>Working hours: 10 AM to 5 PM on all working days</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">Email</h2>
      <p>
        <strong>Feedback:</strong> feedback-upsc@gov.in<br />
        <strong>Technical Help:</strong> web-upsc[at]nic[dot]in
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">NIC Technical Support</h2>
      <p>
        If you face any technical issues while using the portal, contact NIC Service Desk:
      </p>
      <ul className="list-disc list-inside">
        <li>Helpdesk: <a href="https://servicedesk.nic.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://servicedesk.nic.in</a></li>
        <li>Email: servicedesk[dot]nic[at]gov[dot]in</li>
        <li>Phone: 1800-111-555</li>
      </ul>
    </section>
  </div>
);

const Candidates = () => {
  const candidates = [
    { name: "Alice Johnson", job: "Software Engineer", email: "alice@example.com" },
    { name: "Bob Williams", job: "Project Manager", email: "bob@example.com" },
    { name: "Charlie Brown", job: "Software Engineer", email: "charlie@example.com" },
    { name: "Diana Prince", job: "Data Analyst", email: "diana@example.com" },
    { name: "Eve Adams", job: "Project Manager", email: "eve@example.com" },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full text-gray-800">
      <h1 className="text-2xl font-bold mb-6 text-blue-800 border-b pb-2">List of Candidates</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead className="bg-blue-100 text-left">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Job Applied</th>
              <th className="px-4 py-2 border">Email</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{candidate.name}</td>
                <td className="px-4 py-2 border">{candidate.job}</td>
                <td className="px-4 py-2 border">{candidate.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I apply for UPSC examinations?",
      answer:
        "You can apply online through the official UPSC website using the Online Application Form under the “Apply Online” section. Make sure to read the notification thoroughly before filling the form."
    },
    {
      question: "Can I edit my application form after submission?",
      answer:
        "No, the application once submitted cannot be edited. However, UPSC provides a withdrawal facility or correction window in some exams. Refer to the official notification for exact provisions."
    },
    {
      question: "What documents are required during the application?",
      answer:
        "Typically, a scanned photograph, signature, and photo ID are required at the application stage. Additional documents may be needed during the interview or verification stage."
    },
    {
      question: "What is the age limit for the Civil Services Examination?",
      answer:
        "The age limit for general category candidates is 21 to 32 years. Age relaxations apply for reserved categories as per government rules."
    },
    {
      question: "I have submitted multiple applications. Which one will be considered?",
      answer:
        "In case of multiple applications, only the one with the higher Registration ID (latest) will be considered. All others will be rejected automatically."
    },
    {
      question: "Where can I get help if I face problems while applying?",
      answer:
        "You can contact UPSC through the 'Feedback' or 'Helpdesk' links available on the official website, or call the provided support numbers in the notification."
    },
    {
      question: "How many attempts are allowed for UPSC CSE?",
      answer:
        "General: 6 attempts, OBC: 9 attempts, SC/ST: Unlimited (up to age limit)."
    },
    {
      question: "Is CSAT mandatory in Prelims?",
      answer:
        "Yes, CSAT is mandatory and qualifying. You must score at least 33% to clear it."
    },
    {
      question: "Can I use regional languages for the Mains exam?",
      answer:
        "Yes, UPSC allows writing the Mains exam in any language listed in the Eighth Schedule of the Constitution."
    },

    {
  question: "Where can I get help if I face problems while applying?",
  answer: (
    <>
      You can contact UPSC through the 'Feedback' or 'Helpdesk' links at{' '}
      <a
        href="https://servicedesk.nic.in/"
        className="font-medium text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        NIC Service Desk
      </a>
      , email at <strong>feedback-upsc[at]gov[dot]in</strong>, or call the support numbers in the official notification.
    </>
  )
}

  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full">
      <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions (FAQ)</h1>
      <div className="space-y-4 text-gray-700">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left px-4 py-3 bg-blue-100 hover:bg-blue-200 font-semibold focus:outline-none"
            >
              {index + 1}. {faq.question}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 bg-white border-t text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Terms = () => (
  <div className="bg-white p-8 rounded-lg shadow-xl w-full text-gray-800 space-y-6">
    <h1 className="text-3xl font-bold mb-6 text-blue-800 border-b pb-2">Terms & Conditions</h1>

    <section>
      <h2 className="text-xl font-semibold mb-2">1. Use of UPSC Web Portal</h2>
      <p>
        This website is designed, developed, and maintained by the National Informatics Centre (NIC).
        By accessing and using this website, you agree to be bound by the terms and conditions set forth here.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">2. Accuracy of Information</h2>
      <p>
        While all efforts have been made to ensure the accuracy and currency of the content on this portal,
        UPSC does not warrant or guarantee its accuracy. Candidates are advised to verify the information through official notifications.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">3. External Links</h2>
      <p>
        UPSC is not responsible for the contents or reliability of any linked websites. The inclusion of any link
        does not imply endorsement by UPSC.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">4. Copyright & License</h2>
      <p>
        All content on this site is the property of UPSC unless otherwise stated. Unauthorized use, reproduction, or distribution is strictly prohibited.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">5. Changes to Terms</h2>
      <p>
        UPSC reserves the right to revise these terms and conditions at any time. Users are advised to regularly check this section for updates.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">6. Legal Jurisdiction</h2>
      <p>
        All legal matters related to the website are subject to the jurisdiction of Delhi courts only.
      </p>
    </section>
  </div>
);



const ApplyJobs = ({ navigate }) => {
  const jobList = [
    { vacancy: "01/2025", post: "Software Engineer" },
    { vacancy: "02/2025", post: "Project Manager" },
    { vacancy: "03/2025", post: "Data Analyst" }
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Available Job Vacancies</h1>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-blue-100">
            <th className="px-4 py-2 text-left">Vacancy No.</th>
            <th className="px-4 py-2 text-left">Post Name</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {jobList.map((job, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{job.vacancy}</td>
              <td className="px-4 py-2">{job.post}</td>
              <td className="px-4 py-2">
                <button
                  className="text-blue-600 hover:underline font-medium"
                  onClick={() => navigate('application-form')}
                >
                  Apply
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};




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
