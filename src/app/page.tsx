import { SiteNav } from "@/components/SiteNav";

import { DiscoverAccordion } from "@/components/DiscoverAccordion";
import { ActionMarquee } from "@/components/ActionMarquee";
import { SteppedExperience } from "@/components/SteppedExperience";
import { BenefitsSection } from "@/components/BenefitsSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { QuotesSection } from "@/components/QuotesSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { FaqSection } from "@/components/FaqSection";
import { PushesSection } from "@/components/PushesSection";
import { OnePlatformSection } from "@/components/OnePlatformSection";
import { SiteFooter } from "@/components/SiteFooter";
import { RequestDemoMarquee } from "@/components/RequestDemoMarquee";
import { FooterReveal } from "@/components/FooterReveal";

export default function Home() {
  return (
    <FooterReveal footer={<SiteFooter />}>
      <SiteNav />
      <main className="flex flex-col">
        <DiscoverAccordion />
        <ActionMarquee />
        <SteppedExperience />
        <BenefitsSection />
        <UseCasesSection />
        <QuotesSection />
        <ResourcesSection />
        <FaqSection />
        <PushesSection />
        {/* Current joinclyde.com dark-redesign section (GSAP scroll-driven) */}
        <OnePlatformSection />
      </main>
      {/* Dark prefooter that slides up to reveal the white footer behind it. */}
      <RequestDemoMarquee />
    </FooterReveal>
  );
}
