#!/usr/bin/env python3
"""Design-system checks for BlueBuzzah.com. Run before every commit: python3 scripts/check_site.py"""
import json, pathlib, re, subprocess, sys
from html.parser import HTMLParser

ROOT = pathlib.Path(__file__).resolve().parent.parent
PAGES = ['index.html', 'privacy.html']
DISCLAIMER = ('BlueBuzzah is an experimental, open-source project. It is not FDA-approved and is not a substitute '
              'for medical care. Talk with your neurologist before using it.')
PENDING_IDS = {'how-it-works', 'download', 'community'}  # sections Tasks 4-5 build


class Node:
    def __init__(self, tag, attrs, parent):
        self.tag, self.attrs, self.parent, self.children = tag, dict(attrs), parent, []

    def iter(self):
        yield self
        for c in self.children:
            if isinstance(c, Node):
                yield from c.iter()

    def text(self):
        return ' '.join(' '.join(c.text() if isinstance(c, Node) else c for c in self.children).split())

    def classes(self):
        return set((self.attrs.get('class') or '').split())

    def ancestors(self):
        n = self.parent
        while n:
            yield n
            n = n.parent


class _Tree(HTMLParser):
    VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr',
            'use', 'path', 'rect', 'circle', 'line', 'polyline'}

    def __init__(self):
        super().__init__()
        self.root = self.cur = Node('#root', {}, None)

    def handle_starttag(self, tag, attrs):
        n = Node(tag, attrs, self.cur)
        self.cur.children.append(n)
        if tag not in self.VOID:
            self.cur = n

    def handle_startendtag(self, tag, attrs):
        self.cur.children.append(Node(tag, attrs, self.cur))

    def handle_endtag(self, tag):
        n = self.cur
        while n is not self.root and n.tag != tag:
            n = n.parent
        if n is not self.root:
            self.cur = n.parent

    def handle_data(self, data):
        if self.cur.tag not in ('script', 'style'):
            self.cur.children.append(data)


def dom(html):
    t = _Tree()
    t.feed(html)
    return t.root


def site_css():
    p = ROOT / 'css/site.css'
    return re.sub(r'/\*.*?\*/', '', p.read_text(), flags=re.S) if p.exists() else ''


def override_block(css):
    """The <600px `.display-xl` rule: the one place site.css restates a type style (it must equal .display-l)."""
    m = re.search(r'@media \(max-width:[^)]*\)\s*\{\s*\.display-xl\s*\{([^}]*)\}\s*\}', css)
    return m

GENERATED = [
    'css/tokens.css', 'css/bundle.css', 'assets/icons.svg', 'assets/bluebuzzah-mark-512.png',
    'assets/favicon-16.png', 'assets/favicon-32.png', 'assets/favicon-48.png', 'assets/apple-touch-icon-180.png',
    'assets/icon-192.png', 'assets/icon-512.png', 'assets/icon-maskable-512.png', 'favicon.ico',
]
DELETED = [
    'assets/favicon.svg', 'assets/favicon-96x96.png', 'assets/apple-touch-icon.png',
    'assets/web-app-manifest-192x192.png', 'assets/web-app-manifest-512x512.png', 'assets/favicon.ico',
]


def pages():
    return {p: (ROOT / p).read_text() for p in PAGES}


def check_assets():
    missing = [p for p in GENERATED if not (ROOT / p).exists()]
    tokens = ROOT / 'css/tokens.css'
    if tokens.exists():
        missing += ['css/' + f for f in re.findall(r'url\("(fonts/[^"]+)"\)', tokens.read_text())
                    if not (ROOT / 'css' / f).exists()]
    leftover = [p for p in DELETED if (ROOT / p).exists()]
    return '; '.join(filter(None, [missing and f'missing {missing}', leftover and f'not deleted {leftover}']))


def check_sprite():
    sprite = ROOT / 'assets/icons.svg'
    ids = set(re.findall(r'<symbol id="([^"]+)"', sprite.read_text())) if sprite.exists() else set()
    used = {i for t in pages().values() for i in re.findall(r'assets/icons\.svg#([\w-]+)', t)}
    return used - ids and f'no symbol for {sorted(used - ids)}'


def check_manifest():
    m = json.loads((ROOT / 'site.webmanifest').read_text())
    want = [('/assets/icon-192.png', 'any'), ('/assets/icon-512.png', 'any'), ('/assets/icon-maskable-512.png', 'maskable')]
    got = [(i.get('src'), i.get('purpose')) for i in m.get('icons', [])]
    errs = []
    if got != want:
        errs.append(f'icons {got}')
    for k in ('theme_color', 'background_color'):
        if m.get(k, '').lower() != '#080c1b':
            errs.append(f'{k} {m.get(k)}')
    if m.get('name') != 'BlueBuzzah':
        errs.append(f'name {m.get("name")}')
    return '; '.join(errs)


def check_sync():
    r = subprocess.run([sys.executable, str(ROOT / 'scripts/sync_design_system.py'), '--check'],
                       capture_output=True, text=True)
    return r.returncode and (r.stdout + r.stderr).strip()[:400]


def check_theme_test():
    r = subprocess.run(['node', str(ROOT / 'scripts/test_theme.mjs')], capture_output=True, text=True)
    return r.returncode and (r.stdout + r.stderr).strip()[-400:]


