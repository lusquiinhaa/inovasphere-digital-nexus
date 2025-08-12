import SEO from "@/components/SEO";
import ContactSection from "@/components/ContactSection";

const Contato = () => {
  return (
    <main className="min-h-screen pt-20">
      <SEO
        title="Contato | AllSolutions"
        description="Fale com a AllSolutions: diagnóstico gratuito e proposta personalizada."
        canonical={window.location.origin + "/contato"}
      />
      <ContactSection />
    </main>
  );
};

export default Contato;
