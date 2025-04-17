import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PartnersSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
