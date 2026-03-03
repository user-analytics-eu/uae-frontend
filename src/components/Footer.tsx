import React from 'react';
import { Zap, Activity, Lock, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
  <footer className="bg-slate-900 text-slate-400 py-32">
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center">
              <Zap className="text-white w-6 h-6 fill-current" />
            </div>
            <span className="font-bold text-2xl tracking-tighter text-white">
              user-analytics<span className="text-emerald-500">.eu</span>
            </span>
          </div>
          <p className="max-w-sm text-lg mb-8 leading-relaxed">
            {t('footer.tagline')}
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all cursor-pointer group">
              <Activity className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all cursor-pointer group">
              <Lock className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all cursor-pointer group">
              <Cpu className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">{t('footer.productHeading')}</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><a href="/technology" className="hover:text-emerald-400 transition-colors">{t('footer.product.technology')}</a></li>
            <li><a href="/pricing" className="hover:text-emerald-400 transition-colors">{t('footer.product.pricing')}</a></li>
            <li><a href="/documentation" className="hover:text-emerald-400 transition-colors">{t('footer.product.documentation')}</a></li>
            <li><a href="/changelog" className="hover:text-emerald-400 transition-colors">{t('footer.product.changelog')}</a></li>
          </ul>
        </div>
        {/* <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">{t('footer.governanceHeading')}</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">{t('footer.governance.privacyPolicy')}</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">{t('footer.governance.dpa')}</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">{t('footer.governance.sovereignty')}</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">{t('footer.governance.legal')}</a></li>
          </ul>
        </div> */}
      </div>
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-widest">
        <p>{t('footer.copyright')}</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">{t('footer.status')}</a>
          <a href="#" className="hover:text-white transition-colors">{t('footer.uptime')}</a>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
