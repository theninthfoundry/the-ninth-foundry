---
name: interaction-engineering
description: Motion choreography, GSAP ScrollTrigger engineering, kinematic physics, and shader implementation.
---

# Interaction Engineering Skill

Use this skill when developing or debugging animations, scroll scrubbing, SVG filters, canvas interactions, pointer physics, or kinematic simulations.

## Responsibilities
1. Engineer reliable GSAP 3.12.5 + ScrollTrigger animation sequences.
2. Build mathematically accurate mechanical motion (e.g. scroll-linked wheel rotation: $\theta = \frac{x}{R} \cdot \frac{180}{\pi}$).
3. Implement GPU-accelerated transforms (`translate3d`, `scale`, `opacity`) without layout thrashing.
4. Guarantee smooth pointer interactions (vernier cursor, magnetic links, liquid turbulence displacement).
5. Implement accessible fallbacks for `prefers-reduced-motion: reduce` and non-pointer (touch) devices.

## Process
1. **Scope and Isolate:** Encapsulate animation timelines within modular scopes to prevent memory leaks or selector collisions.
2. **Bind Scroll Progress:** Use ScrollTrigger `scrub: true` or small damping (`scrub: 0.6`) for scroll-bound elements. Avoid unthrottled window scroll listeners.
3. **Handle Resize & Orientation:** Ensure ScrollTrigger refreshes on layout recalculation (`ScrollTrigger.refresh()`).
4. **Enforce Touch Safety:** Disable hover-dependent displacement shaders and mouse-following preview cards on mobile/touch viewports (`pointer: coarse`).

## Quality Checklist
- [ ] 60fps performance verified in Chrome DevTools Performance monitor.
- [ ] No simulated/fake timers or artificial delays in the loading sequence.
- [ ] All elements are visible and fully styled when JavaScript is disabled or reduced motion is active.
- [ ] Magnetic anchors settle cleanly via elastic decay curves on mouseout.
- [ ] SVG displacement maps reset to `scale: 0` cleanly without graphical artifacts.

