# THE NINTH FOUNDRY — PRIORITISED DESIGN & FUNCTIONAL PROBLEMS
**Document ID:** `DOC-01-PROBLEMS`  
**Date:** November 2026  
**Auditor:** Principal Creative Director & Frontend Quality Engineer  
**Scope:** Exhaustive catalog of design, functional, content, and structural deficiencies.

---

## Priority Classification Scheme
- **P0 — Immediate Credibility & Functional Breakages:** Severe bugs, broken loops, missing essential assets, or public placeholders that compromise professional authenticity.
- **P1 — Important Structural & Design Problems:** Weak information architecture, simulated mechanics, layout collisions, and redundant narrative content.
- **P2 — Craft & Interaction Improvements:** Visual polish, shader easing, kinetic mechanics, and motion choreography refinements.
- **P3 — Optional Enhancements:** Metadata completeness, micro-interactions, and progressive enhancements.

---

# P0: IMMEDIATE CREDIBILITY & FUNCTIONAL BREAKAGES

### P0-1: Contact Section Exposes Raw Email Placeholder
- **Exact location:** `index.html` (line 93), `js/data.js` (line 4), `js/main.js` (lines 15–16).
- **Existing behaviour:** When `window.NF.links.email` is null, the DOM renders the raw text:
  `<span class="em" data-mag>[ verified email — add in js/data.js ]</span>`.
- **Why it is a problem:** Visitors to the live website see developer scaffolding instructions directly inside the primary call to action. It creates an impression of an abandoned or unfinished template.
- **Proposed solution:** Populate `js/data.js` with the builder's verified contact address (e.g. `sreeshanth.namireddy@gmail.com`). If no direct email is provided, gracefully render a verified contact mechanism or link to an active GitHub/LinkedIn channel without exposing bracketed developer instructions.
- **Files affected:** `js/data.js`, `js/main.js`, `index.html`.
- **Dependencies or risks:** Requires confirmation of the builder's verified public email address.

---

### P0-2: Contact Section Exposes Raw Social Media Placeholders
- **Exact location:** `index.html` (line 94), `js/data.js` (line 4), `js/main.js` (line 17).
- **Existing behaviour:** `$('#soc')` renders:
  `<span>GitHub — to supply</span><span>LinkedIn — to supply</span><span>Instagram — to supply</span>`.
- **Why it is a problem:** A public portfolio stating "to supply" on all outbound channels immediately signals an incomplete project.
- **Proposed solution:** Configure genuine, verified profile URLs in `js/data.js`. Any channel that is not verified must be omitted entirely from the DOM rather than displaying an unfulfilled promise.
- **Files affected:** `js/data.js`, `js/main.js`.
- **Dependencies or risks:** Need verified URLs for GitHub (`github.com/SreeshanthNamireddy`) and LinkedIn (`linkedin.com/in/sreeshanth-namireddy`).

---

### P0-3: Total Image Asset Absence (100% 404s Across All Visuals)
- **Exact location:** `assets/images/*`, `index.html` (lines 36, 50, 81), `js/data.js` (lines 6–16), `js/main.js` (lines 4, 7, 13).
- **Existing behaviour:** Not a single image file exists in `assets/images/`. Every image request 404s, triggers `onerror="this.remove()"`, and forces every visual card to fall back to a striated diagonal hatch box showing `data-ph` label strings.
- **Why it is a problem:** The website's editorial identity relies heavily on high-contrast portraits, technical project plates, and mechanical imagery. Without images, the portfolio feels like an unpopulated wireframe.
- **Proposed solution:** 
  1. Audit all 14 required image slots.
  2. Populate `assets/images/` with authentic, high-resolution visual assets.
  3. Where an asset is pending personal capture, ensure the placeholder plate is meticulously styled and provides descriptive archival context rather than an ugly raw string.
- **Files affected:** `assets/images/**`, `js/data.js`, `index.html`.
- **Dependencies or risks:** High-quality imagery must be supplied or curated to match strict art-direction guidelines.

---

