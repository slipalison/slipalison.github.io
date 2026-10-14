// Monta dist/, a pasta que o Worker serve (wrangler.jsonc > assets.directory).
//
// Lista de INCLUSÃO, e não de exclusão: o repositório também guarda
// package.json, CLAUDE.md, .claude/, scripts/ e test/, e nada disso pode ir
// para o ar por esquecimento. O custo é este: arquivo novo na raiz do site
// precisa entrar em PUBLICOS. O que fica em assets/ entra sozinho.
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export const PUBLICOS = [
  'index.html',
  '404.html',
  'favicon.svg',
  'robots.txt',
  'sitemap.xml',
  '_headers',
  'assets',
];

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const destino = path.join(raiz, 'dist');

rmSync(destino, { recursive: true, force: true });
mkdirSync(destino);
for (const item of PUBLICOS) {
  const origem = path.join(raiz, item);
  if (!existsSync(origem)) throw new Error(`build: ${item} está em PUBLICOS mas não existe`);
  cpSync(origem, path.join(destino, item), { recursive: true });
}
console.log(`build: ${PUBLICOS.length} itens copiados para dist/`);
