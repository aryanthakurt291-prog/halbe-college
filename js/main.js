/* ===== Halbe College — Shared layout + interactions =====
   The header and footer are defined once here and placed on every page.
   Edit the contact details in the COLLEGE object below. */

const COLLEGE = {
  name: "Laxmibai Sitaram Halbe College",
  full: "Laxmibai Sitaram Halbe College of Arts, Commerce & Science, Dodamarg",
  sanstha: "Navnirman Shikshan Sanstha",
  address: "Post Kasai, Tal. Dodamarg, Dist. Sindhudurg, Maharashtra – 416 512",
  phone: "+91 00000 00000",          // TODO: replace with the office number
  email: "nss_dodamarg@rediffmail.com" // TODO: replace with the office email if different
};

const NAV = [
  { label: "Home", href: "index.html" },
  { label: "About", href: "about.html", sub: [
    ["Navnirman Shikshan Sanstha", "about.html#sanstha"],
    ["Vision & Mission", "about.html#mission"],
    ["Board of Directors", "about.html#directors"],
    ["Chairman's Desk", "about.html#chairman"],
    ["Principal's Desk", "about.html#principal"],
    ["About College", "about.html#college"] ] },
  { label: "Academics", href: "academics.html", sub: [
    ["Bachelor of Arts (B.A.)", "academics.html#ba"],
    ["Bachelor of Commerce (B.Com.)", "academics.html#bcom"],
    ["B.Sc. Hospitality Studies", "academics.html#bsc"],
    ["Teaching Staff", "academics.html#faculty"],
    ["Administrative Staff", "academics.html#admin-staff"],
    ["Library", "academics.html#library"] ] },
  { label: "Admissions", href: "admissions.html", sub: [
    ["Admission 2026-27", "admissions.html#admission"],
    ["Eligibility", "admissions.html#eligibility"],
    ["Fee Structure", "admissions.html#fees"],
    ["Scholarships", "admissions.html#scholarship"],
    ["Examinations", "admissions.html#exams"],
    ["Downloads", "admissions.html#downloads"] ] },
  { label: "Student Life", href: "campus.html", sub: [
    ["N.S.S.", "campus.html#nss"],
    ["N.C.C.", "campus.html#ncc"],
    ["Cultural", "campus.html#cultural"],
    ["Sports", "campus.html#sports"],
    ["DLLE", "campus.html#dlle"],
    ["Research", "campus.html#research"],
    ["Gallery", "campus.html#gallery"] ] },
  { label: "IQAC", href: "iqac.html", sub: [
    ["About IQAC", "iqac.html#about"],
    ["NAAC & SSR", "iqac.html#naac"],
    ["AQAR", "iqac.html#aqar"],
    ["Certificates", "iqac.html#certificates"],
    ["Committees", "iqac.html#committees"] ] },
  { label: "Contact", href: "contact.html" }
];

function renderHeader() {
  const page = location.pathname.split("/").pop() || "index.html";
  const items = NAV.map(n => {
    const active = n.href === page ? " active" : "";
    const sub = n.sub
      ? `<ul class="dropdown">${n.sub.map(([t, h]) => `<li><a href="${h}">${t}</a></li>`).join("")}</ul>` : "";
    return `<li class="${n.sub ? "has-sub" : ""}"><a class="${active}" href="${n.href}">${n.label}</a>${sub}</li>`;
  }).join("");

  return `
  <div class="topbar"><div class="container">
    <div class="badge-line">UGC 2(f) &amp; 12(B) Recognised · NAAC Accredited · Affiliated to University of Mumbai</div>
    <div class="topbar-info">
      <a href="tel:${COLLEGE.phone.replace(/\s/g, "")}">📞 ${COLLEGE.phone}</a>
      <a href="mailto:${COLLEGE.email}">✉️ ${COLLEGE.email}</a>
    </div>
  </div></div>
  <header class="header"><div class="container">
    <a href="index.html" class="brand">
      <div class="brand-logo">H</div>
      <div class="brand-text"><strong>${COLLEGE.name}</strong><small>of Arts, Commerce &amp; Science, Dodamarg</small></div>
    </a>
    <nav class="nav" id="nav"><ul>${items}</ul></nav>
    <button class="menu-toggle" id="menuToggle" aria-label="Open menu"><span></span><span></span><span></span></button>
  </div></header>`;
}

