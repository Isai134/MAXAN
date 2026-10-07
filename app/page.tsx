import { CTA } from '@/components/CTA';
import { HomeAIGovernance } from '@/sections/HomeAIGovernance';
import { HomeDownloads } from '@/sections/HomeDownloads';
import { HomeHero } from '@/sections/HomeHero';
import { HomeServices } from '@/sections/HomeServices';
import { HomeTrust } from '@/sections/HomeTrust';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeTrust />
      <HomeAIGovernance />
      <HomeDownloads />
      <CTA title="¿Listo para iniciar tu proceso de certificación?" />
    </>
  );
}
