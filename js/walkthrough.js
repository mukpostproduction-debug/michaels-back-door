// MICHAEL'S BACK DOOR RESTAURANT — 3D SCROLL WALKTHROUGH ENGINE
// Powers the cinematic 8-stop architectural scroll experience with interactive HUD Mini-Map

const WALKTHROUGH_STOPS = [
  {
    id: 'backdoor',
    number: 1,
    title: 'The Secret "Back Door" Arrival',
    subtitle: 'Clarkson Road North Rear Entrance',
    kicker: 'STOP 1 OF 8 • SPEAKEASY DISCOVERY',
    level: 1,
    capacity: 'Private Arrival & Parking',
    atmosphere: 'A quiet alleyway off Clarkson Road North leads to Mississauga’s most celebrated hidden entrance. An amber lantern glows above the weathered dark walnut door, welcoming patrons into a romantic Italian sanctuary just as it did on opening night in 1981.',
    materials: ['Aged Walnut Door', 'Warm Amber Lantern (#F5A623)', 'Heritage Fanlight Transom', 'Clarkson Brickwork'],
    soundPrompt: 'Dusk breeze, distant church chimes, vintage brass latch click',
    mapCoords: { x: 810, y: 780, rot: 0 },
    bgImage: 'assets/interior_and_ambience/main-dining-room-burgundy-sconces.jpg',
    doorIcon: true,
    cameraSpec: 'Perspective: 1000px | Tilt: -2deg | Depth: Z: 0m | Amber Dusk Glow',
    quote: '“Enter through the back door — where Mississauga fine dining began in 1981.”'
  },
  {
    id: 'foyer',
    number: 2,
    title: 'The Host Foyer & Monogram Threshold',
    subtitle: 'Welcoming Vestibule & Coat Check',
    kicker: 'STOP 2 OF 8 • THE THRESHOLD',
    level: 1,
    capacity: 'Maitre D’ Check-in & Coat Check',
    atmosphere: 'Crossing the threshold, you step onto polished oak into the warm, candlelit foyer. Anchoring the entry is a vertical frosted glass partition hand-etched with the heritage "M B D" monogram, catching golden candlelight bokeh and soft Italian jazz.',
    materials: ['M B D Etched Frosted Glass', 'Polished Oak Entry', 'Warm Candlelight Bokeh', 'Italian Hospitality'],
    soundPrompt: 'Warm restaurant murmur, Italian jazz melody',
    mapCoords: { x: 810, y: 650, rot: -45 },
    bgImage: 'assets/logos/michaels-back-door-monogram-frosted-glass.jpg',
    doorIcon: false,
    cameraSpec: 'Perspective: 950px | Pan: -15deg | Depth: Z: 4.2m | Golden Candle Caustics',
    quote: '“44 years of gracious Italian hospitality welcomes you at the door.”'
  },
  {
    id: 'bar',
    number: 3,
    title: 'Main Bar & Aperitivo Lounge',
    subtitle: 'Cocktails, Amari & Conversation',
    kicker: 'STOP 3 OF 8 • L’APERITIVO ITALIANO',
    level: 1,
    capacity: '12 Bar Stools • 16 Cocktail Lounge Seats',
    atmosphere: 'The social heartbeat of the restaurant. Handcrafted dark mahogany counter, warm blown amber glass cylinder pendant lights, and an illuminated back-bar boasting classic Italian aperitivi, Campari, Aperol, and vintage digestivi.',
    materials: ['Mahogany Countertop', 'Blown Amber Glass Pendants (2700K)', 'Campari Display', 'Brass Footrails'],
    soundPrompt: 'Ice rattling in cocktail shaker, laughter, espresso machine hiss',
    mapCoords: { x: 500, y: 650, rot: 0 },
    bgImage: 'assets/interior_and_ambience/bar-bottles-campari-blown-glass-pendants.jpg',
    doorIcon: false,
    cameraSpec: 'Perspective: 850px | Pan: 12deg | Depth: Z: 9.8m | Warm Amber Light',
    quote: '“Handcrafted Negronis, vintage Grappas, and pre-dinner aperitivi.”'
  },
  {
    id: 'lovers-lane',
    number: 4,
    title: '“Lover’s Lane” Romantic Alcove',
    subtitle: 'Intimate Two-Top Banquettes',
    kicker: 'STOP 4 OF 8 • INTIMACY & ROMANCE',
    level: 1,
    capacity: '3 Private 2-Top Tables (6 Guests Max)',
    atmosphere: 'Tucked along the quiet western arcade, Lover’s Lane is the GTA’s quintessential proposal and anniversary table. Velvet banquettes, low-key candlelight flickering against dark timber, and complete acoustic discretion.',
    materials: ['Secluded Alcove Paneling', 'Candlelit 2-Tops', 'Linen Napkins', 'Crystal Stemware'],
    soundPrompt: 'Gentle clink of wine glasses, whispered romance',
    mapCoords: { x: 200, y: 450, rot: -90 },
    bgImage: 'assets/interior_and_ambience/table-setting-olive-oil-wine-glasses.jpg',
    doorIcon: false,
    cameraSpec: 'Perspective: 750px | Macro Zoom | Depth: Z: 14.5m | Low-Key 2200K Candlelight',
    quote: '“Mississauga’s most requested date-night table for over four decades.”'
  },
  {
    id: 'main-dining',
    number: 5,
    title: 'The Main Dining Room',
    subtitle: 'Heritage Salon & Fine Dining',
    kicker: 'STOP 5 OF 8 • THE GRAND SALON',
    level: 1,
    capacity: '45 to 55 Seated Guests',
    atmosphere: 'Steeped in timeless European grandeur. Deep burgundy walls adorned with Italian oil paintings, warm glowing brass wall sconces, double-draped crisp white linens, and polished herringbone hardwood parquet.',
    materials: ['Heritage Burgundy Walls', 'Warm Brass Sconces', 'Double-Draped Linens', 'Herringbone Oak Parquet'],
    soundPrompt: 'Bustling celebratory hum, wine pouring, soft Italian melodies',
    mapCoords: { x: 490, y: 320, rot: 0 },
    bgImage: 'assets/interior_and_ambience/main-dining-room-burgundy-sconces.jpg',
    doorIcon: false,
    cameraSpec: 'Perspective: 1100px | Panoramic Wide Angle | Depth: Z: 20.0m | Brass Sconce Warmth',
    quote: '“Fine veal, lobster angel hair, and 44 years of family celebration.”'
  },
  {
    id: 'solarium',
    number: 6,
    title: 'The Solarium',
    subtitle: 'Sunlit Glass Atrium & Juliet Balcony',
    kicker: 'STOP 6 OF 8 • THE GLASS ATRIUM',
    level: 1,
    capacity: '30 to 42 Private Guests • 16 to 22 Semi-Private',
    atmosphere: 'A breathtaking glass-enclosed garden pavilion. Floor-to-ceiling glass skylight roof showering tables with natural sunbeams by afternoon and starlight by evening. Double French doors open to an ornamental iron Juliet balcony.',
    materials: ['Glass Atrium Skylight', 'French Balcony Doors', 'Wrought Iron Railing', 'Crisp White Linens'],
    soundPrompt: 'Gentle breeze, acoustic daylight reverberation, birdsong',
    mapCoords: { x: 860, y: 320, rot: 45 },
    bgImage: 'assets/interior_and_ambience/solarium-dining-room-sunlight.jpg',
    doorIcon: false,
    cameraSpec: 'Perspective: 1050px | Tilt: 15deg Upward | Depth: Z: 25.8m | Volumetric Sunlight/Starlight',
    quote: '“Dine beneath the stars or afternoon sun in our iconic glass atrium.”'
  },
  {
    id: 'wine-room',
    number: 7,
    title: 'The Private Wine Room',
    subtitle: 'Sommelier Cellar & VIP Dining',
    kicker: 'STOP 7 OF 8 • SOMMELIER SANCTUM',
    level: 1,
    capacity: '10 to 18 Seated Guests',
    atmosphere: 'An exclusive sommelier-curated private dining sanctuary enclosed floor-to-ceiling by custom dark wood wine racks showcasing 150+ international and Italian vintages (Gaja, Antinori, Ornellaia, Barolo). A solid walnut table anchors the room.',
    materials: ['150+ Bottle Cellar Wall', 'Solid Walnut Tasting Table', 'Private Sound System', 'Sommelier Stemware'],
    soundPrompt: 'Sommelier uncorking a vintage bottle, quiet executive murmur',
    mapCoords: { x: 170, y: 220, rot: 0 },
    bgImage: 'assets/interior_and_ambience/wine-room-private-dining-table.jpg',
    doorIcon: false,
    cameraSpec: 'Perspective: 900px | Intimate Focus | Depth: Z: 31.2m | Warm 2400K Downlighting',
    quote: '“Executive board dinners, milestones, and rare vintage tastings.”'
  },
  {
    id: 'upstairs',
    number: 8,
    title: '“Upstairs at Michael’s”',
    subtitle: 'Level 2 Contemporary Private Salon & Bar',
    kicker: 'STOP 8 OF 8 • MODERN LUXURY',
    level: 2,
    capacity: '20 to 42 Seated Guests • Up to 50 Cocktail Receptions',
    atmosphere: 'Ascending the private staircase unveils our newest luxury space. Modern vertical slatted acoustic oak and walnut timber paneling, fluted matte black private bar, brushed brass bird lamps, and private executive restrooms.',
    materials: ['Acoustic Oak Slatted Walls', 'Fluted Matte Black Bar', 'Brushed Brass Bird Lamps', 'Private Level 2 Restrooms'],
    soundPrompt: 'Modern lounge downtempo beats, shaker on marble, lively cocktail party',
    mapCoords: { x: 550, y: 350, rot: -90 },
    bgImage: 'assets/interior_and_ambience/upstairs-at-michaels-wood-slat-lounge.jpg',
    doorIcon: false,
    cameraSpec: 'Perspective: 1000px | Elevation: +3.2m | Depth: Z: 38.0m | Architectural Slat Lighting',
    quote: '“A sleek contemporary private salon tailored for memorable gatherings.”'
  }
];

