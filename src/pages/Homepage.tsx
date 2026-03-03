import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Zap, Globe, Code, Check, X, ArrowRight, Activity, Lock, Cpu, Database, Heart, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
// Footer is rendered at the app level

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const { t } = useTranslation();
  
  return (
    <section className="relative pt-48 pb-32 overflow-hidden grid-bg">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-8 border border-emerald-100">
                <Sparkles className="w-3 h-3" />
                {t('hero.version')}
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[0.9]">
                {t('hero.titleLine1')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                  {t('hero.titleHighlight')}
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-lg">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                  <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-10 py-5 bg-emerald-500 text-white rounded-[2rem] font-black hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-emerald-500/20"
                >
                  {t('hero.startTracking')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-[2rem] font-bold hover:bg-slate-50 transition-colors shadow-sm">
                  {t('hero.viewGuarantee')}
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div 
            style={{ y: y1 }}
            className="flex-1 w-full lg:w-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative glass-card overflow-hidden bg-white">
                <div className="h-12 border-b border-slate-100 flex items-center px-6 gap-3 bg-slate-50/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">system.monitor.eu</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="text-[10px] text-slate-400 font-bold mb-1 uppercase tracking-wider">Visitors</div>
                      <div className="text-2xl font-black text-slate-900">42,891</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                      <div className="text-[10px] text-emerald-600 font-bold mb-1 uppercase tracking-wider">Latency</div>
                      <div className="text-2xl font-black text-emerald-600">0.8ms</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center px-4 justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: i === 1 ? '85%' : i === 2 ? '60%' : '45%' }}
                              transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                              className="h-full bg-emerald-500" 
                            />
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400">NODE_0{i}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BentoGrid = () => {
  const { t } = useTranslation();
  return (
  <section id="features" className="py-32 bg-white relative">
    <div className="container-custom">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">{t('features.heading')}</h2>
        <p className="text-slate-600 max-w-xl mx-auto text-lg">{t('features.subtext')}</p>
      </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          whileHover={{ y: -8 }}
          className="md:col-span-2 glass-card p-10 flex flex-col justify-between min-h-[320px] group overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
            <Heart className="w-48 h-48 text-emerald-500" />
          </div>
          <div>
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 border border-emerald-100">
              <Shield className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">{t('features.cards.noBanners.title')}</h3>
            <p className="text-slate-600 text-lg max-w-md leading-relaxed">{t('features.cards.noBanners.text')}</p>
          </div>
          <div className="flex gap-4 mt-8">
            <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-700 border border-emerald-100 uppercase tracking-wider">Privacy First</span>
            <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[10px] font-bold text-blue-700 border border-blue-100 uppercase tracking-wider">Zero Friction</span>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -8 }}
          className="glass-card p-10 flex flex-col justify-between group"
        >
          <div>
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 border border-blue-100">
              <Zap className="w-7 h-7 text-blue-600" />
            </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{t('features.cards.instantLoad.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('features.cards.instantLoad.text')}</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -8 }}
          className="glass-card p-10 flex flex-col justify-between group"
        >
          <div>
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 border border-purple-100">
              <Globe className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">{t('features.cards.hundredEu.title')}</h3>
            <p className="text-slate-600 leading-relaxed">{t('features.cards.hundredEu.text')}</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -8 }}
          className="md:col-span-2 glass-card p-10 flex flex-col justify-between min-h-[320px] relative overflow-hidden group"
        >
          <div className="absolute bottom-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
            <Code className="w-60 h-60 text-slate-900" />
          </div>
          <div>
            <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-slate-900/20">
              <Code className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">{t('features.cards.setup.title')}</h3>
            <p className="text-slate-600 text-lg max-w-md leading-relaxed">{t('features.cards.setup.text')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
}

export default function Homepage() {
  return (
    <div className="bg-brand-bg selection:bg-emerald-500/20 selection:text-emerald-900">
      <Hero />
      <BentoGrid />
    </div>
  );
}
