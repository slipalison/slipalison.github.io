// Garante o que o build promete: só o site vai para dist/, nada do repositório
// vaza para o ar, e toda referência local das páginas existe no que é servido.
import { test, before } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(raiz, 'dist');
const DOMINIO = 'https://alisonamorim.com/';

before(() => {
  execFileSync(process.execPath, [path.join(raiz, 'scripts/build.mjs')], { stdio: 'ignore' });
});

test('dist/ não leva arquivos do repositório', () => {
  const proibidos = ['package.json', 'package-lock.json', 'wrangler.jsonc', 'README.md', 'CLAUDE.md',
    '.claude', '.git', '.github', '.gitignore', 'node_modules', 'scripts', 'test'];
  const presentes = readdirSync(dist).filter((n) => proibidos.includes(n));
  assert.deepEqual(presentes, []);
});

for (const pagina of ['index.html', '404.html']) {
  test(`${pagina}: toda referência local existe em dist/`, () => {
    const html = readFileSync(path.join(dist, pagina), 'utf8');
    const refs = [...html.matchAll(/(?:src|href|poster)="([^"]+)"/g)]
      .map((m) => m[1])
      .filter((u) => !/^(https?:|mailto:|tel:|#|data:)/.test(u) && u !== '/');
    assert.ok(refs.length > 0);
    const faltando = refs.filter((u) => !existsSync(path.join(dist, u.replace(/^\//, '').split(/[?#]/)[0])));
    assert.deepEqual(faltando, []);
  });
}

test('canonical, og:url, JSON-LD e sitemap apontam para o domínio próprio', () => {
  const html = readFileSync(path.join(dist, 'index.html'), 'utf8');
  assert.match(html, new RegExp(`<link rel="canonical" href="${DOMINIO}"`));
  assert.match(html, new RegExp(`<meta property="og:url" content="${DOMINIO}"`));
  assert.match(html, new RegExp(`"url": "${DOMINIO}"`));
  assert.ok(!html.includes('slipalison.github.io'), 'index.html ainda cita slipalison.github.io');
  assert.match(readFileSync(path.join(dist, 'sitemap.xml'), 'utf8'), new RegExp(`<loc>${DOMINIO}</loc>`));
  assert.match(readFileSync(path.join(dist, 'robots.txt'), 'utf8'), new RegExp(`Sitemap: ${DOMINIO}sitemap.xml`));
});

test('HTML sem style="" inline, que a CSP do _headers bloqueia', () => {
  for (const pagina of ['index.html', '404.html']) {
    assert.doesNotMatch(readFileSync(path.join(dist, pagina), 'utf8'), /\sstyle="/, pagina);
  }
});
