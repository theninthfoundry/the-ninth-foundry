# THE NINTH FOUNDRY — ASSET ART DIRECTION SPECIFICATION
**Document ID:** `DOC-08-ASSET-DIRECTION`  
**Date:** November 2026  
**Auditor:** Principal Creative Director & Visual Art Director  
**Subject:** Sreeshanth Namireddy

---

## 1. Asset Curation Doctrine

Every visual asset in The Ninth Foundry must function as an authentic archival exhibit. Generic stock imagery, futuristic purple AI illustrations, and fabricated screenshots are strictly forbidden.

### The Five Visual Categories:
1. **Human & Subject:** High-contrast, monochromatic editorial studio portraiture.
2. **Technical & Systems:** Code diffs, architecture schematics, and terminal inspection views.
3. **Evidence & Document:** Audit timelines, structured paperwork, and financial dispute ledgers.
4. **Reconnaissance & Spatial:** True multispectral satellite imagery, GIS change detection, and coordinate reticles.
5. **Mechanical & Industrial:** Macro engineering photography, Formula 1 suspension components, and industrial design artifacts.

---

## 2. Complete Asset Art-Direction Roster

### 01. Hero Portrait
- **File Path:** `assets/images/portrait/hero.jpg`
- **Section:** Section 01 — Hero (`#hero .portrait`)
- **Subject:** Sreeshanth Namireddy.
- **Aspect Ratio:** 4:5 (1200 × 1500 px).
- **Composition & Crop:** Asymmetric shoulder-to-head portrait, gaze direct or slightly off-axis. Subject framed against a deep neutral background.
- **Color Treatment:** Strict black and white. Contrast boosted to 1.08, deep shadows preserved without crushed mid-tones.
- **Desktop Placement:** Right-aligned, `top: 150px`, width `min(27vw, 400px)`. Sandwiched physically between headline lines 1 and 2.
- **Mobile Placement:** Centered or right-aligned below metadata bar, width `64%`.
- **Loading Priority:** Eager (High). Preload candidate.

### 02. Manifesto Fragment
- **File Path:** `assets/images/editorial/fragment.jpg`
- **Section:** Section 02 — Manifesto (`#manifesto .frag`)
- **Subject:** Brutalist architectural texture, concrete formwork seam, or precision workshop workbench.
- **Aspect Ratio:** 3:2 (1200 × 800 px).
- **Composition & Crop:** Close-up macro detail showing tactile material grain and physical geometry.
- **Color Treatment:** Warm desaturated tones harmonizing with Archive Paper (`#EAE7DF`).
- **Desktop Placement:** Right column beneath manifesto paragraphs, width 100% of column.
- **Mobile Placement:** Full-width block below manifesto text.
- **Loading Priority:** Lazy.

### 03. Veri.fy Visual
- **File Path:** `assets/images/projects/veri-fy.jpg`
- **Section:** Section 02 — Selected Work (`.p1`)
- **Subject:** Behavioral verification test harness, AST code comparison interface, or test delta visualization.
- **Aspect Ratio:** 21:9 Ultra-Wide (2100 × 900 px).
- **Composition & Crop:** Panoramic widescreen view of the verification system in active inspection state.
- **Color Treatment:** Monochromatic slate darks with subtle green/amber terminal highlights. Deep black border (`#0e0e0d`).
- **Desktop Placement:** Columns 1–12 full-bleed width.
- **Mobile Placement:** 4:3 cropped aspect ratio on mobile.
- **Loading Priority:** Lazy.

### 04. Overcharge Desk Visual
- **File Path:** `assets/images/projects/overcharge-desk.jpg`
- **Section:** Section 02 — Selected Work (`.p2`)
- **Subject:** Structured evidence audit trail, financial ledger reconciliation screen, or dispute document hierarchy.
- **Aspect Ratio:** 4:5 (1200 × 1500 px).
- **Composition & Crop:** Vertical document-oriented plate showing structured tabular data and evidence cards.
- **Color Treatment:** Muted archival tones matching warm paper (`#d6d2c5`).
- **Desktop Placement:** Columns 1–5 (left side of split composition).
- **Mobile Placement:** 100% width block above project description.
- **Loading Priority:** Lazy.

