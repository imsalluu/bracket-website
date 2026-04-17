"use client";

import Navbar from "@/components/Navbar";
import MainFooter from "@/components/MainFooter";
import CustomCursor from "@/components/CustomCursor";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-bracket-black text-white selection:bg-primary/30">
      <CustomCursor />
      {/* We use a simplified Navbar for Admin or can omit it if we want a separate look */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-black text-xl tracking-tighter uppercase italic">
            Bracket <span className="text-primary italic text-xs ml-2">Admin Engine</span>
          </div>
          <div className="flex gap-6 items-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Master Node: <span className="text-green-500">Active</span></span>
          </div>
        </div>
      </nav>
      <main className="pt-24 min-h-[calc(100vh-200px)]">
        {children}
      </main>
      <MainFooter />
    </div>
  );
}
