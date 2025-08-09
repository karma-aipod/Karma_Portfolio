import { motion } from "framer-motion";
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
    title: "Portfolio Website",
    description: "Personal portfolio built with React and TailwindCSS",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/username/portfolio",
    demo: "https://portfolio.com",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce platform with authentication and payment integration",
    tech: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/username/ecommerce",
    demo: "https://ecommerce.com",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered responses",
    tech: ["React", "Firebase", "OpenAI API"],
    github: "https://github.com/username/ai-chat",
    demo: "https://ai-chat.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather visualization with 5-day forecasts",
    tech: ["React", "OpenWeather API", "TailwindCSS"],
    github: "https://github.com/username/weather-dashboard",
    demo: "https://weather.example.com",
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
  );
};

export default Projects;
