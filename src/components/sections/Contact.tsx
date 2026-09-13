import React, { useState } from 'react';
import { GlassCard } from '../layout/GlassCard';
import { Mail, Phone, MapPin, Send, MessageSquare, ExternalLink, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:paulmrinal12@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)})&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="w-full flex flex-col justify-center py-16 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center mb-10 shrink-0 flex flex-col items-center">
        <div className="inline-flex items-center justify-center gap-4 mb-3">
          <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shadow-sm">
            <Send size={26} />
          </div>
          <div className="text-left">
            <h2 className="text-[11px] uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 font-semibold mb-0.5">
              Get In Touch
            </h2>
            <h3 className="text-2xl md:text-3xl font-brand font-bold text-slate-900 dark:text-silver-100 tracking-wide">
              Let's Build Something Extraordinary
            </h3>
          </div>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-6xl mx-auto items-stretch">
        
        {/* Left Column: Addresses, Direct Contact & Socials (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
          
          {/* Direct Channels Card */}
          <GlassCard className="p-5 md:p-6 border-emerald-500/20 bg-white/60 dark:bg-black/40 backdrop-blur-3xl relative overflow-hidden group shadow-md">
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <h4 className="text-base font-bold font-brand text-slate-900 dark:text-silver-100 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Direct Channels
            </h4>

            <div className="space-y-3.5">
              {/* Email */}
              <a 
                href="mailto:paulmrinal12@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group/item"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-silver-400 font-semibold">Email Me</p>
                  <p className="text-xs md:text-sm font-medium text-slate-800 dark:text-silver-200 truncate group-hover/item:text-emerald-500 transition-colors">
                    paulmrinal12@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone / Call */}
              <a 
                href="tel:8918120382"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group/item"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-silver-400 font-semibold">Call Me</p>
                  <p className="text-xs md:text-sm font-medium text-slate-800 dark:text-silver-200 group-hover/item:text-emerald-500 transition-colors">
                    +91 8918120382
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/918918120382" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group/item"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-silver-400 font-semibold">WhatsApp</p>
                  <p className="text-xs md:text-sm font-medium text-slate-800 dark:text-silver-200 group-hover/item:text-emerald-500 transition-colors">
                    Chat Instantly
                  </p>
                </div>
              </a>
            </div>

            {/* Social Media Buttons Only */}
            <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-white/10">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-silver-400 font-semibold mb-3">Connect on Socials</p>
              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/mrinalpaul12/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 py-2 px-3 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-600 dark:text-sky-400 border border-sky-500/20 text-xs font-semibold transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/mrinal.paul_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 py-2 px-3 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 text-pink-600 dark:text-pink-400 border border-pink-500/20 text-xs font-semibold transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </GlassCard>

          {/* Addresses Card */}
          <GlassCard className="p-5 md:p-6 border-emerald-500/20 bg-white/60 dark:bg-black/40 backdrop-blur-3xl relative overflow-hidden group shadow-md flex-1">
            <div className="space-y-4">
              {/* Current Address */}
              <div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1">
                  <MapPin size={16} />
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-silver-100">Current Address (Chennai)</h5>
                </div>
                <p className="text-xs text-slate-600 dark:text-silver-300 leading-relaxed pl-6">
                  Mini Matrix Apartment, Near SRM Law gate, Thailavaram, Potheri, Narasimhan Nagar, Kattankulathur, Tamil Nadu 603203
                </p>
                <div className="pl-6 mt-1.5">
                  <a 
                    href="https://www.google.com/maps/dir//Mini+Matrix+Apartment,+R2GW%2BM95,+Potheri,+Narasimhan+Nagar,+Kattankulathur,+Tamil+Nadu+603203/@12.8345184,80.0423143,15z" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>

              <hr className="border-slate-200/50 dark:border-white/10" />

              {/* Permanent Address */}
              <div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1">
                  <MapPin size={16} />
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-silver-100">Permanent Address (Asansol)</h5>
                </div>
                <p className="text-xs text-slate-600 dark:text-silver-300 leading-relaxed pl-6">
                  Domohani Bazar, Asansol, Paschim Bardhaman, West Bengal - 713334
                </p>
              </div>
            </div>
          </GlassCard>

        </div>

        {/* Right Column: Interactive Direct-to-Mail Form & Google Map Embed (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          
          {/* Form Card */}
          <GlassCard className="p-6 md:p-8 border-emerald-500/20 bg-white/60 dark:bg-black/40 backdrop-blur-3xl relative overflow-hidden shadow-lg flex-1">
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <h4 className="text-lg font-bold font-brand text-slate-900 dark:text-silver-100 mb-1">
              Send a Message
            </h4>
            <p className="text-xs text-slate-500 dark:text-silver-400 mb-5">
              Fill out the form below to shoot an email directly to my inbox.
            </p>

            {isSubmitted && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-2 text-xs font-medium animate-fadeIn">
                <CheckCircle size={16} />
                <span>Redirecting to your email client to send message to paulmrinal12@gmail.com...</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 dark:text-silver-300 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-silver-100 placeholder-slate-400 text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 dark:text-silver-300 uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-silver-100 placeholder-slate-400 text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-600 dark:text-silver-300 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Hey Mrinal, let's collaborate on..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-silver-100 placeholder-slate-400 text-xs focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={15} />
                <span>Send Direct Email</span>
              </button>
            </form>
          </GlassCard>

          {/* Embedded Map for Current Address */}
          <GlassCard className="p-2 border-emerald-500/20 bg-white/60 dark:bg-black/40 backdrop-blur-3xl overflow-hidden relative shadow-md h-[180px]">
            <div className="w-full h-full rounded-xl overflow-hidden border border-slate-200/60 dark:border-white/10">
              <iframe 
                title="Current Address Map - Mini Matrix Apartment"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.316829768291!2d80.04340187595568!3d12.826637887474447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f72f864c2ec1%3A0xbedc869afeb2d44d!2sMini%20Matrix%20Apartment!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 opacity-80 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </GlassCard>

        </div>

      </div>
    </section>
  );
};