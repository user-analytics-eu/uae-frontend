import React from 'react';
import { Leaf, Zap, Cpu, BarChart3, Wind, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const Sustainability = () => {
  const { t } = useTranslation();

  const stats = [
    {
      id: 'energy',
      value: '90%',
      icon: <Wind className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50"
    },
    {
      id: 'resource',
      value: '1/10th',
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50"
    },
    {
      id: 'speed',
      value: '10x',
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50"
    }
  ];

  const comparisons = [
    { id: 'python', energy: 70, color: 'bg-slate-200' },
    { id: 'node', energy: 40, color: 'bg-slate-300' },
    { id: 'rust', energy: 5, color: 'bg-emerald-500' }
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
              <Leaf className="w-3 h-3" />
              {t('sustainability.stackLabel')}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[0.9]">
              {t('sustainability.titleLine1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                {t('sustainability.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              {t('sustainability.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 flex flex-col items-center text-center group hover:border-emerald-200 transition-colors"
            >
              <div className={`w-16 h-16 ${stat.bg} rounded-3xl flex items-center justify-center mb-8 border border-slate-100`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">{t(`sustainability.stats.${stat.id}.label`)}</div>
              <p className="text-slate-600 text-sm font-medium">{t(`sustainability.stats.${stat.id}.sub`)}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Chart Section */}
        <div className="glass-card p-12 md:p-20 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
            <BarChart3 className="w-96 h-96 text-emerald-500" />
          </div>
          
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">{t('sustainability.comparisons.heading')}</h2>
            <p className="text-slate-600 mb-16 text-lg">{t('sustainability.comparisons.subtitle')}</p>
            
            <div className="space-y-12">
              {comparisons.map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-lg font-black text-slate-900">{t(`sustainability.comparisons.items.${item.id}.lang`)}</span>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{t(`sustainability.comparisons.items.${item.id}.note`)}</p>
                    </div>
                    <span className="text-sm font-black text-slate-400">{t('sustainability.comparisons.energyLabel', { value: item.energy })}</span>
                  </div>
                  <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.energy}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why it matters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">{t('sustainability.whyHeading')}</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-100">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 mb-2">{t('sustainability.reasons.costs.title')}</h4>
                  <p className="text-slate-600 leading-relaxed">{t('sustainability.reasons.costs.text')}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 border border-blue-100">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 mb-2">{t('sustainability.reasons.future.title')}</h4>
                  <p className="text-slate-600 leading-relaxed">{t('sustainability.reasons.future.text')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square glass-card bg-emerald-500 flex flex-col items-center justify-center text-center p-12 text-white overflow-hidden">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-10"
              >
                <Wind className="w-full h-full" />
              </motion.div>
              <div className="relative z-10">
                <div className="text-[120px] font-black leading-none mb-4">0<span className="text-emerald-200">g</span></div>
                <div className="text-xl font-black uppercase tracking-widest">{t('sustainability.carbon.heading')}</div>
                <p className="mt-6 text-emerald-100 font-medium">{t('sustainability.carbon.text')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
