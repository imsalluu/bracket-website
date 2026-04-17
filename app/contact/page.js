import Navbar from "@/components/Navbar";
import MainFooter from "@/components/MainFooter";
import CustomCursor from "@/components/CustomCursor";
import Section from "@/components/Section";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="flex-1 pt-32 px-6">
        <Section className="py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1]">
                Let’s Build <br />
                <span className="text-primary italic">Something Great</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-md mb-12 leading-relaxed">
                Ready to scale your digital operations? Get in touch with our team 
                for a consultation.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Email", value: "hello@bracket.agency" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 000-BRAK" },
                  { icon: MapPin, label: "Office", value: "Remote / San Francisco" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center">
                    <div className="w-12 h-12 rounded-xl bg-bracket-gray flex items-center justify-center text-primary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-1">{item.label}</p>
                      <p className="text-lg font-bold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-bracket-dark/50 p-8 md:p-12 rounded-[3rem] border border-white/5 relative overflow-hidden">
               {/* Contact Form */}
               <form className="space-y-6 relative z-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-2">Name</label>
                     <input 
                       type="text" 
                       placeholder="Your Name"
                       className="w-full bg-bracket-black border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-2">Email</label>
                     <input 
                       type="email" 
                       placeholder="hello@example.com"
                       className="w-full bg-bracket-black border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                     />
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-2">Service</label>
                   <select className="w-full bg-bracket-black border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                     <option>Software Development</option>
                     <option>AI Agent Development</option>
                     <option>Automation Workflow</option>
                     <option>Web/Mobile App</option>
                   </select>
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-2">Message</label>
                   <textarea 
                     rows={6}
                     placeholder="Tell us about your project..."
                     className="w-full bg-bracket-black border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                   />
                 </div>
                 <button className="w-full py-5 bg-primary text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-white transition-all transform hover:scale-[1.02]">
                   Send Message <Send size={20} />
                 </button>
               </form>
               
               <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
            </div>
          </div>
        </Section>
      </main>

      <MainFooter />
    </>
  );
}
