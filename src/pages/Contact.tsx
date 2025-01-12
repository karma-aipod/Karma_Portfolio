import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-50 pt-24"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
        {/* Add your contact content here */}
      </div>
    </motion.div>
  );
};

export default Contact;