# THE NINTH FOUNDRY — RESPONSIVE DESIGN SPECIFICATION
**Document ID:** `DOC-09-RESPONSIVE`  
**Date:** November 2026  
**Auditor:** Senior Frontend Engineer & Accessibility Specialist  
**Design Philosophy:** Art-Directed Multi-Tier Composition (Never Crude Stacking)

---

## 1. Responsive Viewport Tier Architecture

The current implementation relies on a single blanket breakpoint at 900px that flattens all compositions to 100% width. The refined specification introduces a disciplined 3-tier responsive grid:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ TIER 1: DESKTOP & WIDESCREEN (≥ 1024px)                                     │
│ 12-Column Grid · Asymmetric Compositions · Custom Cursor · Mouse Parallax   │
├─────────────────────────────────────────────────────────────────────────────┤
│ TIER 2: TABLET & COMPACT SCREENS (768px – 1023px)                           │
│ 8-Column Grid · Paired Asymmetric Compositions · Wheel Diameter 150px       │
├─────────────────────────────────────────────────────────────────────────────┤
│ TIER 3: MOBILE & NARROW PHONES (< 768px)                                    │
│ 4-Column Grid · Full-Screen Overlay Nav · Native Touch Interactions         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Viewport-by-Viewport Implementation Rules

### 2.1 Standard Desktop (1440 × 900 px) & Compact Laptop (1280 × 800 px)
- **Container:** `max-width: 1600px; padding: 0 64px;`
- **Hero:**
  - Full viewport height (`min-height: 100svh`).
  - Portrait width: `min(27vw, 400px)` positioned at `top: 150px; right: 64px`.
  - Name line 1 sits behind portrait; line 2 sits in front with `mix-blend-mode: difference`.
  - Active mouse parallax and dynamic coordinate readout (`#co`).
- **Selected Work:**
  - Veri.fy: 21:9 full width.
  - Overcharge Desk: 5fr / 1fr / 5fr split grid.
  - Veil: Full-bleed negative-margin breakout.
  - SatQuery: Columns 3–12 offset right.
- **Collection & Wheel:** Full 190px wheel diameter rolling across 210px guide track with complete milestone labels (Tread, Rim, Hub).
- **HUD & Cursor:** Full vernier cursor badge (`#cur`) active on pointer fine. Fixed bottom telemetry visible (`#fl` and `#fr`).

### 2.2 Portrait Tablet & Small Landscape (768px – 1023px)
- **Container:** `padding: 0 36px;`
- **Columns:** 8-column layout.
- **Header:** Desktop navigation links remain visible up to 900px; between 768px and 899px, compact text labels (`Home · Work · Collection · Human · Contact`).
- **Hero:**
  - Portrait scales to `width: 38vw`, positioned slightly higher (`top: 120px`).
  - Headline font size clamps smoothly: `clamp(48px, 12vw, 120px)`.
- **Selected Work:**
  - Veri.fy: 16:9 ratio across 8 columns.
  - Overcharge Desk: 4 columns visual, 4 columns editorial copy.
  - Veil: 16:8 ratio across 8 columns.
  - SatQuery: 8 columns width, right-biased alignment.
- **Collection & Wheel:** Wheel scales down to 150px diameter; guide track height drops to 160px.
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
  - This guarantees zero overlap on 360px and 390px viewports.
- **Hero Mobile Composition:**
  - Metadata bar is stacked: Left label top, location underneath.
  - Portrait moves into the flow: `width: 72%; margin: 24px 0 20px auto;` (aspect ratio 4:5 preserved).
  - Headline clamp lower bound adjusted to prevent overflow on 360px screens:
    ```css
    @media (max-width: 480px) {
      .hero-name {
        font-size: clamp(38px, 11.5vw, 64px);
        line-height: 0.9;
        white-space: normal;
        word-break: normal;
      }
    }
    ```
- **Selected Work:**
  - Each project renders as an art-directed mobile card.
  - Veri.fy aspect ratio adjusts from 21:9 to 4:3 for rich vertical presence on phones.
  - Overcharge Desk renders visual first (4:5), followed by editorial typography and metadata.
- **Collection & Wheel:**
  - Wheel diameter drops to 110px.
  - Track height scales to 130px.
  - Milestone ticks .33 and .66 hide; 0% and 100% boundary markers remain visible.
- **Touch Optimizations:**
  - Custom vernier cursor `#cur` and floating hover preview `#pv` are strictly `display: none`.
  - All interactive tap targets (buttons, links, rows) maintain a minimum touch bounding box of 44 × 44 px.
  - Native scrolling enabled without velocity-altering hijacking.

