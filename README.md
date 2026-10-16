# Michael's Back Door Restaurant — Luxury Rebuild & 3D Interactive Walkthrough

> **Mississauga's Hidden Culinary Jewel Since 1981**  
> 1715 Lakeshore Road West, Mississauga, ON L5J 1J4  
> Tel: (905) 822-5751 | Email: michael@michaelsbackdoor.com  
> Guest Entrance & Parking via Clarkson Road North  

---

## 🌟 Overview

This repository hosts the full luxury rebuild of the official website for **Michael's Back Door Restaurant**, celebrating 44 years of authentic Italian fine dining in Clarkson Village.

The rebuild features:
1. **Interactive 3D Scroll Walkthrough**: A cinematic first-person journey through the restaurant's 8 distinct architectural spaces as the visitor scrolls down the page.
2. **Interactive Architectural HUD Mini-Map**: Live spatial tracking showing camera position, vision cone, and click-to-teleport navigation across both the Ground Floor and Level 2 ("Upstairs at Michael's").
3. **100% Comprehensive Content Preservation**: Every dish, price, Italian title, dietary badge, wine vintage, private event package (1–6), canapés, add-ons, operating hours, and historical narrative from the original site has been meticulously preserved and elevated.
4. **Luxury Fine Dining Aesthetics**: Adheres strictly to the custom [Brand Guidelines](BRAND_GUIDELINES.md) — Deep Espresso, Heritage Burgundy, Champagne Gold, Candlelight Amber, Cormorant Garamond serif and Plus Jakarta Sans.
5. **Interactive Booking & Inquiry Modals**: Integrated reservation booking, private event RFP submission, physical/digital gift card ordering, turn-by-turn navigation guide to the secret back door, and Web Audio synthesized dining ambiance.

---

## 🗺️ Architectural Structure & The 8-Stop Walkthrough

```
       [ LAKESHORE ROAD WEST - Historic Street Frontage ]
       ==================================================
       [ Private Wine Room ]   [ The Solarium ]
       [ (10–18 guests)    ]   [ (30–42 guests, Skylight) ]
       --------------------------------------------------
       [ Main Dining Room (Burgundy Walls & Sconces)   ]
       --------------------------------------------------
       [ Lover's Lane ]   [ Main Bar & Lounge ]   [ Stairs to Level 2 ]
       [ (Intimate 2-top) ] [ (Pendant lighting) ] [ Upstairs at Michael's ]
       --------------------------------------------------
       [ Kitchen & Pass ] [ Host Foyer / MBD Glass ] [ Restrooms ]
       ==================================================
       [ THE "BACK DOOR" ENTRANCE & PARKING LOT ]
       [ (Off Clarkson Road North)              ]
```

### The 8 Walkthrough Stops
1. **Stop 1: The Secret "Back Door" Arrival**: Rear alley entrance off Clarkson Road North, weathered brick, glowing amber lantern (`#F5A623`).
2. **Stop 2: The Host Foyer & Monogram Threshold**: Polished oak entry, vertical frosted glass etched with the heritage **"M B D"** monogram, warm candlelight bokeh.
3. **Stop 3: Main Bar & Aperitivo Lounge**: Handcrafted dark mahogany bar, blown amber glass cylinder pendants, Campari and Italian amari display.
4. **Stop 4: Lover's Lane Romantic Alcove**: Intimate secluded 2-top banquettes, dim candlelight, acoustic velvet privacy.
5. **Stop 5: The Main Dining Room**: Grand heritage salon with burgundy walls, warm glowing brass sconces, crisp white linens, and herringbone oak parquet.
6. **Stop 6: The Solarium**: Sunlit/starlit east-wing atrium with floor-to-ceiling glass skylight roof and French doors to a Juliet balcony (30–42 guests).
7. **Stop 7: The Private Wine Room**: Sommelier-curated private chamber lined with 150+ vintage wines and solid walnut tasting table (10–18 guests).
8. **Stop 8: Upstairs at Michael's**: Contemporary Level 2 event salon featuring vertical slatted acoustic oak/walnut timber walls, fluted matte black bar, and private executive restrooms (20–42 seated, up to 50 cocktail).

---

## 📂 Repository Structure

```
├── index.html                   # Primary luxury web application with 3D scroll walkthrough & HUD
├── floorplan.html               # Interactive CAD blueprint planner & walkthrough simulator
├── css/
│   └── styles.css               # Design system tokens, glassmorphism, 3D transforms, responsive grid
├── js/
│   ├── app.js                   # Modals, Web Audio ambiance, navigation, and form handlers
│   ├── menus.js                 # Complete audited menu database (Antipasti, Pasta, Mains, Dolci, Wines, Banquets)
│   └── walkthrough.js           # 3D scroll walkthrough camera engine & HUD mini-map synchronization
├── assets/                      # Curated high-resolution photography, vectors, and PDFs
│   ├── logos/                   # SVG door marks, dark mode logos, frosted glass monogram
│   ├── interior_and_ambience/   # Ground floor, solarium, wine cellar, upstairs lounge photos
│   ├── culinary_and_dishes/     # Signature dishes (Capelli D'Angeli, Branzino, Tiramisu, etc.)
│   ├── awards_and_recognition/  # DiRoNA & Storwell's Choice ribbons
│   ├── people_and_history/      # Founder Michael Morra Sr. & culinary history
│   └── documents_and_menus/     # Full wine list, event menus, and private dining agreement PDFs
├── BRAND_GUIDELINES.md          # Complete typography scales, color palettes, and voice standards
├── FLOOR_PLAN_SPEC.md           # Architectural specification & camera keyframes
└── ASSETS_INDEX.md              # Curated asset catalog with dimensions and usage
```

---

## 🚀 Live Demo & Local Development

### Run Locally
Simply open `index.html` in any modern web browser, or serve with Python:
```bash
python3 -m http.server 8080
```
Then visit `http://localhost:8080/`.

---

## 🍽️ Ownership & Heritage
- **Established:** 1981 by Michael Morra Sr. (44 continuous years)
- **Principal Owner:** Michael Morra Jr.
- **Executive Chef Partner:** Mark D'Souza (since 2015)
- **Accreditation:** Distinguished Restaurants of North America (DiRoNA)
