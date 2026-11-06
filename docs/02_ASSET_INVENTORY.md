# THE NINTH FOUNDRY — ASSET INVENTORY & ART DIRECTION
**Document ID:** `DOC-02-ASSETS`  
**Date:** November 2026  
**Auditor:** Principal Creative Director & Frontend Quality Engineer  
**Scope:** Complete inventory of all graphic, photographic, vector, and typography assets.

---

## 1. Executive Summary of Assets

At the time of this audit, **zero image files exist** in the repository or on the live deployment. Every visual container relies on the CSS `.art` fallback mechanism (`onerror="this.remove()"`). 

To achieve the caliber of an award-winning digital archive, every image must be treated as an art-directed piece of evidence. Generic stock photography or uncurated AI renders must be strictly avoided.

---

## 2. Complete Asset Matrix

| Index | Asset Path | Status | Intended Section | Aspect Ratio | Dimensions | Art Direction & Treatment | Sourcing Priority |
| :---: | :--- | :---: | :--- | :---: | :---: | :--- | :---: |
| **01** | `assets/images/portrait/hero.jpg` | Missing (404) | Section 01 — Hero (`#hero .portrait`) | 4:5 | 1200 × 1500 | Monochromatic editorial portrait of Sreeshanth Namireddy. High-contrast studio lighting, deep blacks, architectural shadows. Grayscale with 1.08 contrast. | **P0 (Critical)** |
| **02** | `assets/images/editorial/fragment.jpg` | Missing (404) | Section 02 — Manifesto (`#manifesto .frag`) | 3:2 | 1200 × 800 | Architectural detail, brutalist concrete form, or mechanical workshop fragment. Desaturated warm tone matching `#EAE7DF`. | **P1 (High)** |
| **03** | `assets/images/projects/veri-fy.jpg` | Missing (404) | Section 03 — Selected Work (`.p1`) | 21:9 | 2100 × 900 | Technical diagnostic inspection interface. Monochromatic terminal telemetry, code diff visualization, or behavioral test graph. Deep black background (`#0e0e0d`). | **P0 (Critical)** |
| **04** | `assets/images/projects/overcharge-desk.jpg` | Missing (404) | Section 03 — Selected Work (`.p2`) | 4:5 | 1200 × 1500 | Structured evidence documents, audit paper timelines, financial dispute records. Warm paper tone matching `#d6d2c5`. | **P0 (Critical)** |
| **05** | `assets/images/projects/veil.jpg` | Missing (404) | Section 03 — Selected Work (`.p3`) | 16:8 | 1920 × 960 | Dark browser security inspection frame. Agent perception overlays, security handshake telemetry, DOM inspection view. Deep obsidian (`#161615`). | **P0 (Critical)** |
| **06** | `assets/images/projects/satquery.jpg` | Missing (404) | Section 03 — Selected Work (`.p4`) | 16:10 | 1600 × 1000 | High-resolution satellite reconnaissance imagery, false-color multispectral SAR or infrared terrain view with coordinate reticles. Slate blue tint (`#2b3a46`). | **P0 (Critical)** |
| **07** | `assets/images/projects/bhow.jpg` | Missing (404) | Section 03 — Selected Work (`.p5`) | 4:5 | 1200 × 1500 | Warm documentary canine identification photography paired with clean registry software interface. Earthy amber/leather palette (`#c9a27c`). | **P0 (Critical)** |
| **08** | `assets/images/projects/dreaming-machine.jpg` | Missing (404) | Section 03 — Selected Work (`.p6`) | 1:1 | 1200 × 1200 | Generative creative coding visualization, interactive particle simulation, or shader topography. Warm monochrome canvas (`#d1cec4`), rotated -1.5°. | **P0 (Critical)** |
| **09** | `assets/images/automotive/machine-01.jpg` | Missing (404) | Section 06 — Collection (`#colg`, Category A) | 3:2 | 1200 × 800 | Macro mechanical engineering photograph: racing wheel rim, titanium suspension wishbone, or engine intake runner. Cinematic lighting. | **P1 (High)** |
| **10** | `assets/images/collection/visual-01.jpg` | Missing (404) | Section 06 — Collection (`#colg`, Category B) | 4:5 | 1200 × 1500 | Swiss graphic design poster, brutalist typography proof, or architectural blueprint fragment. Crisp, high-contrast monochrome. | **P1 (High)** |
| **11** | `assets/images/collection/object-01.jpg` | Missing (404) | Section 06 — Collection (`#colg`, Category C) | 1:1 | 1200 × 1200 | Precision industrial design object (e.g. vintage mechanical stopwatch, Braun calculator, Leica camera mechanism). Studio neutral lighting. | **P1 (High)** |
| **12** | `assets/images/collection/curiosity-01.jpg` | Missing (404) | Section 06 — Collection (`#colg`, Category D) | 3:2 | 1200 × 800 | Optical prism refraction, mechanical computing cylinder, or unusual physical prototype fragment. | **P1 (High)** |
| **13** | `assets/images/portrait/personality.jpg` | Missing (404) | Section 07 — Personality (`#person .pt`) | 4:5 | 1200 × 1500 | Secondary environmental portrait of Sreeshanth Namireddy. Candid, working in a workshop or laboratory setting. Grayscale with 1.05 contrast. | **P1 (High)** |
| **14** | `assets/images/og-image.jpg` | Missing | Meta Tags & Social Sharing (`<head>`) | 1.91:1 | 1200 × 630 | Editorial card featuring The Ninth Foundry brandmark, oversized typography, and coordinates. Dark theme (`#111110`). | **P2 (Medium)** |

