// node scripts/test_theme.mjs — checks js/theme.js theme resolution and storage fallbacks.
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const PATH = require.resolve('../js/theme.js');
const SYS = { mode: 'system', hc: null };

// a fresh module per scenario: theme.js remembers the last choice in memory
function load(storage) {
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, ...storage });
  delete require.cache[PATH];
  return require(PATH);
}

let t = load({ value: undefined });
// resolve follows prefers when mode is system
assert.equal(t.resolve(SYS, true, false), 'dark');
assert.equal(t.resolve(SYS, false, true), 'light-hc');
// explicit mode wins over the OS; hc null follows prefers-contrast
assert.equal(t.resolve({ mode: 'light', hc: null }, true, true), 'light-hc');
assert.equal(t.resolve({ mode: 'dark', hc: false }, false, true), 'dark');
assert.equal(t.resolve({ mode: 'light', hc: true }, true, false), 'light-hc');

// storage throws (private mode, blocked site data): default, then the choice holds for this page view
t = load({ get() { throw new Error('denied'); } });
assert.deepEqual(t.read(), SYS);
assert.doesNotThrow(() => t.save({ mode: 'dark', hc: true }));
assert.deepEqual(t.read(), { mode: 'dark', hc: true });

// readable but not writable (quota exceeded, old Safari private mode): the choice still holds
t = load({ value: { getItem: () => null, setItem: () => { throw new Error('QuotaExceededError'); } } });
t.save({ mode: 'light', hc: false });
assert.deepEqual(t.read(), { mode: 'light', hc: false });

// working storage: garbage and invalid values fall back to the default; a save round-trips
const store = {};
t = load({ value: { getItem: (k) => store[k] ?? null, setItem: (k, v) => { store[k] = String(v); } } });
store['bb-theme'] = '{';
assert.deepEqual(t.read(), SYS);
store['bb-theme'] = JSON.stringify({ mode: 'neon', hc: 'yes' });
assert.deepEqual(t.read(), SYS);
t.save({ mode: 'dark', hc: true });
assert.deepEqual(t.read(), { mode: 'dark', hc: true });

console.log('ok');
