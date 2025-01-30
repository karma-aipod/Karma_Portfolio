import { motion } from "framer-motion";
import { MorphingText } from "@/components/ui/morphing-text";
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
        <Card className="w-full p-6 hover:shadow-xl transition-shadow">
          <Tabs defaultValue="birth" className="w-full">
            <TabsList className="w-full justify-start mb-4">
              <TabsTrigger value="birth">Birth</TabsTrigger>
              <TabsTrigger value="childhood">Childhood</TabsTrigger>
            </TabsList>
            <TabsContent value="birth">
              <div className="space-y-4">
                <p className="text-muted-foreground">Born in [Your Birthplace]</p>
                <img 
                  src="/lovable-uploads/placeholder.jpg" 
                  alt="Birth"
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </TabsContent>
            <TabsContent value="childhood">
              <div className="space-y-4">
                <p className="text-muted-foreground">Early childhood memories and achievements</p>
                <img 
                  src="/lovable-uploads/placeholder.jpg" 
                  alt="Childhood"
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      )
    },
    {
      year: "2015",
      title: "Academic Journey",
      description: "The pivotal years of my education",
      details: "A detailed look at my academic achievements",
      content: (
        <Card className="w-full p-6 hover:shadow-xl transition-shadow">
          <Tabs defaultValue="highSchool" className="w-full">
            <TabsList className="w-full justify-start mb-4">
              <TabsTrigger value="highSchool">High School</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
            <TabsContent value="highSchool">
              <div className="space-y-4">
                <p className="text-muted-foreground">Started High School with focus on sciences</p>
                <img 
                  src="/lovable-uploads/placeholder.jpg" 
                  alt="High School"
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </TabsContent>
            <TabsContent value="achievements">
              <div className="space-y-4">
                <p className="text-muted-foreground">Won several academic competitions</p>
                <img 
                  src="/lovable-uploads/placeholder.jpg" 
                  alt="Achievements"
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      )
    },
    {
      year: "2019",
      title: "Higher Education",
      description: "The start of my university journey",
      details: "A detailed look at my university projects",
      content: (
        <Card className="w-full p-6 hover:shadow-xl transition-shadow">
          <Tabs defaultValue="university" className="w-full">
            <TabsList className="w-full justify-start mb-4">
              <TabsTrigger value="university">University</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="university">
              <div className="space-y-4">
                <p className="text-muted-foreground">Began Computer Science degree</p>
                <img 
                  src="/lovable-uploads/placeholder.jpg" 
                  alt="University"
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </TabsContent>
            <TabsContent value="projects">
              <div className="space-y-4">
                <p className="text-muted-foreground">Worked on various coding projects</p>
                <img 
                  src="/lovable-uploads/placeholder.jpg" 
                  alt="Projects"
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center">
        <motion.div 
          className="w-full max-w-4xl"
          initial={{ rotateX: 20 }}
          animate={{ rotateX: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-8 bg-white/10 backdrop-blur-md border-none shadow-2xl transform-gpu hover:scale-105 transition-transform duration-300">
            <MorphingText 
              texts={["My Journey", "Through Time", "2000 - 2025"]} 
              className="text-4xl md:text-6xl text-center text-white"
            />
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
