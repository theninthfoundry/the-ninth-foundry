# THE NINTH FOUNDRY — COMPONENT SPECIFICATIONS
**Document ID:** `DOC-10-COMPONENTS`  
**Date:** November 2026 (Updated Phase 02.5)  
**Auditor:** Principal Frontend Engineer & Design Systems Architect  
**Standardized Architecture:** Stages 00–07  
**Core Doctrine:** *Phase 02.5 — Controlled Imperfection & Architectural Craft*

---

## 1. Global Shell & Navigation Components

### 1.1 Fixed Header Console (`#hd`)
- **Tag:** `<header id="hd">`
- **Dimensions:** Height: `76px`; fixed at `top: 0; left: 0; right: 0; z-index: 50;`
- **Styling:** `mix-blend-mode: difference; color: #fff; border-bottom: 1px solid rgba(255, 255, 255, 0.14); padding: 0 var(--pad);`
- **Children:**
  - Brand Mark: `<a href="#hero" class="mono">THE NINTH FOUNDRY</a>`
  - Navigation Array: `<nav class="mono" aria-label="Primary">` with links `WORK`, `INDEX`, `BENCH`, `COLLECTION`, `HUMAN`, `CONTACT`.
  - Action Anchor: `<div class="mono"><span class="av"></span><a class="nl" href="mailto:namireddysreeshanth@gmail.com" data-mag>namireddysreeshanth@gmail.com ↗</a></div>`
    - Availability Beacon (`.av`): 6px emerald circle (`#B9C77A`) with 2.4s pulse animation.
  - Mobile Menu Trigger: `<button id="burger" class="mono" aria-expanded="false" aria-controls="menu">Menu</button>` (visible only `< 900px`).

### 1.2 Mobile Menu Overlay (`#menu`)
- **Tag:** `<div id="menu" role="dialog" aria-label="Menu">`
- **Dimensions:** Fixed full-screen overlay (`inset: 0; z-index: 60; background: var(--k);`)
- **Transitions:** `clip-path: inset(0 0 100% 0); visibility: hidden; transition: clip-path 0.8s var(--e), visibility 0s 0.8s;`
  - Active State (`.open`): `clip-path: inset(0); visibility: visible; transition-delay: 0s;`
- **Accessibility:** Keyboard `Escape` dismisses menu; locks `body.style.overflow = 'hidden'` while open; restores focus to `#burger` on close.

### 1.3 Telemetry HUD (`.fi`, `#fl`, `#fr`)
- **Tags:** `<div class="fi mono" id="fl">`, `<div class="fi mono" id="fr">`
- **Dimensions:** Fixed at `bottom: calc(24px + env(safe-area-inset-bottom, 0px)); z-index: 40; mix-blend-mode: difference; color: #fff;`
- **Left Telemetry (`#fl`):** `SECTOR <span id="sec-num">I</span> / VII · <span id="pc">0</span>%`
- **Right Telemetry (`#fr`):** `<span id="lbl">Stage 00 / Aperture</span><button id="ix" aria-expanded="false">Index +</button>`

### 1.4 Section Index Drawer (`#index`)
- **Tag:** `<nav id="index" class="mono" aria-label="Archive index">`
- **Dimensions:** Fixed at `right: var(--pad); bottom: 76px; z-index: 45; min-width: 280px; background: var(--p); color: var(--ink); padding: 22px 26px;`
- **Transitions:** `clip-path: inset(100% 0 0 0); visibility: hidden; transition: clip-path 0.6s var(--e);`
  - Active State (`.open`): `clip-path: inset(0); visibility: visible;`
- **Content:** Dynamic list of all 8 stages (`00 Aperture` to `07 Transmission`). Active stage highlighted in Signal Red (`#C83D32`).

---

## 2. Stage 00 — The Aperture Sequence Component (`#opening`)

- **Tag:** `<div id="intro" role="presentation">`
- **Dimensions:** Fixed full-screen overlay (`inset: 0; z-index: 100; background: var(--k);`)
- **SVG Elements:**
  - Mask `#im`: Wraps solid white rect and inverted path `#hole`.
  - Stroke Path `#lstroke`: Outlines the glyph in `#F8F7F3` with `stroke-width: 1.6`.
  - Orbit Ring `#iring`: Circular stroke (`r="62"`) in `#C83D32` with dashed pattern.
- **Controls:**
  - `#skip` button: Positioned at `top: 28px; right: var(--pad);` for instant completion. Zero simulated percentage tickers. Total runtime: 1.1s.

---

## 3. Stage 01 — Hero Section Components (`#hero`)

- **Tag:** `<section id="hero" data-l="Stage 01 · Hero" class="dk">`
- **Children:**
  - Metadata Bar (`.hero-meta`): Flex row with uppercase mono information and dynamic coordinate tracker `<em id="co">X 0.00 · Y 0.00</em>`.
  - Portrait Figure (`.portrait`): 4:5 visual frame anchored off-center at $z = 1$, flanked by annotation label `Fig. 01 — Subject` and red crosshair `+`.
  - Monumental Bleed Headline:
    - Line 1 (`.hero-name-1`): `<span class="split">Sreeshanth</span>` ($z=0$, behind portrait).
    - Line 2 (`.hero-name-2`): `<span class="split o">Namireddy.</span>` ($z=2$, in front of portrait with `mix-blend-mode: difference`, `margin-right: -4vw`).
  - Positioning Line: *"Engineering autonomous software, high-integrity systems, and the mechanical kinetics of becoming."*
  - Footnote (`.hero-foot`): Three-part mono footer: `Scroll to explore ↓` · `An archive of becoming` · `Stage 01 / 07`.

