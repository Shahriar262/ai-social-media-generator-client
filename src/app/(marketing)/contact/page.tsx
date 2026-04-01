"use client";
import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // For now, just show success
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen bg-[#020617] py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Get in <span className="text-indigo-500">Touch</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Have questions about Synapse AI? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-500/20 rounded-xl">
                  <Mail className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Email Us</h3>
                  <p className="text-slate-400">support@synapse-ai.com</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Live Chat</h3>
                  <p className="text-slate-400">
                    Available 24/7 for premium users
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 outline-none"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 outline-none"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 outline-none resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
