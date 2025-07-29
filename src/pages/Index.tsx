
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import DemoSection from '@/components/DemoSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <div id="servicos">
        <ServicesSection />
      </div>
      <div id="demos">
        <DemoSection />
      </div>
      <DifferentialsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
