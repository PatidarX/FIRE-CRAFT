
import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Zap, Shield, HardDrive, Terminal, Clock, Users, Globe } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-tight">THE MOST <span className="text-orange-500">POWERFUL</span> PANEL IN THE GAME</h1>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Managing your Minecraft server shouldn't be a chore. Our custom-skinned Pterodactyl panel gives you total control with a sleek, responsive interface.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
               <div className="flex flex-col gap-2">
                 <Terminal className="text-orange-500 w-6 h-6" />
                 <span className="font-bold text-sm">Real-time Console</span>
                 <p className="text-xs text-white/40">Instant execution and live logging.</p>
               </div>
               <div className="flex flex-col gap-2">
                 <Clock className="text-orange-500 w-6 h-6" />
                 <span className="font-bold text-sm">Task Scheduling</span>
                 <p className="text-xs text-white/40">Automate backups and restarts.</p>
               </div>
            </div>
            <button className="px-10 py-5 rounded-2xl bg-orange-500 text-white font-pixel text-lg glow-fire hover:bg-orange-600 transition-all uppercase">
              GO TO CLIENT PANEL
            </button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="glass p-4 rounded-3xl border-orange-500/20 overflow-hidden">
               <div className="flex items-center gap-2 mb-4 p-2 border-b border-white/5">
                 <div className="w-3 h-3 rounded-full bg-red-500" />
                 <div className="w-3 h-3 rounded-full bg-orange-500" />
                 <div className="w-3 h-3 rounded-full bg-green-500" />
                 <div className="flex-grow text-center text-[10px] font-pixel text-white/20 uppercase tracking-widest">firenodex-panel-v4.exe</div>
               </div>
               <div className="aspect-video w-full rounded-xl overflow-hidden bg-zinc-950 p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                         <Zap className="text-orange-500 w-6 h-6" />
                       </div>
                       <div>
                         <div className="text-xs text-white/40 font-bold">MY SERVER #01</div>
                         <div className="text-sm font-pixel text-emerald-400">RUNNING</div>
                       </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="px-3 py-1 rounded bg-red-500/20 text-red-500 text-[10px] font-bold">RESTART</div>
                      <div className="px-3 py-1 rounded bg-zinc-800 text-white/40 text-[10px] font-bold">STOP</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-[10px] text-white/30 font-bold uppercase mb-2">CPU USAGE</div>
                        <div className="text-xl font-pixel">24.5%</div>
                        <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: "24.5%" }} className="h-full bg-orange-500" />
                        </div>
                     </div>
                     <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-[10px] text-white/30 font-bold uppercase mb-2">MEMORY</div>
                        <div className="text-xl font-pixel">4.2GB</div>
                        <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: "65%" }} className="h-full bg-orange-500" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <section className="py-20 border-t border-white/5">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div>
                <h4 className="font-pixel text-4xl mb-2">100%</h4>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">UPTIME SLA</p>
              </div>
              <div>
                <h4 className="font-pixel text-4xl mb-2">12T</h4>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">DDOS CAPACITY</p>
              </div>
              <div>
                <h4 className="font-pixel text-4xl mb-2">15M</h4>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">SUPPORT TICKET</p>
              </div>
              <div>
                <h4 className="font-pixel text-4xl mb-2">5K+</h4>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">SERVERS HOSTED</p>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
