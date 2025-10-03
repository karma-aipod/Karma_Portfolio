import { motion } from "framer-motion";
<<<<<<< HEAD
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  company: string;
  duration: string;
  thumbnail: string;
  shortDescription: string;
  fullDescription: string;
  achievements: string[];
  technologies: string[];
  impact: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "SUJAN P&L Report",
      company: "Celebal Technologies",
      duration: "July 2023 - Dec 2023",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
      shortDescription: "Comprehensive 54-page Power BI financial reporting solution with advanced DAX measures and time intelligence.",
      fullDescription: "Led the development of an enterprise-grade Power BI Profit & Loss reporting solution for SUJAN, transforming static financial reporting into a dynamic, interactive business intelligence platform. The solution empowered leadership with real-time insights and reduced query response times significantly.",
      achievements: [
        "Contributed to a 4-member team to devise a 54-page Power BI report",
        "Constructed report with over 300 DAX measures",
        "Enhanced the report UI with custom visuals and dynamic slicers for intuitive data exploration",
        "Secured a 40% reduction in query loading times across 10+ queries by inspecting and refining DAX measures",
        "Implemented advanced time-intelligence functions to enable comprehensive period-over-period financial analysis",
        "Delivered a robust BI solution that replaced static reporting and empowered leadership with dynamic, actionable insights"
      ],
      technologies: ["Power BI", "DAX", "Power Query", "SQL", "Data Modeling"],
      impact: "Transformed financial reporting process, enabling faster decision-making and improved operational efficiency across the organization."
    },
    {
      id: 2,
      title: "Pure Storage - Internal Project",
      company: "Celebal Technologies",
      duration: "July 2023 - Dec 2023",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      shortDescription: "Comprehensive KPI standardization and documentation project for enterprise data integrity.",
      fullDescription: "Spearheaded an internal initiative to standardize metrics and establish a single source of truth across five projects. Created reproducible documentation that enhanced project accessibility and accelerated future development cycles.",
      achievements: [
        "Teamed up with five members to define 150+ KPIs across five projects in two weeks",
        "Translated over 50 complex SQL/DAX queries into clear documentation, ensuring project clarity and on-time delivery",
        "Authored a comprehensive knowledge base that enhanced project accessibility and understanding for all team members",
        "Drove the standardisation of metrics to establish a single source of truth, ensuring data integrity across all projects",
        "Enabled effective team collaboration and accelerated future development by creating a centralised repository of business logic"
      ],
      technologies: ["SQL", "DAX", "Documentation", "KPI Design", "Data Governance"],
      impact: "Established data governance framework that improved cross-team collaboration and reduced redundancy in metric definitions."
    },
    {
      id: 3,
      title: "Hydrogen Production & Carbon Footprint Analysis",
      company: "ONGC R&D Project",
      duration: "2019 - 2023",
      thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2940&auto=format&fit=crop",
      shortDescription: "Sustainability simulation project for hydrogen production using biomass gasification.",
      fullDescription: "Designed and executed a sophisticated data simulation of biomass gasification process using ASPEN software as part of a research initiative to develop sustainable hydrogen production methods and reduce carbon footprint.",
      achievements: [
        "Designed a sophisticated data simulation of biomass gasification in a 5-member team using ASPEN software",
        "Validated a method to extract 99% pure hydrogen by analysing simulation data",
        "Proved a process to reduce the carbon footprint through sustainable hydrogen production",
        "Delivered a data-backed proof-of-concept for a viable and sustainable hydrogen production method"
      ],
      technologies: ["ASPEN Software", "Data Simulation", "Chemical Engineering", "Research & Development"],
      impact: "Contributed to sustainable energy research with potential applications in clean hydrogen production and carbon footprint reduction."
    },
    {
      id: 4,
      title: "Aqueous Retarded Acid Formulation",
      company: "ONGC R&D Project",
      duration: "2019 - 2023",
      thumbnail: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop",
      shortDescription: "R&D project to develop optimal acid formulation for limestone reservoir applications.",
      fullDescription: "Participated in a 6-member R&D team to identify and develop an optimal acid formulation solution for limestone reservoirs in oil and gas production, combining extensive research analysis with practical feasibility assessment.",
      achievements: [
        "Identified an optimal solution to a complex engineering challenge as part of a 6-member R&D team",
        "Defined an effective acid formulation for limestone reservoirs by synthesising extensive research data",
        "Assessed the solution's technical feasibility by gaining hands-on expertise in oil and gas production techniques"
      ],
      technologies: ["Chemical Engineering", "Research Methodology", "Data Synthesis", "Technical Analysis"],
      impact: "Developed practical solution for enhanced oil recovery with potential applications in petroleum engineering."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-8 md:py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500">
            Projects & Experience
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my journey through data analytics, business intelligence, and engineering projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <Card className="overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 h-full">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                    {project.company}
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-yellow-600 dark:text-yellow-500 font-medium mb-3">
                    {project.duration}
                  </p>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center text-yellow-600 dark:text-yellow-500 text-sm font-semibold">
                    <span>View Details</span>
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </DialogTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
                    <span className="text-sm md:text-base text-yellow-600 dark:text-yellow-500 font-semibold">
                      {selectedProject.company}
                    </span>
                    <span className="hidden sm:inline text-gray-400">•</span>
                    <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                      {selectedProject.duration}
                    </span>
                  </div>
                </DialogHeader>

                <div className="mt-4 space-y-6">
                  <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.thumbnail}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-2">Overview</h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {selectedProject.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-yellow-500 mr-2 mt-1 flex-shrink-0">•</span>
                          <span className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-xs md:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                    <h4 className="text-base md:text-lg font-semibold mb-2">Impact</h4>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 italic">
                      {selectedProject.impact}
                    </p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
