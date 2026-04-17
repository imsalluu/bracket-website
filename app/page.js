import { ArrowRight, Code, Cpu, Globe, Rocket, Zap } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import MainFooter from "@/components/MainFooter";
import CustomCursor from "@/components/CustomCursor";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import { getProjects, getSiteSettings } from "@/lib/api";

export default async function Home() {
  const projects = await getProjects();
  const settings = await getSiteSettings();
  
  // Use DB data or fallback to defaults
  const featuredProjects = projects.length > 0 ? projects.slice(0, 3) : [
    {
      title: "Quantum AI Dashboard",
      description: "Multi-agent orchestration platform for enterprise analytics.",
      tags: ["AI", "Next.js", "Python"],
      slug: "quantum-ai"
    },
    {
      title: "Nexus E-Commerce",
      description: "High-performance headless commerce with 99.9% uptime.",
      tags: ["Web", "Shopify", "React"],
      slug: "nexus-commerce"
    },
    {
      title: "AutoFlow System",
      description: "Custom n8n automation for supply chain management.",
      tags: ["Automation", "n8n", "Node.js"],
      slug: "autoflow"
    }
  ];

  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
            <div 
              className="absolute inset-0 opacity-[0.03]" 
              style={{ 
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} 
            />
          </div>

          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <Section>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {settings.hero_badge || "The Future of Digital Systems"}
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-[1.1]">
                {settings.hero_title_part1 || "We Build Digital"} <br />
                <span className="text-gradient">{settings.hero_title_part2 || "Systems That Scale"}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                {settings.hero_subtitle || "Bracket is a boutique agency focused on crafting high-performance software, AI agents, and automation workflows for the next generation of business."}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-primary text-black font-black rounded-full flex items-center gap-2 hover:bg-white transition-all transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 border border-white/10 hover:border-primary/50 font-bold rounded-full transition-all"
                >
                  View Work
                </Link>
              </div>
            </Section>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
            <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent" />
          </div>
        </section>

        {/* Services Preview */}
        <Section className="py-32 px-6 bg-bracket-dark/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black mb-6">Our Core Expertise</h2>
                <p className="text-lg text-gray-400">
                  We don't just build apps; we build intelligent systems. From concept to 
                  deployment, we ensure your digital infrastructure is solid, scalable, and futuristic.
                </p>
              </div>
              <Link href="/services" className="text-primary font-bold flex items-center gap-2 group mb-2">
                All Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Software Development",
                  desc: "Enterprise-grade software built with modern stacks for maximum reliability.",
                  icon: Code,
                  color: "bg-blue-500/10 text-blue-500",
                },
                {
                  title: "AI & Automation",
                  desc: "Intelligent agents and seamless n8n/Make workflows to 10x your efficiency.",
                  icon: Cpu,
                  color: "bg-primary/10 text-primary",
                },
                {
                  title: "Web & Mobile",
                  desc: "Stunning, high-performance interfaces that convert visitors into loyal users.",
                  icon: Globe,
                  color: "bg-purple-500/10 text-purple-500",
                },
              ].map((service, i) => (
                <div 
                  key={i}
                  className="p-10 rounded-3xl bg-bracket-black border border-white/5 hover:border-primary/30 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-8 border border-current opacity-80 group-hover:scale-110 transition-transform`}>
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <div className="w-0 h-1 bg-primary group-hover:w-full transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Portfolio Preview */}
        <Section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
              <div>
                <h2 className="text-4xl md:text-6xl font-black mb-6">Featured Work</h2>
                <p className="text-lg text-gray-400 max-w-2xl">
                  A selection of our latest projects where design meets high-end engineering.
                </p>
              </div>
              <Link href="/portfolio" className="text-primary font-bold flex items-center gap-2 group mb-2">
                All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, i) => (
                <ProjectCard key={i} project={project} index={i} />
              ))}
            </div>
          </div>
        </Section>

        {/* Testimonials */}
        <Section className="py-32 bg-bracket-dark/30 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-10">What Clients Say</h2>
          </div>
          <TestimonialSlider />
        </Section>

        {/* Logos / Trusted By */}
        <Section className="py-24 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-gray-500 uppercase tracking-[0.3em] font-bold text-xs mb-12">
              Trusted by the world's most innovative teams
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
              {["VERTEX", "SOLARIS", "QUANTUM", "NEXUS", "ORBIT"].map((logo) => (
                <span key={logo} className="text-3xl font-black tracking-tighter italic">{logo}</span>
              ))}
            </div>
          </div>
        </Section>

        {/* Portfolio CTA */}
        <Section className="py-32 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto rounded-[3rem] bg-bracket-gray p-12 md:p-24 border border-white/5 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                  Ready to Build Your <span className="text-primary italic">Next Big Thing?</span>
                </h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                  Join the forward-thinking brands that trust Bracket to deliver cutting-edge 
                  solutions that drive growth and innovation.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link href="/contact" className="px-10 py-5 bg-white text-black font-black rounded-full hover:bg-primary transition-all">
                    Start a Project
                  </Link>
                  <Link href="/portfolio" className="px-10 py-5 border border-white/10 font-bold rounded-full hover:border-white transition-all">
                    View Portfolio
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="h-48 rounded-2xl bg-bracket-black border border-white/5 animate-pulse" />
                  <div className="h-64 rounded-2xl bg-primary/20 border border-primary/20" />
                </div>
                <div className="space-y-4">
                  <div className="h-64 rounded-2xl bg-bracket-black border border-white/5" />
                  <div className="h-48 rounded-2xl bg-bracket-black border border-white/5" />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <MainFooter />
    </>
  );
}
