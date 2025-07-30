import HeroSection from "@/components/HeroSection";
import WhyRustSection from "@/components/WhyRustSection";
import FeaturesSection from "@/components/FeaturesSection";
import SafetySection from "@/components/SafetySection";
import ComparisonSection from "@/components/ComparisonSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyRustSection />
      <FeaturesSection />
      <SafetySection />
      <ComparisonSection />
      <Footer />
    </div>
  );
};

export default Index;
