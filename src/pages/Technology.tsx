import React from 'react';
import { Cpu, Shield, Globe, Zap, Database, Lock, Server, Code, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const Technology = () => {
  const { t } = useTranslation();

  const techCards = [
    {
      id: 'rustCore',
      icon: <Cpu className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50",
      border: "border-emerald-100"
    },
    {
      id: 'tenKb',
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      id: 'euInfra',
      icon: <Server className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50",
      border: "border-purple-100"
    }
  ];

  const alignments = [
    { id: 'privacy' },
    { id: 'sovereignty' },
    { id: 'sustainability' }
  ];

  return (
    <div className="min-h-screen bg-brand-bg pt-48 pb-32 selection:bg-emerald-500/20 selection:text-emerald-900 grid-bg">
      <div className="container-custom relative z-10">
        {/* Hero */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-8 border border-emerald-100">
              <Sparkles className="w-3 h-3" />
              {t('technology.stackLabel')}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[0.9]">
              {t('technology.titleLine1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                {t('technology.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              {t('technology.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {techCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 flex flex-col justify-between group hover:border-emerald-200 transition-colors"
            >
              <div>
                <div className={`w-14 h-14 ${card.bg} rounded-2xl flex items-center justify-center mb-8 border ${card.border}`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{t(`technology.cards.${card.id}.title`)}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">{t(`technology.cards.${card.id}.description`)}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('technology.coreValue', { value: t(`technology.cards.${card.id}.value`) })}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alignment Section */}
        <div className="glass-card p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
            <Shield className="w-96 h-96 text-emerald-500" />
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">{t('technology.whyHeading')}</h2>
              <button 
                onClick={() => window.location.href = '/sustainability'}
                className="flex items-center gap-2 text-sm font-black text-emerald-600 hover:text-emerald-700 transition-colors group"
              >
                {t('technology.learnSustainability')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {alignments.map((item, i) => (
                <div key={i} className="space-y-6">
                  <div className="text-xs font-black text-emerald-600 uppercase tracking-[0.2em]">{t(`technology.alignments.${item.id}.goal`)}</div>
                  <h4 className="text-xl font-black text-slate-900">{t(`technology.alignments.${item.id}.tech`)}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{t(`technology.alignments.${item.id}.description`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default Technology;