class WalkthroughEngine {
  constructor() {
    this.currentStopIndex = 0;
    this.totalStops = WALKTHROUGH_STOPS.length;
    this.isPlaying = false;
    this.playInterval = null;
    this.touchStartY = 0;
    this.isTransitioning = false;

    // DOM Elements
    this.sceneContainer = document.getElementById('walkthrough-scene');
    this.activeImg = document.getElementById('walkthrough-bg-active');
    this.incomingImg = document.getElementById('walkthrough-bg-incoming');
    this.kickerEl = document.getElementById('wt-kicker');
    this.titleEl = document.getElementById('wt-title');
    this.subtitleEl = document.getElementById('wt-subtitle');
    this.descEl = document.getElementById('wt-desc');
    this.capEl = document.getElementById('wt-capacity');
    this.chipsEl = document.getElementById('wt-chips');
    this.quoteEl = document.getElementById('wt-quote');
    this.progressFill = document.getElementById('wt-progress-fill');
    this.stopNumEl = document.getElementById('wt-stop-number');
    this.hudMarker = document.getElementById('hud-camera-avatar');
    this.hudLevelBadge = document.getElementById('hud-level-badge');
    this.hudGroundG = document.getElementById('hud-ground-floor');
    this.hudLevel2G = document.getElementById('hud-level2-floor');

    this.init();
  }

