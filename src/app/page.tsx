import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBanner } from "@/components/TrustBanner";
import { About } from "@/components/About";
import { CoreServices } from "@/components/CoreServices";
import { Methodology } from "@/components/Methodology";
import { EnterpriseIntegrations } from "@/components/EnterpriseIntegrations";
import { Sectors } from "@/components/Sectors";
import { Impact } from "@/components/Impact";
import { WhyAQL } from "@/components/WhyAQL";
import { Architecture } from "@/components/Architecture";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-pureblack relative">
      <Navbar />
      <Hero />
      <TrustBanner />
      <About />
      <CoreServices />
      <Methodology />
      <EnterpriseIntegrations />
      <Architecture />
      <Sectors />
      <Impact />
      <WhyAQL />
      <Footer />
    </main>
  );
}
