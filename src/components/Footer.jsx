import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-16">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Logo & Copyright */}
        <div>
          <h1 className="text-2xl font-bold text-white">Usman Saleem</h1>
          <p className="text-sm text-gray-400 mt-2">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center md:justify-start gap-6">
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="mt-6 md:mt-0 flex gap-4">
          <a href="https://github.com/ChaudharyUsman" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition">
            <FaGithub className="text-xl" />
          </a>
          <a href="https://linkedin.com/in/chaudharyusman" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition">
            <FaLinkedinIn className="text-xl" />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition">
            <FaTwitter className="text-xl" />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition">
            <FaFacebookF className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;