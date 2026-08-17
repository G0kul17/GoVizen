import React, { useState } from 'react';
import { X, Check, Calculator, ArrowRight } from 'lucide-react';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyToContact: (scopeData: { projectType: string; budget: string; message: string }) => void;
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({ isOpen, onClose, onApplyToContact }) => {
  const [selectedType, setSelectedType] = useState('Web Application (MVP)');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Custom UI/UX Design System',
    'Responsive Frontend (React/TypeScript)',
    'API & Database Architecture'
  ]);
  const [timelineSpeed] = useState<'standard' | 'express'>('standard');

  if (!isOpen) return null;

  const projectTypes = [
    { id: 'web-app', label: 'Web Application (MVP)', baseWeeks: 3, baseBudget: '5,000 – 10,000' },
    { id: 'ai-system', label: 'AI Solution / LLM Engine', baseWeeks: 3, baseBudget: '10,000 – 15,000' },
    { id: 'automation', label: 'Automation & Data Pipeline', baseWeeks: 2, baseBudget: '5,000 – 10,000' },
    { id: 'custom-software', label: 'Custom Internal Platform', baseWeeks: 4, baseBudget: '15,000+' },
  ];

  const optionalAddons = [
    { id: 'ai-rag', label: 'AI Semantic Search / Vector RAG', weeks: 1 },
    { id: 'auth-rbac', label: 'Role-Based Access Control & Audit Log', weeks: 1 },
    { id: 'payments', label: 'Payment Gateway / Subscription Billing', weeks: 0.5 },
    { id: 'analytics-dash', label: 'Real-time Analytics Dashboard', weeks: 1 },
    { id: 'offline-sync', label: 'Offline-First Local Sync Architecture', weeks: 1.5 },
  ];

  const toggleAddon = (label: string) => {
    if (selectedFeatures.includes(label)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== label));
    } else {
      setSelectedFeatures([...selectedFeatures, label]);
    }
  };

  const currentTypeObj = projectTypes.find(t => t.label === selectedType) || projectTypes[0];
  const calculatedWeeks = currentTypeObj.baseWeeks + (selectedFeatures.length * 0.4);
  const finalWeeks = timelineSpeed === 'express' ? Math.max(2, Math.round(calculatedWeeks * 0.75)) : Math.round(calculatedWeeks);

  const handleApply = () => {
    onApplyToContact({
      projectType: selectedType,
      budget: currentTypeObj.baseBudget,
      message: `Estimated Scope: ${selectedType}\nSelected Capabilities: ${selectedFeatures.join(', ')}\nDesired Delivery: ${finalWeeks} Weeks (${timelineSpeed} track)`
    });
    onClose();
  };

  return (
    <div
      id="estimator-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="estimator-modal-container"
        className="relative w-full max-w-2xl bg-[#0D0D0D] border border-[#1A1A1A] rounded-md shadow-2xl overflow-hidden my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A] bg-[#0A0A0A]">
          <div className="flex items-center gap-2.5">
            <Calculator className="w-4 h-4 text-[#C5A059]" />
            <h3 className="text-sm font-display font-medium text-white">
              GoVizen Scope &amp; Timeline Estimator<span className="text-[#C5A059]">.</span>
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-sm bg-[#141414] hover:bg-[#1A1A1A] border border-[#222222] text-[#888888] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Step 1: Project Type */}
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#888888] mb-3">
              1. Select Target Product Archetype
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.label)}
                  className={`p-3.5 rounded-sm border text-left transition-all cursor-pointer ${
                    selectedType === type.label
                      ? 'bg-[#161616] border-[#C5A059] text-white shadow-md'
                      : 'bg-[#0A0A0A] border-[#1A1A1A] text-[#888888] hover:border-[#333333]'
                  }`}
                >
                  <div className="text-xs font-medium">{type.label}</div>
                  <div className="text-[10px] text-[#C5A059] font-mono mt-1">Est. {type.baseBudget}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Capabilities & Modules */}
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#888888] mb-3">
              2. Add Specialized Modules &amp; Integrations
            </label>
            <div className="space-y-2">
              {optionalAddons.map((addon) => {
                const isChecked = selectedFeatures.includes(addon.label);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.label)}
                    className={`flex items-center justify-between p-3 rounded-sm border cursor-pointer transition-colors ${
                      isChecked
                        ? 'bg-[#161616] border-[#C5A059]/40 text-white'
                        : 'bg-[#0A0A0A] border-[#1A1A1A] text-[#888888] hover:border-[#333333]'
                    }`}
                  >
                    <div className="flex items-center gap-3 text-xs">
                      <div className={`w-4 h-4 rounded-sm flex items-center justify-center border ${isChecked ? 'bg-[#C5A059] border-[#C5A059] text-black' : 'border-[#333333]'}`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span>{addon.label}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#555555]">+{addon.weeks}w</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Calculated Output Card */}
          <div className="p-4 rounded-sm bg-[#0A0A0A] border border-[#1A1A1A] flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono text-[#555555] uppercase tracking-wider">Estimated Delivery Window</div>
              <div className="text-lg font-display font-medium text-[#C5A059]">
                ~ {finalWeeks} Weeks
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-mono text-[#555555] uppercase tracking-wider">Estimated Budget Bracket</div>
              <div className="text-xs font-mono font-medium text-white">
                {currentTypeObj.baseBudget}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#1A1A1A] bg-[#0A0A0A] flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-wider text-[#888888] hover:text-white cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            className="px-5 py-2.5 rounded-sm text-[11px] uppercase tracking-widest font-bold text-black bg-white hover:bg-[#E0E0E0] transition-colors flex items-center gap-2 shadow-lg cursor-pointer"
          >
            <span>Apply Scope to Inquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

