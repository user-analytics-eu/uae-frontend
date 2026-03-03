import React from 'react';
import { Zap, Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `hover:text-emerald-600 transition-colors ${isActive ? 'text-emerald-600 font-bold' : 'text-slate-600'}`;

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl">
      <div className="container-custom h-20 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Zap className="text-white w-6 h-6 fill-current" />
          </div>
          <span className="font-bold text-2xl tracking-tighter text-slate-900">
            user-analytics<span className="text-emerald-500">.eu</span>
          </span>
        </NavLink>
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <NavLink to="/technology" className={linkClass}>{t('nav.technology')}</NavLink>
          <NavLink to="/sustainability" className={linkClass}>{t('nav.sustainability')}</NavLink>
          <NavLink to="/pricing" className={linkClass}>{t('nav.pricing')}</NavLink>
          <NavLink to="/pricing" className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-emerald-600 transition-all font-bold shadow-lg shadow-slate-900/10">
            {t('nav.getStarted')}
          </NavLink>
          <label htmlFor="lang-select" className="sr-only">Language</label>
          <select
            id="lang-select"
            aria-label="Select language"
            className="bg-white border rounded px-2 py-1 text-xs"
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
            <option value="it">IT</option>
            <option value="pl">PL</option>
            <option value="nl">NL</option>
          </select>
        </div>
        <button className="md:hidden p-2 text-slate-900">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
