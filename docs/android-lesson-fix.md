# Android lesson entry — v3.0.90

The shared lesson page and Thai page assigned `speechSynthesis.onvoiceschanged`
without checking for Web Speech support. With `window.speechSynthesis` undefined,
the main inline script stopped during initialization. Guard the optional API in
both pages and the generation template. Dialogue playback also checks support.

Vietnamese was integrated from `origin/claude/hausa-language-addition-va4nr0`.
The existing 20 lessons needed additional wiring: generated runtime registry,
language picker, numbered `window.LESSONS` exports, and dialogue/speaking field
shapes expected by the renderer. Web cache and Android version are now 3.0.90
(Android versionCode 31).

## Verification

- `node tools/validate-html.mjs learn.html tayca-v3.html index.html`
- `node tools/validate-html.mjs` for the remaining HTML entry points.
- `node tools/test-lesson-entry.cjs` requires Playwright and installed Edge;
  use NODE_PATH if Playwright is supplied by an external runtime.
- The browser regression disables Web Speech and uses a touch-enabled Android
  viewport. Before the guard it reproduced the initialization TypeError; after
  the fix English, Thai, and Vietnamese open and return from lessons, including
  landscape. All 20 Vietnamese lesson cards render; lesson 1 also checks actual
  Vietnamese text, dialogue cards, and speaking content.

## Remaining release checks

This is mobile Chromium simulation, not a physical Android WebView test.
Local release build reached Android SDK discovery but could not continue because
the SDK is not installed/configured. On this Windows path Gradle also requires
the quoted argument `'-Pandroid.overridePathCheck=true'`.

The APK loads the hosted GitHub Pages site. Publishing the web changes is required
for installed APKs to receive them. No remote branch, Pages deployment, or APK
release was published during this local fix.
