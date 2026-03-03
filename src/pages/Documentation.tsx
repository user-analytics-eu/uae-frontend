import React, { useState } from 'react';
import { Book, Copy, Check, Terminal, Code, Layers, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Documentation = () => {
  const [activeTab, setActiveTab] = useState('react');
  const [copied, setCopied] = useState(false);

  const frameworks = [
    { id: 'react', name: 'React', icon: '⚛️' },
    { id: 'nextjs', name: 'Next.js', icon: '▲' },
    { id: 'vue', name: 'Vue', icon: '🟢' },
    { id: 'svelte', name: 'Svelte', icon: '🧡' },
    { id: 'vanilla', name: 'Vanilla JS', icon: '📜' }
  ];

  const docs = {
    react: {
      install: 'npm install @ua/react',
      code: `import { UAProvider } from '@ua/react';

function App() {
  return (
    <UAProvider token="YOUR_TOKEN">
      <YourApp />
    </UAProvider>
  );
}`
    },
    nextjs: {
      install: 'npm install @ua/next',
      code: `// layout.tsx
import { UAMonitor } from '@ua/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <UAMonitor token="YOUR_TOKEN" />
      </body>
    </html>
  );
}`
    },
    vue: {
      install: 'npm install @ua/vue',
      code: `import { createApp } from 'vue';
import { UserAnalytics } from '@ua/vue';

const app = createApp(App);
app.use(UserAnalytics, {
  token: 'YOUR_TOKEN'
});`
    },
    svelte: {
      install: 'npm install @ua/svelte',
      code: `<script>
  import { UA } from '@ua/svelte';
</script>

<UA token="YOUR_TOKEN" />`
    },
    vanilla: {
      install: 'Direct Script Tag',
      code: `<!-- Add to your <head> -->
<script 
  async 
  src="https://cdn.user-analytics.eu/v1.js" 
  data-token="YOUR_TOKEN"
></script>`
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-brand-bg pt-48 pb-32 selection:bg-emerald-500/20 selection:text-emerald-900 grid-bg">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-8 border border-emerald-100">
              <Book className="w-3 h-3" />
              DOCUMENTATION
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[0.9]">
              GET STARTED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                IN MINUTES.
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              Integrate sovereign analytics into your favorite framework with just a few lines of code. No complex configuration required.
            </p>
          </motion.div>
        </div>

        {/* Framework Toggle */}
        <div className="flex flex-wrap gap-2 mb-12 p-2 bg-white rounded-[2rem] border border-slate-200 shadow-sm w-fit">
          {frameworks.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveTab(f.id)}
              className={`px-6 py-3 rounded-full text-sm font-black transition-all flex items-center gap-2 ${
                activeTab === f.id 
                ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10' 
                : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <span>{f.icon}</span>
              {f.name}
            </button>
          ))}
        </div>

        {/* Docs Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-card p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-900/20">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">1. Install</h3>
                  <p className="text-sm text-slate-500 font-medium">Add the SDK to your project</p>
                </div>
              </div>
              <div className="relative group">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 font-mono text-sm text-slate-700 overflow-x-auto">
                  {docs[activeTab as keyof typeof docs].install}
                </div>
                <button 
                  onClick={() => copyToClipboard(docs[activeTab as keyof typeof docs].install)}
                  className="absolute top-4 right-4 p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-400" />}
                </button>
              </div>
            </div>

            <div className="glass-card p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">2. Initialize</h3>
                  <p className="text-sm text-slate-500 font-medium">Connect your tracking token</p>
                </div>
              </div>
              <div className="relative group">
                <pre className="bg-slate-900 border border-slate-800 rounded-2xl p-6 font-mono text-sm text-slate-300 overflow-x-auto leading-relaxed">
                  <code>{docs[activeTab as keyof typeof docs].code}</code>
                </pre>
                <button 
                  onClick={() => copyToClipboard(docs[activeTab as keyof typeof docs].code)}
                  className="absolute top-4 right-4 p-2 bg-white/10 border border-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-400" />}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-10 bg-emerald-500 text-white border-none shadow-2xl shadow-emerald-500/20">
              <h3 className="text-2xl font-black mb-6">Pro Tip: Auto-Events</h3>
              <p className="text-emerald-50 font-medium leading-relaxed mb-8">
                Our SDKs automatically track page views, outbound links, and file downloads. You don't need to write a single line of extra code for basic tracking.
              </p>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                Zero-Config Tracking Enabled
              </div>
            </div>

            <div className="glass-card p-10">
              <h3 className="text-xl font-black text-slate-900 mb-6">Need more help?</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all group">
                  <div className="flex items-center gap-4">
                    <Layers className="w-5 h-5 text-emerald-600" />
                    <span className="font-bold text-slate-700">Full API Reference</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all group">
                  <div className="flex items-center gap-4">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-slate-700">Custom Event Tracking</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-24 text-center">
          <p className="text-slate-400 text-sm font-bold">
            Using a different stack? Check our 
            <a href="#" className="text-emerald-600 hover:underline ml-1">Community SDKs</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
