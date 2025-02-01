import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MorphingText } from "@/components/ui/morphing-text";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

const Journey = () => {
  const journeyData = [
    {
      year: "2000",
      title: "Born",
      description: "My journey begins",
      details: "Born in a loving family",
      type: "image",
      image: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7",
    },
    {
      year: "2016",
      title: "10th Grade",
      description: "Completed Secondary Education",
      details: "Finished my 10th grade with distinction",
      type: "text",
    },
    {
      year: "2018",
      title: "12th Grade",
      description: "Completed Higher Secondary",
      details: "Graduated high school with focus on science",
      type: "image",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
    },
    {
      year: "2019",
      title: "Started College",
      description: "Began University Journey",
      details: "Started pursuing Computer Science",
      type: "text",
    },
    {
      year: "2023",
      title: "Graduated College",
      description: "Completed Bachelor's Degree",
      details: "Graduated with honors in Computer Science",
      type: "image",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
    },
    {
      year: "2023",
      title: "First Job",
      description: "Started Professional Career",
      details: "Joined and explored the corporate world",
      type: "text",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Hero Section with 3D Card */}
        <motion.div 
          className="mb-16 perspective-1000"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 transform-gpu hover:rotate-x-12 transition-transform duration-500 bg-card/50 backdrop-blur-sm border-2">
            <MorphingText 
              texts={[
                "My Journey",
                "Through Time",
                "Life Story",
                "Milestones",
                "Achievements"
              ]} 
              className="text-4xl md:text-6xl font-bold text-center"
            />
          </Card>
        </motion.div>

        {/* Velocity Scroll Divider */}
        <div className="w-full my-12 overflow-hidden">
          <VelocityScroll 
            text="MY JOURNEY THROUGH THE YEARS • MY JOURNEY THROUGH THE YEARS •" 
            default_velocity={3}
            className="text-2xl font-bold text-primary/50 w-full"
          />
        </div>

        {/* Timeline Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {journeyData.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="cursor-pointer"
                >
                  <Card className="overflow-hidden hover:scale-105 transition-transform duration-300">
                    {item.type === "image" ? (
                      <div className="w-full h-48">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="p-6 h-48 flex flex-col justify-center items-center bg-primary/5">
                        <h3 className="text-2xl font-bold mb-2">{item.year}</h3>
                        <p className="text-lg text-center text-muted-foreground">{item.title}</p>
                      </div>
                    )}
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <div className="grid gap-4">
                  <h2 className="text-2xl font-bold">{item.year} - {item.title}</h2>
                  {item.type === "image" && (
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  )}
                  <p className="text-muted-foreground">{item.details}</p>
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