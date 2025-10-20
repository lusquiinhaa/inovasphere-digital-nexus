import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ContactSection from "@/components/ContactSection";

const Contato = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contato | AllSolutions"
        description="Fale com a AllSolutions: diagnóstico gratuito e proposta personalizada."
        canonical={window.location.origin + "/contato"}
      />
      <Header />
      <ScrollToTop />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
