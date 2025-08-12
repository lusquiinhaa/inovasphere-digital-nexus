import { useMemo, useState } from "react";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import projects from "@/data/projetos.json";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

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

const Projetos = () => {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const allTags = useMemo(
    () => Array.from(new Set(projects.flatMap((p: Projeto) => p.stack))).sort(),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (projects as Projeto[]).filter((p) => {
      const matchesQuery = !q ||
        p.titulo.toLowerCase().includes(q) ||
        p.setor.toLowerCase().includes(q) ||
        p.desafio.toLowerCase().includes(q) ||
        p.solucao.toLowerCase().includes(q);
      const matchesTag = !tag || p.stack.includes(tag);
      return matchesQuery && matchesTag;
    });
  }, [query, tag]);

  return (
    <main className="min-h-screen py-24 bg-gradient-hero">
      <SEO
        title="Projetos | AllSolutions"
        description="Portfólio com estudos e demos: sites, apps e automações que resolvem problemas reais."
        canonical={window.location.origin + "/projetos"}
      />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold font-montserrat">
            Projetos
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Casos práticos e demos que mostram nosso jeito de construir soluções enxutas e eficazes.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <Input
            placeholder="Buscar por nome, setor ou solução..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 max-w-xl"
          />

          <div className="flex flex-wrap gap-2">
            <Badge
              variant={tag === null ? "default" : "outline"}
              className="cursor-pointer hover-scale"
              onClick={() => setTag(null)}
            >
              Todos
            </Badge>
            {allTags.map((t) => (
              <Badge
                key={t}
                variant={tag === t ? "default" : "outline"}
                className="cursor-pointer hover-scale"
                onClick={() => setTag(tag === t ? null : t)}
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <Card key={p.slug} className="overflow-hidden hover:shadow-2xl transition-shadow animate-fade-in">
              <div className="relative">
                <img
                  src={p.thumb}
                  alt={`Thumb do projeto ${p.titulo}`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h2 className="text-xl font-bold font-montserrat">{p.titulo}</h2>
                  <p className="text-sm text-gray-500">{p.setor}</p>
                </div>

                <p className="text-gray-700 text-sm"><strong>Desafio:</strong> {p.desafio}</p>
                <p className="text-gray-700 text-sm"><strong>Solução:</strong> {p.solucao}</p>

                {p.resultados && p.resultados.length > 0 && (
                  <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                    {p.resultados.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="px-2 py-1 bg-gray-100 rounded text-xs">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {p.links.demo && (
                    <Button asChild>
                      <a href={p.links.demo} target="_blank" rel="noopener noreferrer">
                        Abrir demo <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" asChild>
                    <Link to={`/projetos/${p.slug}`}>
                      Ver estudo de caso <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projetos;
