"use client";
import { motion } from "framer-motion";
import { MousePointer2, Wand2, Rocket, Sparkles } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Input <span class='text-gradient'>Context</span>",
    desc: "Feed our engine with a URL or raw brief. The system instantly maps semantic context and audience intent.",
    icon: <MousePointer2 className="w-6 h-6 text-[#3b82f6]" />,
  },
  {
    step: "02",
    title: "Neural <span class='text-gradient'>Synthesis</span>",
    desc: "Gemini 3 Flash analyzes performance patterns to craft high-velocity hooks and engagement-engineered copy.",
    icon: <Wand2 className="w-6 h-6 text-[#3b82f6]" />,
  },
  {
    step: "03",
    title: "Viral <span class='text-gradient'>Deployment</span>",
    desc: "Optimized assets are formatted for LinkedIn, X, and Instagram, ready for instant global reach.",
    icon: <Rocket className="w-6 h-6 text-[#3b82f6]" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-32 bg-[#020617] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        
        {/* Header with Blue Badge */}
        <div className="text-center mb-40 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-[#3b82f6] font-black text-[11px] tracking-[0.5em] uppercase mb-6 px-4 py-1.5 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-full"
          >
            <Sparkles className="w-3.5 h-3.5" />
             Workflow Architecture
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
            From Idea to <span className="text-gradient">Impact.</span>
          </h2>
        </div>

        {/* The Connection Path */}
        <div className="relative">
          {/* Main Vertical Track (Visible Blue Line) */}
          <div className="absolute left-[35px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2">
            <motion.div 
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-40 bg-gradient-to-b from-transparent via-[#3b82f6] to-transparent"
            />
          </div>

          <div className="space-y-40">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-16 md:gap-0 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text Side */}
                <div className="flex-1 w-full md:px-20 text-left">
                  <div className={`space-y-4 ${index % 2 !== 0 ? "md:text-right" : "md:text-left"}`}>
                    <h3 
                      className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    <p className="text-slate-400 text-sm md:text-lg leading-relaxed font-light max-w-md ml-0 mr-auto md:ml-0 md:mr-0 lg:mx-0 inline-block">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Central Visual Node */}
                <div className="relative z-20 shrink-0 flex flex-col items-center">
                  
                  {/* Icon Container with subtle blue glow */}
                  <div className="w-[70px] h-[70px] rounded-[2rem] bg-[#020617] border border-white/10 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_30px_rgba(59,130,246,0.1)] backdrop-blur-3xl group transition-all duration-500 hover:border-[#3b82f6]/50">
                    <div className="relative z-10">{item.icon}</div>
                  </div>

                  {/* HIGH-VISIBILITY STEP INDICATOR */}
                  <div className="mt-6">
                    <div className="px-5 py-2 rounded-xl bg-white text-[#020617] font-black text-xs tracking-[0.2em] shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
                      STEP {item.step}
                    </div>
                  </div>
                </div>

                {/* Spacer for Desktop */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}