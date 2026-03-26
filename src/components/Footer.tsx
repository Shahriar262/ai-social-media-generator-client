import Link from "next/link";
import { BotMessageSquare, Mail } from "lucide-react"; 
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info - Synapse AI Branding */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-primary/10 p-2 rounded-lg border border-primary/20 group-hover:border-primary/40 transition-all">
                <BotMessageSquare className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Synapse <span className="text-gradient">AI</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering creators with neural-level intelligence. Synapse AI turns your ideas into high-impact social media content instantly.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link href="#" className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 text-slate-400 hover:text-primary transition-all group">
                <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link href="#" className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 text-slate-400 hover:text-primary transition-all group">
                <FaXTwitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link href="#" className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 text-slate-400 hover:text-primary transition-all group">
                <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Product</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="#features" className="hover:text-primary transition-colors">Neural Features</Link></li>
              <li><Link href="/dashboard" className="hover:text-primary transition-colors">AI Generator</Link></li>
              <li><Link href="#pricing" className="hover:text-primary transition-colors">Pricing Plans</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Release Notes</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Resources</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-primary transition-colors">Community</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Affiliate</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Connect</h3>
            <ul className="space-y-4 text-sm text-slate-400 font-poppins">
              <li className="flex items-center gap-2 font-medium">
                <Mail className="w-4 h-4 text-primary" /> 
                hello@synapse-ai.com
              </li>
              <li className="text-slate-500 text-xs">Based in Dhaka, Bangladesh. Serving the World.</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center md:flex md:justify-between md:items-center">
          <p className="text-slate-500 text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} Synapse AI. Built for the modern creator.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;