import { LangProvider } from './context/LangContext';
import Nav from './components/Nav';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import PlansSection from './components/PlansSection';
import InclusiveStrip from './components/InclusiveStrip';
import StatsSection from './components/StatsSection';
import FmdSection from './components/FmdSection';
import B2bSection from './components/B2bSection';
import HowSection from './components/HowSection';
import TestiSection from './components/TestiSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

export default function App() {
  return (
    <LangProvider>
      <Nav />
      <Hero />
      <PainSection />
      <PlansSection />
      <InclusiveStrip />
      <StatsSection />
      <FmdSection />
      <B2bSection />
      <HowSection />
      <TestiSection />
      <FinalCta />
      <Footer />
      <a
        href="https://wa.me/33XXXXXXXXX"
        className="fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full flex items-center justify-center text-2xl no-underline transition-transform hover:scale-110 bounce-in"
        style={{ background: 'var(--wa)', boxShadow: '0 4px 20px rgba(37,211,102,0.4)' }}
        title="WhatsApp"
      >
        💬
      </a>
    </LangProvider>
  );
}
