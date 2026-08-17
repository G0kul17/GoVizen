import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Process } from '../components/Process';
import { Approach } from '../components/Approach';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ProjectEstimatorModal } from '../components/ProjectEstimatorModal';

export const Home: React.FC = () => {
  const [estimatorOpen, setEstimatorOpen] = useState(false);
  const [appliedScope, setAppliedScope] = useState<{ projectType: string; budget: string; message: string } | null>(null);

  const handleApplyScope = (scopeData: { projectType: string; budget: string; message: string }) => {
    setAppliedScope(scopeData);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] selection:bg-[#C5A059] selection:text-[#0A0A0A]">
      {/* Navigation */}
      <Navbar onOpenEstimator={() => setEstimatorOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <Process />
        <Approach />
        <Contact initialScopeData={appliedScope} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Estimator Modal */}
      <ProjectEstimatorModal
        isOpen={estimatorOpen}
        onClose={() => setEstimatorOpen(false)}
        onApplyToContact={handleApplyScope}
      />
    </div>
  );
};
