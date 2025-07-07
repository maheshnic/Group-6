import React from 'react';

const Footer = () => (
  <footer className="w-full text-center text-gray-600 bg-gray-200 py-6 mt-auto">
    <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
    <p className="text-sm">Designed & Developed by National Informatics Centre (NIC)</p>
  </footer>
);

export default Footer;