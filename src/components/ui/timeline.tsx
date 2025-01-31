"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  details: string;
  content?: React.ReactNode;
  image?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white font-sans" ref={containerRef}>
      <div ref={ref} className="relative max-w-4xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between pt-10 md:pt-40">
            {/* Year Column */}
            <div className="w-1/4 sticky top-40 self-start">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-blue-500"
              >
                {item.year}
              </motion.h3>
            </div>
            
            {/* Content Column */}
            <div className="w-3/4 relative pl-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
                {item.image && (
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 object-cover rounded-lg mb-4" 
                  />
                )}
                {item.content}
              </motion.div>
            </div>
          </div>
        ))}
        
        {/* Timeline Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-1/4 top-0 ml-[-1px] w-[2px] bg-gradient-to-b from-transparent via-blue-200 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-500 via-blue-300 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};