
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Zap, Globe, Clock, ArrowRight, Play, Cpu, HardDrive } from 'lucide-react';
import ServerStatus from '../components/ServerStatus';

const FeatureCard: React.FC<{ icon: any; title: string; desc: string; color: string }> = ({ icon: Icon, title, desc, color }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass p-8 rounded-2xl border border-white/5 group"
  >
    <div className={`w-14 h-14 rounded-xl bg-${color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      <Icon className={`w-8 h-8 text-${color}-500`} />
    </div>
    <h3 className="font-pixel text-lg mb-4 uppercase">{title}</h3>
    <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-xs font-bold tracking-widest uppercase text-red-500 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Next-Gen Minecraft Hosting
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-tight"
            >
              POWER YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-red-600">MINECRAFT</span> WORLD
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12"
            >
              Experience lightning-fast NVMe SSD storage, enterprise-grade DDoS protection, and 24/7 support. Built by gamers, for gamers.
            </motion.p>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-5xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full lg:w-auto"
              >
                <Link to="/hosting" className="w-full sm:w-auto px-10 py-5 rounded-xl bg-red-600 text-white font-pixel text-lg glow-fire hover:bg-red-700 hover:scale-105 transition-all flex items-center justify-center gap-3">
                  🚀 BUY HOSTING
                </Link>
                <Link to="/community" className="w-full sm:w-auto px-10 py-5 rounded-xl glass text-emerald-400 font-pixel text-lg hover:bg-emerald-500/10 border-emerald-500/20 hover:scale-105 transition-all flex items-center justify-center gap-3">
                  🎮 JOIN FIRECRAFTX
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full lg:w-72"
              >
                <ServerStatus />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-zinc-950/50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-pixel text-3xl md:text-4xl mb-6">WHY CHOOSE <span className="text-red-500">FIRENODEX</span>?</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={Cpu} 
              title="AMD RYZEN 9" 
              desc="We use the latest AMD Ryzen 9 5950X & 7950X processors for ultimate single-thread performance."
              color="red"
            />
            <FeatureCard 
              icon={HardDrive} 
              title="NVME SSD" 
              desc="Industry-leading storage speeds. No more chunk loading lag or slow server startups."
              color="orange"
            />
            <FeatureCard 
              icon={Shield} 
              title="DDOS PROTECT" 
              desc="Advanced 12Tbps+ DDoS protection keeps your server online under any attack."
              color="blue"
            />
            <FeatureCard 
              icon={Globe} 
              title="LOW LATENCY" 
              desc="Strategic global nodes ensure your players have the best connection possible."
              color="emerald"
            />
          </div>
        </div>
      </section>

      {/* Community Section Preview */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass rounded-[2.5rem] p-12 flex flex-col lg:flex-row items-center gap-16 overflow-hidden border-emerald-500/10">
            <div className="lg:w-1/2 relative z-10">
              <span className="text-emerald-400 font-pixel text-sm uppercase tracking-widest mb-4 block">Our Community</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">FIRECRAFTX <span className="text-emerald-500">REBORN</span></h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                Step into our official Minecraft network. Experience unique survival mechanics, custom ranks, and a toxicity-free community. It's not just a server; it's a home.
              </p>
              <div className="flex flex-wrap gap-8 mb-12">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-emerald-400">1,240+</span>
                  <span className="text-xs text-white/40 uppercase tracking-widest">Active Players</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-emerald-400">99.9%</span>
                  <span className="text-xs text-white/40 uppercase tracking-widest">Server Uptime</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-emerald-400">15+</span>
                  <span className="text-xs text-white/40 uppercase tracking-widest">Custom Plugins</span>
                </div>
              </div>
              <Link to="/community" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 text-white font-pixel hover:bg-emerald-600 transition-all glow-craft">
                VISIT THE SERVER <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square w-full rounded-2xl overflow-hidden glass border-white/10 p-2">
                <img 
                  src="https://images.unsplash.com/photo-1607988597791-4500a69f644c?auto=format&fit=crop&q=80&w=800" 
                  alt="FireCraftX Community" 
                  className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6">
                <ServerStatus />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Control Panel Section */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-pixel text-3xl md:text-5xl mb-12 tracking-tight">EASY <span className="text-orange-500">MANAGEMENT</span></h2>
          <div className="max-w-5xl mx-auto p-4 glass rounded-[2rem] border-white/5">
             <img 
              src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1200" 
              alt="Pterodactyl Panel Preview" 
              className="w-full h-auto rounded-2xl border border-white/10"
            />
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div>
              <h4 className="font-pixel text-orange-400 mb-4">ONE-CLICK INSTALL</h4>
              <p className="text-white/40 text-sm">Deploy hundreds of modpacks and plugins with a single click. No technical knowledge required.</p>
            </div>
            <div>
              <h4 className="font-pixel text-orange-400 mb-4">SUB-USER ACCESS</h4>
              <p className="text-white/40 text-sm">Add your staff members with granular permissions to help you manage the server safely.</p>
            </div>
            <div>
              <h4 className="font-pixel text-orange-400 mb-4">AUTOMATED BACKUPS</h4>
              <p className="text-white/40 text-sm">Never lose your progress. Scheduled backups to our off-site S3 storage are included free.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
