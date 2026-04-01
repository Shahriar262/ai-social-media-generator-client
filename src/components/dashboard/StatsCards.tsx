import { Zap, Layout, Star, CreditCard } from "lucide-react";

interface Stats {
  totalGenerations?: number;
  creditsRemaining?: number;
  reviewCount?: number;
  userRole?: string;
}

export default function StatsCards({ stats }: { stats: Stats | null }) {
  const items = [
    {
      label: "Total AI Posts",
      value: stats?.totalGenerations || 0,
      icon: Layout,
      color: "text-blue-500",
    },
    {
      label: "Credits Left",
      value: stats?.creditsRemaining || 0,
      icon: CreditCard,
      color: "text-emerald-500",
    },
    {
      label: "Reviews Sync",
      value: stats?.reviewCount || 0,
      icon: Star,
      color: "text-amber-500",
    },
    {
      label: "Account Plan",
      value: stats?.userRole === "admin" ? "Pro" : "Free",
      icon: Zap,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, i) => (
        <div
          key={i}
          className="glass p-6 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-2xl bg-white/5 ${item.color}`}>
              <item.icon size={24} />
            </div>
          </div>
          <p className="text-slate-400 text-sm font-medium">{item.label}</p>
          <h2 className="text-2xl font-bold text-white mt-1">{item.value}</h2>
        </div>
      ))}
    </div>
  );
}
