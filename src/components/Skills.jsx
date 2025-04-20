import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaDatabase, FaBrain } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import Marquee from "react-fast-marquee";
import skillsImage from "../assets/homeB.jpeg"; // Corrected import path

const skills = [
  "Frontend Development", "Backend Development", "React.js", "Node.js",
  "AI Development", "Machine Learning", "Data Scientist", "Database Management",
  "Full-Stack Development", "Software Architecture"
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 py-22 flex flex-col items-center md:px-12 lg:px-20 xl:px-32"
      style={{
        backgroundImage: `url(${skillsImage})`, // Apply the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Fixed Container Width */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading with Shadow */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-center mb-8 shadow-lg shadow-blue-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-3xl text-center mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          I am a passionate <span className="text-blue-500">Software Engineer</span> with experience in
          building scalable, efficient, and high-quality software solutions. I love
          working on <span className="text-blue-400">Full-Stack Development</span>, <span className="text-blue-400">AI</span>, and <span className="text-blue-400">Cloud Computing</span>.
        </motion.p>

        {/* Marquee Section */}
        <div className="w-full max-w-4xl overflow-hidden mt-6 mx-auto">
          <Marquee gradient={false} speed={40} pauseOnHover>
            {skills.map((skill, index) => (
              <span key={index} className="text-lg md:text-xl mx-4 font-semibold text-blue-400">
                {skill} |
              </span>
            ))}
          </Marquee>
        </div>

        {/* Skills Section - Fully Responsive Grid */}
        {/* Skills Section - Fully Responsive Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full justify-items-center">
  {[
    {
      icon: <FaLaptopCode className="text-4xl text-blue-500 mx-auto" />,
      title: "Full-Stack Development",
      shadow: "hover:shadow-blue-500"
    },
    {
      icon: <FaDatabase className="text-4xl text-green-500 mx-auto" />,
      title: "Database Management",
      shadow: "hover:shadow-green-500"
    },
    {
      icon: <FaBrain className="text-4xl text-purple-500 mx-auto" />,
      title: "AI & Machine Learning",
      shadow: "hover:shadow-purple-500"
    },
    {
      icon: <TbBrandGoogleAnalytics className="text-4xl text-yellow-500 mx-auto" />,
      title: "Data Scientist",
      shadow: "hover:shadow-yellow-500"
    }
  ].map((skill, index) => (
    <motion.div
      key={index}
      className={`bg-gray-800 p-6 w-full md:w-64 rounded-xl text-center shadow-lg transition-transform duration-300 transform hover:scale-105 ${skill.shadow}`}
      whileHover={{ scale: 1.1 }}
    >
      {skill.icon}
      <h3 className="text-xl font-semibold mt-4">{skill.title}</h3>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Skills;
