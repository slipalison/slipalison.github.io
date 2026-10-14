---
paths:
  - "wrangler.jsonc"
  - "_headers"
  - "scripts/**"
  - "test/**"
  - "package.json"
  - ".github/**"
---

# Publicação: Cloudflare Worker pela esteira

- **Quem publica é a esteira.** Merge na `main` → `pipeline.yml@main` do `slipalison/github-workflows` → `wrangler deploy` (peça `cloudflare.yml`) só com tudo verde. Não rode `wrangler deploy` à mão, nem crie workflow local de deploy: o que faltar na esteira entra lá, como peça reutilizável.
- **Secrets do repositório:** `CLOUDFLARE_API_TOKEN` (token de conta, modelo "Edit Cloudflare Workers", com a zona alisonamorim.com) e `CLOUDFLARE_ACCOUNT_ID`. Nunca escreva valores de token em arquivo, commit ou comando.
- **O que vai para o ar é `dist/`**, montado por `scripts/build.mjs` a partir da lista `PUBLICOS`. Lista de inclusão de propósito: arquivos do repositório (`package.json`, `CLAUDE.md`, `.claude/`) nunca podem ir para o ar. O `test/build.test.mjs` confere.
- **Domínios:** `alisonamorim.com` e `www` são `custom_domain` no `wrangler.jsonc`. O `www` vai para a raiz com 301 por uma Redirect Rule da zona (painel da Cloudflare). A zona tem um curinga `*.alisonamorim.com` para o túnel do homelab e subdomínios do Hermes e do nobreak: não mexa neles.
- **Cabeçalhos:** `_headers` vale para Worker de assets (não é servido como arquivo). A CSP lista cada origem externa; o HSTS vem da zona.
- **GitHub Pages** continua publicando a `main` em slipalison.github.io, com o canonical apontando para alisonamorim.com.
- **Antes do PR:** `npm test` e `npm run dev` (wrangler local em http://127.0.0.1:8787). **Depois do merge:** skill `publicar-site`, passo de verificação em produção.
- Versões fixas no `package.json` (sem `^`), com `package-lock.json` no repositório: a esteira usa `npm ci --ignore-scripts` e `npx --no-install wrangler`.
