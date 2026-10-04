# ATELIER NOIR

A scroll-driven luxury fashion boutique, built as a static site. Bilingual EN/FA with
full RTL support, and the homepage composed as a continuous cinematic sequence rather
than a stack of sections.

**[Live demo](https://amir-pce.github.io/ATELIER-NOIR/Clothes/)** · [full feature list](Clothes/README.md)

## What makes it worth looking at

The homepage is one scroll-scrubbed timeline. Nothing simply fades in.

- **Cinematic hero** — autoplay runway video with parallax zoom, a marquee tagline, a
  split-character title reveal, and a cursor that changes state by context.
- **Pinned manifesto** where the text illuminates word by word as you scroll through it.
- **A 35mm film-strip product row** built from the catalogue data, with hover
  interactions on each cell and a GSAP **Flip** quickview — Flip animates between two
  real DOM states rather than faking the transition.
- **A cinematographer section** with a sticky viewfinder: rule-of-thirds grid, REC dot,
  shutter flash, scene crossfades, camera shake, and a timecode driven by scroll
  position.
- **Fabric gallery** using an SVG displacement ripple, with traceability timelines read
  from each product's `trace` array.
- **Bilingual CTA** that swaps EN and FA on a timer, with a magnetic button.

## The technical parts that mattered

**Smooth scroll and scroll triggers have to share one clock.** Lenis and GSAP
ScrollTrigger each want to own the frame loop, and left alone they drift apart — the
animation lands slightly before or after the scroll position that should drive it. They
are synced explicitly:

```js
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
```

**Locale is state, not a separate build.** EN and FA live in `locales/en-US.json` and
`locales/fa-IR.json`, with the active language held in `localStorage` under
`atelier-locale`, so switching language does not reload the page or lose the cart.

**Cart, wishlist, compare and locale were already working** in `js/app.js` before the
homepage was rebuilt, and the rebuild preserved them rather than starting over. The
header and navigation were deliberately frozen for the same reason.

## Also in this repository

A second, separate storefront — **رویاخواب لوکس / Luxury Sleep Studio**, a Persian RTL
landing page for mattresses and bedding, with GSAP animation, advanced filtering and an
interactive product-advisor tool. It sits at the repository root.

**[Live demo](https://amir-pce.github.io/ATELIER-NOIR/)** · [documentation](README.fa.md)

The two share no code. They are in one repository by accident of history, not by design.

## Built with

HTML · CSS · JavaScript · GSAP 3.12.5 (ScrollTrigger, Observer, CustomEase, Flip,
MotionPath) · Lenis · SVG filters

Static throughout. No build step.
