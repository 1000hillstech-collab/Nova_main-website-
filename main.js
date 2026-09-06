'use strict';

/* ═══════════════════════════════════════════════════════════════════════════
   THEME TOGGLE  —  dark / light; persists to localStorage as '1kh-theme'.
   Runs first so the button state is correct immediately after JS loads.
   (The anti-FOUC inline script in <head> already set the attribute before
   first paint — this just wires up the click handler and keeps them in sync.)
═══════════════════════════════════════════════════════════════════════════ */
(function themeToggle() {
  const html = document.documentElement;
  const btn  = document.getElementById('js-theme-toggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('1kh-theme', next);
  });
})();

/* ═══════════════════════════════════════════════════════════════════════════
   SITE COPY  —  mirrors site.ts
   Single source of truth for all text content and asset paths.
   Update here; the renderers below pick up the changes automatically.
═══════════════════════════════════════════════════════════════════════════ */
const SITE = {

  /* ── Expertise / Integrated Solutions ──────────────────────────────── */
  expertise: [
    {
      title: 'MEP Design & Supervision',
      desc:  'Specialized Mechanical, Electrical, and Plumbing engineering solutions for complex infrastructure.',
      video: '/videos/card-mep.mp4',
      bullets: [
        'HVAC Systems (Ventilation, VRV, AHU)',
        'Fire & Safety (Sprinklers, Hydrants, Alarms)',
        'Electrical Systems (LV, MDB/SMDB/FDB)',
        'Low-Current Systems (CCTV, BMS, Access Control)',
        'Plumbing & Solar Water Heaters',
      ],
    },
    {
      title: 'Construction Technology',
      desc:  'Integrating technology into physical infrastructure for smarter, more efficient facilities.',
      video: '/videos/card-construction.mp4',
      bullets: [
        'Smart Building Solutions',
        'Facilities Construction',
        'Roads and Infrastructure Works',
        'Green Building Consultancy',
      ],
    },
    {
      title: 'IT & Surveillance',
      desc:  'Enterprise-grade information technology and high-security surveillance systems.',
      video: '/videos/card-it.mp4',
      bullets: [
        'CCTV Systems',
        'Access Control',
        'Communication Infrastructure',
        'Cybersecurity Solutions',
      ],
    },
    {
      title: 'Energy & Sustainability',
      desc:  'Leading the transition to sustainable energy with specialized audit and design services.',
      video: '/videos/hero-energy.mp4',
      bullets: [
        'Energy Audit & Certification',
        'Renewable Energy Systems',
        'Water Management Solutions',
        'Energy Efficiency Reporting',
      ],
    },
    {
      title: 'Solar-Powered Irrigation & Farming',
      desc:  'Clean-energy agriculture—solar water pumping, drip irrigation, and smart farming for climate-resilient food production.',
      video: '/videos/hero-solar-watering.mp4',
      bullets: [
        'Solar Water Pumping Systems',
        'Drip & Sprinkler Irrigation',
        'Borehole & Surface Water Abstraction',
        'Agrivoltaics (Solar + Crops) Integration',
        'Remote Monitoring & Smart Scheduling',
      ],
    },
    {
      title: 'Fire & Life Safety',
      desc:  'An integrated approach to fire detection, suppression, and evacuation ensuring full emergency readiness.',
      video: '/videos/card-fire.mp4',
      bullets: [
        'Fire Detection & Alarm Systems',
        'Fire Suppression (FM200, CO2, Novec)',
        'Emergency Voice Evacuation',
        'Voice Alarm (VA) Systems',
        'Integrated Safety Response',
      ],
    },
    {
      title: 'Maintenance & Support',
      desc:  'Comprehensive support and preventive maintenance ensuring uninterrupted operations and maximum system longevity.',
      video: '/videos/card-maintenance.mp4',
      bullets: [
        'Preventive Maintenance Programs',
        '24/7 Technical Assistance',
        'System Health Monitoring',
        'Responsive Troubleshooting',
        'Tailored Service Agreements',
      ],
    },
  ],

  /* ── Key Projects / Portfolio ─────────────────────────────────────── */
  portfolio: [
    { cat: 'MEP Systems',               title: 'Rwanda Correctional Service',      loc: 'National Portfolio, Rwanda',      desc: 'Comprehensive engineering engagement involving the modernization of critical facility infrastructure.',                     img: '/img/prison.jpg' },
    { cat: 'IT & Fiber',                title: 'Rwanda National Police',           loc: 'Kigali, Rwanda',                  desc: 'Deployment of high-speed digital infrastructure to support national security operations.',                             img: '/img/police.jpeg' },
    { cat: 'Water & Infrastructure',    title: 'Borehole Drilling',                loc: 'Various Locations, Rwanda',       desc: 'Professional borehole drilling services providing sustainable water solutions for communities and commercial facilities.',  img: '/img/borehole.png' },
    { cat: 'Construction & Security',   title: 'Rwanda SACCO Network',             loc: 'National Coverage',               desc: 'A massive national rollout involving the construction and securing of community financial hubs.',                        img: '/img/container.png' },
    { cat: 'Industrial Electrical',     title: 'Gas Methane Rubavu (Aggreko)',     loc: 'Rubavu, Rwanda',                  desc: 'Technical maintenance and material supply for the Lake Kivu gas-to-power operations.',                                    img: '/img/gas-methane.png' },
    { cat: 'Material Supply',           title: 'Singita Hotel',                    loc: 'Volcanoes National Park, Rwanda', desc: 'Supplying the foundational materials for one of the world\'s most exclusive eco-luxury retreats.',                   img: '/img/singita.jpg' },
    { cat: 'Road Infrastructure',       title: 'Kigali–Gatuna Road',              loc: 'Northern Province, Rwanda',       desc: 'Participating in the development of a vital regional artery connecting Rwanda to the North.',                           img: '/img/kigali-gatuna.jpg' },
    { cat: 'Civil Works',               title: 'Musanze–Kinigi Road',             loc: 'Musanze, Rwanda',                 desc: 'Enhancing the primary tourism corridor to the Volcanoes National Park.',                                                img: '/img/road.jpg' },
    { cat: 'Solar & Renewable',         title: 'Jumeirah Beach Hotel',             loc: 'Dubai / Regional Partner',        desc: 'International collaboration focusing on cutting-edge renewable energy integration.',                                    img: '/img/jumeirah-beach.jpg' },
    { cat: 'Solar & Agriculture',       title: 'Solar-Powered Irrigation Scheme',  loc: 'Eastern Province, Rwanda',        desc: 'Off-grid solar pumping and drip irrigation enabling year-round, climate-resilient farming for agricultural cooperatives.', img: '/img/solar-irrigation.jpg' },
    { cat: 'Healthcare Infrastructure', title: 'Rubavu Health Centers',            loc: 'Rubavu District, Rwanda',         desc: 'Comprehensive supply and installation of medical equipment and infrastructure for health facilities.',                    img: '/img/health-center.png' },
    { cat: 'Education & IT',            title: 'School IT Infrastructure',         loc: 'Various Schools, Rwanda',         desc: 'Supply and installation of IT devices and digital infrastructure to enhance education technology in Rwandan schools.',   img: '/img/school.png' },
  ],

  /* ── Partners / Clients ───────────────────────────────────────────── */
  partners: [
    { name: 'Schneider Electric',               logo: '/img/partners/schneider-electric.png' },
    { name: 'Africa New Life Ministries',       logo: '/img/partners/africa-new-life.png' },
    { name: 'BBOXX',                            logo: '/img/partners/bboxx.png' },
    { name: 'Unilever',                         logo: '/img/partners/unilever.png' },
    { name: 'ILPD',                             logo: '/img/partners/ilpd.png' },
    { name: 'Rwanda Correctional Service',      logo: '/img/partners/rcs.png' },
    { name: 'Orascom Construction Industries',  logo: '/img/partners/orascom.png' },
    { name: 'One Acre Fund',                    logo: '/img/partners/one-acre-fund.png' },
    { name: 'Rwanda National Police',           logo: '/img/partners/rwanda-national-police.png' },
    { name: 'Liquid Telecom',                   logo: '/img/partners/liquid-telecom.png' },
    { name: 'NZ Engineering Services',          logo: null },
    { name: 'KZ Consultants Ltd',               logo: null },
    { name: "Ng'andu Consulting Ltd",           logo: null },
    { name: 'Solid Africa',                     logo: null },
    { name: 'Galaxy Hotel',                     logo: null },
    { name: 'West Africa Ltd',                  logo: null },
    { name: 'Mount Zion International Univ.',   logo: null },
    { name: 'Strawtec',                         logo: null },
    { name: 'GreenA Consultants',               logo: null },
    { name: 'Touch Africa',                     logo: null },
    { name: 'Gasabo 3D',                        logo: null },
    { name: 'ICON',                             logo: null },
    { name: 'RwandaMotor',                      logo: null },
    { name: 'RWANCO Engineering Services Ltd',  logo: null },
    { name: 'Babylon',                          logo: null },
    { name: 'Century Park Kigali',              logo: null },
    { name: 'Hycogec Consultant Ltd',           logo: null },
    { name: 'Wellspring Academy',               logo: null },
    { name: 'Phoenix Plaza',                    logo: null },
    { name: 'Sawa Citi',                        logo: null },
    { name: 'Solace Ministries',                logo: null },
  ],

  /* ── Journey / Milestones ─────────────────────────────────────────── */
  journey: [
    { year: '2006', text: 'Foundation and early entry into technical consulting.' },
    { year: '2016', text: 'Major rebranding and pivot to integrated MEP and IT surveillance services.' },
    { year: '2018', text: 'Secured landmark projects in healthcare and high-rise commercial sectors.' },
    { year: '2020', text: 'Strategic partnerships with global leaders and focus on sustainable infrastructure.' },
    { year: '2024', text: 'Full-scale operational expansion into Uganda, DRC, Kenya, and Tanzania.' },
    { year: '2025', text: 'Consolidating position as the premier East African engineering and technology partner.' },
  ],
};

