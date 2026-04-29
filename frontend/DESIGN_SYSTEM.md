# 🎨 Design System — Headless CMS Frontend

Guia oficial do Design System implementado no frontend Next.js. Todos os tokens, componentes e regras definidos aqui devem ser utilizados por qualquer desenvolvedor que contribua com a interface do projeto.

---

## 📚 Stack de UI

| Camada | Tecnologia | Versão | Papel |
|--------|-----------|--------|-------|
| **Utilitários CSS** | Tailwind CSS | 4.x | Geração de classes utilitárias e design tokens via CSS Variables |
| **Componentes Base** | shadcn/ui | 4.6.0 (estilo `base-nova`) | Componentes headless, acessíveis e customizáveis |
| **Ícones** | Lucide React | 1.12.0 | Biblioteca de ícones SVG consistentes e tree-shakable |
| **Animações** | tw-animate-css | 1.4.0 | Animações de entrada/saída para componentes shadcn |
| **Tipografia** | Space Grotesk (Google Fonts) | — | Fonte principal para todos os textos da interface |
| **Linguagem** | TypeScript | 5.x | Tipagem estática nos componentes |

---

## 🎨 Paleta de Cores

O design system utiliza o espaço de cores **OKLCH** para garantir perceptual uniformity e acessibilidade. Os tokens são definidos em variáveis CSS e consumidos via Tailwind.

> [!NOTE]
> As cores são definidas em `frontend/src/app/globals.css`. O sistema suporta os modos **Light** e **Dark**. A aplicação inicializa em **Dark Mode** por padrão (classe `.dark` no `<html>`).

### 🌙 Modo Escuro (Padrão da Aplicação)

| Token | OKLCH | Hex Aproximado | Uso |
|-------|-------|---------------|-----|
| `--background` | `oklch(0.13 0.02 270)` | `#0d0b18` | Fundo principal das páginas |
| `--foreground` | `oklch(0.95 0.01 270)` | `#ece9f5` | Texto principal |
| `--card` | `oklch(0.17 0.03 270)` | `#131122` | Fundo de cards e modais |
| `--card-foreground` | `oklch(0.95 0.01 270)` | `#ece9f5` | Texto dentro de cards |
| **`--primary`** | `oklch(0.65 0.18 280)` | **`#7c5cbf`** | **Roxo vibrante — botões, links, destaques primários** |
| `--primary-foreground` | `oklch(0.13 0.02 270)` | `#0d0b18` | Texto sobre elementos primary |
| `--secondary` | `oklch(0.22 0.05 270)` | `#1c1930` | Fundos secundários, badges |
| `--muted` | `oklch(0.22 0.05 270)` | `#1c1930` | Elementos atenuados |
| `--muted-foreground` | `oklch(0.7 0.05 270)` | `#9d97b8` | Textos de suporte, metadados, datas |
| **`--accent`** | `oklch(0.6 0.15 250)` | **`#4d7bcc`** | **Azul de destaque — hovers, foco, links secundários** |
| `--accent-foreground` | `oklch(0.13 0.02 270)` | `#0d0b18` | Texto sobre elementos accent |
| `--border` | `oklch(0.22 0.05 270)` | `#1c1930` | Bordas de inputs, divisores |
| `--input` | `oklch(0.22 0.05 270)` | `#1c1930` | Fundo de campos de formulário |
| `--ring` | `oklch(0.6 0.15 250)` | `#4d7bcc` | Anel de foco (acessibilidade) |
| `--destructive` | `oklch(0.704 0.191 22.216)` | `#e05252` | Alertas de erro, ações destrutivas |

### ☀️ Modo Claro (Light Mode)

| Token | OKLCH | Hex Aproximado | Uso |
|-------|-------|---------------|-----|
| `--background` | `oklch(0.98 0.01 270)` | `#f5f4fa` | Fundo principal |
| `--foreground` | `oklch(0.15 0.05 270)` | `#1a1528` | Texto principal |
| `--primary` | `oklch(0.3 0.15 280)` | `#3b1f6b` | Roxo escuro — elementos de destaque |
| `--accent` | `oklch(0.5 0.15 250)` | `#2a5199` | Azul médio |

---

## ✍️ Tipografia

### Fonte Principal: Space Grotesk

Importada via `next/font/google` no `layout.tsx`, disponível globalmente como variável CSS `--font-space-grotesk`.

```tsx
// frontend/src/app/layout.tsx
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});
```

**Características:**
- Família: `Space Grotesk`, sans-serif
- Pesos disponíveis: 300, 400, 500, 600, 700
- Subconjunto: Latin
- Uso: Todos os textos — headings, parágrafos, labels, botões