  init() {
    this.setupListeners();
    this.renderStop(0, false);
  }

  setupListeners() {
    // Scroll observation inside the walkthrough container
    const section = document.getElementById('walkthrough-section');
    if (!section) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.handleWindowScroll();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Slider if present
    const slider = document.getElementById('wt-slider');
    if (slider) {
      slider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        this.goToStop(val);
      });
    }

    // Play/Pause button
    const playBtn = document.getElementById('wt-play-btn');
    if (playBtn) {
      playBtn.addEventListener('click', () => this.togglePlay());
    }

    // Prev / Next Buttons
    const prevBtn = document.getElementById('wt-prev-btn');
    const nextBtn = document.getElementById('wt-next-btn');
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevStop());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextStop());

    // Mini Map click handling
    document.querySelectorAll('.hud-room-trigger').forEach(el => {
      el.addEventListener('click', (e) => {
        const stopId = el.getAttribute('data-stop-id');
        const idx = WALKTHROUGH_STOPS.findIndex(s => s.id === stopId);
        if (idx !== -1) {
          this.goToStop(idx);
        }
      });
    });
  }

  handleWindowScroll() {
    const section = document.getElementById('walkthrough-section');
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;

    // Check if walkthrough is currently in view
    if (rect.top <= 0 && rect.bottom >= windowHeight) {
      const scrollableDistance = sectionHeight - windowHeight;
      const scrolled = Math.abs(rect.top);
      const progress = Math.min(1, Math.max(0, scrolled / scrollableDistance));
      
      const targetIndex = Math.min(
        this.totalStops - 1,
        Math.floor(progress * this.totalStops)
      );

      if (targetIndex !== this.currentStopIndex) {
        this.renderStop(targetIndex, true);
      }
    }
  }

  goToStop(index) {
    if (index < 0 || index >= this.totalStops) return;
    this.currentStopIndex = index;
    this.renderStop(index, true);

    // Update range slider if present
    const slider = document.getElementById('wt-slider');
    if (slider) slider.value = index;
  }

  nextStop() {
    const next = (this.currentStopIndex + 1) % this.totalStops;
    this.goToStop(next);
  }

  prevStop() {
    const prev = (this.currentStopIndex - 1 + this.totalStops) % this.totalStops;
    this.goToStop(prev);
  }

  togglePlay() {
    const btn = document.getElementById('wt-play-btn');
    if (this.isPlaying) {
      clearInterval(this.playInterval);
      this.isPlaying = false;
      if (btn) btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Play Walkthrough';
    } else {
      this.isPlaying = true;
      if (btn) btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> Pause Walkthrough';
      this.playInterval = setInterval(() => {
        this.nextStop();
      }, 4200);
    }
  }

  renderStop(index, animate = true) {
    this.currentStopIndex = index;
    const stop = WALKTHROUGH_STOPS[index];
    if (!stop) return;

    // 1. Text & Cards update
    if (this.kickerEl) this.kickerEl.textContent = stop.kicker;
    if (this.titleEl) this.titleEl.textContent = stop.title;
    if (this.subtitleEl) this.subtitleEl.textContent = stop.subtitle;
    if (this.descEl) this.descEl.textContent = stop.atmosphere;
    if (this.capEl) this.capEl.textContent = stop.capacity;
    if (this.quoteEl) this.quoteEl.textContent = stop.quote;
    if (this.stopNumEl) this.stopNumEl.textContent = `0${stop.number}`;

    // 2. Chips
    if (this.chipsEl) {
      this.chipsEl.innerHTML = '';
      stop.materials.forEach(mat => {
        const span = document.createElement('span');
        span.className = 'wt-chip';
        span.textContent = mat;
        this.chipsEl.appendChild(span);
      });
    }

    // 3. Progress bar fill
    if (this.progressFill) {
      const pct = Math.round(((index + 1) / this.totalStops) * 100);
      this.progressFill.style.width = `${pct}%`;
    }

    // 4. Background Crossfade with 3D Depth Scale
    if (this.activeImg && this.incomingImg) {
      if (animate) {
        this.incomingImg.src = stop.bgImage;
        this.incomingImg.style.opacity = '1';
        this.incomingImg.style.transform = 'scale(1)';
        
        setTimeout(() => {
          this.activeImg.src = stop.bgImage;
          this.incomingImg.style.opacity = '0';
          this.incomingImg.style.transform = 'scale(1.05)';
        }, 650);
      } else {
        this.activeImg.src = stop.bgImage;
      }
    }

    // 5. Update HUD Mini-Map
    this.updateHudMap(stop);

    // 6. Highlight active stop pill
    document.querySelectorAll('.wt-stop-pill').forEach((pill, idx) => {
      if (idx === index) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  updateHudMap(stop) {
    if (!this.hudMarker) return;

    // Switch floor plan visibility
    if (stop.level === 2) {
      if (this.hudGroundG) this.hudGroundG.style.display = 'none';
      if (this.hudLevel2G) this.hudLevel2G.style.display = 'inline';
      if (this.hudLevelBadge) this.hudLevelBadge.textContent = 'LEVEL 2 (UPSTAIRS)';
    } else {
      if (this.hudGroundG) this.hudGroundG.style.display = 'inline';
      if (this.hudLevel2G) this.hudLevel2G.style.display = 'none';
      if (this.hudLevelBadge) this.hudLevelBadge.textContent = 'GROUND FLOOR';
    }

    // Translate HUD camera icon and cone
    const { x, y, rot } = stop.mapCoords;
    this.hudMarker.setAttribute('transform', `translate(${x}, ${y}) rotate(${rot})`);

    // Highlight active zone on mini-map
    document.querySelectorAll('.hud-room-trigger').forEach(zone => {
      const zoneId = zone.getAttribute('data-stop-id');
      if (zoneId === stop.id) {
        zone.classList.add('active-zone');
      } else {
        zone.classList.remove('active-zone');
      }
    });
  }
}

// Global initialization
let walkthroughEngineInstance = null;
document.addEventListener('DOMContentLoaded', () => {
  walkthroughEngineInstance = new WalkthroughEngine();
});
