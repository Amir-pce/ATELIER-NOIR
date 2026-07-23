# ATELIER-NOIR
# ATELIER NOIR — Cinematic Luxury Fashion

## Project goal
ATELIER NOIR is a bilingual EN/FA, RTL-aware static luxury fashion boutique. The homepage has been rebuilt as a scroll-driven cinematic experience for editorial commerce, preserving the existing injected header/nav and the existing cart, wishlist, compare, and locale state managed by `js/app.js`.

## Currently completed features
- Rebuilt `body[data-page="home"]` homepage below the frozen header/navigation.
- Cinematic hero with retained autoplay runway video, parallax zoom, marquee tagline, split-character title reveal, and contextual cursor state.
- New pinned manifesto reveal with scroll-scrubbed word illumination.
- New horizontal 35mm film-strip product moment populated from `window.ATELIER_DATA.products[0..5]`.
- Product film-cell hover interactions and GSAP Flip-based quickview modal.
- New cinematographer scroll section with sticky viewfinder, rule-of-thirds grid, REC dot, shutter flash, scene crossfades, shake, and scroll-driven timecode.
- New fabric physics gallery with SVG displacement ripple and traceability timelines from product `trace` arrays.
- New infinite intentions marquees with GSAP modifiers and hover slow-down.
- New atelier live section with lazy-loaded video and rotating Tehran-time feed cards.
- New bilingual stylist invitation CTA with timed EN/FA text swap and magnetic button behavior.
- New footer prologue with scroll-scaled ATELIER NOIR wordmark and shutter-like close.
- Global home micro-interactions: magnetic buttons, heading reveals, image reveal clipping, grain overlay, contextual cursor enhancements, and left-edge scroll progress.
- GSAP 3.12.5 plugins added: ScrollTrigger, Observer, CustomEase, Flip, MotionPathPlugin.
- Lenis smooth scroll updated to sync with ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)` and `gsap.ticker.add((time) => lenis.raf(time * 1000))`.
- Locale JSON additions created for `locales/en-US.json` and `locales/fa-IR.json`.

## Functional entry URIs
- `/` or `/index.html` — cinematic homepage.
- `/?lang=fa` — Farsi/RTL alternate entry metadata is present; runtime language is controlled by the existing EN/FA selector and `atelier-locale` localStorage key.
- `/shop/` — existing product catalog route referenced by CTAs.
- `/shop/product/?slug=<product-slug>` — product detail route referenced from film strip and quickview.
- `/collections/men/` and `/collections/women/` — existing collection links in the preserved nav/app chrome.
- `/stylist/` — stylist invitation CTA target.
- `/atelier/`, `/journal/`, `/compare/`, `/checkout/`, `/account/`, `/contact/` — existing app routes linked by the injected chrome.

## Data models, structures, and storage services used
- Static data source: `js/data.js`, exposed as `window.ATELIER_DATA`.
  - `brand`: name, localized tagline, currency rate.
  - `products[]`: slug, gender, category, localized name, price, color, fabric, sizes, season, badge, sustainability, rating, origin, fit, image, video, story, and trace array.
  - `journal[]`: localized editorial article data.
- Client persistence: browser `localStorage` keys already used by `js/app.js`:
  - `atelier-locale`
  - `atelier-cart`
  - `atelier-wishlist`
  - `atelier-compare`
- No server database or table schema is used for this implementation.

## Public URLs / API endpoints
- Production URL: not published in this editing session.
- API endpoints: none. This is a static frontend implementation using local static data and browser localStorage.

## Files changed
- `index.html` — rebuilt homepage sections and added required GSAP/Lenis/plugin script includes plus `js/home-cinematic.js`.
- `css/style.css` — appended `/* === HOMEPAGE CINEMATIC v2 === */` styles.
- `js/home-cinematic.js` — new self-contained IIFE for all cinematic homepage motion and rendering.
- `js/app.js` — kept state logic, added new i18n keys, synced Lenis with ScrollTrigger, and disabled legacy home hero conflicts.
- `js/data.js` — installed from provided upload, unchanged in structure.
- `locales/en-US.json` and `locales/fa-IR.json` — added homepage cinematic locale keys.

## Features not yet implemented
- True GSAP Club SplitText plugin is not bundled; a custom accessible splitter is used instead.
- DrawSVGPlugin is not bundled; trace lines use native SVG stroke-dashoffset animation.
- Checkout remains a static prototype and does not process payments.
- Product quickview adds to localStorage cart only; no backend inventory or order persistence exists.

## Recommended next steps
1. Art-direct final product imagery/video assets to replace third-party editorial placeholders with owned campaign media.
2. QA on physical iOS/Android devices for scroll performance and video autoplay behavior.
3. Add image `srcset`/AVIF/WebP variants for production performance.
4. Add structured product metadata for SEO on product-detail routes.
5. Publish from the Publish tab when ready to make the site live.
