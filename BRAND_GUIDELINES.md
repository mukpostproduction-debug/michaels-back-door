# Michael's Back Door Restaurant — Official Brand Guidelines & Design System

> **Version:** 1.0 (Website Rebuild Specification)  
> **Brand:** Michael’s Back Door Restaurant  
> **Established:** 1981 (44+ Years of Culinary Heritage)  
> **Location:** 1715 Lakeshore Road West, Mississauga, ON L5J 1J4 (Clarkson Village)  
> **Proprietor:** Michael Morra Jr. | **Founder:** Michael Morra Sr. | **Executive Chef & Partner:** Mark D'Souza  
> **Accreditation:** DiRōNA (Distinguished Restaurants of North America), OpenTable Diners' Choice, Readers' Choice Best Fine Dining & Best Italian  

---

## 1. Brand Story, Heritage & Positioning

### 1.1 The Speakeasy Heritage
Michael’s Back Door Restaurant has been one of Mississauga and the Greater Toronto Area’s most celebrated fine dining destinations since opening its doors in **January 1981**. Founded by Michael Morra Sr., the restaurant earned its intriguing name from its unique architectural orientation: while its address is on Lakeshore Road West in historic Clarkson Village, **the entrance and parking lot are tucked away behind the building, accessible via Clarkson Road North**. 

Guests discover an unpretentious rear driveway that leads into an unexpectedly warm, opulent sanctuary. This speakeasy-like arrival experience creates an instant sense of belonging, intimacy, and discovery.

### 1.2 Culinary Philosophy
Executive Chef and Partner **Mark D'Souza** (who joined in 2015 after leading kitchens across international luxury establishments) honors four decades of Italian-Continental tradition while introducing modern culinary refinement. The menu features fresh scratch-made pastas, prime cuts of veal and beef, pristine ocean seafood, and an award-winning cellar of over 150 international and Italian vintages.

### 1.3 Brand Positioning Statement
> *"Michael’s Back Door is Mississauga's quintessential hidden gem—where 1981 speakeasy charm meets contemporary fine Italian dining, celebrated hospitality, and unforgettable private gatherings."*

### 1.4 Brand Pillars
1. **Unpretentious Fine Dining:** Michelin-caliber warmth and culinary craft without cold pretension.
2. **Architectural Versatility:** From the sun-drenched glass Solarium to the moody wood-slatted Upstairs lounge and intimate Wine Room.
3. **Heritage & Continuity:** Family-founded and multi-generational; a fixture for milestone celebrations, romantic evenings, and corporate entertaining for over four decades.
4. **Distinction (DiRōNA):** Recognized continuously among the *Distinguished Restaurants of North America*, placing it in the top tier of dining institutions continent-wide.

---

## 2. Logo Ecosystem & Visual Marks

The Michael's Back Door brand identity centers on the **Iconic Open Door** mark—a visual metaphor for welcoming guests into a hidden haven of warmth, hospitality, and culinary excellence.

### 2.1 The Master Logo Suite
The identity comprises four approved variations located in `assets/logos/`:

| Logo Asset | File Format | Optimal Use Case | Background Compatibility |
| :--- | :--- | :--- | :--- |
| **Primary Horizontal Logo** | `.svg`, `.png` | Main website navigation, letterheads, print collateral | White, Alabaster `#F8F4F1`, Cream |
| **Glowing Gold Logo** | `.svg`, `.png` | Hero banner, digital campaigns, evening promotions | Dark Espresso `#2A1911`, Charcoal `#191A1C` |
| **Dark Mode Inverted Logo** | `.svg` | Dark website footers, full-bleed photo overlays | Dark brown, deep charcoal, black |
| **The Door Brandmark (Icon)** | `.svg`, `.png` | App icon, browser favicon, social avatars, watermarks | Any (Transparent background) |
| **Frosted Glass Monogram (M B D)**| `.jpg`, `.svg` | Subtle watermarks, section dividers, wine book cover | Luxury backgrounds, frosted glass UI |

### 2.2 Anatomy of the Door Brandmark
- **The Transom Fanlight:** A classical semi-circular radiating arch window above the door, representing heritage European architecture.
- **The Four Raised Panels:** Traditional Italian carpentry profile (two tall upper panels, two lower kick panels).
- **The Door Swing:** Always rendered **opening inward to the right at approximately 45 degrees**, inviting the eye inside.
- **The Candlelight Glow:** An interior amber/gold light (`#F5A623` gradient) radiating from behind the open door, communicating warmth, life, and hospitality inside.
- **Hardware:** Polished brass doorknob and vertical bar pull on the interior lock stile.

