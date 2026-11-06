# THE NINTH FOUNDRY — MOTION & INTERACTION SPECIFICATION
**Document ID:** `DOC-07-MOTION`  
**Date:** November 2026 (Updated Phase 02.5)  
**Auditor:** Senior Interaction Designer & Creative Technologist  
**Core Framework:** GSAP 3.12.5 + ScrollTrigger via CDN  
**Standardized Architecture:** Stages 00–07  
**Core Doctrine:** *Phase 02.5 — Kinematics as Artwork & Controlled Drift*

---

## 1. Motion Philosophy: Restraint, Weight & Kinematics

Motion in The Ninth Foundry is not decorative eye-candy. It serves three precise architectural functions:
1. **Spatial Continuity:** Connecting sections without abrupt page jumps.
2. **Mechanical Realism:** Binding physical movement (wheel rotation, laser datums) to exact physical mathematics.
3. **Editorial Hierarchy:** Guiding the eye through disciplined line masks, depth layers, and staggered reveals.

---

## 2. Global Motion Tokens

| Interaction Type | Duration | Easing Curve | GSAP Equivalent | Typical Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Micro Hover** | 180ms | `cubic-bezier(.16, 1, .3, 1)` | `power2.out` | Link underlines, row padding shifts |
| **Magnetic Settling**| 450ms | `elastic.out(1.1, 0.4)` | `elastic.out(1.1, 0.4)` | Magnetic anchors on mouseleave |
| **Headline Reveal** | 900ms | `cubic-bezier(.16, 1, .3, 1)` | `power3.out` | Line-by-line heading entrances |
| **Section Morph** | 1200ms | Linear scrub | `none` (scrub: true) | Background color transitions |
| **Iris Aperture** | 800ms | `cubic-bezier(.76, 0, .24, 1)` | `power3.in` | Opening mask scale to 110x |

---

## 3. Choreography of Key Animation Sequences (Stages 00–07)

### Stage 00 — The Aperture Sequence (`#opening`)
- **Duration:** 1.1s total (instant on revisit). Zero fake percentage tickers.
- **Choreography:**
  1. `t = 0.0s`: Vector contour `#lstroke` begins drawing from `strokeDashoffset: 1` to `0` over 0.7s via `power2.inOut`.
  2. `t = 0.2s`: Crimson orbit ring `#iring` rotates 360° over 1.6s.
  3. `t = 0.3s`: Wordmark `.iname b` and subtitle `.iname i` reveal via vertical clip.
  4. `t = 0.7s`: Aperture mask `#hole` expands from `scale: 1` to `scale: 110` over 0.4s via `power3.in`.
  5. `t = 1.1s`: Intro overlay self-destructs (`intro.remove()`), initiating the Stage 01 Hero entrance.
- **Bypass Rule:** If `sessionStorage.getItem('nf')` is set, `#intro` is removed synchronously.

### Stage 01 — The Hero Entrance & 3D Sandwich Drift (`#hero`)
- **Entrance:**
  - Split characters (`.split .ch`) slide up from `yPercent: 118` to `0` with `stagger: 0.035` and `ease: power3.out`.
  - Portrait expands from `clipPath: inset(0 0 100% 0)` to `inset(0 0 0% 0)` over 1.2s.
  - Telemetry (`#co`) and positioning line fade in with `opacity: 0` to `1` over 0.8s.
- **Mouse Parallax Drift (`if (fine)`):**
  - Uses `gsap.quickTo` on `.portrait` ($z = 1$: `x * -26, y * -18`), `.hero-name-1` ($z = 0$: `x * 12`), and `.hero-name-2` ($z = 2$: `x * -14`).
  - Computes normalized coordinates $(-0.5 \le x, y \le +0.5)$ and prints live to `<em id="co">X [X] · Y [Y]</em>`.
- **Scroll Scrub:**
  - `SREESHANTH` moves up: `yPercent: -28`.
  - `NAMIREDDY.` drifts right: `xPercent: 15`.
  - Portrait zooms: `scale: 1.14`.

