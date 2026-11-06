# THE NINTH FOUNDRY — RESPONSIVE DESIGN SPECIFICATION
**Document ID:** `DOC-09-RESPONSIVE`  
**Date:** November 2026 (Updated Phase 02.5)  
**Auditor:** Senior Frontend Engineer & Accessibility Specialist  
**Design Philosophy:** Art-Directed Multi-Tier Composition & Controlled Imperfection (Never Crude Stacking)  
**Standardized Architecture:** Stages 00–07

---

## 1. Responsive Viewport Tier Architecture

The Ninth Foundry enforces intentional visual imbalance across all device form factors while guaranteeing zero unwanted horizontal scrollbars (`overflow-x: clip`):

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ TIER 1: DESKTOP & WIDESCREEN (≥ 1024px)                                     │
│ 12-Column Grid · Asymmetric Compositions · Custom Cursor · Mouse Parallax   │
├─────────────────────────────────────────────────────────────────────────────┤
│ TIER 2: TABLET & COMPACT SCREENS (768px – 1023px)                           │
│ 8-Column Grid · Paired Asymmetric Compositions · Wheel Diameter 150px       │
├─────────────────────────────────────────────────────────────────────────────┤
│ TIER 3: MOBILE & NARROW PHONES (< 768px)                                    │
│ 4-Column Grid · Full-Screen Overlay Nav · Native Touch Targets (≥ 44×44px)   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Viewport-by-Viewport Implementation Rules (Stages 00–07)

### 2.1 Standard Desktop (1440 × 900 px) & Compact Laptop (1280 × 800 px)
- **Container:** `max-width: 1600px; padding: 0 64px;`
- **Stage 01 (Hero):**
  - Full viewport height (`min-height: 100svh`).
  - Portrait width: `min(27vw, 400px)` positioned off-center at `top: 150px; right: 64px`.
  - Name line 1 sits behind portrait; line 2 sits in front with `mix-blend-mode: difference; margin-right: -4vw`.
  - Active mouse parallax drift and dynamic coordinate readout (`#co`).
- **Stage 02 (Selected Work):**
  - Veri.fy: 21:9 full width.
  - Overcharge Desk: 5fr / 1fr / 5fr asymmetric split grid.
  - Veil: Full-bleed negative-margin breakout.
  - SatQuery: Columns 3–12 offset right.
- **Stage 05 (Collection & Wheel):**
  - Irregular scrapbook masonry with vertical offsets (+140px, -30px, +70px).
  - Full 190px wheel diameter rolling across 210px guide track with complete milestone labels.
- **HUD & Cursor:** Full vernier cursor badge (`#cur`) active on pointer fine. Fixed bottom telemetry visible (`#fl` and `#fr`).

### 2.2 Portrait Tablet & Small Landscape (768px – 1023px)
- **Container:** `padding: 0 36px;`
- **Columns:** 8-column asymmetric grid.
- **Header:** Desktop navigation links remain visible up to 900px; between 768px and 899px, compact text labels (`WORK · INDEX · BENCH · COLLECTION · HUMAN · CONTACT`).
- **Stage 01 (Hero):**
  - Portrait scales to `width: 38vw`, positioned slightly higher (`top: 120px`).
  - Headline font size clamps smoothly: `clamp(48px, 12vw, 120px)`.
- **Stage 02 (Selected Work):**
  - Veri.fy: 16:9 ratio across 8 columns.
  - Overcharge Desk: 4 columns visual, 4 columns editorial copy.
  - Veil: 16:8 ratio across 8 columns.
  - SatQuery: 8 columns width, right-biased alignment.
- **Stage 05 (Collection & Wheel):** Wheel scales down to 150px diameter; guide track height drops to 160px.
- **HUD:** Telemetry remains separated cleanly at left and right screen edges.

### 2.3 Mobile Standard (390 × 844 px) & Narrow Mobile (360 × 800 px)
- **Container:** `padding: 0 20px;`
- **Columns:** 4-column layout.
- **Header:**
  - Main links hide; `#burger` button becomes active.
  - Clicking `#burger` reveals full-screen slide-down menu `#menu` with large serif typography.
- **Fixed Bottom Telemetry Overlap Fix:**
  - At `< 768px`, the bottom-right section label `#fr` hides its text string and preserves only the `[INDEX +]` button.
  - Bottom-left `#fl` renders compact progress: `009 · [X]%`.
  - Zero collision or text clipping on 360px and 390px viewports.
- **Stage 01 (Hero Mobile Composition):**
  - Metadata bar is stacked: Left label top, location underneath.
  - Portrait moves into the flow: `width: 72%; margin: 24px 0 20px auto;` (aspect ratio 4:5 preserved).
  - Headline clamp formula adjusted to prevent horizontal overflow on 360px screens:
    ```css
    @media (max-width: 480px) {
      .hero-name-1, .hero-name-2 {
        font-size: clamp(38px, 11.5vw, 64px);
        line-height: 0.9;
        white-space: normal;
        word-break: normal;
      }
    }
    ```
- **Stage 02 (Selected Work Mobile):**
  - Each project renders as an art-directed mobile card.
  - Veri.fy aspect ratio adjusts from 21:9 to 4:3 for rich vertical presence on phones.
  - Overcharge Desk renders visual first (4:5), followed by editorial typography and metadata.
- **Stage 05 (Collection & Wheel Mobile):**
  - Wheel diameter drops to 110px.
  - Track height scales to 130px.
  - Milestone ticks .33 and .66 hide; 0% and 100% boundary markers remain visible.
- **Touch Optimizations:**
  - Custom vernier cursor `#cur` and floating hover preview `#pv` are strictly `display: none`.
  - All interactive tap targets (buttons, links, rows) maintain a minimum touch bounding box of 44 × 44 px.
  - Native scrolling enabled without velocity-altering hijacking.
