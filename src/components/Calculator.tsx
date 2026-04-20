"use client";

import React, { useState } from 'react';

export const Calculator = () => {
  const [farmers, setFarmers] = useState(1000);
  
  const traditionalCost = farmers * 1500;
  const carbonKhethCost = farmers * 400;
  const savings = traditionalCost - carbonKhethCost;

  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} L`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 rounded-2xl glass glow-primary mt-12 mb-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Scale Your Impact
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              Adjust the slider to see how much your aggregator business saves by switching to our precision AI pipeline.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-white font-medium">Number of Farmers</span>
              <span className="text-primary font-bold text-xl drop-shadow-[0_0_8px_rgba(57,255,20,0.4)]">
                {farmers.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={farmers}
              onChange={(e) => setFarmers(parseInt(e.target.value))}
              className="w-full h-1.5 bg-surface-high rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-secondary font-mono">
              <span>1K</span>
              <span>25K</span>
              <span>50K</span>
              <span>75K</span>
              <span>100K</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-1 gap-4">
          <div className="p-6 rounded-xl bg-surface border border-outline-ghost">
            <span className="text-xs font-mono text-secondary uppercase tracking-widest block mb-2">
              Traditional ONBOARDING CAC
            </span>
            <span className="text-2xl font-semibold text-white/50 line-through">
              {formatCurrency(traditionalCost)}
            </span>
          </div>

          <div className="p-6 rounded-xl bg-surface border border-outline-ghost relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2">
               <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_var(--primary)]"></div>
            </div>
            <span className="text-xs font-mono text-secondary uppercase tracking-widest block mb-2">
              CARBON_KHETH AI PIPELINE
            </span>
            <span className="text-2xl font-bold text-white">
              {formatCurrency(carbonKhethCost)}
            </span>
          </div>

          <div className="p-8 rounded-xl bg-primary/5 border border-primary/20 glow-primary">
            <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-2">
              NET AGGREGATOR SAVINGS
            </span>
            <span className="text-4xl font-bold text-primary text-glow">
              {formatCurrency(savings)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
