import React from "react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { motion } from "framer-motion";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { Card } from "@/components/ui/card";

const Journey = () => {
<<<<<<< HEAD
  const journeyData = [
    {
      year: "2025 - 2027",
      title: "PGDM - Big Data Analytics",
      institution: "Goa Institute of Management, Goa",
      description: "Pursuing advanced studies in Big Data Analytics, focusing on business intelligence, data engineering, and analytics product development.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop",
      achievement: "Pursuing",
      position: "Junior Core Committee Member, Cognition - The Data Science & Analytics club"
    },
    {
      year: "July 2023 - Dec 2023",
      title: "Business Intelligence Intern",
      institution: "Celebal Technologies",
      description: "Contributed to a 4-member team to devise a 54-page Power BI report with 300+ DAX measures. Enhanced report UI with custom visuals and secured 40% reduction in query loading times. Implemented advanced time-intelligence functions for comprehensive financial analysis.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      achievement: "6 Months Internship",
      highlight: "Delivered robust BI solution that replaced static reporting and empowered leadership with dynamic insights."
    },
    {
      year: "2019 - 2023",
      title: "B.E. Chemical Engineering",
      institution: "Jadavpur University",
      description: "Graduated with 8.32 CGPA. Led complex R&D projects including hydrogen production simulation and aqueous retarded acid formulation for ONGC. Core Committee Member directing Logistics and Design team for departmental centenary celebration.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2940&auto=format&fit=crop",
      achievement: "8.32 CGPA",
      position: "Core Committee Member - Chemical Engineering Centenary Celebration"
    },
    {
      year: "Academic Projects",
      title: "Research & Development",
      institution: "ONGC R&D Projects",
      description: "Hydrogen Production & Carbon Footprint Analysis: Designed sophisticated biomass gasification simulation using ASPEN, validated 99% pure hydrogen extraction. Aqueous Retarded Acid Formulation: Identified optimal solution for limestone reservoirs in 6-member R&D team.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2940&auto=format&fit=crop",
      achievement: "2 Major Projects",
      highlight: "Combined engineering domain knowledge with analytics to solve practical problems"
    },
    {
      year: "2016 - 2018",
      title: "Higher Secondary Education",
      institution: "Bankura Banga Vidyalaya",
      description: "Completed higher secondary education in Science stream with exceptional academic performance.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2922&auto=format&fit=crop",
      achievement: "90.00%",
      highlight: "Strong foundation in science and mathematics"
    },
    {
      year: "2008 - 2016",
      title: "Secondary Education",
      institution: "Bankura Zilla School",
      description: "Completed secondary education with outstanding academic results, demonstrating early excellence in analytical and problem-solving skills.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2946&auto=format&fit=crop",
      achievement: "93.85%",
      highlight: "Foundation years building analytical thinking"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-8 md:py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="relative w-full mb-8 md:mb-12">
          <GooeyText
            texts={["My Journey", "My Path", "My Story", "My Experience"]}
            morphTime={1}
            cooldownTime={0.25}
            className="h-[80px] md:h-[100px] flex items-center justify-center font-bold mb-6"
            textClassName="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500"
          />
        </div>

        <div className="relative ml-0 w-full bg-transparent overflow-hidden rounded-none py-8 md:py-12 mb-12">
          <VelocityScroll
            text="EDUCATION & CAREER JOURNEY THROUGH THE YEARS"
            default_velocity={3}
            className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200"
          />
        </div>

        <div className="relative space-y-8 md:space-y-12">
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className={`relative h-[250px] md:h-[350px] ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold text-sm md:text-base">
                      {item.year}
                    </div>
                  </div>

                  <div className={`p-6 md:p-8 flex flex-col justify-center ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-base md:text-lg text-yellow-600 dark:text-yellow-500 font-semibold mb-2">
                        {item.institution}
                      </p>
                      <div className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
                        {item.achievement}
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.highlight && (
                      <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                        <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-medium italic">
                          {item.highlight}
                        </p>
                      </div>
                    )}

                    {item.position && (
                      <div className="mt-4 inline-flex items-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Position:</span>
                        <span className="ml-2">{item.position}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
=======
  const timelineData = [{
    title: "2024",
    content: <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Tilt className="relative group">
            <Spotlight className="from-purple-500/50 via-purple-500/20 to-transparent" />
            <motion.div whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-lg cursor-pointer">
              <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" alt="coding setup" loading="lazy" className="rounded-lg object-cover w-full h-40 mb-2" />
              <p className="text-sm text-neutral-700 dark:text-neutral-300">Development Environment Setup</p>
            </motion.div>
          </Tilt>
          <motion.div whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-lg cursor-pointer">
            <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" alt="code editor" loading="lazy" className="rounded-lg object-cover w-full h-40 mb-2" />
            <p className="text-sm text-neutral-700 dark:text-neutral-300">Code Architecture Design</p>
          </motion.div>
          <motion.div whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-lg cursor-pointer">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="development" loading="lazy" className="rounded-lg object-cover w-full h-40 mb-2" />
            <p className="text-sm text-neutral-700 dark:text-neutral-300">Feature Implementation</p>
          </motion.div>
          <motion.div whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-lg cursor-pointer">
            <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" alt="workspace" loading="lazy" className="rounded-lg object-cover w-full h-40 mb-2" />
            <p className="text-sm text-neutral-700 dark:text-neutral-300">Workspace Optimization</p>
          </motion.div>
        </div>
  }, {
    title: "Early 2023",
    content: <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-lg cursor-pointer">
            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" alt="coding" loading="lazy" className="rounded-lg object-cover w-full h-40 mb-2" />
            <p className="text-sm text-neutral-700 dark:text-neutral-300">Learning React Patterns</p>
          </motion.div>
          <motion.div whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-lg cursor-pointer">
            <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" alt="development" loading="lazy" className="rounded-lg object-cover w-full h-40 mb-2" />
            <p className="text-sm text-neutral-700 dark:text-neutral-300">Animation Implementation</p>
          </motion.div>
        </div>
  }, {
    title: "Changelog",
    content: <div className="grid grid-cols-1 gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-lg cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-4">Highlights & Achievements</h3>
            <div className="space-y-2 text-neutral-700 dark:text-neutral-300">
              <p>✅ WBJEE 2019 – 99.3 percentile</p>
              <p>✅ WBBSE 2016 – 99 percentile; WBCHSE 2018 – 99 percentile</p>
              <p>✅ Celebal Technologies (BI Intern): Built a 54-page Power BI P&L with 300+ DAX; improved query load times by ~40%</p>
              <p>✅ Pure Storage (Internal): Organized 150+ KPIs and documented 200+ SQL/DAX queries</p>
              <p>✅ Certifications: Power BI Desktop, Corporate Financial Statement Analysis</p>
              <p>✅ SQL – 6★ Gold Badge on HackerRank</p>
              <p>🎓 Education: PGDM – Big Data Analytics (2025–27), Goa Institute of Management</p>
              <p>🎓 Education: B.E. Chemical Engineering (2019–23), Jadavpur University – 8.32/10 CGPA</p>
            </div>
          </motion.div>
        </div>
  }];
  return <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="relative w-full mb-12">
        <GooeyText texts={["My Journey", "My Path", "My Story", "My Experience"]} morphTime={1} cooldownTime={0.25} className="h-[100px] flex items-center justify-center font-bold mb-6" textClassName="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600" />
      </div>

      <div className="w-full bg-transparent overflow-hidden py-16">
        <VelocityScroll
          text="DEVELOPMENT JOURNEY THROUGH THE YEARS"
          default_velocity={3}
          className="whitespace-nowrap w-full text-[clamp(1.75rem,8vw,5rem)] font-bold text-neutral-800 dark:text-neutral-200 tracking-tight"
        />
      </div>

      <div className="relative w-full mt-12">
        <Timeline data={timelineData} />
      </div>
    </div>;
>>>>>>> fb823838761326c63357728a1c358803d87667a5
};

export default Journey;
