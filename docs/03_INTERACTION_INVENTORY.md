# THE NINTH FOUNDRY — INTERACTION & MOTION INVENTORY
**Document ID:** `DOC-03-INTERACTIONS`  
**Date:** November 2026  
**Auditor:** Senior Interaction Designer & Motion Specialist  
**Scope:** Complete catalog of all motion, scroll-linked, pointer, and keyboard interactions.

---

## 1. Interaction Evaluation Framework

Every interaction is audited against four criteria:
1. **Functional Status:** Does the code execute without error?
2. **Kinetic Quality:** Is the easing, duration, and physics natural and intentional?
3. **Usability & Utility:** Does it aid comprehension, storytelling, and navigation, or is it merely decorative?
4. **Performance & Lifecycle:** Does it avoid layout thrashing, respect reduced motion, and clean up properly?

---

## 2. Exhaustive Interaction Catalog

### 01. Intro Sequence Aperture Reveal
- **Location:** `js/motion.js` (lines 20–39), `index.html` (lines 14–22).
- **Trigger:** Window load (first visit of tab session).
- **Implementation:** GSAP timeline coordinating `#lstroke` stroke-dashoffset (1.2s), `#iring` 360° spin (2.4s), `#ipct` count (1.7s), and `#hole` scale to 110x (1.5s via `power3.in`).
- **Functional Status:** Functional (no console errors).
- **Usability Evaluation:** High visual impact. However, the artificial percentage counter hurts credibility.
- **Recommended Evolution:** Eliminate the fake percentage counter. Retain the vector drawing and orbit spin, accelerating the timeline to 1.1s total duration, followed immediately by the mask iris-expansion.

### 02. Intro Skip Action
- **Location:** `js/motion.js` (line 38), `index.html` (line 21).
- **Trigger:** Pointer click on `#skip`.
- **Implementation:** `tl.timeScale(4)`. Accelerates timeline 4x.
- **Functional Status:** Functional.
- **Usability Evaluation:** Excellent user agency. Accessible and responsive.
- **Recommended Evolution:** Retain. Ensure it responds to keyboard `Enter` and `Space`.

### 03. Hero Character-Split Entrance
- **Location:** `js/motion.js` (lines 8–18), `index.html` (line 38).
- **Trigger:** Intro timeline completion (or instant on session revisit).
- **Implementation:** Splits `.split` into `.ch` spans. Tweens `yPercent: 118` to `0` with `stagger: 0.045` and `ease: power3.out`.
- **Functional Status:** Functional.
- **Usability Evaluation:** Exceptional typographic craftsmanship. The staggered rise creates an authoritative entrance.
- **Recommended Evolution:** Retain without modification.

### 04. Hero Mouse Parallax & Telemetry
- **Location:** `js/motion.js` (lines 84–86), `index.html` (lines 35–38).
- **Trigger:** Mousemove over `#hero`.
- **Implementation:** `gsap.quickTo` on `.portrait` (`x * -26, y * -18`) and `.hero-name` (`x * 10`). Updates `#co` with normalized coordinates `X 0.00 · Y 0.00`.
- **Functional Status:** Functional on fine-pointer devices.
- **Usability Evaluation:** Tactile and restrained. Reinforces the digital workshop atmosphere.
- **Recommended Evolution:** Retain. Ensure it is completely bypassed on touch devices (already guarded by `if (fine)`).

### 05. Hero Scroll Scrubbing
- **Location:** `js/motion.js` (lines 46–49).
- **Trigger:** Scroll between `top top` and `bottom top` of `#hero`.
- **Implementation:** ScrollTrigger scrub: `.hero-name` translates up (`yPercent: -24`), portrait scales (`scale: 1.12`), metadata and subtitle fade to 0.
- **Functional Status:** Functional.
- **Usability Evaluation:** Seamless spatial transition that connects the Hero into the Manifesto without hard cuts.
- **Recommended Evolution:** Retain.

### 06. Kinetic Marquee Translation
- **Location:** `js/motion.js` (line 56), `index.html` (line 44).
- **Trigger:** Scroll scrub across `.mq` viewport presence.
- **Implementation:** GSAP scrolls `.mq .tr` from `xPercent: 0` to `xPercent: -38` with `scrub: 0.6`.
- **Functional Status:** Functional.
- **Usability Evaluation:** High-energy visual interlude separating dark hero from warm manifesto.
- **Recommended Evolution:** Retain.

### 07. Manifesto Chromatic Background Scrub
- **Location:** `js/motion.js` (line 43), `index.html` (lines 46–50).
- **Trigger:** ScrollTrigger between `top 92%` and `top 22%` of `#manifesto`.
- **Implementation:** Smoothly scrubs `backgroundColor` from `#111110` to `#EAE7DF` and `color` from `#F8F7F3` to `#171715`.
- **Functional Status:** Functional.
- **Usability Evaluation:** Landmark moment in the user experience. The physical shift from dark terminal to archival paper signals the start of the deep exhibition.
- **Recommended Evolution:** Retain as a core signature transition.

