'use client'
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Login', href: '#' },
    { name: 'Signup', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Watch List', href: '#' },
  ];

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="text-2xl font-bold">ProductHub</span>
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-gray-500 px-3 py-2 rounded-md">
                {link.name}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block hover:text-gray-500 px-3 py-2 rounded-md">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
