import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesSnapshot } from "@/components/sections/services-snapshot";
import { WhyUs } from "@/components/sections/why-us";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSnapshot />
      <WhyUs />
      <CTASection />
    </>
  );
}
