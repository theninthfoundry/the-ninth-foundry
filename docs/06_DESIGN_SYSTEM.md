# THE NINTH FOUNDRY — DESIGN SYSTEM SPECIFICATION
**Document ID:** `DOC-06-DESIGN-SYSTEM`  
**Date:** November 2026  
**Auditor:** Principal Creative Director & Lead UI Architect  
**Scope:** Complete design tokens, fluid typography formulas, grid rules, and component styling.

---

## 1. Design Tokens & CSS Custom Properties

```css
:root {
  /* CANVAS & CHROMATIC PALETTE */
  --k:   #111110;       /* Foundry Black — Primary dark canvas */
  --p:   #EAE7DF;       /* Archive Paper — Primary light canvas */
  --w:   #F8F7F3;       /* Ivory White — High-contrast typography on dark */
  --ink: #171715;       /* Charcoal Ink — High-contrast typography on light */
  --g:   #292927;       /* Graphite Line — Subtle dark borders */
  --m:   #85847E;       /* Archive Grey — Muted labels and secondary text */
  --r:   #C83D32;       /* Signal Red — Critical calibration accent & datums */
  --l:   #B9C77A;       /* Laboratory Green — Active beacons & telemetry */
  --b:   #536F8C;       /* Blueprint Blue — Diagnostic vector graphics */

  /* SPATIAL TOKENS */
  --max-w: 1600px;      /* Maximum content container width */
  --pad:   64px;        /* Horizontal gutter on standard desktop */
  --gap:   24px;        /* 12-column grid column gap */
  --sec:   160px;       /* Vertical section spacing on desktop */

  /* TYPOGRAPHY FAMILIES */
  --ser:  'Instrument Serif', Georgia, 'Times New Roman', serif;
  --san:  'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --mono: 'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, monospace;

  /* EASING CURVES */
  --e: cubic-bezier(.76, 0, .24, 1);  /* Heavy editorial transition */
  --o: cubic-bezier(.16, 1, .3, 1);   /* Snappy interactive reveal */
}
```

---

## 2. Fluid Typography Scale

All typography uses fluid `clamp()` values based on viewport width (`vw`) to prevent abrupt breakpoint shifts:

| Token | Family | Desktop Clamp Formula | Typical Size @ 1440px | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display XL** | Instrument Serif | `clamp(60px, 14vw, 240px)` | ~200px | Hero title line 1 & line 2 (`.hero-name`) |
| **Display L** | Instrument Serif | `clamp(44px, 8.5vw, 130px)` | ~122px | Contact headline, Monolithic Five |
| **Heading 1** | Instrument Serif | `clamp(36px, 5.2vw, 76px)` | ~74px | Section titles (`.h2`) |
| **Heading 2** | Instrument Serif | `clamp(26px, 3.2vw, 48px)` | ~46px | Project titles, archive row titles |
| **Subheading** | Instrument Serif | `clamp(20px, 1.8vw, 28px)` | ~26px | Hero subtitle, manifesto opening statement |
| **Body Large** | Geist | `clamp(16px, 1.15vw, 19px)` | 18px | Manifesto paragraphs, biographical narrative |
| **Body Regular**| Geist | `15px / 1.6` | 15px | Project descriptions, card copy |
| **Mono Meta** | IBM Plex Mono | `11px / 1.5` (`tracking: 0.12em`) | 11px | Section indices, coordinates, status badges |
| **Mono Small** | IBM Plex Mono | `10px / 1.4` (`tracking: 0.10em`) | 10px | Figure annotations (`Fig. 01`), footnote tags |

---

## 3. The Grid & Spatial System

### Desktop Grid (Viewport Width ≥ 1024px)
- **Container:** `max-width: 1600px; margin: 0 auto; padding: 0 var(--pad);`
- **Columns:** 12 equal fluid columns (`grid-template-columns: repeat(12, 1fr)`).
- **Column Gap:** `24px` (`--gap`).
- **Section Spacing:** `160px` top and bottom (`--sec`).

### Tablet Grid (Viewport Width: 768px – 1023px)
- **Container Padding (`--pad`):** `36px`.
- **Columns:** 8 equal fluid columns (`grid-template-columns: repeat(8, 1fr)`).
- **Column Gap:** `20px`.
- **Section Spacing:** `110px`.

### Mobile Grid (Viewport Width < 768px)
- **Container Padding (`--pad`):** `20px`.
- **Columns:** 4 fluid columns (`grid-template-columns: repeat(4, 1fr)`).
- **Column Gap:** `12px`.
- **Section Spacing:** `80px`.

---

## 4. Image Aspect Ratio Standards

Every visual container must enforce an explicit aspect ratio to prevent Cumulative Layout Shift (CLS):

| Ratio Token | Exact CSS | Standard Dimensions | Typical Application |
| :--- | :--- | :--- | :--- |
| **Ultra-Wide** | `aspect-ratio: 21 / 9;` | 2100 × 900 | Featured Project 01 (Veri.fy) |
| **Cinematic** | `aspect-ratio: 16 / 8;` | 1920 × 960 | Featured Project 03 (Veil breakout frame) |
| **Landscape** | `aspect-ratio: 16 / 10;` | 1600 × 1000 | Featured Project 04 (SatQuery terrain) |
| **Photo 3:2** | `aspect-ratio: 3 / 2;` | 1200 × 800 | Automotive Collection A, Curiosity D, Manifesto fragment |
| **Portrait 4:5**| `aspect-ratio: 4 / 5;` | 1200 × 1500 | Hero portrait, Personality portrait, Overcharge Desk |
| **Square 1:1** | `aspect-ratio: 1 / 1;` | 1200 × 1200 | Collection Objects C, Laboratory Blueprint |

---

## 5. Interaction & State Specifications

### Focus-Visible Standard (WCAG 2.1 AA)
```css
:focus-visible {
  outline: 2px solid var(--r);
  outline-offset: 4px;
}
```

### Links & Buttons
- **Underline Animation (`.nl`):**
  - Pseudo-element `::after` with `height: 1px; background: currentColor;`
  - Enters from left: `transform: scaleX(0); transform-origin: right; transition: transform 0.5s var(--o);`
  - On `:hover` or `.on`: `transform: scaleX(1); transform-origin: left;`
- **Magnetic Pull (`[data-mag]`):**
  - Attracts toward pointer with factor 0.3 on mousemove.
  - Settles back via elastic easing (`ease: 'elastic.out(1.1, 0.4)'`) on mouseleave.

### The Striated Technical Placeholder Pattern
When an image asset is not present, `.art` renders an editorial technical plate:
```css
.art {
  position: relative;
  overflow: hidden;
  background: repeating-linear-gradient(
    135deg,
    rgba(128, 128, 120, 0.14) 0 10px,
    rgba(128, 128, 120, 0.05) 10px 11px
  ), var(--ph, #1c1c1a);
}

.art::after {
  content: attr(data-ph);
  position: absolute;
  left: 16px;
  bottom: 14px;
  right: 16px;
  font: 400 10px/1.4 var(--mono);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--m);
  pointer-events: none;
}

.art:has(img)::after {
  display: none;
}
```

