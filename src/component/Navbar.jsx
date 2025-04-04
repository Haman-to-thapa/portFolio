import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Hire Me', path: '/hire' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full  shadow-md z-50 text-white">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center px-6 py-4">
        {/* Name */}
        <h1 className="text-2xl font-bold text-white hover:text-[#eb5951]">HamaN</h1>

        {/* Links */}
        <div className="flex gap-4">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`px-4 py-2  rounded-md transition-all hover:inline duration-300 ${location.pathname === path
                ? 'border-[#eb5951] text-[#eb5951] hover:underline'
                : 'border-gray-500 hover:border-[#eb5951] hover:text-[#eb5951]'
                }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-4 py-4">
        <h1 className="text-xl font-bold">HamaN</h1>
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111] flex flex-col items-center gap-5 py-6 transition-all duration-300">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={closeMenu}
              className={`w-[80%] text-center px-4 py-2 border-2 rounded-md text-lg transition-all duration-300 ${location.pathname === path
                ? 'border-[#eb5951] text-[#eb5951] bg-[#222]'
                : 'border-gray-500 hover:border-[#eb5951] hover:text-[#eb5951]'
                }`}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