---

## 4. Stage 02 — Selected Work Components (`#work`)

- **Container:** `<div id="wk" class="wk">` (12-column asymmetric grid, `gap: 140px var(--gap)`).
- **Four Bespoke Layouts:**
  1. **`.p1` (Veri.fy):** Columns 1–12, 21:9 panoramic ultra-wide plate.
  2. **`.p2` (Overcharge Desk):** 5fr visual plate / 1fr void / 5fr editorial audit copy, 4:5 document plate.
  3. **`.p3` (Veil):** Negative margin breakout (`margin: 0 calc(var(--pad) * -1)`), 16:8 ratio, obsidian security frame.
  4. **`.p4` (SatQuery):** Offset right across Columns 3–12, 16:10 landscape plate.
- **Each Project Card:**
  - Target: Verified external repository (`target="_blank" rel="noopener noreferrer"`).
  - Hover: Connects to SVG liquid displacement filter `#disp` (`<feDisplacementMap>`).

---

## 5. Stage 03 — The Index Components (`#archive`)

- **Table Container:** `<div id="rows">`
- **Row Component (`.row`):**
  - Columns: `[ Index 005 ] · [ Project Title (Uppercase Serif) ] · [ Domain ] · [ Status ] · [ ↗ ]`.
  - Zero duplication with Selected Work (`005 BHOW`, `006 Dreaming Machine`, `007 Raksha AI`, `008 CampusBite`, `009 Ride Registry`).
  - Hover Behavior: Padding expands from 22px to 38px, typography stains Signal Red (`#C83D32`).
- **Floating Preview Plate (`#pv`):**
  - Fixed 280px wide container (`aspect-ratio: 4/3; z-index: 30; pointer-events: none; opacity: 0;`).
  - Follows cursor with spring physics via `gsap.quickTo`, clamped cleanly inside the viewport boundaries.

---

## 6. Stage 04 — The Workbench Components (`#workbench`)

- **Grid Container:** `<div id="workg" class="lab">` (12-column bento layout).
- **Workbench Cards (`.lc`):**
  - Card 1 (Calibration Plate): Columns 1–7, Rows 1–3. Houses the authentic vector blueprint SVG with dimensional calipers, inspection radii, and optic crosshairs.
  - Card 2: Local Model Quantization Engine (`RESEARCH FOCUS`).
  - Card 3: Autonomous Agent Perception Boundary (`ACTIVE STUDY`).
  - Card 4: Kinematic Motion Algorithms (`EXPLORATION`).
  - Card 5: High-Throughput Verification Pipelines (`INVESTIGATION`).

---

## 7. Stage 05 — The Collection & Kinematic Wheel (`#collection`)

- **Asymmetric Masonry Grid (`.col`):** 4 varied image plates with vertical offsets:
  - Plate A: Machines (3:2, Cols 1–8).
  - Plate B: Visual Culture (4:5, Cols 10–12, pushed down 140px).
  - Plate C: Objects (1:1, Cols 2–6, `margin-top: -30px`).
  - Plate D: Curiosities (3:2, Cols 7–12, pushed down 70px).
- **The Kinematic Guide Track & Wheel (`#track`, `#wheel`):**
  - Track with milestone ticks at 0%, 33%, 66%, 100%.
  - SVG wheel rolls across track with rotation bound to linear travel: $\theta = \frac{x}{R} \cdot \frac{180}{\pi}$.
  - Milestone ticks illuminate in Signal Red as the wheel rolls past.

---

## 8. Stage 06 — The Human Monograph Components (`#personality`)

- **Layout:** Asymmetric split:
  - Left (Cols 1–6): Candid workshop portrait of Sreeshanth Namireddy (`Fig. 02 — Observer`) with scroll clip-path reveal.
  - Right (Cols 7–12): Tightly edited 3-paragraph biographical essay on motorsport rigor and software craftsmanship.
- **The Monolithic Five Ribbon (`.mono-five`):**
  - Horizontal Instrument Serif typographic ribbon:
    `BUILD · EXPLORE · QUESTION · EXPERIMENT · REPEAT`
  - Alternating words colored Signal Red, scrubbed smoothly on scroll.

---

## 9. Stage 07 — Transmission Components (`#contact`)

- **Display Call:**
  ```
  HAVE SOMETHING
  INTERESTING
  IN MIND?
  ```
- **Subtitle:** *"Let's make something that shouldn't exist yet."*
- **Verified Communication Channels:**
  - Email: `namireddysreeshanth@gmail.com` with magnetic cursor interaction.
  - Code: `github.com/theninthfoundry`.
- **The Laser Road (`#laser-track` & `#laser-orb`):**
  - Continuous 1px hairline spanning the viewport.
  - 6px Signal Red glowing orb animating in an infinite 7s linear loop.
- **Colophon:** `HYDERABAD, INDIA · 2026 EDITION · ZERO FRAMEWORKS`.
