import Navbar from "@/components/Navbar";
import MainFooter from "@/components/MainFooter";
import CustomCursor from "@/components/CustomCursor";
import Section from "@/components/Section";
import { Award, Eye, Rocket, Users } from "lucide-react";

export default function About() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="flex-1 pt-32">
        {/* About Hero */}
        <Section className="py-20 px-6 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-black mb-8">
            The Story Behind <span className="text-primary italic">Bracket</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We started Bracket with a simple mission: to build the digital systems that 
            empower the world's most ambitious brands to scale without limits.
          </p>
        </Section>

        {/* Our Mission/Vision */}
        <Section className="py-32 bg-bracket-dark px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="aspect-square bg-bracket-gray rounded-[3rem] border border-white/5 relative overflow-hidden flex items-center justify-center p-12">
               <div className="text-[12rem] font-black text-white/5 italic select-none">B [ ]</div>
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8">Who We Are</h2>
              <div className="space-y-6 text-lg text-gray-400">
                <p>
                  At Bracket, we believe that technology should be an accelerator, not a bottleneck. 
                  Our team of engineers, designers, and AI specialists work at the intersection 
                  of creativity and high-end engineering.
                </p>
                <p>
                  We are an AI-first agency. We don't just use tools; we build them. 
                  Our philosophy is centered around modularity, speed, and uncompromising quality.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Values */}
        <Section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-20">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Innovation", text: "Pushing the boundaries of what's possible with AI.", icon: Rocket },
                { title: "Speed", text: "Delivering high-quality systems at the speed of thought.", icon: Eye },
                { title: "Reliability", text: "Systems that work, every time, at any scale.", icon: Award },
                { title: "AI-First", text: "Automating the mundane to focus on the extraordinary.", icon: Users },
              ].map((value, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-bracket-black border border-white/5 hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <value.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Team Section */}
        <Section className="py-32 px-6 bg-bracket-dark/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-20 text-center">Meet the Architects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: "Alex Rivera", role: "Founder & CEO", label: "AR" },
                { name: "Jordan Smith", role: "Head of Engineering", label: "JS" },
                { name: "Elena Vogt", role: "Creative Director", label: "EV" },
              ].map((member, i) => (
                <div key={i} className="group text-center">
                  <div className="aspect-square bg-bracket-black rounded-[2rem] mb-8 border border-white/5 relative overflow-hidden flex items-center justify-center group-hover:border-primary/30 transition-all">
                    <span className="text-6xl font-black text-white/5 group-hover:text-primary transition-colors">{member.label}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium tracking-widest uppercase text-xs">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <MainFooter />
    </>
  );
}
