
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Users, SignalHigh } from 'lucide-react';

interface ServerStatusData {
  online: boolean;
  players: number;
  maxPlayers: number;
  latency: number;
  version: string;
  recentPlayers: string[];
}

const MOCK_PLAYERS = [
  'Notch', 'Steve', 'Alex', 'Dream', 'Technoblade', 'Griffin', 'MinerCraft', 'NodeAdmin', 'FireWizard', 'CraftMaster'
];

const ServerStatus: React.FC<{ variant?: 'compact' | 'full' }> = ({ variant = 'full' }) => {
  const [data, setData] = useState<ServerStatusData>({
    online: true,
    players: 142,
    maxPlayers: 500,
    latency: 24,
    version: '1.21.x',
    recentPlayers: ['Notch', 'Steve', 'Alex', 'Dream']
  });

  // Simulated real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newPlayerCount = Math.max(120, Math.min(480, prev.players + (Math.random() > 0.5 ? 1 : -1)));
        
        // Occasionally shuffle recent players
        let newRecent = [...prev.recentPlayers];
        if (Math.random() > 0.7) {
          newRecent = [...MOCK_PLAYERS]
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);
        }

        return {
          ...prev,
          players: newPlayerCount,
          latency: Math.max(18, Math.min(45, prev.latency + (Math.random() > 0.5 ? 2 : -2))),
          recentPlayers: newRecent
        };
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const PlayerAvatars = ({ size = 20, limit = 4 }) => (
    <div className="flex -space-x-2 overflow-hidden">
      {data.recentPlayers.slice(0, limit).map((player, i) => (
        <motion.img
          key={`${player}-${i}`}
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-block rounded-md ring-2 ring-black/20 bg-zinc-800 border border-white/10"
          style={{ width: size, height: size }}
          src={`https://mc-heads.net/avatar/${player}/${size}`}
          alt={player}
          title={player}
        />
      ))}
      {data.players > limit && (
        <div 
          className="flex items-center justify-center rounded-md ring-2 ring-black/20 bg-zinc-800 border border-white/10 text-[8px] font-bold text-white/50"
          style={{ width: size, height: size }}
        >
          +{data.players - limit}
        </div>
      )}
    </div>
  );

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3 px-4 py-2 rounded-full glass border-emerald-500/20 bg-emerald-500/5">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </div>
        <div className="flex items-center gap-3">
          <PlayerAvatars size={16} limit={3} />
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-pixel text-emerald-400 uppercase tracking-widest whitespace-nowrap">
              {data.players} ONLINE
            </span>
            <span className="text-[9px] font-bold text-white/30 bg-white/5 px-1.5 py-0.5 rounded border border-white/5 uppercase">
              {data.version}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-6 rounded-2xl border-emerald-500/10 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-4">
        <Activity className={`w-4 h-4 ${data.online ? 'text-emerald-500' : 'text-red-500'} animate-pulse`} />
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
          <SignalHigh className="text-emerald-400 w-6 h-6" />
        </div>
        <div>
          <h4 className="text-xs font-pixel text-white/40 uppercase tracking-widest">Network Live</h4>
          <div className="flex items-center gap-3 mt-1">
            <span className="font-pixel text-xl text-emerald-400">ONLINE</span>
            <div className="flex flex-col">
              <span className="text-[8px] text-white/20 font-black uppercase tracking-tighter leading-none mb-0.5">Compatibility</span>
              <span className="text-xs text-white font-pixel px-2 py-1 rounded bg-emerald-500/20 border border-emerald-500/30">
                {data.version}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-3 h-3 text-emerald-400/50" />
            <span className="text-[9px] text-white/30 font-bold uppercase">Players</span>
          </div>
          <div className="flex items-baseline gap-1">
            <AnimatePresence mode="wait">
              <motion.span 
                key={data.players}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="text-xl font-pixel text-white"
              >
                {data.players}
              </motion.span>
            </AnimatePresence>
            <span className="text-[10px] text-white/20 font-bold">/ {data.maxPlayers}</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
          <div className="flex items-center gap-2 mb-1">
            <Activity className="w-3 h-3 text-emerald-400/50" />
            <span className="text-[9px] text-white/30 font-bold uppercase">Latency</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-pixel text-white">{data.latency}</span>
            <span className="text-[10px] text-white/20 font-bold">MS</span>
          </div>
        </div>
      </div>

      {/* Featured Players Widget */}
      <div className="bg-black/20 rounded-xl p-3 border border-white/5 flex items-center justify-between mb-4">
        <span className="text-[8px] font-pixel text-white/30 uppercase">Recently Online</span>
        <PlayerAvatars size={24} limit={5} />
      </div>

      <div className="mt-4 pt-4 border-t border-white/5">
        <div className="flex justify-between items-center text-[9px] font-bold text-white/20 uppercase tracking-widest">
          <span>Uptime: 99.98%</span>
          <span className="text-emerald-500/40">Verified Node</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServerStatus;