### P0-4: Selected Work Cards Cyclically Link to Local `#archive`
- **Exact location:** `js/main.js` (line 6), `index.html` (lines 52–55).
- **Existing behaviour:** Every project card in Selected Work renders with `href="#archive"`.
- **Why it is a problem:** When a visitor clicks on *Veri.fy*, *Overcharge Desk*, or *Veil* expecting to view case studies, live demos, or technical repositories, the page simply scrolls down a few hundred pixels to the Archive table. This is a closed dead-end loop.
- **Proposed solution:** Each featured project must link to its authentic GitHub repository, a dedicated live demo URL, or open an in-depth modal/case-file drawer detailing the technical architecture.
- **Files affected:** `js/data.js`, `js/main.js`.
- **Dependencies or risks:** Requires verified destination URLs or structured case-study content for each project.

---

### P0-5: Archive Table Cyclically Links to Local `#work`
- **Exact location:** `js/main.js` (line 10), `index.html` (lines 57–60).
- **Existing behaviour:** Every row in the Archive table renders with `href="#work"`.
- **Why it is a problem:** Clicking an archive row jumps the user back up to the Selected Work section, creating an infinite circular navigation loop between sections 03 and 04.
- **Proposed solution:** Archive rows must link directly to the respective project repository, case file, or external article. Rows without public destinations should be designated as internal research and styled as non-navigable archival records.
- **Files affected:** `js/data.js`, `js/main.js`.
- **Dependencies or risks:** None; improves navigation logic immediately.

---

### P0-6: Archive Table Duplicates Selected Work Entries
- **Exact location:** `js/data.js` (lines 5–12), `js/main.js` (lines 9–10).
- **Existing behaviour:** `main.js` executes:
  `const all = N.projects.map(p => [p.t, p.c, p.img]).concat(N.archiveExtra);`
  This causes the exact 6 projects displayed in Selected Work (*Veri.fy*, *Overcharge Desk*, *Veil*, *SatQuery*, *BHOW*, *Dreaming Machine*) to be re-listed in the Archive table immediately below.
- **Why it is a problem:** Having two adjacent sections displaying the exact same 6 items conveys a lack of depth and wastes valuable vertical real estate.
- **Proposed solution:** The Selected Work section should showcase a curated tier of 3 to 4 major featured engineering milestones. The Archive (Index) should contain all *other* projects, experiments, utilities, and previous systems, forming a true catalog without duplication.
- **Files affected:** `js/data.js`, `js/main.js`.
- **Dependencies or risks:** Content reorganization required in `js/data.js`.

---

### P0-7: Archive Table Hardcodes "Status — to verify"
- **Exact location:** `js/main.js` (line 10).
- **Existing behaviour:** Every row outputs `<span class="s mono mute">Status — to verify</span>`.
- **Why it is a problem:** Publicly declaring "to verify" on every single project suggests the portfolio author does not know the status of their own work.
- **Proposed solution:** Assign authentic, descriptive engineering statuses in `js/data.js` (e.g. `Active Prototype`, `Production`, `Research Phase`, `Open Source`, `Archived`) and render them dynamically.
- **Files affected:** `js/data.js`, `js/main.js`.
- **Dependencies or risks:** Verification of actual project states.

---

### P0-8: Field Notes / Journal Section Exposes Raw "Unpublished" Status
- **Exact location:** `index.html` (lines 85–88), `js/main.js` (line 14), `js/data.js` (line 17).
- **Existing behaviour:** Subtitle states: `"Proposed subjects — unpublished until real articles exist"`. Every row displays `Unpublished`, `Idea 0X`, and clicking does nothing.
- **Why it is a problem:** Displaying an entire section that explicitly announces it contains no published articles diminishes the credibility of the entire site.
- **Proposed solution:** Either:
  1. Provide 2–3 genuine, written short technical monographs/field notes that open into readable modal experiences.
  2. Or gracefully omit/hide the Field Notes section until actual writing is ready to be published, keeping the portfolio focused and authentic.
- **Files affected:** `index.html`, `js/data.js`, `js/main.js`.
- **Dependencies or risks:** Requires written content if retained, or removal from navigation if deferred.

---

