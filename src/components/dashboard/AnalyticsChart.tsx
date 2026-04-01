"use client";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AnalyticsChart({
  chartData,
}: {
  chartData: unknown[];
}) {
  // যদি ডাটা না থাকে তবে ডামি ডাটা দেখাবে
  const data = chartData?.length
    ? chartData
    : [
        { name: "Mon", count: 4 },
        { name: "Tue", count: 7 },
        { name: "Wed", count: 5 },
        { name: "Thu", count: 9 },
        { name: "Fri", count: 12 },
        { name: "Sat", count: 8 },
      ];

  return (
    <div className="glass p-8 rounded-[2.5rem] border border-white/5 h-full min-h-[350px]">
      <h3 className="text-xl font-bold text-white mb-8">Post Analytics</h3>
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#ffffff05"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "none",
                borderRadius: "12px",
              }}
            />
            <Area
              type="monotone"
              dataKey="count"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorCount)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
