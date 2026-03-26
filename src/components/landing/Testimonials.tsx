"use client";
import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

const reviews = [
  {
    name: "Alex Rivera",
    role: "Content Strategist",
    image: "/testimonials/review1.jpg", 
    text: "The speed of Gemini 3 Flash integrated here is insane. I generated a week's worth of LinkedIn content in seconds.",
  },
  {
    name: "Jordan Smith",
    role: "Growth Hacker",
    image: "/testimonials/review2.jpg",
    text: "Finally, a generator that understands viral hooks without sounding like a bot. This is a game changer.",
  },
  {
    name: "David Vance",
    role: "Product Manager",
    image: "/testimonials/review3.jpg",
    text: "Cleanest UI I've seen in an AI tool. The architecture is solid and the output is actually human-readable.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-32 bg-[#020617] relative overflow-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Blue Badge Heading */}
        <div className="text-center mb-32 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-[#3b82f6] font-black text-[10.5px] tracking-[0.5em] uppercase mb-6 px-4 py-1.5 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-full"
          >
            <Sparkles className="w-4 h-4" />
             System Validation
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
            User <span className="text-gradient">Voices.</span>
          </h2>
        </div>

        {/* High-Definition Glossy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12, borderColor: "rgba(59, 130, 246, 0.5)" }}
              className="relative p-12 rounded-[3rem] border border-white/10 bg-white/[0.07] backdrop-blur-3xl transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_30px_60px_-15px_rgba(0,0,0,0.8)] group flex flex-col"
            >
              
              {/* GLOSSY BLUE QUOTE ICON */}
              <div className="absolute -top-8 left-12 w-16 h-16 rounded-2xl bg-[#020617] border border-white/10 flex items-center justify-center shadow-[0_10px_30px_rgba(59,130,246,0.2)] group-hover:border-[#3b82f6]/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Quote className="w-7 h-7 text-white group-hover:text-[#3b82f6] group-hover:scale-110 transition-all z-10" />
              </div>

              {/* HIGH VISIBILITY TEXT (Clean Poppins - No Italic) */}
              <p className="text-white text-lg md:text-xl font-medium leading-relaxed mb-12 tracking-tight opacity-90 group-hover:opacity-100 transition-opacity">
                &ldquo;{rev.text}&rdquo;
              </p>

              <div className="flex items-center gap-5 border-t border-white/10 pt-10 mt-auto">
                {/* Local Professional Avatar with Glass Frame */}
                <div className="relative shrink-0 p-1 rounded-[1.2rem] bg-gradient-to-br from-white/20 to-transparent shadow-2xl">
                  <img 
                    src={rev.image} 
                    alt={rev.name} 
                    className="w-16 h-16 rounded-[1.1rem] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl tracking-tight leading-none mb-1.5">{rev.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#3b82f6]" />
                    <span className="text-[#3b82f6] font-bold text-[10px] tracking-[0.2em] uppercase">
                      {rev.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}