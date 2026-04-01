"use client";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiVercel,
  SiRailway,
  SiNodedotjs,
} from "react-icons/si";
import { Sparkles, Cpu, Globe, Lock } from "lucide-react";

const techStack = [
  {
    name: "TypeScript",
    category: "Core Language",
    icon: <SiTypescript className="w-5 h-5 text-[#3178C6]" />,
  },
  {
    name: "Next.js 15",
    category: "Frontend Framework",
    icon: <SiNextdotjs className="w-5 h-5 text-white" />,
  },
  {
    name: "Gemini 3 Flash",
    category: "Neural Engine",
    icon: <Sparkles className="w-5 h-5 text-blue-400" />,
  },
  {
    name: "Node.js & Express",
    category: "Backend API",
    icon: <SiNodedotjs className="w-5 h-5 text-[#339933]" />,
  },
  {
    name: "Railway",
    category: "Backend Hosting",
    icon: <SiRailway className="w-5 h-5 text-white" />,
  },
  {
    name: "Vercel Edge",
    category: "Static Hosting",
    icon: <SiVercel className="w-5 h-5 text-white" />,
  },
];

export default function Architecture() {
  return (
    <section className="w-full py-32 bg-[#020617] relative">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Blue Badge Heading */}
        <div className="flex flex-col items-start mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-[#3b82f6] font-black text-[10px] tracking-[0.5em] uppercase px-4 py-1.5 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-full"
          >
            <Sparkles className="w-4 h-4" />
            System Architecture
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            The <span className="text-gradient">Technical Core.</span>
          </h2>
        </div>

        {/* High-Visibility Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -5,
                borderColor: "rgba(59, 130, 246, 0.6)",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              className="group flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-white/[0.08] backdrop-blur-3xl transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_40px_-15px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-4">
                {/* Icon Container with dark-to-light depth */}
                <div className="w-12 h-12 rounded-xl bg-[#0F172A] flex items-center justify-center border border-white/10 group-hover:border-[#3b82f6]/50 transition-colors shadow-inner">
                  {tech.icon}
                </div>

                <div className="flex flex-col">
                  <span className="text-white font-bold text-[15px] tracking-tight group-hover:text-[#3b82f6] transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-slate-500 text-[9px] font-black uppercase tracking-widest mt-0.5">
                    {tech.category}
                  </span>
                </div>
              </div>

              {/* Minimal Status Dot */}
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Technical Indicators */}
        {/* Technical Footer Indicators - High Visibility Version */}
        <div className="mt-5 flex flex-wrap items-center gap-12 border-t border-white/5 pt-12">
          {/* Spec 01 */}
          <div className="flex items-center gap-3">
            <Cpu className="w-5 h-5 text-[#3b82f6] shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            <span className="text-white font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
              99.9% Uptime
            </span>
          </div>

          {/* Spec 02 */}
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-[#3b82f6] shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            <span className="text-white font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
              Edge Optimized
            </span>
          </div>

          {/* Spec 03 */}
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-[#3b82f6] shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            <span className="text-white font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
              SSL Encrypted
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
