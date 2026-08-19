import React from 'react';
import { ArrowUp, Instagram, Linkedin, Mail } from 'lucide-react';
import { GoVizenLogo } from './GoVizenLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#070707] border-t border-[#1A1A1A] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1A1A1A] items-start">
          
          {/* Studio Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <GoVizenLogo variant="horizontal" size="lg" showTagline={true} />
            </div>

            <p className="text-xs sm:text-sm text-[#888888] font-light max-w-sm leading-relaxed">
              GoVizen — Building digital products for ambitious ideas.
            </p>

            <div className="flex items-center gap-2 text-[10px] font-mono text-[#555555]">
              <span>Founders: Vicky &amp; Gokul</span>
              <span>•</span>
              <span className="text-[#C5A059]">Software Engineers</span>
            </div>
          </div>

          {/* Site Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#555555]">
              Navigation
            </div>
            <ul className="grid grid-cols-2 gap-2.5 text-xs font-mono">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#888888] hover:text-[#C5A059] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Fast Channels */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#555555]">
              Connect &amp; Follow
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.instagram.com/govizen_official?igsh=eWg2bmY5cjFzcjQ0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GoVizen on Instagram"
                className="p-2.5 rounded-sm bg-[#0D0D0D] border border-[#1A1A1A] text-[#888888] hover:text-white hover:border-[#C5A059]/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/govizen-office-24977442a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GoVizen on LinkedIn"
                className="p-2.5 rounded-sm bg-[#0D0D0D] border border-[#1A1A1A] text-[#888888] hover:text-white hover:border-[#C5A059]/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:govizenofficial@gmail.com"
                aria-label="Email GoVizen"
                className="p-2.5 rounded-sm bg-[#0D0D0D] border border-[#1A1A1A] text-[#888888] hover:text-white hover:border-[#C5A059]/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <div className="text-[10px] text-[#555555] font-mono pt-1">
              Direct inquiries: govizenofficial@gmail.com
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#555555]">
          <div>
            © 2026 GoVizen. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#888888] hover:text-[#C5A059] transition-colors focus:outline-none cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

