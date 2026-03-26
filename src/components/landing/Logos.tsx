"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const brands = [
  "Gemini Pro", "OpenAI", "Next.js", "Vercel", 
  "Tailwind CSS", "Framer", "MongoDB", "Supabase",
  "React", "GitHub", "Claude AI", "NVIDIA"
];

export default function Logos() {
  return (
    <section className="relative w-full py-24 bg-slate-950 border-y border-white/5 overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 mb-20 text-center relative z-10">
        {/* Animated Badge Label */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] md:text-xs font-bold text-primary tracking-[0.2em] uppercase mb-6"
        >
          <Sparkles className="w-4 h-4" />
          Infrastructure
        </motion.div>
        
        {/* Headline: Now perfectly sized (5xl) for a 6xl Hero */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto"
        >
          Built on the world's most <br />
          <span className="text-gradient">Advanced AI Stack</span>
        </motion.h2>
      </div>
      
      {/* Infinite Scroll - Increased Visibility & Size */}
      <div className="relative flex overflow-hidden group py-6">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 md:gap-32 items-center"
        >
          {[...brands, ...brands].map((brand, i) => (
            <motion.span 
              key={i} 
              whileHover={{ 
                scale: 1.1, 
                color: "#818cf8", // The Bluish AI Glow
                textShadow: "0 0 30px rgba(99, 102, 241, 0.6)",
                opacity: 1
              }}
              className="text-2xl md:text-3xl font-black text-white/50 transition-all duration-300 cursor-pointer tracking-tighter select-none"
            >
              {brand}
            </motion.span>
          ))}
        </motion.div>
        
        {/* Deep Side Fades (Increased for desktop) */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-80 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-80 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}