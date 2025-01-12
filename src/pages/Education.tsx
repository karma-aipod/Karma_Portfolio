import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      year: "2019 - 2023",
      degree: "Bachelor of Technology in Computer Science",
      institution: "Harvard University",
      description: "Focused on software engineering and web development technologies."
    },
    {
      year: "2017 - 2019",
      degree: "Higher Secondary Education",
      institution: "St. Xavier's College",
      description: "Specialized in Science with Computer Applications."
    },
    {
      year: "2015 - 2017",
      degree: "Secondary Education",
      institution: "Delhi Public School",
      description: "Completed with distinction in Mathematics and Science."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <h1 className="text-4xl font-bold text-center mb-16">Education Journey</h1>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
            
            {educationData.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                degree={item.degree}
                institution={item.institution}
                description={item.description}
                side={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const TimelineItem = ({ year, degree, institution, description, side }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex justify-${side === 'left' ? 'start' : 'end'} w-full mb-16`}
    >
      <div className={`w-5/12 ${side === 'right' && 'ml-auto'}`}>
        <div className="bg-white p-6 rounded-lg shadow-lg relative">
          {/* Timeline point */}
          <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-yellow-500 border-4 border-white shadow-lg"
               style={{ 
                 [side === 'left' ? 'right' : 'left']: '-42px'
               }}
          ></div>
          <span className="text-yellow-500 font-bold">{year}</span>
          <h3 className="text-xl font-bold mt-2">{degree}</h3>
          <p className="text-gray-600 mt-2">{institution}</p>
          <p className="text-gray-500 mt-2 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;