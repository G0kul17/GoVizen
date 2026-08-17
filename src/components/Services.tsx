import React, { useState } from 'react';
import { services } from '../data/services';
import { Globe, Sparkles, Zap, Layout, Code2, Check, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForEstimate?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForEstimate }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#C5A059]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#E0E0E0]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#C5A059]" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#E0E0E0]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0A0A0A]">
      {/* Subtle warm gold ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#C5A059]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1A1A1A]">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.25em] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-white tracking-tight">
              What we build<span className="text-[#C5A059]">.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[#888888] text-sm sm:text-base max-w-md font-light leading-relaxed">
            Engineered for high performance, reliability, and business impact. We build software that directly solves problems without unnecessary overhead.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="rounded-md p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group bg-[#0D0D0D] border border-[#1A1A1A] hover:border-[#C5A059]/40 shadow-xl"
              >
                {/* Accent top gold line on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-sm bg-[#141414] border border-[#222222] flex items-center justify-center group-hover:border-[#C5A059]/40 transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888] bg-[#141414] px-2.5 py-1 rounded-sm border border-[#1A1A1A]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-display font-medium text-white mb-1.5 group-hover:text-[#C5A059] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#C5A059] mb-4 tracking-wide">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[#888888] text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#1A1A1A]">
                    <div className="text-[10px] font-mono text-[#555555] uppercase tracking-widest">
                      Key Highlights
                    </div>
                    {service.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#CCCCCC]">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Action */}
                <div className="pt-4 border-t border-[#1A1A1A] flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-xs font-mono uppercase tracking-wider text-[#888888] group-hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>Discuss project</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] transition-transform group-hover:translate-x-1" />
                  </a>

                  <span className="text-[10px] font-mono text-[#444444]">
                    0{index + 1}
                  </span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Custom Solution & Studio Guarantee */}
          <div
            id="service-card-custom-solution"
            className="rounded-md p-7 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#111111] via-[#0D0D0D] to-[#0A0A0A] border border-[#C5A059]/40 shadow-2xl relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-sm bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#C5A059]" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-2.5 py-1 rounded-sm border border-[#C5A059]/30">
                  Custom Scope
                </span>
              </div>

              <h3 className="text-xl font-display font-medium text-white mb-2">
                Have a unique challenge?
              </h3>
              <p className="text-[#888888] text-xs sm:text-sm leading-relaxed mb-6">
                Not sure which category fits your product? Tell us your objective or problem statement. We will engineer a custom technical blueprint and delivery timeline.
              </p>

              <div className="p-4 rounded-sm bg-[#0A0A0A] border border-[#1A1A1A] text-xs font-mono text-[#AAAAAA] space-y-2 mb-6">
                <div className="text-[#C5A059] font-medium">✓ 1-on-1 Founder Consultation</div>
                <div>✓ Feasibility &amp; Architecture Audit</div>
                <div>✓ Clear fixed milestone pricing</div>
              </div>
            </div>

            <a
              href="#contact"
              className="w-full py-3.5 px-4 rounded-sm text-[11px] uppercase tracking-widest font-bold text-black bg-white hover:bg-[#E0E0E0] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-black/50"
            >
              <span>Request Custom Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

