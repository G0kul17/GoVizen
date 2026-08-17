import React from 'react';
import { ShieldCheck, Code, Zap, MessageSquare, CheckCircle2 } from 'lucide-react';

export const Approach: React.FC = () => {
  const principles = [
    {
      title: 'Zero Overhead & Direct Access',
      desc: 'No middle managers, no junior handoffs. Every line of code and every interaction is owned directly by the co-founders.',
      icon: MessageSquare,
      tag: 'Communication'
    },
    {
      title: 'Strict Code Hygiene & TypeScript',
      desc: 'We write strongly-typed, modular, self-documenting codebases that your team or future developers can easily maintain and extend.',
      icon: Code,
      tag: 'Engineering'
    },
    {
      title: 'Speed Without Technical Debt',
      desc: 'We use modern toolchains (Vite, React, Tailwind, Cloud Serverless) to deliver production-ready software in weeks, not quarters.',
      icon: Zap,
      tag: 'Velocity'
    },
    {
      title: 'Transparent Milestone Pricing',
      desc: 'Clear scope boundaries, defined milestone deliverables, and transparent pricing. No surprise invoices or scope creep traps.',
      icon: ShieldCheck,
      tag: 'Integrity'
    }
  ];

  return (
    <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#0D0D0D] border-y border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1A1A1A] text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.25em] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              Studio Standard
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-white tracking-tight">
              Our approach to building<span className="text-[#C5A059]">.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[#888888] text-xs sm:text-sm font-light max-w-md leading-relaxed">
            How we ensure every digital product we ship is fast, dependable, and strictly aligned with your commercial objectives.
          </p>
        </div>

        {/* 4 Core Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                id={`approach-card-${idx}`}
                className="p-6 rounded-sm bg-[#111111] border border-[#1A1A1A] flex flex-col justify-between text-left hover:border-[#C5A059]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-sm bg-[#161616] border border-[#222222] flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-[#C5A059]" />
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#888888] bg-[#161616] px-2 py-0.5 rounded-sm border border-[#222222]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-sm font-display font-medium text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#888888] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1A1A1A] flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#C5A059]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>GoVizen Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partnership Focus */}
        <div className="mt-12 p-8 rounded-sm bg-[#111111] border border-dashed border-[#262626] text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#161616] border border-[#262626] text-[10px] font-mono uppercase tracking-wider text-[#888888] mb-3">
            <span>🤝</span> Verified Client Partnership Focus
          </div>
          <h3 className="text-lg font-display font-medium text-white mb-2">
            Ready to build the next benchmark case study with us?
          </h3>
          <p className="text-xs text-[#888888] font-light max-w-xl mx-auto mb-5 leading-relaxed">
            We are actively partnering with ambitious founders, business owners, and growing organizations for our upcoming engineering sprints.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-[11px] uppercase tracking-widest font-bold text-black bg-white hover:bg-[#E0E0E0] transition-colors shadow-lg"
          >
            <span>Partner With GoVizen</span>
          </a>
        </div>

      </div>
    </section>
  );
};

