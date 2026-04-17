"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-bracket-black flex flex-col items-center justify-center p-6"
    >
      <div className="relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 h-1 bg-primary z-10"
        />
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic flex items-center gap-4">
          <span className="text-primary">[</span>
          Bracket
          <span className="text-primary">]</span>
        </h1>
      </div>
      <p className="mt-8 text-xs font-bold uppercase tracking-[0.5em] text-gray-500 animate-pulse">
        Initializing Systems...
      </p>
    </motion.div>
  );
}
