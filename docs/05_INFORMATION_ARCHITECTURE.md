# THE NINTH FOUNDRY — INFORMATION ARCHITECTURE
**Document ID:** `DOC-05-IA`  
**Date:** November 2026  
**Auditor:** Principal Creative Director & Information Architect  
**Scope:** Complete structural, navigational, and content blueprint for the refined 7-stage experience.

---

## 1. Global Navigation & Information Model

The refined architecture eliminates the dead-end loops and duplicated content identified in the Phase 01 audit. The website is structured as a continuous 7-section exhibition, accessible via both linear vertical scroll and non-linear modal navigation.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 00 · APERTURE INTRO  │ 1.1s Vector Aperture Reveal · Monolith Logo · Iris    │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ 01 · THE HERO        │ Sreeshanth Namireddy · 4:5 Portrait · Telemetry       │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ 02 · SELECTED WORK   │ 4 Curated Case Files (Veri.fy, Overcharge, Veil, Sat) │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ 03 · THE INDEX       │ Complete Archive Catalog (Zero Duplication)          │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ 04 · THE WORKBENCH   │ Real Engineering Investigations & Schemas            │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ 05 · THE COLLECTION  │ Machines, Visual Culture, Objects · Kinematic Wheel  │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ 06 · THE HUMAN       │ The Builder Behind the Systems · Monolithic Five      │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ 07 · TRANSMISSION    │ Verified Contact Channels · Laser Road Continuous Orb │
└──────────────────────┴──────────────────────────────────────────────────────┘
```

> **Editorial Note on Field Notes / Journal:**  
> In accordance with the authenticity mandate, the unwritten Field Notes section is deferred until genuine published essays exist. This eliminates the public "Unpublished" label and keeps the portfolio 100% credible.

---

## 2. Detailed Section Blueprint

### Section 00 — The Opening Sequence
- **Canvas:** Foundry Black (`#111110`).
- **Duration:** 1.1s target execution.
- **Components:**
  - Geometric monolithic "N" SVG mark (`#lstroke`).
  - Vermilion orbit dial (`#iring`).
  - Wordmark: `THE NINTH FOUNDRY` / `SREESHANTH NAMIREDDY`.
  - Accessible Skip button (`#skip`).
- **Transition:** Rapid vector stroke draw (0.8s) followed immediately by an iris-style mask aperture expansion (`scale: 110`) that seamlessly reveals the hero. Zero simulated percentage counters.

### Section 01 — The Hero
- **Canvas:** Foundry Black (`#111110`), `min-height: 100svh`.
- **Top Bar (`#hd`):**
  - Left: `THE NINTH FOUNDRY`
  - Center: `HOME`, `WORK`, `INDEX`, `COLLECTION`, `HUMAN`
  - Right: `LET'S TALK ↗` with pulsing emerald beacon (`#B9C77A`)
- **Metadata Bar:**
  - Left: `INDEPENDENT BUILDER / SOFTWARE / AI / EXPERIMENTAL SYSTEMS`
  - Right: `HYDERABAD, INDIA / X 0.00 · Y 0.00`
- **Main Typography:**
  - `SREESHANTH` (Z-index: 0, behind portrait)
  - `NAMIREDDY.` (Z-index: 2, in front of portrait with `mix-blend-mode: difference`)
- **Positioning Statement:**
  - *"Engineering intelligent systems, software verification architectures, and experimental machines."*
- **Hero Image:**
  - Right-anchored 4:5 monochrome portrait of Sreeshanth Namireddy.
  - Flanked by `Fig. 01 — Subject` annotation and red crosshair `+`.

### Interlude — The Kinetic Marquee
- Single-line structural ribbon (`border-block: 1px solid #343431`).
- Typography: Outline serif at 7vw (`-webkit-text-stroke: 1px #92918B`).
- Content: `INTELLIGENT SYSTEMS — SOFTWARE VERIFICATION — EXPERIMENTAL MACHINES — AUTONOMOUS AGENTS —`

### Section 02 — Selected Work (4 Curated Case Files)
- **Canvas:** Archive Paper (`#EAE7DF`).
- **Heading:** `01 — SELECTED WORK` / *"Things that moved from an idea into an engineered system."*
- **Curated Projects:**
  1. **001 · Veri.fy:**
     - *Focus:* AI Systems / Software Verification
     - *Layout:* 21:9 Ultra-wide full-width feature.
     - *Copy:* A behavioural verification architecture exploring how changes in AI-generated software can be inspected, compared, and validated.
     - *Destination:* Verified GitHub repository / Case File modal.
  2. **002 · Overcharge Desk:**
     - *Focus:* Financial Systems / Evidence
     - *Layout:* Asymmetric split (5 cols 4:5 image / 5 cols editorial copy).
     - *Copy:* An evidence-driven investigation workflow for identifying, documenting, and resolving potential financial overcharges.
     - *Destination:* Verified repository / Case File modal.
  3. **003 · Veil:**
     - *Focus:* AI Agents / Browser Security
     - *Layout:* Full-bleed breakout dark frame (16:8 ratio).
     - *Copy:* An experimental browser-agent perception and safety system designed to examine browser interactions and potential information leakage.
     - *Destination:* Verified repository / Case File modal.
  4. **004 · SatQuery:**
     - *Focus:* GEOINT / Satellite Intelligence
     - *Layout:* Asymmetric right-aligned landscape (16:10 ratio).
     - *Copy:* An AI-assisted satellite intelligence project exploring geospatial information and multi-spectral change detection.
     - *Destination:* Verified repository / Case File modal.