### P0-9: Collection Items Hardcode Raw "Date — add"
- **Exact location:** `js/main.js` (line 13).
- **Existing behaviour:** Every caption in the Collection outputs `<span>Date — add</span>`.
- **Why it is a problem:** Another unpolished developer placeholder exposed directly to visitors.
- **Proposed solution:** Provide authentic catalog dates or archival classification numbers (e.g. `Recorded — 2025`, `Catalogued — 2026`) in `js/data.js`.
- **Files affected:** `js/data.js`, `js/main.js`.
- **Dependencies or risks:** Minor data structure update.

---

# P1: IMPORTANT STRUCTURAL & DESIGN PROBLEMS

### P1-1: Simulated Percentage Counter in Intro Sequence
- **Exact location:** `index.html` (line 20), `js/motion.js` (lines 23, 32).
- **Existing behaviour:** An animated counter (`#ipct`) increments from 0% to 100% over 1.7 seconds via an artificial GSAP tween.
- **Why it is a problem:** Sophisticated visitors recognize fake progress bars immediately. Artificial loading screens frustrate users and harm retention.
- **Proposed solution:** Transform the intro into an intentional, concise typographic and vector aperture reveal. The logo strokes and wordmark should assemble rapidly (under 1.0–1.2s), then cleanly iris-expand into the hero without a simulated percentage ticker.
- **Files affected:** `index.html`, `js/motion.js`, `css/main.css`.
- **Dependencies or risks:** Must ensure `sessionStorage` skip logic remains intact so returning users bypass it completely.

---

### P1-2: Hero Positioning Statement Lacks Concrete Technical Specificity
- **Exact location:** `index.html` (line 40).
- **Existing behaviour:** The hero subtitle reads:
  *"I build things at the intersection of technology, imagination and the unknown."*
- **Why it is a problem:** While poetic, the statement is overly abstract and resembles generic developer clichés. It fails to convey what Sreeshanth actually specializes in: systems engineering, local AI models, software verification, and autonomous browser agents.
- **Proposed solution:** Craft a sharp, punchy positioning statement combining engineering depth with creative curiosity:
  *"Engineering intelligent systems, software verification architectures, and experimental machines."*
- **Files affected:** `index.html`.
- **Dependencies or risks:** Copywriting refinement.

---

### P1-3: The Laboratory Is a Category Catalog Rather Than an Experimental Workbench
- **Exact location:** `index.html` (lines 62–64), `js/data.js` (line 13), `js/main.js` (line 12).
- **Existing behaviour:** Displays 5 cards listing broad domain labels (`01 — AI & intelligent systems`, `02 — Creative coding`, `03 — Systems engineering`, `04 — Interface experiments`, `Entries`).
- **Why it is a problem:** It tells rather than shows. An engineering laboratory should feature actual micro-experiments, code fragments, architectural diagrams, or interactive canvas demos.
- **Proposed solution:** Restructure the Workbench into concrete investigations with interactive elements:
  - An interactive live token/inference simulation or model architecture diagram.
  - A real interactive canvas shader or physics widget.
  - Verifiable benchmark data or architectural schema inspection.
- **Files affected:** `js/data.js`, `js/main.js`, `css/sections.css`, `index.html`.
- **Dependencies or risks:** Requires drafting genuine experiment vignettes.

---

### P1-4: Personality Section Rehashes Concepts Already Stated in Hero and Manifesto
- **Exact location:** `index.html` (lines 78–83).
- **Existing behaviour:** 5 paragraphs recounting software engineering, AI, automobiles, and curiosity.
- **Why it is a problem:** The text largely repeats what the visitor already read in the Hero and Manifesto. It misses the opportunity to reveal the human ethos: why mechanical systems inspire software reliability, the discipline of racing mechanics, and the philosophy of building things that last.
- **Proposed solution:** Condense the narrative into sharp, memorable vignettes focusing on the crossover between mechanical engineering discipline and autonomous software architecture.
- **Files affected:** `index.html`.
- **Dependencies or risks:** Copywriting refinement.

---

