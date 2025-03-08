
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { TextScramble } from "@/components/ui/text-scramble";
import { Tilt } from "@/components/ui/tilt";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Spotlight } from "@/components/ui/spotlight";

const ContactInfo = ({ icon: Icon, title, content, link, delay }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.2, duration: 0.5 }}
      className="group"
    >
      <Tilt>
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex flex-col items-center text-center hover:bg-white/10 transition-all shadow-lg relative overflow-hidden group-hover:shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700"></div>
          <div className="mb-4 p-3 bg-white/10 rounded-full">
            <Icon size={24} className="text-yellow-400" />
          </div>
          <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
          <p className="text-gray-300">{content}</p>
        </div>
      </Tilt>
    </motion.a>
  );
};

const AnimatedInput = ({ label, type, placeholder }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <label className="block text-white mb-2 font-medium">{label}</label>
      <input
        type={type}
        className="w-full px-4 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-400 transition-all"
        placeholder={placeholder}
      />
    </motion.div>
  );
};

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@example.com",
      link: "mailto:contact@example.com",
      delay: 0
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 234 567 890",
      link: "tel:+1234567890",
      delay: 1
    },
    {
      icon: MapPin,
      title: "Location",
      content: "New York, NY",
      link: "https://maps.google.com",
      delay: 2
    }
  ];

  const socialLinks = [
    { icon: Github, link: "https://github.com", delay: 0 },
    { icon: Linkedin, link: "https://linkedin.com", delay: 1 },
    { icon: Twitter, link: "https://twitter.com", delay: 2 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen pt-20 pb-16 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        size={500}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TextScramble 
              as="h1"
              className="text-5xl font-bold text-white mb-4"
              trigger={true}
            >
              Get in Touch
            </TextScramble>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            I'm always open to new opportunities and collaborations. Feel free to reach out if you have any questions or just want to say hi!
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <ContactInfo
                key={info.title}
                icon={info.icon}
                title={info.title}
                content={info.content}
                link={info.link}
                delay={index}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="md:col-span-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <AnimatedInput 
                  label="Name" 
                  type="text" 
                  placeholder="John Doe" 
                />
                <AnimatedInput 
                  label="Email" 
                  type="email" 
                  placeholder="john@example.com" 
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <label className="block text-white mb-2 font-medium">Message</label>
                <textarea
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-400 h-40"
                  placeholder="Your message"
                ></textarea>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-6"
              >
                <MagneticButton>
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-8 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all flex items-center justify-center gap-2 font-medium"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </MagneticButton>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="md:col-span-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-xl flex flex-col justify-between"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Connect</h2>
                <p className="text-gray-300 mb-8">
                  Follow me on social media to see my latest projects and updates. Let's stay connected!
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white"
                  >
                    <MagneticButton>
                      <social.icon size={24} />
                    </MagneticButton>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
