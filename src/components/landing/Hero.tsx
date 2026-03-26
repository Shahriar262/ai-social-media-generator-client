"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Sparkles, Command } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Subdued Gradient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-5%] left-[10%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Refined Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] md:text-xs font-bold text-primary tracking-[0.2em] uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>v1.0 is now live for early access</span>
          </motion.div>

          {/* Balanced Headline - Scaled Down for Professional Look */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15] max-w-3xl"
          >
            Supercharge your social media with{" "}
            <span className="text-gradient">Synapse AI</span>
          </motion.h1>

          {/* Refined Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="max-w-xl mx-auto text-base md:text-lg text-slate-400 mb-10 leading-relaxed font-light"
          >
            The intelligent engine that crafts viral-ready content for LinkedIn,
            Twitter, and Instagram using advanced neural processing.
          </motion.p>

          {/* Clean CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/register"
              className="btn btn-primary px-8 h-12 min-h-0 text-sm font-semibold text-white rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-all"
            >
              Start Building
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
            <Link
              href="#features"
              className="btn btn-ghost px-8 h-12 min-h-0 text-sm font-semibold text-slate-300 border border-white/10 rounded-xl hover:bg-white/5"
            >
              How it works
            </Link>
          </motion.div>

          {/* Contained Product Preview (Browser Mockup Style) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-4xl mx-auto"
          >
            {/* The "Shell" */}
            <div className="relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent shadow-2xl overflow-hidden border border-white/10">
              {/* Browser Header Decoration */}
              <div className="h-8 bg-slate-900/50 border-b border-white/5 flex items-center px-4 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="mx-auto bg-white/5 rounded px-10 h-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary/40 mr-2" />
                  <span className="text-[10px] text-slate-500 font-mono tracking-tighter uppercase">
                    synapse-ai.studio
                  </span>
                </div>
              </div>

              {/* Actual Image - Contained and Normalized */}
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1400"
                alt="Synapse Dashboard Preview"
                className="w-full aspect-video object-cover rounded-b-xl grayscale-[30%] opacity-80"
              />

              {/* Subtle Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Absolute Floating UI Element (Small & Professional) */}
            <div className="absolute -bottom-4 -right-4 md:-right-8 bg-slate-900/90 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl hidden md:flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Command className="w-4 h-4 text-primary" />
              </div>
              <div className="text-left pr-4">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                  AI Analysis
                </p>
                <p className="text-xs text-white font-medium">
                  Content Score: 98%
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
