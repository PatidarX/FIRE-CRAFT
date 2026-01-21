
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield, Zap, Server, Database } from 'lucide-react';
import { Plan } from '../types';

const PLANS: Plan[] = [
  { id: '1', name: 'STARTER', ram: '4GB', cpu: '2 vCores', storage: '50GB NVMe', price: '99' },
  { id: '2', name: 'PRO', ram: '8GB', cpu: '4 vCores', storage: '100GB NVMe', price: '19.99', recommended: true },
  { id: '3', name: 'ELITE', ram: '16GB', cpu: '8 vCores', storage: '250GB NVMe', price: '34.99' },
];

const HostingCard: React.FC<{ plan: Plan }> = ({ plan }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className={`relative flex flex-col p-8 rounded-3xl border ${plan.recommended ? 'border-red-500 bg-red-500/5 glow-fire' : 'border-white/10 glass'} overflow-hidden group`}
  >
    {plan.recommended && (
      <div className="absolute top-0 right-0 bg-red-600 px-4 py-1.5 rounded-bl-xl font-pixel text-[10px] tracking-widest text-white">
        MOST POPULAR
      </div>
    )}
    
    <div className="mb-8">
      <h3 className="font-pixel text-2xl mb-2">{plan.name}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-black">{plan.id === '1' ? '₹' : '$'}{plan.price}</span>
        <span className="text-white/40 font-bold">/MO</span>
      </div>
    </div>

    <div className="space-y-4 mb-10 flex-grow">
      <div className="flex items-center gap-3">
        <Zap className="w-5 h-5 text-red-500" />
        <span className="text-sm font-medium">{plan.ram} RAM</span>
      </div>
      <div className="flex items-center gap-3">
        <Server className="w-5 h-5 text-red-500" />
        <span className="text-sm font-medium">{plan.cpu} AMD Ryzen 9</span>
      </div>
      <div className="flex items-center gap-3">
        <Database className="w-5 h-5 text-red-500" />
        <span className="text-sm font-medium">{plan.storage}</span>
      </div>
      <div className="flex items-center gap-3">
        <Shield className="w-5 h-5 text-red-500" />
        <span className="text-sm font-medium">12Tbps DDoS Protection</span>
      </div>
      <div className="flex items-center gap-3">
        <Check className="w-5 h-5 text-emerald-500" />
        <span className="text-sm font-medium">Daily Offsite Backups</span>
      </div>
    </div>

    <button className={`w-full py-4 rounded-xl font-pixel text-sm transition-all duration-300 ${plan.recommended ? 'bg-red-600 hover:bg-red-700 shadow-xl shadow-red-900/20' : 'bg-white/5 hover:bg-white/10'}`}>
      DEPLOY SERVER
    </button>
  </motion.div>
);

const Hosting: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase"
          >
            SELECT YOUR <span className="text-red-500">PLAN</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-xl mx-auto"
          >
            Scalable, high-performance hosting designed for communities of all sizes. Upgrades are seamless and instant.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {PLANS.map(plan => <HostingCard key={plan.id} plan={plan} />)}
        </div>

        {/* Technical Specs Table */}
        <section className="glass rounded-3xl p-8 md:p-12 border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div>
              <h2 className="font-pixel text-2xl mb-4">TECHNICAL SPECIFICATIONS</h2>
              <p className="text-white/50 text-sm">All plans include our enterprise-grade infrastructure components by default.</p>
            </div>
            <div className="flex gap-4">
               <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                 <img src="https://img.icons8.com/color/48/000000/amd.png" alt="AMD" className="w-8 h-8" />
                 <span className="font-bold text-sm">RYZEN 9</span>
               </div>
               <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                 <img src="https://img.icons8.com/color/48/000000/linux.png" alt="Linux" className="w-8 h-8" />
                 <span className="font-bold text-sm">UBUNTU 22.04</span>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-xs text-red-500">Infrastructure</h4>
              <ul className="space-y-3">
                <li className="flex justify-between text-sm py-2 border-b border-white/5"><span>Hardware Platform</span> <span className="text-white/40">Supermicro Chassis</span></li>
                <li className="flex justify-between text-sm py-2 border-b border-white/5"><span>Network Link</span> <span className="text-white/40">10Gbps Dedicated</span></li>
                <li className="flex justify-between text-sm py-2 border-b border-white/5"><span>SSD Protocol</span> <span className="text-white/40">NVMe PCIe Gen 4</span></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-xs text-red-500">Network & Security</h4>
              <ul className="space-y-3">
                <li className="flex justify-between text-sm py-2 border-b border-white/5"><span>Firewall</span> <span className="text-white/40">Hardware L3/L4/L7</span></li>
                <li className="flex justify-between text-sm py-2 border-b border-white/5"><span>Dedicated IP</span> <span className="text-white/40">Optional Add-on</span></li>
                <li className="flex justify-between text-sm py-2 border-b border-white/5"><span>Global Locations</span> <span className="text-white/40">US, EU, SG, AU</span></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-xs text-red-500">Management</h4>
              <ul className="space-y-3">
                <li className="flex justify-between text-sm py-2 border-b border-white/5"><span>OS Images</span> <span className="text-white/40">Ubuntu, Debian, CentOS</span></li>
                <li className="flex justify-between text-sm py-2 border-b border-white/5"><span>Control Panel</span> <span className="text-white/40">Enhanced Pterodactyl</span></li>
                <li className="flex justify-between text-sm py-2 border-b border-white/5"><span>Support SLA</span> <span className="text-white/40">15-minute response</span></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hosting;
