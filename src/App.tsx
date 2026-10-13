import { lazy, Suspense, useCallback, useState } from 'react';
import type { Breed } from './types';
import { BreedSection } from './components/BreedSection';
import { FactsSection } from './components/FactsSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ScienceSection } from './components/ScienceSection';
import { useScrollReveal } from './hooks/use-scroll-reveal';

const BreedModal = lazy(() => import('./components/BreedModal'));

/** 组合猫咪百科单页并管理详情弹层。 */
export default function App() {
  const [selectedBreed, setSelectedBreed] = useState<Breed | null>(null);
  useScrollReveal();
  const closeModal = useCallback(() => setSelectedBreed(null), []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ScienceSection />
        <BreedSection onSelect={setSelectedBreed} />
        <FactsSection />
      </main>
      <Footer />
      {selectedBreed && (
        <Suspense fallback={<div className="modal-backdrop" aria-label="正在加载品种详情" />}>
          <BreedModal breed={selectedBreed} onClose={closeModal} />
        </Suspense>
      )}
    </>
  );
}
