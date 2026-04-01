"use client";

import { Search, ChevronDown } from "lucide-react";

interface ExploreHeaderProps {
  onSearch: (query: string) => void;
  onFilter?: (category: string) => void;
  onSort?: (sortType: string) => void;
}

export default function ExploreHeader({
  onSearch,
  onFilter,
  onSort,
}: ExploreHeaderProps) {
  return (
    <div className="space-y-8 mb-12">
      {/* ১. টাইটেল সেকশন */}
      <div className="text-center mt-10 space-y-4">
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          Explore <span className="text-indigo-500">Synapse</span> Assets
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-medium">
          Discover high-performance AI models, neural assets, and digital
          components.
        </p>
      </div>

      {/* ২. সার্চ ও ফিল্টার কন্টেইনার */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between glass p-2 rounded-[2rem] border-white/5 shadow-2xl">
        {/* সার্চ বার */}
        <div className="relative w-full md:flex-1 group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
          <input
            type="text"
            placeholder="Search by asset name..."
            className="w-full bg-slate-900/50 border-none focus:ring-2 focus:ring-indigo-500/50 rounded-2xl py-4 pl-14 pr-6 text-sm font-medium text-white placeholder:text-slate-600 transition-all outline-none"
            onChange={(e) => onSearch(e.target.value)}
            aria-label="Search Assets"
          />
        </div>

        {/* ফিল্টার ড্রপডাউনস */}
        <div className="flex items-center gap-3 w-full md:w-auto px-2">
          <div className="relative group w-full md:w-40">
            <select
              aria-label="Filter by Category"
              className="w-full appearance-none bg-white/5 border border-white/10 hover:border-indigo-500/50 rounded-2xl py-4 px-5 text-xs font-bold text-slate-300 cursor-pointer outline-none transition-all"
              onChange={(e) => onFilter && onFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="neural">Neural Nets</option>
              <option value="models">AI Models</option>
              <option value="ui">UI Assets</option>
              <option value="security">Security</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          </div>

          <div className="relative group w-full md:w-40">
            <select
              aria-label="Sort Assets"
              className="w-full appearance-none bg-white/5 border border-white/10 hover:border-indigo-500/50 rounded-2xl py-4 px-5 text-xs font-bold text-slate-300 cursor-pointer outline-none transition-all"
              onChange={(e) => onSort && onSort(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low-High</option>
              <option value="price-high">Price: High-Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
