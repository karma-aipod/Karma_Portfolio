import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-50 p-8"
    >
      <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden mb-12">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="flex h-full">
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              About Me
            </h1>
            <p className="mt-4 text-neutral-300 max-w-lg">
              I am an enthusiastic student eager to explore the diverse fields of industry related to data, management
              and engineering. I like working in a challenging and dynamic environment, exploring new opportunities on
              a daily basis. I love meeting and communicating with diverse people and would emerge as a key team
              player at workplace.
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default About;