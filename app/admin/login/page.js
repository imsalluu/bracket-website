"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Section from "@/components/Section";
import { Lock, Mail, Loader2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Login error:", error);
      setError(error.message + (error.status ? ` (Status: ${error.status})` : ""));
      setLoading(false);
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-bracket-black flex flex-col items-center justify-center p-6 text-white selection:bg-primary/30">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.05),transparent)] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-12">
          <div className="font-black text-4xl tracking-tighter uppercase italic mb-4">
            Bracket <span className="text-primary">Admin</span>
          </div>
          <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px]">
            Master Control Interface
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6 bg-bracket-dark/50 backdrop-blur-xl p-10 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="email"
                placeholder="Admin Email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 py-5 focus:outline-none focus:border-primary transition-all text-lg font-medium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="password"
                placeholder="Master Password"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 py-5 focus:outline-none focus:border-primary transition-all text-lg font-medium"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm font-bold text-center"
            >
              {error}
            </motion.p>
          )}

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-primary text-black font-black py-5 rounded-2xl text-lg hover:bg-white transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={24} />
            ) : (
              <>
                Access Dashboard <ArrowRight size={20} />
              </>
            )}
          </button>
          
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        </form>

        <p className="text-center mt-12 text-gray-600 font-bold text-xs uppercase tracking-widest">
          Secure biometric-encrypted session
        </p>
      </motion.div>
    </div>
  );
}
