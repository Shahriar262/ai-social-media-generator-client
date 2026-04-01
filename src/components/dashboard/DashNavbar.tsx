"use client";
import React from "react";
import { Bell, Loader2 } from "lucide-react";
import { useUser, UserButton, SignInButton } from "@clerk/nextjs";

export default function DashNavbar({
  openSidebar,
}: {
  openSidebar?: () => void;
}) {
  const { isSignedIn, isLoaded, user } = useUser();

  return (
    <div
      className="sticky top-4 z-10 shadow-lg border border-white/10 mx-4 sm:mx-6 lg:mx-8 mt-4 mb-2 rounded-lg overflow-hidden"
      style={{
        backgroundColor: "rgba(15, 23, 42, 0.8)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 flex justify-between items-center">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={openSidebar}
            className="lg:hidden text-white text-xl"
          >
            ☰
          </button>

          <h1 className="text-xl font-bold text-primary">Dashboard</h1>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-3 sm:space-x-6">
          <div className="relative">
            <Bell className="w-5 sm:w-6 h-5 sm:h-6 text-gray-300 hover:text-white cursor-pointer" />
          </div>

          <div className="flex items-center space-x-3 sm:space-x-6">
            {!isLoaded ? (
              <Loader2 className="w-5 h-5 animate-spin text-indigo-500" />
            ) : isSignedIn ? (
              <div className="flex items-center gap-3 transition-transform hover:scale-105">
                <UserButton />
                <span className="hidden md:block text-sm font-medium text-slate-200">
                  {user?.firstName || "User"}
                </span>
                {/* <span className="hidden sm:block text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase tracking-tighter">
                  {(user?.publicMetadata?.role as string) || "User"}
                </span> */}
              </div>
            ) : (
              <SignInButton mode="modal">
                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                  Login
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}