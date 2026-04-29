import Link from "next/link";
import { ArrowRight, Code2, Database, Globe, LineChart, Menu, Rocket, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NewsCard } from "@/components/NewsCard";

// ─────────────────────────────────────────────────────────────────────────────
// DADOS ESTÁTICOS — Em produção, estes dados virão da API do Directus:
//   fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/items/noticias?limit=3&sort=-date_published`)
// ─────────────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: Code2,
    title: "Desenvolvimento de Sistemas",
    description:
      "Criamos sistemas web e mobile sob medida, desde MVPs ágeis até plataformas enterprise de alta complexidade.",
  },
  {
    icon: LineChart,
    title: "Consultoria Estratégica",
    description:
      "Diagnóstico técnico, arquitetura de solução e roadmap de produto para times que precisam escalar com segurança.",
  },
  {
    icon: Database,
    title: "Engenharia de Dados",
    description:
      "Pipelines de dados, dashboards analíticos e integrações entre sistemas legados e plataformas modernas.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança & Compliance",
    description:
      "Auditoria de código, hardening de infraestrutura e adequação à LGPD para empresas de todos os portes.",
  },
  {
    icon: Globe,
    title: "Headless & APIs",
    description:
      "Arquiteturas desacopladas com Next.js, CMSs headless e APIs REST/GraphQL prontas para escalar.",
  },
  {
    icon: Rocket,
    title: "DevOps & Cloud",
    description:
      "Containerização, CI/CD, provisionamento em AWS/GCP e observabilidade com dashboards em tempo real.",
  },
];

const STATS = [
  { value: "120+", label: "Projetos entregues" },
  { value: "40+", label: "Clientes ativos" },
  { value: "8 anos", label: "No mercado" },
  { value: "98%", label: "Satisfação" },
];

const NEWS = [
  {
    title: "RQH lança plataforma de gestão para cooperativas",
    excerpt:
      "A solução integra ERP, CRM e portal do associado em um único sistema cloud-native desenvolvido com Next.js e PostgreSQL.",
    date: "28 de Abril, 2026",
    category: "Produto",
  },
  {
    title: "Como reduzimos em 60% o tempo de onboarding com automações",
    excerpt:
      "Nosso time de consultoria mapeou os gargalos de um cliente do setor financeiro e implementou workflows automatizados que transformaram o processo.",
    date: "22 de Abril, 2026",
    category: "Case",
  },
  {
    title: "Arquitetura Headless: por que migramos nossos clientes para esse modelo",
    excerpt:
      "Velocidade, flexibilidade e SEO nativo. Entenda os critérios técnicos e de negócio que nos levam a recomendar CMSs headless.",
    date: "15 de Abril, 2026",
    category: "Tecnologia",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTES DA PÁGINA
// ─────────────────────────────────────────────────────────────────────────────

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-primary">RQH</span>
          <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase mt-1">
            Tech Solutions
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {["Serviços", "Cases", "Sobre", "Blog"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Entrar
          </Button>
          <Button size="sm">Fale conosco</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Gradient orbs de fundo */}
      <div
        aria-hidden
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.65 0.18 280), oklch(0.6 0.15 250), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <Badge variant="secondary" className="mb-6 text-xs tracking-wider uppercase">
          Tecnologia que gera resultado
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
          Transformamos{" "}
          <span
            style={{
              background: "linear-gradient(135deg, oklch(0.65 0.18 280), oklch(0.6 0.15 250))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ideias complexas
          </span>{" "}
          em sistemas que escalam.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          A RQH desenvolve software sob medida, presta consultoria técnica e entrega soluções de
          engenharia de dados para empresas que precisam crescer com solidez.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2">
            Conheça nossos serviços <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Ver cases de sucesso
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-border">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="serviços" className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-xs tracking-wider uppercase">
            O que fazemos
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Soluções completas para o seu negócio
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Do código à estratégia, atuamos em todas as camadas técnicas para que sua empresa
            acelere com confiança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-card/80 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-base mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="py-24 px-6">
      <div
        className="max-w-5xl mx-auto rounded-2xl p-12 md:p-16 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.2 0.08 280), oklch(0.18 0.07 250))",
          border: "1px solid oklch(0.35 0.12 270 / 40%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at top right, oklch(0.65 0.18 280 / 30%), transparent 60%)",
          }}
        />
        <div className="relative">
          <Zap className="h-10 w-10 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Pronto para dar o próximo passo?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Conte-nos sobre o seu desafio e nossa equipe retornará em até 24h com uma proposta
            técnica personalizada.
          </p>
          <Button size="lg" className="gap-2">
            Solicitar diagnóstico gratuito <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section id="blog" className="py-24 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <Badge variant="secondary" className="mb-4 text-xs tracking-wider uppercase">
              Blog e Insights
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Últimas publicações
            </h2>
          </div>
          <Button variant="outline" className="gap-2 w-fit">
            Ver todas as notícias <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS.map((news) => (
            <NewsCard
              key={news.title}
              title={news.title}
              excerpt={news.excerpt}
              date={news.date}
              category={news.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <span className="text-xl font-bold text-primary">RQH</span>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs">
            Transformando desafios tecnológicos em vantagens competitivas desde 2018.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          {[
            { title: "Empresa", links: ["Sobre nós", "Carreiras", "Contato"] },
            { title: "Serviços", links: ["Desenvolvimento", "Consultoria", "DevOps"] },
            { title: "Conteúdo", links: ["Blog", "Cases", "Newsletter"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="font-semibold mb-3">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
        <p>© 2026 RQH Tech Solutions. Todos os direitos reservados.</p>
        <p>Desenvolvido com Next.js + Directus + PostgreSQL</p>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PÁGINA PRINCIPAL
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CtaBanner />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
