import SEO from "@/components/SEO";

const Sobre = () => {
  return (
    <main className="min-h-screen py-24 bg-white">
      <SEO
        title="Sobre | AllSolutions"
        description="Quem somos: princípios, forma de trabalho e stack da AllSolutions."
        canonical={window.location.origin + "/sobre"}
      />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold font-montserrat">Sobre a AllSolutions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Unimos estratégia e engenharia para criar soluções digitais sob medida.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10">
          <article className="space-y-4">
            <h2 className="text-2xl font-bold">Nossa filosofia</h2>
            <p className="text-gray-700">
              Parceria acima de tudo. Cada projeto começa entendendo o objetivo do negócio, 
              definindo o menor produto viável e evoluindo com dados reais.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Clareza antes de código</li>
              <li>Entrega contínua e feedback rápido</li>
              <li>Qualidade e acessibilidade por padrão</li>
            </ul>
          </article>

          <aside className="space-y-4">
            <h2 className="text-2xl font-bold">Stack</h2>
            <p className="text-gray-700">React, TypeScript, Tailwind, Supabase, .NET/C#, SQL, automações (n8n), BI.</p>
            <h3 className="text-xl font-semibold mt-6">Como trabalhamos</h3>
            <ol className="list-decimal pl-5 text-gray-700 space-y-1">
              <li>Descoberta</li>
              <li>Protótipo</li>
              <li>Desenvolvimento</li>
              <li>Entrega e suporte</li>
            </ol>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
