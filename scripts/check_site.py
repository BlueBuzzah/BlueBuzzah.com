#!/usr/bin/env python3
"""Design-system checks for BlueBuzzah.com. Run before every commit: python3 scripts/check_site.py"""
import json, pathlib, re, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
PAGES = ['index.html', 'privacy.html']

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
