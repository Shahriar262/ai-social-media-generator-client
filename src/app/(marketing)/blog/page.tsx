import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "ai-content-trends-2024",
    title: "AI Content Creation Trends for 2024",
    excerpt:
      "Discover the latest trends in AI-powered content creation and how they're shaping social media marketing.",
    author: "Synapse Team",
    date: "2024-03-15",
    readTime: "5 min read",
  },
  {
    id: "maximizing-engagement-instagram",
    title: "Maximizing Engagement on Instagram Reels",
    excerpt:
      "Learn the secrets behind viral Instagram Reels and how AI can help you create them.",
    author: "Content Expert",
    date: "2024-03-10",
    readTime: "7 min read",
  },
  {
    id: "linkedin-b2b-strategy",
    title: "B2B Content Strategy on LinkedIn",
    excerpt:
      "A comprehensive guide to creating thought leadership content that drives business results.",
    author: "Marketing Pro",
    date: "2024-03-05",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#020617] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Latest <span className="text-indigo-500">Insights</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and strategies in
            AI-powered social media content creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="glass p-6 rounded-2xl hover:bg-white/[0.08] transition-all group"
            >
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              </div>

              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h2>

              <p className="text-slate-400 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">{post.readTime}</span>
                <Link
                  href={`/blog/${post.id}`}
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group-hover:translate-x-1 transform"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400">
            More articles coming soon. Follow us for updates!
          </p>
        </div>
      </div>
    </main>
  );
}