### 2.3 Logo Typography Hierarchy
- **Line 1 (`MICHAEL'S`):** Rendered in all-caps, heavy bold geometric sans-serif with wide tracking (`letter-spacing: 0.12em`). Primary color: Deep Espresso `#2A1911` (or Linen White in dark mode).
- **Line 2 (`BACK DOOR`):** Rendered in all-caps, bold geometric sans-serif matching Line 1 weight, but highlighted in **Heritage Champagne Gold** (`#B59976`) or **Candlelight Amber** (`#E7951B`).
- **Line 3 (`RESTAURANT`):** Rendered in all-caps, medium/semi-bold weight, expanded tracking (`letter-spacing: 0.32em`). Primary color: Slate Charcoal (`#6F7275`).

### 2.4 Clear Space & Minimum Sizing
- **Clear Space:** Maintain a minimum exclusion zone equal to the width of the letter `M` around all sides of the logo lockup. No other text, photography edges, or UI elements may intrude into this zone.
- **Minimum Digital Height:**
  - Full Horizontal Lockup: Minimum height `44px` on desktop, `36px` on mobile screens.
  - Standalone Door Icon: Minimum dimension `24px x 24px` (Favicon: `32px x 32px`).

### 2.5 Unacceptable Logo Practices
- ❌ **Do NOT** rotate, skew, or distort the door icon or typography.
- ❌ **Do NOT** flip the door to swing open to the left.
- ❌ **Do NOT** alter the color hierarchy (e.g., making "RESTAURANT" brighter than "MICHAEL'S").
- ❌ **Do NOT** place low-contrast versions over busy photographic backgrounds without a semi-transparent scrim or gradient backdrop.
- ❌ **Do NOT** replace the typographic sans with a decorative script font in the master lockup.

---

## 3. Color Palette & Design System Tokens

The color palette reflects the physical sensory experience of Michael's Back Door: aged Italian walnut paneling, hand-rolled fresh pasta, candlelit amber wine glasses, crisp pressed white linen tablecloths, and modern matte charcoal architectural accents.

### 3.1 Primary Brand Colors

```css
:root {
  /* === PRIMARY HERITAGE TOKENS === */
  --mbd-espresso-deep:      #2A1911; /* Deep Espresso / Night Truffle */
  --mbd-walnut-umber:       #6F5441; /* Italian Walnut / Earth Brown */
  --mbd-champagne-gold:     #B59976; /* Heritage Champagne Gold */
  --mbd-candlelight-amber:  #E7951B; /* Radiant Honey Amber Glow */
  --mbd-gold-hover:         #D4820E; /* Interactive Gold Hover */

  /* === SURFACE & BACKGROUND TOKENS === */
  --mbd-alabaster-cream:    #F8F4F1; /* Warm Alabaster Dining Surface */
  --mbd-sand-neutral:       #EDE5DF; /* Subtle Card & Border Cream */
  --mbd-linen-white:        #FFFFFF; /* Crisp Tablecloth Linen */
  --mbd-charcoal-slate:     #191A1C; /* Modern Architectural Dark Panel */
  --mbd-charcoal-card:      #232427; /* Dark Mode Elevated Card Surface */

  /* === TEXT & ACCENT TOKENS === */
  --mbd-text-primary:       #1F1511; /* High Contrast Primary Text */
  --mbd-text-secondary:     #685E58; /* Muted Editorial Copy */
  --mbd-text-light:         #F8F4F1; /* Dark Mode Body Text */
  --mbd-text-light-muted:   #B8AFA9; /* Dark Mode Secondary Text */
  --mbd-slate-sub:          #707376; /* Monogram & Descriptor Gray */
  --mbd-accent-wine:        #691B24; /* Barolo Red / Chianti Wine Accent */
}
```

### 3.2 Color Usage & Hierarchy Matrix

| Color Token | Hex Code | RGB | Role & Application |
| :--- | :--- | :--- | :--- |
| **Deep Espresso** | `#2A1911` | `rgb(42, 25, 17)` | Primary brand dark, headings, navigation background in dark theme, luxury borders |
| **Champagne Gold** | `#B59976` | `rgb(181, 153, 118)` | Secondary brand mark, elegant borders, subtle badges, serif italic accents |
| **Candlelight Amber**| `#E7951B` | `rgb(231, 149, 27)` | Primary CTA buttons, glowing door accent, rating stars, active states |
| **Warm Alabaster** | `#F8F4F1` | `rgb(248, 244, 241)` | Primary light theme body background, soft menu item card backgrounds |
| **Crisp Linen** | `#FFFFFF` | `rgb(255, 255, 255)` | High-contrast cards, table linen overlays, light text on dark containers |
| **Charcoal Slate** | `#191A1C` | `rgb(25, 26, 28)` | "Upstairs at Michael's" mood, footer, evening dining sections |
| **Barolo Wine** | `#691B24` | `rgb(105, 27, 36)` | Main dining room heritage accent, wine list category highlights, special badges |

