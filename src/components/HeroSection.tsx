
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-growth-green-600">
                <Sparkles size={20} />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Transformação Digital
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight">
                Do Código à Estratégia:{' '}
                <span className="text-gradient">
                  Sua Jornada Digital
                </span>{' '}
                Começa Aqui!
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Sites, Aplicativos e Mentorias Sob Medida para Alavancar seu Negócio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-tech text-white hover:opacity-90 transition-all duration-200 transform hover:scale-105"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Fale com um Especialista
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-tech-blue-500 text-tech-blue-600 hover:bg-tech-blue-50"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conhecer Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-tech-blue-700">10+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-growth-green-600">30%</div>
                <div className="text-gray-600">Mais Rápido</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-tech-blue-700">100+</div>
                <div className="text-gray-600">Projetos Entregues</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Ecossistema Digital - Dispositivos conectados e desenvolvimento"
                className="rounded-2xl shadow-2xl w-full animate-float"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-growth-green-500 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-tech-blue-500 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-tech rounded-full opacity-30 animate-float" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
