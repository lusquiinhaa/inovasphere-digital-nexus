import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import DemoSection from "@/components/DemoSection";

const Demonstrativo = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Demonstrativos | AllSolutions"
        description="Veja na prática nossas soluções digitais em ação. Demos interativas de sites, apps e automações."
        canonical={window.location.origin + "/demonstrativo"}
      />
      <Header />
      <ScrollToTop />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold font-montserrat text-foreground leading-tight">
                Demonstrativos <span className="text-gradient">Interativos</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Não acredite apenas em palavras. <strong>Teste você mesmo</strong> nossas soluções em ação. 
                Cada demonstrativo é um exemplo real de como transformamos desafios em produtos digitais.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <DemoSection />
      </main>

      <Footer />
    </div>
  );
};

export default Demonstrativo;
