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
      tabs: [
        {
          title: "Birth",
          content: "Born in [Your Birthplace]",
          image: "/lovable-uploads/placeholder.jpg"
        },
        {
          title: "Childhood",
          content: "Early childhood memories and achievements",
          image: "/lovable-uploads/placeholder.jpg"
        }
      ]
    },
    {
      year: "2015",
      title: "Academic Journey",
      tabs: [
        {
          title: "High School",
          content: "Started High School with focus on sciences",
          image: "/lovable-uploads/placeholder.jpg"
        },
        {
          title: "Achievements",
          content: "Won several academic competitions",
          image: "/lovable-uploads/placeholder.jpg"
        }
      ]
    },
    {
      year: "2019",
      title: "Higher Education",
      tabs: [
        {
          title: "University",
          content: "Began Computer Science degree",
          image: "/lovable-uploads/placeholder.jpg"
        },
        {
          title: "Projects",
          content: "Worked on various coding projects",
          image: "/lovable-uploads/placeholder.jpg"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* 3D Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center perspective-1000">
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
        <Timeline data={journeyData.map(item => ({
          year: item.year,
          title: item.title,
          content: (
            <Dialog>
              <DialogTrigger>
                <Card className="w-full p-6 hover:shadow-xl transition-shadow">
                  <Tabs defaultValue={item.tabs[0].title} className="w-full">
                    <TabsList className="w-full justify-start mb-4">
                      {item.tabs.map(tab => (
                        <TabsTrigger key={tab.title} value={tab.title}>
                          {tab.title}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {item.tabs.map(tab => (
                      <TabsContent key={tab.title} value={tab.title} className="mt-0">
                        <div className="space-y-4">
                          <p className="text-muted-foreground">{tab.content}</p>
                          {tab.image && (
                            <img 
                              src={tab.image} 
                              alt={tab.title} 
                              className="rounded-lg w-full h-48 object-cover"
                            />
                          )}
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <Tabs defaultValue={item.tabs[0].title} className="w-full">
                  <TabsList className="w-full justify-start mb-4">
                    {item.tabs.map(tab => (
                      <TabsTrigger key={tab.title} value={tab.title}>
                        {tab.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {item.tabs.map(tab => (
                    <TabsContent key={tab.title} value={tab.title}>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold">{item.title} - {tab.title}</h3>
                        <p className="text-muted-foreground">{tab.content}</p>
                        {tab.image && (
                          <img 
                            src={tab.image} 
                            alt={tab.title} 
                            className="rounded-lg w-full"
                          />
                        )}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </DialogContent>
            </Dialog>
          )
        }))} />
      </div>
    </div>
  );
};

export default Journey;