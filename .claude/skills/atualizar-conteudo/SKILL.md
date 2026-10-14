---
name: atualizar-conteudo
description: Adiciona ou altera conteúdo do site pessoal alisonamorim.com (artigos do LinkedIn, projetos pessoais, experiência, competências, certificações, pilares, textos do perfil e do hero) mantendo português e inglês, as categorias dos artigos, o SEO e os fatos do perfil profissional. Use quando pedirem para incluir um artigo novo, um projeto, uma mudança de cargo ou empresa, uma certificação, ou para revisar textos do site.
---

# Atualizar o conteúdo do site

O conteúdo mora em dois lugares: textos fixos no `index.html` (português no elemento, inglês em `data-en`) e listas em `assets/js/data.js` (`window.SITE_DATA`), montadas pelo `assets/js/app.js`. Siga a regra `site-conteudo`.

## Fatos primeiro
Cargo, empresa, período, números e certificações vêm da skill `perfil-alison-amorim`. Se o pedido traz um fato que não está lá, use o que a pessoa disse e avise que o perfil está desatualizado. Não invente métrica.

## Onde fica cada coisa

| O quê | Onde | Formato |
|---|---|---|
| Artigo do LinkedIn | `data.js` → `articles.all` (mais recente primeiro) | `{ t: 'Título', u: 'https://www.linkedin.com/feed/update/urn:li:activity:<ID>/' }` |
| Categoria do artigo | `app.js` → `CAT_BY_ID` | `'<ID>': 'ia' \| 'arq' \| 'perf' \| 'lid' \| 'prat'`; sem entrada cai em `prat` |
| Experiência | `data.js` → `experience` (mais recente primeiro) | `company`, `period` (texto ou `{pt,en}`), `role {pt,en}`, `bullets {pt:[],en:[]}`, `tags []` |
| Projeto pessoal | `data.js` → `projects` | `name`, `repo` (nome no GitHub de slipalison), `lang`, `pt`, `en`, `feat: true` para destaque |
| Competências | `data.js` → `stack` | `pt`, `en`, `hi` (destaques em negrito), `items` |
| Certificações | `data.js` → `certs` | `pt`, `en`, `year`, `lines {pt:[],en:[]}` |
| Pilares | `data.js` → `pillars` | `k`/`ke` (título), `pt`, `en` |
| Faixa rolante | `app.js` → `TICK` | listas `pt` e `en` do mesmo tamanho |

O ID do artigo é o número longo da URL (`urn:li:activity:<ID>`). Os contadores dos filtros se atualizam sozinhos.

`typed`, `articles.featured` e `articles.profileUrl` existem no `data.js` mas o `app.js` não os usa (sobra da primeira versão): editar ali não muda a página.

## Ao mudar cargo ou empresa atual
Atualize no mesmo commit: o item em `experience`, o `kicker` e o `hero-lede` se citarem o cargo, `<title>`, `meta description`, `og:*`, `twitter:*`, o JSON-LD `Person` (`jobTitle`, `worksFor`) e o `<lastmod>` do `sitemap.xml`.

## Conferir
1. `npm test`.
2. `npm run dev` e conferir em http://127.0.0.1:8787 nas duas línguas (botão PT/EN), em largura de celular (390 px) e desktop.
3. Commit `feat(conteudo): ...` ou `fix(conteudo): ...` (regra `commits`) e publicar com a skill `publicar-site`.