### Escala Tipográfica (via Tailwind)

| Classe | Tamanho | Uso recomendado |
|--------|---------|----------------|
| `text-xs` | 12px | Metadados, datas, badges |
| `text-sm` | 14px | Descrições, placeholders |
| `text-base` | 16px | Corpo de texto |
| `text-lg` | 18px | Sub-títulos de seção |
| `text-xl` | 20px | Títulos de cards |
| `text-2xl` | 24px | Títulos de página |
| `text-4xl` | 36px | Hero headings |
| `text-6xl` | 60px | Display / Landing |

---

## 📐 Espaçamento e Layout

O sistema usa a escala padrão do Tailwind v4 (base 4px):

| Token | Valor | Uso |
|-------|-------|-----|
| `p-2` | 8px | Padding interno de badges |
| `p-4` | 16px | Padding padrão de cards |
| `p-6` | 24px | Padding de seções |
| `p-8` | 32px | Padding de páginas |
| `gap-4` | 16px | Espaçamento entre grid items |
| `gap-6` | 24px | Espaçamento entre seções |

---

## 🔲 Border Radius

Definido via variável `--radius: 0.5rem` e derivados:

| Token CSS | Valor | Classe Tailwind |
|-----------|-------|----------------|
| `--radius-sm` | `0.3rem` | `rounded-sm` |
| `--radius-md` | `0.4rem` | `rounded-md` |
| `--radius-lg` | `0.5rem` | `rounded-lg` |
| `--radius-xl` | `0.7rem` | `rounded-xl` |
| `--radius-2xl` | `0.9rem` | `rounded-2xl` |

---

## 📱 Responsividade

O sistema segue a abordagem **Mobile First** do Tailwind. Breakpoints padrão:

| Breakpoint | Min-width | Uso |
|-----------|----------|-----|
| (base) | 0px | Mobile — layout de coluna única |
| `sm:` | 640px | Tablets pequenos |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Desktops |
| `xl:` | 1280px | Desktops largos |
| `2xl:` | 1536px | Monitores ultrawide |

**Exemplo de uso responsivo:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards de notícia */}
</div>
```

---

## 🧩 Componentes Disponíveis

### Componentes shadcn/ui Instalados

| Componente | Arquivo | Uso |
|-----------|---------|-----|
| `Button` | `src/components/ui/button.tsx` | Botões de ação (variants: `default`, `secondary`, `outline`, `ghost`, `destructive`) |
| `Card` | `src/components/ui/card.tsx` | Cards de conteúdo (com `CardHeader`, `CardTitle`, `CardContent`, `CardFooter`, `CardDescription`) |

### Componentes Customizados

| Componente | Arquivo | Uso |
|-----------|---------|-----|
| `NewsCard` | `src/components/NewsCard.tsx` | Card de notícia composto com título, data, excerpt e botão |

### Exemplo de Uso — `NewsCard`

```tsx
import { NewsCard } from "@/components/NewsCard";

<NewsCard
  title="Título da Notícia"
  excerpt="Resumo do conteúdo da notícia em até 3 linhas..."
  date="29 de Abril, 2026"
/>
```

---

## 📏 Regras e Convenções

### ✅ Faça

- Use **sempre** as variáveis semânticas de cor (`bg-primary`, `text-muted-foreground`, `border-border`) em vez de cores Tailwind fixas (`bg-purple-700`).
- Use `cn()` de `@/lib/utils` para mesclar classes condicionalmente.
- Mantenha todos os novos componentes dentro de `src/components/`.
- Componentes primitivos/base do shadcn vão em `src/components/ui/`.
- Componentes de negócio compostos vão em `src/components/` diretamente.

### ❌ Não Faça

- Não use `style={{}}` inline com valores de cor fixos.
- Não adicione novas fontes — use apenas Space Grotesk.
- Não adicione imports do Tailwind dentro de componentes — o CSS global já importa tudo.
- Não crie variantes de cor que não existam nos tokens do `globals.css`.

---

## 🔧 Adicionando Novos Componentes shadcn/ui

```bash
cd frontend
npx shadcn@latest add <nome-do-componente>

# Exemplos:
npx shadcn@latest add badge
npx shadcn@latest add dialog
npx shadcn@latest add input
npx shadcn@latest add navigation-menu
```

---

> Consulte o [`README.md`](../README.md) para instruções de ambiente e o [`ARCHITECTURE.md`](../ARCHITECTURE.md) para o fluxo de dados.
