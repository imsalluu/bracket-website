"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTestimonials } from "@/lib/api";

export default function TestimonialSlider() {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const fetchTestis = async () => {
      const data = await getTestimonials();
      if (data && data.length > 0) {
        setItems(data);
      } else {
        // Fallback
        setItems([
          { name: "Sarah Chen", role: "CTO at TechFlow", content: "Bracket transformed our legacy systems into a modern powerhouse. Their AI agents saved us 40+ hours a week." },
          { name: "Marc Jensen", role: "Founder of Solas", content: "The most professional agency we've worked with. Pixel-perfect execution and futuristic design mindset." }
        ]);
      }
    };
    fetchTestis();
  }, []);

  const nextStep = useCallback(() => {
    if (items.length === 0) return;
    setDirection(1);
    setIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevStep = useCallback(() => {
    if (items.length === 0) return;
    setDirection(-1);
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (items.length === 0) return;
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, [nextStep, items.length]);

  const getCardIndex = (offset) => {
    if (items.length === 0) return 0;
    return (index + offset + items.length) % items.length;
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

  if (items.length === 0) return null;

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
               "{items[index].content}"
             </p>
             <div className="flex items-center gap-4">
               <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-black font-black text-xl">
                 {items[index].name.charAt(0)}
               </div>
               <div>
                 <h4 className="font-bold text-white text-lg">{items[index].name}</h4>
                 <p className="text-gray-500 text-sm uppercase tracking-widest">{items[index].role}</p>
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
               "{items[getCardIndex(-1)].content}"
             </p>
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
               "{items[getCardIndex(1)].content}"
             </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute inset-x-0 -bottom-10 h-10 flex items-center justify-center gap-4 z-30">
          {items.map((_, i) => (
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