---

## 3. Vector & SVG Asset Inventory

| Element | Location | Status | Implementation Details | Optimization / Evolution |
| :--- | :--- | :---: | :--- | :--- |
| **Monolith Glyph Mask (`#hole`)** | `index.html` (line 15) | Active | Vector path: `M0 0H44V84H32V52H12V84H0ZM12 12V40H32V12Z`. Scales to 110x to reveal hero. | Mathematically clean; perfectly scalable. Retain. |
| **Orbit Ring (`#iring`)** | `index.html` (line 18) | Active | Radius 62px, stroked with `#C83D32`, dasharray `2 14`. Rotates 360°. | Retain; provides technical calibration motif. |
| **Turbulence Filter (`#disp`)** | `index.html` (line 10) | Active | `<feTurbulence type="fractalNoise" baseFrequency=".01 .035" seed="4"/>` + `<feDisplacementMap>`. | High visual impact; optimize cleanup timing on fast mouseout. |
| **Laboratory Blueprint SVG** | `js/main.js` (line 11) | Active | Multi-ring SVG with coordinate crosshairs, dashed inspection radius, and measurement calipers. | High craft. Expand with subtle hover telemetry. |
| **Mechanical Wheel SVG (`#wg`)** | `index.html` (lines 71–75) | Active | 200×200 viewBox with rim, dashed brake ring, hub, 8 cross-spokes, and red datum center bolt. | Masterpiece detail; rotation math is physically derived from scroll distance. |

---

## 4. Typography Asset Inventory

| Font Family | Source | Weights / Styles | Intended Usage | Fallback Stack |
| :--- | :--- | :--- | :--- | :--- |
| **Instrument Serif** | Google Fonts CDN | Regular (400), Italic (400) | Monumental hero headlines, project titles, manifesto statements, section headers. | `Georgia, 'Times New Roman', serif` |
| **Geist** | Google Fonts CDN | Light (300), Regular (400), Medium (500) | Primary body text, long-form editorial copy, UI buttons, interactive anchors. | `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` |
| **IBM Plex Mono** | Google Fonts CDN | Regular (400), Medium (500) | Technical telemetry, coordinates, section indices, metadata, figure tags, progress percentages. | `ui-monospace, 'SF Mono', Menlo, Consolas, monospace` |

---

## 5. Asset Acquisition & Staging Guidelines

1. **Directory Structure:** Create `assets/images/` with dedicated subdirectories:
   ```
   assets/images/
   ├── portrait/      # hero.jpg, personality.jpg
   ├── projects/      # veri-fy.jpg, overcharge-desk.jpg, veil.jpg, satquery.jpg, bhow.jpg, dreaming-machine.jpg
   ├── automotive/    # machine-01.jpg
   ├── collection/    # visual-01.jpg, object-01.jpg, curiosity-01.jpg
   └── editorial/     # fragment.jpg
   ```
2. **Compression & Sizing:**
   - All JPEG assets must be compressed with MozJPEG at quality 82–85 to ensure crisp high-DPI rendering under 250KB per image.
   - Maintain exact aspect ratios (4:5, 21:9, 16:8, 16:10, 3:2, 1:1) to prevent cumulative layout shift (CLS).
3. **Graceful Fallback Policy:**
   - Until genuine assets are supplied, retain the striated `.art:after` placeholder system so the layout remains functional during local testing.

