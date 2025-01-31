import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Gravity, MatterBody } from "@/components/ui/gravity";

const Skills = () => {
  const skills = [
    {
      category: "Programming",
      items: ["JavaScript", "TypeScript", "Python", "Java", "C++"]
    },
    {
      category: "Web Technologies",
      items: ["React", "Node.js", "HTML5", "CSS3", "TailwindCSS"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Docker", "AWS", "VS Code", "Figma"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24">
      <div className="container mx-auto px-6">
        <Card className="w-full min-h-[500px] relative overflow-hidden mb-12">
          <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
            {skills.map((category, idx) => 
              category.items.map((skill, skillIdx) => (
                <MatterBody
                  key={`${idx}-${skillIdx}`}
                  matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                  x={`${(skillIdx * 20 + idx * 30) % 80 + 10}%`}
                  y={`${(skillIdx * 15 + idx * 25) % 60 + 10}%`}
                  angle={Math.random() * 20 - 10}
                >
                  <div className="text-lg sm:text-xl md:text-2xl bg-primary text-primary-foreground rounded-full hover:cursor-grab px-6 py-3">
                    {skill}
                  </div>
                </MatterBody>
              ))
            )}
          </Gravity>
        </Card>
      </div>
    </div>
  );
};

export default Skills;