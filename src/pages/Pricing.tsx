import React, { useState } from 'react';
import { Check, Zap, Shield, Globe, ArrowRight, Info, Lock, Eye, EyeOff, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';

const Pricing = () => {
  const { t } = useTranslation();
  const [isAnnual, setIsAnnual] = useState(true);
  const [showPrivacyComparison, setShowPrivacyComparison] = useState(false);

  const plans = [
    {
      id: 'startup',
      price: isAnnual ? 12 : 15,
      events: '100,000',
      features: ['coreDashboard', 'oneYearRetention', 'emailSupport', 'euResidency'],
      highlight: false,
      badge: null,
    },
    {
      id: 'growth',
      price: isAnnual ? 39 : 49,
      events: '1,000,000',
      features: ['unlimitedSites', 'fiveYearRetention', 'prioritySupport', 'weeklyDigests', 'autoArchiving'],
      highlight: true,
      badge: 'mostPopular',
    },
    {
      id: 'business',
      price: isAnnual ? 159 : 199,
      events: '10,000,000',
      features: ['teamAccounts', 'rawExport', 'customDomains', 'sla', 'customDpa'],
      highlight: false,
      badge: null,
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg pt-48 pb-32 selection:bg-emerald-500/20 selection:text-emerald-900 grid-bg">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-8 border border-emerald-100">
              <Sparkles className="w-3 h-3" />
              {t('pricing.banner')}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
              {t('pricing.headingLine1')} <span className="text-emerald-600">{t('pricing.headingHighlight')}</span>.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              {t('pricing.subtitle')}
            </p>
          </motion.div>

          {/* Sovereignty Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm font-bold mb-12 shadow-sm"
          >
            <Shield className="w-5 h-5 text-emerald-600" />
            {t('pricing.sovereigntyBadge')}
          </motion.div>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-slate-900' : 'text-slate-400'}`}>{t('pricing.toggle.monthly')}</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-16 h-9 bg-slate-200 rounded-full p-1 relative transition-colors hover:bg-slate-300"
            >
              <motion.div 
                animate={{ x: isAnnual ? 28 : 0 }}
                className="w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center"
              >
                <div className={`w-1.5 h-1.5 rounded-full transition-colors ${isAnnual ? 'bg-emerald-500' : 'bg-slate-400'}`} />
              </motion.div>
            </button>
            <div className="flex items-center gap-3">
              <span className={`text-sm font-bold ${isAnnual ? 'text-slate-900' : 'text-slate-400'}`}>{t('pricing.toggle.annual')}</span>
              <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider shadow-lg shadow-emerald-500/20">{t('pricing.saveBadge')}</span>
            </div>
          </div>
        </div>

        {/* Privacy Toggle Interactive */}
        <div className="max-w-xl mx-auto mb-24">
          <div className="glass-card p-8 flex flex-col items-center gap-6">
              <div className="flex items-center gap-4 w-full justify-between">
              <span className="text-sm font-black text-slate-900 uppercase tracking-widest">{t('pricing.privacyMode')}</span>
              <button 
                onClick={() => setShowPrivacyComparison(!showPrivacyComparison)}
                className="flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                {showPrivacyComparison ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {showPrivacyComparison ? t('pricing.hideComparison') : t('pricing.showComparison')}
              </button>
            </div>
            
            <AnimatePresence mode="wait">
              {showPrivacyComparison ? (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="w-full space-y-4 overflow-hidden"
                >
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-500">{t('pricing.comparison.ga4')}</span>
                    <span className="text-xs font-black text-red-500 uppercase tracking-tighter">{t('pricing.comparison.requiresBanner')}</span>
                  </div>
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-between">
                    <span className="text-sm text-slate-900 font-black">{t('pricing.comparison.us')}</span>
                    <span className="text-xs font-black text-emerald-600 uppercase tracking-tighter">{t('pricing.comparison.noBanner')}</span>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-slate-500 text-sm italic font-medium leading-relaxed">{t('pricing.privacy.quote')}</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col glass-card p-10 group transition-all duration-500 ${plan.highlight ? 'border-emerald-500/30 shadow-2xl shadow-emerald-500/10 scale-105 z-10' : 'hover:border-slate-300'}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl">
                  {t(`pricing.badges.${plan.badge}`)}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-black text-slate-900 mb-3">{t(`pricing.plans.${plan.id}.name`)}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{t(`pricing.plans.${plan.id}.description`)}</p>
              </div>

              <div className="mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-slate-900">€{plan.price}</span>
                  <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">{t('pricing.perMonth')}</span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  {plan.events} {t('pricing.eventsPerMonth')}
                </div>
              </div>

              <div className="flex-1 space-y-5 mb-12">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-sm text-slate-600 font-medium">{t(`pricing.plans.${plan.id}.features.${feature}`)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-5 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-3 ${plan.highlight ? 'bg-emerald-500 text-white shadow-xl shadow-emerald-500/20' : 'bg-slate-900 text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800'}`}
                >
                  {t(`pricing.plans.${plan.id}.cta`)}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <div className="flex items-start gap-3 px-2">
                  <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-slate-500 font-bold leading-relaxed">
                    Exceeded your limit? We won't cut you off. We'll reach out to help you upgrade.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Polar Note */}
        <div className="mt-32 text-center">
          <p className="text-slate-400 text-sm font-bold flex items-center justify-center gap-3">
            Payments secured by 
            <span className="text-slate-900 font-black flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-500 rounded-md shadow-sm" />
              Polar.sh
            </span>
          </p>
          <p className="text-slate-400 text-[10px] mt-3 font-black uppercase tracking-[0.2em]">VAT Handling • Instant Receipts • Customer Portal</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
