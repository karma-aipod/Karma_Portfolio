import { Card } from "@/components/ui/card";
import { Gravity, MatterBody } from "@/components/ui/gravity";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { MorphingText } from "@/components/ui/morphing-text";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "Power BI", color: "bg-yellow-500" },
<<<<<<< HEAD
    { name: "SQL", color: "bg-blue-500" },
    { name: "Python", color: "bg-green-600" },
    { name: "DAX", color: "bg-orange-500" },
    { name: "Excel", color: "bg-emerald-600" },
    { name: "Power Query", color: "bg-cyan-500" },
    { name: "Data Modeling", color: "bg-purple-500" },
    { name: "ETL", color: "bg-indigo-500" },
    { name: "ASPEN", color: "bg-red-500" },
    { name: "BI Development", color: "bg-teal-500" },
    { name: "KPI Design", color: "bg-pink-500" },
    { name: "Analytics", color: "bg-violet-500" }
  ];

  const skillSlugs = [
    "microsoftpowerbi",
    "python",
    "mysql",
    "microsoftexcel",
    "postgresql",
    "microsoftsqlserver",
    "pandas",
    "numpy",
    "jupyter"
  ];

  const topSkills = [
    { name: "Microsoft Power BI", proficiency: 95 },
    { name: "SQL", proficiency: 90 },
    { name: "DAX (Data Analysis Expressions)", proficiency: 95 },
    { name: "MS Excel", proficiency: 90 },
    { name: "Python", proficiency: 80 }
=======
    { name: "Power Query", color: "bg-emerald-600" },
    { name: "MS Excel", color: "bg-green-600" },
    { name: "SQL", color: "bg-blue-600" },
    { name: "Python", color: "bg-indigo-600" },
    { name: "DAX", color: "bg-purple-600" },
    { name: "Data Modeling", color: "bg-pink-600" },
    { name: "ETL", color: "bg-cyan-600" },
    { name: "Documentation", color: "bg-gray-700" },
    { name: "Git", color: "bg-orange-500" },
    { name: "Jupyter", color: "bg-amber-600" },
    { name: "Visualization", color: "bg-teal-600" }
  ];

  const skillSlugs = [
    "powerbi",
    "microsoftsqlserver",
    "mysql",
    "postgresql",
    "python",
    "anaconda",
    "jupyter",
    "pandas",
    "numpy",
    "microsoftexcel",
    "git",
    "github",
  ];

  const topSkills = [
    { name: "SQL", proficiency: 90 },
    { name: "Power BI", proficiency: 90 },
    { name: "DAX", proficiency: 85 },
    { name: "MS Excel", proficiency: 85 },
    { name: "Python", proficiency: 75 },
>>>>>>> fb823838761326c63357728a1c358803d87667a5
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <Card className="w-full min-h-[40vh] md:min-h-[50vh] relative overflow-hidden mb-8 md:mb-12">
          <div className="absolute inset-0">
            <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
              <div className="absolute inset-x-0 top-4 md:top-8 z-10">
                <MorphingText
                  texts={["Core Competencies", "Technical Skills", "Tools & Technologies"]}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 px-4"
                />
              </div>
              {skills.map((skill, idx) => (
                <MatterBody
                  key={idx}
                  matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                  x={`${(idx * 20) % 80 + 10}%`}
                  y={`${(idx * 15) % 60 + 10}%`}
                  angle={Math.random() * 20 - 10}
                >
                  <div className={`text-sm sm:text-base md:text-lg lg:text-xl ${skill.color} text-white rounded-full hover:cursor-grab px-4 py-2 md:px-6 md:py-3 whitespace-nowrap`}>
                    {skill.name}
                  </div>
                </MatterBody>
              ))}
            </Gravity>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="relative flex items-center justify-center overflow-hidden rounded-lg border bg-background p-6 md:p-8 min-h-[300px] md:min-h-[400px]">
            <IconCloud iconSlugs={skillSlugs} />
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-card rounded-lg p-6 md:p-8 shadow-lg cursor-pointer"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-yellow-600 dark:text-yellow-500">Top Skills</h3>
            <div className="space-y-4 md:space-y-6">
              {topSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm md:text-base">{skill.name}</span>
                    <span className="text-sm md:text-base">{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-yellow-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Additional Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {["Data Modeling", "ETL Best Practices", "KPI Design", "Performance Tuning", "Dashboard Development", "Time Intelligence"].map((expertise, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-xs md:text-sm font-medium"
                  >
                    {expertise}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
