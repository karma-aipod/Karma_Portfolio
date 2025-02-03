import { Card } from "@/components/ui/card";
import { Gravity, MatterBody } from "@/components/ui/gravity";

const Skills = () => {
  const skills = [
    {
      name: "VS Code",
      color: "bg-blue-500",
    },
    {
      name: "Git",
      color: "bg-orange-500",
    },
    {
      name: "React",
      color: "bg-cyan-500",
    },
    {
      name: "TypeScript",
      color: "bg-blue-600",
    },
    {
      name: "Tailwind CSS",
      color: "bg-teal-500",
    },
    {
      name: "Node.js",
      color: "bg-green-600",
    },
    {
      name: "Framer Motion",
      color: "bg-purple-500",
    },
    {
      name: "Shadcn/ui",
      color: "bg-gray-800",
    },
    {
      name: "Matter.js",
      color: "bg-red-500",
    },
    {
      name: "Vite",
      color: "bg-yellow-500",
    },
    {
      name: "ESLint",
      color: "bg-violet-500",
    },
    {
      name: "npm",
      color: "bg-red-600",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Things Used in this project
        </h1>
        <Card className="w-full min-h-[500px] relative overflow-hidden mb-12">
          <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
            {skills.map((skill, idx) => (
              <MatterBody
                key={idx}
                matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                x={`${(idx * 20) % 80 + 10}%`}
                y={`${(idx * 15) % 60 + 10}%`}
                angle={Math.random() * 20 - 10}
              >
                <div className={`text-lg sm:text-xl md:text-2xl ${skill.color} text-white rounded-full hover:cursor-grab px-6 py-3`}>
                  {skill.name}
                </div>
              </MatterBody>
            ))}
          </Gravity>
        </Card>
      </div>
    </div>
  );
};

export default Skills;