### Section 03 — The Index (Comprehensive Archive)
- **Canvas:** Archive Paper (`#EAE7DF`).
- **Heading:** `02 — THE ARCHIVE` / *"Complete inventory of secondary systems, tools & investigations."*
- **Rule:** **Zero duplication.** Excludes the 4 featured works; showcases the remaining active systems:
  - `005 · BHOW` (Identity / Canine Reunification Registry · 2025 · Active Prototype)
  - `006 · Dreaming Machine` (Creative Technology / Generative Canvas · 2026 · Experimental)
  - `007 · Raksha AI` (Cybersecurity / Threat Detection System · 2025 · Research)
  - `008 · CampusBite` (Product Engineering / Real-time Ordering · 2024 · Deployed)
  - `009 · Ride Registry` (Database Systems / Fleet Management · 2024 · Open Source)
- **Interaction:** Floating preview card (`#pv`) tracks cursor on hover, showing preview graphic with boundary clamping. Clicking opens verified external repository.

### Section 04 — The Workbench (formerly Laboratory)
- **Canvas:** Foundry Black (`#111110`).
- **Heading:** `03 — THE WORKBENCH` / *"A record of things currently being designed, tested, and built."*
- **Composition:** Asymmetric 12-column engineering workbench:
  - **Slot 01 (Cols 1–7, Rows 1–3):** Vector Blueprint Calibration Plate. Displays interactive measurement calipers, coordinate rings, and dynamic token telemetry.
  - **Slot 02 (Cols 8–12):** *Local Model Inference Engine* (Testing quantized small models on consumer hardware).
  - **Slot 03 (Cols 8–12):** *Autonomous Agent Perception Boundary* (DOM tree inspection & prompt injection defense).
  - **Slot 04 (Cols 1–6):** *Kinematic Motion Algorithms* (Mathematical scroll-coupling in web viewports).
  - **Slot 05 (Cols 7–12):** *High-Throughput Verification Pipelines* (AST diff analysis and mutation testing).

### Section 05 — The Collection
- **Canvas:** Archive Paper (`#EAE7DF`).
- **Heading:** `04 — THE COLLECTION` / *"Objects, influences, motorsports & mechanical curiosities."*
- **Four Curated Divisions:**
  - `A · Machines` (Motorsport telemetry, Formula 1 suspension geometry, Porsche engineering)
  - `B · Visual Culture` (Swiss typographic posters, brutalist architectural monographs)
  - `C · Objects` (Precision industrial design, Dieter Rams artifacts, mechanical chronographs)
  - `D · Curiosities` (Optical refraction, computing history, unusual physical mechanisms)
- **The Kinematic Mechanical Wheel (`#wheel` & `#track`):**
  - Guide track across baseline with milestone ticks at 0%, 33%, 66%, 100%.
  - SVG wheel rolls across track with rotation bound to linear travel: $\theta = \frac{x}{R} \cdot \frac{180}{\pi}$.
  - Passing milestone markers illuminates the corresponding collection category.

### Section 06 — The Human
- **Canvas:** Foundry Black (`#111110`).
- **Heading:** `05 — THE HUMAN RECORD` / *"Curious by default. A builder by instinct."*
- **Content:**
  - Left: 4:5 environmental portrait of Sreeshanth Namireddy (`Fig. 02 — Observer`) with scroll clip-path reveal.
  - Right: Concise biographical essay detailing how the precision of motorsports and mechanical systems informs his approach to resilient software engineering.
  - Baseline: The Monolithic Five typographic ribbon:
    $$\text{BUILD}\quad\text{EXPLORE}\quad\text{QUESTION}\quad\text{EXPERIMENT}\quad\text{REPEAT}$$

### Section 07 — Transmission (Contact & Colophon)
- **Canvas:** Foundry Black (`#111110`).
- **Heading:** *"HAVE SOMETHING INTERESTING IN MIND? Let's make something that shouldn't exist yet."*
- **Verified Transmission Channels:**
  - Verified Email: `sreeshanth.namireddy@gmail.com` with magnetic pull.
  - Outbound Channels: `GITHUB ↗` (`github.com/SreeshanthNamireddy`), `LINKEDIN ↗` (`linkedin.com/in/sreeshanth-namireddy`).
  - Zero placeholder text (`[ verified email ... ]` completely eliminated).
- **The Continuous Laser Road:** 1px horizontal rule with a red laser orb animating infinitely across the screen.
- **Colophon:**
  - *THE NINTH FOUNDRY · AN ARCHIVE OF BECOMING.*
  - *INDEPENDENTLY BUILT. CONTINUOUSLY EVOLVING.*
  - *© 2026 · [BACK TO TOP ↑]*

