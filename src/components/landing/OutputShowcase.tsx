"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Sparkles } from "lucide-react";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

const mockOutputs = {
  linkedin: {
    name: "LinkedIn",
    icon: <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />,
    content:
      "🚀 AI is not replacing developers; it's empowering them. \n\nOur latest neural engine just reduced content overhead by 90%. Here is how we did it: \n\n1. Real-time context mapping\n2. High-velocity tokens\n3. Zero-shot optimization\n\n#AI #WebDev #Innovation",
    tag: "High Engagement",
  },
  twitter: {
    name: "Twitter",
    icon: <FaXTwitter className="w-5 h-5 text-white" />,
    content:
      "Stop writing average hooks. 🧵\n\nWe analyzed 10M+ viral posts to build the ultimate AI Social Generator. \n\nResults? \n✅ 3x CTR\n✅ 5x reach\n✅ 0 effort\n\nTry it now. 👇",
    tag: "Viral Thread",
  },
  instagram: {
    name: "Instagram",
    icon: <FaInstagram className="w-5 h-5 text-[#E4405F]" />,
    content:
      "Visual storytelling meets neural intelligence. ✨\n\nTransforming static ideas into dynamic growth. Swipe to see the magic of Gemini 3 Flash. \n\n#Creativity #AIRevolution #SocialGrowth",
    tag: "Aesthetic Boost",
  },
};

export default function OutputShowcase() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof mockOutputs>("linkedin");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(mockOutputs[activeTab].content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-32 bg-[#020617] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-primary font-bold text-[11px] tracking-[0.5em] uppercase px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full w-fit"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Instant Preview
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1]">
              From Thought to <br />{" "}
              <span className="text-gradient">Viral Output.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg font-light">
              Our AI doesn&apos;t just write text; it performs engagement
              engineering. Select a platform to witness the neural precision of
              our generated assets.
            </p>

            <div className="flex flex-wrap gap-3">
              {(
                Object.keys(mockOutputs) as Array<keyof typeof mockOutputs>
              ).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 border flex items-center gap-2 ${
                    activeTab === tab
                      ? "bg-white/10 border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                      : "border-white/5 text-slate-500 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {mockOutputs[tab].icon}
                  <span className="text-sm">
                    {mockOutputs[tab].name.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Glossy Output Card */}
          <div className="relative group">
            {/* Outer Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000" />

            <motion.div
              layout
              className="relative bg-white/[0.06] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="absolute inset-0 glass-noise pointer-events-none" />

              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner group-hover:border-primary/50 transition-all">
                    {mockOutputs[activeTab].icon}
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg tracking-tight">
                      Smart Generator
                    </p>
                    <p className="text-primary text-[10px] font-black tracking-[0.2em] uppercase">
                      {mockOutputs[activeTab].tag}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all text-slate-400 hover:text-white group/copy"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 group-hover/copy:scale-110 transition-transform" />
                  )}
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 min-h-[200px] bg-[#020617]/60 rounded-3xl p-8 border border-white/10 shadow-2xl"
                >
                  <p className="text-slate-200 font-mono text-sm leading-relaxed whitespace-pre-wrap italic">
                    {mockOutputs[activeTab].content}
                  </p>

                  {/* Bottom Decoration */}
                  <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
                    <div className="flex gap-1">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-white/10"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                      Optimized by Neural_V3
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
