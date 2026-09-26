import React, { useState } from 'react';
import { GlassCard } from '../layout/GlassCard';
import { ScrollReveal } from '../layout/ScrollReveal';
import { Mail, MapPin, Send, MessageSquare, CheckCircle, XCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [resultMessage, setResultMessage] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "bcd932c8-3465-4fd0-8c09-b49cb0724f9b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        setResultMessage("Message sent successfully!");
        event.currentTarget.reset();
      } else {
        setStatus('error');
        setResultMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus('error');
      setResultMessage("Network error. Please check your connection.");
    }
    
    setIsSubmitting(false);
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="relative w-full min-h-[100dvh] flex flex-col justify-center pt-8 pb-28 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-0">
      
      <ScrollReveal className="text-center mb-6 shrink-0 flex flex-col items-center">
        <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-500 font-semibold mb-1.5">
          Get In Touch
        </h2>
        <h3 className="text-3xl md:text-4xl font-brand font-bold bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent tracking-wide">
          LET'S CONNECT
        </h3>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 w-full max-w-5xl mx-auto items-stretch">
        
        {/* LEFT COLUMN: Contact Info, Addresses & Socials */}
        <div className="lg:col-span-5 flex flex-col h-full">
          <ScrollReveal delay={100} className="h-full">
            <GlassCard className="p-5 md:p-6 border-emerald-500/20 bg-white/60 w-full dark:bg-black/40 backdrop-blur-lg relative overflow-hidden group shadow-lg flex flex-col justify-between h-full">
              
              <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_70%)] opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col gap-6">
                
                {/* 1. Proper Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="mailto:paulmrinal12@gmail.com" 
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-semibold text-xs tracking-wider uppercase shadow-[0_4px_10px_rgba(16,185,129,0.2)] transition-transform hover:-translate-y-0.5"
                  >
                    <Mail size={16} />
                    <span>Email Me</span>
                  </a>
                  
                  <a 
                    href="https://wa.me/918918120382" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 dark:bg-white/10 hover:bg-slate-700 dark:hover:bg-white/20 text-white font-semibold text-xs tracking-wider uppercase shadow-md transition-transform hover:-translate-y-0.5"
                  >
                    <MessageSquare size={16} />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* 2. Full Addresses */}
                <div className="space-y-4">
                  <div className="bg-white/40 dark:bg-white/5 rounded-lg p-3 border border-slate-200/50 dark:border-white/10">
                    <div className="flex items-center gap-1.5 mb-1.5 text-emerald-600 dark:text-emerald-400">
                      <MapPin size={14} />
                      <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-900 dark:text-silver-100">Current Address</h5>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-silver-300 leading-relaxed pl-5">
                      Mini Matrix Apartment, Near SRM Law gate, Thailavaram, Potheri, Narasimhan Nagar, Kattankulathur, Tamil Nadu 603203
                    </p>
                  </div>

                  <div className="bg-white/40 dark:bg-white/5 rounded-lg p-3 border border-slate-200/50 dark:border-white/10">
                    <div className="flex items-center gap-1.5 mb-1.5 text-emerald-600 dark:text-emerald-400">
                      <MapPin size={14} />
                      <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-900 dark:text-silver-100">Permanent Address</h5>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-silver-300 leading-relaxed pl-5">
                      Near Gitanjali Auto Centre, Domohani Bazar, Asansol, Paschim Bardhaman, West Bengal - 713334
                    </p>
                  </div>
                </div>

              </div>

              {/* 3. Socials Grid */}
              <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-white/10 relative z-10">
                <div className="grid grid-cols-4 gap-2">
                  <a href="https://www.linkedin.com/in/mrinalpaul12/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 transition-transform hover:-translate-y-1" title="LinkedIn">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="https://github.com/imrinal" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 rounded-lg bg-slate-500/10 hover:bg-slate-500/20 text-slate-700 dark:text-silver-300 transition-transform hover:-translate-y-1" title="GitHub">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                  <a href="https://x.com/PMrinal12" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-600 dark:text-sky-400 transition-transform hover:-translate-y-1" title="Twitter/X">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/mrinal.paul_/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 text-pink-600 dark:text-pink-400 transition-transform hover:-translate-y-1" title="Instagram">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                </div>
              </div>

            </GlassCard>
          </ScrollReveal>
        </div>

        {/* RIGHT COLUMN: Web3Forms Contact Form */}
        <div className="lg:col-span-7 flex flex-col h-full">
          <ScrollReveal delay={200} className="h-full">
            <GlassCard className="p-5 md:p-6 w-full border-emerald-500/20 bg-white/60 dark:bg-black/40 backdrop-blur-lg relative overflow-hidden shadow-lg h-full flex flex-col justify-center group">
              
              <div className="absolute -right-32 -top-32 w-80 h-80 bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_70%)] opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10">
                <h4 className="text-xl font-bold font-brand text-slate-900 dark:text-silver-100 mb-1">
                  Send a Message
                </h4>
                <p className="text-xs text-slate-500 dark:text-silver-400 mb-5">
                  Shoot an email directly to my inbox.
                </p>

                {status === 'success' && (
                  <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-2 text-xs font-medium animate-[fadeIn_0.3s_ease-out]">
                    <CheckCircle size={14} className="shrink-0" />
                    <span>{resultMessage}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 flex items-center gap-2 text-xs font-medium animate-[fadeIn_0.3s_ease-out]">
                    <XCircle size={14} className="shrink-0" />
                    <span>{resultMessage}</span>
                  </div>
                )}

                <form onSubmit={onSubmit} className="space-y-4" autoComplete="off">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-600 dark:text-silver-300 uppercase tracking-wider mb-1.5">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        autoComplete="off"
                        spellCheck="false"
                        placeholder="John Doe"
                        className="w-full px-3 py-2.5 rounded-lg bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-silver-100 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-600 dark:text-silver-300 uppercase tracking-wider mb-1.5">Your Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        autoComplete="off"
                        spellCheck="false"
                        placeholder="john@example.com"
                        className="w-full px-3 py-2.5 rounded-lg bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-silver-100 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold text-slate-600 dark:text-silver-300 uppercase tracking-wider mb-1.5">Message</label>
                    <textarea 
                      name="message"
                      required
                      autoComplete="off"
                      spellCheck="false"
                      rows={3}
                      placeholder="Hey Mrinal, let's collaborate on..."
                      className="w-full px-3 py-2.5 rounded-lg bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-silver-100 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-semibold text-xs tracking-wider uppercase shadow-[0_8px_20px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send size={14} />
                    )}
                    <span>{isSubmitting ? 'Sending...' : 'Send Direct Email'}</span>
                  </button>
                </form>
              </div>

            </GlassCard>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};