/* ═══════════════════════════════════════════════════════════════════════════
   INLINE SVG SNIPPETS  (reused across all placeholder divs)
═══════════════════════════════════════════════════════════════════════════ */
const SVG = {
  video: `<svg class="ph__icon" width="36" height="36" fill="none" viewBox="0 0 24 24"
    stroke="currentColor" stroke-width="1.25" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72
         M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9
         A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z"/>
  </svg>`,

  image: `<svg class="ph__icon" width="32" height="32" fill="none" viewBox="0 0 24 24"
    stroke="#f69110" stroke-width="1.25" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159
         m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909
         m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75
         A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z
         m10.5-11.25h.008v.008h-.008V8.25z
         m.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
  </svg>`,

  pin: `<svg width="12" height="12" fill="none" viewBox="0 0 24 24"
    stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
  </svg>`,
};

/* ═══════════════════════════════════════════════════════════════════════════
   RENDER — Integrated Solutions / Expertise cards
═══════════════════════════════════════════════════════════════════════════ */
(function renderSolutions() {
  const grid = document.getElementById('js-solutions');
  if (!grid) return;

  grid.innerHTML = SITE.expertise.map(area => `
    <div class="sol-card reveal">
      <div class="sol-card__media ph">
        ${SVG.video}
        <span class="ph__type">Video</span>
        <span class="ph__path">${area.video}</span>
      </div>
      <h3 class="sol-card__title">${area.title}</h3>
      <p class="sol-card__desc">${area.desc}</p>
      <ul class="sol-card__bullets" role="list">
        ${area.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </div>
  `).join('');
})();

