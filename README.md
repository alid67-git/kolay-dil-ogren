# Kolay Dil Ogren

Birlesik giris — **6 dil** tam surumler.

## Uygulamalar

| Dil | Dosya | Dersler | Depolama |
|-----|-------|---------|----------|
| Tayca | `tayca-v3.html` | 48 | `tv3_*` |
| Ingilizce | `english-v3.html` | 49 | `en1_*` |
| Almanca | `german-v3.html` | 49 | `de1_*` |
| Italyanca | `italian-v3.html` | 49 | `it1_*` |
| Ispanyolca | `spanish-v3.html` | 49 | `es1_*` |
| Fransizca | `french-v3.html` | 49 | `fr1_*` |

Giris: `index.html` → arayuz dili + ogrenilecek dil → ilgili tam uygulama.

## Romanca paketler (v1.0.0)

Her dil: **20 senaryo dersi** + **29 bonus** kelime seti

- **Ders 2:** Artikel + olmak fiili (detayli gramer)
  - IT: il/la/lo + essere
  - ES: el/la + ser
  - FR: le/la/l' + etre
- Kelime orneklerinde **bd**, diyaloglarda **gramNote**
- Icerik: `languages/{it,es,fr}/lessons/ders1.js` … `ders49.js`

## Uretim

```bash
node tools/gen-spanish-lessons.mjs          # ES — detaylı L1–L20
node tools/gen-romance-lessons.mjs it         # IT — L1–L3 detaylı gramer + L4–49
node tools/gen-french-lessons.mjs             # FR — L1–L3 + L4–49 (fr-patch ile)
# IT+FR birlikte: node tools/gen-romance-lessons.mjs all  (IT için; FR için yukarıdaki tercih edilir)
node tools/create-lang-html.mjs it   # italian-v3.html
node tools/create-lang-html.mjs es   # spanish-v3.html
node tools/create-lang-html.mjs fr   # french-v3.html
```

## GitHub Pages

https://alid67-git.github.io/kolay-dil-ogren/