---

## 4. Typography System

The typography pairs **regal Italian classical serifs** for titles and atmosphere with **refined, high-legibility geometric sans-serifs** for menus, navigation, and body content.

### 4.1 Typeface Selection
1. **Primary Editorial Display (Serif):** `Cormorant Garamond` (Google Fonts)
   - Fallback: `Didot`, `Bodoni MT`, `Baskerville`, `serif`
   - Personality: Aristocratic, graceful, timeless Italian fine dining, delicate serifs, high stroke contrast.
   - Applications: Page titles (`H1`, `H2`), story quotes, awards callouts, wine section headers.
2. **Primary Interface & Body (Sans-Serif):** `Plus Jakarta Sans` or `Avenir Next`
   - Fallback: `system-ui`, `-apple-system`, `sans-serif`
   - Personality: Clean, geometric, contemporary, highly readable in dense menu descriptions.
   - Applications: Navigation links, body copy, dish descriptions, button labels, form inputs.
3. **Accents, Vintages & Monospace Numbers:** `DIN Next` or `Cinzel`
   - Applications: Menu prices (`$46`), wine vintages (`2018`), room capacities (`10–18 guests`).

### 4.2 Type Scale & Hierarchy

| HTML Tag / Role | Font Family | Weight | Size (Desktop / Mobile) | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Hero H1** | `Cormorant Garamond` | 600 SemiBold | `64px` / `40px` | 1.1 | `-0.02em` |
| **Section H2** | `Cormorant Garamond` | 600 SemiBold | `42px` / `30px` | 1.2 | `-0.01em` |
| **Subheading / Room H3**| `Cormorant Garamond` | 500 Medium | `28px` / `22px` | 1.3 | `0.00em` |
| **Dish Title H4** | `Plus Jakarta Sans` | 700 Bold | `20px` / `18px` | 1.3 | `0.01em` |
| **Category Label / Kicker**| `Plus Jakarta Sans` | 600 SemiBold | `13px` / `12px` | 1.0 | `0.18em` (Uppercase) |
| **Body Primary** | `Plus Jakarta Sans` | 400 Regular | `16px` / `15px` | 1.65 | `0.00em` |
| **Dish Description** | `Plus Jakarta Sans` | 400 Regular | `14px` / `13.5px`| 1.5 | `0.01em` |
| **Menu Price** | `Plus Jakarta Sans` | 600 SemiBold | `17px` / `16px` | 1.0 | `0.04em` |
| **Button CTA** | `Plus Jakarta Sans` | 600 SemiBold | `14px` / `14px` | 1.0 | `0.08em` (Uppercase) |

---

## 5. Architectural Spaces & Dining Atmosphere

A distinctive feature of Michael’s Back Door is that each dining room offers its own unique personality and atmosphere. The website redesign must clearly differentiate these spaces with dedicated photography and capacity specifications.

### 5.1 The Solarium
- **Vibe:** Luminous, romantic, sun-drenched European garden room.
- **Key Features:** Floor-to-ceiling glass skylight ceiling, double French doors opening to an iron balcony railing, natural daylight by day, starlight and candlelight by night.
- **Capacity:** 30 to 42 seated guests.
- **Best Suited For:** Intimate wedding receptions, daytime showers, rehearsal dinners, milestone anniversaries.
- **Key Photography:** `assets/interior_and_ambience/solarium-dining-room-sunlight.jpg`, `solarium-french-doors-and-balcony.jpg`.

### 5.2 The Wine Room
- **Vibe:** Exclusive, cozy, sommelier-curated private enclave.
- **Key Features:** Enclosed room lined with floor-to-ceiling vintage wine racks, polished wood dining table, intimate pendant lighting.
- **Capacity:** 10 to 18 seated guests.
- **Best Suited For:** Executive board dinners, wine tastings, private birthday celebrations, VIP gatherings.
- **Key Photography:** `assets/interior_and_ambience/wine-room-private-dining-table.jpg`, `wine-cellar-bottle-racks.jpg`.

