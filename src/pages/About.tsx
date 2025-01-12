import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-50 pt-24"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            I am an enthusiastic student eager to explore the diverse fields of industry related to data, management
            and engineering. I like working in a challenging and dynamic environment, exploring new opportunities on
            a daily basis. I love meeting and communicating with diverse people and would emerge as a key team
            player at workplace.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;