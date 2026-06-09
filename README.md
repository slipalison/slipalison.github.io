# slipalison.github.io

Portfólio de **Alison Amorim** — Tech Manager / Principal Engineer.

🔗 **Ao vivo:** https://slipalison.github.io/

Site estático (HTML/CSS/JS puro, sem build). Tema **editorial preto & branco**, tipografia bold (Syne), hero em vídeo, faixas com parallax, **toggle de idioma PT/EN** e carrossel de artigos com **embeds do LinkedIn** filtrados por categoria. Conteúdo derivado do currículo profissional.

## Estrutura

```
index.html               # estrutura + conteúdo PT inline (data-en p/ toggle) + SEO (JSON-LD Person)
assets/css/editorial.css # tema P&B editorial, grids, parallax, responsivo
assets/js/data.js        # conteúdo bilíngue (pilares, stats, stack, timeline, projetos, artigos, certs)
assets/js/app.js         # i18n, builders, carrossel de embeds, parallax, scroll reveal
assets/media/            # vídeo do hero (fachada) + imagens das faixas (P&B)
favicon.svg · robots.txt · sitemap.xml
```

## Rodar localmente

```bash
python -m http.server 8080
# abra http://localhost:8080
```

## Recursos

- ⬛ Editorial preto & branco, tipografia Syne bold, seções full-bleed alternando preto/branco
- 🎬 Hero em vídeo + faixas com parallax (`background-attachment: fixed`)
- 🌐 Bilíngue PT/EN (persiste em `localStorage`)
- 🗂️ Carrossel de artigos com embeds do LinkedIn, filtrável por categoria (IA, Arquitetura, Performance, Liderança, Práticas)
- 🔎 SEO: JSON-LD `Person`, Open Graph, sitemap
- ⭐ Contagem de estrelas dos repos hidratada ao vivo pela API do GitHub
- ♿ Respeita `prefers-reduced-motion` · responsivo

---

Sem frameworks, sem build step.

## Atualizar artigos

Para adicionar um artigo: inclua `{ t: 'Título', u: 'https://www.linkedin.com/feed/update/urn:li:activity:ID/' }` no array `articles.all` em `assets/js/data.js` e mapeie a categoria pelo ID em `CAT_BY_ID` (`assets/js/app.js`). Os contadores dos filtros se atualizam sozinhos.
