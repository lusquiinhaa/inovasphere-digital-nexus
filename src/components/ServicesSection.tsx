
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Smartphone, Rocket, ArrowRight, Zap, Target } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Websites que Convertem',
      subtitle: 'Não apenas bonitos. Lucrativos.',
      description: 'Arquiteturas de conversão que transformam visitantes em clientes fanáticos. Cada pixel é estrategicamente posicionado para maximizar seus resultados.',
      features: [
        'Conversão otimizada por IA',
        'Performance sub-1 segundo',
        'SEO que domina Google',
        'Analytics preditivos'
      ],
      color: 'from-blue-600 to-purple-600',
      bgColor: 'from-blue-50 to-purple-50',
      results: '+340% conversões em média'
    },
    {
      icon: Smartphone,
      title: 'Apps que Viciam',
      subtitle: 'UX que seus usuários não conseguem largar.',
      description: 'Aplicativos móveis com psicologia comportamental integrada. Criamos experiências que geram dependência positiva e engajamento extremo.',
      features: [
        'UX Psychology-driven',
        'Performance nativa',
        'Offline-first',
        'Push notifications inteligentes'
      ],
      color: 'from-green-600 to-blue-600',
      bgColor: 'from-green-50 to-blue-50',
      results: '4.9★ rating médio'
    },
    {
      icon: Rocket,
      title: 'Mentoria de Élite',
      subtitle: 'Do zero ao unicórnio.',
      description: 'Consultoria estratégica 1:1 que já escalou +200 negócios. Metodologia proprietária que comprime anos de aprendizado em meses de resultados.',
      features: [
        'Estratégia personalizada',
        'Acesso direto aos fundadores',
        'Network exclusivo',
        'ROI garantido'
      ],
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50',
      results: '€2.3M faturamento médio'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="flex items-center justify-center space-x-2 text-purple-600">
            <Target size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Arsenal Completo
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold font-montserrat text-gray-900 leading-tight">
            Não Fazemos <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Projetos</span>.
            <br />Criamos <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Revoluções</span>.
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Enquanto outros entregam "produtos", nós construímos <strong>máquinas de crescimento</strong> que trabalham 24/7 para dominar seu mercado.
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
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 space-y-6 relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold font-montserrat text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Results */}
                <div className={`bg-gradient-to-r ${service.color} rounded-xl p-4 text-white`}>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span className="font-bold text-sm">{service.results}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white group-hover:scale-105 transition-transform duration-300`}
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Revolucionar Agora
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600 border-0 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Pronto para Revolucionar seu Negócio?
              </h3>
              <p className="text-purple-100 mb-6 text-lg">
                Cada dia que você espera, sua concorrência está ganhando terreno. 
                <strong> O momento é agora.</strong>
              </p>
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Começar Minha Revolução
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
