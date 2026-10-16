// MICHAEL'S BACK DOOR RESTAURANT — CORE APPLICATION LOGIC
// Handles Menus filtering, Reservation & Event Modals, Gift Card ordering, and Web Audio Ambiance

document.addEventListener('DOMContentLoaded', () => {
  initMenuRenderer();
  initModals();
  initAudioAmbiance();
  initMobileNav();
  initSmoothScroll();
});

// ==========================================
// 1. COMPREHENSIVE MENU RENDERER & SEARCH
// ==========================================
function initMenuRenderer() {
  const container = document.getElementById('menu-items-grid');
  const tabsContainer = document.getElementById('menu-tabs');
  const searchInput = document.getElementById('menu-search-input');
  if (!container || !tabsContainer) return;

  let activeCategory = 'all';
  let searchQuery = '';

  // Render category buttons
  tabsContainer.innerHTML = '';
  MENU_DATA.categories.forEach((cat, idx) => {
    const btn = document.createElement('button');
    btn.className = `menu-tab-btn ${cat.id === activeCategory ? 'active' : ''}`;
    btn.textContent = cat.name;
    btn.setAttribute('data-category', cat.id);
    btn.addEventListener('click', () => {
      document.querySelectorAll('.menu-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = cat.id;
      filterAndRender();
    });
    tabsContainer.appendChild(btn);
  });

  // Search input listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterAndRender();
    });
  }

  function filterAndRender() {
    let items = MENU_DATA.items;

    // Filter by category
    if (activeCategory !== 'all') {
      items = items.filter(item => item.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchQuery) ||
        (item.italianName && item.italianName.toLowerCase().includes(searchQuery)) ||
        item.description.toLowerCase().includes(searchQuery) ||
        item.tags.some(t => t.toLowerCase().includes(searchQuery))
      );
    }

    renderItems(items);
  }

  function renderItems(items) {
    container.innerHTML = '';

    if (items.length === 0) {
      container.innerHTML = `
        <div class="menu-empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold-champagne)" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <p>No culinary dishes found matching "<strong>${escapeHtml(searchQuery)}</strong>".</p>
          <button class="btn btn-outline-gold" onclick="document.getElementById('menu-search-input').value=''; document.querySelector('.menu-tab-btn').click();">Reset Filter</button>
        </div>
      `;
      return;
    }

    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-item-card';

      const badgeHtml = item.badge 
        ? `<span class="menu-card-badge">${escapeHtml(item.badge)}</span>` 
        : '';

      const tagsHtml = item.tags.map(t => `<span class="dish-tag">${escapeHtml(t)}</span>`).join('');

      card.innerHTML = `
        <div class="menu-card-img-wrapper">
          <img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy">
          ${badgeHtml}
        </div>
        <div class="menu-card-content">
          <div class="menu-card-header">
            <div>
              <span class="menu-italian-title">${escapeHtml(item.italianName || '')}</span>
              <h3 class="menu-dish-name">${escapeHtml(item.name)}</h3>
            </div>
            <div class="menu-dish-price">${escapeHtml(item.price)}</div>
          </div>
          <p class="menu-dish-desc">${escapeHtml(item.description)}</p>
          <div class="menu-dish-tags">${tagsHtml}</div>
        </div>
      `;

      container.appendChild(card);
    });
  }

  // Initial render
  filterAndRender();
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// ==========================================
// 2. MODAL DIALOGS SYSTEM
// ==========================================
function initModals() {
  // Generic modal close
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('.modal-close-btn')) {
        closeAllModals();
      }
    });
  });

  // Escape key to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Open Reservation Modal triggers
  document.querySelectorAll('.trigger-reservation-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('reservation-modal');
    });
  });

  // Open Event RFP Modal triggers
  document.querySelectorAll('.trigger-event-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('event-rfp-modal');
    });
  });

  // Open Gift Card Modal triggers
  document.querySelectorAll('.trigger-giftcard-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('giftcard-modal');
    });
  });

  // Open Directions Modal triggers
  document.querySelectorAll('.trigger-directions-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('directions-modal');
    });
  });

  // Form Submissions Handlers
  const resForm = document.getElementById('reservation-form');
  if (resForm) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const party = document.getElementById('res-guests').value;
      const date = document.getElementById('res-date').value;
      const time = document.getElementById('res-time').value;
      const name = document.getElementById('res-name').value;
      
      const successBox = document.getElementById('res-success-message');
      if (successBox) {
        successBox.style.display = 'block';
        successBox.innerHTML = `
          <div class="modal-success-card">
            <h4>Table Reserved, ${escapeHtml(name)}!</h4>
            <p>We look forward to welcoming you for <strong>${escapeHtml(party)} guests</strong> on <strong>${escapeHtml(date)}</strong> at <strong>${escapeHtml(time)}</strong>.</p>
            <p style="font-size:12px; color:var(--text-muted); margin-top:8px;">Remember: Enter through the iconic back door off Clarkson Road North. Tel: (905) 822-5751.</p>
          </div>
        `;
        resForm.style.display = 'none';
      }
    });
  }

  const rfpForm = document.getElementById('event-rfp-form');
  if (rfpForm) {
    rfpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('rfp-name').value;
      const occasion = document.getElementById('rfp-occasion').value;
      const guests = document.getElementById('rfp-guests').value;
      const date = document.getElementById('rfp-date').value;
      
      const successBox = document.getElementById('rfp-success-message');
      if (successBox) {
        successBox.style.display = 'block';
        successBox.innerHTML = `
          <div class="modal-success-card">
            <h4>Event Inquiry Received!</h4>
            <p>Thank you <strong>${escapeHtml(name)}</strong>. Our private dining coordinator will review your request for <strong>${escapeHtml(guests)} guests</strong> (${escapeHtml(occasion)}) on <strong>${escapeHtml(date)}</strong> and contact you within 24 hours.</p>
            <a href="assets/documents_and_menus/michaels-back-door-private-event-agreement-and-room-capacities.pdf" target="_blank" class="btn btn-outline-gold" style="margin-top:12px; display:inline-flex; align-items:center; gap:8px;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Download Event Guidelines PDF
            </a>
          </div>
        `;
        rfpForm.style.display = 'none';
      }
    });
  }

  const giftForm = document.getElementById('giftcard-form');
  if (giftForm) {
    giftForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const amount = document.querySelector('input[name="gc-amount"]:checked')?.value || '$100';
      const recipient = document.getElementById('gc-recipient-name')?.value || 'Recipient';
      const successBox = document.getElementById('gc-success-message');
      if (successBox) {
        successBox.style.display = 'block';
        successBox.innerHTML = `
          <div class="modal-success-card">
            <h4>Gift Card Order Initialized!</h4>
            <p>Your <strong>${escapeHtml(amount)}</strong> Michael's Back Door gift card for <strong>${escapeHtml(recipient)}</strong> is ready for checkout.</p>
            <p style="font-size:12px; color:var(--text-muted); margin-top:8px;">Traditional cards can also be purchased in person or by phone at (905) 822-5751 (Tue–Sun from 3:00 PM).</p>
          </div>
        `;
        giftForm.style.display = 'none';
      }
    });
  }
}

