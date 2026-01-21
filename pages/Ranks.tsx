
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Crown, Zap, Check } from 'lucide-react';
import { Rank } from '../types';

const RANKS: Rank[] = [
  {
    id: 'newbie',
    name: 'MEMBER',
    price: 'FREE',
    color: 'emerald',
    icon: 'Star',
    perks: ['Basic Commands', '3 Homes', 'Starter Kit', 'Access to Shop']
  },
  {
    id: 'pro',
    name: 'PRO PLAYER',
    price: '9.99',
    color: 'cyan',
    icon: 'Zap',
    perks: ['Colored Nickname', '10 Homes', 'Daily Rewards', 'Priority Queue', '/fly in Lobbies', 'Pro Kit']
  },
  {
    id: 'elite',
    name: 'FIRE ELITE',
    price: '24.99',
    color: 'orange',
    icon: 'Crown',
    perks: ['Glowing Name', 'Unlimited Homes', 'Custom Nicknames', 'Alpha Testing Access', 'Monthly Elite Box', 'Elite Chat Badge']
  }
];

const RankCard: React.FC<{ rank: Rank }> = ({ rank }) => {
  const Icon = rank.icon === 'Crown' ? Crown : rank.icon === 'Zap' ? Zap : Star;
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative glass p-10 rounded-[2.5rem] border border-${rank.color}-500/20 flex flex-col items-center text-center overflow-hidden group`}
    >
      <div className={`absolute inset-0 bg-gradient-to-b from-${rank.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
      
      <div className={`w-20 h-20 rounded-3xl bg-${rank.color}-500/10 flex items-center justify-center mb-8 border border-${rank.color}-500/20 group-hover:rotate-6 transition-transform`}>
        <Icon className={`w-10 h-10 text-${rank.color}-400`} />
      </div>

      <h3 className={`font-pixel text-2xl mb-2 text-${rank.color}-400`}>{rank.name}</h3>
      <div className="flex items-baseline gap-1 mb-10">
        <span className="text-4xl font-black">{rank.price === 'FREE' ? '' : '$'}{rank.price}</span>
        {rank.price !== 'FREE' && <span className="text-white/40 text-xs font-bold">ONE-TIME</span>}
      </div>

      <div className="w-full space-y-4 mb-10">
        {rank.perks.map((perk, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-white/60">
            <Check className={`w-4 h-4 text-${rank.color}-500 shrink-0`} />
            <span>{perk}</span>
          </div>
        ))}
      </div>

      <button className={`w-full py-4 rounded-xl font-pixel text-sm bg-white/5 hover:bg-${rank.color}-500/20 border border-white/10 hover:border-${rank.color}-500/50 transition-all text-white mt-auto`}>
        UPGRADE NOW
      </button>
    </motion.div>
  );
};

const Ranks: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-xs font-bold tracking-widest uppercase text-emerald-400 mb-8"
          >
            Show Off Your Status
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">SERVER <span className="text-emerald-500">RANKS</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Supporting the server helps us keep the nodes running and rewards you with awesome cosmetic and quality-of-life perks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RANKS.map(rank => <RankCard key={rank.id} rank={rank} />)}
        </div>

        <div className="mt-24 glass rounded-3xl p-12 border-white/5 text-center">
           <h3 className="font-pixel text-xl mb-6">FREQUENTLY ASKED QUESTIONS</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div>
                <h4 className="font-bold mb-2 uppercase text-xs text-emerald-500 tracking-widest">Are ranks permanent?</h4>
                <p className="text-sm text-white/50 leading-relaxed">Yes! All ranks purchased through our store are permanent and will remain with your account forever across the network.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 uppercase text-xs text-emerald-500 tracking-widest">Can I upgrade later?</h4>
                <p className="text-sm text-white/50 leading-relaxed">Absolutely. If you already have a rank, you only pay the difference when upgrading to a higher tier.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Ranks;
