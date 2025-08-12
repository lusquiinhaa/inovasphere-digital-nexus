
import { CheckCircle, Users, Zap, Target } from 'lucide-react';

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Target,
      title: 'Solução Integrada',
      description: 'Tecnologia + Estratégia em um único lugar.'
    },
    {
      icon: Users,
      title: 'Time Especializado',
      description: 'Experiência sólida em tecnologia e negócios.'
    },
    {
      icon: Zap,
      title: 'Agilidade',
      description: 'Entrega ágil com foco em qualidade e parceria.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900">
            Por que <span className="text-gradient">funcionamos</span> bem?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unimos tecnologia e método para resolver problemas reais com clareza e foco.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-tech bg-opacity-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-tech-blue-600" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-growth-green-600" />
                    <h3 className="text-xl font-bold font-montserrat text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-montserrat text-gray-900 mb-4">
              Resultados que importam
            </h3>
            <p className="text-gray-600 mb-6">
              Cada projeto foca em resolver problemas reais do negócio com tecnologia na medida certa.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-tech text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-200"
              >
                Falar com a AllSolutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
