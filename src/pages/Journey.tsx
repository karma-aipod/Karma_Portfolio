import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

const Journey = () => {
  const journeyData = [
    {
      year: "2015",
      title: "High School",
      description: "Excellence in Sciences and Mathematics",
      details: "Graduated with honors",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      content: (
        <Tabs defaultValue="academics" className="w-full">
          <TabsList className="w-full justify-start mb-4">
            <TabsTrigger value="academics">Academics</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
          </TabsList>
          <TabsContent value="academics">
            <p className="text-muted-foreground">Excelled in STEM subjects with a focus on computer science</p>
          </TabsContent>
          <TabsContent value="activities">
            <p className="text-muted-foreground">Led the school's programming club</p>
          </TabsContent>
        </Tabs>
      )
    },
    {
      year: "2019",
      title: "University",
      description: "Computer Science Major",
      details: "Bachelor's Degree",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      content: (
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="w-full justify-start mb-4">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="courses">
            <p className="text-muted-foreground">Advanced algorithms and data structures</p>
          </TabsContent>
          <TabsContent value="projects">
            <p className="text-muted-foreground">Built a full-stack web application</p>
          </TabsContent>
        </Tabs>
      )
    }
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
            <Card className="p-8 bg-white/10 backdrop-blur-md border-none shadow-2xl hover:scale-105 transition-transform duration-300">
              <Tabs defaultValue="journey" className="w-full">
                <TabsList className="w-full mb-4">
                  <TabsTrigger value="journey">My Journey</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                  <TabsTrigger value="milestones">Milestones</TabsTrigger>
                </TabsList>
                <TabsContent value="journey" className="text-center">
                  <motion.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                  >
                    My Journey
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-lg text-muted-foreground"
                  >
                    Exploring the path that led me here
                  </motion.p>
                </TabsContent>
                <TabsContent value="timeline" className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">Through Time</h1>
                  <p className="text-lg text-muted-foreground">A chronological adventure</p>
                </TabsContent>
                <TabsContent value="milestones" className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">2015 - 2023</h1>
                  <p className="text-lg text-muted-foreground">Key moments that shaped my path</p>
                </TabsContent>
              </Tabs>
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