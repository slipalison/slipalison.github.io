# slipalison.github.io

Portfólio interativo de **Alison Amorim** — Tech Manager / Principal Engineer.

🔗 **Ao vivo:** https://slipalison.github.io/

Site estático (HTML/CSS/JS puro, sem build) com tema dark elegante, fundo aurora animado, contadores, timeline de carreira, grid de stack, projetos extraídos dos repositórios e **toggle de idioma PT/EN**. Conteúdo derivado do currículo profissional.

## Estrutura

```
index.html              # estrutura + conteúdo PT inline (data-en p/ toggle)
assets/css/styles.css   # tema dark elegante + gradiente, animações, responsivo
assets/js/data.js       # conteúdo bilíngue (stats, stack, timeline, projetos, certs)
assets/js/app.js        # i18n, typing, count-up, scroll reveal, spotlight, stars ao vivo
favicon.svg             # monograma AA em gradiente
```

## Rodar localmente

Qualquer servidor estático. Ex.:

```bash
python -m http.server 8080
# abra http://localhost:8080
```

## Recursos

- 🌗 Tema dark elegante com gradiente violeta → azul e fundo aurora animado
- 🌐 Bilíngue PT/EN (persiste a escolha em `localStorage`)
- ⌨️ Efeito de digitação rotativo · contadores animados · scroll reveal
- ⭐ Contagem de estrelas dos repositórios hidratada ao vivo pela API do GitHub
- ♿ Respeita `prefers-reduced-motion` · responsivo

---

Feito com capricho. Sem frameworks, sem build step.
