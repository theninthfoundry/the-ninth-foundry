---
name: visual-qa
description: Responsive viewport verification, intentional vs accidental asymmetry audits, accessibility compliance, and zero-defect QA.
---

# Visual QA Skill (Phase 02.5 — The Beauty of the Unfinished)

Use this skill to audit responsive stability, verify intentional asymmetry, validate accessibility, and enforce strict content authenticity.

## Core Directives
1. **Differentiate Intentional Asymmetry from Accidental Breakage:**
   - Intentional typography bleed (e.g. hero name extending slightly off-screen) must NOT cause horizontal viewport scrollbars on the `<body>` or `<html>` element (`overflow-x: hidden`).
   - Off-grid visual overlays must preserve legibility of all essential text.
2. **Multi-Viewport Responsive Audits:**
   - `1440 × 900` (Standard Desktop)
   - `1280 × 800` (Compact Laptop)
   - `1024 × 768` (Landscape Tablet)
   - `768 × 1024` (Portrait Tablet)
   - `390 × 844` (Mobile Standard)
   - `360 × 800` (Narrow Mobile)
3. **Guard Content Authenticity:**
   - Purge all bracketed scaffolding strings, "to supply" labels, unverified dates, and unwritten articles.
   - Verify that all project links and archive rows point to genuine, live destinations.
4. **Enforce WCAG AA Compliance:**
   - Minimum 4.5:1 contrast for body copy; 3:1 for large display titles.
   - Visible 2px Signal Red focus outlines (`:focus-visible`).
   - Accessible keyboard dismissal (`Escape`) for mobile navigation and index drawers.

## Quality Checklist
- [ ] Zero unhandled JavaScript errors in browser console.
- [ ] No unwanted horizontal scrollbar across all 6 test viewports.
- [ ] Bottom HUD telemetry does not overlap on narrow mobile viewports.
- [ ] Tap targets on touch devices maintain minimum 44 × 44 px bounding box.