### 5.3 Upstairs at Michael's
- **Vibe:** Sleek, modern, contemporary lounge and dining room.
- **Key Features:** Vertical oak and walnut slatted acoustic timber walls, fluted matte black bar facade, brushed brass bird lamps, modern black fluted leather dining armchairs, private bar.
- **Capacity:** 20 to 42 seated guests.
- **Best Suited For:** Corporate dinners, cocktail parties, modern celebrations, private holiday gatherings.
- **Key Photography:** `assets/interior_and_ambience/upstairs-at-michaels-wood-slat-lounge.jpg`, `dining-table-wood-slat-feature-wall.jpg`, `interior-decor-olive-branches-brass-lamp.jpg`.

### 5.4 The Main Dining Room
- **Vibe:** Classic 1981 European heritage dining, warm, opulent, timeless.
- **Key Features:** Deep burgundy walls, warm glowing wall sconces, crisp white double-draped linen tables, comfortable upholstered seating, Italian art pieces.
- **Best Suited For:** À la carte dinner dates, family gatherings, weekly dining regulars.
- **Key Photography:** `assets/interior_and_ambience/main-dining-room-burgundy-sconces.jpg`, `table-setting-olive-oil-wine-glasses.jpg`.

---

## 6. Culinary Signature Offerings Catalog

The website must feature high-resolution imagery and faithful descriptions of the restaurant's signature, highly reviewed dishes:

| Dish Name | Category | Description | Primary Asset |
| :--- | :--- | :--- | :--- |
| **Capelli D’Angeli** *(House Signature)* | Pasta | Angel hair pasta tossed with Atlantic lobster meat in a light tomato cream rosé sauce, finished with fresh dill. | `assets/culinary_and_dishes/capelli-dangeli-lobster-angel-hair-wide.jpg` |
| **Linguine Pescatore** | Pasta / Seafood | Jumbo black tiger shrimp, sea scallops, PEI mussels, and Manila clams simmered in a spicy white wine tomato broth over artisanal linguine. | `assets/culinary_and_dishes/linguine-pescatore-seafood-pasta-highres.jpg` |
| **Veal Tenderloin with Wild Mushrooms** | Carne (Mains) | Pan-seared Ontario veal medallion topped with sautéed wild forest mushrooms, finished in a rich marsala demi-glace reduction. | `assets/culinary_and_dishes/veal-tenderloin-wild-mushrooms.jpg` |
| **Branzino Mediterraneo** | Pesce (Mains) | Pan-roasted Mediterranean sea bass fillet served with extra virgin olive oil, fresh herbs, caper emulsion, and seasonal market vegetables. | `assets/culinary_and_dishes/branzino-sea-bass-fillet.jpg` |
| **Antipasto Misto Board** | Antipasti | Prosciutto di Parma DOP, Genoa salami, artisan soppressata, aged Parmigiano Reggiano, marinated olives, grilled artichokes, and toasted crostini. | `assets/culinary_and_dishes/charcuterie-antipasto-board-highres.jpg` |
| **Stuffed Chicken Supreme** | Pollo | Oven-roasted chicken supreme breast stuffed with fontina cheese and wild mushrooms, served with pan jus and herb-roasted baby potatoes. | `assets/culinary_and_dishes/stuffed-chicken-supreme-mushrooms.jpg` |
| **Classic House Tiramisu** | Dolci | Espresso-dipped Savoiardi ladyfingers layered with whipped mascarpone cream, dark chocolate shavings, and fresh berry garnish in glass goblet. | `assets/culinary_and_dishes/classic-tiramisu-dessert-goblet.jpg` |
| **Crème Caramel** | Dolci | Traditional silken egg custard with a deep amber golden caramel sauce. | `assets/culinary_and_dishes/creme-caramel-dessert.jpg` |
| **Chocolate Lava Torta** | Dolci | Warm dark Belgian chocolate cake with a molten liquid center, served with vanilla bean gelato. | `assets/culinary_and_dishes/chocolate-lava-torta.jpg` |

---

## 7. Photography & Art Direction Guidelines

### 7.1 Lighting & Mood
- **Warmth Over Sterile Coolness:** Photography must always convey the warmth of hospitality. Use color temperatures between `2800K` and `3500K` (golden hour daylight or amber candlelight).
- **Depth & Texture:** Close-ups should celebrate texture—crusty artisan sourdough bread, shimmering olive oil, steam rising from fresh pasta, bubbling sauce, chilled wine condensation on crystal stemware.
- **Table Composition:** Tables should feature Michael's signature pressed white linen, crystal glassware, oil/vinegar cruets, and natural wood herringbone or slatted timber backgrounds.