### 05. Veil Visual
- **File Path:** `assets/images/projects/veil.jpg`
- **Section:** Section 02 — Selected Work (`.p3`)
- **Subject:** Dark browser security perception overlay, DOM inspection boundary, or agent telemetry shield.
- **Aspect Ratio:** 16:8 (1920 × 960 px).
- **Composition & Crop:** Cinematic widescreen banner breaking out past standard grid gutters.
- **Color Treatment:** Deep obsidian (`#161615`) with muted cobalt blue diagnostic markers.
- **Desktop Placement:** Full breakout with negative margin (`margin: 0 calc(var(--pad) * -1)`).
- **Mobile Placement:** 16:9 full-width container.
- **Loading Priority:** Lazy.

### 06. SatQuery Visual
- **File Path:** `assets/images/projects/satquery.jpg`
- **Section:** Section 02 — Selected Work (`.p4`)
- **Subject:** High-altitude satellite infrared or Synthetic Aperture Radar (SAR) Earth terrain imagery with coordinate grid lines.
- **Aspect Ratio:** 16:10 (1600 × 1000 px).
- **Composition & Crop:** Asymmetric landscape focusing on coastal, geological, or urban infrastructure change detection.
- **Color Treatment:** Deep oceanic slate and false-color terrain tint (`#2b3a46`).
- **Desktop Placement:** Offset to the right (Columns 3–12).
- **Mobile Placement:** 100% width block.
- **Loading Priority:** Lazy.

### 07. Automotive Collection — Machines
- **File Path:** `assets/images/automotive/machine-01.jpg`
- **Section:** Section 05 — Collection (`#colg`, Category A)
- **Subject:** Formula 1 magnesium wheel rim, Porsche GT3 suspension upright, or titanium exhaust manifold.
- **Aspect Ratio:** 3:2 (1200 × 800 px).
- **Composition & Crop:** Macro industrial shot with razor-thin depth of field.
- **Color Treatment:** High-contrast mechanical silver and dark graphite.
- **Desktop Placement:** Columns 1–8.
- **Mobile Placement:** 100% width block.
- **Loading Priority:** Lazy.

### 08. Visual Culture Collection
- **File Path:** `assets/images/collection/visual-01.jpg`
- **Section:** Section 05 — Collection (`#colg`, Category B)
- **Subject:** Swiss international typographic style poster, architectural monograph, or grid layout study.
- **Aspect Ratio:** 4:5 (1200 × 1500 px).
- **Composition & Crop:** Vertical poster format with prominent geometric composition.
- **Color Treatment:** Monochrome black and ivory white.
- **Desktop Placement:** Columns 10–12, pushed down 140px.
- **Mobile Placement:** 100% width block.
- **Loading Priority:** Lazy.

### 09. Industrial Objects Collection
- **File Path:** `assets/images/collection/object-01.jpg`
- **Section:** Section 05 — Collection (`#colg`, Category C)
- **Subject:** Minimalist industrial design physical artifact (e.g. vintage mechanical stopwatch, Braun calculator, Leica camera mechanism).
- **Aspect Ratio:** 1:1 (1200 × 1200 px).
- **Composition & Crop:** Clean overhead square studio capture.
- **Color Treatment:** Neutral studio gray and brushed metal.
- **Desktop Placement:** Columns 2–6.
- **Mobile Placement:** 100% width block.
- **Loading Priority:** Lazy.

### 10. Curiosities Collection
- **File Path:** `assets/images/collection/curiosity-01.jpg`
- **Section:** Section 05 — Collection (`#colg`, Category D)
- **Subject:** Optical prism light refraction, mechanical computing cylinder, or unique laboratory apparatus.
- **Aspect Ratio:** 3:2 (1200 × 800 px).
- **Composition & Crop:** Tactile close-up highlighting physical craftsmanship.
- **Color Treatment:** Desaturated warm amber tones.
- **Desktop Placement:** Columns 7–12, pushed down 70px.
- **Mobile Placement:** 100% width block.
- **Loading Priority:** Lazy.

### 11. Personality Environmental Portrait
- **File Path:** `assets/images/portrait/personality.jpg`
- **Section:** Section 06 — The Human (`#person .pt`)
- **Subject:** Sreeshanth Namireddy working in an active engineering workshop or laboratory environment.
- **Aspect Ratio:** 4:5 (1200 × 1500 px).
- **Composition & Crop:** Candid observational framing with natural workshop lighting.
- **Color Treatment:** Muted monochrome with soft tonal roll-off (contrast 1.05).
- **Desktop Placement:** Columns 1–6 with Fig. 02 annotation.
- **Mobile Placement:** 100% width block above biographical narrative.
- **Loading Priority:** Lazy.

