import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { GoVizenLogo } from './GoVizenLogo';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'about', 'process', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1A1A1A] py-3.5 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          id="nav-logo"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded p-1 transition-transform active:scale-98"
        >
          <GoVizenLogo variant="horizontal" size="md" showTagline={true} />
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-navigation" aria-label="Main Navigation" className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-[#888888] bg-[#0D0D0D]/80 backdrop-blur-sm border border-[#1A1A1A] rounded-full px-6 py-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-all duration-200 ${
                  isActive
                    ? 'text-[#C5A059] border-b border-[#C5A059] pb-0.5'
                    : 'text-[#888888] hover:text-[#E0E0E0]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-3">

          <a
            id="nav-cta-button"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2 rounded-sm text-[11px] uppercase tracking-widest font-bold text-black bg-white hover:bg-[#E0E0E0] transition-all duration-200 shadow-md shadow-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-[#0A0A0A]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-sm bg-[#111111] border border-[#1A1A1A] text-[#888888] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#C5A059]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="md:hidden fixed inset-x-0 top-[60px] bg-[#0A0A0A]/98 backdrop-blur-xl border-b border-[#1A1A1A] px-6 py-6 shadow-2xl transition-all"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-nav-${link.id}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-4 py-3 rounded-md text-[12px] uppercase tracking-widest transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#141414] text-[#C5A059] font-semibold border-l-2 border-[#C5A059]'
                    : 'text-[#888888] hover:bg-[#111111] hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <span className="text-[10px] text-[#555555] font-mono">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}

            <div className="pt-4 border-t border-[#1A1A1A] flex flex-col gap-3">

              <a
                id="mobile-nav-cta"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-3 px-4 rounded-sm text-[11px] uppercase tracking-widest font-bold text-black bg-white hover:bg-[#E0E0E0] transition-colors flex items-center justify-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
