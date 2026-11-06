---
name: interaction-engineering
description: Motion as an artwork, GSAP ScrollTrigger engineering, kinematic physics, non-linear drift, and shader implementation.
---

# Interaction Engineering Skill (Phase 02.5 — The Beauty of the Unfinished)

Use this skill when developing motion systems, scroll scrubbing, SVG filters, pointer interactions, or kinematic simulations.

## Core Directives
1. **Motion as an Artwork (Not Generic Scrolling):**
   - Reject uniform "slide-up on scroll" templates.
   - Establish varied motion behaviors: some elements drift at independent speeds, some remain stationary as anchors, some appear briefly, and some transform spatially.
2. **Kinematic Physical Realism:**
   - Maintain mathematically bound rotation for the mechanical wheel: $\theta = \left(\frac{x}{R}\right) \cdot \left(\frac{180}{\pi}\right)$.
   - Use elastic spring decay (`elastic.out(1.1, 0.4)`) on magnetic link releases.
3. **Restrained Pointer Interactions:**
   - Subtle mouse parallax and coordinate tracking on fine-pointer devices.
   - Liquid turbulence displacement filters (`<feDisplacementMap>`) that bloom and relax organically.
4. **Performance & GPU Offloading:**
   - Exclusively animate `transform` and `opacity`.
   - Never animate layout properties (`width`, `height`, `margin`, `top`, `left`) inside scroll listeners.
5. **Accessibility & Reduced Motion:**
   - Strict bypass of all timelines when `prefers-reduced-motion: reduce` is active.
   - Safe layout rendering when JavaScript is disabled or delayed.

## Quality Checklist
- [ ] 60fps verified across desktop and mobile.
- [ ] Intro sequence completes in under 1.1s without artificial delay loops.
- [ ] Floating preview card (`#pv`) includes boundary clamping to prevent off-screen clipping.
- [ ] Touch devices completely bypass hover-dependent shader transformations.
