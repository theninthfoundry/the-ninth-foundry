# THE NINTH FOUNDRY — CURRENT STATE AUDIT
**Document ID:** `DOC-00-AUDIT`  
**Date:** November 2026  
**Auditor:** Principal Creative Director & Frontend Quality Engineer  
**Live Site URL:** `https://theninthfoundry.github.io/the-ninth-foundry/`  
**Repository:** `https://github.com/theninthfoundry/the-ninth-foundry`  
**Local Workspace:** `D:\theninthfoundry`

---

## 1. Executive Summary

An exhaustive forensic audit was conducted on both the live GitHub Pages deployment (`https://theninthfoundry.github.io/the-ninth-foundry/`) and the local source tree. 

### Key Findings
1. **Strong Architectural Core:** The site is engineered as an exceptionally lightweight, dependency-free static website using semantic HTML5, modern CSS custom properties, vanilla ES6 modules, and GSAP 3.12.5 + ScrollTrigger via CDN. Initial DOM load and initial paint are instantaneous.
2. **Distinctive Visual Grammar:** The core visual identity—monolithic serif typography (`Instrument Serif`), strict technical metadata (`IBM Plex Mono`), clean humanist sans (`Geist`), high-contrast obsidian black (`#111110`) transitioning into warm paper (`#EAE7DF`), and Signal Red (`#C83D32`) accents—possesses genuine creative caliber and avoids generic AI-portfolio templates.
3. **Severe Credibility & Prototype Artifacts (P0):** The deployed site exposes unfinished development scaffolding directly to the public:
   - 100% of image assets 404 (zero image files exist in `assets/images/`), forcing all containers to render striped diagnostic fallback boxes.
   - Contact section displays unconfigured placeholders: `[ verified email — add in js/data.js ]` and `GitHub — to supply`.
   - Selected Work cards link cyclically to `#archive`, while Archive rows link cyclically back to `#work`, creating closed navigation loops without real project destinations.
   - The Archive duplicates the exact 6 projects displayed in Selected Work, rather than serving as a distinct catalog.
   - Field Notes displays explicitly `Proposed subjects — unpublished until real articles exist` and tags items as `Unpublished`.
   - Collection items output raw `Date — add` labels.
4. **Motion & Interaction Craft:** The mechanical wheel kinematics, SVG displacement maps, coordinate telemetry, and aperture mask reveal demonstrate high creative ambition, but require tuning for mobile viewports, animation lifecycle hygiene, and genuine user storytelling.

---

## 2. Codebase Architecture & Hosting Model

### 2.1 Directory Structure
```
d:\theninthfoundry\
├── index.html            # Core document structure, inline SVG filters, intro mask (101 lines, 11,038 bytes)
├── README.md             # Project manifesto, required assets, prototype limitations (22 lines, 1,301 bytes)
├── css/
│   ├── main.css          # Tokens, base reset, nav, intro overlay, cursor, index panel (45 lines, 5,843 bytes)
│   └── sections.css      # Section-specific styles, grid compositions, wheel track, media queries (64 lines, 8,345 bytes)
└── js/
    ├── data.js           # Content payload (window.NF): projects, archive, lab, collection, journal (20 lines, 3,340 bytes)
    ├── main.js           # DOM rendering engine, menu toggle, index drawer, intersection observer (31 lines, 3,850 bytes)
    └── motion.js         # GSAP timelines, ScrollTrigger choreography, mouse parallax, shaders (94 lines, 8,174 bytes)
```

### 2.2 Technology Stack & Dependencies
- **Runtime:** Pure client-side browser execution. Zero compilation, zero bundler overhead, zero hydration lag.
- **Hosting:** GitHub Pages static hosting directly from repository root.
- **External CDNs:**
  - `fonts.googleapis.com` / `fonts.gstatic.com`: Instrument Serif, Geist, IBM Plex Mono.
  - `cdnjs.cloudflare.com`: GSAP v3.12.5 (`gsap.min.js`), ScrollTrigger v3.12.5 (`ScrollTrigger.min.js`).

---

## 3. Section-by-Section Forensic Audit

