"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
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
  Loader2,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isSignedIn, isLoaded } = useUser();

  const navLinks = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Features", href: "#features", icon: Zap },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "History", href: "/history", icon: History },
    { name: "Pricing", href: "#pricing", icon: CreditCard },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-indigo-500/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-indigo-500/20 p-2 rounded-xl border border-indigo-500/20 group-hover:border-indigo-500/50 transition-all shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <BotMessageSquare className="w-7 h-7 text-indigo-400" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Synapse <span className="text-indigo-400">AI</span>
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
                  className={`text-sm font-medium transition-all duration-300 flex items-center gap-1.5 group ${
                    pathname === link.href
                      ? "text-indigo-400 drop-shadow-[0_0_10px_rgba(129,140,248,0.4)]"
                      : "text-slate-200 hover:text-indigo-400"
                  }`}
                >
                  <link.icon
                    className={`w-4 h-4 transition-colors ${
                      pathname === link.href ? "text-indigo-400" : "text-slate-200 group-hover:text-indigo-400"
                    }`}
                  />
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Auth Section - Clean & Simple */}
            <div className="flex items-center gap-4 pl-6 border-l border-white/10">
              {!isLoaded ? (
                <Loader2 className="w-5 h-5 animate-spin text-indigo-500" />
              ) : isSignedIn ? (
                <div className="transition-transform hover:scale-105">
                  <UserButton />
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <SignInButton mode="modal">
                    <button className="text-sm font-medium text-slate-300 hover:text-white px-2 transition-colors">
                      Login
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-indigo-900/20 active:scale-95 flex items-center gap-1 transition-all">
                      Join <ChevronRight className="w-4 h-4" />
                    </button>
                  </SignUpButton>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="md:hidden flex items-center gap-4">
            {isLoaded && isSignedIn && (
              <div className="scale-90">
                <UserButton />
              </div>
            )}
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-indigo-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden absolute w-full bg-slate-950/95 border-b border-white/10 transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
        }`}
      >
        <div className="px-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 text-lg font-medium py-2 transition-colors ${
                pathname === link.href ? "text-indigo-400" : "text-slate-300 hover:text-indigo-400"
              }`}
            >
              <link.icon className="w-5 h-5" /> {link.name}
            </Link>
          ))}
          
          <div className="pt-4 border-t border-white/10">
            {!isSignedIn && (
              <div className="flex flex-col gap-3">
                <SignInButton mode="modal">
                  <button className="w-full py-3 border border-white/10 rounded-xl text-slate-300 font-medium">
                    Login
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-900/20">
                    Get Started
                  </button>
                </SignUpButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;