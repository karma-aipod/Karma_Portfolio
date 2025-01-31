import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { Card } from "@/components/ui/card";
import { MorphingText } from "@/components/ui/morphing-text";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Journey = () => {
  const journeyData = [
    {
      year: "2000",
      title: "Born",
      description: "My journey begins",
      details: "Born in a loving family",
      image: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7",
    },
    {
      year: "2016",
      title: "10th Grade",
      description: "Completed Secondary Education",
      details: "Finished my 10th grade with distinction",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    },
    {
      year: "2018",
      title: "12th Grade",
      description: "Completed Higher Secondary",
      details: "Graduated high school with focus on science",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
    },
    {
      year: "2019",
      title: "Started College",
      description: "Began University Journey",
      details: "Started pursuing Computer Science",
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a",
    },
    {
      year: "2023",
      title: "Graduated College",
      description: "Completed Bachelor's Degree",
      details: "Graduated with honors in Computer Science",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
    },
    {
      year: "2023",
      title: "First Job",
      description: "Started Professional Career",
      details: "Joined and explored the corporate world",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Hero Section with Morphing Text */}
        <div className="mb-16">
          <MorphingText 
            texts={[
              "My Journey",
              "Through Time",
              "Life Story",
              "Milestones",
              "Achievements"
            ]} 
          />
        </div>

        {/* Timeline Section */}
        <div className="relative">
          <Timeline 
            data={journeyData.map(item => ({
              ...item,
              content: (
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="p-6 cursor-pointer hover:scale-105 transition-transform">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <div className="grid gap-4">
                      {item.image && (
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      )}
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.details}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              )
            }))}
          />
        </div>
      </div>
    </div>
  );
};

export default Journey;