/* ═══════════════════════════════════════════════════════════════════════════
   RENDER — Our Journey timeline items
═══════════════════════════════════════════════════════════════════════════ */
(function renderJourney() {
  const line = document.getElementById('js-journey');
  if (!line) return;

  line.innerHTML = SITE.journey.map(item => `
    <div class="journey__item reveal">
      <div class="journey__year">${item.year}</div>
      <div class="journey__text">${item.text}</div>
    </div>
  `).join('');
})();

/* ═══════════════════════════════════════════════════════════════════════════
   RENDER — Key Projects cards
═══════════════════════════════════════════════════════════════════════════ */
(function renderProjects() {
  const grid = document.getElementById('js-projects');
  if (!grid) return;

  grid.innerHTML = SITE.portfolio.map(p => `
    <article class="proj-card reveal">
      <div class="proj-card__img ph" style="min-height:170px;">
        ${SVG.image}
        <span class="ph__type">Image</span>
        <span class="ph__path">${p.img}</span>
      </div>
      <div class="proj-card__body">
        <div class="proj-card__cat">${p.cat}</div>
        <div class="proj-card__title">${p.title}</div>
        <div class="proj-card__loc">${SVG.pin} ${p.loc}</div>
        <p class="proj-card__desc">${p.desc}</p>
      </div>
    </article>
  `).join('');
})();

