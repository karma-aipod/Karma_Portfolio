import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { MorphingText } from "@/components/ui/morphing-text";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Journey = () => {
  const journeyData = [
    {
      year: "2000",
      title: "Born",
      description: "Started my journey in this world",
      details: "Born in a beautiful day",
      image: "/lovable-uploads/d5a2c8c2-492b-4128-b7d3-65b94deb152b.png"
    },
    {
      year: "2016",
      title: "10th Grade",
      description: "Completed Secondary Education",
      details: "Finished my 10th grade with excellent grades",
      image: "/lovable-uploads/d5a2c8c2-492b-4128-b7d3-65b94deb152b.png"
    },
    {
      year: "2018",
      title: "12th Grade",
      description: "Completed Higher Secondary",
      details: "Successfully completed 12th grade",
      image: "/lovable-uploads/d5a2c8c2-492b-4128-b7d3-65b94deb152b.png"
    },
    {
      year: "2019",
      title: "College Journey Begins",
      description: "Started College Education",
      details: "Embarked on my college journey",
      image: "/lovable-uploads/d5a2c8c2-492b-4128-b7d3-65b94deb152b.png"
    },
    {
      year: "2023",
      title: "Graduation",
      description: "Completed College Education",
      details: "Successfully graduated from college",
      image: "/lovable-uploads/d5a2c8c2-492b-4128-b7d3-65b94deb152b.png"
    },
    {
      year: "2023",
      title: "First Job",
      description: "Started Professional Career",
      details: "Joined my first company and gained valuable experience",
      image: "/lovable-uploads/d5a2c8c2-492b-4128-b7d3-65b94deb152b.png"
    }
  ];

  const morphingTexts = [
    "My Journey",
    "Through Time",
    "Life Events",
    "Milestones",
    "Achievements"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* 3D Tab Hero Section */}
        <div className="relative min-h-[40vh] flex items-center justify-center perspective-1000 mb-16">
          <motion.div 
            initial={{ rotateX: 20, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full transform-gpu"
          >
            <Card className="p-8 bg-white/10 backdrop-blur-md border-none shadow-2xl">
              <MorphingText texts={morphingTexts} />
            </Card>
          </motion.div>
        </div>

        {/* Velocity Scroll Divider */}
        <div className="h-32 overflow-hidden mb-8">
          <VelocityScroll 
            text="MY JOURNEY THROUGH TIME • MY JOURNEY THROUGH TIME •" 
            default_velocity={3}
            className="text-primary/50 font-bold"
          />
        </div>

        {/* Journey Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xl text-muted-foreground">
            This is how my journey looks like, hope you like it.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative z-10">
          <Timeline data={journeyData} />
        </div>
      </div>
    </div>
  );
};

export default Journey;