import {
  Star,
  Zap,
  Shield,
  Globe,
  Cpu,
  CheckCircle2,
  ArrowLeft,
  Share2,
  Layers,
  BarChart3,
  Rocket,
  Terminal,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import assets from "@/data/assets.json";
import { ToolAsset } from "@/types";

export default async function DetailsPage({ params }: { params: Promise<{ id: string }> }) {
  
  const { id } = await params;
  const tool = (assets as unknown as ToolAsset[]).find((a) => a.id === id);

  if (!tool)
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-background font-poppins">
        Tool Not Found
      </div>
    );

  return (
    <div className="min-h-screen mb-20 bg-background text-slate-200 font-poppins selection:bg-primary/30">
      
      {/* 1. Hero / Header Section */}
      <div className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto pt-10 relative">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-primary transition-all mb-8 font-bold uppercase text-[10px] tracking-[0.2em] group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            Back to Explore
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Visual Section (Left) */}
            <div className="lg:col-span-5 w-full">
              <div className="group relative w-full flex justify-center items-center rounded-[3rem] overflow-hidden glass p-4 shadow-2xl shadow-black/50 transition-all hover:border-white/10">
                <Image
                  src={tool.image}
                  alt={tool.title}
                  width={800}
                  height={800}
                  priority
                  className="rounded-[2.5rem] object-cover transition-transform duration-1000 group-hover:scale-105 w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-6">
                <Cpu className="w-4 h-4 text-secondary animate-pulse" />
                <span className="text-[10px] font-black text-secondary uppercase tracking-tighter">
                  Powered by {tool.aiModel}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight text-gradient">
                {tool.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-8 py-6 border-y border-white/10">
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                  <span className="text-2xl font-black text-white">{tool.rating}</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">/ 5.0 Rating</span>
                </div>
                <div className="h-8 w-px bg-white/10 hidden md:block" />
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-white">{tool.price}</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">/ Month</span>
                </div>
              </div>

              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
                {tool.longDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="flex-1 min-w-[240px] bg-primary hover:bg-indigo-400 text-white py-5 rounded-3xl font-black text-lg transition-all active:scale-95 shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                  <Rocket className="w-5 h-5" /> Launch Tool
                </button>
                <button aria-label="Share button" className="p-5 rounded-3xl border border-white/10 bg-card hover:bg-slate-800 text-white transition-all shadow-lg">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Deep Detail Sections */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Workflow & Features */}
          <div className="lg:col-span-2 space-y-8">
            {/* Workflow Card */}
            <div className="bg-card border border-white/10 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
              <div className="glass-noise absolute inset-0 opacity-20 pointer-events-none" />
              <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-3 relative">
                <Layers className="text-secondary w-6 h-6" /> Operational Workflow
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                {tool.workflow.map((step, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-background/60 border border-white/5 group hover:border-primary/40 transition-all hover:bg-background/80">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-black text-sm border border-primary/20">
                      0{i + 1}
                    </span>
                    <p className="text-slate-300 font-bold text-sm leading-tight self-center">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Detail */}
            <div className="bg-card border border-white/10 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
               <div className="glass-noise absolute inset-0 opacity-20 pointer-events-none" />
              <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-3 relative">
                <Shield className="text-emerald-400 w-6 h-6" /> Strategic Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 relative">
                {tool.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0 group">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Metadata & Stats */}
          <div className="space-y-8">
            {/* Quick Specs Card - Full Glass Effect */}
            <div className="glass rounded-[2.5rem] p-8 shadow-2xl relative group overflow-hidden">
              <div className="glass-noise absolute inset-0 opacity-20 pointer-events-none" />
              <h3 className="text-xs font-black text-slate-500 mb-8 uppercase tracking-[0.2em] relative">Engine Specs</h3>
              <div className="space-y-8 relative">
                <div className="flex items-start gap-4 group/item">
                  <Terminal className="w-5 h-5 text-primary mt-1 group-hover/item:text-secondary transition-colors" />
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Output Format</p>
                    <p className="text-sm font-black text-slate-200">{tool.outputFormat}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/item">
                  <Target className="w-5 h-5 text-secondary mt-1 group-hover/item:text-primary transition-colors" />
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Target Audience</p>
                    <p className="text-sm font-black text-slate-200">{tool.targetAudience}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Neural Analytics - Gradient Contrast Card */}
            <div className="bg-card border border-white/10 rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden bg-gradient-to-br from-card to-primary/5">
              <div className="glass-noise absolute inset-0 opacity-20 pointer-events-none" />
              <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2 relative">
                <BarChart3 className="w-5 h-5 text-secondary" /> Neural Analytics
              </h3>
              <div className="grid grid-cols-1 gap-4 relative">
                {Object.entries(tool.stats).map(([key, value]) => (
                  <div key={key} className="bg-background/80 p-4 rounded-2xl flex justify-between items-center border border-white/5 hover:border-primary/20 transition-all shadow-inner">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{key}</span>
                    <span className="text-lg font-black text-secondary">{value as string}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}