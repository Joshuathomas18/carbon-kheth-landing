import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Calculator } from '@/components/Calculator';
import { MousePointer2, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-black">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* HERO SECTION */}
        <section className="px-8 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8 animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Pipeline Live | Pilot Program Open
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 max-w-5xl leading-[1.1]">
            The Rural Distribution Engine for <span className="text-primary text-glow">Global Carbon Markets.</span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-secondary leading-relaxed mb-12">
            Drop your smallholder MRV onboarding CAC from <span className="text-white font-semibold italic">₹2,000+</span> to <span className="text-primary font-bold">₹200</span> using our WhatsApp-native, Verra-compliant AI pipeline.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://calendly.com/placeholder"
              className="px-8 py-4 bg-primary text-black font-bold rounded-md hover:bg-primary-dim transition-all text-base flex items-center gap-2 glow-primary"
            >
              Book a Pilot Call <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#calculator"
              className="px-8 py-4 glass text-white font-semibold rounded-md hover:bg-surface-high transition-all text-base"
            >
              Analyze ROI
            </a>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section id="features" className="px-8 py-24 bg-surface/30 border-y border-outline-ghost">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Precision execution at scale.</h2>
              <p className="text-secondary max-w-xl mx-auto">Our pipeline eliminates human error and manual overhead from the MRV process.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-surface/50 border border-outline-ghost hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <MousePointer2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Zero-Friction Collection</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Native GPS pinning and simple numbered chat menus via WhatsApp. No app downloads or training required for farmers.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-surface/50 border border-outline-ghost hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Instant Verification</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Asynchronous Google Earth Engine integration for instant NDVI, EVI, and soil proxy validation during the chat.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-surface/50 border border-outline-ghost hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Registry-Ready</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Calculations ingested strictly from Verra VM0042 and IPCC Tier 2 methodologies. Fully auditable trail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROI CALCULATOR SECTION */}
        <section id="calculator" className="px-8 py-32 overflow-hidden relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
           <div className="relative z-10 max-w-7xl mx-auto">
             <div className="text-center mb-12">
               <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Calculate Your Margin Shift</h2>
               <p className="text-secondary">Visualize the blunt-force financial advantage of our AI pipeline.</p>
             </div>
             <Calculator />
           </div>
        </section>

        {/* CTA SECTION */}
        <section className="px-8 py-20">
          <div className="max-w-4xl mx-auto rounded-3xl bg-primary p-12 md:p-20 text-center relative overflow-hidden glow-primary">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dim opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tighter mb-8 leading-tight">
                Seeking Pilot Partners. <br />Experience the Monolith.
              </h2>
              <p className="text-black/80 font-medium mb-12 max-w-lg mx-auto text-lg">
                We are onboarding aggregators for our sandbox. Deploy 1,000 farmers with zero upfront risk.
              </p>
              <a 
                href="https://calendly.com/placeholder"
                className="px-12 py-5 bg-black text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-all text-xl"
              >
                Book Your 15-Min Strategy Session
              </a>
              <p className="mt-8 text-black/60 text-xs font-mono uppercase tracking-widest font-bold">
                Limited to 10 Early Access Pilot Spots
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
