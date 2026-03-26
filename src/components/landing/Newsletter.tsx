"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BotMessageSquare, Sparkles, Send, ShieldCheck } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulating API Call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section className="w-full py-40 bg-[#020617] relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Main Newsletter Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-20 rounded-[3rem] border border-white/10 bg-white/[0.05] backdrop-blur-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_50px_100px_-20px_rgba(0,0,0,1)] overflow-hidden group"
        >
          
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side: Copywriting */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="flex items-center gap-2 text-[#3b82f6] font-black text-[10px] tracking-[0.5em] uppercase mb-8 px-5 py-2 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-full">
                <Sparkles className="w-4 h-4" />
                Synapse Insider
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                Experience the <br />
                <span className="text-gradient">Future of AI.</span>
              </h2>
              
              <p className="text-slate-400 md:text-xl font-medium leading-relaxed max-w-xl opacity-90">
                Join the Synapse AI alpha network. Get early access to neural updates, exclusive API insights, and groundbreaking features.
              </p>

              <div className="mt-10 flex items-center gap-6 text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#3b82f6]/60" />
                  <span className="text-xs font-bold tracking-widest uppercase">Privacy Guaranteed</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/10" />
                <div className="flex items-center gap-2">
                  <BotMessageSquare className="w-5 h-5 text-[#3b82f6]/60" />
                  <span className="text-xs font-bold tracking-widest uppercase">AI Driven Insights</span>
                </div>
              </div>
            </div>

            {/* Right side: Form Control */}
            <div className="lg:col-span-5 w-full relative">
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <form 
                onSubmit={handleSubmit}
                className="relative bg-[#020617]/40 p-3 rounded-[2.5rem] border border-white/5 backdrop-blur-md shadow-2xl"
              >
                <div className="relative mb-3">
                  <div className="absolute inset-y-0 left-0 pl-7 flex items-center pointer-events-none">
                    <BotMessageSquare className={`w-6 h-6 transition-colors ${status === 'success' ? 'text-green-500' : 'text-[#3b82f6]/40'}`} />
                  </div>
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your neural mail..."
                    className="w-full h-20 pl-16 pr-6 rounded-[1.8rem] bg-white/[0.03] border border-white/10 text-white text-lg font-medium placeholder:text-slate-600 focus:ring-2 focus:ring-[#3b82f6]/40 focus:border-[#3b82f6]/50 transition-all outline-none"
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === "loading"}
                  type="submit"
                  className={`w-full h-16 rounded-[1.8rem] font-black text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all duration-500 relative overflow-hidden
                    ${status === 'success' ? 'bg-green-500 text-white' : 'bg-[#3b82f6] text-white shadow-[0_10px_30px_-5px_rgba(59,130,246,0.5)]'}
                  `}
                >
                  {status === "idle" && (
                    <>
                      Join Alpha Access <Send className="w-4 h-4" />
                    </>
                  )}
                  {status === "loading" && (
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                  {status === "success" && (
                    <span className="flex items-center gap-2">
                       Successfully Joined! <Sparkles className="w-4 h-4" />
                    </span>
                  )}
                </motion.button>
              </form>
              
              <p className="text-center mt-6 text-slate-600 text-[10px] font-bold tracking-[0.1em] uppercase">
                Zero Spam. Unsubscribe at any time.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}