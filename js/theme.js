/* Sets data-theme on <html> before first paint: the OS setting, unless the person chose an override
   in the footer. Load as a blocking script before the stylesheets. */
(function (root) {
  var KEY = 'bb-theme';
  var DEFAULT = { mode: 'system', hc: null };

  // hc: null follows prefers-contrast; true/false is the person's override
  function resolve(pref, prefersDark, prefersMore) {
    var dark = pref.mode === 'system' ? prefersDark : pref.mode === 'dark';
    var hc = pref.hc === null ? prefersMore : pref.hc;
    return (dark ? 'dark' : 'light') + (hc ? '-hc' : '');
  }

  function read() {
    try {
      var p = JSON.parse(localStorage.getItem(KEY));
      if (p && /^(system|light|dark)$/.test(p.mode) && (p.hc === null || typeof p.hc === 'boolean')) return p;
    } catch (e) { /* blocked storage or bad JSON: follow the OS */ }
    return { mode: DEFAULT.mode, hc: DEFAULT.hc };
  }

  function save(pref) {
    try { localStorage.setItem(KEY, JSON.stringify(pref)); } catch (e) { /* the choice lasts this page view only */ }
  }

  function query(q) {
    return typeof matchMedia === 'function' && matchMedia(q).matches;
  }

  function apply() {
    var theme = resolve(read(), query('(prefers-color-scheme: dark)'), query('(prefers-contrast: more)'));
    if (typeof document !== 'undefined') document.documentElement.dataset.theme = theme;
    return theme;
  }

  var api = { resolve: resolve, read: read, save: save, apply: apply };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.bbTheme = api;
  if (typeof document !== 'undefined') apply();
})(this);
