import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { SpecialisationsSection } from './components/SpecialisationsSection';
import { SpecialisationModal } from './components/SpecialisationModal';
import { BenefitsSection } from './components/BenefitsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ProgramsSection } from './components/ProgramsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { OnlineConsultationSection } from './components/OnlineConsultationSection';
import { FaqSection } from './components/FaqSection';
import { ConsultationFormSection } from './components/ConsultationFormSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModal, type LegalDocType } from './components/LegalModal';
import type { SpecialisationItem } from './data/content';

export default function App() {
  const [selectedSpecialisation, setSelectedSpecialisation] =
    useState<SpecialisationItem | null>(null);
  const [legalDoc, setLegalDoc] = useState<LegalDocType>(null);
  const [preselectedConcern, setPreselectedConcern] = useState<string | undefined>(undefined);
  const [preselectedProgram, setPreselectedProgram] = useState<string | undefined>(undefined);

  const scrollToForm = useCallback(() => {
    const formEl = document.getElementById('consultation-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleSelectProgram = useCallback(
    (consultationType: string) => {
      setPreselectedProgram(consultationType);
      scrollToForm();
    },
    [scrollToForm],
  );

  const handleEnquireConcern = useCallback(
    (concern: string) => {
      setPreselectedConcern(concern);
      scrollToForm();
    },
    [scrollToForm],
  );

  return (
    <div className="min-h-screen bg-[#FFFCF8] text-[#353035]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-[#353035] focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar onBookClick={scrollToForm} />

      <main id="main-content">
        <HeroSection onBookClick={scrollToForm} />
        <ProblemSection />
        <SolutionSection onBookClick={scrollToForm} />
        <SpecialisationsSection onSelectSpecialisation={setSelectedSpecialisation} />
        <BenefitsSection />
        <HowItWorksSection />
        <ProgramsSection onSelectProgram={handleSelectProgram} />
        <TestimonialsSection />
        <AboutSection onBookClick={scrollToForm} />
        <OnlineConsultationSection onBookClick={scrollToForm} />
        <FaqSection />
        <ConsultationFormSection
          preselectedConcern={preselectedConcern}
          preselectedConsultationType={preselectedProgram}
        />
        <FinalCtaSection onBookClick={scrollToForm} />
      </main>

      <Footer onOpenLegal={setLegalDoc} />
      <FloatingWhatsApp />

      <SpecialisationModal
        item={selectedSpecialisation}
        onClose={() => setSelectedSpecialisation(null)}
        onEnquire={handleEnquireConcern}
      />

      <LegalModal docType={legalDoc} onClose={() => setLegalDoc(null)} />
    </div>
  );
}
