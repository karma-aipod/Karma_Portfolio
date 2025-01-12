import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <nav className="fixed w-full bg-black bg-opacity-30 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.img
              src="/lovable-uploads/7062933d-18ef-4f0f-8302-0dc84afc1935.png"
              alt="Logo"
              className="h-8 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => window.location.href = '/art'}
            />
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
              <a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm Tuhin Bhattacharya
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 mb-8">
                <TypeAnimation
                  sequence={[
                    "I'm a Designer",
                    1000,
                    "I'm a Developer",
                    1000,
                    "I'm an Artist",
                    1000,
                    "I'm a Photographer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <div className="flex space-x-6 mb-8">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-6 h-6 hover:text-gray-300 transition-colors" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-6 h-6 hover:text-gray-300 transition-colors" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="w-6 h-6 hover:text-gray-300 transition-colors" />
                </a>
              </div>
              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-opacity-90 transition-all"
              >
                Download CV
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mt-12 md:mt-0"
            >
              <img
                src="/lovable-uploads/028c6cf3-1a69-4ed1-ab0e-029a02b2f8b5.png"
                alt="Profile"
                className="rounded-lg shadow-2xl max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;