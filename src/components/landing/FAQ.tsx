"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "How secure is my data on this platform?",
    answer: "We prioritize your privacy. All social media content generated is processed securely via SSL encryption, and we never store your personal API keys on our servers.",
  },
  {
    question: "Does it support multiple languages?",
    answer: "Yes! Powered by Gemini 3 Flash, the platform can generate highly engaging content in English, Bengali, and 40+ other global languages with perfect context.",
  },
  {
    question: "Is there a limit to content generation?",
    answer: "The free tier allows up to 50 high-quality generations per day. For power users, we offer professional plans with expanded rate limits.",
  },
  {
    question: "Can I customize the 'Tone of Voice'?",
    answer: "Absolutely. You can choose from Professional, Humorous, Bold, or Minimalist tones to match your personal brand or business identity.",
  },
];

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="w-full py-32 bg-[#020617] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative">
        
        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="flex items-center gap-2 text-[#3b82f6] font-black text-[10px] tracking-[0.5em] uppercase mb-6 px-4 py-1.5 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-full">
            <Sparkles className="w-4 h-4" />
             Knowledge Base
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
            Common <span className="text-gradient">Queries.</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] overflow-hidden transition-all duration-300 hover:border-blue-500/30"
            >
              <button
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-xl transition-colors ${activeIdx === i ? 'bg-[#3b82f6] text-white' : 'bg-white/5 text-slate-400'}`}>
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span className="text-white font-bold text-lg md:text-xl tracking-tight leading-none">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-500 ${activeIdx === i ? 'rotate-180 text-[#3b82f6]' : ''}`} />
              </button>

              <AnimatePresence>
                {activeIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 pt-0 ml-14">
                      <p className="text-slate-400 text-lg leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}