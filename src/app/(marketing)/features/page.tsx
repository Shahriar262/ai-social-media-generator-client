"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  BarChart3,
  BrainCircuit,
  Cpu,
  Target,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Zap,
} from "lucide-react";

export default function FeaturesPage() {
  const [activeStat, setActiveStat] = useState("performance");

  const infraStats = {
    performance: { label: "Latency", value: "84ms" },
    uptime: { label: "Uptime", value: "99.9%" },
    token: { label: "Speed", value: "120 t/s" },
  };

  const features = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Content Generation",
      description:
        "Advanced machine learning models create engaging social media posts tailored to each platform's unique style and audience.",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Target,
      title: "Platform Optimization",
      description:
        "Each tool is trained on platform-specific data to maximize reach, engagement, and conversion rates.",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description:
        "Track performance metrics, engagement rates, and ROI across all your social media campaigns in one dashboard.",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Users,
      title: "Multi-Platform Support",
      description:
        "Generate content for Facebook, LinkedIn, Twitter, Instagram, and more with platform-specific optimizations.",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description:
        "Stay ahead with AI-powered trend detection and content suggestions based on current social media trends.",
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
    },
    {
      icon: Shield,
      title: "Content Safety",
      description:
        "Built-in content moderation and safety checks ensure all generated content meets platform guidelines.",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
    },
  ];

  const stats = [
    { number: "10M+", label: "Posts Generated", icon: Zap },
    { number: "500K+", label: "Active Users", icon: Users },
    { number: "99.9%", label: "Uptime", icon: Shield },
    { number: "50+", label: "Platforms Supported", icon: Globe },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-purple-500/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              Powerful <span className="text-indigo-400">AI Features</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">
              Discover the cutting-edge capabilities that make Synapse AI the
              ultimate social media content generation platform.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-8 h-8 text-indigo-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Core <span className="text-indigo-400">Capabilities</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Every feature is designed to maximize your social media impact
              with intelligent automation and data-driven insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Enterprise-Grade{" "}
              <span className="text-indigo-400">Infrastructure</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Built for scale with cutting-edge technology and rock-solid
              reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Powered by Advanced AI Models
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BrainCircuit className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Google Gemini Integration
                    </h4>
                    <p className="text-slate-400">
                      State-of-the-art language models for superior content
                      quality and creativity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Custom Neural Networks
                    </h4>
                    <p className="text-slate-400">
                      Proprietary models trained on millions of successful
                      social media posts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Real-Time Processing
                    </h4>
                    <p className="text-slate-400">
                      Instant content generation with sub-second response times.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl"
            >
              <h4 className="text-xl font-bold mb-6 text-center">
                Performance Metrics
              </h4>
              <div className="space-y-4">
                {Object.entries(infraStats).map(([key, stat]) => (
                  <button
                    key={key}
                    onClick={() => setActiveStat(key)}
                    className={`w-full p-4 rounded-xl transition-all ${
                      activeStat === key
                        ? "bg-indigo-500/20 border border-indigo-500/30"
                        : "bg-slate-800/50 hover:bg-slate-800/70"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">
                        {stat.label}
                      </span>
                      <span
                        className={`text-2xl font-bold ${
                          activeStat === key
                            ? "text-indigo-400"
                            : "text-slate-300"
                        }`}
                      >
                        {stat.value}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-slate-400 text-sm">
                  Click metrics to see detailed performance data
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Join thousands of creators and businesses using Synapse AI to
            generate high-quality content that drives engagement and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard/generate"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-900/20"
            >
              Start Generating
            </Link>
            <Link
              href="/explore"
              className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              Explore Tools
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
