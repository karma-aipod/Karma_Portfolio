import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Journey = () => {
  const journeyData = [
    {
      year: "2000",
      title: "Early Years",
      description: "The beginning of my journey",
      details: "A detailed look at my early years",
      content: (
        <Tabs defaultValue="birth" className="w-full">
          <TabsList className="w-full justify-start mb-4">
            <TabsTrigger value="birth">Birth</TabsTrigger>
            <TabsTrigger value="childhood">Childhood</TabsTrigger>
            <TabsTrigger value="education">Early Education</TabsTrigger>
          </TabsList>
          <TabsContent value="birth">
            <div className="space-y-4">
              <p className="text-muted-foreground">Born in New York City</p>
              <img 
                src="/lovable-uploads/placeholder.jpg" 
                alt="Birth"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent value="childhood">
            <div className="space-y-4">
              <p className="text-muted-foreground">Growing up in the city that never sleeps</p>
              <img 
                src="/lovable-uploads/placeholder.jpg" 
                alt="Childhood"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent value="education">
            <div className="space-y-4">
              <p className="text-muted-foreground">First steps in education</p>
              <img 
                src="/lovable-uploads/placeholder.jpg" 
                alt="Education"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </TabsContent>
        </Tabs>
      )
    },
    {
      year: "2015",
      title: "Academic Journey",
      description: "The pivotal years of my education",
      details: "A detailed look at my academic achievements",
      content: (
        <Tabs defaultValue="highSchool" className="w-full">
          <TabsList className="w-full justify-start mb-4">
            <TabsTrigger value="highSchool">High School</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
          </TabsList>
          <TabsContent value="highSchool">
            <div className="space-y-4">
              <p className="text-muted-foreground">Excellence in Sciences and Mathematics</p>
              <img 
                src="/lovable-uploads/placeholder.jpg" 
                alt="High School"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent value="achievements">
            <div className="space-y-4">
              <p className="text-muted-foreground">Multiple academic awards and recognitions</p>
              <img 
                src="/lovable-uploads/placeholder.jpg" 
                alt="Achievements"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent value="activities">
            <div className="space-y-4">
              <p className="text-muted-foreground">Leadership roles and extracurricular activities</p>
              <img 
                src="/lovable-uploads/placeholder.jpg" 
                alt="Activities"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </TabsContent>
        </Tabs>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* 3D Tab Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center perspective-1000">
        <motion.div 
          initial={{ rotateX: 20, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl transform-gpu"
        >
          <Card className="p-8 bg-white/10 backdrop-blur-md border-none shadow-2xl hover:scale-105 transition-transform duration-300">
            <Tabs defaultValue="journey" className="w-full">
              <TabsList className="w-full mb-4">
                <TabsTrigger value="journey">My Journey</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="milestones">Milestones</TabsTrigger>
              </TabsList>
              <TabsContent value="journey" className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">My Journey</h1>
                <p className="text-lg text-muted-foreground">Exploring the path that led me here</p>
              </TabsContent>
              <TabsContent value="timeline" className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Through Time</h1>
                <p className="text-lg text-muted-foreground">A chronological adventure</p>
              </TabsContent>
              <TabsContent value="milestones" className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">2000 - 2025</h1>
                <p className="text-lg text-muted-foreground">Key moments that shaped my path</p>
              </TabsContent>
            </Tabs>
          </Card>
        </motion.div>
      </div>

      {/* Velocity Scroll Divider */}
      <div className="h-32 overflow-hidden">
        <VelocityScroll 
          text="MY JOURNEY THROUGH TIME • MY JOURNEY THROUGH TIME •" 
          default_velocity={3}
          className="text-primary/50 font-bold"
        />
      </div>

      {/* Timeline Section */}
      <div className="relative z-10 -mt-20">
        <Timeline data={journeyData} />
      </div>
    </div>
  );
};

export default Journey;