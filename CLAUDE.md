# Site pessoal de Alison Amorim

Portfólio de uma página em https://alisonamorim.com (e www, que redireciona para a raiz). HTML, CSS e JavaScript puros, sem framework; tema editorial preto e branco, bilíngue PT/EN. Também publicado em https://slipalison.github.io pelo GitHub Pages, com o canonical no domínio próprio.

## Estrutura

```
index.html               estrutura, textos em PT (inglês em data-en), meta, Open Graph, JSON-LD Person
404.html                 página de erro, servida pelo Worker para endereço inexistente
assets/css/editorial.css todo o estilo (tokens em :root)
assets/js/data.js        conteúdo bilíngue em listas (experiência, projetos, artigos, competências, certificações)
assets/js/app.js         troca de língua, montagem das seções, carrossel de embeds do LinkedIn, parallax
assets/media/            vídeo do hero e fotos das faixas
_headers                 CSP e cabeçalhos de segurança do Worker
scripts/build.mjs        monta dist/ com a lista fechada de arquivos públicos
test/build.test.mjs      confere dist/ (sem vazamento, referências, canonical, sem style inline)
wrangler.jsonc           Worker "alisonamorim": assets de dist/, domínios alisonamorim.com e www
.github/workflows/ci.yml chamada fina ao pipeline.yml do slipalison/github-workflows
```

## Comandos

- `npm install`: wrangler, playwright e axe, em versões fixas.
- `npm test`: build e checagens. Rode antes de todo commit.
- `npm run dev`: build e wrangler local em http://127.0.0.1:8787, com os cabeçalhos de produção.
- Auditoria de UX: skill `leis-de-ux:ux-revisar <url>` (usa o playwright deste projeto).

## Publicação

Merge na `main` publica: a esteira do `github-workflows` roda versão, qualidade e segurança e, com tudo verde, `wrangler deploy` e a release. A `main` só aceita PR. Passo a passo e verificação em produção: skill `publicar-site`. Detalhes de domínio, secrets e cabeçalhos: regra `publicacao`.

## Regras e skills deste projeto

- `.claude/rules/commits.md`: Conventional Commits em pt-BR; o hook e a esteira reprovam fora do padrão.
- `.claude/rules/site-conteudo.md`: PT e EN juntos, fatos do perfil, CSP, telefone fora do HTML.
- `.claude/rules/publicacao.md`: o que vai para o ar, domínios, secrets, deploy só pela esteira.
- `.claude/rules/leis-de-ux/`: link local para `~/repos/leis-de-ux/regras` (piso de UX sempre ativo; estilos web ao mexer em CSS e `index.html`). Fica fora do git porque o kit é privado. Clone novo: `~/repos/leis-de-ux/scripts/instalar-regras.sh projeto .`
- Plugin `leis-de-ux` (`.claude/settings.json`): skills `ux-criar`, `ux-revisar`, `ux-leis`, subagente `ux-revisor` e o hook que avisa sobre erros comuns de interface.
- Skills `publicar-site` e `atualizar-conteudo`. Para fatos de carreira, a skill `perfil-alison-amorim`.

## Leis de UX que mais pesam aqui

Página de perfil (home/landing): Estética-usabilidade, Von Restorff, Atenção seletiva, Jakob, Posição serial. A tarefa principal de quem visita é entender quem é Alison e entrar em contato; a ação primária é o contato (e-mail ou LinkedIn).

## Armadilhas conhecidas

- Embeds do LinkedIn ficam em branco em localhost; só dá para conferir em produção.
- Toda origem externa nova precisa entrar na CSP do `_headers`, ou o navegador bloqueia em silêncio.
- Arquivo novo na raiz do site precisa entrar em `PUBLICOS` (`scripts/build.mjs`); o que fica em `assets/` entra sozinho.
- A zona alisonamorim.com tem um curinga `*` para o túnel do homelab e subdomínios do Hermes e do nobreak. Não mexa neles.
