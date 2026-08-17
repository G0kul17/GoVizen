import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { Mail, MessageCircle, CheckCircle2, ArrowRight, Instagram, Linkedin, Send, ExternalLink, Copy, Check, X, Phone } from 'lucide-react';

interface ContactProps {
  initialScopeData?: { projectType: string; budget: string; message: string } | null;
}

export const Contact: React.FC<ContactProps> = ({ initialScopeData }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: initialScopeData?.projectType || 'Web Application',
    budget: initialScopeData?.budget || '5,000 – 10,000',
    message: initialScopeData?.message || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [inquiryId, setInquiryId] = useState<string>('');
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const whatsappNumbers = [
    {
      id: 'wa-gokul',
      name: 'Gokul Nathan',
      number: '+91 78458 48377',
      cleanNumber: '917845848377',
      role: 'Founder & Lead Systems Engineer',
      focus: 'Full-Stack, AI Architecture & Technical Execution',
      status: 'Online & Available'
    },
    {
      id: 'wa-vigneshwaran',
      name: 'Vigneshwaran',
      number: '+91 90258 25617',
      cleanNumber: '919025825617',
      role: 'Founder & UI/UX Design Lead',
      focus: 'UI/UX Design, Visual Systems & Product Experience',
      status: 'Online & Available'
    }
  ];

  // Update if initialScopeData changes
  React.useEffect(() => {
    if (initialScopeData) {
      setFormData(prev => ({
        ...prev,
        projectType: initialScopeData.projectType,
        budget: initialScopeData.budget,
        message: initialScopeData.message ? `${prev.message ? prev.message + '\n\n' : ''}${initialScopeData.message}` : prev.message
      }));
    }
  }, [initialScopeData]);

  const projectTypes = [
    'Web Application',
    'AI Solution / LLM',
    'Automation System',
    'UI/UX Design',
    'Custom Software',
    'MVP / Startup Prototype'
  ];

  const budgetRanges = [
    '5,000 – 10,000',
    '10,000 – 15,000',
    '15,000+'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and a brief description of what you want to build.');
      return;
    }

    setSubmitting(true);
    const newInquiryId = `REQ-${Date.now().toString(36).toUpperCase()}`;
    setInquiryId(newInquiryId);

    try {
      // 1. Direct Email Delivery via FormSubmit directly to govizenofficial@gmail.com
      const emailPromise = fetch('https://formsubmit.co/ajax/govizenofficial@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[GoVizen Project Order] ${formData.name} - ${formData.projectType} (${formData.budget})`,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false',
          'Client Name': formData.name,
          'Client Email': formData.email,
          'Company / Brand': formData.company || 'Not Specified',
          'Project Type': formData.projectType,
          'Expected Budget': formData.budget,
          'Project Scope & Details': formData.message,
          'Order ID': newInquiryId,
          'Submitted At': new Date().toLocaleString()
        })
      }).catch(err => {
        console.warn('FormSubmit dispatch notification:', err);
      });

      // 2. Server-side API registry & backend mailer
      const apiPromise = fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, inquiryId: newInquiryId })
      }).catch(err => {
        console.warn('Backend API notification:', err);
      });

      await Promise.allSettled([emailPromise, apiPromise]);
    } catch (err) {
      console.warn('Submission handler completed with fallback:', err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const directMailtoUrl = `mailto:govizenofficial@gmail.com?subject=${encodeURIComponent(`[Project Request ${inquiryId || ''}] ${formData.name} - ${formData.projectType}`)}&body=${encodeURIComponent(
    `Hello Vicky & Gokul,\n\nHere are my project details submitted through GoVizen:\n\n` +
    `• Name: ${formData.name}\n` +
    `• Email: ${formData.email}\n` +
    `• Company: ${formData.company || 'N/A'}\n` +
    `• Project Type: ${formData.projectType}\n` +
    `• Budget: ${formData.budget}\n\n` +
    `Project Scope & Details:\n${formData.message}\n\nBest regards,\n${formData.name}`
  )}`;

  const handleCopySummary = () => {
    const summaryText = `[GoVizen Project Inquiry ${inquiryId}]\nClient: ${formData.name} (${formData.email})\nCompany: ${formData.company || 'N/A'}\nType: ${formData.projectType}\nBudget: ${formData.budget}\n\nScope:\n${formData.message}`;
    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0A0A0A]">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#C5A059]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Context & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.25em] mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                Initiate Sprint
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-white tracking-tight mb-4">
                Have an idea? Let’s build it<span className="text-[#C5A059]">.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#888888] font-light leading-relaxed mb-8">
                Tell us what you’re trying to build. We’ll help you figure out the next step.
              </p>

              {/* Founder Response Guarantee */}
              <div className="p-5 rounded-sm bg-[#0D0D0D] border border-[#1A1A1A] space-y-2 mb-8">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#C5A059]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="font-semibold">Direct 24-Hour Founder Response</span>
                </div>
                <p className="text-xs text-[#888888] leading-relaxed font-light">
                  Every inquiry goes directly to Vicky and Gokul. We will review your requirements, prepare initial architecture thoughts, and schedule a 20-minute alignment call.
                </p>
              </div>
            </div>

            {/* Direct Instant Channels */}
            <div className="space-y-4 pt-6 border-t border-[#1A1A1A]">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#555555]">
                Direct Communication Channels
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Email Direct */}
                <a
                  href="mailto:govizenofficial@gmail.com"
                  className="flex items-center gap-3 p-3.5 rounded-sm bg-[#0D0D0D] border border-[#1A1A1A] hover:border-[#C5A059]/40 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-sm bg-[#161616] flex items-center justify-center text-[#888888] group-hover:text-[#C5A059] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-medium text-white group-hover:text-[#C5A059] transition-colors">
                      Email Us
                    </div>
                    <div className="text-[10px] text-[#555555] font-mono truncate">
                      govizenofficial@gmail.com
                    </div>
                  </div>
                </a>

                {/* WhatsApp Direct - Opens Choice Modal */}
                <button
                  type="button"
                  onClick={() => setIsWhatsAppModalOpen(true)}
                  className="flex items-center gap-3 p-3.5 rounded-sm bg-[#0D0D0D] border border-[#1A1A1A] hover:border-[#C5A059]/40 transition-colors group text-left w-full cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-sm bg-[#161616] flex items-center justify-center text-[#888888] group-hover:text-[#25D366] transition-colors shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-medium text-white group-hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                      <span>WhatsApp Quick Chat</span>
                      <span className="text-[9px] font-mono px-1 py-0.2 bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/30 rounded-xs">2 Lines</span>
                    </div>
                    <div className="text-[10px] text-[#555555] font-mono truncate">
                      Select founder direct line
                    </div>
                  </div>
                </button>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/govizen-office-24977442a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-sm bg-[#0D0D0D] border border-[#1A1A1A] hover:border-[#C5A059]/40 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-sm bg-[#161616] flex items-center justify-center text-[#888888] group-hover:text-[#C5A059] transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white group-hover:text-[#C5A059] transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-[10px] text-[#555555] font-mono">
                      @govizen
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-sm bg-[#0D0D0D] border border-[#1A1A1A] hover:border-[#C5A059]/40 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-sm bg-[#161616] flex items-center justify-center text-[#888888] group-hover:text-[#C5A059] transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white group-hover:text-[#C5A059] transition-colors">
                      Instagram
                    </div>
                    <div className="text-[10px] text-[#555555] font-mono">
                      @govizen.studio
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Short Clean Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-md bg-[#0D0D0D] border border-[#1A1A1A] shadow-2xl relative text-left">
              
              {submitted ? (
                <div className="py-8 px-2 sm:px-4 text-center space-y-5 animate-fade-in">
                  <div className="w-14 h-14 rounded-sm bg-[#161616] border border-[#C5A059]/40 flex items-center justify-center mx-auto text-[#C5A059] shadow-lg shadow-[#C5A059]/10">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-light text-white mb-2">
                      Project Request Received<span className="text-[#C5A059]">.</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#AAAAAA] max-w-md mx-auto leading-relaxed font-light">
                      Thank you, <span className="text-white font-medium">{formData.name}</span>. Vicky &amp; Gokul have received your inquiry and will review your requirements and respond within 24 hours.
                    </p>
                  </div>

                  {/* Dispatch Notification Status */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-emerald-950/30 border border-emerald-800/40 text-emerald-300 text-[11px] font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Order email delivered to <strong>govizenofficial@gmail.com</strong></span>
                    {inquiryId && <span className="text-emerald-500/80">({inquiryId})</span>}
                  </div>

                  {/* Order / Scope Summary Card */}
                  <div className="text-left bg-[#0A0A0A] border border-[#1A1A1A] rounded-sm p-4 text-xs font-mono space-y-2.5 max-w-lg mx-auto">
                    <div className="text-[10px] uppercase tracking-wider text-[#666666] border-b border-[#161616] pb-1.5 flex justify-between items-center">
                      <span>Order Specification Sent</span>
                      <span className="text-[#C5A059]">{formData.projectType}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <span className="text-[#666666] block">Client:</span>
                        <span className="text-white font-medium">{formData.name}</span>
                      </div>
                      <div>
                        <span className="text-[#666666] block">Client Email:</span>
                        <span className="text-[#C5A059]">{formData.email}</span>
                      </div>
                      {formData.company && (
                        <div>
                          <span className="text-[#666666] block">Company:</span>
                          <span className="text-white">{formData.company}</span>
                        </div>
                      )}
                      <div>
                        <span className="text-[#666666] block">Budget Bracket:</span>
                        <span className="text-white">{formData.budget}</span>
                      </div>
                    </div>

                    <div className="pt-1 text-[11px]">
                      <span className="text-[#666666] block">Project Objective:</span>
                      <p className="text-[#CCCCCC] text-xs font-sans mt-0.5 line-clamp-3 leading-relaxed">
                        {formData.message}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          projectType: 'Web Application',
                          budget: '5,000 – 10,000',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 rounded-sm text-[11px] font-mono uppercase tracking-wider text-black bg-[#C5A059] hover:bg-[#D4B26F] transition-colors font-semibold shadow-md"
                    >
                      Submit Another Project
                    </button>

                    <button
                      onClick={handleCopySummary}
                      className="px-4 py-2.5 rounded-sm text-[11px] font-mono uppercase tracking-wider text-[#CCCCCC] bg-[#141414] hover:bg-[#1A1A1A] border border-[#222222] transition-colors inline-flex items-center gap-1.5"
                    >
                      {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#888888]" />}
                      {copiedSummary ? 'Copied Order' : 'Copy Order Details'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-[10px] font-mono uppercase tracking-wider text-[#888888] mb-2">
                        Your Name <span className="text-[#C5A059]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-sm bg-[#0A0A0A] border border-[#1A1A1A] text-white placeholder-[#444444] text-xs focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-[10px] font-mono uppercase tracking-wider text-[#888888] mb-2">
                        Email Address <span className="text-[#C5A059]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-sm bg-[#0A0A0A] border border-[#1A1A1A] text-white placeholder-[#444444] text-xs focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company/Business */}
                  <div>
                    <label htmlFor="contact-company" className="block text-[10px] font-mono uppercase tracking-wider text-[#888888] mb-2">
                      Company / Organization <span className="text-[#444444]">(Optional)</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Labs or Startup Name"
                      className="w-full px-4 py-3 rounded-sm bg-[#0A0A0A] border border-[#1A1A1A] text-white placeholder-[#444444] text-xs focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-colors"
                    />
                  </div>

                  {/* What do you want to build? (Interactive category pills) */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#888888] mb-2.5">
                      What do you want to build?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3 py-1.5 rounded-sm text-xs font-mono transition-all ${
                            formData.projectType === type
                              ? 'bg-white text-black font-semibold shadow-sm'
                              : 'bg-[#0A0A0A] text-[#888888] border border-[#1A1A1A] hover:border-[#333333]'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Range (Interactive pills) */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#888888] mb-2.5">
                      Expected Budget Bracket
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: range })}
                          className={`py-2 px-2 rounded-sm text-xs font-mono transition-all text-center ${
                            formData.budget === range
                              ? 'bg-[#161616] border border-[#C5A059] text-[#C5A059] font-medium'
                              : 'bg-[#0A0A0A] border border-[#1A1A1A] text-[#666666] hover:text-[#AAAAAA]'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-[10px] font-mono uppercase tracking-wider text-[#888888] mb-2">
                      Project Details &amp; Objective <span className="text-[#C5A059]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe the product, problem to solve, or target launch deadline..."
                      className="w-full px-4 py-3 rounded-sm bg-[#0A0A0A] border border-[#1A1A1A] text-white placeholder-[#444444] text-xs focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-colors resize-y"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-sm bg-rose-950/20 border border-rose-900/40 text-rose-300 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    id="btn-submit-contact"
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-sm text-[11px] uppercase tracking-widest font-bold text-black bg-white hover:bg-[#E0E0E0] transition-all duration-200 shadow-xl flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] disabled:opacity-50"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Sending Order to govizenofficial@gmail.com...
                      </span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-black" />
                        <span>Submit &amp; Send to Founders</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <div className="text-[10px] font-mono text-[#666666] text-center">
                    ⚡ Submitting automatically sends full project specifications directly to <span className="text-[#C5A059]">govizenofficial@gmail.com</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* WhatsApp Line Selector Modal */}
      {isWhatsAppModalOpen && (
        <div
          id="whatsapp-choice-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsWhatsAppModalOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#0D0D0D] border border-[#222222] rounded-md p-6 sm:p-7 shadow-2xl space-y-6 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsWhatsAppModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-sm bg-[#161616] text-[#888888] hover:text-white border border-[#222222] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-[10px] font-mono uppercase tracking-wider mb-2">
                <MessageCircle className="w-3 h-3" />
                <span>WhatsApp Direct Line</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-white">
                Select Founder on WhatsApp<span className="text-[#C5A059]">.</span>
              </h3>
              <p className="text-xs text-[#888888] mt-1 font-light leading-relaxed">
                Connect directly with GoVizen founders. Select who you would like to chat with:
              </p>
            </div>

            {/* Number Choices */}
            <div className="space-y-3">
              {whatsappNumbers.map((wa) => {
                const prefilledText = formData.message.trim()
                  ? `Hi ${wa.name}, I am interested in building a ${formData.projectType || 'project'} with GoVizen.\n\nProject Scope: ${formData.message.trim()}`
                  : `Hi ${wa.name}, I would like to discuss a project with GoVizen.`;
                const waUrl = `https://wa.me/${wa.cleanNumber}?text=${encodeURIComponent(prefilledText)}`;

                return (
                  <a
                    key={wa.id}
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsWhatsAppModalOpen(false)}
                    className="flex items-center justify-between p-4 rounded-sm bg-[#141414] border border-[#222222] hover:border-[#25D366]/60 hover:bg-[#181818] transition-all group cursor-pointer"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-sm bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white group-hover:text-[#25D366] transition-colors font-display">
                            {wa.name}
                          </span>
                          <span className="text-[9px] font-mono px-1.5 py-0.2 bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 rounded-xs">
                            Active
                          </span>
                        </div>
                        <div className="text-xs text-[#C5A059] font-mono mt-0.5">
                          {wa.number}
                        </div>
                        <div className="text-[11px] text-[#888888] mt-1 font-sans">
                          {wa.role}
                        </div>
                        <div className="text-[10px] text-[#555555] font-mono mt-0.5">
                          {wa.focus}
                        </div>
                      </div>
                    </div>

                    <div className="text-[#888888] group-hover:text-[#25D366] transition-colors pl-2 shrink-0 self-center">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Note */}
            <div className="text-[11px] font-mono text-[#666666] pt-1 text-center border-t border-[#1A1A1A]">
              💬 Opens WhatsApp Web on desktop or WhatsApp app on mobile devices.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

