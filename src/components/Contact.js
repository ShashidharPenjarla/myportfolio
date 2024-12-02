import React from 'react';

const Contact = () => (
  <footer id='contact' className="bg-gradient-to-r from-gray-800 via-purple-900 to-purple-700 text-white py-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-5">
      
      {/* Brand and Description */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">
          <span className="text-white">Shashidhar</span>
        </h1>
        <p className=" text-sm">
          Software engineer passionate about building scalable, impactful digital solutions.
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Contact Info</h2>
        <ul className=" text-sm">
          <li>Phone: +91 9959068812</li>
          <li>Email: <a href="mailto:shashidhar8812@gmail.com" className="hover:text-blue-500 transition-colors">shashidhar8812@gmail.com</a></li>
          <li>Email: <a href="mailto:shashidhar0437@gmail.com" className="hover:text-blue-500 transition-colors">shashidhar0437@gmail.com</a></li>
          <li>
            LinkedIn: 
            <a href="https://www.linkedin.com/in/shashidhar-penjarla-838a8b1b4" className="hover:text-blue-500 transition-colors ml-1">
              linkedin.com/in/shashidhar-penjarla
            </a>
          </li>
          <li>Location: Hyderabad, India</li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Quick Links</h2>
        <ul className=" text-sm space-y-1">
          <li><a href="#about" className="hover:text-blue-500 transition-colors">About Me</a></li>
          <li><a href="#education" className="hover:text-blue-500 transition-colors">Education</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a></li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Follow Me</h2>
        <ul className="flex space-x-4 text-gray-400">
          <li>
            <a href="https://www.linkedin.com/in/shashidhar-penjarla-838a8b1b4" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <img src="/git.png" alt="GitHub" className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <img src="/twitter.png" alt="Twitter" className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <img src="/facebook.jpg" alt="Facebook" className="w-5 h-5" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-8 text-center text-gray-200 text-xs">
      <p>&copy; {new Date().getFullYear()} Shashidhar. All rights reserved.</p>
    </div>
  </footer>
);

export default Contact;
