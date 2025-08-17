
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Smartphone, Rocket, ArrowRight, Zap, Target } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Sites & Apps Web',
      subtitle: 'Plataformas focadas em resultado.',
      description: 'Sites responsivos e aplicações web PWA que transformam visitantes em clientes, com foco em clareza e desempenho.',
      features: [
        'Websites responsivos',
        'Progressive Web Apps',
        'SEO técnico e conteúdo',
        'Performance otimizada'
      ],
      color: 'from-blue-600 to-purple-600',
      bgColor: 'from-blue-50 to-purple-50',
      results: 'Performance otimizada'
    },
    {
      icon: Smartphone,
      title: 'Apps Mobile & Desktop',
      subtitle: 'Soluções multiplataforma para o seu contexto.',
      description: 'Apps Android/iOS nativos e software Windows personalizados. Experiências consistentes que priorizam usabilidade e estabilidade.',
      features: [
        'Android/iOS nativo',
        'Software Windows',
        'Apps cross-platform',
        'Interface intuitiva'
      ],
      color: 'from-green-600 to-blue-600',
      bgColor: 'from-green-50 to-blue-50',
      results: 'Experiência consistente'
    },
    {
      icon: Rocket,
      title: 'Mentoria & Consultoria',
      subtitle: 'Estratégias práticas para evoluir com segurança.',
      description: 'Consultoria estratégica e mentoria 1:1 para desenhar um roadmap claro e priorizar o que importa.',
      features: [
        'Consultoria técnica especializada',
        'Mentoria executiva 1:1',
        'Estratégia digital personalizada',
        'Roadmap de crescimento'
      ],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50',
      results: 'Crescimento sustentável'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="flex items-center justify-center space-x-2 text-accent">
            <Target size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Serviços
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold font-montserrat text-foreground leading-tight">
            Não Fazemos <span className="text-gradient">Projetos</span>.
            <br />Criamos <span className="text-gradient">Soluções</span>.
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <strong>Sites, Apps Mobile, Software Desktop, Mentoria e Consultoria.</strong> Desenvolvemos soluções completas e personalizadas que <strong>fazem a diferença real</strong> no seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg overflow-hidden relative"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-8 space-y-6 relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold font-montserrat text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold text-accent">
                      {service.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Results */}
                <div className="bg-primary rounded-xl p-4 text-primary-foreground">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span className="font-bold text-sm">{service.results}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant="cta"
                  className="w-full group-hover:scale-105 transition-transform duration-300"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar orçamento
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="bg-primary border-0 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                Pronto para iniciar seu projeto?
              </h3>
              <p className="text-primary-foreground/80 mb-6 text-lg">
                Vamos trabalhar juntos para transformar sua visão em realidade digital. 
                <strong>Seu sucesso é nossa prioridade.</strong>
              </p>
              <Button 
                size="lg" 
                variant="cta"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Iniciar Meu Projeto
                <Rocket className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
