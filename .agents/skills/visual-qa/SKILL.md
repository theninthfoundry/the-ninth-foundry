---
name: visual-qa
description: Responsive viewport verification, accessibility compliance, content authenticity, and zero-defect QA.
---

# Visual QA Skill

Use this skill before approving any change, merging pull requests, or deploying updates to ensure strict design standards, responsive stability, and zero content defects.

## Responsibilities
1. Inspect the visual presentation across standard testing viewports:
   - `1440 × 900` (Standard Desktop)
   - `1280 × 800` (Compact Laptop)
   - `1024 × 768` (Small Desktop / Landscape Tablet)
   - `768 × 1024` (Portrait Tablet)
   - `390 × 844` (Modern Mobile / iPhone)
   - `360 × 800` (Narrow Mobile / Android)
2. Detect and eliminate horizontal scrolling, text clipping, and overlapping fixed elements.
3. Validate accessibility standards (WCAG 2.1 AA contrast, keyboard `:focus-visible`, dialog focus trapping).
4. Guard content credibility: purge all placeholders, bracketed strings, unwritten articles, and cyclical anchor loops.

## Process
1. **Automated Inspection:** Launch local preview and inspect DOM tree, console logs, and network tab for 404s or uncaught errors.
2. **Multi-Viewport Audit:** Check typography scaling at extreme viewports (especially 360px width) to verify headline wrapping without overflow.
3. **Link & Loop Verification:** Click every link, card, and row to verify that destination URLs resolve to genuine targets.
4. **Scaffolding Sweep:** Run a regex search for `[`, `to verify`, `to supply`, `add date`, or `unpublished` across all public-facing text.

## Quality Checklist
- [ ] Zero console errors or unhandled exceptions.
- [ ] No horizontal viewport overflow at any breakpoint.
- [ ] Bottom HUD telemetry does not collide on mobile screens.
- [ ] All keyboard focus outlines are visible with 2px Signal Red highlight.
- [ ] All external links open in a new tab with `rel="noopener noreferrer"`.

