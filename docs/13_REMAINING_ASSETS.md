# THE NINTH FOUNDRY — REMAINING USER-SUPPLIED ASSETS
**Document ID:** `DOC-13-ASSETS-REMAINING`  
**Date:** November 2026  
**Auditor:** Principal Creative Director & Visual Art Director  
**Subject:** Sreeshanth Namireddy

---

## 1. Asset Drop Directory Architecture

To replace the striped technical fallback plates (`.art:after`) with your authentic photography and screenshots, create the following subdirectories inside `assets/images/`:

```
assets/images/
├── portrait/
│   ├── hero.jpg             # Hero studio portrait (4:5)
│   └── personality.jpg      # Workshop/laboratory candid portrait (4:5)
│
├── projects/
│   ├── veri-fy.jpg          # Veri.fy widescreen interface (21:9)
│   ├── overcharge-desk.jpg  # Overcharge Desk evidence view (4:5)
│   ├── veil.jpg             # Veil browser perception banner (16:8)
│   ├── satquery.jpg         # SatQuery satellite reconnaissance view (16:10)
│   ├── bhow.jpg             # BHOW registry card (4:5)
│   ├── dreaming-machine.jpg # Dreaming Machine generative canvas (1:1)
│   ├── raksha.jpg           # Raksha AI threat overview (16:9)
│   ├── campusbite.jpg       # CampusBite interface (16:9)
│   └── rideregistry.jpg     # Ride Registry schema / dashboard (16:9)
│
├── automotive/
│   └── machine-01.jpg       # Formula 1 / Porsche mechanical macro (3:2)
│
├── collection/
│   ├── visual-01.jpg        # Swiss graphic design / typography poster (4:5)
│   ├── object-01.jpg        # Minimalist industrial object (1:1)
│   └── curiosity-01.jpg     # Optical prism or experimental prototype (3:2)
│
└── editorial/
    └── fragment.jpg         # Brutalist architectural or engineering texture (3:2)
```

---

## 2. Recommended Specifications & Art Direction

| Target File | Aspect Ratio | Min Resolution | Art Direction & Treatment |
| :--- | :---: | :---: | :--- |
| `portrait/hero.jpg` | **4:5** | 1200 × 1500 px | High-contrast black and white, studio lighting, deep architectural shadows. |
| `editorial/fragment.jpg` | **3:2** | 1200 × 800 px | Concrete texture, workshop table, or mechanical drawing seam. Warm monochrome. |
| `projects/veri-fy.jpg` | **21:9** | 2100 × 900 px | Terminal diff telemetry, code AST inspection, dark background (`#0e0e0d`). |
| `projects/overcharge-desk.jpg`| **4:5** | 1200 × 1500 px | Structured evidence ledger, dispute resolution timeline, paper archival tone. |
| `projects/veil.jpg` | **16:8** | 1920 × 960 px | Dark browser security perception overlay, network telemetry boundary. |
| `projects/satquery.jpg` | **16:10** | 1600 × 1000 px | Satellite multispectral terrain view with coordinate annotations. |
| `automotive/machine-01.jpg` | **3:2** | 1200 × 800 px | Motorsport magnesium wheel, titanium suspension wishbone, macro aperture. |
| `collection/visual-01.jpg` | **4:5** | 1200 × 1500 px | Swiss typography proof, grid composition poster, high-contrast monochrome. |
| `collection/object-01.jpg` | **1:1** | 1200 × 1200 px | Dieter Rams / Braun physical industrial artifact, neutral overhead lighting. |
| `collection/curiosity-01.jpg` | **3:2** | 1200 × 800 px | Prism refraction, mechanical calculating cylinder, or laboratory apparatus. |
| `portrait/personality.jpg` | **4:5** | 1200 × 1500 px | Candid environmental portrait working at workshop bench. Grayscale contrast 1.05. |

---

## 3. How the Replacement Works Automatically

1. When you drop any image file into its designated path (e.g. `assets/images/portrait/hero.jpg`), the browser loads the image via `src="assets/images/portrait/hero.jpg"`.
2. The CSS selector `.art:has(img):after { display: none; }` automatically hides the placeholder hatch and the `data-ph` label.
3. The image seamlessly inherits the smooth scroll parallax, clip-path entrance, and liquid turbulence displacement shader without needing any code edits!

