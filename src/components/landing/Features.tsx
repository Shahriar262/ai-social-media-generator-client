"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Globe, BarChart3, BrainCircuit, Calendar, Sparkles, Cpu } from "lucide-react";

export default function Features() {
  const [activeStat, setActiveStat] = useState("performance");

  const infraStats = {
    performance: { label: "Latency", value: "84ms" },
    uptime: { label: "Uptime", value: "99.9%" },
    token: { label: "Speed", value: "120 t/s" },
  };

  return (
    <section id="features" className="w-full py-32 bg-[#020617] relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-secondary/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-24 space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-primary font-bold text-[11px] tracking-[0.5em] uppercase px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full w-fit"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Core Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]"
          >
            Neural Intelligence <br />
            <span className="text-gradient">Redefined for Scale.</span>
          </motion.h2>
          <p className="text-slate-400 text-lg font-normal leading-relaxed max-w-xl opacity-90">
             Transforming raw data into high-conversion social assets with enterprise-grade precision.
          </p>
        </div>

        {/* The Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 1. Neural Analysis Card */}
          <motion.div 
            whileHover={{ y: -8, borderColor: "rgba(99, 102, 241, 0.4)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:col-span-8 relative group rounded-[2.5rem] border border-white/10 overflow-hidden p-8 md:p-12 flex flex-col justify-between min-h-[500px] bg-white/[0.06] backdrop-blur-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500"
          >
            {/* Premium Effects Layer */}
            <div className="absolute inset-0 rounded-[2.5rem] p-[1px] pointer-events-none overflow-hidden">
              <div className="absolute inset-[-1000%] animate-border-beam [background:linear-gradient(to_right,#6366f1_0%,transparent_20%,transparent_80%,#6366f1_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute inset-0 glass-noise pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-slate-950 border border-white/10 rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:border-primary/50 transition-colors">
                <BrainCircuit className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-gradient mb-4 tracking-tighter">Neural Context Analysis</h3>
              <p className="text-slate-200 text-lg font-normal leading-relaxed max-w-lg opacity-90">
                Adaptive pattern recognition that scans niche sentiment and optimizes hooks for high-engagement viral loops.
              </p>
            </div>

            <div className="relative z-10 bg-[#020617]/80 border border-white/10 rounded-2xl p-6 font-mono shadow-2xl backdrop-blur-md group-hover:border-primary/30 transition-all">
               <div className="flex justify-between items-center mb-4 text-primary/70 border-b border-white/5 pb-3">
                  <span className="text-xs font-bold tracking-widest flex items-center gap-2 uppercase">
                    <Cpu className="w-3.5 h-3.5 animate-pulse" /> Engine_V3
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Latency: 12ms</span>
               </div>
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Contextual Match</span>
                    <span className="text-white font-bold uppercase">98.4%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }} 
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent" 
                    />
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* 2. Omni-Sync */}
            <motion.div 
              whileHover={{ y: -8, borderColor: "rgba(99, 102, 241, 0.4)" }}
              className="flex-1 rounded-[2.5rem] p-8 flex flex-col justify-between group relative overflow-hidden border border-white/10 bg-white/[0.05] backdrop-blur-3xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.3)]"
            >
              <div className="absolute inset-0 rounded-[2.5rem] p-[1px] pointer-events-none overflow-hidden">
                <div className="absolute inset-[-1000%] animate-border-beam [background:linear-gradient(to_right,#6366f1_0%,transparent_20%,transparent_80%,#6366f1_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute inset-0 glass-noise pointer-events-none" />

              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center relative z-10">
                <Share2 className="text-primary w-6 h-6" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gradient mb-1">Omni-Sync</h3>
                <p className="text-slate-300 text-sm font-normal leading-snug">Multi-platform distribution via single-thread publishing.</p>
              </div>
            </motion.div>

            {/* 3. Smart Queue */}
            <motion.div 
              whileHover={{ y: -8, borderColor: "rgba(34, 211, 238, 0.4)" }}
              className="flex-1 rounded-[2.5rem] bg-white/[0.05] border border-white/10 p-8 flex flex-col justify-between group relative overflow-hidden backdrop-blur-3xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.3)]"
            >
              <div className="absolute inset-0 rounded-[2.5rem] p-[1px] pointer-events-none overflow-hidden">
                <div className="absolute inset-[-1000%] animate-border-beam [background:linear-gradient(to_right,#22d3ee_0%,transparent_20%,transparent_80%,#22d3ee_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute inset-0 glass-noise pointer-events-none" />

              <Calendar className="text-primary w-8 h-8 group-hover:scale-110 transition-transform relative z-10" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gradient mb-1 tracking-tight">Smart Queue</h3>
                <p className="text-slate-300 text-sm font-normal leading-snug">Auto-schedule for peak engagement windows.</p>
              </div>
            </motion.div>
          </div>

          {/* 4. Predictive ROI */}
          <motion.div 
            whileHover={{ y: -8, borderColor: "rgba(99, 102, 241, 0.4)" }}
            className="md:col-span-4 rounded-[2.5rem] bg-white/[0.05] border border-white/10 p-10 flex flex-col justify-between group relative overflow-hidden backdrop-blur-3xl min-h-[240px] transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.3)]"
          >
            <div className="absolute inset-0 rounded-[2.5rem] p-[1px] pointer-events-none overflow-hidden">
              <div className="absolute inset-[-1000%] animate-border-beam [background:linear-gradient(to_right,#6366f1_0%,transparent_20%,transparent_80%,#6366f1_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute inset-0 glass-noise pointer-events-none" />

            <BarChart3 className="text-primary w-10 h-10 group-hover:rotate-6 transition-transform relative z-10" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gradient mb-2 tracking-tighter">Predictive ROI</h3>
              <p className="text-slate-300 text-sm font-normal leading-relaxed">Forecast reach probability using neural engines.</p>
            </div>
          </motion.div>

          {/* 5. Infrastructure Card */}
          <motion.div 
            whileHover={{ y: -8, borderColor: "rgba(255, 255, 255, 0.2)" }}
            className="md:col-span-8 p-10 rounded-[2.5rem] bg-white/[0.06] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-10 group relative overflow-hidden backdrop-blur-3xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_25px_50px_-12px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 rounded-[2.5rem] p-[1px] pointer-events-none overflow-hidden">
              <div className="absolute inset-[-1000%] animate-border-beam [background:linear-gradient(to_right,#ffffff_0%,transparent_20%,transparent_80%,#ffffff_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute inset-0 glass-noise pointer-events-none" />

            <div className="flex items-center gap-6 relative z-10 w-full">
              <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner group-hover:border-primary/50 transition-all">
                <Globe className="text-primary w-8 h-8 animate-pulse" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-gradient tracking-tight uppercase">Edge Infrastructure</h3>
                <p className="text-slate-400 text-base font-light">
                  Powered by <span className="text-white font-bold">Gemini 3 Flash</span>.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 bg-black/60 px-10 py-6 rounded-[2.5rem] border border-white/10 shadow-2xl relative z-10 w-full md:w-auto justify-between min-w-[300px] group-hover:bg-black/80 transition-all">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeStat} 
                  initial={{ opacity: 0, x: 15 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  className="text-left"
                >
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-1">{infraStats[activeStat as keyof typeof infraStats].label}</p>
                  <p className="text-4xl font-mono font-bold text-white tracking-tighter leading-none">
                    {infraStats[activeStat as keyof typeof infraStats].value}
                  </p>
                </motion.div>
              </AnimatePresence>
              
              <div className="flex md:flex-col gap-3">
                {Object.keys(infraStats).map((id) => (
                  <button 
                    key={id} 
                    onClick={() => setActiveStat(id)} 
                    
                    className={`w-3 h-10 md:w-2.5 md:h-10 rounded-full transition-all duration-500 ${
                      activeStat === id ? 'bg-primary shadow-[0_0_20px_rgba(99,102,241,0.6)]' : 'bg-white/10 hover:bg-white/20'
                    }`} 
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}