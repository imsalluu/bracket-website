"use client";

import { useState, useEffect } from "react";
import Section from "@/components/Section";
import { LayoutDashboard, FolderKanban, Users, Settings, Plus, Trash2, Edit3, Save, X, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [siteSettings, setSiteSettings] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(null); // id of project/testimonial being edited
  const [editForm, setEditForm] = useState({});
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const { data: projectsData } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
    const { data: testimonialsData } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
    const { data: settingsData } = await supabase.from("site_settings").select("*");
    
    if (projectsData) setProjects(projectsData);
    if (testimonialsData) setTestimonials(testimonialsData);
    if (settingsData) setSiteSettings(settingsData);
    setLoading(false);
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const handleFileUpload = async (file, bucket = "site-assets", path = "") => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = path ? `${path}/${fileName}` : fileName;

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (error) {
      alert("Error uploading image: " + error.message);
      return null;
    }

    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const handleSaveSettings = async (id, content) => {
    const { error } = await supabase
      .from("site_settings")
      .upsert({ id, content })
      .select();

    if (!error) {
       fetchData();
    } else {
       alert("Error updating setting: " + error.message);
    }
  };

  const handleSaveProject = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("projects")
      .upsert({
        ...editForm,
        id: editForm.id || undefined, // Generate new ID if not present
      })
      .select();

    if (!error) {
      setIsEditing(null);
      fetchData();
    } else {
      alert("Error saving project: " + error.message);
    }
  };

  const handleSaveTestimonial = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("testimonials")
      .upsert({
        ...editForm,
        id: editForm.id || undefined,
      })
      .select();

    if (!error) {
      setIsEditing(null);
      fetchData();
    } else {
      alert("Error saving testimonial: " + error.message);
    }
  };

  const handleDelete = async (table, id) => {
    if (!confirm("Are you sure you want to delete this?")) return;
    const { error } = await supabase.from(table).delete().eq("id", id);
    if (!error) fetchData();
  };

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "testimonials", label: "Testimonials", icon: Users },
    { id: "content", label: "Global Design", icon: Settings },
  ];

  if (loading && activeTab === "overview") {
    return (
      <div className="flex items-center justify-center min-h-[600px]">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    );
  }

  return (
    <Section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setIsEditing(null); }}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
                activeTab === item.id 
                ? "bg-primary text-black" 
                : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
          <button 
            onClick={handleLogout}
            className="w-full mt-10 flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-red-500 hover:bg-red-500/10 transition-all"
          >
            <Trash2 size={20} />
            Logout
          </button>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-3 min-h-[600px] bg-bracket-dark/50 rounded-[3rem] border border-white/5 p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
             {activeTab === "overview" && (
               <motion.div
                 key="overview"
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 className="space-y-8"
               >
                 <h2 className="text-4xl font-black">Control <span className="text-primary italic">Center</span></h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-8 rounded-[2rem] bg-bracket-black border border-white/5">
                        <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Total Projects</p>
                        <p className="text-4xl font-black italic">{projects.length}</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-bracket-black border border-white/5">
                        <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Total Reviews</p>
                        <p className="text-4xl font-black italic">{testimonials.length}</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-bracket-black border border-white/5">
                        <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Supabase Sync</p>
                        <p className="text-4xl font-black italic text-green-500">Live</p>
                    </div>
                 </div>

                 <div className="p-12 rounded-[2rem] bg-primary/5 border border-primary/20">
                    <h3 className="text-xl font-bold mb-4">Welcome back, Boss</h3>
                    <p className="text-gray-400 leading-relaxed font-light">
                        The Bracket Engine is fully synced with Supabase. You can now manage your live platform content in real-time. 
                        Modifications will be reflected across the website instantly.
                    </p>
                 </div>
               </motion.div>
             )}

             {activeTab === "projects" && (
                <motion.div
                   key="projects"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   className="space-y-8"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-4xl font-black">Project <span className="text-primary italic">Manager</span></h2>
                    {!isEditing && (
                      <button 
                        onClick={() => { setIsEditing("new"); setEditForm({ title: "", description: "", slug: "", tags: [] }); }}
                        className="flex items-center gap-2 px-6 py-3 bg-white text-black font-black rounded-full hover:bg-primary transition-all"
                      >
                        <Plus size={18} /> New Project
                      </button>
                    )}
                  </div>

                  {isEditing === "new" || projects.find(p => p.id === isEditing) ? (
                    <form onSubmit={handleSaveProject} className="space-y-6 bg-bracket-black p-8 rounded-[2rem] border border-white/10">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                           <label className="text-xs uppercase font-bold text-gray-500">Title</label>
                           <input 
                             required
                             className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all"
                             value={editForm.title || ""}
                             onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                           />
                         </div>
                         <div className="space-y-2">
                           <label className="text-xs uppercase font-bold text-gray-500">Slug (URL)</label>
                           <input 
                             required
                             placeholder="e.g. quantum-ai"
                             className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all"
                             value={editForm.slug || ""}
                             onChange={(e) => setEditForm({...editForm, slug: e.target.value})}
                           />
                         </div>
                       </div>
                       <div className="space-y-2">
                         <label className="text-xs uppercase font-bold text-gray-500">Short Description</label>
                         <textarea 
                           className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all min-h-[100px]"
                           value={editForm.description || ""}
                           onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                         />
                       </div>
                       <div className="flex gap-4">
                         <button type="submit" className="flex-1 py-4 bg-primary text-black font-black rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2">
                           <Save size={18} /> Save Changes
                         </button>
                         <button onClick={() => setIsEditing(null)} type="button" className="px-8 py-4 bg-white/5 font-black rounded-xl hover:bg-red-500/20 transition-all text-gray-400">
                           Cancel
                         </button>
                       </div>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      {projects.map((proj) => (
                         <div key={proj.id} className="flex items-center justify-between p-6 rounded-2xl bg-bracket-black border border-white/5 hover:border-white/10 transition-all group">
                           <div className="flex items-center gap-6">
                             <div className="w-16 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-black text-xs italic text-gray-600">
                               {proj.title.substring(0, 2).toUpperCase()}
                             </div>
                             <div>
                               <h4 className="font-bold text-lg">{proj.title}</h4>
                               <p className="text-xs text-gray-500 uppercase tracking-widest font-black leading-none mt-1">
                                 {proj.slug}
                               </p>
                             </div>
                           </div>
                           <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button 
                                onClick={() => { setIsEditing(proj.id); setEditForm(proj); }}
                                className="p-2 hover:bg-white/5 rounded-lg text-primary transition-all"
                              >
                                <Edit3 size={18} />
                              </button>
                              <button 
                                onClick={() => handleDelete("projects", proj.id)}
                                className="p-2 hover:bg-white/5 rounded-lg text-red-500 transition-all"
                              >
                                <Trash2 size={18} />
                              </button>
                           </div>
                         </div>
                      ))}
                    </div>
                  )}
                </motion.div>
             )}

             {activeTab === "testimonials" && (
                <motion.div
                   key="testimonials"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   className="space-y-8"
                >
                   <div className="flex justify-between items-center">
                    <h2 className="text-4xl font-black">Testimonial <span className="text-primary italic">Manager</span></h2>
                    {!isEditing && (
                      <button 
                         onClick={() => { setIsEditing("new"); setEditForm({ name: "", role: "", content: "" }); }}
                         className="flex items-center gap-2 px-6 py-3 bg-white text-black font-black rounded-full hover:bg-primary transition-all"
                      >
                        <Plus size={18} /> New Review
                      </button>
                    )}
                  </div>

                  {isEditing === "new" || testimonials.find(t => t.id === isEditing) ? (
                    <form onSubmit={handleSaveTestimonial} className="space-y-6 bg-bracket-black p-8 rounded-[2rem] border border-white/10">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                           <label className="text-xs uppercase font-bold text-gray-500">Client Name</label>
                           <input 
                             required
                             className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all"
                             value={editForm.name || ""}
                             onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                           />
                         </div>
                         <div className="space-y-2">
                           <label className="text-xs uppercase font-bold text-gray-500">Role / Company</label>
                           <input 
                             className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all"
                             value={editForm.role || ""}
                             onChange={(e) => setEditForm({...editForm, role: e.target.value})}
                           />
                         </div>
                       </div>
                       <div className="space-y-2">
                         <label className="text-xs uppercase font-bold text-gray-500">Review Content</label>
                         <textarea 
                           required
                           className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all min-h-[150px]"
                           value={editForm.content || ""}
                           onChange={(e) => setEditForm({...editForm, content: e.target.value})}
                         />
                       </div>
                       <div className="flex gap-4">
                         <button type="submit" className="flex-1 py-4 bg-primary text-black font-black rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2">
                           <Save size={18} /> Save Testimonial
                         </button>
                         <button onClick={() => setIsEditing(null)} type="button" className="px-8 py-4 bg-white/5 font-black rounded-xl hover:bg-red-500/20 transition-all text-gray-400">
                           Cancel
                         </button>
                       </div>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      {testimonials.map((testi) => (
                         <div key={testi.id} className="flex items-center justify-between p-6 rounded-2xl bg-bracket-black border border-white/5 hover:border-white/10 transition-all group">
                           <div className="flex-1">
                             <h4 className="font-bold text-lg">{testi.name}</h4>
                             <p className="text-xs text-gray-500 uppercase tracking-widest font-black leading-none mt-1">
                               {testi.role}
                             </p>
                             <p className="text-sm text-gray-400 mt-4 line-clamp-1">{testi.content}</p>
                           </div>
                           <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity ml-4">
                              <button 
                                onClick={() => { setIsEditing(testi.id); setEditForm(testi); }}
                                className="p-2 hover:bg-white/5 rounded-lg text-primary transition-all"
                              >
                                <Edit3 size={18} />
                              </button>
                              <button 
                                onClick={() => handleDelete("testimonials", testi.id)}
                                className="p-2 hover:bg-white/5 rounded-lg text-red-500 transition-all"
                              >
                                <Trash2 size={18} />
                              </button>
                           </div>
                         </div>
                      ))}
                    </div>
                  )}
                </motion.div>
             )}

             {activeTab === "content" && (
                <motion.div
                   key="content"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   className="space-y-8"
                >
                  <h2 className="text-4xl font-black">Global <span className="text-primary italic">Content</span></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {siteSettings.map((setting) => (
                        <div key={setting.id} className="bg-bracket-black p-8 rounded-[2rem] border border-white/5">
                           <label className="text-xs uppercase font-bold text-gray-500 block mb-4 tracking-widest">{setting.id.replace(/_/g, " ")}</label>
                           <div className="space-y-4">
                              {setting.id.includes("image") || setting.id.includes("logo") ? (
                                <div className="space-y-4">
                                  {setting.content && (
                                    <img src={setting.content} alt="Preview" className="w-full h-32 object-cover rounded-xl border border-white/10" />
                                  )}
                                  <input 
                                    type="file" 
                                    accept="image/*"
                                    className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-primary file:text-black hover:file:bg-white transition-all cursor-pointer"
                                    onChange={async (e) => {
                                      const file = e.target.files[0];
                                      if (file) {
                                        const url = await handleFileUpload(file);
                                        if (url) handleSaveSettings(setting.id, url);
                                      }
                                    }}
                                  />
                                </div>
                              ) : (
                                <textarea 
                                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-all min-h-[100px] text-lg font-medium"
                                  defaultValue={setting.content}
                                  onBlur={(e) => handleSaveSettings(setting.id, e.target.value)}
                                />
                              )}
                           </div>
                           <p className="text-[10px] text-gray-600 mt-4 uppercase font-bold">
                             {setting.id.includes("image") ? "Upload to update" : "Auto-saves on blur"}
                           </p>
                        </div>
                     ))}
                  </div>
                </motion.div>
             )}
          </AnimatePresence>
          
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
        </div>
      </div>
    </Section>
  );
}
