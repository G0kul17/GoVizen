import React, { useState } from 'react';
import { processSteps } from '../data/process';
import { Check, ArrowRight, Compass, Layout, Code2, Rocket, Clock } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Compass className="w-5 h-5 text-[#C5A059]" />;
      case '02':
        return <Layout className="w-5 h-5 text-white" />;
      case '03':
        return <Code2 className="w-5 h-5 text-[#C5A059]" />;
      case '04':
        return <Rocket className="w-5 h-5 text-white" />;
      default:
        return <Compass className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1A1A1A] text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.25em] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-white tracking-tight">
              From idea to launch<span className="text-[#C5A059]">.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[#888888] text-xs sm:text-sm font-light max-w-md leading-relaxed">
            A transparent 4-stage engineering lifecycle designed for fast velocity, zero ambiguity, and dependable delivery timelines.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <div
                key={step.number}
                id={`process-step-${step.number}`}
                onClick={() => setActiveStep(index)}
                className={`rounded-sm p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 relative text-left ${
                  isSelected
                    ? 'bg-[#111111] border border-[#C5A059]/70 shadow-2xl shadow-[#C5A059]/5'
                    : 'bg-[#0D0D0D] border border-[#1A1A1A] hover:border-[#C5A059]/40 hover:bg-[#111111]'
                }`}
              >
                {/* Step indicator strip */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-medium text-[#444444]">
                    {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-sm bg-[#161616] border border-[#222222] flex items-center justify-center">
                    {getStepIcon(step.number)}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] flex items-center gap-1.5">
                      <Clock className="w-3 h-3" /> {step.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-medium text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#888888] mb-4">
                    {step.subtitle}
                  </p>

                  <p className="text-[#888888] text-xs leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-[#1A1A1A] space-y-2">
                  <div className="text-[9px] font-mono text-[#555555] uppercase tracking-widest">
                    Stage Deliverables
                  </div>
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-[#CCCCCC]">
                      <Check className="w-3 h-3 text-[#C5A059] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Process Commitment */}
        <div className="mt-10 p-6 rounded-sm bg-[#0D0D0D] border border-[#1A1A1A] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-sm bg-[#161616] border border-[#222222] flex items-center justify-center shrink-0">
              <span className="text-[#C5A059] font-mono text-sm font-bold">⚡</span>
            </div>
            <div>
              <div className="text-sm font-display font-medium text-white">Continuous Staging Previews</div>
              <div className="text-xs text-[#888888] font-light">You test working software every single week during the build phase — no waiting for big-bang handovers.</div>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-sm text-[11px] uppercase tracking-widest font-bold text-black bg-white hover:bg-[#E0E0E0] transition-colors flex items-center gap-2 shadow-lg"
          >
            <span>Start Step 01</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