### 08. Manifesto Vertical Datum Line Growth
- **Location:** `js/motion.js` (line 44), `css/sections.css` (line 16).
- **Trigger:** ScrollTrigger between `top 60%` and `bottom 70%` of `#manifesto`.
- **Implementation:** Tweens `.vl` `scaleY` from 0 to 1 with `transformOrigin: 'top'`.
- **Functional Status:** Functional.
- **Usability Evaluation:** Elegant structural alignment motif.
- **Recommended Evolution:** Retain.

### 09. Text Line Reveal (`.rl`)
- **Location:** `js/motion.js` (line 52), `css/main.css` (line 17).
- **Trigger:** Section enters viewport (`top 84%`, `once: true`).
- **Implementation:** Tweens `.ln > span` from `yPercent: 112` to `0` with `stagger: 0.11` via `power3.out`. Parent `.ln` clips via `overflow: hidden`.
- **Functional Status:** Functional.
- **Usability Evaluation:** Clean, high-fashion editorial reveal across all primary headings.
- **Recommended Evolution:** Retain.

### 10. Selected Work SVG Displacement Filter
- **Location:** `js/motion.js` (lines 72–75), `index.html` (line 10).
- **Trigger:** Pointer hover over `.pj` project cards.
- **Implementation:** GSAP tweens `#dm` (displacement map) scale attribute to 34 over 0.45s via `power2.out`, settling to 0 over 0.6s on mouseleave.
- **Functional Status:** Functional.
- **Usability Evaluation:** Striking organic ripple effect that feels like liquid glass.
- **Recommended Evolution:** Add a slight debounce or per-card isolation so fast cursor movement across adjacent cards does not cause abrupt jumps.

### 11. Selected Work Click Action (P0 Bug)
- **Location:** `js/main.js` (line 6).
- **Trigger:** Pointer click on `.pj`.
- **Implementation:** Standard anchor navigation to `href="#archive"`.
- **Functional Status:** Broken navigation loop.
- **Usability Evaluation:** Frustrating dead end.
- **Recommended Evolution:** Update `js/data.js` to provide authentic GitHub URLs or dedicated case-study modals, replacing `href="#archive"`.

### 12. Archive Row Hover & Floating Preview (`#pv`)
- **Location:** `js/motion.js` (lines 76–79), `js/main.js` (line 10), `css/sections.css` (lines 31–33).
- **Trigger:** Pointer enter on `.row`.
- **Implementation:** Row expands vertical padding from 22px to 40px and changes text color to `#C83D32`. Floating preview `#pv` sets image source, opacity to 1, scale to 1, and tracks cursor via `gsap.quickTo`.
- **Functional Status:** Functional.
- **Usability Evaluation:** High-density, high-craft catalog inspection experience.
- **Recommended Evolution:** Add viewport boundary clamping to prevent `#pv` from extending past screen edges.

### 13. Archive Row Click Action (P0 Bug)
- **Location:** `js/main.js` (line 10).
- **Trigger:** Pointer click on `.row`.
- **Implementation:** Standard anchor navigation to `href="#work"`.
- **Functional Status:** Broken circular navigation loop.
- **Usability Evaluation:** Disorienting; clicking an archive row jumps the user backward on the page.
- **Recommended Evolution:** Map each row to its verified external repository or case-file destination.

### 14. Kinematic Mechanical Wheel Roll
- **Location:** `js/motion.js` (lines 63–69), `index.html` (lines 70–76).
- **Trigger:** ScrollTrigger scrub across `#track` (`start: 'top 88%'`, `end: 'bottom 30%'`).
- **Implementation:** 
  - $x = \text{progress} \times (\text{trackWidth} - \text{wheelWidth})$
  - $\text{rotation} = \left(\frac{x}{R}\right) \times 57.2958^\circ$
  - Tweens `#wheel` translation, `#wg` internal spoke rotation, milestone tick highlights, and caliper label opacities.
- **Functional Status:** Functional and mathematically accurate.
- **Usability Evaluation:** Signature mechanical interaction. Perfectly reinforces the automotive/engineering dimension.
- **Recommended Evolution:** Connect milestone crossings to the active collection category for deeper storytelling integration.

### 15. Personality Monolithic Five Scroll Scrub
- **Location:** `js/motion.js` (line 55), `index.html` (line 83).
- **Trigger:** ScrollTrigger scrub across `.five` (`start: 'top 88%'`, `end: 'bottom 62%'`).
- **Implementation:** Tweens `opacity: 0.08` to `1` and `yPercent: 45` to `0` with `stagger: 0.2`.
- **Functional Status:** Functional.
- **Usability Evaluation:** Powerful rhythmic cadence concluding the biographical statement.
- **Recommended Evolution:** Retain.

