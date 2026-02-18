import { AuthorBlock } from '@/components/authorBlock';
import { Background3D } from '@/components/background';
import { FomoSection } from '@/components/fomo';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero';
import { OldSolutionsSection } from '@/components/old-solutions';
import { PhoneMockupSection } from '@/components/PhoneMockupSection';
import { SecurityBlock } from '@/components/securityBlock';
import { TargetAudienceSection } from '@/components/target-audience';

export default function App() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-white text-black"
      style={{
        zoom: '90%',
      }}
    >
      <Background3D />
      <Header />

      <main className="relative z-10">
        <HeroSection />
        <SecurityBlock />
        <OldSolutionsSection />
        <TargetAudienceSection />
        <PhoneMockupSection />
        <AuthorBlock />
        <FomoSection />
      </main>

      <Footer />
    </div>
  );
}
