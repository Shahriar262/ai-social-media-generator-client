export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black text-white text-center mb-8">
          About <span className="text-indigo-500">Synapse AI</span>
        </h1>
        <div className="prose prose-lg prose-invert mx-auto">
          <p className="text-slate-300 text-center mb-12">
            We&apos;re building the future of social media content creation with
            AI-powered tools that help creators, marketers, and businesses
            produce engaging content faster and more effectively.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-slate-400 mb-8">
            To democratize high-quality content creation by providing accessible
            AI tools that understand the nuances of social media platforms and
            deliver results that drive engagement.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
          <p className="text-slate-400 mb-8">
            Synapse AI offers a suite of specialized tools for different social
            media platforms, each trained on platform-specific data to maximize
            reach and engagement.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Our Technology</h2>
          <p className="text-slate-400 mb-8">
            Powered by advanced machine learning models including Google&apos;s
            Gemini and custom-trained neural networks, our tools analyze
            millions of successful posts to understand what works.
          </p>
        </div>
      </div>
    </main>
  );
}
