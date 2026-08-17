import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, CheckCircle2, ArrowRight, Layers, Code2 } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectForInquiry?: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onSelectForInquiry }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        id="case-study-modal-container"
        className="relative w-full max-w-4xl bg-[#0D0D0D] border border-[#1A1A1A] rounded-md shadow-2xl overflow-hidden my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A] bg-[#0A0A0A]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
            <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.2em]">
              {project.category}
            </span>
          </div>
          <button
            id="btn-close-case-study"
            onClick={onClose}
            className="p-1.5 rounded-sm bg-[#141414] hover:bg-[#1A1A1A] border border-[#222222] text-[#888888] hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#C5A059] cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-7">
          
          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-light text-white mb-2 tracking-tight">
              {project.title}<span className="text-[#C5A059]">.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#AAAAAA] font-light leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-sm bg-[#0A0A0A] border border-[#1A1A1A]">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#555555] mb-1">{metric.label}</div>
                <div className="text-base sm:text-lg font-display font-medium text-[#C5A059]">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* The Challenge */}
            <div className="p-5 rounded-sm bg-[#111111] border border-[#1A1A1A]">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#E0E0E0] uppercase tracking-widest mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0E0E0]" />
                The Challenge / Problem
              </div>
              <p className="text-[#888888] text-xs leading-relaxed font-light">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-5 rounded-sm bg-[#111111] border border-[#1A1A1A]">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#C5A059] uppercase tracking-widest mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                The GoVizen Engineering Solution
              </div>
              <p className="text-[#CCCCCC] text-xs leading-relaxed font-light">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Architectural Highlights */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#888888] flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#C5A059]" /> Key Engineered Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-sm bg-[#0A0A0A] border border-[#1A1A1A] text-xs text-[#888888]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Tech Stack */}
          <div className="p-5 rounded-sm bg-[#0A0A0A] border border-[#1A1A1A] space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#888888] flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-[#C5A059]" /> Architecture Details &amp; Stack
              </h4>
              <span className="text-[10px] font-mono text-[#555555]">Timeline: {project.timeline}</span>
            </div>
            
            <p className="text-xs text-[#AAAAAA] leading-relaxed font-mono">
              {project.architectureDetails}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1A1A1A]">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-sm bg-[#141414] border border-[#222222] text-[10px] font-mono text-[#888888]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Call to Action */}
        <div className="px-6 py-4 border-t border-[#1A1A1A] bg-[#0A0A0A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#888888] text-center sm:text-left font-light">
            Interested in building a similar solution for your business?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 rounded-sm text-[11px] font-mono uppercase tracking-wider text-[#888888] hover:text-white bg-[#141414] hover:bg-[#1A1A1A] border border-[#222222] transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={() => {
                onClose();
                if (onSelectForInquiry) onSelectForInquiry(project.title);
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-sm text-[11px] uppercase tracking-widest font-bold text-black bg-white hover:bg-[#E0E0E0] transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

