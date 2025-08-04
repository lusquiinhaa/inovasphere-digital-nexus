
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 pb-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full">
                  <Zap size={16} className="text-purple-600 animate-pulse" />
                  <span className="text-sm font-bold text-purple-700 uppercase tracking-wide">
                    Revolução Digital em Curso
                  </span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat leading-tight">
                Não Criamos Apenas Sites.{' '}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                  Construímos Ecossistemas Digitais Completos.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                <strong>Sites, Apps Mobile, Software Desktop, Mentoria e Consultoria.</strong> Desenvolvemos soluções sob medida que <strong>impulsionam seu crescimento</strong>. 
                Enquanto outros entregam projetos, nós construímos <em>partnerships de longo prazo</em>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Dominar Meu Mercado
                <Rocket className="ml-2" size={20} />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 text-lg px-8 py-4"
                onClick={() => document.getElementById('demos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Projetos
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">100%</div>
                <div className="text-gray-600 text-sm">Satisfação Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">5★</div>
                <div className="text-gray-600 text-sm">Avaliação Média</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">2x</div>
                <div className="text-gray-600 text-sm">Crescimento Médio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-gray-600 text-sm">Suporte Dedicado</div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Visual */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              {/* Main Device Mockup */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Interface revolucionária - Dashboard analytics com IA"
                  className="rounded-3xl shadow-2xl w-full animate-float transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-4 shadow-xl animate-float" style={{animationDelay: '1s'}}>
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-3 shadow-xl animate-float" style={{animationDelay: '2s'}}>
                  <div className="text-white text-sm font-bold">100% Sucesso</div>
                </div>
                
                <div className="absolute top-1/2 -right-8 bg-white rounded-full p-3 shadow-xl animate-float" style={{animationDelay: '0.5s'}}>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">5.0★</div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Effects */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