### 3.1 Global Navigation & HUD Telemetry (`#hd`, `#prog`, `#fl`, `#fr`, `#menu`, `#index`)
- **Top Header (`#hd`):** Fixed 76px bar, `mix-blend-mode: difference; color: #fff`.
  - Left brand anchor `<a href="#hero">The Ninth Foundry</a>`.
  - Primary links: `Home (#hero)`, `Work (#work)`, `Collection (#collection)`, `Personality (#person)`. Missing direct navigation to Manifesto, Laboratory, or Archive.
  - Action link: Pulsing emerald beacon (`#B9C77A`) beside `Let’s talk ↗ (#contact)`.
  - Underline micro-interaction (`.nl:after`) uses an origin flip (`transform-origin: right` to `left` via `cubic-bezier(.16,1,.3,1)`), providing excellent tactile response.
- **Scroll Progress Tracker (`#prog`):** Fixed 2px Signal Red line along top viewport boundary (`transform: scaleX(0); transform-origin: left`). Driven by `ScrollTrigger.create({start:0, end:'max'})`.
- **Telemetry HUD (`.fi`):**
  - Left (`#fl`): `Nº 009 · Position / [X]%`. Dynamic real-time integer output.
  - Right (`#fr`): Active section label (`System / [Section Name]`) driven by `IntersectionObserver` observing `section[data-l]` with rootMargin `-45% 0px -50% 0px`.
  - Index Trigger (`#ix`): Toggles `#index` modal drawer.
- **Index Drawer (`#index`):** Populated dynamically by `main.js`. Styled as raw paper card (`#EAE7DF`) with ink typography (`#171715`). Active section stains red. Accessible via keyboard `Escape` to close.
- **Mobile Menu Overlay (`#menu`):** Full-screen dark overlay with `clip-path: inset(0 0 100% 0)` transition. Displays large serif destinations (`clamp(44px, 13vw, 80px)`).

### 3.2 Section 00 — Intro Aperture Sequence (`#intro`)
- **Visual Design:** Full-viewport `#111110` overlay.
- **SVG Mask Masking Mechanism:** An SVG mask (`#im`) wraps an inverted path `#hole` (`d="M0 0H44V84H32V52H12V84H0ZM12 12V40H32V12Z"`).
- **Animation Sequence:**
  - Red dashed orbit ring (`#iring`) rotates 360° over 2.4s.
  - White stroke (`#lstroke`) draws in over 1.2s.
  - Text ticker `#ipct` counts from 0 to 100 over 1.7s.
  - Aperture `#hole` expands to `scale: 110` over 1.5s, revealing the hero underneath.
- **Critical Flaw:** The 0%–100% counter is completely simulated via `gsap.to(pct, {v:100, duration:1.7})`. It does not measure asset or font loading. On fast connections, it forces visitors to wait for a fake loading bar.
- **State Handling:** Uses `sessionStorage.getItem('nf')`. Re-visits in the same session immediately remove `#intro` and play hero entrance at 1.6x speed. Reduced motion preference removes `#intro` synchronously.

### 3.3 Section 01 — The Hero (`#hero`)
- **Dimensions & Spatial Layout:** `min-height: 100svh; padding: 76px var(--pad) 0`.
- **Metadata:** Flex bar displaying `INDEPENDENT BUILDER / SOFTWARE / AI / EXPERIMENTAL SYSTEMS` (left) and `HYDERABAD, INDIA / <em id="co">X 0.00 · Y 0.00</em>` (right).
- **Portrait Composition:** Asymmetric 4:5 figure anchored right (`top: 150px; width: min(27vw, 400px)`). Framed by `Fig. 01 — Subject` annotation.
- **Oversized Typography:** `clamp(60px, 18.2vw, 310px)/.84`. Line 1 (`Sreeshanth`) is `z-index: 0` (behind portrait); Line 2 (`Namireddy.`) is `z-index: 2` with `mix-blend-mode: difference` (in front of portrait).
- **Interaction:**
  - Mousemove parallax shifts portrait (`qx(x * -26); qy(y * -18)`) and title (`nx(x * 10)`), with live coordinate updates in `#co`.
  - Scroll scrub translates title up (`yPercent: -24`), zooms portrait (`scale: 1.12`), and fades metadata to 0.

### 3.4 Interlude — The Kinetic Marquee (`.mq`)
- Continuous strip between Hero and Manifesto.
- Outline serif typography (`-webkit-text-stroke: 1px var(--mu); color: transparent`).
- Scrubbed across X-axis (`xPercent: -38`) via ScrollTrigger.

