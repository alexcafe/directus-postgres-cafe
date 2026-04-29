# 🏗️ Arquitetura do Sistema — Headless CMS

Este documento descreve a arquitetura técnica, o fluxo de dados, a topologia dos containers e as decisões de design do projeto.

---

## 📐 Visão Geral

O projeto adota o padrão **JAMstack / Headless CMS**, onde backend (CMS + banco) e frontend são completamente desacoplados, comunicando-se via **HTTP API** (REST ou GraphQL).

---

## 🗺️ Topologia de Containers

```mermaid
graph TD
    subgraph Host["Máquina Local"]
        Browser1["🌐 Visitante — localhost:3000"]
        Browser2["🔧 Editor/Admin — localhost:8055"]
        DBClient["🗄️ DB Client — localhost:5432"]
    end

    subgraph Docker["Docker Network: cms-network"]
        FE["cms_frontend\nNext.js :3000"]
        DIR["cms_directus\nDirectus :8055"]
        PG["cms_postgres\nPostgreSQL :5432"]
    end

    Browser1 -->|"HTTP"| FE
    Browser2 -->|"HTTP"| DIR
    DBClient -->|"TCP/SQL"| PG
    FE -->|"REST API HTTP\ncms_directus:8055"| DIR
    DIR -->|"SQL\ncms_postgres:5432"| PG
```

---

## 🔄 Fluxo de Dados — Requisição de Página

```mermaid
sequenceDiagram
    actor Visitor as Visitante (Browser)
    participant FE as Frontend (Next.js :3000)
    participant CMS as Directus CMS (:8055)
    participant DB as PostgreSQL (:5432)

    Visitor->>FE: GET /noticias/slug-da-noticia
    FE->>CMS: GET /items/Noticias?filter[slug][_eq]=slug
    CMS->>DB: SELECT * FROM Noticias WHERE slug = 'slug'
    DB-->>CMS: { id, title, content, image, ... }
    CMS-->>FE: 200 OK — JSON { data: { ... } }
    FE->>FE: Renderiza componente da página
    FE-->>Visitor: HTML + CSS + JS
```

---

## 🔄 Fluxo — Publicação de Conteúdo pelo Editor

```mermaid
sequenceDiagram
    actor Editor as Editor (Painel Directus)
    participant CMS as Directus CMS (:8055)
    participant FS as uploads/ (bind mount)
    participant DB as PostgreSQL (:5432)

    Editor->>CMS: Upload de imagem + preenche campos da Notícia
    CMS->>FS: Salva arquivo em /directus/uploads/uuid.jpg
    FS-->>CMS: OK — caminho salvo
    CMS->>DB: INSERT INTO Noticias (title, content, image_id...)
    DB-->>CMS: { id: 42 }
    CMS-->>Editor: 200 OK — Item criado
    Note over Editor,DB: Imagem acessível em localhost:8055/assets/uuid
```

---

## 🗄️ Modelo de Dados (Coleções Planejadas)

```mermaid
erDiagram
    NOTICIAS {
        uuid id PK
        string titulo
        string slug
        text conteudo
        uuid imagem_destaque FK
        string status
        datetime data_publicacao
        uuid categoria FK
    }
    PAGINAS {
        uuid id PK
        string titulo
        string slug
        json blocos_conteudo
        string status
    }
    CATEGORIAS {
        uuid id PK
        string nome
        string slug
    }
    MENUS {
        uuid id PK
        string nome
        string localizacao
    }
    ITENS_DE_MENU {
        uuid id PK
        uuid menu_id FK
        string rotulo
        string url
        int ordem
        uuid item_pai FK
    }
    CONFIGURACOES_GLOBAIS {
        int id PK
        uuid pagina_principal FK
        string nome_do_site
    }
    NOTICIAS ||--o{ CATEGORIAS : "pertence a"
    MENUS ||--|{ ITENS_DE_MENU : "contém"
    ITENS_DE_MENU }o--o| ITENS_DE_MENU : "submenu de"
    CONFIGURACOES_GLOBAIS }o--|| PAGINAS : "página principal"
```

---

## 🏛️ Decisões de Arquitetura (ADRs)

| # | Decisão | Alternativas | Justificativa |
|---|---------|-------------|---------------|
| 1 | **Directus** como CMS | Strapi, Sanity | Espelha o schema do PostgreSQL nativamente; suporte a Block Editor + WYSIWYG + HTML livre |
| 2 | **PostgreSQL 16** | MySQL, SQLite | Tipagem forte, suporte a JSON, Full-Text Search e melhor integração com Directus |
| 3 | **Next.js App Router** | Pages Router, Remix | Server Components eliminam waterfalls e reduzem JS no cliente |
| 4 | **Bind-mount** para `uploads/` | Volume nomeado | Facilita backup e inspeção direta dos arquivos no Windows |
| 5 | **CORS no Directus** | Nginx reverso | Mais simples para desenvolvimento local |

---

> Consulte o [`README.md`](./README.md) para instruções de instalação e o [`frontend/DESIGN_SYSTEM.md`](./frontend/DESIGN_SYSTEM.md) para as diretrizes visuais.
