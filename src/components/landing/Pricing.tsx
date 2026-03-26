"use client";
import { motion } from "framer-motion";
import { Check, Zap, Sparkles } from "lucide-react";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

const pricingTiers = [
  { 
    name: "Starter", 
    price: "0", 
    desc: "For individual creators testing the neural engine.", 
    features: ["5 AI Generations / mo", "LinkedIn & X only", "Standard Speed"], 
    cta: "Start Free", 
    popular: false 
  },
  { 
    name: "Professional", 
    price: "29", 
    desc: "For growth hackers scaling their brand.", 
    features: ["Unlimited Generations", "All Platforms + Instagram", "Priority Processing", "Advanced Analytics"], 
    cta: "Go Pro Now", 
    popular: true 
  },
  { 
    name: "Enterprise", 
    price: "Custom", 
    desc: "For agencies and high-volume teams.", 
    features: ["Full API Access", "Custom Model Training", "Dedicated Support", "White-label Output"], 
    cta: "Contact Sales", 
    popular: false 
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-32 bg-[#020617] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Updated Header with Small Blue Text */}
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-[#3b82f6] font-black text-[10.5px] tracking-[0.5em] uppercase mb-6 px-4 py-1.5 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-full"
          >
            <Sparkles className="w-3.5 h-3.5" /> Strategic Plans
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-8">
            Scale Your <span className="text-gradient">Impact.</span>
          </h2>
          
          <div className="flex items-center justify-center gap-8 text-slate-500">
            <FaLinkedin className="w-6 h-6 hover:text-[#3b82f6] transition-colors cursor-pointer" />
            <FaInstagram className="w-6 h-6 hover:text-[#3b82f6] transition-colors cursor-pointer" />
            <FaXTwitter className="w-6 h-6 hover:text-[#3b82f6] transition-colors cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative p-10 rounded-[2.5rem] border ${
                tier.popular ? "border-[#3b82f6]/50 shadow-[0_40px_80px_-15px_rgba(59,130,246,0.2)]" : "border-white/10"
              } bg-white/[0.05] backdrop-blur-3xl flex flex-col justify-between transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]`}
            >
              {/* Glossy Edge Reflection */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {tier.popular && (
                <div className="absolute top-0 right-12 bg-[#3b82f6] text-white text-[10px] font-black px-4 py-2 rounded-b-xl uppercase tracking-[0.2em]">
                  Recommended
                </div>
              )}

              <div>
                <p className="text-[#3b82f6] font-black text-[11px] tracking-[0.4em] uppercase mb-8">
                  {tier.name}
                </p>
                <div className="flex items-baseline gap-1 mb-6 text-white">
                  <span className="text-6xl font-black tracking-tighter">
                    {tier.price !== "Custom" ? `$${tier.price}` : tier.price}
                  </span>
                  {tier.price !== "Custom" && <span className="text-slate-500 font-bold text-lg">/mo</span>}
                </div>
                <p className="text-slate-400 text-[15px] font-light mb-10 leading-relaxed">
                  {tier.desc}
                </p>
                
                <div className="space-y-5 mb-12">
                  {tier.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#3b82f6]" />
                      </div>
                      <span className="text-slate-200 text-[14px] font-medium tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full py-5 rounded-2xl font-semibold text-[12px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-2 ${
                tier.popular 
                ? "bg-[#3b82f6] text-white shadow-lg shadow-[#3b82f6]/20 hover:scale-[1.02]" 
                : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
              }`}>
                {tier.cta} <Zap className="w-3.5 h-3.5 fill-current" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}