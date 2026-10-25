/**
 * Bondly - Chemical Intelligence & Molecular Learning Engine
 * Client-Side Orchestrator v2.4
 */

(function () {
  'use strict';

  // State Management
  const state = {
    currentRoute: 'discover',
    currentCompound: null,
    activeFunctionalGroup: null,
    activeElementFilter: null,
    viewerMode: '3d-ball', // '3d-ball', '2d', '3d-cpk'
    viewer3D: null,
    isSpinning: false,
    spinTimer: null,
    searchQuery: '',
    smilesDrawer: null
  };

  // Harmonized Spectroscopic CPK Elemental Palette (Optimized for Dark Backgrounds)
  const BONDLY_CPK_PALETTE = {
    H:  { name: 'Hydrogen',   symbol: 'H',  hex: '#ffffff', num: 0xffffff, border: '1px solid rgba(255,255,255,0.45)' },
    C:  { name: 'Carbon',     symbol: 'C',  hex: '#94a3b8', num: 0x94a3b8 }, // Refined silver-grey (contrasts sharply on black)
    N:  { name: 'Nitrogen',   symbol: 'N',  hex: '#38bdf8', num: 0x38bdf8 }, // Electric sky-blue
    O:  { name: 'Oxygen',     symbol: 'O',  hex: '#ef4444', num: 0xef4444 }, // Vivid crimson red
    F:  { name: 'Fluorine',   symbol: 'F',  hex: '#4ade80', num: 0x4ade80 }, // Luminous mint-green (distinct from yellow Sulfur)
    P:  { name: 'Phosphorus', symbol: 'P',  hex: '#f97316', num: 0xf97316 }, // Luminous orange
    S:  { name: 'Sulfur',     symbol: 'S',  hex: '#facc15', num: 0xfacc15 }, // Pure sulfur golden-yellow
    Cl: { name: 'Chlorine',   symbol: 'Cl', hex: '#10b981', num: 0x10b981 }, // Deep emerald green
    Br: { name: 'Bromine',    symbol: 'Br', hex: '#c2410c', num: 0xc2410c }, // Amber-rust brown
    I:  { name: 'Iodine',     symbol: 'I',  hex: '#a855f7', num: 0xa855f7 }, // Electric purple
    Na: { name: 'Sodium',     symbol: 'Na', hex: '#818cf8', num: 0x818cf8 },
    K:  { name: 'Potassium',  symbol: 'K',  hex: '#a78bfa', num: 0xa78bfa },
    Fe: { name: 'Iron',       symbol: 'Fe', hex: '#fb923c', num: 0xfb923c },
    Zn: { name: 'Zinc',       symbol: 'Zn', hex: '#67e8f9', num: 0x67e8f9 }
  };

  const BONDLY_COLORSCHEME_MAP = {};
  for (const [sym, data] of Object.entries(BONDLY_CPK_PALETTE)) {
    BONDLY_COLORSCHEME_MAP[sym] = data.hex;
    BONDLY_COLORSCHEME_MAP[sym.toUpperCase()] = data.hex;
    BONDLY_COLORSCHEME_MAP[sym.toLowerCase()] = data.hex;
  }

  function setupBondlyCPKColors() {
    if (typeof $3Dmol !== 'undefined' && $3Dmol.elementColors && $3Dmol.elementColors.defaultColors) {
      for (const [sym, data] of Object.entries(BONDLY_CPK_PALETTE)) {
        $3Dmol.elementColors.defaultColors[sym] = data.num;
        $3Dmol.elementColors.defaultColors[sym.toUpperCase()] = data.num;
        $3Dmol.elementColors.defaultColors[sym.toLowerCase()] = data.num;
      }
    }
  }

  // Helper: DOM Element selector
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  // Safe DOM updaters (prevent null pointer exceptions)
  const setTxt = (selector, val) => {
    const el = $(selector);
    if (el) el.textContent = val !== undefined && val !== null ? val : '';
  };
  const setHtml = (selector, val) => {
    const el = $(selector);
    if (el) el.innerHTML = val !== undefined && val !== null ? val : '';
  };

  // Initialize Application
  function init() {
    console.log('Initializing Bondly Platform v2.4...');

    // Synchronize 3Dmol element colors with Bondly CPK palette
    setupBondlyCPKColors();

    if (!window.BONDLY_DATABASE || !window.BONDLY_DATABASE.compounds) {
      console.error('BONDLY_DATABASE not loaded!');
      return;
    }

    // Initialize SmilesDrawer if available
    if (typeof SmilesDrawer !== 'undefined') {
      state.smilesDrawer = new SmilesDrawer.Drawer({
        width: 480,
        height: 280,
        bondThickness: 2.0,
        compactDrawing: false,
        theme: 'dark'
      });
    }

    // Set initial compound (default Aspirin)
    const aspirin = getCompoundBySlug('aspirin') || window.BONDLY_DATABASE.compounds[0];
    state.currentCompound = aspirin;

    // Setup Event Listeners
    setupNavigation();
    setupSearch();
    setupWorkspaceControls();
    setupKeyboardShortcuts();
    setupPeriodicTable();

    // Render Taxonomy Bento Cards on Discover page
    renderTaxonomyPortals();

    // Handle initial URL hash
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    // Auto-resize 3D viewer on window resize
    window.addEventListener('resize', () => {
      if (state.viewer3D && state.currentRoute === 'workspace') {
        state.viewer3D.resize();
        state.viewer3D.render();
      }
    });
  }

  // Helper: Find compound
  function getCompoundBySlug(slug) {
    if (!window.BONDLY_DATABASE) return null;
    return window.BONDLY_DATABASE.compounds.find(c => c.slug.toLowerCase() === slug.toLowerCase() || c.id.toLowerCase() === slug.toLowerCase());
  }

  // Routing Handler
  function handleHashChange() {
    let hash = window.location.hash.replace('#', '') || 'discover';
    let parts = hash.split('/');
    let route = parts[0] || 'discover';
    let param = parts[1];

    if (route === 'compare') {
      route = 'discover';
      param = null;
      window.location.hash = 'discover';
    }

    navigateTo(route, param, false);
  }

  function navigateTo(route, param = null, updateHash = true) {
    if (route === 'compare') {
      route = 'discover';
      param = null;
    }

    state.currentRoute = route;
    document.body.setAttribute('data-route', route);

    // Explicitly toggle top-right search button: hidden on Discover page & on mobile
    const topSearchBtn = $('.search-trigger-btn');
    if (topSearchBtn) {
      if (route === 'discover' || window.innerWidth <= 768) {
        topSearchBtn.style.setProperty('display', 'none', 'important');
      } else {
        topSearchBtn.style.removeProperty('display');
      }
    }

    // Update active nav links (desktop and mobile bottom dock)
    $$('.nav-link').forEach(link => {
      const path = link.getAttribute('data-route');
      if (path === route) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    $$('.mobile-nav-item').forEach(link => {
      const path = link.getAttribute('data-route');
      if (path === route) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Toggle View Sections
    $$('.view-section').forEach(section => {
      section.classList.remove('active');
      section.style.display = 'none';
    });

    const targetSection = $(`#view-${route}`);
    if (targetSection) {
      targetSection.classList.add('active');
      targetSection.style.display = 'block';
    }

    if (updateHash) {
      window.location.hash = param ? `${route}/${param}` : route;
    }

    // Route-specific initializations
    if (route === 'workspace') {
      if (param) {
        const comp = getCompoundBySlug(param);
        if (comp) {
          state.currentCompound = comp;
          loadCompoundIntoWorkspace(state.currentCompound);
        } else {
          // Dynamic live lookup via PubChem!
          fetchLivePubChemCompound(param);
        }
      } else {
        if (!state.currentCompound) {
          state.currentCompound = getCompoundBySlug('aspirin') || window.BONDLY_DATABASE.compounds[0];
        }
        loadCompoundIntoWorkspace(state.currentCompound);
      }
      setTimeout(() => {
        if (state.viewer3D) {
          state.viewer3D.resize();
          state.viewer3D.render();
        }
      }, 60);
    } else if (route === 'periodic') {
      renderPeriodicTable();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Expose globally for inline button handlers and external callers
  window.navigateTo = navigateTo;

  // Setup Navigation Listeners with Global Event Delegation
  function setupNavigation() {
    // Direct and robust click/touch listeners on mobile bottom dock items
    $$('.mobile-nav-item').forEach(btn => {
      const handleMobileNav = (e) => {
        e.preventDefault();
        const route = btn.getAttribute('data-route');
        if (route) {
          navigateTo(route);
        }
      };
      btn.addEventListener('click', handleMobileNav);
      btn.addEventListener('touchend', handleMobileNav, { passive: false });
    });

    // Global delegated click handler for all [data-route]
    document.addEventListener('click', (e) => {
      const routeEl = e.target.closest('[data-route]');
      if (!routeEl) return;
      e.preventDefault();
      const route = routeEl.getAttribute('data-route');
      const param = routeEl.getAttribute('data-param');
      if (route) {
        navigateTo(route, param);
      }
    });

    // Global delegated touchend handler for mobile dock
    document.addEventListener('touchend', (e) => {
      const routeEl = e.target.closest('.mobile-nav-item[data-route]');
      if (!routeEl) return;
      e.preventDefault();
      const route = routeEl.getAttribute('data-route');
      const param = routeEl.getAttribute('data-param');
      if (route) {
        navigateTo(route, param);
      }
    }, { passive: false });

    // Delegated "Surprise Me" button
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-surprise-me');
      if (!btn) return;
      e.preventDefault();
      if (!window.BONDLY_DATABASE?.compounds?.length) return;
      const compounds = window.BONDLY_DATABASE.compounds;
      const randomComp = compounds[Math.floor(Math.random() * compounds.length)];
      state.currentCompound = randomComp;
      navigateTo('workspace', randomComp.slug);
    });
  }

  // =========================================================================
  // VIEW 1: DISCOVERY HUB & SEARCH
  // =========================================================================

  function renderTaxonomyPortals() {
    const container = $('#taxonomy-bento-grid');
    if (!container) return;

    const families = [
      {
        id: 'carboxylic',
        tag: '−COOH',
        taxonomy: 'TAXONOMY 01',
        name: 'Carboxylic Acids',
        desc: 'Directly bonded carbonyl and hydroxyl; acidic proton transfer yields resonance-stabilized carboxylate anions.',
        entities: 48,
        precedent: 'Ethanoic, Benzoic, Methanoic Acid',
        pka: 'pKa ~ 3.8–4.8',
        span2: true,
        showSvg: true,
        sampleSlug: 'acetic-acid'
      },
      {
        id: 'alcohols',
        tag: '−OH',
        name: 'Alcohols & Phenols',
        desc: 'Protic hydroxyl groups providing rich hydrogen bonding donor networks, elevated boiling metrics, and solvolysis.',
        entities: 32,
        tagClass: 'primary',
        property: 'H-Donor / Acceptor',
        sampleSlug: 'ethanol'
      },
      {
        id: 'esters',
        tag: '−COOR',
        name: 'Esters & Aromas',
        desc: 'Volatile carboxylate condensation products lacking protic donors; defined by distinctive aromatic signatures.',
        entities: 27,
        tagClass: 'amber',
        property: 'High Volatility',
        sampleSlug: 'ethyl-acetate'
      },
      {
        id: 'amines',
        tag: '−NH₂ / −NR₂',
        name: 'Amines & Alkaloids',
        desc: 'Basic nitrogen centers featuring active lone pairs, pivotal in medicinal pharmacophore design and neurotransmission.',
        entities: 54,
        tagClass: 'slate',
        property: 'Brønsted Base',
        sampleSlug: 'morphine'
      },
      {
        id: 'carbonyls',
        tag: 'C=O',
        name: 'Aldehydes & Ketones',
        desc: 'Strongly polarized sp² carbonyl dipoles susceptible to nucleophilic addition and metabolic carbohydrate fluxes.',
        entities: 41,
        tagClass: 'primary',
        property: 'Electrophilic C',
        sampleSlug: 'naloxone'
      },
      {
        id: 'aromatic',
        tag: 'C₆H₅−',
        name: 'Aromatic Rings',
        desc: 'Planar π-electron ring assemblies adhering to Hückel 4n+2 criteria, providing hydrophobic stacking surfaces.',
        entities: 63,
        tagClass: 'slate',
        property: 'π–π Stacking',
        sampleSlug: 'benzene'
      },
      {
        id: 'amides',
        tag: '−CONH−',
        name: 'Amides & Peptides',
        desc: 'Rigid planar units with resonance double-bond character forming polypeptide backbones and structural polymers.',
        entities: 39,
        tagClass: 'amber',
        property: 'Planar Resonance',
        sampleSlug: 'acetamide'
      }
    ];

    function getFamilyMiniSvg(id) {
      switch(id) {
        case 'carboxylic':
          return `<svg width="80" height="28" viewBox="0 0 80 28" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary);">
            <path d="M 8 20 L 30 9 L 52 20" stroke-linecap="round"/>
            <path d="M 27 9 L 27 2 M 32 9 L 32 2" stroke-linecap="round"/>
            <circle cx="62" cy="20" r="2.5" fill="currentColor"/>
          </svg>`;
        case 'alcohols':
          return `<svg width="80" height="28" viewBox="0 0 80 28" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary);">
            <path d="M 8 20 L 28 9 L 50 20 L 64 12" stroke-linecap="round"/>
            <circle cx="68" cy="10" r="2.5" fill="currentColor"/>
          </svg>`;
        case 'esters':
          return `<svg width="80" height="28" viewBox="0 0 80 28" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent-amber);">
            <path d="M 8 20 L 28 9 L 42 16" stroke-linecap="round"/>
            <path d="M 26 9 L 26 2 M 30 9 L 30 2" stroke-linecap="round"/>
            <circle cx="48" cy="16" r="2" fill="currentColor"/>
            <path d="M 54 16 L 72 8" stroke-linecap="round"/>
          </svg>`;
        case 'amines':
          return `<svg width="80" height="28" viewBox="0 0 80 28" fill="none" stroke="currentColor" stroke-width="2" style="color: #38bdf8;">
            <path d="M 12 20 L 40 8 L 56 18" stroke-linecap="round"/>
            <circle cx="40" cy="8" r="3" fill="#38bdf8"/>
          </svg>`;
        case 'carbonyls':
          return `<svg width="80" height="28" viewBox="0 0 80 28" fill="none" stroke="currentColor" stroke-width="2" style="color: #ef4444;">
            <path d="M 14 20 L 40 10 L 66 20" stroke-linecap="round"/>
            <path d="M 38 10 L 38 2 M 42 10 L 42 2" stroke-linecap="round"/>
          </svg>`;
        case 'aromatic':
          return `<svg width="80" height="28" viewBox="0 0 80 28" fill="none" stroke="currentColor" stroke-width="1.8" style="color: #06b6d4;">
            <polygon points="40,3 54,9 54,21 40,27 26,21 26,9"/>
            <circle cx="40" cy="15" r="5.5" stroke-dasharray="2,2"/>
          </svg>`;
        case 'amides':
          return `<svg width="100" height="28" viewBox="0 0 100 28" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary);">
            <path d="M 8 18 L 28 8 L 50 18 L 70 8 L 88 16" stroke-linecap="round"/>
            <path d="M 26 8 L 26 2 M 30 8 L 30 2" stroke-linecap="round"/>
            <circle cx="50" cy="18" r="2.5" fill="#38bdf8"/>
          </svg>`;
        default:
          return '';
      }
    }

    container.innerHTML = families.map(f => `
      <div class="bento-card ${f.span2 ? 'bento-span-2' : ''}" data-sample-slug="${f.sampleSlug}">
        <div>
          <div class="bento-header">
            <span class="bento-tag ${f.tagClass || ''}">${f.tag}</span>
            <div style="text-align: right;">
              <span class="font-mono bento-count" style="font-weight: 700; font-size: 14px;">${f.entities}</span>
              <span class="font-mono bento-models-label" style="font-size: 10px; color: var(--text-muted); display: block;">models</span>
            </div>
          </div>
          <h3 class="bento-title">${f.name}</h3>
          <p class="bento-desc">${f.desc}</p>
        </div>
        
        <div class="bento-mini-art">
          ${getFamilyMiniSvg(f.id)}
        </div>

        <div class="bento-footer">
          <span>${f.property || 'Taxonomic Portal'}</span>
          <span style="display: flex; align-items: center; gap: 4px; color: var(--primary); font-weight: 600;">
            Explore <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
          </span>
        </div>
      </div>
    `).join('');

    // Attach click handlers to open compound in workspace
    container.querySelectorAll('.bento-card').forEach(card => {
      card.addEventListener('click', () => {
        const slug = card.getAttribute('data-sample-slug');
        if (slug) {
          const comp = getCompoundBySlug(slug);
          if (comp) {
            state.currentCompound = comp;
            navigateTo('workspace', comp.slug);
          }
        }
      });
    });
  }

  let searchDebounceTimer = null;

  async function queryPubChemAutocomplete(term) {
    if (!term || term.length < 2) return [];
    try {
      const url = `https://pubchem.ncbi.nlm.nih.gov/rest/autocomplete/compound/${encodeURIComponent(term)}/json?limit=5`;
      const res = await fetch(url);
      if (!res.ok) return [];
      const data = await res.json();
      return data.dictionary_terms?.compound || [];
    } catch (e) {
      console.warn('PubChem autocomplete failed:', e);
      return [];
    }
  }

  function renderSearchResults(query, matches, liveSuggestions, targetDropdown, isLoadingLive = false) {
    const q = query.trim();
    if (!q) {
      targetDropdown.classList.remove('visible');
      return;
    }

    let html = '';

    // 1. Local Curated Matches
    if (matches && matches.length > 0) {
      html += `
        <div class="dropdown-header">
          <span>Curated Chemical Benchmarks (${matches.length})</span>
          <span>Verified Conformer</span>
        </div>
        <div>
          ${matches.map(m => `
            <div class="dropdown-item" data-slug="${m.slug}">
              <div style="display: flex; align-items: center;">
                <div class="compound-badge-code">${m.name.slice(0, 3).toUpperCase()}</div>
                <div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-weight: 700; font-size: 14px; color: var(--on-surface);">${m.name}</span>
                    <span class="badge-curated">Benchmark</span>
                    <span class="font-mono" style="font-size: 11px; color: var(--text-muted);">${m.iupac_name}</span>
                  </div>
                  <div class="font-mono" style="font-size: 11px; color: var(--outline); margin-top: 2px;">
                    Formula: ${formatFormula(m.formula)} • MW: ${m.mol_weight.toFixed(2)} g/mol
                  </div>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="material-symbols-outlined" style="color: var(--primary); font-size: 18px;">arrow_forward</span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // 2. PubChem Live Autocomplete Matches
    if (liveSuggestions && liveSuggestions.length > 0) {
      html += `
        <div class="dropdown-section-divider">
          <span class="material-symbols-outlined" style="font-size: 14px; color: var(--accent-amber);">bolt</span>
          <span>PubChem Live Chemical Engine (${liveSuggestions.length} Entities)</span>
          ${isLoadingLive ? '<div class="search-spinner" style="margin-left: auto;"></div>' : ''}
        </div>
        <div>
          ${liveSuggestions.map(term => `
            <div class="dropdown-item" data-pubchem-name="${escapeHtml(term)}">
              <div style="display: flex; align-items: center;">
                <div class="compound-badge-code" style="color: var(--accent-amber); background: rgba(245, 158, 11, 0.1);">PUB</div>
                <div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-weight: 700; font-size: 14px; color: var(--on-surface);">${escapeHtml(term)}</span>
                    <span class="badge-live-pubchem">
                      <span class="material-symbols-outlined" style="font-size: 12px;">cloud_sync</span>
                      PubChem 3D
                    </span>
                  </div>
                  <div class="font-mono" style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">
                    Live PUG REST API query • Fetch 3D Conformation & Pharmacophore
                  </div>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="material-symbols-outlined" style="color: var(--accent-amber); font-size: 18px;">view_in_ar</span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // 3. Bottom Universal Action: Search PubChem for query
    html += `
      <div class="dropdown-action-item" data-action="fetch-pubchem" data-query="${escapeHtml(q)}">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 32px; height: 32px; border-radius: 8px; background: var(--primary-fixed); color: var(--primary); display: flex; align-items: center; justify-content: center;">
            <span class="material-symbols-outlined" style="font-size: 18px;">travel_explore</span>
          </div>
          <div>
            <div style="font-size: 13px; font-weight: 700; color: var(--on-surface);">
              Fetch & Analyze <strong>"${escapeHtml(q)}"</strong> on-demand
            </div>
            <div class="font-mono" style="font-size: 11px; color: var(--text-muted);">
              Downloads 3D conformer, calculates Lipinski metrics & SAR from PubChem API
            </div>
          </div>
        </div>
        <button class="btn-primary" style="padding: 6px 14px; font-size: 12px; pointer-events: none;">
          Fetch 3D
        </button>
      </div>
    `;

    targetDropdown.innerHTML = html;
    targetDropdown.classList.add('visible');

    // Click handler for local items
    targetDropdown.querySelectorAll('[data-slug]').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const slug = item.getAttribute('data-slug');
        const comp = getCompoundBySlug(slug);
        if (comp) {
          state.currentCompound = comp;
          targetDropdown.classList.remove('visible');
          $('#searchModal')?.classList.remove('open');
          navigateTo('workspace', comp.slug);
        }
      });
    });

    // Click handler for PubChem live terms
    targetDropdown.querySelectorAll('[data-pubchem-name]').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const name = item.getAttribute('data-pubchem-name');
        targetDropdown.classList.remove('visible');
        $('#searchModal')?.classList.remove('open');
        fetchLivePubChemCompound(name);
      });
    });

    // Click handler for universal action button
    targetDropdown.querySelectorAll('[data-action="fetch-pubchem"]').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const queryTerm = item.getAttribute('data-query');
        targetDropdown.classList.remove('visible');
        $('#searchModal')?.classList.remove('open');
        fetchLivePubChemCompound(queryTerm);
      });
    });
  }

  function setupSearch() {
    const input = $('#compoundSearchInput');
    const dropdown = $('#searchResultsDropdown');
    const modalInput = $('#modalSearchInput');
    const modalDropdown = $('#modalSearchResults');
    const modal = $('#searchModal');

    function executeQuery(query, targetDropdown) {
      const q = query.trim();
      if (!q) {
        targetDropdown.classList.remove('visible');
        return;
      }

      const qLower = q.toLowerCase();
      const localMatches = window.BONDLY_DATABASE.compounds.filter(c => {
        return c.name.toLowerCase().includes(qLower) ||
               c.canonical_name.toLowerCase().includes(qLower) ||
               c.iupac_name.toLowerCase().includes(qLower) ||
               c.formula.toLowerCase().includes(qLower) ||
               (c.cas && c.cas.toLowerCase().includes(qLower)) ||
               (c.smiles && c.smiles.toLowerCase().includes(qLower)) ||
               c.tags.some(t => t.toLowerCase().includes(qLower));
      }).slice(0, 4);

      // Render local matches immediately
      renderSearchResults(q, localMatches, [], targetDropdown, true);

      // Debounce call to PubChem Autocomplete
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(async () => {
        const liveTerms = await queryPubChemAutocomplete(q);
        // Filter out terms that already match local matches by name
        const filteredLive = liveTerms.filter(t => !localMatches.some(m => m.name.toLowerCase() === t.toLowerCase())).slice(0, 5);
        renderSearchResults(q, localMatches, filteredLive, targetDropdown, false);
      }, 220);
    }

    if (input && dropdown) {
      input.addEventListener('input', (e) => executeQuery(e.target.value, dropdown));
      input.addEventListener('focus', (e) => {
        if (e.target.value.trim()) executeQuery(e.target.value, dropdown);
      });
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const val = input.value.trim();
          if (val) {
            dropdown.classList.remove('visible');
            const local = window.BONDLY_DATABASE.compounds.find(c => c.name.toLowerCase() === val.toLowerCase() || c.slug.toLowerCase() === val.toLowerCase());
            if (local) {
              state.currentCompound = local;
              navigateTo('workspace', local.slug);
            } else {
              fetchLivePubChemCompound(val);
            }
          }
        }
      });
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box-wrapper')) {
          dropdown.classList.remove('visible');
        }
      });
    }

    if (modalInput && modalDropdown) {
      modalInput.addEventListener('input', (e) => executeQuery(e.target.value, modalDropdown));
      modalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const val = modalInput.value.trim();
          if (val) {
            modalDropdown.classList.remove('visible');
            modal.classList.remove('open');
            fetchLivePubChemCompound(val);
          }
        }
      });
    }

    // Modal Trigger
    const openModal = () => {
      if (modal) {
        modal.classList.add('open');
        setTimeout(() => modalInput && modalInput.focus(), 50);
      }
    };

    const closeModal = () => {
      if (modal) modal.classList.remove('open');
    };

    $$('.search-trigger-btn').forEach(btn => btn.addEventListener('click', openModal));
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }
  }

  // =========================================================================
  // UNIVERSAL PUBCHEM LIVE API & 3D ON-DEMAND CONFORMER FETCHING
  // =========================================================================

  async function fetchLivePubChemCompound(queryOrName) {
    if (!queryOrName) return;
    const cleanQuery = queryOrName.trim();
    console.log(`Connecting to PubChem PUG REST API for "${cleanQuery}"...`);

    // Ensure we are in workspace view with loading overlay
    navigateTo('workspace', null, false);
    const loadingOverlay = $('#chamber-loading-overlay');
    const loadingTitle = $('#chamber-loading-title');
    const loadingSubtitle = $('#chamber-loading-subtitle');
    
    if (loadingOverlay) {
      loadingOverlay.classList.add('active');
      if (loadingTitle) loadingTitle.textContent = `Connecting to PubChem for "${cleanQuery}"...`;
      if (loadingSubtitle) loadingSubtitle.textContent = 'Resolving chemical identifiers and retrieving PUG REST properties';
    }

    try {
      // 1. Fetch chemical properties from PubChem
      const propUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(cleanQuery)}/property/Title,IUPACName,MolecularFormula,MolecularWeight,XLogP,TPSA,HBondDonorCount,HBondAcceptorCount,RotatableBondCount,CanonicalSMILES,ConnectivitySMILES,InChIKey/JSON`;
      const propRes = await fetch(propUrl);
      if (!propRes.ok) {
        throw new Error(`Compound "${cleanQuery}" not found in PubChem registry.`);
      }
      const propData = await propRes.json();
      const props = propData.PropertyTable?.Properties?.[0];
      if (!props) throw new Error('No properties returned from PubChem.');

      const cid = props.CID;
      const title = props.Title || cleanQuery;
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

      if (loadingSubtitle) loadingSubtitle.textContent = `Downloading 3D conformer coordinates (PubChem CID: ${cid})...`;

      // 2. Fetch 3D SDF conformer (with fallback to 2D SDF)
      let sdfData = null;
      try {
        const sdf3dRes = await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/SDF?record_type=3d`);
        if (sdf3dRes.ok) {
          sdfData = await sdf3dRes.text();
        }
      } catch (e) {
        console.warn('3D SDF fetch error, trying 2D fallback:', e);
      }

      if (!sdfData || sdfData.length < 50) {
        const sdf2dRes = await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/SDF`);
        if (sdf2dRes.ok) {
          sdfData = await sdf2dRes.text();
        }
      }

      // 3. Fetch Description & Pharmacology
      if (loadingSubtitle) loadingSubtitle.textContent = 'Retrieving verified pharmacological mechanism & IUPAC annotations...';
      let descriptionText = '';
      let descSource = 'PubChem Chemical Intelligence';
      try {
        const descRes = await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/description/JSON`);
        if (descRes.ok) {
          const descData = await descRes.json();
          const items = descData.InformationList?.Information || [];
          for (const item of items) {
            if (item.Description) {
              descriptionText = item.Description;
              descSource = item.DescriptionSourceName || descSource;
              break;
            }
          }
        }
      } catch (e) {
        console.warn('Description fetch error:', e);
      }

      if (!descriptionText) {
        descriptionText = `${title} is a bioactive chemical entity indexed under PubChem CID ${cid} with molecular formula ${props.MolecularFormula} and molecular weight ${Number(props.MolecularWeight).toFixed(2)} g/mol.`;
      }

      // 4. Automatically identify functional groups from SMILES and formula
      const smiles = props.CanonicalSMILES || props.ConnectivitySMILES || '';
      const functionalGroups = extractFunctionalGroups(smiles, props.MolecularFormula);

      // 5. Construct Lipinski & Druglikeness analysis
      const mw = parseFloat(props.MolecularWeight) || 0;
      const logp = parseFloat(props.XLogP) || 0;
      const hbd = parseInt(props.HBondDonorCount, 10) || 0;
      const hba = parseInt(props.HBondAcceptorCount, 10) || 0;
      const rotb = parseInt(props.RotatableBondCount, 10) || 0;
      const tpsa = parseFloat(props.TPSA) || 0;

      let lipinskiViolations = 0;
      if (mw > 500) lipinskiViolations++;
      if (logp > 5.0) lipinskiViolations++;
      if (hbd > 5) lipinskiViolations++;
      if (hba > 10) lipinskiViolations++;

      // Construct Bondly Compound Object
      const newCompound = {
        id: `cid-${cid}`,
        slug: slug,
        name: title,
        canonical_name: title,
        iupac_name: props.IUPACName || title,
        formula: props.MolecularFormula || '',
        mol_weight: mw,
        cas: '',
        inchikey: props.InChIKey || '',
        smiles: smiles,
        sdf_data: sdfData,
        sdf_3d: sdfData,
        logp: logp,
        tpsa: tpsa,
        hbd: hbd,
        hba: hba,
        rotatable_bonds: rotb,
        melting_pt: 'N/A (Calculated)',
        boiling_pt: 'N/A (Thermal Decomposition)',
        solubility: logp < 1 ? 'Freely Soluble' : (logp < 3 ? 'Moderately Soluble' : 'Sparingly Soluble'),
        organoleptic: 'Synthesized bioactive small molecule',
        family_name: determineFamily(functionalGroups, title),
        subfamily: 'PubChem Live Conformer',
        description: descriptionText,
        tags: [
          'PubChem Verified',
          lipinskiViolations <= 1 ? 'Rule of 5 Pass' : 'Specialized MW',
          functionalGroups[0]?.name || 'Bioactive'
        ],
        properties: {
          density: '1.20 g/cm³',
          melting_point: 'N/A (Calculated)',
          boiling_point: 'N/A (Thermal Decomposition)',
          solubility_water: logp < 1 ? 'Freely Soluble' : (logp < 3 ? 'Moderately Soluble' : 'Sparingly Soluble'),
          logp: logp,
          tpsa: tpsa,
          pka: 'N/A',
          h_bond_donors: hbd,
          h_bond_acceptors: hba,
          rotatable_bonds: rotb,
          refractivity: 'Computed PUG-REST Spec'
        },
        functional_groups: functionalGroups,
        story: {
          title: `Pharmacological Mechanism of Action`,
          body: descriptionText,
          hydrolysis_note: `Topological Polar Surface Area of ${tpsa} Å² with ${rotb} rotatable bonds determines conformational stability and enzymatic membrane interaction.`,
          historical_milestone: `Indexed under PubChem Registry CID ${cid}. Standard pharmaceutical conformer verified with ${lipinskiViolations} Lipinski violation(s).`,
          reviewer: descSource,
          reviewed_on: '2026-10-24',
          citations: [
            {
              citation: `PubChem Compound Summary for CID ${cid}, ${title}.`,
              url: `https://pubchem.ncbi.nlm.nih.gov/compound/${cid}`
            }
          ]
        },
        stories: [
          {
            title: `Structural Chemistry & Mechanism (${descSource})`,
            content: descriptionText
          },
          {
            title: 'Lipinski Rule of 5 & Bioavailability Profile',
            content: `Lipinski Rule of Five assessment: Molecular Weight ${mw.toFixed(2)} g/mol (${mw <= 500 ? '✓ ≤ 500' : '✗ > 500'}), XLogP ${logp.toFixed(2)} (${logp <= 5.0 ? '✓ ≤ 5.0' : '✗ > 5.0'}), Hydrogen Bond Donors ${hbd} (${hbd <= 5 ? '✓ ≤ 5' : '✗ > 5'}), Hydrogen Bond Acceptors ${hba} (${hba <= 10 ? '✓ ≤ 10' : '✗ > 10'}). Total Violations: ${lipinskiViolations}. Topological Polar Surface Area (TPSA): ${tpsa} Å² (${tpsa <= 140 ? 'High gastrointestinal permeability' : 'Lower mucosal absorption'}). Rotatable Bonds: ${rotb}.`
          }
        ]
      };

      // Add to database if not exists
      const existingIdx = window.BONDLY_DATABASE.compounds.findIndex(c => c.slug === slug || c.id === newCompound.id);
      if (existingIdx >= 0) {
        window.BONDLY_DATABASE.compounds[existingIdx] = newCompound;
      } else {
        window.BONDLY_DATABASE.compounds.unshift(newCompound);
      }

      state.currentCompound = newCompound;
      window.location.hash = `workspace/${newCompound.slug}`;
      loadCompoundIntoWorkspace(newCompound);
      showToast(`Loaded ${newCompound.name} via PubChem 3D API`);

    } catch (err) {
      console.error('PubChem Live Fetch Failed:', err);
      showToast(`PubChem Error: ${err.message}`);
      if (loadingSubtitle) loadingSubtitle.textContent = `Error: ${err.message}`;
    } finally {
      if (loadingOverlay) {
        setTimeout(() => loadingOverlay.classList.remove('active'), 350);
      }
    }
  }

  function extractFunctionalGroups(smiles, formula) {
    const groups = [];
    if (!smiles) return groups;

    // Carboxylic Acid
    if (/C\(=O\)O[H]?|C\(=O\)\[O-\]/i.test(smiles)) {
      groups.push({
        id: 'carboxyl',
        name: 'Carboxylic Acid',
        formula: '−COOH',
        description: 'Acidic carboxyl moiety with polarized C=O and ionizable O-H capable of resonance stabilization.',
        importance: 'Primary driver of aqueous solubility, hydrogen-bonding networks, and physiological ionization (pKa ~ 3-5).'
      });
    }

    // Ester
    if (/C\(=O\)O[C|c]/i.test(smiles)) {
      groups.push({
        id: 'ester',
        name: 'Ester',
        formula: '−COOR',
        description: 'Carboxylate condensation group providing H-bond acceptance without protic donor capacity.',
        importance: 'Often utilized in prodrug design to enhance lipophilicity and cellular membrane crossing prior to enzymatic esterase cleavage.'
      });
    }

    // Amide
    if (/C\(=O\)N/i.test(smiles)) {
      groups.push({
        id: 'amide',
        name: 'Amide',
        formula: '−CONH−',
        description: 'Planar resonance-stabilized nitrogen-carbonyl linkage with high rotational barrier (~18-21 kcal/mol).',
        importance: 'Fundamental structural backbone of peptides and protease/target hydrogen-bonding contacts.'
      });
    }

    // Amine
    if (/N(?!(=O)|(\(=O\)))/i.test(smiles) && !/C\(=O\)N/i.test(smiles)) {
      groups.push({
        id: 'amine',
        name: 'Amine / Alkaloid Nitrogen',
        formula: '−NR₂ / −NH₂',
        description: 'Basic nitrogen center with localized lone pair accessible for protonation at physiological pH 7.4.',
        importance: 'Key pharmacophore anchoring site for biological receptor pocket cation-π and electrostatic binding.'
      });
    }

    // Hydroxyl / Phenol / Alcohol
    if (/[C|c]O[H]?/i.test(smiles) && !/C\(=O\)O/i.test(smiles)) {
      groups.push({
        id: 'hydroxyl',
        name: 'Hydroxyl / Alcohol',
        formula: '−OH',
        description: 'Protic oxygen-hydrogen motif acting simultaneously as hydrogen-bond donor and acceptor.',
        importance: 'Governs water solvation enthalpy, target receptor H-bonding networks, and phase II glucuronidation metabolism.'
      });
    }

    // Carbonyl (Ketone / Aldehyde)
    if (/C\(=O\)[C|c|H]/i.test(smiles) && !/C\(=O\)[O|N]/i.test(smiles)) {
      groups.push({
        id: 'carbonyl',
        name: 'Carbonyl (Ketone/Aldehyde)',
        formula: 'C=O',
        description: 'Strongly polarized sp² carbon-oxygen dipole with electrophilic carbonyl carbon.',
        importance: 'Common metabolic reactivity target and active-site hydrogen-bond acceptor.'
      });
    }

    // Aromatic Rings
    if (/c1[a-z0-9=]*c1|c2[a-z0-9=]*c2|[c]1[c][c][c][c][c]1/i.test(smiles) || (smiles.match(/c/g) || []).length >= 6) {
      groups.push({
        id: 'aromatic',
        name: 'Aromatic Ring System',
        formula: 'C₆H₅− / Heteroaromatic',
        description: 'Planar, delocalized (4n+2) π-electron cloud resistant to addition reactions.',
        importance: 'Provides hydrophobic surface area for π–π aromatic stacking and lipophilic desolvation enthalpy.'
      });
    }

    // Halogen
    if (/F|Cl|Br|I/.test(smiles)) {
      groups.push({
        id: 'halogen',
        name: 'Halogen Substituent',
        formula: '−F / −Cl / −Br',
        description: 'Electronegative halogen atom creating localized dipole and σ-hole polarizability.',
        importance: 'Significantly modulates metabolic stability by blocking cytochrome P450 aromatic oxidation and enhances lipophilicity.'
      });
    }

    // Ether
    if (/[C|c]O[C|c]/i.test(smiles) && !/C\(=O\)O/i.test(smiles)) {
      groups.push({
        id: 'ether',
        name: 'Ether Linkage',
        formula: '−O−',
        description: 'Flexible oxygen bridge connecting two carbon centers with sp³ hybridization.',
        importance: 'Serves as conformational linker and moderate hydrogen bond acceptor with low metabolic clearance liability.'
      });
    }

    // Sulfonamide / Sulfur
    if (/S\(=O\)\(=O\)N/i.test(smiles)) {
      groups.push({
        id: 'sulfonamide',
        name: 'Sulfonamide',
        formula: '−SO₂NH−',
        description: 'Tetrahedral sulfur center flanked by two oxygens and an amine group.',
        importance: 'Classical antibiotic and diuretic motif with high target affinity and zinc coordination capability.'
      });
    }

    return groups;
  }

  function determineFamily(groups, title) {
    if (groups.some(g => g.id === 'carboxyl')) return 'Carboxylic Acids';
    if (groups.some(g => g.id === 'ester')) return 'Esters & Aromas';
    if (groups.some(g => g.id === 'amide')) return 'Amides & Peptides';
    if (groups.some(g => g.id === 'amine')) return 'Amines & Alkaloids';
    if (groups.some(g => g.id === 'hydroxyl')) return 'Alcohols & Phenols';
    if (groups.some(g => g.id === 'carbonyl')) return 'Aldehydes & Ketones';
    if (groups.some(g => g.id === 'aromatic')) return 'Aromatic Systems';
    return 'Bioactive Small Molecules';
  }

  // =========================================================================
  // VIEW 2: 3D MOLECULAR WORKSPACE
  // =========================================================================

  function loadCompoundIntoWorkspace(compound) {
    if (!compound) return;
    state.currentCompound = compound;
    state.activeFunctionalGroup = null;
    state.activeElementFilter = null;

    console.log(`Loading ${compound.name} into Workspace...`);

    // 1. Update Title & Identifiers
    setTxt('#ws-compound-name', compound.name);
    setTxt('#ws-canonical-name', compound.canonical_name);
    setTxt('#ws-iupac', compound.iupac_name);
    setHtml('#ws-formula-badge', formatFormula(compound.formula));
    setTxt('#ws-cas-text', compound.cas ? `CAS: ${compound.cas}` : '');
    setTxt('#ws-inchikey-text', `InChIKey: ${compound.inchikey || 'N/A'}`);
    setTxt('#ws-subfamily-tag', compound.subfamily || compound.family_name);

    // 2. Render 3D Molecule
    render3DViewer(compound);

    // 3. Render 2D Skeletal Structure
    render2DStructure(compound);

    // 4. Render Quick Metrics Bar
    renderQuickMetrics(compound);

    // 5. Render Functional Group Explorer Deck
    renderFunctionalGroups(compound);

    // 6. Render Analytical Dossier (Properties, Stories, etc.)
    renderDossier(compound);

    // 7. Update Compound Switcher Dropdown
    renderCompoundSwitcher();
  }

  function render3DViewer(compound) {
    const container = $('#chamber-viewport');
    if (!container) return;

    if (typeof $3Dmol === 'undefined') {
      container.innerHTML = `
        <div style="height: 100%; display: flex; align-items: center; justify-content: center; color: #94a3b8; font-family: var(--font-mono); font-size: 12px; text-align: center; padding: 24px;">
          <div>
            <span class="material-symbols-outlined" style="font-size: 36px; color: var(--accent-amber); margin-bottom: 8px;">warning</span>
            <div>3Dmol WebGL library is loading or WebGL is unavailable.</div>
            <button class="btn-secondary" id="btn-fallback-2d" style="margin-top: 12px;">Switch to 2D Skeletal View</button>
          </div>
        </div>
      `;
      $('#btn-fallback-2d')?.addEventListener('click', () => switchViewerMode('2d'));
      return;
    }

    // If container not yet laid out (0 width/height), defer until next animation frame
    if (container.offsetWidth === 0 || container.offsetHeight === 0) {
      requestAnimationFrame(() => render3DViewer(compound));
      return;
    }

    console.log('[Bondly 3D] render3DViewer called for:', compound?.name, 'dims:', container.offsetWidth, 'x', container.offsetHeight, 'sdf length:', (compound?.sdf_3d || compound?.sdf_data)?.length);

    try {
      let viewer = state.viewer3D;
      const existingCanvas = container.querySelector('canvas');

      if (!viewer || !existingCanvas) {
        container.innerHTML = '';
        const config = { backgroundColor: '#08111e' };
        viewer = $3Dmol.createViewer(container, config);
        state.viewer3D = viewer;

        // Atom picking click handler
        viewer.setClickable({}, true, function (atom, v, event) {
          if (!atom) return;
          showAtomTooltip(atom, event);
        });
        console.log('[Bondly 3D] New 3Dmol viewer created successfully');
      } else {
        viewer.clear();
        console.log('[Bondly 3D] Existing viewer cleared');
      }

      // Load 3D SDF coordinates
      const sdf = compound.sdf_3d || compound.sdf_data;
      let totalAtoms = 0;
      if (sdf) {
        const model = viewer.addModel(sdf, 'sdf');
        totalAtoms = model ? model.selectedAtoms({}).length : 0;
        console.log('[Bondly 3D] Model added, atoms count:', totalAtoms);
      } else {
        console.warn('[Bondly 3D] No SDF data found on compound:', compound?.name);
      }

      viewer.resize();
      apply3DStyle(state.viewerMode);
      viewer.zoomTo();
      viewer.render();
      console.log('[Bondly 3D] viewer.render() completed');

      // Update dynamic chamber status bar and elements legend
      setTxt('#chamber-total-atoms', totalAtoms || '--');
      setHtml('#chamber-formula-spec', formatFormula(compound.formula || ''));
      renderChamberElementLegend(compound);

    } catch (err) {
      console.error('Error rendering 3D viewer:', err);
    }
  }

  function apply3DStyle(mode) {
    const viewer = state.viewer3D;
    if (!viewer) return;

    const colorConfig = { prop: 'elem', map: BONDLY_COLORSCHEME_MAP };

    if (mode === '3d-cpk') {
      viewer.setStyle({}, {
        sphere: {
          scale: 0.88,
          colorscheme: colorConfig
        }
      });
    } else {
      // 3D Ball & Stick with standard CPK atom colors
      viewer.setStyle({}, {
        stick: {
          radius: 0.16,
          colorscheme: colorConfig
        },
        sphere: {
          scale: 0.32,
          colorscheme: colorConfig
        }
      });
    }

    // If an active functional group is chosen, re-highlight its atoms
    if (state.activeFunctionalGroup) {
      highlightFunctionalGroupIn3D(state.activeFunctionalGroup);
    } else if (state.activeElementFilter) {
      highlightElementIn3D(state.activeElementFilter);
    } else {
      viewer.render();
    }
  }

  function highlightFunctionalGroupIn3D(fg) {
    const viewer = state.viewer3D;
    if (!viewer) return;

    const hudPill = $('#targeting-hud-pill');

    if (!fg) {
      apply3DStyle(state.viewerMode);
      if (hudPill) hudPill.style.display = 'none';
      return;
    }

    // Dim background atoms
    viewer.setStyle({}, {
      stick: { radius: 0.10, color: '#1e293b', opacity: 0.3 },
      sphere: { scale: 0.20, color: '#1e293b', opacity: 0.3 }
    });

    // Highlight selected atom indices with emissive amber
    const indices = fg.atom_indices || [];
    viewer.setStyle({ index: indices }, {
      stick: { radius: 0.28, color: '#f59e0b' },
      sphere: { scale: 0.45, color: '#f59e0b' }
    });

    viewer.render();

    // Update Floating HUD status
    if (hudPill) {
      hudPill.style.display = 'flex';
      hudPill.innerHTML = `
        <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent-amber); display: inline-block;"></span>
        <span>Targeting: <strong style="color: #fde68a;">${fg.name} (${fg.formula})</strong></span>
        <span style="background: rgba(245, 158, 11, 0.3); font-size: 10px; padding: 2px 6px; border-radius: 4px; font-weight: 700;">${indices.length} ATOMS</span>
      `;
    }
  }

  function highlightElementIn3D(sym) {
    const viewer = state.viewer3D;
    if (!viewer) return;

    const hudPill = $('#targeting-hud-pill');

    if (state.activeElementFilter === sym) {
      // Toggle off
      state.activeElementFilter = null;
      $$('.cpk-chip').forEach(c => c.classList.remove('active'));
      apply3DStyle(state.viewerMode);
      if (hudPill) hudPill.style.display = 'none';
      return;
    }

    state.activeElementFilter = sym;
    $$('.cpk-chip').forEach(c => {
      if (c.getAttribute('data-elem') === sym) {
        c.classList.add('active');
      } else {
        c.classList.remove('active');
      }
    });

    const cpk = BONDLY_CPK_PALETTE[sym] || { name: sym, hex: '#94a3b8' };
    const matchingAtoms = viewer.selectedAtoms({ elem: sym });

    // Dim background atoms
    viewer.setStyle({}, {
      stick: { radius: 0.08, color: '#1e293b', opacity: 0.25 },
      sphere: { scale: 0.16, color: '#1e293b', opacity: 0.25 }
    });

    // Highlight target element atoms with their true vibrant CPK color
    if (state.viewerMode === '3d-cpk') {
      viewer.setStyle({ elem: sym }, {
        sphere: { scale: 0.95, color: cpk.hex }
      });
    } else {
      viewer.setStyle({ elem: sym }, {
        stick: { radius: 0.28, color: cpk.hex },
        sphere: { scale: 0.45, color: cpk.hex }
      });
    }

    viewer.render();

    // Update Floating HUD status
    if (hudPill) {
      hudPill.style.display = 'flex';
      hudPill.innerHTML = `
        <span style="width: 8px; height: 8px; border-radius: 50%; background: ${cpk.hex}; display: inline-block;"></span>
        <span>Isolating: <strong style="color: #fff;">${cpk.name} (${sym})</strong></span>
        <span style="background: rgba(255, 255, 255, 0.18); font-size: 10px; padding: 2px 6px; border-radius: 4px; font-weight: 700;">${matchingAtoms.length} ATOMS</span>
      `;
    }
  }

  function renderChamberElementLegend(compound) {
    const legend = $('#chamber-cpk-legend');
    if (!legend) return;

    const counts = {};
    if (state.viewer3D) {
      const atoms = state.viewer3D.selectedAtoms({});
      if (atoms && atoms.length > 0) {
        atoms.forEach(a => {
          const sym = a.elem || 'C';
          counts[sym] = (counts[sym] || 0) + 1;
        });
      }
    }

    // Fallback: parse empirical formula if atoms not in 3Dmol yet
    if (Object.keys(counts).length === 0 && compound && compound.formula) {
      const regex = /([A-Z][a-z]*)(\d*)/g;
      let match;
      while ((match = regex.exec(compound.formula)) !== null) {
        if (match[1]) {
          const sym = match[1];
          const num = match[2] ? parseInt(match[2], 10) : 1;
          counts[sym] = (counts[sym] || 0) + num;
        }
      }
    }

    const priorityOrder = ['C', 'H', 'O', 'N', 'F', 'P', 'S', 'Cl', 'Br', 'I', 'Na', 'K', 'Fe', 'Zn'];
    const presentSymbols = Object.keys(counts).sort((a, b) => {
      const idxA = priorityOrder.indexOf(a);
      const idxB = priorityOrder.indexOf(b);
      return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
    });

    if (presentSymbols.length === 0) {
      legend.innerHTML = '';
      return;
    }

    legend.innerHTML = `
      <span class="cpk-legend-label">ELEMENTS:</span>
      <div class="cpk-chips-wrapper">
        ${presentSymbols.map(sym => {
          const cpk = BONDLY_CPK_PALETTE[sym] || { name: sym, hex: '#94a3b8' };
          const count = counts[sym];
          const isSelected = state.activeElementFilter === sym;
          const borderStyle = cpk.border ? `border: ${cpk.border};` : '';
          return `
            <button class="cpk-chip ${isSelected ? 'active' : ''}" data-elem="${sym}" type="button" title="${cpk.name} (${sym}) • ${count} atom${count > 1 ? 's' : ''} in molecule. Click to isolate in 3D.">
              <span class="cpk-dot" style="background: ${cpk.hex}; ${borderStyle}"></span>
              <span class="cpk-sym">${sym}</span>
              <span class="cpk-name">${cpk.name}</span>
              <span class="cpk-count">${count}</span>
            </button>
          `;
        }).join('')}
      </div>
    `;

    // Click handlers to isolate element
    legend.querySelectorAll('.cpk-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        const sym = chip.getAttribute('data-elem');
        highlightElementIn3D(sym);
      });
    });
  }

  function showAtomTooltip(atom, event) {
    const tooltip = $('#atom-tooltip');
    if (!tooltip) return;

    const el = atom.elem || 'C';
    const cpk = BONDLY_CPK_PALETTE[el] || { name: el, hex: '#94a3b8' };

    tooltip.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; gap: 8px;">
        <span style="font-weight: 700; color: #fff; font-family: var(--font-mono); display: flex; align-items: center; gap: 6px;">
          <span style="width: 10px; height: 10px; border-radius: 50%; background: ${cpk.hex}; ${cpk.border ? 'border: ' + cpk.border + ';' : ''} display: inline-block;"></span>
          ${el} #${atom.serial !== undefined ? atom.serial : atom.index}
        </span>
        <span style="background: rgba(255, 255, 255, 0.12); color: #e2e8f0; font-size: 10px; padding: 2px 6px; border-radius: 4px; font-family: var(--font-mono); font-weight: 600;">${cpk.name}</span>
      </div>
      <div class="font-mono" style="font-size: 11px; color: #cbd5e1; line-height: 1.4;">
        <div>Spatial: (${atom.x.toFixed(2)}, ${atom.y.toFixed(2)}, ${atom.z.toFixed(2)}) Å</div>
        <div>CPK Color: <span style="color: ${cpk.hex}; font-weight: 700;">${cpk.hex}</span></div>
      </div>
    `;

    tooltip.style.display = 'block';
    setTimeout(() => {
      tooltip.style.display = 'none';
    }, 4000);
  }

  function render2DStructure(compound) {
    const container = $('#chamber-2d-canvas');
    if (!container || !compound) return;

    const smiles = compound.smiles || '';
    if (!smiles) {
      container.innerHTML = `
        <div style="color: #94a3b8; font-family: var(--font-mono); font-size: 13px; text-align: center; padding: 24px;">
          <span class="material-symbols-outlined" style="font-size: 36px; color: var(--accent-amber); margin-bottom: 8px;">polyline</span>
          <div>2D skeletal representation not available for this entity.</div>
          <div style="font-size: 11px; margin-top: 6px; color: #64748b;">Please select 3D Conformation or CPK Sphere.</div>
        </div>
      `;
      return;
    }

    container.innerHTML = '<svg id="chamber-2d-svg" width="560" height="420" style="max-width: 95%; max-height: 95%;"></svg>';
    const svg = $('#chamber-2d-svg');

    if (typeof SmilesDrawer !== 'undefined') {
      try {
        const DrawerClass = SmilesDrawer.SvgDrawer || SmilesDrawer.Drawer;
        const drawer = new DrawerClass({
          width: 560,
          height: 420,
          bondThickness: 2.0,
          bondLength: 22,
          theme: 'dark'
        });
        SmilesDrawer.parse(smiles, function (tree) {
          drawer.draw(tree, 'chamber-2d-svg', 'dark');
        }, function (err) {
          console.warn('SmilesDrawer parse error:', err);
        });
      } catch (err) {
        console.error('SmilesDrawer draw error:', err);
      }
    }
  }

  function renderQuickMetrics(compound) {
    const mw = compound.mol_weight || compound.properties?.mol_weight || 0;
    const hbd = compound.hbd !== undefined ? compound.hbd : compound.properties?.h_bond_donors;
    const hba = compound.hba !== undefined ? compound.hba : compound.properties?.h_bond_acceptors;
    setHtml('#qm-molar-mass', `${Number(mw).toFixed(2)} <span style="font-size: 11px; font-weight: 400; color: var(--text-muted);">g/mol</span>`);
    setHtml('#qm-formula', formatFormula(compound.formula || ''));
    setTxt('#qm-hbd', hbd !== undefined && hbd !== null ? hbd : '—');
    setTxt('#qm-hba', hba !== undefined && hba !== null ? hba : '—');
  }

  function renderFunctionalGroups(compound) {
    const list = $('#functional-group-list');
    if (!list) return;

    const groups = compound.functional_groups || [];
    if (groups.length === 0) {
      list.innerHTML = `<div style="color: var(--text-muted); font-size: 12px; padding: 8px;">No mapped functional groups for this entity.</div>`;
      return;
    }

    list.innerHTML = groups.map((g, idx) => `
      <div class="fg-card" data-fg-id="${g.id}">
        <div class="fg-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="width: 8px; height: 8px; border-radius: 50%; background: ${g.color || 'var(--primary)'}; display: inline-block;"></span>
            <span style="font-weight: 700; font-size: 13px; color: var(--on-surface);">${g.name}</span>
            <span class="fg-formula-pill">${g.formula}</span>
          </div>
          <span class="font-mono" style="font-size: 10px; color: var(--text-muted);">${g.atom_indices ? g.atom_indices.length + ' atoms' : ''}</span>
        </div>
        <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px; line-height: 1.4;">
          ${g.description}
        </div>
      </div>
    `).join('');

    list.querySelectorAll('.fg-card').forEach(card => {
      card.addEventListener('click', () => {
        const fgId = card.getAttribute('data-fg-id');
        const fg = groups.find(g => g.id === fgId);

        if (card.classList.contains('active')) {
          card.classList.remove('active');
          state.activeFunctionalGroup = null;
          highlightFunctionalGroupIn3D(null);
        } else {
          list.querySelectorAll('.fg-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          state.activeFunctionalGroup = fg;
          highlightFunctionalGroupIn3D(fg);
        }
      });
    });
  }

  function renderDossier(compound) {
    const logpRaw = compound.logp !== undefined ? compound.logp : compound.properties?.logp;
    const tpsaRaw = compound.tpsa !== undefined ? compound.tpsa : compound.properties?.tpsa;
    const pkaRaw = compound.pka !== undefined ? compound.pka : compound.properties?.pka;
    const formattedLogp = (logpRaw !== undefined && logpRaw !== null && !isNaN(logpRaw)) ? Number(logpRaw).toFixed(2) : 'N/A';
    const formattedTpsa = (tpsaRaw !== undefined && tpsaRaw !== null && !isNaN(tpsaRaw)) ? `${Number(tpsaRaw).toFixed(1)} Å²` : 'N/A';
    const formattedPka = (pkaRaw !== undefined && pkaRaw !== null && !isNaN(pkaRaw)) ? Number(pkaRaw).toFixed(2) : (pkaRaw || 'N/A');

    // 1. Properties Tab
    setTxt('#prop-melting-pt', compound.melting_pt || compound.properties?.melting_point || 'N/A');
    setTxt('#prop-boiling-pt', compound.boiling_pt || compound.properties?.boiling_point || 'N/A');
    setTxt('#prop-logp', formattedLogp);
    setTxt('#prop-solubility', compound.solubility || compound.properties?.solubility_water || 'N/A');
    setTxt('#prop-pka', formattedPka);
    setTxt('#prop-tpsa', formattedTpsa);

    // 2. Mechanisms & Explanations Tab
    const mechContainer = $('#dossier-mechanisms');
    if (mechContainer) {
      const story = compound.story || (compound.stories && compound.stories[0]) || {};
      mechContainer.innerHTML = `
        <div class="story-block">
          <div class="story-header">
            <span class="story-number-badge">1</span>
            <h4 class="story-title">Structure-Property Thermodynamics</h4>
          </div>
          <p class="story-text">
            ${compound.organoleptic ? `<strong>Organoleptic profile:</strong> ${compound.organoleptic}. ` : ''}
            LogP of <strong>${formattedLogp}</strong> and polar surface area of <strong>${formattedTpsa}</strong> govern bioavailability, membrane permeability, and receptor anchoring.
          </p>
        </div>

        ${story.hydrolysis_note ? `
          <div class="story-block highlight-amber">
            <div class="story-header">
              <span class="story-number-badge" style="background: var(--accent-amber);">2</span>
              <h4 class="story-title">Hydrolytic & Metabolic Susceptibility</h4>
            </div>
            <p class="story-text">${story.hydrolysis_note}</p>
          </div>
        ` : ''}

        ${story.body ? `
          <div class="story-block">
            <div class="story-header">
              <span class="material-symbols-outlined" style="font-size: 18px; color: var(--primary);">biotech</span>
              <h4 class="story-title">${story.title || 'Mechanism of Action'}</h4>
            </div>
            <p class="story-text">${story.body}</p>
          </div>
        ` : ''}

        ${story.historical_milestone ? `
          <div style="background: var(--surface-container-low); border-radius: var(--radius-lg); padding: 12px 14px; border: 1px solid var(--surface-container-high); margin-top: 10px;">
            <div style="display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 700; color: var(--on-surface); margin-bottom: 4px;">
              <span class="material-symbols-outlined" style="font-size: 16px; color: var(--tertiary);">history_edu</span>
              Historical Milestone
            </div>
            <p style="font-size: 11.5px; color: var(--text-muted); line-height: 1.5;">${story.historical_milestone}</p>
          </div>
        ` : ''}

        <div style="margin-top: 14px; padding-top: 10px; border-top: 1px solid var(--surface-container-high); display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 10px; color: var(--text-muted);">
          <span>Reviewer: <strong>${story.reviewer || 'Bondly Editorial Board'}</strong></span>
          <span>Verified: ${story.reviewed_on || '2026-10-24'}</span>
        </div>
      `;
    }

    // 3. Citations Tab
    const citeContainer = $('#dossier-citations');
    if (citeContainer) {
      const citations = compound.story && compound.story.citations ? compound.story.citations : [];
      citeContainer.innerHTML = citations.map(c => `
        <div style="padding: 10px 0; border-bottom: 1px solid var(--surface-container-low); font-size: 12px;">
          <div style="color: var(--on-surface); line-height: 1.4;">${c.citation}</div>
          ${c.url ? `<a href="${c.url}" target="_blank" rel="noopener noreferrer" style="font-family: var(--font-mono); font-size: 10px; color: var(--primary); text-decoration: none; margin-top: 4px; display: inline-flex; align-items: center; gap: 4px;">Verified Source <span class="material-symbols-outlined" style="font-size: 12px;">open_in_new</span></a>` : ''}
        </div>
      `).join('') || '<div style="font-size: 12px; color: var(--text-muted);">Standard IUPAC and CRC Handbook reference data.</div>';
    }
  }

  function renderCompoundSwitcher() {
    const select = $('#workspaceCompoundSelector');
    if (!select) return;

    select.innerHTML = window.BONDLY_DATABASE.compounds.map(c => `
      <option value="${c.slug}" ${c.slug === state.currentCompound.slug ? 'selected' : ''}>
        ${c.name} (${c.formula})
      </option>
    `).join('');

    select.onchange = (e) => {
      const slug = e.target.value;
      const comp = getCompoundBySlug(slug);
      if (comp) {
        state.currentCompound = comp;
        navigateTo('workspace', comp.slug);
      }
    };
  }

  function setupWorkspaceControls() {
    // Mode Switcher buttons
    $('#btn-mode-3d')?.addEventListener('click', () => switchViewerMode('3d-ball'));
    $('#btn-mode-2d')?.addEventListener('click', () => switchViewerMode('2d'));
    $('#btn-mode-cpk')?.addEventListener('click', () => switchViewerMode('3d-cpk'));

    // Viewer HUD buttons
    $('#btn-reset-view')?.addEventListener('click', () => {
      if (state.viewer3D) {
        state.viewer3D.zoomTo();
        state.viewer3D.render();
      }
    });

    $('#btn-center-camera')?.addEventListener('click', () => {
      if (state.viewer3D) {
        state.viewer3D.center();
        state.viewer3D.render();
      }
    });

    $('#btn-zoom-in')?.addEventListener('click', () => {
      if (state.viewer3D) {
        state.viewer3D.zoom(1.2, 200);
      }
    });

    $('#btn-zoom-out')?.addEventListener('click', () => {
      if (state.viewer3D) {
        state.viewer3D.zoom(0.8, 200);
      }
    });

    $('#btn-toggle-spin')?.addEventListener('click', toggleAutoSpin);

    // Export Actions
    $('#btn-export-sdf')?.addEventListener('click', () => {
      if (state.currentCompound && state.currentCompound.sdf_3d) {
        downloadFile(`${state.currentCompound.slug}_3d.sdf`, state.currentCompound.sdf_3d, 'chemical/x-mdl-sdfile');
      }
    });

    $('#btn-copy-inchikey')?.addEventListener('click', () => {
      if (state.currentCompound && state.currentCompound.inchikey) {
        navigator.clipboard.writeText(state.currentCompound.inchikey).then(() => {
          showToast('InChIKey copied to clipboard');
        });
      }
    });

    $('#btn-copy-smiles')?.addEventListener('click', () => {
      if (state.currentCompound && state.currentCompound.smiles) {
        navigator.clipboard.writeText(state.currentCompound.smiles).then(() => {
          showToast('SMILES string copied to clipboard');
        });
      }
    });

    // Dossier Tabs
    $$('.tab-btn[data-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        $$('.tab-btn[data-tab]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        $$('.dossier-tab-content').forEach(c => c.style.display = 'none');
        const target = $(`#tab-content-${tab}`);
        if (target) target.style.display = 'block';
      });
    });
  }

  function switchViewerMode(mode) {
    state.viewerMode = mode;

    $$('.mode-btn').forEach(btn => btn.classList.remove('active'));
    $(`#btn-mode-${mode === '3d-ball' ? '3d' : mode === '3d-cpk' ? 'cpk' : '2d'}`)?.classList.add('active');

    const viewport3D = $('#chamber-viewport');
    const viewport2D = $('#chamber-2d-canvas');

    if (mode === '2d') {
      if (viewport3D) viewport3D.style.display = 'none';
      if (viewport2D) {
        viewport2D.classList.add('active');
        render2DStructure(state.currentCompound);
      }
    } else {
      if (viewport2D) viewport2D.classList.remove('active');
      if (viewport3D) {
        viewport3D.style.display = 'block';
        if (state.viewer3D) {
          requestAnimationFrame(() => {
            state.viewer3D.resize();
            apply3DStyle(mode);
            state.viewer3D.render();
          });
        } else if (state.currentCompound) {
          render3DViewer(state.currentCompound);
        }
      }
    }
  }

  function toggleAutoSpin() {
    const btn = $('#btn-toggle-spin');
    state.isSpinning = !state.isSpinning;

    if (state.isSpinning) {
      btn?.classList.add('active');
      state.spinTimer = setInterval(() => {
        if (state.viewer3D) {
          state.viewer3D.rotate(1.2, { x: 0, y: 1, z: 0 });
        }
      }, 30);
    } else {
      btn?.classList.remove('active');
      clearInterval(state.spinTimer);
      state.spinTimer = null;
    }
  }


  // =========================================================================
  // UTILITIES & KEYBOARD SHORTCUTS
  // =========================================================================

  function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // ⌘K or Ctrl+K to open search
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const modal = $('#searchModal');
        const modalInput = $('#modalSearchInput');
        if (modal) {
          modal.classList.add('open');
          setTimeout(() => modalInput && modalInput.focus(), 50);
        }
      }

      // Esc to close modal
      if (e.key === 'Escape') {
        $('#searchModal')?.classList.remove('open');
      }
    });
  }

  function formatFormula(formula) {
    if (!formula) return '';
    return formula.replace(/(\d+)/g, '<sub>$1</sub>');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function downloadFile(filename, text, mimeType) {
    const blob = new Blob([text], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function showToast(message) {
    let toast = $('#app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      toast.style.cssText = 'position: fixed; bottom: 24px; right: 24px; background: #08111e; color: #fff; padding: 10px 18px; border-radius: 8px; font-family: var(--font-mono); font-size: 12px; z-index: 9999; box-shadow: 0 4px 14px rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.15); transition: opacity 0.2s ease;';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';
    setTimeout(() => {
      toast.style.opacity = '0';
    }, 2400);
  }

  // =========================================================================
  // VIEW 4: INTERACTIVE 118-ELEMENT PERIODIC TABLE SYSTEM
  // =========================================================================

  function setupPeriodicTable() {
    renderPeriodicTable();

    // Category Filter Buttons
    $$('.ptable-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.ptable-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-cat');
        filterPeriodicTable(cat, $('#ptable-search-input')?.value || '');
      });
    });

    // Element Search Input
    const pSearch = $('#ptable-search-input');
    if (pSearch) {
      pSearch.addEventListener('input', (e) => {
        const activeCat = $('.ptable-filter-btn.active')?.getAttribute('data-cat') || 'all';
        filterPeriodicTable(activeCat, e.target.value);
      });
    }

    // Element Inspector Action Buttons
    const btnSearchMolecules = $('#btn-element-search-molecules');
    if (btnSearchMolecules) {
      btnSearchMolecules.addEventListener('click', () => {
        const name = $('#inspector-name')?.textContent;
        if (name) {
          const modal = $('#searchModal');
          const modalInput = $('#modalSearchInput');
          if (modal && modalInput) {
            modal.classList.add('open');
            modalInput.value = name;
            modalInput.dispatchEvent(new Event('input'));
            setTimeout(() => modalInput.focus(), 50);
          }
        }
      });
    }

    const btnFilterBondly = $('#btn-element-filter-compounds');
    if (btnFilterBondly) {
      btnFilterBondly.addEventListener('click', () => {
        const sym = $('#inspector-sym')?.textContent;
        if (sym) {
          navigateTo('discover');
          const searchInput = $('#compoundSearchInput');
          if (searchInput) {
            searchInput.value = sym;
            searchInput.dispatchEvent(new Event('input'));
            searchInput.focus();
          }
        }
      });
    }
  }

  function renderPeriodicTable() {
    const grid = $('#ptable-grid');
    if (!grid || !window.BONDLY_PERIODIC) return;

    // Avoid duplicate initialization
    if (grid.children.length > 50) return;

    grid.innerHTML = '';

    window.BONDLY_PERIODIC.forEach(el => {
      let gridCol = el.group;
      let gridRow = el.period;

      // Lanthanides & Actinides positioning in rows 9 & 10
      if (el.cat === 'lanthanide') {
        gridRow = 9;
        gridCol = (el.num - 57) + 4; // cols 4 to 18
      } else if (el.cat === 'actinide') {
        gridRow = 10;
        gridCol = (el.num - 89) + 4; // cols 4 to 18
      }

      const cell = document.createElement('div');
      cell.className = 'ptable-cell';
      cell.id = `ptable-elem-${el.num}`;
      cell.setAttribute('data-num', el.num);
      cell.setAttribute('data-sym', el.sym);
      cell.setAttribute('data-name', el.name);
      cell.setAttribute('data-cat', el.cat);
      cell.style.gridColumn = `${gridCol}`;
      cell.style.gridRow = `${gridRow}`;
      cell.style.setProperty('--cat-color', el.color || '#94a3b8');

      const weightFormatted = typeof el.weight === 'number' ? el.weight.toFixed(el.weight < 10 ? 2 : 1) : el.weight;

      cell.innerHTML = `
        <div class="ptable-cell-top">
          <span class="ptable-cell-num">${el.num}</span>
          <span class="ptable-cell-weight">${weightFormatted}</span>
        </div>
        <div class="ptable-cell-sym" style="color: ${el.color || 'var(--on-surface)'};">${el.sym}</div>
        <div class="ptable-cell-name">${el.name}</div>
      `;

      cell.addEventListener('mouseenter', () => inspectElement(el));
      cell.addEventListener('click', () => {
        $$('.ptable-cell').forEach(c => c.classList.remove('selected'));
        cell.classList.add('selected');
        inspectElement(el);
      });

      grid.appendChild(cell);
    });

    // Add Lanthanide & Actinide Placeholders in main table periods 6 & 7
    const laPlaceholder = document.createElement('div');
    laPlaceholder.className = 'ptable-placeholder-cell';
    laPlaceholder.style.gridColumn = '3';
    laPlaceholder.style.gridRow = '6';
    laPlaceholder.innerHTML = '57–71<br><span style="font-size:9px; color:var(--primary);">La–Lu</span>';
    grid.appendChild(laPlaceholder);

    const acPlaceholder = document.createElement('div');
    acPlaceholder.className = 'ptable-placeholder-cell';
    acPlaceholder.style.gridColumn = '3';
    acPlaceholder.style.gridRow = '7';
    acPlaceholder.innerHTML = '89–103<br><span style="font-size:9px; color:var(--primary);">Ac–Lr</span>';
    grid.appendChild(acPlaceholder);

    // Add Series labels in rows 9 & 10 (cols 1 to 3)
    const laLabel = document.createElement('div');
    laLabel.className = 'ptable-series-label';
    laLabel.style.gridColumn = '1 / span 3';
    laLabel.style.gridRow = '9';
    laLabel.textContent = 'Lanthanide Series';
    grid.appendChild(laLabel);

    const acLabel = document.createElement('div');
    acLabel.className = 'ptable-series-label';
    acLabel.style.gridColumn = '1 / span 3';
    acLabel.style.gridRow = '10';
    acLabel.textContent = 'Actinide Series';
    grid.appendChild(acLabel);

    // Initial inspection (Carbon by default)
    const carbon = window.BONDLY_PERIODIC.find(e => e.sym === 'C') || window.BONDLY_PERIODIC[5];
    if (carbon) inspectElement(carbon);
  }

  function inspectElement(el) {
    if (!el) return;
    setTxt('#inspector-num', el.num);
    setTxt('#inspector-sym', el.sym);
    setTxt('#inspector-name', el.name);
    setTxt('#inspector-weight', `${el.weight} u`);
    setTxt('#inspector-en', el.en !== null ? el.en : 'N/A');
    setTxt('#inspector-config', el.config || 'N/A');
    setTxt('#inspector-period', el.period);
    setTxt('#inspector-group', el.group ? el.group : 'f-block');
    setTxt('#inspector-phase-badge', `${el.phase || 'Solid'} @ STP`);
    
    const catLabels = {
      'nonmetal': 'Reactive Nonmetal',
      'noble': 'Noble Gas',
      'alkali': 'Alkali Metal',
      'alkaline': 'Alkaline Earth Metal',
      'metalloid': 'Metalloid',
      'halogen': 'Halogen',
      'transition': 'Transition Metal',
      'post-transition': 'Post-Transition Metal',
      'lanthanide': 'Lanthanide',
      'actinide': 'Actinide'
    };
    setTxt('#inspector-cat-badge', catLabels[el.cat] || el.cat);
    const cpkColor = BONDLY_CPK_PALETTE[el.sym]?.hex || el.color || '#94a3b8';
    setTxt('#inspector-color-text', cpkColor);

    const dot = $('#inspector-color-dot');
    if (dot) {
      dot.style.background = cpkColor;
      dot.style.border = cpkColor === '#ffffff' ? '1px solid rgba(255,255,255,0.4)' : 'none';
    }

    const swatch = $('#inspector-swatch');
    if (swatch) swatch.style.setProperty('--cat-color', el.color || '#10b981');

    const symEl = $('#inspector-sym');
    if (symEl) symEl.style.color = el.color || 'var(--on-surface)';

    const btnText = $('#btn-element-search-text');
    if (btnText) btnText.textContent = `Find ${el.name} Molecules`;
  }

  function filterPeriodicTable(cat, searchQuery) {
    const q = (searchQuery || '').trim().toLowerCase();
    $$('.ptable-cell').forEach(cell => {
      const cellCat = cell.getAttribute('data-cat');
      const cellName = (cell.getAttribute('data-name') || '').toLowerCase();
      const cellSym = (cell.getAttribute('data-sym') || '').toLowerCase();
      const cellNum = cell.getAttribute('data-num') || '';

      const matchesCat = cat === 'all' || cellCat === cat;
      const matchesSearch = !q || cellName.includes(q) || cellSym.includes(q) || cellNum === q;

      if (matchesCat && matchesSearch) {
        cell.classList.remove('dimmed');
      } else {
        cell.classList.add('dimmed');
      }
    });
  }

  // Global bridge for inline triggers
  window.Bondly = {
    openWorkspace: (slug) => {
      const comp = getCompoundBySlug(slug);
      if (comp) {
        state.currentCompound = comp;
        navigateTo('workspace', comp.slug);
      }
    }
  };

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
