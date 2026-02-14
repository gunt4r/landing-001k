import { Background3D } from '@/components/background';
import { BotFeaturesSection } from '@/components/bot-features';
import { FomoSection } from '@/components/fomo';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero';
import { OldSolutionsSection } from '@/components/old-solutions';
import { RelevanceSection } from '@/components/relevance';
import { TargetAudienceSection } from '@/components/target-audience';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-black">
      <Background3D />
      <Header />

      <main className="relative z-10">
        <HeroSection />
        <RelevanceSection />
        <OldSolutionsSection />
        <TargetAudienceSection />
        <BotFeaturesSection />
        <FomoSection />
      </main>

      <Footer />
    </div>
  );
}
