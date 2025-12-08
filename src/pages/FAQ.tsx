import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SEO from '@/components/SEO';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqCategories = [
    {
      title: 'Serviços e Projetos',
      questions: [
        {
          question: 'Quais tipos de projetos a AllSolutions desenvolve?',
          answer: 'Desenvolvemos sites institucionais, landing pages, aplicativos web (PWA), aplicativos mobile para Android e iOS, softwares para Windows, sistemas de automação e integrações, além de oferecer consultoria e mentoria em tecnologia.'
        },
        {
          question: 'Vocês trabalham com projetos de pequeno porte?',
          answer: 'Sim! Atendemos desde pequenos empreendedores até grandes empresas. Cada projeto recebe a mesma atenção e qualidade, independente do tamanho.'
        },
        {
          question: 'Quanto tempo leva para desenvolver um projeto?',
          answer: 'O prazo varia conforme a complexidade. Uma landing page simples pode ficar pronta em 1-2 semanas, enquanto um aplicativo completo pode levar de 2 a 6 meses. Após a análise inicial, fornecemos um cronograma detalhado.'
        },
        {
          question: 'Vocês oferecem manutenção após a entrega do projeto?',
          answer: 'Sim! Oferecemos pacotes de manutenção mensal que incluem atualizações de segurança, correções de bugs, pequenas alterações e suporte técnico.'
        }
      ]
    },
    {
      title: 'Orçamento e Pagamento',
      questions: [
        {
          question: 'Como funciona o orçamento?',
          answer: 'Oferecemos diagnóstico gratuito! Após entender suas necessidades, elaboramos uma proposta detalhada com escopo, prazo e investimento. Sem surpresas ou custos ocultos.'
        },
        {
          question: 'Quais são as formas de pagamento?',
          answer: 'Aceitamos PIX, transferência bancária e cartão de crédito (com possibilidade de parcelamento). Geralmente trabalhamos com 50% na aprovação e 50% na entrega, mas podemos negociar condições especiais.'
        },
        {
          question: 'O orçamento pode mudar durante o projeto?',
          answer: 'O orçamento aprovado é fixo para o escopo definido. Caso surjam novas funcionalidades durante o desenvolvimento, fazemos um aditivo com valores e prazos transparentes.'
        }
      ]
    },
    {
      title: 'Manutenção de Notebooks',
      questions: [
        {
          question: 'Quais serviços de manutenção vocês oferecem?',
          answer: 'Oferecemos troca de SSD (upgrade de armazenamento), formatação completa com instalação de sistema e drivers, e diagnóstico/reparo de problemas como tela preta.'
        },
        {
          question: 'Quanto custa a troca de SSD?',
          answer: 'A mão de obra varia de R$ 100 a R$ 200. O SSD SATA de 240-256GB custa entre R$ 150 e R$ 250, enquanto o NVMe de 500GB fica entre R$ 300 e R$ 450.'
        },
        {
          question: 'Vocês dão garantia nos serviços de manutenção?',
          answer: 'Sim! Todos os serviços têm garantia. Peças novas seguem a garantia do fabricante, e nossa mão de obra tem garantia de 90 dias.'
        },
        {
          question: 'Fazem atendimento a domicílio?',
          answer: 'Atualmente atendemos em nossa unidade, mas para casos especiais podemos avaliar atendimento remoto ou retirada/entrega do equipamento.'
        }
      ]
    },
    {
      title: 'Processo de Trabalho',
      questions: [
        {
          question: 'Como funciona o processo de desenvolvimento?',
          answer: 'Seguimos 5 etapas: 1) Descoberta e análise do projeto; 2) Planejamento e proposta; 3) Design e prototipação; 4) Desenvolvimento e testes; 5) Entrega e suporte. Você acompanha cada fase.'
        },
        {
          question: 'Terei acesso ao código-fonte do projeto?',
          answer: 'Sim! Após a conclusão e quitação do projeto, você recebe todo o código-fonte e documentação. O projeto é seu.'
        },
        {
          question: 'Vocês utilizam quais tecnologias?',
          answer: 'Trabalhamos com as tecnologias mais modernas do mercado: React, TypeScript, Node.js, Python, React Native, Flutter, entre outras. Escolhemos a melhor stack para cada projeto.'
        },
        {
          question: 'Como é a comunicação durante o projeto?',
          answer: 'Mantemos comunicação constante via WhatsApp e e-mail. Realizamos reuniões de acompanhamento semanais e você tem acesso a um painel para acompanhar o progresso.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="FAQ - Perguntas Frequentes | AllSolutions"
        description="Tire suas dúvidas sobre os serviços da AllSolutions. Perguntas frequentes sobre desenvolvimento de software, manutenção de notebooks, orçamentos e processo de trabalho."
      />
      <Header />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold font-montserrat text-foreground leading-tight">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Encontre respostas para as dúvidas mais comuns sobre nossos serviços. 
              Não encontrou o que procura? Fale conosco!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <AnimatedSection key={category.title} delay={categoryIndex * 0.1}>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold font-montserrat text-foreground">
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${categoryIndex}-${index}`}
                        className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
                      >
                        <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="bg-primary border-0 max-w-3xl mx-auto">
              <CardContent className="p-8 text-center space-y-6">
                <h3 className="text-3xl font-bold text-primary-foreground">
                  Ainda tem dúvidas?
                </h3>
                <p className="text-primary-foreground/90 text-lg">
                  Nossa equipe está pronta para ajudar. Entre em contato e tire todas as suas dúvidas!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a 
                    href="https://wa.me/5513981098220?text=Olá! Tenho uma dúvida sobre os serviços da AllSolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-semibold">Falar no WhatsApp</span>
                  </a>
                  <Button variant="secondary" size="lg" asChild>
                    <Link to="/contato">
                      Enviar Mensagem
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