### 7.2 Photo Treatment in Web UI
- **Rounded Corners:** Use subtle luxury border radii (`border-radius: 8px` to `12px`). Avoid extreme rounding that looks playful or juvenile.
- **Hover Micro-Interactions:** Subtle zoom effects (`transform: scale(1.03); transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)`).
- **Scrim Overlays:** When placing text over photography, always apply an espresso-to-transparent gradient scrim (`background: linear-gradient(180deg, rgba(42, 25, 17, 0.2) 0%, rgba(42, 25, 17, 0.85) 100%)`).

---

## 8. Tone of Voice & Copywriting Standards

### 8.1 Persona: "The Gracious Host"
The brand speaks with the confidence of an established 44-year institution, combined with the warmth of an Italian family dinner. It is welcoming, discerning, unpretentious, and proud of its craft.

### 8.2 Voice Traits
- **Refined, not Snobbish:** We celebrate exquisite wine and culinary artistry, but we welcome our guests like lifelong friends.
- **Evocative & Sensory:** Describe food with mouth-watering precision (*"simmered with sweet Manila clams and fresh basil"*, not just *"seafood pasta"*).
- **Heritage-Proud:** Remind guests of our 1981 roots and Clarkson Village identity without sounding dated.

### 8.3 Approved Headlines & Messaging Snippets
- *"Mississauga’s best-kept culinary secret since 1981."*
- *"Step through the back door into a world of timeless Italian hospitality."*
- *"Handmade pasta, prime cuts, and a cellar four decades in the making."*
- *"Where every celebration finds its perfect room."*
- *"Clarkson Village's home for milestone moments."*

---

## 9. Awards, Badges & Social Proof Hierarchy

Displaying third-party accolades builds instant credibility for visitors:

1. **DiRōNA (Distinguished Restaurants of North America):** The highest honor, awarded only to restaurants upholding flawless dining, service, and cellar standards.  
   *Asset:* `assets/awards_and_recognition/dirona-distinguished-restaurants-north-america-badge.png`
2. **Storwell’s Choice Best Neighborhood Restaurant Award:**  
   *Asset:* `assets/awards_and_recognition/storwells-choice-best-neighborhood-restaurant-ribbon.png`
3. **OpenTable Diners’ Choice Award (4.8 / 5.0 Rating):** Highlight prominently beside the reservation CTA.
4. **Mississauga News Readers’ Choice:** Gold / Platinum for Best Fine Dining & Best Italian Food.

---

## 10. Website Rebuild Architecture & Interactive Blueprint

When rebuilding the website for GitHub demo hosting, implement the following architectural structure:

### 10.1 Key Pages & Navigation
1. **Hero Header:**
   - Sticky navigation with logo, Navigation links (Story, Menus, Private Dining, Wine Cellar, Gallery, Contact), and an immediate **"Reserve a Table"** button (`OpenTable` modal/link).
   - Video or high-res slideshow background featuring the Solarium, Capelli D'Angeli plating, and the glowing back door.
2. **The "Back Door" Speakeasy Story Section:**
   - Narrative of 1981 origin, Michael Morra Sr. & Jr., Chef Mark D'Souza, and the hidden entrance experience.
3. **Interactive Culinary Menu Explorer:**
   - Tabbed menu interface: **Dinner Menu**, **Lunch Menu**, **Desserts**, **Wine List**, **Private Event Packages**.
   - Filter by dietary needs (Gluten-Free, Vegetarian, Pescatarian).
   - High-res dish modal preview with full descriptions and prices.
4. **Private Dining & Event Spaces Showcase:**
   - Interactive room switcher: **The Solarium (30-42)**, **The Wine Room (10-18)**, **Upstairs at Michael's (20-42)**, **Main Dining**.
   - Downloadable PDF agreements & menus (`assets/documents_and_menus/`).
5. **Accolades & DiRōNA Banner:**
   - Display ribbons, 44-year milestone badge, and OpenTable verified guest testimonials.
6. **Location, Arrival Guide & Hours:**
   - Interactive Google Map with precise directions on finding the parking lot and entrance off Clarkson Rd N.
   - Hours of operation (Lunch Wed-Fri, Dinner Tue-Sun, Closed Mondays).
7. **Footer:**
   - Gift Cards, Takeout & Delivery app links, Newsletter signup for wine dinners, Instagram feed integration, and copyright.

---

*Document compiled and verified from original restaurant archives, photography manifests, and legal agreements.*  
*Ready for front-end architecture and implementation.*
