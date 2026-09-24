import React, { useState } from 'react';
import { GlassCard } from '../layout/GlassCard';
import { ScrollReveal } from '../layout/ScrollReveal';
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
      
      <ScrollReveal className="text-center mb-10 shrink-0 flex flex-col items-center">
        <div className="inline-flex items-center justify-center gap-4 mb-3 group">
          <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shadow-sm group-hover:scale-110 transition-transform duration-500">
            <Send size={28} />
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
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-6xl mx-auto items-stretch">
        
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          <ScrollReveal delay={100} className="h-full flex">
            <GlassCard className="p-6 md:p-8 border-emerald-500/20 bg-white/60 w-full dark:bg-black/40 backdrop-blur-lg relative overflow-hidden group shadow-md flex-1">
              <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_70%)] opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <h4 className="text-lg font-bold font-brand text-slate-900 dark:text-silver-100 mb-5 flex items-center gap-2.5 relative z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Direct Channels
              </h4>

              <div className="space-y-4 relative z-10">
                <a 
                  href="mailto:paulmrinal12@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group/item min-h-[48px]"
                  aria-label="Email Me"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover/item:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-silver-400 font-semibold">Email Me</p>
                    <p className="text-sm md:text-base font-medium text-slate-800 dark:text-silver-200 truncate group-hover/item:text-emerald-500 transition-colors">
                      paulmrinal12@gmail.com
                    </p>
                  </div>
                </a>

                <a 
                  href="tel:8918120382"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group/item min-h-[48px]"
                  aria-label="Call Me"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover/item:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-silver-400 font-semibold">Call Me</p>
                    <p className="text-sm md:text-base font-medium text-slate-800 dark:text-silver-200 group-hover/item:text-emerald-500 transition-colors">
                      +91 8918120382
                    </p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/918918120382" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group/item min-h-[48px]"
                  aria-label="Message on WhatsApp"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover/item:scale-110 transition-transform">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-silver-400 font-semibold">WhatsApp</p>
                    <p className="text-sm md:text-base font-medium text-slate-800 dark:text-silver-200 group-hover/item:text-emerald-500 transition-colors">
                      Chat Instantly
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-white/10 relative z-10">
                <p className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-silver-400 font-semibold mb-3">Connect on Socials</p>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://www.linkedin.com/in/mrinalpaul12/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 py-2.5 px-3 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-600 dark:text-sky-400 border border-sky-500/20 text-xs font-semibold transition-all min-h-[44px] hover:-translate-y-0.5"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>

                  <a 
                    href="https://www.instagram.com/mrinal.paul_/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 py-2.5 px-3 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 text-pink-600 dark:text-pink-400 border border-pink-500/20 text-xs font-semibold transition-all min-h-[44px] hover:-translate-y-0.5"
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
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <GlassCard className="p-6 md:p-8 border-emerald-500/20 bg-white/60 dark:bg-black/40 backdrop-blur-lg relative overflow-hidden group shadow-md flex-1">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_70%)] opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="space-y-5 relative z-10">
                <div>
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-2">
                    <MapPin size={18} />
                    <h5 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-silver-100">Current Address (Chennai)</h5>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-silver-300 leading-relaxed pl-7">
                    Mini Matrix Apartment, Near SRM Law gate, Thailavaram, Potheri, Narasimhan Nagar, Kattankulathur, Tamil Nadu 603203
                  </p>
                  <div className="pl-7 mt-2.5">
                    <a 
                      href="https://www.google.com/maps/dir//Mini+Matrix+Apartment,+R2GW%2BM95,+Potheri,+Narasimhan+Nagar,+Kattankulathur,+Tamil+Nadu+603203/@12.8345184,80.0423143,15z" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline hover:text-emerald-500 transition-colors"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <hr className="border-slate-200/50 dark:border-white/10" />

                <div>
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-2">
                    <MapPin size={18} />
                    <h5 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-silver-100">Permanent Address (Asansol)</h5>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-silver-300 leading-relaxed pl-7">
                    Domohani Bazar, Asansol, Paschim Bardhaman, West Bengal - 713334
                  </p>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-6">
          <ScrollReveal delay={300} className="flex flex-1">
            <GlassCard className="p-6 md:p-8 w-full border-emerald-500/20 bg-white/60 dark:bg-black/40 backdrop-blur-lg relative overflow-hidden shadow-lg flex-1 group">
              <div className="absolute -right-32 -top-32 w-80 h-80 bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_70%)] opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10">
                <h4 className="text-xl font-bold font-brand text-slate-900 dark:text-silver-100 mb-1.5">
                  Send a Message
                </h4>
                <p className="text-sm text-slate-500 dark:text-silver-400 mb-6">
                  Fill out the form below to shoot an email directly to my inbox.
                </p>

                {isSubmitted && (
                  <div className="mb-5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-2.5 text-xs sm:text-sm font-medium animate-[fadeIn_0.5s_ease-out]">
                    <CheckCircle size={18} />
                    <span>Redirecting to your email client to send message to paulmrinal12@gmail.com...</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 dark:text-silver-300 uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-silver-100 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 dark:text-silver-300 uppercase tracking-wider mb-2">
                        Your Email
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-silver-100 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 dark:text-silver-300 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Hey Mrinal, let's collaborate on..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-silver-100 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm tracking-wider uppercase shadow-[0_8px_20px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-1 min-h-[48px]"
                  >
                    <Send size={18} />
                    <span>Send Direct Email</span>
                  </button>
                </form>
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <GlassCard className="p-2.5 border-emerald-500/20 bg-white/60 dark:bg-black/40 backdrop-blur-lg overflow-hidden relative shadow-md h-[220px]">
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
                  className="w-full h-full grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};