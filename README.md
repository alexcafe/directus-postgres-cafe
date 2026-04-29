# 🚀 Headless CMS — Ambiente Local de Desenvolvimento

Um ambiente moderno de CMS Headless construído com **PostgreSQL + Directus + Next.js**, totalmente orquestrado via **Docker Compose**. Projetado para times que precisam de liberdade criativa total na criação de páginas, notícias e conteúdo rico com editores modernos (Block Editor + WYSIWYG/HTML personalizado).

---

## 📋 Sumário

- [Visão Geral](#visão-geral)
- [Stack e Arquitetura](#stack-e-arquitetura)
- [Pré-requisitos](#pré-requisitos)
- [Estrutura do Monorepo](#estrutura-do-monorepo)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Rodando o Projeto](#rodando-o-projeto)
- [Acessando os Serviços](#acessando-os-serviços)
- [Credenciais Padrão](#credenciais-padrão)
- [Persistência de Dados](#persistência-de-dados)
- [Próximos Passos](#próximos-passos)

---

## 🎯 Visão Geral

Este projeto provê uma infraestrutura completa para um **CMS estilo WordPress**, porém construído com uma arquitetura moderna e desacoplada (Headless). Ele é capaz de:

- **Cadastrar e publicar notícias** com editores rich text ou de blocos.
- **Criar páginas institucionais** com liberdade total de HTML, CSS e JavaScript personalizado.
- **Gerenciar usuários** com diferentes papéis e permissões no painel do CMS.
- **Gerenciar menus** e configurar qual é a página principal do site.
- **Upload de imagens e documentos** diretamente pelo painel, com persistência local garantida.
- **Servir o conteúdo** via API REST/GraphQL para o frontend Next.js.

---

## 🛠️ Stack e Arquitetura

| Camada | Tecnologia | Versão | Função |
|--------|-----------|--------|--------|
| **Banco de Dados** | PostgreSQL | 16 | Armazenamento de todos os dados do CMS |
| **Headless CMS** | Directus | 11.1 | Painel de administração, API REST e GraphQL |
| **Frontend** | Next.js | 16.2.4 | Renderização das páginas para o usuário final |
| **Estilização** | Tailwind CSS | 4.x | Utilitários de CSS e Design System |
| **Componentes** | shadcn/ui | 4.6.0 | Biblioteca de componentes headless e acessíveis |
| **Ícones** | Lucide React | 1.12.0 | Biblioteca de ícones SVG consistentes |
| **Orquestração** | Docker Compose | v5+ | Gerenciamento dos containers locais |

---

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter os seguintes softwares instalados:

| Software | Versão Mínima | Link |
|----------|--------------|------|
| **Docker Desktop** | 4.x+ | [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/) |
| **Node.js** | 20.x LTS | [nodejs.org](https://nodejs.org/) |
| **npm** | 10.x | Incluso com Node.js |
| **Git** | 2.x | [git-scm.com](https://git-scm.com/) |

> [!IMPORTANT]
> O **Docker Desktop** deve estar aberto e em execução (ícone verde na bandeja do sistema) antes de rodar qualquer comando.

---

## 📁 Estrutura do Monorepo

```
cms_project/
│
├── docker-compose.yml       # Orquestração dos 3 serviços (Postgres, Directus, Next.js)
├── .env                     # Variáveis de ambiente (credenciais, portas, segredos)
│
├── uploads/                 # 📎 Arquivos enviados pelo CMS (imagens, documentos)
│                            #    Mapeado como volume do container Directus
│
├── extensions/              # 🔌 Extensões customizadas do Directus
│                            #    (flows, endpoints, hooks, interfaces personalizadas)
│
└── frontend/                # ⚛️  Aplicação Next.js (App Router)
    ├── src/
    │   ├── app/
    │   │   ├── layout.tsx   # Layout raiz com fonte Space Grotesk e dark mode
    │   │   ├── page.tsx     # Página inicial de demonstração
    │   │   └── globals.css  # Design tokens (paleta de cores, tipografia, raios)
    │   ├── components/
    │   │   ├── ui/          # Componentes base do shadcn/ui (Button, Card...)
    │   │   └── NewsCard.tsx # Componente de exemplo do Design System
    │   └── lib/
    │       └── utils.ts     # Utilitários (cn, clsx, tailwind-merge)
    ├── components.json      # Configuração do shadcn/ui
    ├── Dockerfile.dev       # Dockerfile para desenvolvimento local via Docker
    ├── package.json         # Dependências e scripts npm
    └── tsconfig.json        # Configuração TypeScript
```

---

## ⚙️ Configuração do Ambiente

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd cms_project
```

### 2. Revise o arquivo `.env`

O arquivo `.env` na raiz contém todas as variáveis necessárias. **Altere as credenciais antes de usar em qualquer ambiente que não seja puramente local:**

```env
# Directus CMS
DIRECTUS_SECRET=<troque-por-uma-chave-segura>
ADMIN_EMAIL=admin@admin.com
ADMIN_PASSWORD=admin

# Banco de Dados PostgreSQL
DB_CLIENT=pg
DB_HOST=postgres
DB_PORT=5432
DB_DATABASE=cms_db
DB_USER=cms_user
DB_PASSWORD=cms_pass

# Next.js Frontend
NEXT_PUBLIC_CMS_URL=http://localhost:8055
```

---

## 🐳 Rodando o Projeto

> [!NOTE]
> Todos os comandos abaixo devem ser executados **a partir da raiz do projeto** (`cms_project/`).

### Subir todos os serviços

```bash
docker compose up -d
```

O Docker irá:
1. Baixar as imagens do PostgreSQL e do Directus (apenas na primeira vez, pode levar alguns minutos).
2. Fazer o build do container do Next.js instalando as dependências npm.
3. Iniciar os 3 serviços em background.

### Verificar o status dos containers

```bash
docker compose ps
```

Todos os serviços devem mostrar o status `running`.

### Ver os logs em tempo real

```bash
# Todos os serviços
docker compose logs -f

# Apenas o CMS
docker compose logs -f directus

# Apenas o Frontend
docker compose logs -f frontend
```

### Parar os serviços

```bash
docker compose down
```

> [!WARNING]
> O comando `docker compose down` **preserva os dados** nos volumes. Para remover os dados permanentemente (reset total), use `docker compose down -v`.

---

## 🌐 Acessando os Serviços

Após rodar `docker compose up -d`, aguarde ~30 segundos e acesse:

| Serviço | URL | Descrição |
|---------|-----|-----------|
| **Frontend Next.js** | [http://localhost:3000](http://localhost:3000) | Interface pública do site |
| **Painel Directus (CMS)** | [http://localhost:8055](http://localhost:8055) | Administração de conteúdo |
| **API REST Directus** | [http://localhost:8055/items/{coleção}](http://localhost:8055/items/) | Dados via REST |
| **PostgreSQL** | `localhost:5432` | Banco de dados (use DBeaver, TablePlus, etc.) |

---

## 🔑 Credenciais Padrão

> [!CAUTION]
> As credenciais abaixo são **exclusivas para desenvolvimento local**. Nunca as utilize em produção.

| Serviço | Usuário / Email | Senha |
|---------|-----------------|-------|
| **Directus Admin** | `admin@admin.com` | `admin` |
| **PostgreSQL** | `cms_user` | `cms_pass` |

---

## 💾 Persistência de Dados

Os dados são preservados entre reinicializações de container através de **volumes Docker**:

| Volume | O que persiste |
|--------|---------------|
| `pgdata` (volume nomeado) | Todas as tabelas e dados do banco PostgreSQL |
| `./uploads` (bind mount) | Imagens e documentos enviados via painel do Directus |
| `./extensions` (bind mount) | Extensões e personalizações do Directus |

---

## 📈 Próximos Passos

1. **Modelar as coleções no Directus:** Acesse o painel em `localhost:8055` → `Settings > Data Model` e crie as coleções `Noticias`, `Paginas`, `Categorias` e `Menus`.
2. **Configurar a Página Principal:** Crie uma coleção Singleton chamada `Configuracoes_Globais` com um campo relacional apontando para `Paginas`.
3. **Consumir a API no Frontend:** Utilize `fetch` ou o SDK do Directus para buscar os dados no Next.js.
4. **Adicionar autenticação:** Configure roles e permissões no Directus para restringir acesso aos endpoints.

---

> Consulte o [`ARCHITECTURE.md`](./ARCHITECTURE.md) para o detalhamento do fluxo de dados e a [`frontend/DESIGN_SYSTEM.md`](./frontend/DESIGN_SYSTEM.md) para as diretrizes de UI.
