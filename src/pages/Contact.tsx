
import { motion } from "framer-motion";
<<<<<<< HEAD
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { Card } from "@/components/ui/card";
=======
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
>>>>>>> fb823838761326c63357728a1c358803d87667a5

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "tuhin.bhattacharya25b@gim.ac.in",
<<<<<<< HEAD
      link: "mailto:tuhin.bhattacharya25b@gim.ac.in"
=======
      link: "mailto:tuhin.bhattacharya25b@gim.ac.in",
      delay: 0
>>>>>>> fb823838761326c63357728a1c358803d87667a5
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91-7548079216",
<<<<<<< HEAD
      link: "tel:+917548079216"
=======
      link: "tel:+917548079216",
      delay: 1
>>>>>>> fb823838761326c63357728a1c358803d87667a5
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Goa, India",
<<<<<<< HEAD
      link: "https://maps.google.com/?q=Goa,India"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      username: "@tuhinbhattacharya28",
      link: "https://www.linkedin.com/in/tuhinbhattacharya28",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Instagram,
      name: "Instagram",
      username: "@_threads_of_karma_",
      link: "https://www.instagram.com/_threads_of_karma_/",
      color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90"
=======
      link: "https://maps.google.com/?q=Goa,India",
      delay: 2
>>>>>>> fb823838761326c63357728a1c358803d87667a5
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
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-8 md:py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500">
            Get In Touch
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's connect and explore opportunities to collaborate on data analytics and business intelligence projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 md:w-7 md:h-7 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h2 className="text-lg md:text-xl font-bold mb-2">{info.title}</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{info.content}</p>
              </Card>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Connect on Social Media</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${social.color} text-white rounded-lg p-6 flex items-center justify-between transition-all duration-300 shadow-lg`}
                >
                  <div className="flex items-center">
                    <social.icon className="w-8 h-8 md:w-10 md:h-10 mr-4" />
                    <div>
                      <h3 className="text-lg md:text-xl font-bold">{social.name}</h3>
                      <p className="text-sm md:text-base opacity-90">{social.username}</p>
                    </div>
                  </div>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.a>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Send a Message</h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4 md:space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:text-white transition-all text-sm md:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:text-white transition-all text-sm md:text-base"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:text-white transition-all text-sm md:text-base"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:text-white h-32 md:h-40 resize-none transition-all text-sm md:text-base"
                  placeholder="Your message"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-500 text-white py-3 md:py-4 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-all shadow-lg text-sm md:text-base"
              >
                Send Message
              </motion.button>
            </form>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-8 md:mt-12 text-sm md:text-base text-gray-600 dark:text-gray-400"
        >
          <p>Open to opportunities in Business Intelligence, Data Analytics, and Product Development</p>
        </motion.div>
=======
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
>>>>>>> fb823838761326c63357728a1c358803d87667a5
      </div>
    </div>
  );
};

export default Contact;
