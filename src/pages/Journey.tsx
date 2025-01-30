import { motion } from "framer-motion";
import { MorphingText } from "@/components/ui/morphing-text";
import { Timeline } from "@/components/ui/timeline";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Journey = () => {
  const journeyData = [
    {
      year: "2000",
      title: "Born",
      description: "Born in [Your Birthplace]",
      details: "A detailed story about your birth and early years...",
      image: "/lovable-uploads/placeholder.jpg"
    },
    {
      year: "2015",
      title: "High School",
      description: "Started High School Journey",
      details: "Detailed academic achievements and experiences...",
      image: "/lovable-uploads/placeholder.jpg"
    },
    {
      year: "2019",
      title: "University",
      description: "Began Computer Science Degree",
      details: "In-depth about university life and projects...",
      image: "/lovable-uploads/placeholder.jpg"
    },
    {
      year: "2025",
      title: "Career",
      description: "Professional Journey",
      details: "Current career achievements and goals...",
      image: "/lovable-uploads/placeholder.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative min-h-[60vh] bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center">
        <Card className="absolute w-full max-w-3xl mx-auto p-8 bg-white/10 backdrop-blur-md border-none shadow-2xl transform-gpu hover:scale-105 transition-transform duration-300">
          <MorphingText 
            texts={["My Journey", "Through Time", "2000 - 2025"]} 
            className="text-white"
          />
        </Card>
      </div>
      
      <div className="relative z-10 -mt-20">
        <Timeline data={journeyData.map(item => ({
          ...item,
          content: (
            <Dialog>
              <DialogTrigger>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                  {item.image && (
                    <img src={item.image} alt={item.title} className="mt-4 rounded-lg w-full h-48 object-cover" />
                  )}
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{item.title} - {item.year}</h2>
                  <p className="text-gray-700 mb-4">{item.details}</p>
                  {item.image && (
                    <img src={item.image} alt={item.title} className="rounded-lg w-full" />
                  )}
                </div>
              </DialogContent>
            </Dialog>
          )
        }))} />
      </div>
    </div>
  );
};

export default Journey;