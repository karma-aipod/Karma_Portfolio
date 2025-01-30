import { motion } from "framer-motion";
import { MorphingText } from "@/components/ui/morphing-text";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

const Journey = () => {
  const journeyData = [
    {
      year: "2000",
      title: "Born",
      description: "Born in [Your Birthplace]",
      details: "A detailed story about your birth and early years...",
      image: "/path-to-baby-image.jpg"
    },
    {
      year: "2015",
      title: "High School",
      description: "Started High School Journey",
      details: "Detailed academic achievements and experiences...",
    },
    {
      year: "2019",
      title: "University",
      description: "Began Computer Science Degree",
      details: "In-depth about university life and projects...",
    },
    {
      year: "2025",
      title: "Career",
      description: "Professional Journey",
      details: "Current career achievements and goals...",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="hero min-h-[40vh] bg-gradient-to-r from-black via-gray-900 to-black">
        <MorphingText 
          texts={["My Journey", "Through Time", "2000 - 2025"]} 
          className="text-white"
        />
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />
          
          {journeyData.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger>
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}
                >
                  <Card className="w-[300px] p-6 hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white"
                         style={{ [index % 2 === 0 ? 'right' : 'left']: '-42px' }}
                    />
                    <h3 className="text-2xl font-bold text-blue-500">{item.year}</h3>
                    <h4 className="text-xl font-semibold mt-2">{item.title}</h4>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{item.title} - {item.year}</h2>
                  <p className="text-gray-700">{item.details}</p>
                  {item.image && (
                    <img src={item.image} alt={item.title} className="mt-4 rounded-lg" />
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;