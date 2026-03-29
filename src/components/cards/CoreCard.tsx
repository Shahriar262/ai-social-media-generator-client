
import { ToolAsset } from "@/types";
import { Star, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const CoreCard = ({ item }: { item: ToolAsset }) => {
  return (
    <div className="group relative flex flex-col h-full bg-white/[0.04] backdrop-blur-2xl rounded-[2.5rem] p-5 transition-all duration-500 hover:-translate-y-2 border border-white/10 hover:border-indigo-500/50 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

      <div className="relative aspect-video rounded-2xl overflow-hidden shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={false}
        />
      </div>

      <div className="flex-1 flex flex-col pt-5">
        <div className="flex items-center mt-3 gap-2 mb-2">
          <div className="flex items-center gap-1 bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/20">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="text-[10px] font-black text-amber-400 tracking-wider">
              {item.rating}
            </span>
          </div>
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
            • Verified Asset
          </span>
        </div>

        <div className=" mb-5">
          <h3 className="text-xl py-2 font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-1">
            {item.title}
          </h3>
          <p className="text-slate-400 mb-3 text-sm line-clamp-2 leading-relaxed font-medium">
            {item.description}
          </p>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          <div className="flex items-center gap-1.5 bg-white/5 p-2.5 rounded-xl border border-white/5">
            <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
            <span className="truncate">{item.location}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/5 p-2.5 rounded-xl border border-white/5">
            <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="truncate">{item.date}</span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 shrink-0">
        <div className="flex items-baseline gap-0.5">
          <span className="text-lg font-black text-white">{item.price}</span>
          <span className="text-[10px] text-slate-500 font-bold uppercase">
            /Mo
          </span>
        </div>

        <Link
          href={`/explore/${item.id}`}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-2xl text-xs font-black transition-all active:scale-95 shadow-lg shadow-indigo-900/20"
        >
          View Details <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
