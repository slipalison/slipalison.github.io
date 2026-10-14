---
name: commits
description: "Convenção de commits e PRs do site: Conventional Commits em pt-BR, validados pelo versao.py do github-workflows no hook commit-msg e de novo na esteira, onde a mensagem decide a versão e as notas da release"
---
<!-- Sem `paths:` de propósito: commit não depende de arquivo, então a regra vale em toda sessão. Versão curta da convenção do seu-governo (.claude/rules/commits.md lá); se a convenção mudar, mude nos dois. -->

# Commits e PRs (OBRIGATÓRIO)

Quem valida é o `bin/versao.py` do clone local de `slipalison/github-workflows` (`~/repos/github-workflows`): `conferir` no hook `commit-msg` e `calcular` na esteira (`versao.yml` reprova o push ou o PR; `lancar.yml` transforma os commits na tag e nas notas da release). Onde este arquivo e o `versao.py` divergirem, vale o `versao.py`.

## Formato

```
tipo(escopo)!: assunto          <- até 72 caracteres; vira a linha da release
                                <- linha em branco
Por quê, não o quê.

BREAKING CHANGE: o que quebra   <- só quando quebra
```

- Tipos: `feat` (minor), `fix` e `perf` (patch), `refactor`, `docs`, `test`, `build`, `ci`, `chore`, `style`, `revert` (patch). `!` ou rodapé `BREAKING CHANGE: ` = major. Todo tipo gera release.
- `: ` com exatamente um espaço; tipo em minúsculas; `!` só logo antes do `:`.
- Assunto e corpo em **pt-BR**, imperativo na terceira pessoa (`adiciona`, `corrige`, `remove`), inicial minúscula, sem ponto final.
- Escopos deste repositório: `site`, `conteudo`, `estilos`, `ux`, `seo`, `deploy`, `ci`, `claude`, `docs`. Só `[a-z0-9-]`. Reuse um existente antes de criar outro.

Exemplos: `feat(conteudo): adiciona o artigo sobre filas no .NET`, `fix(ux): mostra o foco do teclado nos filtros de artigos`, `build(deploy): troca o cache da mídia para uma semana`.

## Hook e esteira

- Este clone tem `core.hooksPath` em `~/repos/github-workflows/hooks`. Clone novo: `git config core.hooksPath ~/repos/github-workflows/hooks`. Nunca aponte para outro lugar, nunca use `--no-verify`.
- Testar uma mensagem antes: `python3 ~/repos/github-workflows/bin/versao.py conferir msg.txt` (arquivo fora do repositório).
- A esteira reprova só os commits do push ou do PR; os commits antigos sem tipo ficam como estão. Nunca reescreva a `main`.

## Disciplina

- Um assunto por commit. `npm test` verde antes de commitar.
- Staging explícito (`git add index.html assets/js/data.js`); nunca `git add -A`, `git add .` ou `git commit -a`. Leia o `git diff --cached` antes da mensagem.
- Commit que chegou na `main` é história: corrija para frente (`fix:`, `revert:`).

## PRs e merge

- A `main` só aceita PR (ruleset "main so por PR"). Abra o PR com título no mesmo formato.
- Merge por **rebase** (commits já atômicos e convencionais) ou **squash** com `--subject` convencional; nunca "Create a merge commit". Como dono do repositório: `gh pr merge <N> --rebase --admin`, só depois do `esteira / Portao` verde.
- O merge na `main` publica em produção (Cloudflare e GitHub Pages).