function openModal(modalId) {
  closeAllModals();
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  document.body.style.overflow = '';
}

// ==========================================
// 3. SYNTHESIZED LUXURY AUDIO AMBIANCE
// ==========================================
function initAudioAmbiance() {
  const toggleBtn = document.getElementById('audio-ambiance-toggle');
  if (!toggleBtn) return;

  let audioCtx = null;
  let isPlaying = false;
  let oscillators = [];
  let masterGain = null;

  toggleBtn.addEventListener('click', () => {
    if (!isPlaying) {
      startAmbiance();
    } else {
      stopAmbiance();
    }
  });

  function startAmbiance() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();

      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.04, audioCtx.currentTime + 2.5);
      masterGain.connect(audioCtx.destination);

      // Create warm harmonic chord (A major 9 warm dining tones)
      const freqs = [110, 164.81, 220, 277.18, 329.63, 415.30];
      oscillators = freqs.map((f, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(f, audioCtx.currentTime);

        // Subtle slow frequency vibrato for warmth
        const lfo = audioCtx.createOscillator();
        lfo.frequency.setValueAtTime(0.15 + (i * 0.05), audioCtx.currentTime);
        const lfoGain = audioCtx.createGain();
        lfoGain.gain.setValueAtTime(1.5, audioCtx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();

        gain.gain.setValueAtTime(0.12 / freqs.length, audioCtx.currentTime);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start();
        return { osc, lfo };
      });

      isPlaying = true;
      toggleBtn.classList.add('playing');
      toggleBtn.innerHTML = `
        <span class="audio-wave-anim">
          <span></span><span></span><span></span>
        </span>
        Ambiance: ON
      `;
    } catch (e) {
      console.warn('Web Audio not supported or blocked:', e);
    }
  }

  function stopAmbiance() {
    if (masterGain && audioCtx) {
      masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1);
      setTimeout(() => {
        oscillators.forEach(({ osc, lfo }) => {
          try { osc.stop(); lfo.stop(); } catch(err){}
        });
        if (audioCtx) audioCtx.close();
        audioCtx = null;
        oscillators = [];
      }, 1050);
    }
    isPlaying = false;
    toggleBtn.classList.remove('playing');
    toggleBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
      Ambiance: OFF
    `;
  }
}

// ==========================================
// 4. MOBILE NAVIGATION
// ==========================================
function initMobileNav() {
  const burgerBtn = document.getElementById('mobile-burger-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const closeBtn = document.getElementById('mobile-nav-close');
  if (!burgerBtn || !drawer) return;

  burgerBtn.addEventListener('click', () => {
    drawer.classList.add('open');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }

  drawer.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

// ==========================================
// 5. SMOOTH SCROLLING
// ==========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href.startsWith('#modal')) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