### Stage 02 — Selected Work Liquid Displacement Shader (`#work`)
- **Scroll Transition:** Canvas morphs smoothly from Foundry Black (`#111110`) to Archive Paper (`#EAE7DF`).
- **Trigger:** Hover over any bespoke project plate (`.pj`).
- **Filter Mechanics:** Connects to SVG filter `#disp` (`<feDisplacementMap id="dm">`).
- **Choreography:**
  - `mouseenter`: GSAP tweens `#dm` attribute `scale` from `0` to `34` over 0.4s via `power2.out`. Target plate zooms to `scale: 1.025`.
  - `mouseleave`: GSAP tweens `scale` from `34` to `0` over 0.6s via `power2.inOut`.

### Stage 03 — The Index Floating Preview Card (`#archive`)
- **Positioning:** Fixed 280px wide card (`#pv`) with `pointer-events: none`.
- **Motion Binding:** Pointer position updated via `gsap.quickTo(pv, 'x', {duration: 0.45})` and `gsap.quickTo(pv, 'y', {duration: 0.45})`.
- **Boundary Clamping:**
  ```javascript
  const clampedX = Math.min(e.clientX + 28, window.innerWidth - 300);
  const clampedY = Math.max(20, Math.min(e.clientY - 90, window.innerHeight - 240));
  px(clampedX);
  py(clampedY);
  ```

### Stage 04 — The Workbench Blueprint Telemetry (`#workbench`)
- **Trigger:** Enters viewport (`start: 'top 75%'`).
- **Choreography:**
  - Measurement calipers in SVG blueprint `#bp` animate their dimensional width dimension markers over 1.4s.
  - Coordinate rings pulse radially with subtle stroke animation.
  - Telemetry badges (`ACTIVE STUDY`, `RESEARCH FOCUS`) illuminate.

### Stage 05 — The Collection Kinematic Mechanical Wheel (`#collection`)
- **Track Trigger:** `#track` (`start: 'top 88%'`, `end: 'bottom 30%'`, `scrub: true`).
- **Kinematic Formula:**
  $$\text{distance} = \text{progress} \times (\text{trackWidth} - \text{wheelWidth})$$
  $$\theta = \left(\frac{\text{distance}}{\text{radius}}\right) \times \left(\frac{180}{\pi}\right)$$
- **Choreography:**
  - Translates `#wheel` horizontally across the guide track.
  - Rotates wheel spoke assembly `#wg` around its center point (`100 100`).
  - Milestone ticks (A: Machines, B: Visual Culture, C: Objects, D: Curiosities) illuminate in Signal Red as the wheel rolls past their X coordinates.

### Stage 06 — The Human Monograph & Monolithic Five (`#personality`)
- **ScrollTrigger Configuration:**
  - Candid portrait reveals via clip-path expansion (`inset(9%)` $\to$ `inset(0%)`).
  - The Monolithic Five ribbon (`BUILD · EXPLORE · QUESTION · EXPERIMENT · REPEAT`) scrubs upward with subtle horizontal drift:
    `gsap.to('.mono-five', {xPercent: -12, scrollTrigger: {trigger: '#personality', scrub: 1}})`

### Stage 07 — Transmission Laser Road Infinite Pulse (`#contact`)
- **The Laser Road:** Continuous 1px line across the viewport width.
- **Orb Animation:** A 6px Signal Red glowing sphere moves along the datum line in an infinite 7-second linear loop (`gsap.to('#laser-orb', {x: '100vw', repeat: -1, duration: 7, ease: 'none'})`).

---

## 4. Accessibility & Reduced Motion Protocol

When `window.matchMedia('(prefers-reduced-motion: reduce)').matches` is true:
1. `#intro` is completely eliminated before the first frame renders (`intro.remove()`).
2. All ScrollTrigger scrubbing timelines are bypassed; all elements initialize directly at their final resting states (`opacity: 1`, `transform: none`, `clip-path: none`).
3. Liquid displacement shaders and mouse parallax listeners are completely disconnected.
4. Background colors are set directly via static CSS classes (`.dk` and `.lt`).
