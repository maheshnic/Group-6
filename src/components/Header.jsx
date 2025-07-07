import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
const Header = ({ navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
  {title:'Home', page:'home'}, 
  {
    title: 'About Us',
    subItems: [
      { title: 'Mandate', page: 'about-mandate' },
      { title: 'Our Team', page: 'about-team' },
      { title: 'Groups and Divisions', page: 'about-groups' },
      { title: 'State Coordinators', page: 'about-coordinators' },
      { title: 'State Informatics Officers', page: 'about-officers' },
      { title: 'Our Offices', page: 'about-offices' },
      
    ],
  },
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
          <img src="/NIC.png" alt="NIC Logo" className="h-14 w-16 mr-3" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/64x64/EBF4FF/333333?text=Logo'; }}/>
          <div>
            <h1 className="text-lg font-bold text-blue-800">एन आई सी</h1>
            <h2 className="text-md font-semibold text-orange-600">National Informatics Centre</h2>
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
      <nav className="hidden md:flex w-full bg-blue-800 text-white">
  <div className="w-full flex justify-between items-center">
    {navLinks.map(link =>
      link.subItems ? (
        <div key={link.title} className="relative group flex-1 text-center">
          <button className="w-full py-2 hover:bg-blue-700 font-semibold">
            {link.title}
          </button>
          <div className="absolute top-full left-0 w-full hidden group-hover:block bg-white text-black shadow-lg z-50">
            {link.subItems.map((sub) => (
              <button
                key={sub.page}
                onClick={() => navigate(sub.page)}
                className="block px-4 py-2 hover:bg-blue-100 w-full text-left"
              >
                {sub.title}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button
          key={link.page}
          onClick={() => navigate(link.page)}
          className="flex-1 text-center py-2 hover:bg-blue-700 font-semibold"
        >
          {link.title}
        </button>
      )
    )}
  </div>
</nav>
      {isMenuOpen && (<div className="md:hidden bg-white border-t">{navLinks.map(link => <button key={link.page} onClick={() => { navigate(link.page); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 hover:bg-gray-100 font-semibold">{link.title}</button>)}<div className="p-4 border-t flex flex-col space-y-3"><button onClick={() => { navigate('login'); setIsMenuOpen(false); }} className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Login</button><button onClick={() => { navigate('register'); setIsMenuOpen(false); }} className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md">Register</button></div></div>)}
    </header>
  );
};

export default Header;