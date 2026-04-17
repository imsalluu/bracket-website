"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import MainFooter from "@/components/MainFooter";
import CustomCursor from "@/components/CustomCursor";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Quantum AI Dashboard",
    category: "AI",
    description: "Enterprise multi-agent system for real-time analytics orchestration.",
    tags: ["Next.js", "OpenAI", "Python"],
    slug: "quantum-ai"
  },
  {
    title: "Nexus Commerce",
    category: "Web",
    description: "High-performance headless commerce platform with global scaling.",
    tags: ["React", "Shopify", "Tailwind"],
    slug: "nexus-commerce"
  },
  {
    title: "AutoFlow Manager",
    category: "Automation",
    description: "Custom n8n based automation engine for logistics optimization.",
    tags: ["Node.js", "n8n", "Docker"],
    slug: "autoflow"
  },
  {
    title: "Vortex Fitness App",
    category: "App",
    description: "Interactive cross-platform mobile application for personal training.",
    tags: ["React Native", "Firebase", "Expo"],
    slug: "vortex-app"
  },
  {
    title: "Solaris Design System",
    category: "Web",
    description: "Comprehensive UI/UX system for a renewable energy startup.",
    tags: ["Figma", "Storybook", "Framer"],
    slug: "solaris"
  },
  {
    title: "SynthVoice AI",
    category: "AI",
    description: "Neural voice synthesis platform for localized content.",
    tags: ["Python", "PyTorch", "AWS"],
    slug: "synthvoice"
  }
];

const categories = ["All", "Web", "App", "AI", "Automation"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="flex-1 pt-32 px-6">
        <Section className="py-20 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-black mb-8">
            Our <span className="text-primary italic">Manifesto</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
            A showcase of systems that push the boundaries of design and engineering.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all border ${
                  activeCategory === cat 
                  ? "bg-primary text-black border-primary scale-105" 
                  : "bg-transparent text-white border-white/10 hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </Section>
      </main>

      <MainFooter />
    </>
  );
}
