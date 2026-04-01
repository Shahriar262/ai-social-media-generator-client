"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import {
  LayoutDashboard,
  Users,
  Settings,
  ChevronRight,
  BotMessageSquare,
  FileText,
  BarChart3,
  Home,
  Sparkles,
  MessageSquare,
} from "lucide-react";

export default function Sidebar({
  closeSidebar,
}: {
  closeSidebar?: () => void;
}) {
  const pathname = usePathname();
  const { user } = useUser();
  const role = (user?.publicMetadata?.role as string) || "user";

  const adminLinks = [
    { name: "Overview", href: "/dashboard/admin", icon: LayoutDashboard },
    { name: "User Management", href: "/dashboard/admin/users", icon: Users },
    { name: "All Contents", href: "/dashboard/admin/contents", icon: FileText },
    { name: "Analytics", href: "/dashboard/admin/analytics", icon: BarChart3 },
    { name: "Settings", href: "/dashboard/admin/settings", icon: Settings },
  ];

  const userLinks = [
    { name: "Overview", href: "/dashboard/user", icon: Home },
    { name: "AI Generator", href: "/dashboard/user/generate", icon: Sparkles },
    { name: "My Reviews", href: "/dashboard/user/my-reviews", icon: MessageSquare },
  ];

  const activeLinks = role === "admin" ? adminLinks : userLinks;

  return (
    <div className="h-full w-64">
      <div
        className="h-full border-r border-white/10 p-4 flex flex-col overflow-y-auto shadow-2xl"
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.9)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Logo + Close */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group -mt-4">
            <div className="bg-indigo-500/20 p-2 rounded-xl border border-indigo-500/20">
              <BotMessageSquare className="w-6 h-6 text-indigo-400" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Synapse <span className="text-indigo-400">AI</span>
            </span>
          </Link>

          {/* Mobile Close */}
          <button
            onClick={closeSidebar}
            className="lg:hidden text-white text-xl"
          >
            ✕
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-2 mt-4">
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold px-3 mb-4">
            {role === "admin" ? "Admin Panel" : "User Panel"}
          </p>

          {activeLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeSidebar}
                className={`flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]"
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <link.icon
                    className={`w-5 h-5 ${
                      isActive
                        ? "text-indigo-400"
                        : "group-hover:text-indigo-400"
                    }`}
                  />
                  <span className="text-sm font-medium">{link.name}</span>
                </div>
                {isActive && <ChevronRight className="w-4 h-4" />}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="p-4 border-t border-white/5 bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-[10px] text-slate-400 font-medium italic">
              System Online: {role.toUpperCase()} MODE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}