
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="pt-20 pb-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-brand-primary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-secondary px-4 py-2 rounded-full">
                  <Zap size={16} className="text-accent animate-pulse" />
                  <span className="text-sm font-bold text-foreground uppercase tracking-wide">
                    Estratégia e execução
                  </span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat leading-tight">
                Não criamos sites —{' '}
                <span className="text-gradient">
                  construímos impérios digitais.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Da estratégia ao código: sites, apps e automações que geram resultado real.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="cta"
                className="text-lg px-8 py-4"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar orçamento
                <Rocket className="ml-2" size={20} />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4"
                onClick={() => navigate('/projetos')}
              >
                Ver projetos
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

          </div>

          {/* Enhanced Hero Visual */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              {/* Main Device Mockup */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Interface de dashboard analytics"
                  className="rounded-3xl shadow-2xl w-full animate-float transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-accent rounded-2xl p-4 shadow-xl animate-float" style={{animationDelay: '1s'}}>
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                
              </div>
            </div>
            
            {/* Background Effects */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
