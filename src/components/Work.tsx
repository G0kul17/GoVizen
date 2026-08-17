import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Project } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowUpRight, Check, Play, Search, Shield, Sparkles, Terminal, Activity, FileText, CheckCircle2, RefreshCw } from 'lucide-react';

interface WorkProps {
  onSelectProjectForContact?: (projectTitle: string) => void;
}

export const Work: React.FC<WorkProps> = ({ onSelectProjectForContact }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Interactive state for NCO Code Preview
  const [ncoQuery, setNcoQuery] = useState('Senior Cloud AI Architect');
  const [ncoResult, setNcoResult] = useState({ code: '2512.01', title: 'Software & Cloud Architects', confidence: '98.6%' });

  // Interactive state for Code Runner Preview
  const [sandboxOutput, setSandboxOutput] = useState<{ running: boolean; passed: boolean }>({ running: false, passed: true });

  const handleRunNcoTest = (sample: string, code: string, title: string, conf: string) => {
    setNcoQuery(sample);
    setNcoResult({ code, title, confidence: conf });
  };

  const handleTriggerSandbox = () => {
    setSandboxOutput({ running: true, passed: false });
    setTimeout(() => {
      setSandboxOutput({ running: false, passed: true });
    }, 600);
  };

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0A0A0A]">
      {/* Background warm gold spotlight */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#C5A059]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1A1A1A]">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.25em] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              Selected Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-white tracking-tight">
              Built with purpose<span className="text-[#C5A059]">.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[#888888] text-sm sm:text-base max-w-md font-light leading-relaxed">
            Production case studies designed for real business environments. Clean architecture, robust performance, and measurable operational outcomes.
          </p>
        </div>

        {/* Large Case Study Cards Stack */}
        <div className="space-y-10">
          {projects.map((project, index) => {
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="rounded-md bg-[#0D0D0D] border border-[#1A1A1A] hover:border-[#C5A059]/40 transition-all duration-300 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Case Narrative */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full text-left">
                    <div>
                      {/* Category & Index */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C5A059]">
                          {project.category}
                        </span>
                        <span className="text-[10px] font-mono text-[#555555]">
                          0{index + 1} / 0{projects.length}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl font-display font-medium text-white mb-3 group-hover:text-[#C5A059] transition-colors">
                        {project.title}
                      </h3>

                      {/* Tagline */}
                      <p className="text-sm font-normal text-[#AAAAAA] mb-6 leading-relaxed">
                        {project.tagline}
                      </p>

                      {/* Problem & Solution Compact Grid */}
                      <div className="space-y-3 mb-6">
                        <div className="p-4 rounded-sm bg-[#111111] border border-[#1A1A1A]">
                          <div className="text-[10px] font-mono text-[#E0E0E0] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#E0E0E0]" />
                            The Challenge
                          </div>
                          <p className="text-xs text-[#888888] leading-relaxed">
                            {project.problem}
                          </p>
                        </div>

                        <div className="p-4 rounded-sm bg-[#111111] border border-[#1A1A1A]">
                          <div className="text-[10px] font-mono text-[#C5A059] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                            The Solution
                          </div>
                          <p className="text-xs text-[#CCCCCC] leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono uppercase tracking-wider text-[#888888] bg-[#141414] px-2.5 py-1 rounded-sm border border-[#1A1A1A]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-6 border-t border-[#1A1A1A] flex flex-wrap items-center gap-4">
                      <button
                        id={`btn-view-casestudy-${project.id}`}
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-[11px] uppercase tracking-widest font-bold text-black bg-white hover:bg-[#E0E0E0] transition-colors shadow-lg shadow-black/50 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                      >
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <span className="text-xs text-[#888888] font-mono">
                        Impact: <span className="text-white font-medium">{project.metrics[0].label} ({project.metrics[0].value})</span>
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Custom High-Fidelity Visual Preview Simulation */}
                  <div className="lg:col-span-6 w-full">
                    <div className="rounded-sm bg-[#0A0A0A] border border-[#1A1A1A] p-5 shadow-2xl relative overflow-hidden font-sans">
                      
                      {/* Window Controls */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#1A1A1A] mb-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#555555]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#888888] ml-2">
                            govizen.app // {project.id}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-2.5 py-0.5 rounded-sm border border-[#C5A059]/30">
                          {project.metrics[0].label}: {project.metrics[0].value}
                        </span>
                      </div>

                      {/* 1. Records Management Visual Simulation */}
                      {project.visualType === 'records' && (
                        <div className="space-y-3">
                          {/* Search bar simulation */}
                          <div className="flex items-center justify-between gap-2 p-2.5 rounded-sm bg-[#111111] border border-[#1A1A1A]">
                            <div className="flex items-center gap-2 text-xs text-[#888888] font-mono">
                              <Search className="w-3.5 h-3.5 text-[#C5A059]" />
                              <span>query: &quot;Q4 Compliance_Audit_2025&quot;</span>
                            </div>
                            <span className="text-[10px] font-mono text-[#C5A059] bg-[#C5A059]/15 px-2 py-0.5 rounded-sm">
                              Found 14 records in 18ms
                            </span>
                          </div>

                          {/* Record item rows */}
                          <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between p-2.5 rounded-sm bg-[#0D0D0D] border border-[#1A1A1A] hover:border-[#C5A059]/30 transition-colors">
                              <div className="flex items-center gap-2.5">
                                <FileText className="w-4 h-4 text-[#E0E0E0] shrink-0" />
                                <div>
                                  <div className="font-mono text-white text-[11px]">DOC_8842_FINANCIAL_AUDIT.enc</div>
                                  <div className="text-[10px] text-[#555555] font-mono">Role: Compliance Officer • SHA-256 Verified</div>
                                </div>
                              </div>
                              <span className="text-[10px] font-mono text-[#4ADE80] bg-[#0F1A0F] px-2 py-0.5 rounded-sm border border-[#1A331A]">
                                Approved
                              </span>
                            </div>

                            <div className="flex items-center justify-between p-2.5 rounded-sm bg-[#0D0D0D] border border-[#1A1A1A]">
                              <div className="flex items-center gap-2.5">
                                <FileText className="w-4 h-4 text-[#C5A059] shrink-0" />
                                <div>
                                  <div className="font-mono text-white text-[11px]">DEPT_HR_FACULTY_INDEX_V2.enc</div>
                                  <div className="text-[10px] text-[#555555] font-mono">Role: Department Head • Auto-Archived</div>
                                </div>
                              </div>
                              <span className="text-[10px] font-mono text-[#C5A059] bg-[#C5A059]/10 px-2 py-0.5 rounded-sm border border-[#C5A059]/20">
                                Indexed
                              </span>
                            </div>

                            <div className="flex items-center justify-between p-2.5 rounded-sm bg-[#0D0D0D] border border-[#1A1A1A]">
                              <div className="flex items-center gap-2.5">
                                <Shield className="w-4 h-4 text-[#E0E0E0] shrink-0" />
                                <div>
                                  <div className="font-mono text-white text-[11px]">GOV_POLICY_DISASTER_RECOVERY.pdf</div>
                                  <div className="text-[10px] text-[#555555] font-mono">Immutable Audit Log #99401</div>
                                </div>
                              </div>
                              <span className="text-[10px] font-mono text-[#E0E0E0] bg-white/10 px-2 py-0.5 rounded-sm border border-[#333333]">
                                Protected
                              </span>
                            </div>
                          </div>

                          {/* Telemetry strip */}
                          <div className="flex items-center justify-between pt-2 text-[10px] font-mono text-[#888888] border-t border-[#1A1A1A]">
                            <span className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" /> RBAC Strict Isolation Active
                            </span>
                            <span>Latency: 14ms</span>
                          </div>
                        </div>
                      )}

                      {/* 2. NCO Code Identifier Visual Simulation */}
                      {project.visualType === 'classifier' && (
                        <div className="space-y-3">
                          <div className="text-xs font-mono text-[#888888]">Interactive NLP Classification Engine:</div>
                          
                          {/* Live Input Field Simulation */}
                          <div className="p-3 rounded-sm bg-[#111111] border border-[#1A1A1A] space-y-2">
                            <div className="text-[10px] font-mono uppercase tracking-wider text-[#555555]">Natural Language Input:</div>
                            <div className="font-mono text-xs text-white font-medium bg-[#0A0A0A] p-2 rounded-sm border border-[#1A1A1A]">
                              {ncoQuery}
                            </div>
                            
                            {/* Sample Clickable Prompts */}
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              <button
                                onClick={() => handleRunNcoTest('Senior Cloud AI Architect', '2512.01', 'Software & Cloud Architects', '98.6%')}
                                className="text-[10px] font-mono px-2 py-1 rounded-sm bg-[#141414] hover:bg-[#1C1C1C] text-[#888888] hover:text-white border border-[#222222] transition-colors"
                              >
                                Try: Cloud Architect
                              </button>
                              <button
                                onClick={() => handleRunNcoTest('Automated Process Robotics Specialist', '2523.04', 'Industrial Robotics & Automation Eng', '96.2%')}
                                className="text-[10px] font-mono px-2 py-1 rounded-sm bg-[#141414] hover:bg-[#1C1C1C] text-[#888888] hover:text-white border border-[#222222] transition-colors"
                              >
                                Try: Robotics Eng
                              </button>
                              <button
                                onClick={() => handleRunNcoTest('Healthcare Data Systems Manager', '1342.02', 'Health Services & Informatics Dir', '95.4%')}
                                className="text-[10px] font-mono px-2 py-1 rounded-sm bg-[#141414] hover:bg-[#1C1C1C] text-[#888888] hover:text-white border border-[#222222] transition-colors"
                              >
                                Try: Health Informatics
                              </button>
                            </div>
                          </div>

                          {/* Classification Output Box */}
                          <div className="p-3 rounded-sm bg-[#111111] border border-[#C5A059]/40 space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-mono text-[#C5A059] font-medium">
                                Matched NCO Code: {ncoResult.code}
                              </span>
                              <span className="text-[10px] font-mono text-[#4ADE80] bg-[#0F1A0F] px-2 py-0.5 rounded-sm border border-[#1A331A]">
                                Confidence: {ncoResult.confidence}
                              </span>
                            </div>
                            <div className="text-xs text-white font-medium">{ncoResult.title}</div>
                            <div className="w-full bg-[#0A0A0A] h-1.5 rounded-full overflow-hidden mt-1">
                              <div className="bg-gradient-to-r from-[#C5A059] to-white h-full rounded-full w-[96%]" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 3. Smart Placement Analytics Visual Simulation */}
                      {project.visualType === 'analytics' && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-mono text-[#888888]">Cohort Skill Readiness Index</span>
                            <span className="font-mono text-[#C5A059] font-medium">94.2% Ready</span>
                          </div>

                          {/* Mock Chart & Bell Curve representation */}
                          <div className="p-3 rounded-sm bg-[#111111] border border-[#1A1A1A] space-y-2.5">
                            <div className="space-y-2 text-xs">
                              <div>
                                <div className="flex justify-between text-[10px] font-mono text-[#888888] mb-1">
                                  <span>Full-Stack &amp; Systems Engineering</span>
                                  <span className="text-white font-medium">88%</span>
                                </div>
                                <div className="w-full bg-[#0A0A0A] h-1.5 rounded-full overflow-hidden">
                                  <div className="bg-[#C5A059] h-full rounded-full w-[88%]" />
                                </div>
                              </div>

                              <div>
                                <div className="flex justify-between text-[10px] font-mono text-[#888888] mb-1">
                                  <span>AI Engineering &amp; Data Pipelines</span>
                                  <span className="text-white font-medium">92%</span>
                                </div>
                                <div className="w-full bg-[#0A0A0A] h-1.5 rounded-full overflow-hidden">
                                  <div className="bg-white h-full rounded-full w-[92%]" />
                                </div>
                              </div>

                              <div>
                                <div className="flex justify-between text-[10px] font-mono text-[#888888] mb-1">
                                  <span>Algorithmic Problem Solving</span>
                                  <span className="text-white font-medium">96%</span>
                                </div>
                                <div className="w-full bg-[#0A0A0A] h-1.5 rounded-full overflow-hidden">
                                  <div className="bg-[#C5A059] h-full rounded-full w-[96%]" />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-center text-xs">
                            <div className="p-2.5 rounded-sm bg-[#0D0D0D] border border-[#1A1A1A]">
                              <div className="text-[10px] font-mono uppercase tracking-wider text-[#555555]">Total Shortlisted</div>
                              <div className="font-mono text-white font-medium text-sm">480 Candidates</div>
                            </div>
                            <div className="p-2.5 rounded-sm bg-[#0D0D0D] border border-[#1A1A1A]">
                              <div className="text-[10px] font-mono uppercase tracking-wider text-[#555555]">Recruiter Match Time</div>
                              <div className="font-mono text-[#C5A059] font-medium text-sm">Instant (0s)</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 4. Offline Coding Platform Simulation */}
                      {project.visualType === 'code-sandbox' && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-[#C5A059] flex items-center gap-1.5">
                              <Terminal className="w-3.5 h-3.5" /> local_sandbox_runner.wasm
                            </span>
                            <span className="text-[#555555]">Air-Gapped Node</span>
                          </div>

                          {/* Code Editor Mini View */}
                          <div className="p-3 rounded-sm bg-[#111111] border border-[#1A1A1A] font-mono text-[11px] text-[#CCCCCC] space-y-1">
                            <div className="text-[#555555]">// Zero-cloud local test harness</div>
                            <div><span className="text-[#C5A059]">fn</span> <span className="text-white">evaluate_submission</span>(code: &amp;str) -&gt; Result&lt;Pass&gt; &#123;</div>
                            <div className="pl-4 text-[#888888]">verify_memory_quota(128_MB)?;</div>
                            <div className="pl-4 text-[#888888]">execute_isolated_tests()?;</div>
                            <div>&#125;</div>
                          </div>

                          {/* Test Output Runner */}
                          <div className="p-2.5 rounded-sm bg-[#0D0D0D] border border-[#1A1A1A] flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              {sandboxOutput.running ? (
                                <RefreshCw className="w-4 h-4 text-[#C5A059] animate-spin" />
                              ) : (
                                <CheckCircle2 className="w-4 h-4 text-[#4ADE80]" />
                              )}
                              <span className="text-[11px] font-mono text-[#E0E0E0]">
                                {sandboxOutput.running ? 'Compiling offline...' : 'Tests: 12/12 Passed • Memory: 18MB'}
                              </span>
                            </div>

                            <button
                              onClick={handleTriggerSandbox}
                              disabled={sandboxOutput.running}
                              className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-sm bg-[#141414] text-[#C5A059] hover:bg-[#1F1F1F] border border-[#2A2A2A] transition-colors flex items-center gap-1"
                            >
                              <Play className="w-3 h-3" /> Re-run
                            </button>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectForInquiry={onSelectProjectForContact}
        />
      )}
    </section>
  );
};
