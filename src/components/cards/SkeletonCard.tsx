export const SkeletonCard = () => (
  <div className="group relative flex flex-col h-full bg-white/[0.04] backdrop-blur-2xl rounded-[2.5rem] p-5 border border-white/10 overflow-hidden">
    
    <div className="relative aspect-video rounded-2xl bg-white/[0.05] animate-pulse shrink-0" />

    <div className="flex-1 flex flex-col pt-5 space-y-4">
     
      <div className="flex items-center mt-3 gap-2">
        <div className="h-5 w-12 bg-amber-400/10 rounded-md animate-pulse border border-amber-400/10" />
        <div className="h-3 w-20 bg-white/5 rounded animate-pulse" />
      </div>

    
      <div className="space-y-3">
        <div className="h-7 bg-white/10 rounded-lg w-3/4 animate-pulse" />
        <div className="space-y-2">
          <div className="h-3 bg-white/5 rounded w-full animate-pulse" />
          <div className="h-3 bg-white/5 rounded w-5/6 animate-pulse" />
        </div>
      </div>

      
      <div className="mt-auto grid grid-cols-2 gap-3">
        <div className="h-10 bg-white/5 rounded-xl border border-white/5 animate-pulse" />
        <div className="h-10 bg-white/5 rounded-xl border border-white/5 animate-pulse" />
      </div>
    </div>

    
    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 shrink-0">
      <div className="h-6 w-16 bg-white/10 rounded animate-pulse" />
      <div className="h-10 w-32 bg-indigo-600/20 rounded-2xl animate-pulse border border-indigo-500/20" />
    </div>
  </div>
);