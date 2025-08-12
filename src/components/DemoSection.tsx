
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Smartphone, Globe, Code, Sparkles, Play } from 'lucide-react';

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState('website');

  const demos = [
    {
      id: 'website',
      title: 'E-commerce Revolucionário',
      category: 'Website',
      icon: Monitor,
      preview: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Loja virtual com IA integrada para recomendações personalizadas',
      metrics: { conversion: '+187%', speed: '0.8s', sales: '+€2.3M' },
      tech: ['React', 'AI/ML', 'Stripe', 'PWA']
    },
    {
      id: 'app',
      title: 'FinTech do Futuro',
      category: 'App Mobile',
      icon: Smartphone,
      preview: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'App financeiro com blockchain e análise preditiva',
      metrics: { users: '50K+', rating: '4.9★', downloads: '1M+' },
      tech: ['React Native', 'Blockchain', 'AI', 'Biometrics']
    },
    {
      id: 'platform',
      title: 'SaaS Inteligente',
      category: 'Plataforma',
      icon: Globe,
      preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Dashboard analytics com automação e insights em tempo real',
      metrics: { efficiency: '+340%', clients: '200+', automation: '95%' },
      tech: ['Next.js', 'GraphQL', 'Python', 'Docker']
    }
  ];

  const currentDemo = demos.find(demo => demo.id === activeDemo) || demos[0];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center space-x-2 text-purple-400">
            <Sparkles size={24} className="animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Demonstrativos Interativos
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold font-montserrat text-white leading-tight">
            Veja a <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Magia</span> Acontecer
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Projetos reais que transformaram negócios. Explore nossos casos de sucesso interativamente.
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
                    ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 shadow-2xl scale-105' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}
                onClick={() => setActiveDemo(demo.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeDemo === demo.id ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gray-700'
                    }`}>
                      <demo.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 uppercase tracking-wide">{demo.category}</div>
                      <div className="text-white font-semibold">{demo.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Demo Preview */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 border-0 overflow-hidden">
              <CardContent className="p-0">
                {/* Preview Image */}
                <div className="relative group">
                  <img
                    src={currentDemo.preview}
                    alt={currentDemo.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30">
                      <Play className="w-5 h-5 text-white mr-2" />
                      <span className="text-white">Ver Demo Live</span>
                    </Button>
                  </div>
                </div>

                {/* Demo Info */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{currentDemo.title}</h3>
                    <p className="text-gray-300">{currentDemo.description}</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(currentDemo.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                          {value}
                        </div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Stack Tecnológico:</div>
                    <div className="flex flex-wrap gap-2">
                      {currentDemo.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex space-x-4">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                      <Code className="w-4 h-4 mr-2" />
                      Ver Código
                    </Button>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
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
          <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Quer Algo Ainda Mais Impressionante?
              </h3>
              <p className="text-gray-300 mb-6">
                Estes são apenas alguns exemplos. Criamos soluções únicas para cada cliente.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Criar Meu Projeto Único
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
