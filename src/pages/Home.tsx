import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Process } from '../components/Process';
import { Approach } from '../components/Approach';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] selection:bg-[#C5A059] selection:text-[#0A0A0A]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <Process />
        <Approach />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
