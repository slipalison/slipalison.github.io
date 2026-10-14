---
name: publicar-site
description: Publica uma mudança do site alisonamorim.com do começo ao fim e confere o resultado no ar. Confere localmente, abre o PR com commits convencionais, faz o merge depois da esteira verde, acompanha o deploy na Cloudflare e verifica produção (raiz, redirecionamento do www, cabeçalhos, 404, nenhum arquivo do repositório exposto) e a UX com a auditoria do kit leis-de-ux. Use para publicar, fazer deploy, subir para produção ou conferir se o site no ar está certo.
allowed-tools: Bash(bash ${CLAUDE_SKILL_DIR}/verificar-producao.sh *)
---

# Publicar o site

O caminho é sempre PR → esteira verde → merge na `main` → deploy automático. Nunca `wrangler deploy` à mão (regra `publicacao`).

## 1. Antes do PR
1. `npm test`: build e checagens (nada do repositório em `dist/`, referências locais existem, canonical, sem `style=""`).
2. `npm run dev` e abrir http://127.0.0.1:8787: conferir a mudança no navegador. O console não pode ter violação de CSP (`securitypolicyviolation`). Embeds do LinkedIn em branco em localhost são esperados.
3. Mudou interface (HTML, CSS, JS)? Rode a auditoria do kit no servidor local antes de abrir o PR (passo 5, com a URL local).

## 2. Commits e PR
- Commits em pt-BR no formato da regra `commits` (o hook valida). Staging com caminhos explícitos.
- `git push -u origin <branch>` e `gh pr create` com título convencional; o corpo diz o porquê.

## 3. Esteira e merge
- `gh pr checks <N> --watch` até o `esteira / Portao` ficar verde. Falhou: `gh run view <id> --log-failed`, corrija com commit novo.
- Merge: `gh pr merge <N> --rebase --admin` (commits atômicos) ou `--squash --subject "<tipo(escopo): assunto>"`. Confirme com a pessoa antes: o merge publica em produção.

## 4. Deploy
- `gh run list --branch main --limit 1` e `gh run watch <id>`. O job `esteira / cloudflare / Cloudflare` roda o `wrangler deploy`; depois o `lancar` cria a tag `vX.Y.Z` e a release.
- Falha no deploy com erro de autenticação: o secret `CLOUDFLARE_API_TOKEN` está ausente, vencido ou sem a zona alisonamorim.com. Quem cria e grava o token é a pessoa, nunca o assistente.

## 5. Verificação em produção
1. Infraestrutura:
   ```bash
   bash ${CLAUDE_SKILL_DIR}/verificar-producao.sh https://alisonamorim.com
   ```
   Confere 200 na raiz, 301 do www para a raiz mantendo caminho e query, CSP, nosniff, referrer-policy e HSTS, a 404 do site e que `package.json`, `CLAUDE.md`, `.claude/`, `wrangler.jsonc` e afins dão 404.
2. UX: a skill `leis-de-ux:ux-revisar` com a URL de produção, ou o subagente `leis-de-ux:ux-revisor` para uma revisão com contexto limpo. A auditoria automática usa o `playwright` e o `@axe-core/playwright` deste projeto; rode do diretório do projeto e mande a saída para `auditoria-ux/` (ignorada pelo git).
3. No navegador, em produção: os embeds do LinkedIn carregam, as estrelas dos repositórios aparecem, o console não tem violação de CSP.

## 6. Relato
Diga o que foi publicado (tag e commit), o resultado de cada verificação e o que ficou pendente. Achados de UX de severidade 3 ou 4 viram PR de correção; os demais vão para a pessoa decidir.
