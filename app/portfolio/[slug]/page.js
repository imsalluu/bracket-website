"use client";

import { use } from "react";
import Navbar from "@/components/Navbar";
import MainFooter from "@/components/MainFooter";
import CustomCursor from "@/components/CustomCursor";
import Section from "@/components/Section";
import { projects } from "@/lib/projects";
import { ArrowLeft, ExternalLink, ShieldCheck, Layers } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectDetail({ params }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-primary hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="flex-1 pt-32">
        <Section className="px-6 mb-20 max-w-7xl mx-auto">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-12 transition-colors font-bold uppercase tracking-widest text-xs"
          >
            <ArrowLeft size={16} /> Back to all projects
          </Link>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1]">
            {project.title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient italic">{project.title.split(' ').pop()}</span>
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {project.tags.map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>

          <div className="aspect-[21/9] rounded-[3rem] bg-bracket-black border border-white/5 relative overflow-hidden p-12 flex items-center justify-center mb-20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
            <div className="w-full h-full rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center relative z-10">
               <Layers size={80} className="text-white/5" />
               <span className="absolute text-8xl font-black text-white/[0.03] italic uppercase tracking-tighter">Bracket Case Study</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-white uppercase tracking-widest">Overview</h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                {project.longDescription}
              </p>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white uppercase tracking-widest">Core Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3 p-4 rounded-xl bg-bracket-black border border-white/5 font-bold text-gray-300">
                        <ShieldCheck size={20} className="text-primary shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                   <h3 className="text-2xl font-bold mb-6 text-white uppercase tracking-widest">Results</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.results.map(result => (
                      <div key={result} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20 font-bold text-primary">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 p-10 rounded-[2.5rem] bg-bracket-gray border border-white/5 space-y-8">
                <div>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-2">Category</p>
                  <p className="text-white font-bold">{project.tags[0]}</p>
                </div>
                <div>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-2">Completion</p>
                  <p className="text-white font-bold">2026</p>
                </div>
                <div className="pt-6">
                   <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-8 py-5 bg-primary text-black font-black rounded-full flex items-center justify-center gap-3 hover:bg-white transition-all transform hover:scale-[1.02]"
                   >
                     Live Project <ExternalLink size={20} />
                   </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Next Project CTA */}
        <Section className="py-24 bg-bracket-dark/30 border-y border-white/5 text-center">
            <h2 className="text-2xl font-black mb-8 opacity-50 uppercase tracking-[0.3em]">Want to see more?</h2>
            <Link href="/portfolio" className="text-4xl md:text-6xl font-black hover:text-primary transition-colors italic">
              Explore Our Portfolio
            </Link>
        </Section>
      </main>

      <MainFooter />
    </>
  );
}
