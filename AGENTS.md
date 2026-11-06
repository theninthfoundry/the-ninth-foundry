# AGENTS.md — THE NINTH FOUNDRY
**Project Identity:** The Ninth Foundry — An Archive of Becoming  
**Builder & Subject:** Sreeshanth Namireddy  
**Location:** Hyderabad, India  
**System Architecture:** Lightweight Static Web Application (HTML5 / Vanilla CSS3 / Modern ES6 / GSAP 3.12.5)  
**Hosting Target:** GitHub Pages (`https://theninthfoundry.github.io/the-ninth-foundry/`)

---

## 1. Core Creative Doctrine & Identity

The Ninth Foundry is an independent digital archive documenting the process of becoming an engineer, researcher, and builder. It is not an ordinary developer portfolio, nor is it a generic tech landing page.

### The Ratio:
- **65% Editorial & Human:** High-contrast portraiture, thoughtful typography, authentic personal philosophy, and clear technical writing.
- **20% Mechanical & Automotive:** Motorsports discipline, mechanical kinematics, physical wheel mechanisms, and calibration aesthetics.
- **15% Experimental Technology:** Shader displacement, behavioural software verification, and intelligent agent perception.

### Strict Design & Engineering Prohibitions:
1. **No Artificial Loading Screens:** Never force the user to wait for simulated 0%–100% timers. Keep reveals fast, vector-driven, and purposeful.
2. **No Placeholder Scaffolding in Production:** Never expose bracketed strings like `[ verified email — add in js/data.js ]`, `GitHub — to supply`, or `Date — add`.
3. **No Closed Cyclical Navigation Loops:** Project cards must never link cyclically to `#archive`, nor may archive rows link back to `#work`. Every interactive element must lead to a real destination.
4. **No Fabricated Content:** Never invent metrics, testimonials, awards, unwritten articles, or unverified achievements.
5. **No Framework Churn:** Do not introduce React, Next.js, Tailwind, or complex build tools. Maintain the lightweight, zero-build static architecture that loads in milliseconds.

---

## 2. Coding & Design Standards

### Typography:
- **Display & Headings:** `Instrument Serif` (Italics used for emotional emphasis: `<i>decides to build it.</i>`).
- **Body & Interface:** `Geist` (Light 300, Regular 400).
- **Metadata & Telemetry:** `IBM Plex Mono` (Uppercase, tracked `0.12em`).

### Palette:
- **Foundry Black:** `#111110` (Primary dark canvas)
- **Archive Paper:** `#EAE7DF` (Primary light canvas)
- **Ivory White:** `#F8F7F3` (High-contrast typography)
- **Charcoal Ink:** `#171715` (Paper typography)
- **Signal Red:** `#C83D32` (Selective functional accent — never used as a generic background)
- **Laboratory Green:** `#B9C77A` (Availability beacon & active terminal telemetry)

### Motion Guidelines:
- Primary animation engine: **GSAP 3.12.5 + ScrollTrigger**.
- Use `transform` (`x`, `y`, `scale`) and `opacity` exclusively for animations to guarantee 60fps GPU acceleration.
- Always support `prefers-reduced-motion: reduce`.
- Ensure all GSAP timelines and event listeners are scope-managed and cleaned up correctly.

---

## 3. Project Skills

The project is governed by three dedicated Antigravity skills located in `.agents/skills/`:
1. `portfolio-art-direction` — Spatial composition, typography scales, palette management, and editorial hierarchy.
2. `interaction-engineering` — GSAP timelines, kinematic mechanics, SVG shaders, and cursor physics.
3. `visual-qa` — Multi-viewport responsive audit, accessibility verification, and zero-defect quality enforcement.