### 3.5 Section 02 — The Manifesto (`#manifesto`)
- **Chromatic Shift:** GSAP scrubs background from `#111110` to `#EAE7DF` and text from `#F8F7F3` to `#171715` between `top 92%` and `top 22%`.
- **Baseline Datum:** Left red vertical line (`.vl`) scrubs `scaleY` from 0 to 1.
- **Typography & Copy:** Left column features 4-line reveal: *"Not everything needs to exist. Until someone decides to build it."* Right column presents 4 paragraphs defining the philosophy of The Ninth Foundry.
- **Fragment Asset:** Contains `.art.frag` referencing `assets/images/editorial/fragment.jpg` (currently 404).

### 3.6 Section 03 — Selected Work (`#work`)
- **Layout Architecture:** 12-column grid (`.wk`) hosting 6 projects from `window.NF.projects`.
- **Bespoke Compositions:**
  - `001 Veri.fy` (`.p1`): Full-width 21:9 ratio.
  - `002 Overcharge Desk` (`.p2`): Split grid (5 cols image / 1 col gap / 5 cols text).
  - `003 Veil` (`.p3`): Negative margin breakout with full-bleed dark theme.
  - `004 SatQuery` (`.p4`): Asymmetric offset, Columns 3–12.
  - `005 BHOW` (`.p5`): Left-anchored, Columns 1–7.
  - `006 Dreaming Machine` (`.p6`): Columns 7–12, pushed down 140px, tilted -1.5°.
- **Critical Failure:** Every card anchor has `href="#archive"`. Clicking a project does not open a case study or external link; it abruptly scrolls down to the Archive table.
- **Displacement Interaction:** Hovering triggers SVG filter `#disp` (`<feDisplacementMap>`), distorting image pixels to `scale: 34`.

### 3.7 Section 04 — The Archive (`#archive`)
- **Table Composition:** 5-column grid: `[00X] · [Title] · [Category] · [Status — to verify] · [↗]`.
- **Critical Failure 1 (Duplication):** Renders all 6 projects from Selected Work, then appends 3 extras (`Raksha AI`, `CampusBite`, `Ride Registry`).
- **Critical Failure 2 (Cyclical Links):** Every row anchor has `href="#work"`. Clicking jumps back up to the Selected Work section.
- **Floating Hover Preview (`#pv`):** A fixed card following cursor via `gsap.quickTo`. Displays project preview on row hover.

### 3.8 Section 05 — The Laboratory (`#lab`)
- **Atmosphere:** Returns to Foundry Black (`#111110`).
- **Composition:** Asymmetric 12-column bento-style grid.
  - Card 1 (Cols 1–7, Rows 1–3): Lined grid with vector blueprint SVG (measuring calipers and coordinate rings).
  - Cards 2–5: Generic category cards (`AI & intelligent systems`, `Creative coding`, `Systems engineering`, `Interface experiments`, `Entries`).
- **Critique:** Cards describe broad fields of interest rather than showcasing real experiments, interactive demos, code snippets, or tangible prototypes.

### 3.9 Section 06 — The Collection & Mechanical Wheel (`#collection`)
- **Atmosphere:** Archive Paper (`#EAE7DF`).
- **Grid:** Asymmetric masonry featuring 4 categories: `Machines (3:2)`, `Visual culture (4:5)`, `Objects (1:1)`, `Curiosities (3:2)`.
- **Defect:** Output text explicitly renders `Date — add` on every card.
- **The Kinematic Wheel (`#wheel` & `#track`):**
  - Guide track across section baseline with milestone ticks at 0, 0.33, 0.66, 1.0.
  - Custom SVG wheel (190px) with brake rings, cross-spokes, and red hub bolt.
  - Angular rotation is physically derived: `rotation = (x / R) * (180 / π)`.
  - Scrubbing correctly updates horizontal translation, rotation, and milestone illumination.

### 3.10 Section 07 — Personality (`#person`)
- **Atmosphere:** Foundry Black (`#111110`).
- **Grid:** Left portrait (4:5) with `Fig. 02 — Observer` annotation and scroll clip-path reveal. Right: 5 paragraphs of personal biography.
- **Defect:** Much of the copy rehashes themes already stated in the Hero and Manifesto.
- **The Monolithic Five:** Giant typographic strip: `BUILD · EXPLORE · QUESTION · EXPERIMENT · REPEAT` with alternating Signal Red styling, scrubbed upward on scroll.

