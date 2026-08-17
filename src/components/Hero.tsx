import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2, Sparkles, Terminal, Code, Cpu, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'architecture' | 'delivery' | 'stack'>('architecture');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 20,
        y: (e.clientY / innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const keywords = [
    { label: 'AI Solutions', icon: Sparkles },
    { label: 'Custom Software', icon: Code },
    { label: 'Automation', icon: Cpu },
    { label: 'UI/UX Design', icon: Layers },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient lighting accents in warm metallic gold */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C5A059]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/[0.02] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Core Positioning & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Badge */}
          <div
            id="hero-status-badge"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0D0D0D] border border-[#1A1A1A] text-[10px] font-mono uppercase tracking-widest text-[#888888] mb-6 shadow-sm hover:border-[#C5A059]/40 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]" />
            </span>
            <span className="text-white font-medium">GoVizen Studio</span>
            <span className="text-[#444444]">•</span>
            <span className="text-[#888888]">Available for bespoke sprints Q1/Q2 2026</span>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-headline"
            className="text-4xl sm:text-6xl xl:text-7xl font-display font-light tracking-tight text-white leading-[1.08] mb-6"
          >
            We turn ideas into{' '}
            <span className="relative inline-block font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0E0E0] to-[#C5A059]">
              digital products<span className="text-[#C5A059]">.</span>
            </span>
          </h1>

          {/* Subtext */}
          <p
            id="hero-subtext"
            className="text-base sm:text-lg text-[#888888] font-normal leading-relaxed max-w-2xl mb-8"
          >
            GoVizen is an elite technology studio building modern web systems, bespoke AI solutions, automation engines, and custom software for high-growth businesses and founders.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
            <a
              id="hero-primary-cta"
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm text-[11px] uppercase tracking-widest font-bold text-black bg-white hover:bg-[#E0E0E0] transition-all duration-200 shadow-xl shadow-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] active:scale-[0.99]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              id="hero-secondary-cta"
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm text-[11px] uppercase tracking-widest font-semibold text-[#E0E0E0] bg-[#0D0D0D] hover:bg-[#141414] border border-[#1A1A1A] hover:border-[#C5A059]/60 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
            >
              <span>Explore Services</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#C5A059]" />
            </a>
          </div>

          {/* Keywords / Capabilities bar */}
          <div className="pt-6 border-t border-[#1A1A1A] w-full">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#555555] mb-3">
              Studio Capabilities
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              {keywords.map((kw, idx) => {
                const IconComponent = kw.icon;
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#0D0D0D] border border-[#1A1A1A] text-[11px] text-[#888888] hover:text-white hover:border-[#C5A059]/40 transition-colors"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span className="tracking-wide">{kw.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column: Custom Abstract GV Geometric Visual in Sophisticated Dark */}
        <div className="lg:col-span-5 flex justify-center items-center w-full">
          <div
            id="hero-geometric-visual"
            className="relative w-full max-w-[460px] aspect-square rounded-xl bg-[#0D0D0D] border border-[#1A1A1A] p-6 shadow-2xl overflow-hidden backdrop-blur-sm group"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg)`,
              transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Top terminal-style bar */}
            <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A] mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#555555]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#888888] ml-2">govizen.engine // live</span>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-[#4ADE80] bg-[#0F1A0F] px-2.5 py-0.5 rounded-full border border-[#1A331A]">
                ACTIVE
              </span>
            </div>

            {/* Central Geometric GV Blueprint Visual */}
            <div className="relative h-[220px] flex items-center justify-center my-2">
              
              {/* Dynamic SVG Blueprint Mesh */}
              <svg className="w-full h-full" viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background grid lines */}
                <defs>
                  <pattern id="gv-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                  </pattern>
                  <linearGradient id="goldGvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C5A059" />
                    <stop offset="100%" stopColor="#E0E0E0" />
                  </linearGradient>
                </defs>

                <rect width="300" height="220" fill="url(#gv-grid)" />

                {/* Isometric Grid Wireframe Planes */}
                <path d="M50 110 L150 50 L250 110 L150 170 Z" stroke="rgba(197, 160, 89, 0.15)" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M150 50 L150 170" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <path d="M50 110 L250 110" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

                {/* Outer Isometric Facets */}
                <path d="M150 30 L260 90 L260 150 L150 210 L40 150 L40 90 Z" stroke="rgba(197, 160, 89, 0.25)" strokeWidth="1.5" />

                {/* Geometric G Shape in Isometric Space */}
                <path
                  d="M100 80 L150 50 L200 80 L200 110 L150 140 L120 120 L150 100 L170 112"
                  stroke="url(#goldGvGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-pulse"
                />

                {/* Geometric V Slash Overlay */}
                <path
                  d="M130 160 L180 80"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Active Interactive Nodes */}
                <circle cx="150" cy="50" r="4" fill="#C5A059" />
                <circle cx="200" cy="80" r="4" fill="#FFFFFF" />
                <circle cx="150" cy="140" r="4" fill="#C5A059" />
                <circle cx="120" cy="120" r="3" fill="#E0E0E0" />
                <circle cx="150" cy="210" r="3" fill="rgba(255,255,255,0.4)" />
                <circle cx="40" cy="90" r="3" fill="rgba(255,255,255,0.4)" />
                <circle cx="260" cy="90" r="3" fill="rgba(255,255,255,0.4)" />

                {/* Floating Metric Callouts */}
                <g transform="translate(190, 35)">
                  <rect width="90" height="24" rx="2" fill="#0A0A0A" stroke="#C5A059" strokeWidth="1" />
                  <text x="8" y="16" fill="#C5A059" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">99.9% UPTIME</text>
                </g>

                <g transform="translate(20, 160)">
                  <rect width="95" height="24" rx="2" fill="#0A0A0A" stroke="#2A2A2A" strokeWidth="1" />
                  <text x="8" y="16" fill="#888888" fontSize="10" fontFamily="JetBrains Mono">ZERO BLOAT</text>
                </g>
              </svg>
            </div>

            {/* Bottom Real-time Telemetry Metrics in Sophisticated Dark Style */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#1A1A1A] text-left">
              <div className="border-l border-[#C5A059] pl-3 py-1">
                <span className="block text-[9px] font-mono text-[#555555] uppercase tracking-widest">Architecture</span>
                <span className="font-sans text-xs text-white font-medium">Modular</span>
              </div>
              <div className="border-l border-[#333333] pl-3 py-1">
                <span className="block text-[9px] font-mono text-[#555555] uppercase tracking-widest">Velocity</span>
                <span className="font-sans text-xs text-[#C5A059] font-medium">&lt; 3 Weeks</span>
              </div>
              <div className="border-l border-[#333333] pl-3 py-1">
                <span className="block text-[9px] font-mono text-[#555555] uppercase tracking-widest">Lead Pair</span>
                <span className="font-sans text-xs text-white font-medium">Vicky &amp; Gokul</span>
              </div>
            </div>

            {/* Interactive Corner Badge */}
            <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
              <div className="absolute top-2 right-[-24px] bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] font-mono text-[8px] py-0.5 px-6 rotate-45 tracking-widest">
                GV-2026
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
