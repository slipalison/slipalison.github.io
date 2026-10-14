#!/usr/bin/env bash
# Confere o site publicado: domínio, redirecionamento do www, cabeçalhos,
# página 404 e que nenhum arquivo do repositório está no ar.
#
# Uso: verificar-producao.sh [https://alisonamorim.com]
set -uo pipefail

BASE="${1:-https://alisonamorim.com}"
BASE="${BASE%/}"
WWW="https://www.${BASE#https://}"
falhas=0
ok() { printf '  ok     %s\n' "$1"; }
erro() { printf '  FALHA  %s\n' "$1"; falhas=$((falhas + 1)); }
codigo() { curl -s -o /dev/null -w '%{http_code}' --max-time 15 "$1"; }

echo "Verificando $BASE"

[ "$(codigo "$BASE/")" = 200 ] && ok "a raiz responde 200" || erro "a raiz não responde 200"

veio=$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' --max-time 15 "$WWW/teste?x=1")
[ "$veio" = "301 $BASE/teste?x=1" ] \
  && ok "www redireciona com 301, mantendo caminho e query" \
  || erro "www: esperado '301 $BASE/teste?x=1', veio '$veio'"

cabecalhos=$(curl -sI --max-time 15 "$BASE/")
for h in content-security-policy x-content-type-options referrer-policy strict-transport-security; do
  grep -qi "^$h:" <<<"$cabecalhos" && ok "cabeçalho $h" || erro "falta o cabeçalho $h"
done

for p in /package.json /package-lock.json /CLAUDE.md /README.md /wrangler.jsonc /_headers /.claude/settings.json /scripts/build.mjs; do
  [ "$(codigo "$BASE$p")" = 404 ] && ok "$p não está no ar" || erro "$p está acessível"
done

pagina404=$(curl -s -w '\n%{http_code}' --max-time 15 "$BASE/pagina-que-nao-existe")
[ "${pagina404##*$'\n'}" = 404 ] && grep -q 'Página não encontrada' <<<"$pagina404" \
  && ok "endereço inexistente devolve a 404 do site" \
  || erro "endereço inexistente não devolve a 404 do site"

curl -s --max-time 15 "$BASE/" | grep -q '<link rel="canonical" href="https://alisonamorim.com/"' \
  && ok "canonical no domínio próprio" || erro "canonical fora do domínio próprio"

echo
if [ "$falhas" -eq 0 ]; then echo "Tudo certo em $BASE."; else echo "$falhas falha(s) em $BASE."; exit 1; fi
