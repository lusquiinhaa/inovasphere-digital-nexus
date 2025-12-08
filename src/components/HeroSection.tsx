import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center space-x-2 bg-secondary px-4 py-2 rounded-full">
                  <Zap size={16} className="text-accent animate-pulse" />
                  <span className="text-sm font-bold text-foreground uppercase tracking-wide">
                    Estratégia e execução
                  </span>
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Não criamos sites —{' '}
                <span className="text-gradient">
                  construímos impérios digitais.
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Da estratégia ao código: sites, apps, automações e manutenção de notebooks que geram resultado real.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
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
            </motion.div>

          </motion.div>

          {/* Enhanced Hero Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative z-10">
              {/* Main Device Mockup */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Interface de dashboard analytics"
                  className="rounded-3xl shadow-2xl w-full animate-float transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 bg-accent rounded-2xl p-4 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
                
              </div>
            </div>
            
            {/* Background Effects */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
