import Navbar from "@/components/Navbar";
import MainFooter from "@/components/MainFooter";
import CustomCursor from "@/components/CustomCursor";
import Section from "@/components/Section";
import { Briefcase, Heart, Smile, Zap, Globe } from "lucide-react";

export default function Careers() {
  const positions = [
    { title: "Senior Frontend Engineer", type: "Full-time", location: "Remote", team: "Engineering" },
    { title: "AI/ML Specialist", type: "Full-time", location: "Remote", team: "Product" },
    { title: "UI/UX Designer", type: "Contract", location: "Hybrid", team: "Design" },
    { title: "Automation Architect", type: "Full-time", location: "Remote", team: "Engineering" },
  ];

  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="flex-1 pt-32 px-6">
        <Section className="py-20 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-black mb-8">
            Join the <span className="text-primary italic">System</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
            We're looking for high-end talent to help us build the next generation of digital infrastructure.
          </p>
        </Section>

        {/* Culture */}
        <Section className="py-32 bg-bracket-dark/30 -mx-6 px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Remote First", text: "Work from anywhere in the world, on your own terms.", icon: Globe },
              { title: "AI-Powered", text: "We use AI to amplify our productivity and creativity.", icon: Zap },
              { title: "High Impact", text: "Every line of code you write scales for massive brands.", icon: Heart },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-[2rem] bg-bracket-black border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                   <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Positions */}
        <Section className="py-32 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-16">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((pos, i) => (
              <div key={i} className="group p-8 rounded-[2rem] bg-bracket-gray/50 border border-white/5 hover:border-primary/30 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{pos.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-medium uppercase tracking-widest">
                    <span>{pos.team}</span>
                    <span>•</span>
                    <span>{pos.type}</span>
                    <span>•</span>
                    <span>{pos.location}</span>
                  </div>
                </div>
                <button className="px-8 py-3 bg-white text-black font-black rounded-full hover:bg-primary transition-all">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-12 rounded-[3rem] border border-white/10 bg-primary/5 text-center">
            <h3 className="text-2xl font-bold mb-4">Don't see a fit?</h3>
            <p className="text-gray-400 mb-8">Send us your portfolio anyway. We're always looking for geniuses.</p>
            <a href="mailto:thebracket.agency@gmail.com" className="text-primary font-bold">thebracket.agency@gmail.com</a>
          </div>
        </Section>
      </main>

      <MainFooter />
    </>
  );
}
