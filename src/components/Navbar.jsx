import { useState } from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed w-full bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 rounded-full cursor-pointer" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item} className="cursor-pointer hover:text-gray-400 transition duration-300">
              <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {item}
              </a>
            </li>
          ))}
          {/* Download CV Button */}
          <li>
            <a
              href="/Usman Saleem Full_Stack.pdf"
              download="Usman_Saleem_CV.pdf"
              className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700 transition duration-300"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-gray-800 p-4 transition-all ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-lg">
          {navItems.map((item) => (
            <li key={item} className="cursor-pointer hover:text-gray-400 transition duration-300">
              <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {item}
              </a>
            </li>
          ))}
          {/* Download CV in mobile dropdown */}
          <li>
            <a
              href="/Usman Saleem Full_Stack.pdf"
              download="Usman_Saleem_CV.pdf"
              className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700 transition duration-300"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
