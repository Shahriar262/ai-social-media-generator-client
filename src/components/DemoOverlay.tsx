"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { Copy, Check, Key, X, ShieldCheck, Zap, Star, MousePointer2 } from "lucide-react";

export default function DemoOverlay() {
  const [copied, setCopied] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { isSignedIn, isLoaded } = useUser();

  // Clerk Modal 
  useEffect(() => {
    const checkModal = () => {
      const modal = document.querySelector(".cl-modalContent") || 
                    document.querySelector(".cl-signIn-root") || 
                    document.querySelector(".cl-card") ||
                    document.querySelector(".cl-rootBox");
      setIsVisible(!!modal);
    };

    const interval = setInterval(checkModal, 600);
    return () => clearInterval(interval);
  }, []);

  if (!isLoaded || isSignedIn || !isVisible) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="fixed inset-0 z-[2147483647] pointer-events-none flex items-end md:items-center justify-center md:justify-end p-4 md:p-8">
      
      {/* floating indicator button */}
      {!isExpanded && (
        <button 
          onClick={() => setIsExpanded(true)}
          aria-label="Open Demo Credentials"
          title="Click to view login data"
          className="pointer-events-auto flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white p-4 md:p-5 rounded-[2.2rem] shadow-[0_20px_50px_rgba(79,70,229,0.5)] animate-bounce border-2 border-white/20 transition-all active:scale-90 group relative"
        >
          {/* clickable pulse indicator */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 flex items-center justify-center">
              <MousePointer2 className="w-2 h-2 text-white" />
            </span>
          </span>
          
          <Zap className="w-5 h-5 text-amber-300 fill-amber-300 group-hover:rotate-12 transition-transform" />
          <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.15em] px-2">
            Recruiter? Quick Demo Access
          </span>
        </button>
      )}

      {/* responsive pop-up card */}
      <div 
        className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform 
                   max-md:w-full max-md:max-w-[420px] md:w-[360px]
                   ${isExpanded 
                     ? "translate-y-0 opacity-100 scale-100" 
                     : "translate-y-20 opacity-0 scale-90 pointer-events-none"}`}
      >
        <div className="relative bg-slate-900/98 border-2 border-indigo-500/40 rounded-[2.5rem] shadow-[0_0_80px_-10px_rgba(0,0,0,1)] backdrop-blur-3xl overflow-hidden">
          
          
          <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>

          <div className="p-7 md:p-9">
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-indigo-600 rounded-2xl shadow-[0_0_20px_rgba(79,70,229,0.4)] relative group cursor-help">
                   <ShieldCheck className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                   <div className="absolute -top-1 -right-1 h-3 w-3 bg-emerald-500 border-2 border-slate-900 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h4 className="text-[13px] font-black text-white uppercase tracking-widest leading-none">Recruiter Hub</h4>
                  <p className="text-[9px] text-slate-500 font-bold uppercase mt-1.5 tracking-tighter">Verified Demo Accounts</p>
                </div>
              </div>
              
              <button 
                onClick={() => setIsExpanded(false)}
                aria-label="Close Demo Overlay"
                title="Close"
                className="group p-2.5 bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 rounded-2xl transition-all border border-white/5 active:scale-90"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* credential section */}
            <div className="space-y-6 relative z-10">
              {/* Admin Account */}
              <div className="group/item">
                <div className="flex justify-between items-center mb-2.5 px-1">
                  <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-indigo-400" /> Admin Access
                  </p>
                  {copied === "ae" && <span className="text-[9px] text-emerald-400 font-bold animate-in fade-in slide-in-from-right-2">Copied!</span>}
                </div>
                <button 
                  onClick={() => copyToClipboard("admin@example.com", "ae")}
                  aria-label="Copy Admin Email"
                  className="w-full p-4 bg-slate-950/80 border border-white/10 rounded-2xl text-[14px] font-bold text-slate-200 flex justify-between items-center hover:border-indigo-500/60 transition-all active:bg-indigo-500/10 group/btn"
                >
                  admin@example.com
                  <Copy className={`w-4 h-4 transition-all ${copied === "ae" ? "text-emerald-400 scale-125" : "opacity-20 group-hover/btn:opacity-100 group-hover/btn:scale-110"}`} />
                </button>
              </div>

              {/* User Account */}
              <div className="group/item">
                <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest mb-2.5 px-1">Standard User</p>
                <button 
                  onClick={() => copyToClipboard("user@example.com", "ue")}
                  aria-label="Copy User Email"
                  className="w-full p-4 bg-slate-950/80 border border-white/10 rounded-2xl text-[14px] font-bold text-slate-200 flex justify-between items-center hover:border-emerald-500/60 transition-all active:bg-emerald-500/10 group/btn"
                >
                  user@example.com
                  <Copy className={`w-4 h-4 transition-all ${copied === "ue" ? "text-emerald-400 scale-125" : "opacity-20 group-hover/btn:opacity-100 group-hover/btn:scale-110"}`} />
                </button>
              </div>

              {/* Master Password - The "Call to Action" */}
              <div className="pt-4">
                <div className="bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-[2.2rem] p-6 shadow-2xl border border-white/10 group/pass relative overflow-hidden active:scale-[0.98] transition-transform">
                  <div className="absolute top-0 right-0 p-3 opacity-20 group-hover/pass:rotate-12 transition-transform">
                    <Key className="w-12 h-12 text-white" />
                  </div>
                  
                  <p className="text-[9px] text-indigo-100 font-bold uppercase tracking-[0.4em] mb-4 text-center">Master Password</p>
                  
                  <button 
                    onClick={() => copyToClipboard("Synapse@2026", "pass")}
                    aria-label="Copy Master Password"
                    className="w-full py-4 bg-white text-indigo-950 rounded-2xl text-[16px] font-black flex justify-center items-center gap-3 hover:bg-slate-100 transition-all shadow-xl relative z-10"
                  >
                    Synapse@2026
                    {copied === "pass" ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5 opacity-40" />}
                  </button>
                  
                  {/* Click Indicator for Password */}
                  <div className="mt-3 flex justify-center gap-1 opacity-40">
                    <div className="h-1 w-4 rounded-full bg-white/30"></div>
                    <div className="h-1 w-1 rounded-full bg-white/30 animate-pulse"></div>
                    <div className="h-1 w-1 rounded-full bg-white/30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-500/10 blur-3xl rounded-full"></div>
        </div>
      </div>
    </div>
  );
}