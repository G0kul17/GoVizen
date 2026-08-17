import React from 'react';
import { Sparkles, Globe, Cpu, Layout, Code2 } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const capabilities = [
    { title: 'AI Solutions', desc: 'LLMs, Vector Search & Classification', icon: Sparkles, color: 'text-[#C5A059]' },
    { title: 'Web Applications', desc: 'Modern React, Next.js & TypeScript', icon: Globe, color: 'text-[#E0E0E0]' },
    { title: 'Automation', desc: 'Pipelines, Webhooks & Integrations', icon: Cpu, color: 'text-[#C5A059]' },
    { title: 'UI/UX Design', desc: 'High-Conversion Product Design', icon: Layout, color: 'text-[#E0E0E0]' },
    { title: 'Custom Software', desc: 'Bespoke Portals & Workbenches', icon: Code2, color: 'text-[#C5A059]' },
  ];

  return (
    <section id="trust-strip" className="border-y border-[#1A1A1A] bg-[#0D0D0D] py-5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop / Tablet Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
          {capabilities.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-sm bg-[#111111] border border-[#1A1A1A] hover:border-[#C5A059]/40 transition-all group"
              >
                <div className="w-8 h-8 rounded-sm bg-[#161616] flex items-center justify-center shrink-0 border border-[#222222] group-hover:border-[#C5A059]/50 transition-colors">
                  <IconComponent className={`w-3.5 h-3.5 ${item.color}`} />
                </div>
                <div className="min-w-0">
                  <div className="text-[12px] font-medium text-white tracking-wide truncate group-hover:text-[#C5A059] transition-colors">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-[#888888] font-mono truncate">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

