# THE NINTH FOUNDRY — COMPONENT SPECIFICATIONS
**Document ID:** `DOC-10-COMPONENTS`  
**Date:** November 2026  
**Auditor:** Principal Frontend Engineer & Design Systems Architect

---

## 1. Global Shell & Navigation Components

### 1.1 Fixed Header Console (`#hd`)
- **Tag:** `<header id="hd">`
- **Dimensions:** Height: `76px`; fixed at `top: 0; left: 0; right: 0; z-index: 50;`
- **Styling:** `mix-blend-mode: difference; color: #fff; border-bottom: 1px solid rgba(255, 255, 255, 0.14); padding: 0 var(--pad);`
- **Children:**
  - Brand Mark: `<a href="#hero" class="mono">The Ninth Foundry</a>`
  - Navigation Array: `<nav class="mono" aria-label="Primary">` with links `Home`, `Work`, `Index`, `Collection`, `Human`.
  - Action Anchor: `<div class="mono"><span class="av"></span><a class="nl" href="#contact" data-mag>Let’s talk ↗</a></div>`
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
- **Left Telemetry (`#fl`):** `Nº 009 · Position / <span id="pc">0</span>%`
- **Right Telemetry (`#fr`):** `<span id="lbl">System / Opening</span><button id="ix" aria-expanded="false">Index +</button>`

### 1.4 Section Index Drawer (`#index`)
- **Tag:** `<nav id="index" class="mono" aria-label="Archive index">`
- **Dimensions:** Fixed at `right: var(--pad); bottom: 76px; z-index: 45; min-width: 280px; background: var(--p); color: var(--ink); padding: 22px 26px;`
- **Transitions:** `clip-path: inset(100% 0 0 0); visibility: hidden; transition: clip-path 0.6s var(--e);`
  - Active State (`.open`): `clip-path: inset(0); visibility: visible;`
- **Content:** Dynamic list of all 7 sections (`00 Intro` to `07 Contact`). Active section highlighted in Signal Red (`#C83D32`).

---

## 2. Intro Sequence Component (`#intro`)

- **Tag:** `<div id="intro" role="presentation">`
- **Dimensions:** Fixed full-screen overlay (`inset: 0; z-index: 100; background: transparent;`)
- **SVG Elements:**
  - Mask `#im`: Wraps solid white rect and inverted path `#hole` (`d="M0 0H44V84H32V52H12V84H0ZM12 12V40H32V12Z"`).
  - Background Rect: Fills screen with `#111110`, masked via `url(#im)`.
  - Stroke Path `#lstroke`: Outlines the glyph in `#F8F7F3` with `stroke-width: 1.6`.
  - Orbit Ring `#iring`: Circular stroke (`r="62"`) in `#C83D32` with dashed pattern.
- **Controls:**
  - `#skip` button: Positioned at `top: 28px; right: var(--pad);` for instant 4x timeline acceleration.

---

## 3. Hero Section Components (`#hero`)

- **Tag:** `<section id="hero" data-l="Home" class="dk">`
- **Children:**
  - Metadata Bar (`.hero-meta`): Flex row with uppercase mono information and dynamic coordinate tracker `<em id="co">X 0.00 · Y 0.00</em>`.
  - Portrait Figure (`.portrait`): Container holding 4:5 visual frame, with annotation label `Fig. 01 — Subject` (with 28px red datum line) and red `+` marker.
  - Headline (`.hero-name`): Dual-line Instrument Serif headline:
    - Line 1: `<span class="ln"><span class="split">Sreeshanth</span></span>` ($z=0$, behind portrait).
    - Line 2: `<span class="ln"><span class="split o">Namireddy.</span></span>` ($z=2$, in front of portrait with `mix-blend-mode: difference`).
  - Structural Divider (`.hero-rule`): 1px line in `#343431`.
  - Subtitle (`.hero-sub`): Max-width 420px; Instrument Serif at 26px.
  - Footnote (`.hero-foot`): Three-part mono footer: `Scroll to explore ↓` · `An archive of becoming` · `01 / 07`.

---

## 4. Selected Work Components (`#work`)