=======
import { Github, Link as LinkIcon } from "lucide-react";
import React from "react";

 type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "SUJAN P&L Report (Celebal Technologies)",
    description:
      "Built a 54-page Power BI P&L with 300+ DAX and advanced time intelligence; redesigned UX with custom visuals, slicers, and bookmarks; reduced query load times by ~40% via Performance Analyzer.",
    tech: ["Power BI", "DAX", "Power Query", "MS Excel"],
  },
  {
    title: "Pure Storage – KPI System (Internal)",
    description:
      "Organized detailed KPI sheets across 5 projects (150+ KPIs) and documented 200+ SQL/DAX queries to improve clarity and delivery.",
    tech: ["SQL", "DAX", "Power BI", "Documentation"],
  },
  {
    title: "Hydrogen Production & Carbon Footprint Analysis (ONGC)",
    description:
      "Simulated biomass gasification using ASPEN-Plus/HYSYS; demonstrated method to extract 99% pure hydrogen to reduce carbon footprint.",
    tech: ["ASPEN-Plus", "ASPEN-HYSYS", "Simulation", "Process"],
  },
  {
    title: "Aqueous Retarded Acid Formulation (ONGC)",
    description:
      "Researched and devised solution to slow limestone–HCl reaction; gained field exposure to Surface Christmas Tree and stimulation techniques.",
    tech: ["Chemical Eng.", "Optimization", "Field Ops"],
  },
];

const Chip = ({ label }: { label: string }) => (
  <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-300 rounded-full text-sm">
    {label}
  </span>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.article
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.35 }}
    className="bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
  >
    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{project.title}</h3>
    <p className="text-neutral-600 dark:text-neutral-300 mt-2">{project.description}</p>
    <div className="flex flex-wrap gap-2 mt-4">
      {project.tech.map((t) => (
        <Chip key={t} label={t} />
      ))}
    </div>
    <div className="flex gap-6 mt-6 text-blue-600 dark:text-blue-400">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80"
        >
          <Github size={18} />
          <span>GitHub</span>
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80"
        >
          <LinkIcon size={18} />
          <span>Live Demo</span>
        </a>
      )}
    </div>
  </motion.article>
);

const Projects = () => {
  return (
    <main className="min-h-screen pt-16 bg-white dark:bg-black">
      <section className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-neutral-900 dark:text-white">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.slice(3).map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
    </main>
>>>>>>> fb823838761326c63357728a1c358803d87667a5
  );
};

export default Projects;