def check_no_tailwind():
    return '; '.join(f'{p}: {w}' for p, t in pages().items() for w in ('tailwind', 'styles.css', 'scroll-smooth')
                     if w in t)


def check_no_raw_values():
    errs = []
    for p, t in pages().items():
        t = re.sub(r'<meta name="theme-color" content="#080c1b">', '', t)
        if re.search(r'<style', t):
            errs.append(f'{p}: inline <style>')
        hits = re.findall(r'(?:style|fill|stroke|color|content)="[^"]*#[0-9a-fA-F]{3,8}\b[^"]*"|rgba?\(|hsla?\(', t)
        errs += [f'{p}: {h}' for h in hits]
    css = site_css()
    if not css:
        return 'css/site.css missing'
    if re.search(r'#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(', css):
        errs.append('site.css has a raw colour')
    m = override_block(css)
    stripped = css.replace(m[0], '') if m else css
    stripped = re.sub(r'@media[^{]*', '', stripped)
    errs += [f'site.css raw size {h}' for h in re.findall(r'[\d.]+(?:px|rem|em|ms|s)\b', stripped)]
    return '; '.join(errs)


def check_display_override():
    m = override_block(site_css())
    tok = re.search(r'^\.display-l \{([^}]*)\}', (ROOT / 'css/tokens.css').read_text(), re.M)
    norm = lambda s: [d.strip() for d in s.split(';') if d.strip()]
    return (not m and 'no <600px .display-xl override') or (norm(m[1]) != norm(tok[1]) and
                                                            f'override {norm(m[1])} != .display-l {norm(tok[1])}')


def check_head_order():
    errs = []
    fonts = ['css/fonts/lexend-latin-wght-normal.woff2', 'css/fonts/atkinson-hyperlegible-next-latin-wght-normal.woff2']
    for p, t in pages().items():
        head = t.split('</head>')[0]
        sheets = re.findall(r'<link rel="stylesheet" href="([^"]+)"', head)
        if sheets != ['css/tokens.css', 'css/bundle.css', 'css/site.css']:
            errs.append(f'{p}: stylesheets {sheets}')
        if 'js/theme.js' not in head or (sheets and head.index('js/theme.js') > head.index('rel="stylesheet"')):
            errs.append(f'{p}: js/theme.js must load before the stylesheets')
        errs += [f'{p}: no preload {f}' for f in fonts if not re.search(rf'rel="preload"[^>]*href="{f}"', head)]
    return '; '.join(errs)


def check_link_buttons_border_box():
    """<a class="bb-btn bb-btn--full"> overflowed 320px screens: bundle.css assumes <button>'s border-box."""
    return not re.search(r'a\.bb-btn\s*\{[^}]*box-sizing:\s*border-box', site_css()) and 'a.bb-btn needs border-box'


def check_disclaimer():
    errs = []
    for p, t in pages().items():
        footers = [n for n in dom(t).iter() if n.tag == 'footer']
        n = sum(f.text().count(DISCLAIMER) for f in footers)
        if n != 1:
            errs.append(f'{p}: canonical disclaimer in footer {n} times')
    return '; '.join(errs)


def check_scroll_padding():
    return 'scroll-padding-top' not in site_css() and 'site.css lacks scroll-padding-top'


def check_no_js_traps():
    errs = ['site.css uses opacity'] if 'opacity' in site_css() else []
    for p, t in pages().items():
        errs += [f'{p}: hidden <{n.tag} class="{n.attrs.get("class")}">' for n in dom(t).iter()
                 if 'hidden' in n.attrs and 'theme-controls' not in n.classes()]
    return '; '.join(errs)


def check_headings():
    errs = []
    for p, t in pages().items():
        levels = [int(n.tag[1]) for n in dom(t).iter() if re.fullmatch(r'h[1-6]', n.tag)]
        if levels.count(1) != 1:
            errs.append(f'{p}: {levels.count(1)} h1')
        errs += [f'{p}: h{a} -> h{b}' for a, b in zip(levels, levels[1:]) if b > a + 1]
    return '; '.join(errs)


def check_img_alt():
    return '; '.join(f'{p}: <img src="{n.attrs.get("src")}"> has no alt' for p, t in pages().items()
                     for n in dom(t).iter() if n.tag == 'img' and 'alt' not in n.attrs)


def check_local_links():
    ids = {p: {n.attrs['id'] for n in dom(t).iter() if 'id' in n.attrs} for p, t in pages().items()}
    errs = []
    for p, t in pages().items():
        for n in dom(t).iter():
            for attr in ('href', 'src'):
                v = n.attrs.get(attr)
                if not v or re.match(r'(https?:|mailto:|data:)', v):
                    continue
                path, _, frag = v.partition('#')
                target = path.lstrip('/') or p
                if not (ROOT / target).exists():
                    errs.append(f'{p}: {v} missing')
                elif frag and target in ids and frag not in ids[target] and frag not in PENDING_IDS:
                    errs.append(f'{p}: {v} has no #{frag}')
    return '; '.join(errs)


def main():
    failed = 0
    for name, fn in [(n, f) for n, f in globals().items() if n.startswith('check_') and callable(f)]:
        try:
            err = fn()
        except Exception as e:  # a crashing check is a failing check
            err = f'{type(e).__name__}: {e}'
        if err:
            failed += 1
            print(f'FAIL {name}: {err}')
        else:
            print(f'ok {name}')
    sys.exit(1 if failed else 0)


if __name__ == '__main__':
    main()
