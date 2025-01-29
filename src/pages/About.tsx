import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SplineScene } from "@/components/ui/splite";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-12">
      {/* Hero Section */}
      <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="flex h-full">
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Hey, Tuhin here
            </h1>
            <div className="mt-4 text-xl text-neutral-300">
              <TypeAnimation
                sequence={[
                  "I'm a Designer",
                  1000,
                  "I'm a Developer",
                  1000,
                  "I'm an Artist",
                  1000,
                  "I'm a Photographer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <div className="flex space-x-6 mt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 text-neutral-300 hover:text-white transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 text-neutral-300 hover:text-white transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-6 h-6 text-neutral-300 hover:text-white transition-colors" />
              </a>
            </div>
            <a
              href="https://drive.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 mt-8 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all"
            >
              Download CV
            </a>
          </div>
          <div className="flex-1 relative hidden md:block">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>

      {/* About Me Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/3">
          <img
            src="/lovable-uploads/b4bec6a0-8b00-42c9-b276-c48d648c269c.png"
            alt="Profile"
            className="rounded-lg shadow-xl w-full"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600">
            I am an enthusiastic student eager to explore the diverse fields of industry related to data, management
            and engineering. I like working in a challenging and dynamic environment, exploring new opportunities on
            a daily basis. I love meeting and communicating with diverse people and would emerge as a key team
            player at workplace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;