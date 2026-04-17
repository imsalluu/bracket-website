"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-bracket-black rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary/30 transition-all"
    >
      <div className="aspect-[16/10] bg-bracket-gray relative overflow-hidden">
        {/* Placeholder for project image */}
        <div className="absolute inset-0 bg-gradient-to-br from-bracket-gray to-bracket-black flex items-center justify-center p-12">
           <div className="w-full h-full rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
             <span className="text-4xl font-black text-white/10 italic tracking-tighter uppercase">Bracket System</span>
           </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-20">
          <Link 
            href={`/portfolio/${project.slug || "#"}`}
            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ExternalLink size={20} />
          </Link>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-primary border border-primary/20 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}
