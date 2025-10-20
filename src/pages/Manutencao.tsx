import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { HardDrive, RefreshCw, Monitor, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';

const Manutencao = () => {
  const services = [
    {
      icon: HardDrive,
      title: 'Troca de SSD',
      description: 'Upgrade de armazenamento para melhor desempenho e velocidade',
      pricing: [
        { item: 'Mão de obra', price: 'R$ 100 a R$ 200' },
        { item: 'SSD 240-256 GB SATA', price: 'R$ 150 a R$ 250' },
        { item: 'SSD 480-512 GB SATA', price: 'R$ 250 a R$ 350' },
        { item: 'SSD NVMe 500 GB', price: 'R$ 300 a R$ 450' }
      ]
    },
    {
      icon: RefreshCw,
      title: 'Formatação Completa',
      description: 'Formatação com instalação de sistema operacional e drivers',
      pricing: [
        { item: 'Serviço completo (formatação + sistema + drivers)', price: 'R$ 100 a R$ 200' }
      ]
    },
    {
      icon: Monitor,
      title: 'Tela Preta - Diagnóstico e Reparo',
      description: 'Identificação e solução de problemas de tela preta',
      pricing: [
        { item: 'Diagnóstico completo', price: 'R$ 50 a R$ 100' },
        { item: 'Problema simples (driver, configuração, software)', price: 'R$ 100 a R$ 200' },
        { item: 'Problema de hardware (placa-mãe, cabo flat, tela, GPU)', price: 'R$ 300 a R$ 800*' }
      ],
      note: '* Valor varia conforme a peça necessária'
    }
  ];

  const benefits = [
    'Diagnóstico profissional e transparente',
    'Peças de qualidade certificada',
    'Garantia do serviço realizado',
    'Atendimento personalizado',
    'Orçamento sem compromisso',
    'Agilidade na execução'
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Manutenção de Notebooks - AllSolutions"
        description="Serviços especializados de manutenção de notebooks: troca de SSD, formatação completa e reparo de tela preta. Diagnóstico profissional e garantia."
      />
      <Header />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold font-montserrat text-foreground leading-tight">
              Manutenção de <span className="text-gradient">Notebooks</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Serviços especializados de <strong>manutenção e reparo</strong> para seu notebook. 
              Diagnóstico profissional, peças de qualidade e garantia do serviço.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-8 space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold font-montserrat text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    {service.pricing.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start">
                        <span className="text-sm text-foreground font-medium flex-1">{item.item}</span>
                        <span className="text-sm font-bold text-accent ml-2">{item.price}</span>
                      </div>
                    ))}
                    {service.note && (
                      <p className="text-xs text-muted-foreground italic pt-2">{service.note}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Section */}
          <Card className="bg-secondary border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold font-montserrat text-foreground mb-6 text-center">
                Por que escolher a AllSolutions?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary border-0 max-w-3xl mx-auto">
            <CardContent className="p-8 text-center space-y-6">
              <h3 className="text-3xl font-bold text-primary-foreground">
                Precisa de manutenção?
              </h3>
              <p className="text-primary-foreground/90 text-lg">
                Entre em contato para <strong>diagnóstico gratuito</strong> e orçamento sem compromisso.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a 
                  href="tel:+5511999999999" 
                  className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">Ligar Agora</span>
                </a>
                <a 
                  href="mailto:contato@allsolutions.com.br" 
                  className="flex items-center justify-center space-x-2 bg-white hover:bg-white/90 text-primary px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">Enviar E-mail</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Manutencao;
