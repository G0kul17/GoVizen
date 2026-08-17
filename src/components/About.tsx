import React from 'react';
import { teamMembers, studioMindset } from '../data/team';
import { differentiators } from '../data/differentiators';
import { Users2, Target, Cpu, Rocket } from 'lucide-react';
import logoImg from '../assets/images/GoVizen-Logo.jpg';

export const About: React.FC = () => {
  const getDiffIcon = (name: string) => {
    switch (name) {
      case 'Users2':
        return <Users2 className="w-5 h-5 text-[#C5A059]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#E0E0E0]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#C5A059]" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-[#E0E0E0]" />;
      default:
        return <Users2 className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0D0D0D] border-y border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.25em] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            Studio Philosophy &amp; Founders
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-white tracking-tight mb-4">
            {studioMindset.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#CCCCCC] font-serif italic font-normal leading-relaxed border-l-2 border-[#C5A059] pl-5 py-2">
            &ldquo;{studioMindset.quote}&rdquo;
          </p>
        </div>

        {/* Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              id={`team-card-${member.name.toLowerCase()}`}
              className="rounded-md bg-[#111111] border border-[#1A1A1A] p-7 sm:p-8 flex flex-col justify-between hover:border-[#C5A059]/40 transition-all group shadow-xl"
            >
              <div>
                {/* Header with Monogram Avatar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-13 h-13 rounded-sm bg-[#161616] border border-[#222222] flex items-center justify-center text-lg font-display font-medium text-white group-hover:border-[#C5A059]/50 transition-colors">
                      {member.name.substring(0, 1)}
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-medium text-white flex items-center gap-2">
                        {member.name}
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/10 px-2 py-0.5 rounded-sm border border-[#C5A059]/30">
                          Founder
                        </span>
                      </h3>
                      <p className="text-xs text-[#888888] font-mono mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Focus / Specialization */}
                <div className="mb-4 p-3 rounded-sm bg-[#0A0A0A] border border-[#1A1A1A]">
                  <div className="text-[9px] font-mono uppercase tracking-widest text-[#555555] mb-0.5">
                    Core Focus
                  </div>
                  <div className="text-xs text-[#E0E0E0] font-normal">
                    {member.focus}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-[#888888] text-xs sm:text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Technical Strengths */}
                <div className="space-y-2 mb-6">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#555555]">
                    Technical Strengths
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono uppercase tracking-wider text-[#888888] bg-[#161616] px-2.5 py-1 rounded-sm border border-[#222222]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Touchpoint */}
              <div className="pt-4 border-t border-[#1A1A1A] flex items-center justify-between text-xs text-[#888888]">
                <span className="font-mono text-[11px]">Direct Builder Access</span>
                <span className="font-mono text-[11px] text-[#C5A059]">100% Code &amp; Design Ownership</span>
              </div>
            </div>
          ))}
        </div>

        {/* Official GoVizen Identity Seal */}
        <div className="mb-20 p-8 sm:p-10 rounded-lg bg-[#0F0F10] border border-[#222222] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="flex flex-col items-start text-left max-w-xl">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.25em] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              Official Studio Mark
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight mb-3">
              Built on Precision &amp; Growth<span className="text-[#C5A059]">.</span>
            </h3>
            <p className="text-sm text-[#888888] font-light leading-relaxed mb-6">
              Our mark represents the upward trajectory of our clients. The geometric 3D faceted structure embodies rigorous software craftsmanship, while the golden arrow signifies non-linear growth and momentum.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-[#AAAAAA]">
              <div className="flex items-center gap-2 bg-[#161616] px-3 py-1.5 rounded-sm border border-[#222222]">
                <span className="text-[#C5A059]">●</span> WE BUILD
              </div>
              <div className="flex items-center gap-2 bg-[#161616] px-3 py-1.5 rounded-sm border border-[#222222]">
                <span className="text-[#C5A059]">●</span> WE DESIGN
              </div>
              <div className="flex items-center gap-2 bg-[#161616] px-3 py-1.5 rounded-sm border border-[#222222]">
                <span className="text-[#C5A059]">●</span> WE GROW
              </div>
            </div>
          </div>

          <div className="shrink-0 p-3 sm:p-4 rounded-lg bg-white border border-neutral-300 shadow-2xl max-w-[240px] sm:max-w-[280px] flex items-center justify-center overflow-hidden">
            <img
              src={logoImg}
              alt="Official GoVizen Logo"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain rounded"
            />
          </div>
        </div>

        {/* Why GoVizen Section: Real Differentiators */}
        <div className="pt-12 border-t border-[#1A1A1A]">
          <div className="max-w-2xl mb-12 text-left">
            <div className="text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.25em] mb-2">
              Why Work With Us
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-light text-white tracking-tight">
              Real differentiators<span className="text-[#C5A059]">.</span> Zero agency fluff.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#888888] font-light leading-relaxed">
              We skip the bloated overhead and focus exclusively on high-impact engineering that moves the needle for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {differentiators.map((diff, idx) => (
              <div
                key={idx}
                id={`diff-card-${idx}`}
                className="p-6 rounded-sm bg-[#111111] border border-[#1A1A1A] hover:border-[#C5A059]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#161616] border border-[#222222] flex items-center justify-center mb-4">
                    {getDiffIcon(diff.iconName)}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] mb-1.5 font-medium">
                    {diff.highlight}
                  </div>
                  <h4 className="text-sm font-display font-medium text-white mb-2">
                    {diff.title}
                  </h4>
                  <p className="text-xs text-[#888888] leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#1A1A1A] text-[10px] font-mono text-[#444444]">
                  0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

