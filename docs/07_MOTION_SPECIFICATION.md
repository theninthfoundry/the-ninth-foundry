# THE NINTH FOUNDRY — MOTION & INTERACTION SPECIFICATION
**Document ID:** `DOC-07-MOTION`  
**Date:** November 2026  
**Auditor:** Senior Interaction Designer & Creative Technologist  
**Core Framework:** GSAP 3.12.5 + ScrollTrigger via CDN

---

## 1. Motion Philosophy: Restraint, Weight & Kinematics

Motion in The Ninth Foundry is not decorative eye-candy. It serves three precise architectural functions:
1. **Spatial Continuity:** Connecting sections without abrupt page jumps.
2. **Mechanical Realism:** Binding physical movement (wheel rotation, laser datums) to exact mathematics.
3. **Editorial Hierarchy:** Guiding the eye through disciplined text line masks and staggered reveals.

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

## 3. Choreography of Key Animation Sequences

### 3.1 The Aperture Opening (Section 00)
- **Duration:** 1.1s total (instant on revisit).
- **Choreography:**
  1. `t = 0.0s`: Stroke `#lstroke` begins drawing from `strokeDashoffset: 1` to `0` over 0.8s via `power2.inOut`.
  2. `t = 0.2s`: Orbit ring `#iring` rotates 360° over 1.6s.
  3. `t = 0.3s`: Wordmark `.iname b` and subtitle `.iname i` reveal via vertical clip.
  4. `t = 0.8s`: Aperture `#hole` expands from `scale: 1` to `scale: 110` over 0.6s via `power3.in`.
  5. `t = 1.1s`: Intro overlay self-destructs (`intro.remove()`), initiating the Hero entrance.
- **Bypass Rule:** If `sessionStorage.getItem('nf')` is set, `#intro` is removed synchronously, executing the Hero entrance at 1.6x speed.

### 3.2 The Hero Entrance & Mouse Parallax (Section 01)
- **Entrance:**
  - Split characters (`.split .ch`) slide up from `yPercent: 118` to `0` with `stagger: 0.035` and `ease: power3.out`.
  - Portrait expands from `clipPath: inset(0 0 100% 0)` to `inset(0 0 0% 0)` over 1.2s.
  - Metadata and subtitle fade in with `opacity: 0` to `1` over 0.8s.
- **Mouse Parallax (`if (fine)`):**
  - Uses `gsap.quickTo` on `.portrait` (`x * -26, y * -18`) and `.hero-name` (`x * 10`).
  - Computes normalized coordinates $(-0.5 \le x, y \le +0.5)$ and prints live to `<em id="co">X [X] · Y [Y]</em>`.
- **Scroll Scrub:**
  - Name moves up: `yPercent: -24`.
  - Portrait zooms: `scale: 1.12`.
  - Metadata and subtitle fade to 0.

### 3.3 The Manifesto Chromatic Shift (Section 02)
- **ScrollTrigger Configuration:**
  - `trigger: '#manifesto'`
  - `start: 'top 92%'`
  - `end: 'top 22%'`
  - `scrub: true`
- **Interpolation:**
  - `backgroundColor: #111110` $\to$ `#EAE7DF`
  - `color: #F8F7F3` $\to$ `#171715`
  - Left vertical datum line (`.vl`) `scaleY: 0` $\to$ `1` (`transformOrigin: top`).

### 3.4 Selected Work Liquid Displacement Shader (Section 03)
- **Trigger:** Hover over any `.pj` container.
- **Filter Mechanics:** Connects to SVG filter `#disp` (`<feDisplacementMap id="dm">`).
- **Choreography:**
  - `mouseenter`: GSAP tweens `#dm` attribute `scale` from `0` to `34` over 0.4s via `power2.out`. Target image zooms to `scale: 1.025`.
  - `mouseleave`: GSAP tweens `scale` from `34` to `0` over 0.6s via `power2.inOut`.

### 3.5 Archive Matrix Floating Preview Card (Section 04)
- **Positioning:** Fixed 280px wide card (`#pv`) with `pointer-events: none`.
- **Motion Binding:** Pointer position updated via `gsap.quickTo(pv, 'x', {duration: 0.45})` and `gsap.quickTo(pv, 'y', {duration: 0.45})`.
- **Boundary Clamping:**
  ```javascript
  const clampedX = Math.min(e.clientX + 28, window.innerWidth - 300);
  const clampedY = Math.max(20, Math.min(e.clientY - 90, window.innerHeight - 240));
  px(clampedX);
  py(clampedY);
  ```

### 3.6 Kinematic Mechanical Wheel (Section 05)
- **Track Trigger:** `#track` (`start: 'top 88%'`, `end: 'bottom 30%'`, `scrub: true`).
- **Mathematical Formula:**
  $$\text{distance} = \text{progress} \times (\text{trackWidth} - \text{wheelWidth})$$
  $$\text{rotation} = \left(\frac{\text{distance}}{\text{radius}}\right) \times 57.2958^\circ$$
- **Choreography:**
  - Translates `#wheel` across X-axis.
  - Rotates internal spoke group `#wg` around its center point (`100 100`).
  - Highlights milestone markers (A, B, C, D) in Signal Red as the wheel rolls past their X coordinates.

---

## 4. Accessibility & Reduced Motion Protocol

When `window.matchMedia('(prefers-reduced-motion: reduce)').matches` is true:
1. `#intro` is completely eliminated before the first frame renders (`intro.remove()`).
2. All ScrollTrigger scrubbing timelines are bypassed; all elements initialize directly at their final resting states (`opacity: 1`, `transform: none`, `clip-path: none`).
3. Liquid displacement shaders and mouse parallax listeners are completely disconnected.
4. Background colors are set directly via static CSS classes (`.dk` and `.lt`).

