import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import profilePic from "../assets/usmanH.jpg";
import backgroundImage from "../assets/homeB.jpeg"; // Importing the background image
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section
        id="home"
        className="flex items-center justify-center min-h-screen px-6 md:px-12 lg:px-20 xl:px-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Applying the background image
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left - Profile Picture */}
          <motion.div
            className="flex justify-center lg:justify-start relative"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={profilePic}
              alt="Usman Saleem"
              className="rounded-full shadow-xl w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-cover border-4 border-blue-500"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Hi, I'm <span className="text-blue-500">Usman Saleem</span>
            </h1>

            {/* Typewriter Effect */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 text-gray-300">
              I'm a{" "}
              <span className="text-blue-400">
                <Typewriter
                  words={[
                    "Frontend Engineer",
                    "Software Engineer",
                    "Generative AI Enthusiast",
                    "Full-Stack Developer"
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
              A passionate Computer Scientist dedicated to building innovative and scalable solutions.
            </p>

            {/* Scroll Down Button */}
            <a href="#contact">
              <motion.button
                className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-lg font-semibold transition shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Contact
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
