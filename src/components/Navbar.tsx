"use client";
import Link from "next/link";
import { useState } from "react";
import {
  BotMessageSquare,
  Menu,
  X,
  Zap,
  History,
  LayoutDashboard,
  CreditCard,
  ChevronRight,
  HomeIcon,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Features", href: "#features", icon: Zap },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "History", href: "/history", icon: History },
    { name: "Pricing", href: "#pricing", icon: CreditCard },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary/20 p-2 rounded-xl border border-primary/20 group-hover:border-primary/50 transition-all shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <BotMessageSquare className="w-7 h-7 text-primary" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Synapse <span className="text-primary text-gradient">AI</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 pl-6 border-l border-white/10">
              <Link
                href="/login"
                className="text-sm font-medium text-slate-300 hover:text-white px-3"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="group relative inline-flex items-center justify-center px-6 py-2.5 font-bold text-white transition-all duration-200 bg-primary rounded-xl hover:bg-primary/90 focus:outline-none shadow-[0_0_20px_rgba(99,102,241,0.3)] active:scale-95"
              >
                Get Started
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-white/10 px-4 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 text-lg font-medium text-slate-300 hover:text-white py-2"
            >
              <link.icon className="w-5 h-5 text-primary" />
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <Link
              href="/login"
              className="block text-center py-3 text-slate-300 font-medium"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="block text-center py-3 bg-primary text-white font-bold rounded-xl shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
