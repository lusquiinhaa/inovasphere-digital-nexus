
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Smartphone, Rocket } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Websites Impactantes',
      description: 'Sites responsivos, SEO-otimizados e integrados a estratégias de conversão.',
      features: ['Design Responsivo', 'SEO Otimizado', 'Alta Performance', 'CMS Personalizado'],
      color: 'tech-blue'
    },
    {
      icon: Smartphone,
      title: 'Apps Móveis Intuitivos',
      description: 'Aplicativos iOS e Android com UX imersiva e performance de alto nível.',
      features: ['iOS & Android', 'UX/UI Premium', 'Performance Otimizada', 'Integração API'],
      color: 'growth-green'
    },
    {
      icon: Rocket,
      title: 'Mentorias Estratégicas',
      description: 'Consultoria 1:1 para escalar seu negócio, tecnologia ou carreira.',
      features: ['Consultoria 1:1', 'Estratégia Digital', 'Crescimento Acelerado', 'Mentoria Técnica'],
      color: 'tech-blue'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para transformar sua presença digital e acelerar seu crescimento
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="p-8 space-y-6">
                {/* Icon */}
                <div className={`w-16 h-16 bg-${service.color}-500 bg-opacity-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-montserrat text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-${service.color}-500 rounded-full`}></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