/* ═══════════════════════════════════════════════════════════════════════════
   RENDER — Clients & Partners logo grid
═══════════════════════════════════════════════════════════════════════════ */
(function renderPartners() {
  const grid = document.getElementById('js-partners');
  if (!grid) return;

  grid.innerHTML = SITE.partners.map(p => {
    if (p.logo) {
      // Escape name for use in onerror fallback string
      const safeName = p.name.replace(/'/g, "\\'");
      return `
        <div class="partner-item">
          <img
            src="${p.logo}"
            alt="${p.name} logo"
            loading="lazy"
            onerror="this.outerHTML='<span class=\\'partner-item__name\\'>${safeName}</span>'"
          />
        </div>`;
    }
    return `<div class="partner-item"><span class="partner-item__name">${p.name}</span></div>`;
  }).join('');
})();

/* ═══════════════════════════════════════════════════════════════════════════
   SCROLL PROGRESS BAR  (mirrors ScrollProgressBar.tsx exactly)
   — Uses requestAnimationFrame; respects prefers-reduced-motion.
═══════════════════════════════════════════════════════════════════════════ */
(function scrollProgress() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const bar = document.getElementById('js-progress');
  if (!bar) return;

  function update() {
    requestAnimationFrame(() => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct  = docH > 0 ? Math.min(window.scrollY / docH, 1) : 0;
      bar.style.transform = `scaleX(${pct})`;
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update(); // initial call
})();

/* ═══════════════════════════════════════════════════════════════════════════
   NAV — become opaque on scroll
═══════════════════════════════════════════════════════════════════════════ */
(function navScroll() {
  const nav = document.getElementById('js-nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 60);
  }, { passive: true });
})();

/* ═══════════════════════════════════════════════════════════════════════════
   MOBILE NAV — hamburger → full-screen drawer
═══════════════════════════════════════════════════════════════════════════ */
(function mobileNav() {
  const burger = document.getElementById('js-burger');
  const drawer = document.getElementById('js-drawer');
  if (!burger || !drawer) return;

  function open() {
    drawer.classList.add('is-open');
    burger.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    drawer.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', () => {
    drawer.classList.contains('is-open') ? close() : open();
  });

  // Any link inside the drawer closes it
  drawer.querySelectorAll('[data-close-drawer]').forEach(el => {
    el.addEventListener('click', close);
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) close();
  });
})();

/* ═══════════════════════════════════════════════════════════════════════════
   SCROLL REVEAL  (IntersectionObserver on every .reveal element)
   — Fires once per element; re-runs after JS renders dynamic cards.
═══════════════════════════════════════════════════════════════════════════ */
(function scrollReveal() {
  // Skip animation for users who prefer reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target); // fire once only
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' });

  function observeAll() {
    document.querySelectorAll('.reveal:not(.in-view)').forEach(el => io.observe(el));
  }

  observeAll(); // catch static elements immediately
  setTimeout(observeAll, 80); // catch JS-rendered cards after render
})();