
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Smartphone, Globe, Code, Sparkles, Play } from 'lucide-react';

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState('website');

  const demos = [
    {
      id: 'website',
      title: 'E-commerce moderno',
      category: 'Website',
      icon: Monitor,
      preview: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Loja virtual rápida e acessível com checkout simples e PWA.',
      metrics: { desempenho: 'Rápido', ux: 'Intuitivo', seo: 'Boas práticas' },
      tech: ['React', 'Stripe', 'PWA']
    },
    {
      id: 'app',
      title: 'App financeiro',
      category: 'App Mobile',
      icon: Smartphone,
      preview: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Gestão simples do dia a dia com segurança e autenticação.',
      metrics: { desempenho: 'Leve', ux: 'Clara', confiabilidade: 'Estável' },
      tech: ['React Native', 'Auth', 'Biometria']
    },
    {
      id: 'platform',
      title: 'SaaS de analytics',
      category: 'Plataforma',
      icon: Globe,
      preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Dashboards e automações para operação mais previsível.',
      metrics: { monitoramento: 'Tempo real', ux: 'Clara', escalabilidade: 'Pronto para crescer' },
      tech: ['Next.js', 'GraphQL', 'Docker']
    }
  ];

  const currentDemo = demos.find(demo => demo.id === activeDemo) || demos[0];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center space-x-2 text-accent">
            <Sparkles size={24} className="animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Projetos e Demos
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold font-montserrat text-primary-foreground leading-tight">
            Conheça nossos <span className="text-gradient">projetos</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Exemplos práticos de sites, apps e automações — objetivos claros, entregas consistentes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Demo Selector */}
          <div className="space-y-4">
            {demos.map((demo) => (
              <Card 
                key={demo.id}
                className={`cursor-pointer transition-all duration-300 border-0 ${
                  activeDemo === demo.id 
                    ? 'bg-accent/20 shadow-2xl scale-105' 
                    : 'bg-card/10 hover:bg-card/20'
                }`}
                onClick={() => setActiveDemo(demo.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeDemo === demo.id ? 'bg-accent' : 'bg-muted/50'
                    }`}>
                      <demo.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-foreground/60 uppercase tracking-wide">{demo.category}</div>
                      <div className="text-primary-foreground font-semibold">{demo.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Demo Preview */}
          <div className="lg:col-span-2">
            <Card className="bg-card/10 border-0 overflow-hidden">
              <CardContent className="p-0">
                {/* Preview Image */}
                <div className="relative group">
                  <img
                    src={currentDemo.preview}
                    alt={currentDemo.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="cta" className="backdrop-blur-sm">
                      <Play className="w-5 h-5 mr-2" />
                      <span>Ver Demo Live</span>
                    </Button>
                  </div>
                </div>

                {/* Demo Info */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-foreground mb-2">{currentDemo.title}</h3>
                    <p className="text-primary-foreground/80">{currentDemo.description}</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(currentDemo.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-accent">
                          {value}
                        </div>
                        <div className="text-sm text-primary-foreground/60 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <div className="text-sm text-primary-foreground/60 mb-2">Stack Tecnológico:</div>
                    <div className="flex flex-wrap gap-2">
                      {currentDemo.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-accent/20 text-primary-foreground text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex space-x-4">
                    <Button variant="cta">
                      <Code className="w-4 h-4 mr-2" />
                      Ver Código
                    </Button>
                    <Button variant="outline" className="border-accent/30 text-primary hover:bg-accent/10">
                      Solicitar Similar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-accent/20 border-accent/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Quer um projeto sob medida?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Conte sua necessidade e criamos a solução certa para o momento do seu negócio.
              </p>
              <Button 
                size="lg" 
                variant="cta"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar orçamento
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
