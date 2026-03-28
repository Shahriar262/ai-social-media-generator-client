// src/components/Sidebar.tsx
import Link from "next/link";
// আমরা যে Roles টাইপটি বানিয়েছিলাম সেটি ইমপোর্ট করছি
import { Roles } from "@/types/globals"; 

// ১. প্রপস এর জন্য একটি ইন্টারফেস তৈরি করুন
interface SidebarProps {
  role: Roles | undefined; 
}

// ২. ফাংশনের প্যারামিটারে প্রপসটি রিসিভ করুন
export default function Sidebar({ role }: SidebarProps) {
  return (
    <div className="flex flex-col h-full p-6 bg-slate-900">
      <div className="mb-8 px-2">
        <h2 className="text-xl font-extrabold text-white tracking-tight">
          Synapse <span className="text-primary italic">AI</span>
        </h2>
      </div>

      <nav className="space-y-1.5 flex-1">
        <Link href="/dashboard" className="block p-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all text-sm font-medium group">
          Dashboard Overview
        </Link>
        <Link href="/dashboard/chat" className="block p-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all text-sm font-medium">
          AI Assistant
        </Link>
      </nav>

      {/* REQUIREMENT #8: শুধু অ্যাডমিন এই অংশটি দেখবে */}
      {role === "admin" && (
        <div className="mt-auto border-t border-white/5 pt-6 bg-slate-900/50 rounded-2xl p-4 border border-primary/10">
          <p className="text-[10px] font-bold text-primary mb-4 uppercase tracking-[0.2em]">
            Admin Access
          </p>
          <Link href="/dashboard/admin/users" className="block p-3 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition-all text-sm font-medium">
            User Management
          </Link>
          <Link href="/dashboard/admin/settings" className="block p-3 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition-all text-sm font-medium">
            System Settings
          </Link>
        </div>
      )}
    </div>
  );
}