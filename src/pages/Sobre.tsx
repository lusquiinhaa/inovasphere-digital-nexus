import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Code, Users, Zap, CheckCircle, TrendingUp } from "lucide-react";

const Sobre = () => {
  const values = [
    {
      icon: Target,
      title: "Foco no Resultado",
      description: "Não vendemos tecnologia, vendemos solução. Cada linha de código existe para resolver um problema real do seu negócio."
    },
    {
      icon: Zap,
      title: "Agilidade",
      description: "Entregamos valor rápido. Começamos pequeno, validamos, e escalamos com base em dados reais, não em suposições."
    },
    {
      icon: Users,
      title: "Parceria Transparente",
      description: "Comunicação clara, sem jargões técnicos desnecessários. Você entende cada etapa e decisão do projeto."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Descoberta",
      description: "Entendemos seu negócio, desafios e objetivos. Mapeamos o problema antes de pensar em código."
    },
    {
      number: "02",
      title: "Protótipo",
      description: "Criamos uma versão inicial funcional para validar a ideia rapidamente e obter feedback."
    },
    {
      number: "03",
      title: "Desenvolvimento",
      description: "Iteramos com entregas contínuas, ajustando conforme necessário baseado em dados e feedback."
    },
    {
      number: "04",
      title: "Evolução",
      description: "Suporte contínuo, monitoramento e melhorias baseadas no uso real do sistema."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sobre | AllSolutions"
        description="Quem somos: princípios, forma de trabalho e stack da AllSolutions."
        canonical={window.location.origin + "/sobre"}
      />
      <Header />
      <ScrollToTop />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold font-montserrat text-foreground leading-tight">
                Transformamos <span className="text-gradient">Ideias</span> em Soluções Digitais
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Somos uma equipe apaixonada por <strong>resolver problemas</strong> através da tecnologia. 
                Criamos produtos digitais que geram valor real para empresas e pessoas.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-montserrat mb-4">Nossa Filosofia</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Parceria acima de tudo. Trabalhamos lado a lado com nossos clientes para criar soluções que realmente importam.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold font-montserrat">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-montserrat mb-4">Como Trabalhamos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nosso processo é iterativo e centrado no usuário, garantindo entregas de valor desde o primeiro dia.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 space-y-3">
                    <div className="text-5xl font-bold text-accent opacity-20">{step.number}</div>
                    <h3 className="text-xl font-bold font-montserrat">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-montserrat mb-4">Stack Tecnológico</h2>
              <p className="text-muted-foreground">
                Utilizamos tecnologias modernas e comprovadas para construir soluções robustas e escaláveis.
              </p>
            </div>
            
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center">
                      <Code className="w-5 h-5 mr-2 text-accent" />
                      Frontend
                    </h3>
                    <ul className="space-y-2">
                      {["React + TypeScript", "Tailwind CSS", "Vite", "React Router"].map((tech, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-accent flex-shrink-0" />
                          <span className="text-foreground">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-accent" />
                      Backend & Dados
                    </h3>
                    <ul className="space-y-2">
                      {["Supabase / PostgreSQL", ".NET / C#", "Automações (n8n)", "Power BI"].map((tech, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-accent flex-shrink-0" />
                          <span className="text-foreground">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sobre;
