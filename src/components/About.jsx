import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import usmanImage from "../assets/usmanH.jpg"; // Ensure path is correct
import backgroundImage from "../assets/aboutb.jpg"; // Import the background image

const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-12 md:px-12 lg:px-20 xl:px-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Apply background image
    >
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Section (Text + Social Links) */}
        <motion.div 
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Heading with Glowing Shadow */}
          <h1 className="text-4xl font-bold mb-4 text-blue-400 relative">
            About Me
            <span className="absolute inset-0 blur-lg opacity-50 text-blue-500">
              About Me
            </span>
          </h1>

          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            I'm <span className="text-blue-500 font-semibold">Usman Saleem</span>, a passionate <span className="text-blue-500">Software Engineer </span>
             with expertise in <span className="text-blue-400">Full-Stack Development</span> and <span className="text-blue-400">AI Solutions</span>.  
            Currently, I'm pursuing my <span className="text-green-400 font-semibold">BS in Computer Science</span> at  
            <a href="https://www.nu.edu.pk/" target="_blank" rel="noopener noreferrer" 
              className="text-yellow-400 font-semibold hover:underline ml-1">
              FAST NUCES
            </a>, set to graduate in <span className="text-green-400 font-semibold">Spring 2025</span>.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            <a href="https://www.linkedin.com/in/ch-usman-saleem/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-blue-500 transition duration-300 shadow-lg hover:shadow-blue-500" />
            </a>
            <a href="https://github.com/ChaudharyUsman" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl text-gray-300 transition duration-300 shadow-lg hover:shadow-gray-400" />
            </a>
            <a href="https://www.instagram.com/chaudhary.usman.saleem/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-pink-500 transition duration-300 shadow-lg hover:shadow-pink-500" />
            </a>
            <a href="mailto:chusman3638@gmail.com">
              <FaEnvelope className="text-3xl text-red-500 transition duration-300 shadow-lg hover:shadow-red-500" />
            </a>
          </div>
        </motion.div>

        {/* Right Section (3D Animated Profile Image with Glowing Shadow) */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="relative"
            animate={{ 
              boxShadow: [
                "0px 0px 15px rgba(0, 255, 255, 0.5)", 
                "0px 0px 25px rgba(0, 255, 255, 0.7)",
                "0px 0px 15px rgba(0, 255, 255, 0.5)"
              ]
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <motion.img 
              src={usmanImage} 
              alt="Usman Saleem" 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500"
              whileHover={{ scale: 1.1, rotateY: 15 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
};

export default About;