### 3.11 Section 08 — Field Notes / Journal (`#journal`)
- **Atmosphere:** Archive Paper (`#EAE7DF`).
- **Critical Flaw:** Subheading explicitly states: `"Proposed subjects — unpublished until real articles exist"`. Every row displays `Unpublished` and `Idea 0X`. No articles exist, and clicking rows does nothing.

### 3.12 Section 09 — Contact & Transmission (`#contact`)
- **Atmosphere:** Foundry Black (`#111110`).
- **Typography:** Giant display headline: *"HAVE SOMETHING INTERESTING IN MIND? Let’s make something that shouldn't exist yet."*
- **Critical Flaw:** Deployed site renders `[ verified email — add in js/data.js ]` and `GitHub — to supply`, `LinkedIn — to supply`, `Instagram — to supply`.
- **Laser Road:** Continuous 1px horizontal rule with a red dot `.road i` animating across it infinitely over 7 seconds.
- **Footer:** Colophon text with smooth-scroll back to `#hero`.

---

## 4. Engineering, Performance & Accessibility Audit

### 4.1 Asset Loading & Fallbacks
- All images are loaded via helper `img(src, alt)` with `loading="lazy"` and `onerror="this.remove()"`.
- When an image 404s, the browser removes the `<img>` element from DOM. The CSS rule `.art:has(img):after { display: none }` becomes inactive, causing `.art:after` to display with `content: attr(data-ph)` against a striped background.
- While the fallback pattern prevents broken image icons, having 100% missing images destroys visual credibility.

### 4.2 Accessibility & Usability
- **Keyboard Navigation:**
  - `:focus-visible` is globally styled with `outline: 2px solid var(--r); outline-offset: 4px`.
  - Index modal and mobile menu support `Escape` key dismissal.
  - Focus trapping is missing inside open mobile menu and index drawer.
- **ARIA Implementation:**
  - `#intro` has `role="presentation"`.
  - `#menu` has `role="dialog" aria-label="Menu"`.
  - `#burger` has `aria-expanded="false" aria-controls="menu"`.
  - Decorative SVGs correctly declare `aria-hidden="true"`.
- **Contrast Ratios:**
  - Dark mode (`#111110` background with `#F8F7F3` text): 18.2:1 (AAA).
  - Light mode (`#EAE7DF` background with `#171715` text): 14.8:1 (AAA).
  - Muted text (`#92918B` on `#111110`): 5.1:1 (AA compliant for body).
  - Signal Red (`#C83D32` on `#EAE7DF`): 4.6:1 (AA compliant for large text/accents).

### 4.3 Responsive Viewport Evaluation

| Viewport | Status | Issues Identified |
| :--- | :--- | :--- |
| **1440 × 900** | Good | Intended desktop composition. Well balanced. |
| **1280 × 800** | Good | Compact desktop. Grid scales fluidly via clamp(). |
| **1024 × 768** | Moderate | `--pad` drops to 36px. 12-column layouts become compressed; text columns in p2 become tight. |
| **768 × 1024** | Moderate | Hits `max-width: 900px` breakpoint. All grids collapse to `grid-column: 1/13 !important`. Visual rhythm becomes a monotonous stack of full-width blocks. |
| **390 × 844** | Poor | Fixed HUD elements `#fl` and `#fr` collide in the bottom viewport zone. Hero portrait shifts above title awkwardly. |
| **360 × 800** | Critical | Hero name `Sreeshanth` (`18.2vw`) at 360px evaluates to ~65px. 10 serif uppercase characters exceed 360px, causing clipping and horizontal micro-scroll. |

---

## 5. Summary Matrix of Findings

| Metric | Score | Assessment |
| :--- | :--- | :--- |
| **Visual Identity & Art Direction** | 88 / 100 | Distinctive, brutalist-editorial typography and palette. Far superior to generic templates. |
| **Technical Architecture** | 92 / 100 | Clean zero-build structure, fast execution, correct CSS custom properties, robust GSAP integration. |
| **Content Authenticity** | 24 / 100 | Critical failures: missing images, placeholder emails, fake loading timer, unwritten articles, missing project destinations. |
| **Information Architecture** | 42 / 100 | Selected Work links to Archive; Archive links to Work; Archive duplicates Selected Work; Laboratory lacks experiments. |
| **Mobile Art Direction** | 56 / 100 | Crude 900px blanket collapse; bottom HUD overlaps; narrow viewport text clipping. |

