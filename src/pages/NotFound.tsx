import React from 'react';
import { Home, ArrowLeft, Construction, Ghost } from 'lucide-react';
import { motion } from 'motion/react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6 pt-26 grid-bg">
      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-12 md:p-20 overflow-hidden relative"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500" />
          
          <div className="mb-12 relative inline-block">
            <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl rounded-full animate-pulse" />
            <Ghost className="w-24 h-24 text-slate-900 relative z-10 mx-auto" />
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-slate-900 mb-6 tracking-tighter">404</h1>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">
            Oops! You've hit a <span className="text-emerald-600">Digital Border.</span>
          </h2>
          
          <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-md mx-auto font-medium">
            This page is currently outside our jurisdiction. Our engineers are working hard to expand our territory.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => window.location.href = '/'}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-900/20"
            >
              <Home className="w-5 h-5" />
              RETURN HOME
            </button>
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-3"
            >
              <ArrowLeft className="w-5 h-5" />
              GO BACK
            </button>
          </div>
        </motion.div>

        <p className="mt-12 text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
          User-Analytics.eu • Sovereign Infrastructure
        </p>
      </div>
    </div>
  );
};

export default NotFound;
