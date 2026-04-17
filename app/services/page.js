import Navbar from "@/components/Navbar";
import MainFooter from "@/components/MainFooter";
import CustomCursor from "@/components/CustomCursor";
import Section from "@/components/Section";
import { Code, Cpu, Globe, Layers, ShieldCheck, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "software",
      title: "Software Development",
      description: "Custom enterprise software designed to handle complex business logic and massive workloads.",
      features: ["Custom CRM/ERP", "Legacy Modernization", "API Integrations", "Database Architecture"],
      icon: Code
    },
    {
      id: "web",
      title: "Web Development",
      description: "High-performance, SEO-optimized web applications with stunning visual aesthetics.",
      features: ["Next.js Solutions", "Headless CMS", "E-commerce Platforms", "Interactive Dashboards"],
      icon: Globe
    },
    {
      id: "ai",
      title: "AI Agent Development",
      description: "Custom AI agents and Large Language Model (LLM) integrations for your business.",
      features: ["Custom Chatbots", "Voice Agents", "Predictive Analytics", "RAG Systems"],
      icon: Cpu
    },
    {
      id: "automation",
      title: "Workflow Automation",
      description: "Seamless automation using n8n and Make.com to eliminate manual data entry.",
      features: ["n8n Workflows", "Make.com Scenarios", "Integrations", "Error Handling"],
      icon: Zap
    }
  ];

  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="flex-1 pt-32 px-6">
        <Section className="py-20 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-black mb-8">
            Our <span className="text-gradient">Specializations</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We provide end-to-end digital solutions that focus on scale, modularity, and future-proof engineering.
          </p>
        </Section>

        {services.map((service, index) => (
          <Section key={service.id} className={`py-32 ${index % 2 === 0 ? "" : "bg-bracket-dark/30 -mx-6 px-6"}`}>
            <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${index % 2 === 0 ? "" : "lg:flex-row-reverse flex-col"}`}>
              <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-10 border border-primary/20">
                  <service.icon size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-8">{service.title}</h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map(feature => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-bold text-gray-300">
                      <ShieldCheck size={18} className="text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="mt-12 px-8 py-4 bg-white text-black font-black rounded-full hover:bg-primary transition-all">
                  Inquire Now
                </button>
              </div>
              <div className={`aspect-video rounded-[3rem] bg-bracket-black border border-white/5 relative overflow-hidden p-8 flex items-center justify-center ${index % 2 === 0 ? "" : "lg:order-1"}`}>
                <div className="w-full h-full rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center">
                   <Layers size={64} className="text-white/5" />
                </div>
              </div>
            </div>
          </Section>
        ))}
      </main>

      <MainFooter />
    </>
  );
}
