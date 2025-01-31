import { MorphingText } from "@/components/ui/morphing-text";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const timelineEvents = [
  {
    year: "2000",
    title: "Born",
    description: "Started my journey in this world",
    image: "/lovable-uploads/placeholder.svg"
  },
  {
    year: "2016",
    title: "Finished 10th Grade",
    description: "Completed my secondary education",
    image: "/lovable-uploads/placeholder.svg"
  },
  {
    year: "2018",
    title: "Finished 12th Grade",
    description: "Completed my higher secondary education",
    image: "/lovable-uploads/placeholder.svg"
  },
  {
    year: "2019",
    title: "Started College",
    description: "Began my journey in higher education",
    image: "/lovable-uploads/placeholder.svg"
  },
  {
    year: "2023",
    title: "Graduated College",
    description: "Successfully completed my degree",
    image: "/lovable-uploads/placeholder.svg"
  },
  {
    year: "2023",
    title: "First Job",
    description: "Started and completed my first professional experience",
    image: "/lovable-uploads/placeholder.svg"
  }
];

const Journey = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-24">
        {/* Hero Section with Morphing Text */}
        <div className="mb-16">
          <MorphingText
            texts={[
              "My Journey",
              "My Story",
              "My Path",
              "My Adventure",
              "My Experience"
            ]}
          />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl text-center text-muted-foreground mb-16"
        >
          This is how my journey looks like, hope you like it.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/4 transform -translate-x-1/2 w-0.5 h-full bg-border" />

          {/* Timeline events */}
          {timelineEvents.map((event, index) => (
            <motion.div
              key={`${event.year}-${index}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex mb-12"
            >
              <div className="w-1/4 text-right pr-8">
                <span className="text-2xl font-bold">{event.year}</span>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="w-3/4 pl-8 bg-card rounded-lg p-6 shadow-lg cursor-pointer"
                  >
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </motion.div>
                </DialogTrigger>
                <DialogContent>
                  <div className="space-y-4">
                    <img src={event.image} alt={event.title} className="w-full rounded-lg" />
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;