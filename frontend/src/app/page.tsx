import { NewsCard } from "@/components/NewsCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-24 bg-background">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center font-sans text-center gap-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary">
          Headless CMS Local
        </h1>
        <p className="text-muted-foreground max-w-[600px] text-lg">
          Este é o ambiente de desenvolvimento usando Next.js, Directus, PostgreSQL e o novo Design System em tons frios com a tipografia Space Grotesk.
        </p>
        
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 w-full place-items-center">
          <NewsCard 
            title="A Nova Era dos Sistemas de Gerenciamento" 
            excerpt="Descubra como arquiteturas Headless combinadas com frameworks modernos como Next.js entregam performance inigualável."
            date="28 de Abril, 2026"
          />
          <NewsCard 
            title="Design System: Consistência Visual" 
            excerpt="A importância de adotar paletas de cores unificadas e tipografia moderna para guiar a interface do usuário."
            date="27 de Abril, 2026"
          />
          <NewsCard 
            title="PostgreSQL como Single Source of Truth" 
            excerpt="A espinha dorsal dos dados da aplicação moderna. Confiabilidade e integridade para plataformas escaláveis."
            date="26 de Abril, 2026"
          />
        </div>
      </div>
    </main>
  );
}
