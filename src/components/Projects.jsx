import React from "react";
import { motion } from "framer-motion";
import poetryImg from '../assets/poetry.png';
import chatbot from '../assets/chatbot.png';
import RLanguge from '../assets/r.png';
import dash from '../assets/dashboard.png';
import facts from '../assets/acts.png';
import aboutBackground from '../assets/aboutb.jpg'; // Import background ima

// Sample project data with GitHub links
const projects = [
  {
    title: "Roman-Urdu-Poetry-Generator-LSTM (Generative AI)",
    image: poetryImg,
    description: "This script trains an LSTM-based model on Roman Urdu poetry and saves the trained model along with the tokenizer.",
    link: "https://github.com/ChaudharyUsman/Roman-Urdu-Poetry-Generator-LSTM"
  },
  {
    title: "AI-Facts-Finder (Generative AI)",
    image:facts,
    description: "The MIT License grants free usage, modification, and distribution rights for AI-Facts-Finder, with no warranties or liability from the author.",
    link: "https://github.com/ChaudharyUsman/AI-Facts-Finder?tab=readme-ov-file"
  },
  {
    title: "Intelligent ChatGPT-Powered Python Chatbot",
    image:chatbot,
    description: "A Python-based chatbot utilizing OpenAI's GPT-3.5 for natural language conversations, supporting context retention and an easy-to-use terminal interface.",
    link: "https://github.com/ChaudharyUsman/ChatBot"
  },
  {
    title: "Madhav-Store-PowerBI-Dashboard",
    image:dash,
    description: "An interactive dashboard for analyzing Madhav Store's online sales across India, featuring dynamic filters, user-driven parameters, and real-time insights.",
    link: "https://github.com/ChaudharyUsman/Madhav-Store-PowerBI-Dashboard?tab=readme-ov-file"
  },
  {
    title: "Capital Valley – Bridging Startups & Investors (MERN)",
    image: "https://usmanali.vercel.app/static/media/CapitalValley.72b2d536e505e662dfda.png",
    description: "Capital Valley connects startups with investors, providing secure idea protection, seamless communication, and premium features like priority messaging. It fosters innovation, economic growth, and IT sector development.",
    link: "https://github.com/UsmanAli90/Capital_Valley"
  },
  {
    title: "BodyFat Explorer",
    image:RLanguge,
    description: "A powerful R package for analyzing and visualizing body fat composition data, featuring data import, statistical analysis, customizable visualizations, predictive modeling, and comprehensive documentation for researchers and health professionals.",
    link: "https://github.com/ChaudharyUsman/BodyFat-Explorer"
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-cover bg-center text-white py-12 px-6 md:px-16"
      style={{
        backgroundImage: `url(${aboutBackground})`, // Use the imported image here
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container mx-auto">
        
        {/* Heading with Glowing Shadow Effect */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-center mb-6 px-6 py-12 flex flex-col items-center relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            textShadow: "0 0 15px rgba(0, 150, 255, 0.9), 0 0 30px rgba(0, 150, 255, 0.7)"
          }}
        >
          My Projects
        </motion.h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 block relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                boxShadow: "0px 0px 20px rgba(0, 150, 255, 0.8)",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
