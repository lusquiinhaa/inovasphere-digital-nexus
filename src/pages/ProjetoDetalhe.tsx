import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import projects from "@/data/projetos.json";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Projeto {
  slug: string;
  titulo: string;
  setor: string;
  thumb: string;
  desafio: string;
  solucao: string;
  resultados?: string[];
  stack: string[];
  links: { demo?: string | null; repo?: string | null; case?: string | null };
}

const ProjetoDetalhe = () => {
  const { slug } = useParams();

  const projeto = useMemo(() => (
    (projects as Projeto[]).find(p => p.slug === slug)
  ), [slug]);

  const jsonLd = projeto ? {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: projeto.titulo,
    about: projeto.setor,
    description: `${projeto.desafio} ${projeto.solucao}`,
    image: projeto.thumb,
    url: typeof window !== 'undefined' ? window.location.href : undefined,
    keywords: projeto.stack.join(', ')
  } : null;

  if (!projeto) {
    return (
      <div className="min-h-screen bg-background">
        <SEO title="Projeto não encontrado | AllSolutions" description="O estudo de caso solicitado não foi encontrado." />
        <Header />
        <main className="py-24 container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-3xl font-bold">Projeto não encontrado</h1>
            <Button asChild>
              <Link to="/projetos"><ArrowLeft className="w-4 h-4 mr-2" /> Voltar para projetos</Link>
            </Button>
          </div>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`Projeto: ${projeto.titulo} | AllSolutions`}
        description={`${projeto.setor} — ${projeto.desafio}`}
        canonical={window.location.origin + "/projetos/" + projeto.slug}
      />
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <Header />
      <ScrollToTop />
      
      <main className="pt-24 pb-16 bg-white">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-6">
          <Link to="/projetos" className="story-link inline-flex items-center text-sm text-gray-600">
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar
          </Link>
        </nav>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat">{projeto.titulo}</h1>
          <p className="text-gray-600 mt-2">{projeto.setor}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {projeto.stack.map(s => (
              <Badge key={s} variant="outline">{s}</Badge>
            ))}
          </div>
        </header>

        <Card className="overflow-hidden animate-fade-in">
          <img src={projeto.thumb} alt={`Imagem do projeto ${projeto.titulo}`} className="w-full h-72 object-cover" loading="lazy" />
          <CardContent className="p-6 grid md:grid-cols-2 gap-8">
            <article>
              <h2 className="text-2xl font-bold mb-2">Desafio</h2>
              <p className="text-gray-700 leading-relaxed">{projeto.desafio}</p>

              <h2 className="text-2xl font-bold mt-6 mb-2">Solução</h2>
              <p className="text-gray-700 leading-relaxed">{projeto.solucao}</p>
            </article>

            <aside>
              {projeto.resultados && projeto.resultados.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-2">Resultados</h2>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {projeto.resultados.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
              )}

              <div className="mt-6 space-x-3">
                {projeto.links.demo && (
                  <Button asChild>
                    <a href={projeto.links.demo} target="_blank" rel="noopener noreferrer">Abrir demo</a>
                  </Button>
                )}
              </div>
            </aside>
          </CardContent>
        </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjetoDetalhe;
