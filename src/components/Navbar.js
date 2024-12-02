import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-purple-900 to-purple-700 w-full fixed top-0 left-0 py-4 pr-20 text-white shadow-lg">
      <div className="container mx-auto flex justify-end fade-in">
        <ul className="flex space-x-6 text-xl font-semibold relative">
          <li>
            <a
              href="#home"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 animate-pulse" />
      </div>
    </nav>
  );
};

export default Navbar;
