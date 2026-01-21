
import React from 'react';
import { motion } from 'framer-motion';
// Fixed: Removed Discord and added MessageCircle as it is not exported by lucide-react
import { MessageSquare, Mail, MapPin, MessageCircle, Globe, Send } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mission & Story */}
        <div className="flex flex-col lg:flex-row gap-20 items-start mb-32">
          <div className="lg:w-1/2">
            <span className="text-red-500 font-pixel text-xs tracking-[0.3em] uppercase mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-tight uppercase">FOR GAMERS, BY <span className="text-red-500">GAMERS</span>.</h1>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                FireNodeX was born out of frustration. As server owners ourselves, we were tired of "budget" hosts that oversold their nodes, leading to lag and crashes just when our player counts were peaking.
              </p>
              <p>
                In 2022, we decided to change the game. We invested in dedicated Ryzen 9 hardware and built a network focused on stability above all else. FireCraftX was later created as our flagship community project to showcase exactly what our hardware is capable of.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-8">
             <div className="aspect-square glass rounded-3xl p-8 flex flex-col justify-end border-white/5">
               <h4 className="font-pixel text-xl mb-2">12+</h4>
               <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Countries Reached</p>
             </div>
             <div className="aspect-square bg-red-600 rounded-3xl p-8 flex flex-col justify-end">
               <h4 className="font-pixel text-xl mb-2 text-white">24/7</h4>
               <p className="text-xs text-white/80 uppercase font-bold tracking-widest">Active Monitoring</p>
             </div>
             <div className="aspect-square glass rounded-3xl p-8 flex flex-col justify-end border-white/5">
               <h4 className="font-pixel text-xl mb-2">0</h4>
               <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Compromised Servers</p>
             </div>
             <div className="aspect-square glass rounded-3xl p-8 flex flex-col justify-end border-white/5">
               <h4 className="font-pixel text-xl mb-2">99.9%</h4>
               <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Success Rate</p>
             </div>
          </div>
        </div>

        {/* Contact Form & Info */}
        <section id="contact" className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <h2 className="font-pixel text-3xl mb-8">GET IN <span className="text-red-500">TOUCH</span></h2>
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 rounded-2xl glass border-white/5">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <Mail className="text-red-500 w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase font-bold mb-1">Email Support</div>
                  <div className="text-sm font-bold">support@firenodex.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 rounded-2xl glass border-white/5">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                  {/* Fixed: Replaced non-existent Discord icon with MessageCircle */}
                  <MessageCircle className="text-indigo-400 w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase font-bold mb-1">Discord Support</div>
                  <div className="text-sm font-bold">discord.gg/firenodex</div>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 rounded-2xl glass border-white/5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <MapPin className="text-emerald-500 w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase font-bold mb-1">Global HQ</div>
                  <div className="text-sm font-bold">San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="glass p-8 md:p-12 rounded-[2.5rem] border-white/5">
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-pixel text-white/30 uppercase ml-2">Your Name</label>
                      <input type="text" placeholder="Notch" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-red-500 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-pixel text-white/30 uppercase ml-2">Email Address</label>
                      <input type="email" placeholder="steve@minecraft.net" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-red-500 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-pixel text-white/30 uppercase ml-2">Subject</label>
                    <select className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-red-500 outline-none transition-all appearance-none">
                      <option>General Inquiry</option>
                      <option>Technical Support</option>
                      <option>Billing Question</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-pixel text-white/30 uppercase ml-2">Your Message</label>
                    <textarea rows={5} placeholder="How can we help you power up?" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-red-500 outline-none transition-all resize-none"></textarea>
                  </div>
                  <button className="w-full py-5 rounded-xl bg-red-600 text-white font-pixel flex items-center justify-center gap-3 hover:bg-red-700 transition-all glow-fire">
                    SEND MESSAGE <Send className="w-5 h-5" />
                  </button>
               </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
