# alisonamorim.com

Portfólio de **Alison Amorim** — Tech Manager / Principal Engineer.

🔗 **Ao vivo:** https://alisonamorim.com (cópia em https://slipalison.github.io, com canonical no domínio próprio)

Site estático (HTML/CSS/JS puro, sem framework), publicado como Cloudflare Worker com assets estáticos. Tema **editorial preto & branco**, tipografia bold (Syne), hero em vídeo, faixas com parallax, **toggle de idioma PT/EN** e carrossel de artigos com **embeds do LinkedIn** filtrados por categoria. Conteúdo derivado do currículo profissional.

## Estrutura

```
index.html               # estrutura + conteúdo PT inline (data-en p/ toggle) + SEO (JSON-LD Person)
assets/css/editorial.css # tema P&B editorial, grids, parallax, responsivo
assets/js/data.js        # conteúdo bilíngue (pilares, stats, stack, timeline, projetos, artigos, certs)
assets/js/app.js         # i18n, builders, carrossel de embeds, parallax, scroll reveal
assets/media/            # vídeo do hero (fachada) + imagens das faixas (P&B)
favicon.svg · robots.txt · sitemap.xml · 404.html
_headers                 # CSP e cabeçalhos de segurança do Worker
scripts/build.mjs        # monta dist/ só com os arquivos públicos
test/build.test.mjs      # confere dist/ (nada do repositório vai para o ar)
wrangler.jsonc           # Worker "alisonamorim" e domínios alisonamorim.com / www
```

## Rodar localmente

```bash
npm install
npm test        # build + checagens
npm run dev     # wrangler local em http://127.0.0.1:8787, com os cabeçalhos de produção
```

Os embeds do LinkedIn aparecem em branco em localhost; confira em produção.

## Publicar

Merge na `main` publica. A esteira do [`github-workflows`](https://github.com/slipalison/github-workflows) roda versão (Conventional Commits em pt-BR), build e testes e varreduras de segurança; com tudo verde, `wrangler deploy` publica em https://alisonamorim.com e a release é criada. Secrets do repositório: `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID`.

## Recursos

- ⬛ Editorial preto & branco, tipografia Syne bold, seções full-bleed alternando preto/branco
- 🎬 Hero em vídeo + faixas com parallax (`background-attachment: fixed`)
- 🌐 Bilíngue PT/EN (persiste em `localStorage`)
- 🗂️ Carrossel de artigos com embeds do LinkedIn, filtrável por categoria (IA, Arquitetura, Performance, Liderança, Práticas)
- 🔎 SEO: JSON-LD `Person`, Open Graph, sitemap
- ⭐ Contagem de estrelas dos repos hidratada ao vivo pela API do GitHub
- ♿ Respeita `prefers-reduced-motion` · responsivo

---

Sem frameworks. O único build é copiar os arquivos públicos para `dist/`.

## Atualizar artigos

Para adicionar um artigo: inclua `{ t: 'Título', u: 'https://www.linkedin.com/feed/update/urn:li:activity:ID/' }` no array `articles.all` em `assets/js/data.js` e mapeie a categoria pelo ID em `CAT_BY_ID` (`assets/js/app.js`). Os contadores dos filtros se atualizam sozinhos.