### P1-5: Fixed Bottom Telemetry (`#fl` and `#fr`) Collide on Small Mobile Viewports (< 400px)
- **Exact location:** `css/main.css` (line 38), `index.html` (lines 29–30).
- **Existing behaviour:** Both `#fl` and `#fr` sit at `bottom: calc(24px + env(safe-area-inset-bottom, 0px))`. `#fl` is on the left; `#fr` is on the right. When the section title is long (`System / Objects, Influences & Obsessions`), the two fixed text blocks overlap in the center on viewports ≤ 390px.
- **Why it is a problem:** Produces unreadable jumbled text at the bottom of the screen on mobile devices.
- **Proposed solution:** At mobile breakpoints (`@media (max-width: 900px)`), restructure the bottom telemetry: display only the position percentage or integrate the active section label into the top header bar, hiding the secondary label.
- **Files affected:** `css/main.css`, `css/sections.css`.
- **Dependencies or risks:** Low risk; pure CSS responsive adjustment.

---

### P1-6: Hero Name ("SREESHANTH") Clips or Causes Horizontal Overflow on Narrow Viewports (<= 360px)
- **Exact location:** `css/sections.css` (lines 6–7), `index.html` (line 38).
- **Existing behaviour:** `.hero-name` uses `font: 400 clamp(60px, 18.2vw, 310px)/.84 var(--ser); letter-spacing: -.02em; white-space: nowrap`.
  On a 360px screen, `18.2vw` evaluates to ~65px. The 10 uppercase glyphs of `SREESHANTH` in Instrument Serif require ~380px of horizontal width, causing overflow past the viewport boundary.
- **Why it is a problem:** Causes horizontal layout shift and breaks the clean viewport boundary.
- **Proposed solution:** Lower the clamp lower bound on mobile: `clamp(40px, 14vw, 310px)` or adjust tracking/line-height specifically in `@media (max-width: 480px)` so the name fits within the viewport.
- **Files affected:** `css/sections.css`.
- **Dependencies or risks:** Must ensure aesthetic proportions are preserved across screen sizes.

---

### P1-7: Coarse 900px Responsive Breakpoint Flattens All Compositions Indiscriminately
- **Exact location:** `css/sections.css` (lines 59–64).
- **Existing behaviour:** Below 900px, a single rule executes:
  `.man-h,.man-t,.p1,.p2,.p3,.p4,.p5,.p6,.pt,.tx,.lc:nth-child(n),.ci:nth-child(n) { grid-column: 1/13!important; grid-row: auto!important; margin-top: 0 }`.
- **Why it is a problem:** Stripping all bespoke compositional layouts turns the entire middle of the site into an endless, monotonous single-column stack. Tablets (768px–899px) have ample width to support 2-column or asymmetric layouts.
- **Proposed solution:** Implement a tiered responsive system:
  - 1024px+ (Desktop): Full 12-column bespoke layout.
  - 768px–1023px (Tablet): 8-column grid with adapted asymmetric pairs.
  - <768px (Mobile): Art-directed mobile layouts with curated aspect ratios.
- **Files affected:** `css/sections.css`.
- **Dependencies or risks:** Moderate CSS refactor.

---

# P2: CRAFT & INTERACTION IMPROVEMENTS

### P2-1: SVG Turbulence Displacement Filter Abruptly Cuts on Fast Pointer Exits
- **Exact location:** `js/motion.js` (lines 73–75), `index.html` (line 10).
- **Existing behaviour:** On `mouseenter`, GSAP tweens `#dm` scale to 34. On `mouseleave`, it tweens scale to 0 and executes `a.classList.remove('hov')`. If the user moves the mouse rapidly across multiple cards, the filter abruptly snaps between targets.
- **Why it is a problem:** Visual glitching on high-speed cursor sweeps.
- **Proposed solution:** Add per-card filter scoping or handle transitions using independent CSS/canvas effects, ensuring a clean decay curve.
- **Files affected:** `js/motion.js`.
- **Dependencies or risks:** Low risk.

---

### P2-2: Floating Preview Card (`#pv`) Can Escape Viewport Boundaries on Edge Hover
- **Exact location:** `js/motion.js` (lines 76–79), `css/sections.css` (line 33).
- **Existing behaviour:** `#pv` is positioned via `px(e.clientX + 28); py(e.clientY - 90)`. When hovering near the right or top edges of the viewport, the 280px wide card extends outside the visible screen.
- **Why it is a problem:** Causes the preview image to be clipped by the viewport boundary.
- **Proposed solution:** Add boundary clamping in the mousemove listener:
  `const clampedX = Math.min(e.clientX + 28, window.innerWidth - 300); const clampedY = Math.max(20, Math.min(e.clientY - 90, window.innerHeight - 240));`
