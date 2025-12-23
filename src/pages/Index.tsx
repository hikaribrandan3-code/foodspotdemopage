import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import IdentitySection from "@/components/landing/IdentitySection";
import OperationsSection from "@/components/landing/OperationsSection";
import CameraSection from "@/components/landing/CameraSection";
import AudienceSection from "@/components/landing/AudienceSection";
import DeliverySection from "@/components/landing/DeliverySection";
import EverywhereSection from "@/components/landing/EverywhereSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Slide 1 - The Hook */}
      <HeroSection />
      {/* Slide 2 - The Problem */}
      <ProblemSection />
      {/* Slide 3 - The Solution */}
      <SolutionSection />
      {/* Slide 4 - Identity & Customization */}
      <IdentitySection />
      {/* Slide 5 - Operations / Management */}
      <OperationsSection />
      {/* Slide 6 - The Differentiator (Camera) */}
      <CameraSection />
      {/* Slide 7 - Who It's For */}
      <AudienceSection />
      {/* Slide 8 - Delivery & Revenue */}
      <DeliverySection />
      {/* Slide 9 - Everywhere */}
      <EverywhereSection />
      {/* Final CTA */}
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
