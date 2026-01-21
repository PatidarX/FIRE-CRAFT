
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Users, Zap, Calendar, Heart, MessageSquare } from 'lucide-react';
import ServerStatus from '../components/ServerStatus';

const Community: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const serverIP = "PLAY.FIRECRAFTX.COM";

  const handleCopy = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Server IP Hero */}
        <section className="relative glass rounded-[3rem] p-12 md:p-24 overflow-hidden border-emerald-500/10 mb-20">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?auto=format&fit=crop&q=80&w=800" alt="Minecraft Landscape" className="w-full h-full object-cover" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">FIRECRAFTX <span className="text-emerald-500">NETWORK</span></h1>
            <p className="text-white/60 text-lg mb-12">
              The ultimate survival experience. Custom biomes, active economy, and a friendly community waiting for you to join. Version 1.20.x - 1.21.x supported.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div 
                onClick={handleCopy}
                className="flex-grow w-full sm:w-auto flex items-center justify-between gap-4 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 cursor-pointer transition-all group"
              >
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/30 font-bold block mb-1">Server Address</span>
                  <span className="font-pixel text-xl tracking-tight text-emerald-400 group-hover:text-emerald-300">{serverIP}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-emerald-500/20 transition-colors">
                  {copied ? <span className="text-emerald-500 font-bold text-xs">COPIED!</span> : <Copy className="w-5 h-5 text-white/40" />}
                </div>
              </div>
              <div className="w-full sm:w-64">
                <ServerStatus />
              </div>
            </div>
          </div>
        </section>

        {/* Features & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="glass p-8 rounded-2xl border-white/5">
            <Zap className="w-10 h-10 text-emerald-500 mb-6" />
            <h3 className="font-pixel text-lg mb-4">CUSTOM SURVIVAL</h3>
            <p className="text-white/40 text-sm leading-relaxed">Experience survival like never before with 250+ custom enchantments and unique boss fights.</p>
          </div>
          <div className="glass p-8 rounded-2xl border-white/5">
            <Calendar className="w-10 h-10 text-cyan-400 mb-6" />
            <h3 className="font-pixel text-lg mb-4">WEEKLY EVENTS</h3>
            <p className="text-white/40 text-sm leading-relaxed">From build competitions to massive PvP tournaments, there's always something happening.</p>
          </div>
          <div className="glass p-8 rounded-2xl border-white/5">
            <Heart className="w-10 h-10 text-pink-500 mb-6" />
            <h3 className="font-pixel text-lg mb-4">FAIR PLAY</h3>
            <p className="text-white/40 text-sm leading-relaxed">We maintain a strictly non-pay-to-win environment where skill and dedication are rewarded.</p>
          </div>
        </div>

        {/* Rules Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
             <h2 className="font-pixel text-3xl mb-12">SERVER <span className="text-emerald-500">CODE OF CONDUCT</span></h2>
             <div className="space-y-6">
                {[
                  { title: "BE RESPECTFUL", desc: "Treat all players with kindness. Toxic behavior is not tolerated." },
                  { title: "NO CHEATING", desc: "Using hacked clients or exploits will result in a permanent ban." },
                  { title: "PROTECT CHAT", desc: "Keep the chat clean. No spamming, excessive swearing or advertising." },
                  { title: "NO GRIEFING", desc: "Respect others' hard work. Griefing builds is strictly prohibited." }
                ].map((rule, idx) => (
                  <div key={idx} className="flex gap-6 p-6 rounded-2xl hover:bg-white/5 transition-colors group">
                    <span className="font-pixel text-3xl text-emerald-500/20 group-hover:text-emerald-500 transition-colors">0{idx + 1}</span>
                    <div>
                      <h4 className="font-pixel text-sm mb-2 uppercase">{rule.title}</h4>
                      <p className="text-white/40 text-sm">{rule.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
          <div className="relative">
            <div className="aspect-video w-full rounded-3xl overflow-hidden glass border-white/10 p-2">
              <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200" alt="Server Community Event" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="absolute -top-6 -right-6 glass p-6 rounded-2xl border-white/10 max-w-[200px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-emerald-500" />
                </div>
                <span className="font-pixel text-[10px] uppercase">COMMUNITY CHOICE</span>
              </div>
              <p className="text-xs text-white/50 italic">"Best community I've ever been a part of!" - Notch</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Community;