### 16. Personality Portrait Clip-Path Reveal
- **Location:** `js/motion.js` (line 60), `css/sections.css` (line 50).
- **Trigger:** ScrollTrigger scrub across `.pt` (`start: 'top 85%'`, `end: 'center 45%'`).
- **Implementation:** Tweens `clipPath` from `inset(9% 9% 9% 9%)` to `inset(0% 0% 0% 0%)`.
- **Functional Status:** Functional.
- **Usability Evaluation:** Subtly shifts photographic framing as the observer reads the text.
- **Recommended Evolution:** Retain.

### 17. Journal Row Hover Shift
- **Location:** `css/sections.css` (line 53).
- **Trigger:** Hover over `.jr`.
- **Implementation:** CSS transition `padding-left: 18px` with `cubic-bezier(.16,1,.3,1)`.
- **Functional Status:** Functional.
- **Usability Evaluation:** Clean, responsive feedback.
- **Recommended Evolution:** Either populate with real articles or temporarily omit the section.

### 18. Contact Laser Road Continuous Orb
- **Location:** `js/motion.js` (line 92), `css/sections.css` (line 58).
- **Trigger:** Autonomous continuous loop.
- **Implementation:** `gsap.to('.road i', {left: '100%', duration: 7, ease: 'none', repeat: -1})`.
- **Functional Status:** Functional.
- **Usability Evaluation:** Understated visual heartbeat signifying an active transmission line.
- **Recommended Evolution:** Retain.

### 19. Magnetic Element Interaction (`[data-mag]`)
- **Location:** `js/motion.js` (lines 87–90).
- **Trigger:** Mousemove over `[data-mag]` elements (Contact email, Let's talk nav link, Back-to-top).
- **Implementation:** Computes cursor offset from element center and applies `transform` via `gsap.quickTo` with factor 0.3.
- **Functional Status:** Functional.
- **Usability Evaluation:** Premium tactile sensation.
- **Recommended Evolution:** Add damped elastic easing on mouseleave so the element settles back organically.

### 20. Vernier Custom Cursor (`#cur`)
- **Location:** `js/motion.js` (lines 80–83), `css/main.css` (line 42).
- **Trigger:** Pointer movement on fine-pointer devices.
- **Implementation:** Rectangular mono badge offset +46px X, +4px Y. Reads `data-cursor` from target elements (e.g. `Open`, `Explore`) and tweens opacity.
- **Functional Status:** Functional.
- **Usability Evaluation:** High precision; avoids the generic follower ball.
- **Recommended Evolution:** Retain. Ensure touch devices remain cleanly excluded.

### 21. Mobile Menu Overlay (`#menu`)
- **Location:** `js/main.js` (lines 21–25), `css/main.css` (lines 36–37).
- **Trigger:** Clicking `#burger` button (visible under 900px).
- **Implementation:** Toggles `.open` class. Animates `clip-path: inset(0)` and locks `document.body.style.overflow = 'hidden'`.
- **Functional Status:** Functional.
- **Usability Evaluation:** Smooth, accessible navigation for mobile viewports.
- **Recommended Evolution:** Add focus-trapping inside the open menu for WCAG 2.1 compliance.

### 22. Index Drawer Overlay (`#index`)
- **Location:** `js/main.js` (line 24), `css/main.css` (lines 39–40).
- **Trigger:** Clicking `#ix` (`Index +`) button in the bottom-right HUD.
- **Implementation:** Toggles `.open` class. Animates `clip-path: inset(0)`. Closes on item click or `Escape` key.
- **Functional Status:** Functional.
- **Usability Evaluation:** Powerful non-linear navigation utility for browsing the archive.
- **Recommended Evolution:** Retain.

---

## 3. Summary of Interaction Modifications Required

| Priority | Interaction | Problem | Required Correction |
| :---: | :--- | :--- | :--- |
| **P0** | Selected Work Card Click | Links to `#archive` (loop) | Connect to real GitHub repos or detailed case-study modal |
| **P0** | Archive Row Click | Links to `#work` (loop) | Connect to verified repositories or external destinations |
| **P0** | Contact Email Anchor | Displays raw code string | Provide verified email address with mailto: link |
| **P1** | Intro Loading Ticker | Fake 0–100% counter | Replace with crisp 1.1s vector drawing and instant iris reveal |
| **P2** | Floating Preview Card | Clips off-screen | Add viewport clamping to `gsap.quickTo` |
| **P2** | Magnetic Element Leave | Snaps instantly | Apply elastic spring decay curve on mouseleave |
| **P2** | Displacement Shader | Snaps on fast sweep | Add smooth tweened exit decay |

