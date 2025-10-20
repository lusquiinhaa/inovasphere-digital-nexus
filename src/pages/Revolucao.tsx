import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Zap, Target, TrendingUp, Users, Shield, Clock, DollarSign } from "lucide-react";

const Revolucao = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Transformação Digital Rápida",
      description: "Não perca tempo com processos burocráticos. Implantamos soluções em semanas, não meses."
    },
    {
      icon: DollarSign,
      title: "ROI Comprovado",
      description: "Cada investimento é justificado com métricas claras e resultados mensuráveis desde o primeiro mês."
    },
    {
      icon: Zap,
      title: "Automação Inteligente",
      description: "Elimine tarefas repetitivas e libere sua equipe para focar no que realmente importa: crescimento."
    },
    {
      icon: Target,
      title: "Soluções Sob Medida",
      description: "Nada de sistemas genéricos. Criamos exatamente o que seu negócio precisa, sem funcionalidades desnecessárias."
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade Garantida",
      description: "Começamos pequeno e crescemos junto com você. Tecnologia que acompanha seu sucesso."
    },
    {
      icon: Users,
      title: "Experiência do Usuário",
      description: "Interfaces intuitivas que seus clientes e equipe vão adorar usar. Menos treinamento, mais produtividade."
    },
    {
      icon: Shield,
      title: "Segurança em Primeiro Lugar",
      description: "Proteção de dados, backups automáticos e conformidade com regulamentações. Seu negócio está seguro."
    },
    {
      icon: Clock,
      title: "Suporte Contínuo",
      description: "Não te deixamos na mão após a entrega. Evolução constante baseada em feedback e novas necessidades."
    }
  ];

  const revolution = [
    {
      title: "Você está perdendo dinheiro",
      description: "Processos manuais custam tempo e dinheiro. Cada tarefa repetitiva é uma oportunidade de automação que está sendo desperdiçada."
    },
    {
      title: "Seus concorrentes estão à frente",
      description: "Enquanto você hesita, empresas similares já estão automatizando, otimizando e crescendo exponencialmente com tecnologia."
    },
    {
      title: "O futuro é agora",
      description: "Transformação digital não é mais opcional. É questão de sobrevivência. Quem não se adapta, fica para trás."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Revolução Digital | AllSolutions"
        description="Transforme seu negócio com tecnologia de ponta. Automação, escalabilidade e resultados mensuráveis."
        canonical={window.location.origin + "/revolucao"}
      />
      <Header />
      <ScrollToTop />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold font-montserrat text-primary-foreground leading-tight animate-fade-in">
                Revolução <span className="text-white">Digital</span>
              </h1>
              <p className="text-2xl text-primary-foreground/90 leading-relaxed animate-fade-in">
                Pare de fazer as mesmas coisas esperando resultados diferentes. 
                É hora de <strong>revolucionar</strong> seu negócio com tecnologia de verdade.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6 shadow-2xl hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Comece Sua Transformação Agora
              </Button>
            </div>
          </div>
        </section>

        {/* Wake Up Call */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              {revolution.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-accent shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-accent mb-3">{item.title}</h3>
                    <p className="text-lg text-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
                Por Que Revolucionar Agora?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Não é sobre ter a tecnologia mais cara. É sobre ter a tecnologia <strong>certa</strong> 
                que resolve seus problemas e impulsiona seu crescimento.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg"
                >
                  <CardContent className="p-6 space-y-4 text-center">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold font-montserrat">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-accent to-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-montserrat">
                Não Espere Mais
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Cada dia sem automação é um dia de oportunidades perdidas. 
                Agende uma <strong>consulta gratuita</strong> e descubra como podemos 
                transformar seu negócio em <strong>30 dias</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6 shadow-2xl"
                  onClick={() => window.location.href = '/contato'}
                >
                  Agendar Consulta Gratuita
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 bg-white/10 text-white border-white hover:bg-white hover:text-primary"
                  onClick={() => window.location.href = '/projetos'}
                >
                  Ver Casos de Sucesso
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Revolucao;
