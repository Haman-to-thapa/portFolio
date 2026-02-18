import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          Hemant<span className="text-gray-500 dark:text-gray-400">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`text-sm font-medium transition-colors duration-300 ${location.pathname === path
                ? 'text-black dark:text-white'
                : 'text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'
                }`}
            >
              {name}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="w-12 h-6 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-300 relative"
            aria-label="Toggle Theme"
          >
            <div
              className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${theme === 'dark' ? 'translate-x-6 bg-black' : 'translate-x-0 bg-white'
                }`}
            >
              {theme === 'dark' ? (
                <FaMoon className="text-[10px] text-white" />
              ) : (
                <FaSun className="text-[10px] text-yellow-500" />
              )}
            </div>
          </button>

          <Link
            to="/contact"
            className="px-5 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:opacity-80 transition-opacity duration-300"
          >
            Hire Me
          </Link>


        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-12 h-6 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-300 relative"
            aria-label="Toggle Theme"
          >
            <div
              className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${theme === 'dark' ? 'translate-x-6 bg-black' : 'translate-x-0 bg-white'
                }`}
            >
              {theme === 'dark' ? (
                <FaMoon className="text-[10px] text-white" />
              ) : (
                <FaSun className="text-[10px] text-yellow-500" />
              )}
            </div>
          </button>

          <button onClick={toggleMenu} className="text-2xl text-gray-900 dark:text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 py-6 px-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={closeMenu}
              className={`text-lg font-medium transition-colors duration-300 ${location.pathname === path
                ? 'text-black dark:text-white'
                : 'text-gray-500 dark:text-gray-400'
                }`}
            >
              {name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="w-full text-center py-3 mt-2 text-white bg-black dark:bg-white dark:text-black rounded-lg font-medium"
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
