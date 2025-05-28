
import { HeroSection } from '@/components/sections/HeroSection';
import { FlipSection } from '@/components/sections/FlipSection';
import { AudienceSection } from '@/components/sections/AudienceSection';
import { FounderSection } from '@/components/sections/FounderSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <HeroSection />
      <FlipSection />
      <AudienceSection />
      <FounderSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
