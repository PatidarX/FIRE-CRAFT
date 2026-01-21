
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// Fixed: Removed Discord and added MessageCircle as it is not exported by lucide-react
import { Server, Users, Trophy, LayoutDashboard, Info, MessageSquare, Flame, Hexagon, MessageCircle, Youtube, Github } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Tooltip: React.FC<{ text: string; children: React.ReactNode }> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className="absolute bottom-full mb-2 px-3 py-1.5 rounded-lg glass border border-white/10 bg-black/80 text-[10px] font-pixel text-white whitespace-nowrap z-[60] pointer-events-none"
          >
            {text}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-black/80" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/hosting', label: 'Hosting', icon: Server, color: 'hover:text-red-500' },
    { path: '/community', label: 'Community', icon: Users, color: 'hover:text-cyan-400' },
    { path: '/ranks', label: 'Ranks', icon: Trophy, color: 'hover:text-emerald-400' },
    { path: '/panel', label: 'Panel', icon: LayoutDashboard, color: 'hover:text-orange-400' },
    { path: '/about', label: 'About', icon: Info, color: 'hover:text-blue-400' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <Flame className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-pixel text-xl tracking-tighter leading-none">FIRE<span className="text-red-500">NODE</span>X</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Premium Services</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${item.color} ${isActive(item.path) ? 'text-white' : 'text-white/60'}`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex">
            <Tooltip text="Join our Discord">
              <a href="https://discord.gg/firenodex" target="_blank" rel="noreferrer" className="p-2 text-white/40 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </Tooltip>
          </div>
          <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm font-bold font-pixel hover:scale-105 transition-transform active:scale-95 glow-fire">
            CLIENT LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Flame className="text-red-500 w-6 h-6" />
              <span className="font-pixel text-lg tracking-tighter uppercase">FireNodeX</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Empowering Minecraft server owners with high-performance nodes and reliable infrastructure. Join our growing community of thousands of players.
            </p>
            <div className="flex gap-4">
              <Tooltip text="Discord Community">
                <MessageCircle className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
              </Tooltip>
              <Tooltip text="YouTube Channel">
                <Youtube className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
              </Tooltip>
              <Tooltip text="GitHub Projects">
                <Github className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
              </Tooltip>
            </div>
          </div>
          <div>
            <h4 className="font-pixel text-sm mb-6 text-red-500">Products</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link to="/hosting" className="hover:text-white transition-colors">Minecraft Hosting</Link></li>
              <li><Link to="/hosting" className="hover:text-white transition-colors">VPS Hosting</Link></li>
              <li><Link to="/hosting" className="hover:text-white transition-colors">Dedicated Nodes</Link></li>
              <li><Link to="/panel" className="hover:text-white transition-colors">Pterodactyl Panel</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-pixel text-sm mb-6 text-emerald-400">FireCraftX</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link to="/community" className="hover:text-white transition-colors">Join Server</Link></li>
              <li><Link to="/ranks" className="hover:text-white transition-colors">Server Ranks</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors">Rules & FAQ</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Discord Community</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-pixel text-sm mb-6 text-blue-400">Support</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><Link to="/about" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Knowledge Base</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Status Page</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest font-bold">
          <p>© 2024 FIRENODEX. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
