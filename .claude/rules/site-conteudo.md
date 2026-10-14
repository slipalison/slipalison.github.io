---
paths:
  - "index.html"
  - "404.html"
  - "assets/js/**"
---

# Conteúdo do site: bilíngue, consistente e verdadeiro

Vale ao mexer no HTML ou no JavaScript do site, além do piso de UX (`ux-piso`).

## PT e EN andam juntos
- Todo texto visível existe nas duas línguas. No HTML: português dentro do elemento e inglês em `data-en="..."` (o `app.js` troca o `innerHTML`). Em `assets/js/data.js`: pares `pt`/`en` (ou `k`/`ke`, `role.pt`/`role.en`, `bullets.pt`/`bullets.en`).
- Texto montado em `app.js` (rótulos, `aria-label`, contadores) segue o `lang` atual; `aria-label` que muda com a língua entra no objeto `ARIA`.
- O `data-en` é aplicado com `innerHTML`: só marcação simples e entidades (`&amp;`), nunca texto vindo de fora.

## Fatos
- Cargos, empresas, datas, números e certificações vêm do perfil profissional (skill `perfil-alison-amorim`). Não invente métrica nem cliente.
- Mudou cargo ou empresa atual: atualize junto `<title>`, `meta description`, Open Graph, Twitter e o JSON-LD `Person` (`jobTitle`, `worksFor`), e o `lastmod` do `sitemap.xml`.
- Endereço canônico é sempre `https://alisonamorim.com/`. Nunca volte a citar `slipalison.github.io` em meta, JSON-LD ou sitemap (o teste `npm test` reprova).

## Segurança e privacidade
- Nada de `style="..."` nem `<script>` inline executável: a CSP do `_headers` bloqueia. Estilo vai para `assets/css/editorial.css`; script para `assets/js/`.
- Origem externa nova (fonte, embed, API, imagem) exige acrescentá-la na CSP do `_headers`, com o motivo no comentário.
- O telefone é montado em tempo de execução (`app.js`) para dificultar coleta automática. Não o escreva no HTML.
- Links externos com `target="_blank"` levam `rel="noopener"`.

## Embeds e mídia
- Embed e imagem reservam espaço (altura fixa ou `aspect-ratio`) para não deslocar o layout (CLS ≤ 0,1).
- Os embeds do LinkedIn aparecem em branco em `localhost`/`127.0.0.1`: é bloqueio do LinkedIn, não bug. Confira em produção.
- Mídia nova em `assets/media/` já entra no build; arquivo novo na raiz precisa entrar em `PUBLICOS` (`scripts/build.mjs`).
