
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/lib/supabase';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entraremos em contato em breve para seu diagnóstico gratuito.",
        });

        // Reset form
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          mensagem: ''
        });
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900">
            Pronto para Transformar Sua Ideia em{' '}
            <span className="text-gradient">Realidade?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fale conosco e receba um diagnóstico gratuito!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-2xl border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone/WhatsApp
                    </label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      placeholder="Conte-nos sobre seu projeto ou necessidade..."
                      rows={5}
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-tech text-white hover:opacity-90 transition-all duration-200 text-lg font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Quero Inovar
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-montserrat text-gray-900">
                Vamos Conversar!
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Estamos prontos para transformar sua visão em realidade digital. 
                Entre em contato conosco e descubra como podemos acelerar seu crescimento.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a 
                href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da AllSolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gradient-hero rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-6 h-6 text-growth-green-600" />
                <div>
                  <div className="font-semibold text-gray-900">WhatsApp</div>
                  <div className="text-gray-600">(11) 99999-9999</div>
                </div>
              </a>

              <a 
                href="mailto:contato@allsolutions.com?subject=Interesse nos serviços da AllSolutions"
                className="flex items-center space-x-4 p-4 bg-gradient-hero rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-6 h-6 text-tech-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">E-mail</div>
                  <div className="text-gray-600">contato@allsolutions.com</div>
                </div>
              </a>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-tech rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-4">Diagnóstico Gratuito Inclui:</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Análise completa do seu negócio</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Identificação de oportunidades</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Proposta personalizada</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Roadmap de crescimento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
