"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { name: "Sarah Chen", role: "CTO at TechFlow", text: "Bracket transformed our legacy systems into a modern powerhouse. Their AI agents saved us 40+ hours a week.", avatar: "SC" },
  { name: "Marc Jensen", role: "Founder of Solas", text: "The most professional agency we've worked with. Pixel-perfect execution and futuristic design mindset.", avatar: "MJ" },
  { name: "Elena Rodriguez", role: "Product Manager at Velo", text: "Their automation workflows eliminated all our manual data entry errors. Highly recommended!", avatar: "ER" },
  { name: "David Kim", role: "CEO of Arkive", text: "The speed of delivery without compromising quality was impressive. Bracket is our go-to partner.", avatar: "DK" },
  { name: "Jessica Walsh", role: "Creative Director at Studio X", text: "Unmatched aesthetic sense combined with rock-solid engineering. Truly a high-end agency.", avatar: "JW" },
  { name: "Alex Rivera", role: "Co-Founder of Zenith", text: "Our multi-agent AI system developed by Bracket has revolutionised our customer support.", avatar: "AR" },
  { name: "Sophie Muller", role: "Operations Head at Logix", text: "Seamless transition to a headless commerce architecture. Our page speeds doubled overnight.", avatar: "SM" },
  { name: "Thomas Wright", role: "Tech Lead at Nexus", text: "The code quality is exceptional. Their team feels like an extension of our own.", avatar: "TW" },
  { name: "Amara Okoro", role: "VP Engineering at Flow", text: "Scaling our infrastructure was a breeze with Bracket's modular approach.", avatar: "AO" },
  { name: "Liam O'Brien", role: "Founder of Spark", text: "Intuitive dashboards and powerful backend integrations. They really understand business needs.", avatar: "LO" },
  { name: "Chloe Dupont", role: "Marketing Lead at Aura", text: "Our new website hasn't just improved our brand image; it's driving significantly higher conversions.", avatar: "CD" },
  { name: "Jordan Smith", role: "Systems Architect at Core", text: "The most sophisticated automation workflows I've seen. Bracket is in a league of their own.", avatar: "JS" }
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, [nextStep]);

  const getCardIndex = (offset) => {
    return (index + offset + testimonials.length) % testimonials.length;
  };

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 20,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
    }),
  };

  return (
    <div className="relative w-full overflow-hidden py-32 px-4">
      <div className="max-w-7xl mx-auto relative h-[500px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          {/* Active Card */}
          <motion.div
            key={`active-${index}`}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute w-full max-w-4xl bg-bracket-black p-12 md:p-16 rounded-[3rem] border border-primary/20 shadow-2xl z-20"
          >
             <div className="text-primary mb-8 text-xl">
               {"★".repeat(5)}
             </div>
             <p className="text-2xl md:text-3xl font-medium mb-10 leading-relaxed italic text-white">
               "{testimonials[index].text}"
             </p>
             <div className="flex items-center gap-4">
               <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-black font-black text-xl">
                 {testimonials[index].avatar}
               </div>
               <div>
                 <h4 className="font-bold text-white text-lg">{testimonials[index].name}</h4>
                 <p className="text-gray-500 text-sm uppercase tracking-widest">{testimonials[index].role}</p>
               </div>
             </div>
          </motion.div>

          {/* Previous Card (Background) */}
          <motion.div
            key={`prev-${index}`}
            initial={{ opacity: 0, x: -500, scale: 0.8 }}
            animate={{ opacity: 0.2, x: -450, scale: 0.8 }}
            exit={{ opacity: 0, x: -500 }}
            className="absolute w-full max-w-4xl bg-bracket-black/50 p-12 md:p-16 rounded-[3rem] border border-white/5 hidden lg:block pointer-events-none z-10"
            style={{ filter: "blur(4px)" }}
          >
             <div className="text-gray-600 mb-8">
               {"★".repeat(5)}
             </div>
             <p className="text-2xl font-medium mb-10 leading-relaxed italic text-gray-500 line-clamp-2">
               "{testimonials[getCardIndex(-1)].text}"
             </p>
             <div className="flex items-center gap-4 opacity-50">
               <div className="w-14 h-14 rounded-full bg-gray-600 flex items-center justify-center text-black font-black text-xl">
                 {testimonials[getCardIndex(-1)].avatar}
               </div>
             </div>
          </motion.div>

          {/* Next Card (Background) */}
          <motion.div
            key={`next-${index}`}
            initial={{ opacity: 0, x: 500, scale: 0.8 }}
            animate={{ opacity: 0.2, x: 450, scale: 0.8 }}
            exit={{ opacity: 0, x: 500 }}
            className="absolute w-full max-w-4xl bg-bracket-black/50 p-12 md:p-16 rounded-[3rem] border border-white/5 hidden lg:block pointer-events-none z-10"
            style={{ filter: "blur(4px)" }}
          >
             <div className="text-gray-600 mb-8">
               {"★".repeat(5)}
             </div>
             <p className="text-2xl font-medium mb-10 leading-relaxed italic text-gray-500 line-clamp-2">
               "{testimonials[getCardIndex(1)].text}"
             </p>
             <div className="flex items-center gap-4 opacity-50">
               <div className="w-14 h-14 rounded-full bg-gray-600 flex items-center justify-center text-black font-black text-xl">
                 {testimonials[getCardIndex(1)].avatar}
               </div>
             </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute inset-x-0 -bottom-10 h-10 flex items-center justify-center gap-4 z-30">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === i ? "bg-primary w-8" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
