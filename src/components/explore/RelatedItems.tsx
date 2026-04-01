"use client";
import assets from "@/data/assets.json";
import { ToolAsset } from "@/types";
import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const RelatedItems = ({ currentItem }: { currentItem: ToolAsset }) => {
  
  const related = (assets as unknown as ToolAsset[])
    .filter((item) => item.category === currentItem.category && item.id !== currentItem.id)
    .slice(0, 4); 

  if (related.length === 0) return null;

  return (
    <div className="mt-32 border-t border-white/10 pt-20">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
            Related <span className="text-primary">Intelligence</span>
          </h2>
          <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">
            Similar tools in {currentItem.category} category
          </p>
        </div>
        <Link 
          href="/explore" 
          className="hidden md:flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest hover:gap-4 transition-all"
        >
          View All Tools <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {related.map((item) => (
          <Link
            key={item.id}
            href={`/explore/${item.id}`}
            className="group relative bg-card border border-white/5 rounded-[2.5rem] p-4 transition-all hover:bg-white/[0.04] hover:border-primary/30 overflow-hidden"
          >
            {/* Image Wrap */}
            <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span className="text-[10px] font-black text-white">{item.rating}</span>
              </div>
            </div>

            {/* Content */}
            <div className="px-2 space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-black text-white leading-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-white/5">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  {item.aiModel}
                </span>
                <span className="text-sm font-black text-secondary">
                  {item.price}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};