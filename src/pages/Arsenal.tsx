import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ServicesSection from "@/components/ServicesSection";

const Arsenal = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Arsenal de Soluções | AllSolutions"
        description="Conheça nosso arsenal completo de soluções digitais: websites, aplicativos, automações e manutenção de notebooks."
        canonical={window.location.origin + "/arsenal"}
      />
      <Header />
      <ScrollToTop />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold font-montserrat text-foreground leading-tight">
                Arsenal de <span className="text-gradient">Soluções</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Temos as <strong>armas certas</strong> para cada desafio do seu negócio. 
                Do código ao hardware, da estratégia à execução, somos seu parceiro completo em tecnologia.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />
      </main>

      <Footer />
    </div>
  );
};

export default Arsenal;