- **Container:** `<div id="wk" class="wk">` (12-column grid, `gap: 140px var(--gap)`).
- **Project Card (`.pj`):**
  - **Markup:**
    ```html
    <a class="pj [cls]" href="[verified-destination]" data-cursor="Open" data-reveal target="_blank" rel="noopener noreferrer">
      <div class="art" data-ph="[Title] — [Dimensions]">[Image or Fallback]</div>
      <div class="cp">
        <h3 class="t"><span>[Project Title]</span><em>↗</em></h3>
        <p>[Technical Narrative]</p>
        <div class="mono">
          <span>[Number] — [Category]</span>
          <span>Year — [Year] · Status — [Status]</span>
        </div>
      </div>
    </a>
    ```
  - **Card Variations:**
    - `.p1` (Veri.fy): Columns 1–12, 21:9 ratio.
    - `.p2` (Overcharge Desk): Columns 1–12 split grid (5 cols image, 1 col gap, 5 cols copy), 4:5 ratio.
    - `.p3` (Veil): Negative margin breakout, 16:8 ratio, dark room container.
    - `.p4` (SatQuery): Columns 3–12, 16:10 landscape ratio.

---

## 5. Archive Index Components (`#archive`)

- **Table Container:** `<div id="rows">`
- **Row Component (`.row`):**
  - **Markup:**
    ```html
    <a class="row" href="[destination]" data-cursor="Open" data-img="[image-path]" target="_blank" rel="noopener noreferrer">
      <span class="mono mute">[Index 005]</span>
      <b>[Project Title]</b>
      <span class="c mute">[Category]</span>
      <span class="s mono mute">[Verified Status]</span>
      <span>↗</span>
    </a>
    ```
  - **Hover Behavior:** Padding expands from 22px to 40px, text color transitions to Signal Red (`#C83D32`).
- **Floating Preview Card (`#pv`):**
  - Fixed 280px wide container (`aspect-ratio: 4/3; z-index: 30; pointer-events: none; opacity: 0;`).
  - Follows cursor with spring physics via `gsap.quickTo`, displaying the hovered project graphic with viewport boundary clamping.

---

## 6. Workbench Components (`#workbench`)

- **Grid Container:** `<div id="workg" class="lab">` (12-column bento layout).
- **Workbench Card (`.lc`):**
  - Border: `1px solid var(--ln); padding: 24px;`
  - Hover: Border changes to Laboratory Green (`#B9C77A`), background darkens to `#161615`.
  - Card 1 (Calibration Plate): Spans Columns 1–7, Rows 1–3. Contains the technical blueprint SVG with measuring calipers and coordinate rings.
  - Cards 2–5: Modular engineering surfaces detailing concrete investigation topics (Inference Engine, Agent Perception, Kinematics, AST Mutation Testing).

---

## 7. Collection & Mechanical Wheel Components (`#collection`)

- **Masonry Grid (`.col`):** 4 varied image figures (`.ci`) covering Machines (3:2), Visual Culture (4:5), Objects (1:1), and Curiosities (3:2).
- **Guide Track (`#track`):**
  - Relative container with 1px baseline rule.
  - Milestone ticks (`.tk`) at positions 0%, 33%, 66%, 100%. Highlight in Signal Red as wheel passes.
- **Mechanical Wheel (`#wheel`):**
  - SVG element (190px diameter): Outer tire with tread tick marks, dashed brake circle, cross-spoke structure, and Signal Red center hub bolt.
  - Bound to scroll progress via exact kinematics formula: $\theta = \frac{x}{R} \cdot \frac{180}{\pi}$.
  - Annotation labels (`Tread`, `Rim`, `Hub`) fade in and out as wheel moves.

---

## 8. Personality Components (`#person`)

- **Grid Layout:** Columns 1–6 (Left Portrait `Fig. 02 — Observer` with scroll clip-path reveal) / Columns 7–12 (Right Biographical Narrative).
- **The Monolithic Five (`.five`):**
  - Giant horizontal typographic strip: `BUILD · EXPLORE · QUESTION · EXPERIMENT · REPEAT`.
  - Instrument Serif at `clamp(48px, 10.5vw, 170px)`.
  - Alternating Signal Red styling, scrubbed upward on scroll.

---

## 9. Transmission & Contact Components (`#contact`)

- **Display Headline:** Instrument Serif at `clamp(48px, 10.5vw, 170px)`:
  ```
  HAVE SOMETHING
  INTERESTING
  IN MIND?
  ```
- **Callout:** *"Let's make something that shouldn't exist yet."*
- **Transmission Anchor (`.em`):** Verified email link (`mailto:sreeshanth.namireddy@gmail.com`) with magnetic pull (`[data-mag]`).
- **Social Telemetry (`#soc`):** Verified external anchors for GitHub and LinkedIn.
- **Laser Road Indicator (`.road`):** 1px horizontal rule with a continuous red orb (`.road i`) animating across in an infinite 7-second loop.
- **Colophon Footer (`footer`):** Three-part colophon with smooth scroll back-to-top trigger.

