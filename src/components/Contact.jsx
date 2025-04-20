import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import homeImage from "../assets/homeB.jpeg"; // Make sure this path is correct

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setError("All fields are required.");
      return;
    }
    setError("");
    try {
      await emailjs.send(
        "service_jgtvg53",
        "template_j3wh92f",
        formData,
        "UWtdx0jrS96LYVETW"
      );
      setIsSent(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setIsSent(false), 5000);
    } catch (error) {
      setError("Failed to send message. Try again later.");
    }
  };

  return (
    <>
      <section
        id="contact"
        className="min-h-screen md:px-12 lg:px-20 xl:px-32 bg-gray-900 text-white flex items-center justify-center px-6 sm:px-12 py-16"
        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-blue-400 mb-6">Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              {['name', 'email', 'phone', 'subject'].map((field) => (
                <div className="mb-4" key={field}>
                  <label className="block text-gray-300 capitalize">{field}</label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-400"
                    placeholder={`Your ${field}`}
                  />
                </div>
              ))}
              <div className="mb-6">
                <label className="block text-gray-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-400 h-32"
                  placeholder="Your Message"
                ></textarea>
              </div>
              {error && <p className="text-red-400 mb-4">{error}</p>}
              {isSent && <p className="text-green-400 mb-4">Message sent successfully!</p>}
              <motion.button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Facilities Section */}
          <motion.div
            className="flex flex-col gap-6 px-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-green-400 mb-4">Our Facilities</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We offer a range of services including AI-powered automation, full-stack web development,
              cloud computing solutions, and cutting-edge security integrations to protect your data.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-300 text-lg">
              <li>Custom Web & Mobile App Development</li>
              <li>AI & Machine Learning Solutions</li>
              <li>Data Scientist & Data Protection</li>
              <li>Scalable & High-Performance Systems</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-300 py-10 px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Web & Mobile Development</li>
              <li>AI & Machine Learning</li>
              <li>Cloud & DevOps</li>
              <li>Data Science & Analytics</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="hover:text-white transition">Contact Us</a>
              </li>
              
              <li>
                <a href="https://github.com/ChaudharyUsman" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
              </li>
              <li>
                <a href="mailto:chusman3638@gmail.com" className="hover:text-white transition">Email</a>
              </li>
            </ul>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col justify-between">
          
            <p className="text-sm">
              © {new Date().getFullYear()} Usman Saleem. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