function renderFooter() {
  return `
  <footer class="footer"><div class="container">
    <div class="footer-grid">
      <div>
        <a href="index.html" class="brand"><div class="brand-logo">H</div>
          <div class="brand-text"><strong>${COLLEGE.name}</strong></div></a>
        <p>Run by ${COLLEGE.sanstha}. Quality higher education for rural Konkan since 2001.</p>
        <div class="accredit"><span>NAAC</span><span>UGC 2(f) &amp; 12(B)</span><span>ISO</span><span>AISHE</span></div>
      </div>
      <div><h4>Quick Links</h4><ul>
        <li><a href="about.html">About College</a></li>
        <li><a href="academics.html">Programmes</a></li>
        <li><a href="admissions.html">Admissions</a></li>
        <li><a href="iqac.html">IQAC</a></li>
        <li><a href="campus.html#gallery">Gallery</a></li>
      </ul></div>
      <div><h4>Students</h4><ul>
        <li><a href="admissions.html#downloads">Prospectus</a></li>
        <li><a href="admissions.html#fees">Fee Structure</a></li>
        <li><a href="admissions.html#scholarship">Scholarships</a></li>
        <li><a href="admissions.html#exams">Examinations</a></li>
        <li><a href="contact.html#feedback">Feedback</a></li>
      </ul></div>
      <div><h4>Contact Us</h4><ul class="footer-contact">
        <li>📍 <span>${COLLEGE.address}</span></li>
        <li>📞 <a href="tel:${COLLEGE.phone.replace(/\s/g, "")}">${COLLEGE.phone}</a></li>
        <li>✉️ <a href="mailto:${COLLEGE.email}">${COLLEGE.email}</a></li>
      </ul></div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} ${COLLEGE.full}. All rights reserved.</span>
      <span>Affiliated to University of Mumbai</span>
    </div>
  </div></footer>
  <button class="back-top" id="backTop" aria-label="Back to top">↑</button>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.outerHTML = renderHeader();
  if (f) f.outerHTML = renderFooter();

  /* Mobile menu */
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("menuToggle");
  toggle?.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.classList.toggle("open");
  });
  document.querySelectorAll(".nav .has-sub > a").forEach(a => {
    a.addEventListener("click", e => {
      if (window.innerWidth <= 1100) {
        const li = a.parentElement;
        if (!li.classList.contains("open")) { e.preventDefault(); li.classList.add("open"); }
      }
    });
  });
  document.querySelectorAll(".dropdown a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open"); toggle.classList.remove("open");
  }));

  /* Hero slider */
  const slides = document.querySelectorAll(".slide");
  if (slides.length) {
    const dotsWrap = document.querySelector(".hero-dots");
    let i = 0, timer;
    slides.forEach((_, n) => {
      const b = document.createElement("button");
      b.setAttribute("aria-label", "Slide " + (n + 1));
      b.addEventListener("click", () => go(n));
      dotsWrap.appendChild(b);
    });
    const dots = dotsWrap.querySelectorAll("button");
    function go(n) {
      slides[i].classList.remove("active"); dots[i].classList.remove("active");
      i = (n + slides.length) % slides.length;
      slides[i].classList.add("active"); dots[i].classList.add("active");
      clearInterval(timer); timer = setInterval(() => go(i + 1), 6000);
    }
    document.querySelector(".hero-arrow.prev")?.addEventListener("click", () => go(i - 1));
    document.querySelector(".hero-arrow.next")?.addEventListener("click", () => go(i + 1));
    go(0);
  }

  /* Counters */
  const counters = document.querySelectorAll("[data-count]");
  const countObs = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count, suffix = el.dataset.suffix || "";
    let cur = 0; const step = Math.max(1, Math.ceil(end / 60));
    const t = setInterval(() => {
      cur = Math.min(end, cur + step); el.textContent = cur + suffix;
      if (cur >= end) clearInterval(t);
    }, 25);
    countObs.unobserve(el);
  }), { threshold: .5 });
  counters.forEach(c => countObs.observe(c));

  /* Reveal on scroll */
  const revObs = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); revObs.unobserve(e.target); }
  }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => revObs.observe(el));

  /* Back to top */
  const bt = document.getElementById("backTop");
  window.addEventListener("scroll", () => bt?.classList.toggle("show", scrollY > 500));
  bt?.addEventListener("click", () => scrollTo({ top: 0 }));

  /* Forms (demo – shows a confirmation; connect to a backend or form service to receive submissions) */
  document.querySelectorAll("form[data-demo]").forEach(form => form.addEventListener("submit", e => {
    e.preventDefault();
    const msg = form.querySelector(".form-msg");
    msg.style.display = "block";
    form.reset();
  }));
});