- **Files affected:** `js/motion.js`.
- **Dependencies or risks:** Low risk; immediate improvement.

---

### P2-3: Mechanical Wheel Rotation Lacks Narrative Milestone Feedback
- **Exact location:** `js/motion.js` (lines 64–69), `index.html` (lines 70–76).
- **Existing behaviour:** The wheel physically rolls across the track. Milestone ticks (.tk) highlight, but there is no active change in the collection display or narrative feedback tied to the wheel's location.
- **Why it is a problem:** The wheel feels like an isolated tech demo rather than an integral storytelling navigation tool.
- **Proposed solution:** Link the wheel's travel to the active collection category, highlighting the matching quadrant (Machines, Visual Culture, Objects, Curiosities) as the wheel rolls past each milestone.
- **Files affected:** `js/motion.js`, `css/sections.css`.
- **Dependencies or risks:** Low risk.

---

### P2-4: IntersectionObserver Label Switching Can Flicker Across Rapid Scroll
- **Exact location:** `js/main.js` (lines 28–30).
- **Existing behaviour:** Uses `rootMargin: '-45% 0px -50% 0px'`. When scrolling past short sections (such as Manifesto or Archive), the label `#lbl` rapidly toggles between multiple states.
- **Why it is a problem:** High-frequency visual jitter in the fixed HUD.
- **Proposed solution:** Add a small debounce or threshold check to ensure section label transitions feel calm and authoritative.
- **Files affected:** `js/main.js`.
- **Dependencies or risks:** Low risk.

---

### P2-5: Magnetic Link Interaction Snaps Back Without Damped Spring Physics
- **Exact location:** `js/motion.js` (lines 88–89).
- **Existing behaviour:** `m.addEventListener('mouseleave', () => { mx(0); my(0) })`.
- **Why it is a problem:** When the cursor leaves the element, it snaps back to (0,0) without an organic settling bounce.
- **Proposed solution:** Use an elastic ease curve (`ease: 'elastic.out(1.1, 0.4)'`) on mouseleave for a tactile, physical feel.
- **Files affected:** `js/motion.js`.
- **Dependencies or risks:** Low risk.

---

# P3: OPTIONAL ENHANCEMENTS

### P3-1: Missing Favicon, Web App Manifest, and OpenGraph/Twitter Meta Tags
- **Exact location:** `index.html` (lines 1–8).
- **Existing behaviour:** `<head>` only has basic title, description, and viewport tags. No favicon, no SVG icon, no OpenGraph image, no Twitter card.
- **Why it is a problem:** Sharing the link on LinkedIn, Twitter, Discord, or Slack generates a generic text snippet without an image preview. The browser tab displays a generic blank document icon.
- **Proposed solution:** Add `<link rel="icon" type="image/svg+xml" ...>`, apple-touch-icon, and OpenGraph image metadata.
- **Files affected:** `index.html`, `assets/images/og-image.jpg`.
- **Dependencies or risks:** Needs an OG image graphic.

---

### P3-2: Missing `<meta name="theme-color">` for Mobile Browser Header Tinting
- **Exact location:** `index.html` (lines 1–8).
- **Existing behaviour:** No theme-color meta tag is specified.
- **Why it is a problem:** Mobile Safari and Chrome leave the status bar/URL bar with default white/grey chrome rather than seamlessly blending into Foundry Black (`#111110`).
- **Proposed solution:** Add `<meta name="theme-color" content="#111110">` to `<head>`.
- **Files affected:** `index.html`.
- **Dependencies or risks:** None.

---

### P3-3: Lack of Focus-Trapping in Mobile Menu and Index Modal
- **Exact location:** `js/main.js` (lines 21–25).
- **Existing behaviour:** When `#menu` or `#index` is open, pressing `Tab` allows keyboard focus to escape the modal into the background page.
- **Why it is a problem:** Violates WCAG 2.1 modal dialog accessibility standards.
- **Proposed solution:** Implement lightweight focus-trapping inside open dialogs, restoring focus to the trigger button upon dismissal.
- **Files affected:** `js/main.js`.
- **Dependencies or risks:** Low risk.

