import { useEffect, useRef, useState } from "react";

/* ---------- Data (mirrors resume) ---------- */
const LINKS = {
  github: "https://github.com/shivam-naithani",
  linkedin: "https://linkedin.com/in/shivam-naithani",
  email: "mailto:shivamnaithani39@gmail.com",
};
const NAV = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];
const ROLES = ["Full Stack Developer", "Java & Spring Boot", "React & Laravel", "REST API Design"];

const STATS = [
  { v: "12", l: "REST endpoints shipped in internship" },
  { v: "7", l: "user roles secured with policies" },
  { v: "80+", l: "member team led as VP" },
  { v: "8.84", l: "CGPA · B.Tech CST" },
];

const SKILLS = [
  { t: "Languages", i: ["Java", "JavaScript", "TypeScript", "PHP", "SQL", "HTML5", "CSS3"] },
  { t: "Java Backend", i: ["Spring Boot", "Hibernate", "REST APIs", "JWT", "JUnit", "Mockito"] },
  { t: "Frontend", i: ["React.js", "Inertia.js", "Tailwind CSS", "Recharts", "Vite"] },
  { t: "PHP Backend", i: ["Laravel", "Policies & Middleware", "Role-Based Access Control"] },
  { t: "Databases", i: ["PostgreSQL", "MySQL", "Supabase", "SQLite"] },
  { t: "Tools & Core", i: ["Git", "GitHub", "Docker", "WAMP", "OOP", "DSA in Java"] },
];

const EXPERIENCE = [
  {
    role: "Full Stack Development Intern", org: "Spiders Tech Services", period: "Feb 2026 – May 2026",
    bullets: [
      "Built responsive React.js interfaces — including a TypeScript front end for one client project — and backend modules in PHP/Laravel.",
      "Designed 12 RESTful API endpoints with role-scoped query logic, enforced by Policy-based authorization (9 permission levels) and custom role middleware across 7 user roles.",
      "Shipped server-side search, filtering and pagination across core modules, and refactored MySQL queries to improve data retrieval efficiency.",
      "Resolved defects through systematic debugging while collaborating with the team on feature delivery.",
    ],
  },
  {
    role: "Vice President", org: "Enactus ADGIPS", period: "Jun 2025 – Jun 2026",
    bullets: [
      "Directed project execution, team coordination and event management for an 80+ member student society chapter.",
      "Executed 3 society projects, coordinating teams across cultural and technical events.",
    ],
  },
  {
    role: "Co-Founder", org: "The Doleo Store · E-commerce / Dropshipping", period: "2024 – 2025",
    bullets: ["Founded and operated an e-commerce venture: product selection, digital marketing and customer operations."],
  },
];

const PROJECTS = [
  {
    featured: true, title: "CRM System", sub: "Role-based ticketing & analytics platform", year: "2025", github: "https://github.com/shivam-naithani/crm-system",
    bullets: [
      "Architected with Laravel 12 + Inertia.js (React 18 SPA) and no separate REST layer — removing token-auth and CORS overhead.",
      "11 RESTful endpoints for full CRUD across tickets, comments and roles, secured by Policy-based authorization (7 permission methods) plus role middleware across 5 user roles.",
      "Relational schema across 6 tables with SLA-based due-date automation and a JSON audit trail powering a ticket history timeline.",
      "Server-side search, filtering and pagination, plus a role-aware Recharts dashboard with clickable, pre-filtered analytics.",
    ],
    tech: ["Laravel 12", "React 18", "Inertia.js", "PostgreSQL", "MySQL", "SQLite", "Tailwind CSS", "Recharts"],
  },
  {
    tag: "In Development", title: "Resume Analyzer", sub: "ATS-style resume ↔ job description matching", year: "2026", github: "https://github.com/shivam-naithani/resume-analyzer",
    bullets: [
      "Scores resume-to-JD compatibility using TF-IDF vectorization and cosine similarity; core scoring engine written in Java.",
      "React.js front end, Spring Boot REST API with JWT auth, and a MySQL layer via Hibernate, covered by JUnit/Mockito tests.",
    ],
    tech: ["React.js", "Java", "Spring Boot", "Hibernate", "MySQL", "JWT"],
  },
  {
    title: "Developer Portfolio", sub: "This site", year: "2024 – 2025", github: "https://github.com/shivam-naithani/shivam-naithani-portfolio",
    bullets: ["Responsive React + Vite portfolio, deployed on Vercel via GitHub with a dark navy/cyan theme."],
    tech: ["React.js", "Vite", "CSS"],
  },
];

const FACTS = [
  ["Degree", "B.Tech – CS & Technology"], ["CGPA", "8.84 / 10"], ["Batch", "2023 – 2027"],
  ["Focus", "Java · React · Laravel"], ["Status", "Open to opportunities"],
];

/* ---------- Icons ---------- */
const Svg = ({ children, size = 20, fill = "none" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={fill === "none" ? "currentColor" : "none"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);
const GithubIcon = (p) => <Svg fill="currentColor" {...p}><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></Svg>;
const LinkedinIcon = (p) => <Svg fill="currentColor" {...p}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" /></Svg>;
const MailIcon = (p) => <Svg {...p}><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" /><polyline points="22,6 12,13 2,6" /></Svg>;
const MenuIcon = () => <Svg size={24}><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></Svg>;
const CloseIcon = () => <Svg size={24}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></Svg>;

/* ---------- Helpers ---------- */
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}s` }}>{children}</Tag>;
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="block">
      <div className="container">
        <Reveal><p className="eyebrow">{eyebrow}</p><h2 className="title">{title}</h2></Reveal>
        {children}
      </div>
    </section>
  );
}

/* ---------- Sections ---------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((n) => { const el = document.getElementById(n.toLowerCase()); el && io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`} aria-label="Primary">
      <div className="container nav-row">
        <a href="#top" className="logo">Shivam <span>Naithani</span></a>
        <div className="links">
          {NAV.slice(0, -1).map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className={active === n.toLowerCase() ? "active" : ""}>{n}</a>
          ))}
          <a href="#contact" className="btn btn-primary">Contact</a>
        </div>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <div className="mobile-menu">
        {NAV.map((n) => <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}>{n}</a>)}
      </div>
    </nav>
  );
}

function Hero() {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let r = 0, c = 0, del = false, t;
    const tick = () => {
      const role = ROLES[r];
      c += del ? -1 : 1;
      setTyped(role.slice(0, c));
      let wait = del ? 45 : 85;
      if (!del && c === role.length) { del = true; wait = 1700; }
      else if (del && c === 0) { del = false; r = (r + 1) % ROLES.length; wait = 350; }
      t = setTimeout(tick, wait);
    };
    t = setTimeout(tick, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <header id="top" className="hero">
      <div className="container">
        <span className="badge"><i className="dot" /> Open to internships & full-time roles</span>
        <h1>Shivam <span className="grad">Naithani</span></h1>
        <div className="typed" aria-label="Full Stack Developer">{typed}<span className="caret">|</span></div>
        <p className="lead">
          Full-stack developer working across Java/Spring Boot, React and Laravel — building secure,
          role-based applications with clean REST APIs and well-modelled relational data. Final-year CS student at ADGIPS, New Delhi.
        </p>
        <div className="cta">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-ghost">Contact Me</a>
        </div>
        <div className="socials">
          <a href={LINKS.github} aria-label="GitHub" target="_blank" rel="noreferrer"><GithubIcon /></a>
          <a href={LINKS.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><LinkedinIcon /></a>
          <a href={LINKS.email} aria-label="Email"><MailIcon /></a>
        </div>
        <div className="stats">
          {STATS.map((s) => <div className="stat" key={s.l}><b className="grad">{s.v}</b><span>{s.l}</span></div>)}
        </div>
      </div>
    </header>
  );
}

const About = () => (
  <Section id="about" eyebrow="01 / About" title="Engineering with a leadership streak">
    <div className="about">
      <Reveal>
        <p>I'm a software developer with hands-on full-stack experience across <b>Java/Spring Boot, React.js, Laravel/PHP</b> and <b>PostgreSQL/MySQL</b>, built through an internship and independently engineered projects — a role-based CRM platform and an ATS-style resume matching tool.</p>
        <p>I'm comfortable across the stack: REST API design, JWT-secured backend services, relational modelling with Hibernate, and responsive front-end work — backed by a working foundation in data structures, algorithms and object-oriented design.</p>
        <p>Beyond code, I served as <b>Vice President of Enactus ADGIPS</b>, directing an 80+ member team through project execution and events.</p>
      </Reveal>
      <Reveal delay={0.1} className="facts">
        {FACTS.map(([k, v]) => <div className="fact" key={k}><span>{k}</span><b>{v}</b></div>)}
      </Reveal>
    </div>
  </Section>
);

const Skills = () => (
  <Section id="skills" eyebrow="02 / Skills" title="Tools I build with">
    <div className="skills">
      {SKILLS.map((g, i) => (
        <Reveal key={g.t} delay={i * 0.06} className="card">
          <h3>{g.t}</h3>
          <div className="chips">{g.i.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
        </Reveal>
      ))}
    </div>
  </Section>
);

const Experience = () => (
  <Section id="experience" eyebrow="03 / Experience" title="Where I've worked & led">
    <div className="timeline">
      {EXPERIENCE.map((e, i) => (
        <Reveal key={e.role} delay={i * 0.08} className="tl-item card">
          <div className="tl-head">
            <div><h3>{e.role}</h3><p>{e.org}</p></div>
            <span className="period">{e.period}</span>
          </div>
          <ul className="tick">{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        </Reveal>
      ))}
    </div>
  </Section>
);

const Projects = () => (
  <Section id="projects" eyebrow="04 / Projects" title="Things I've built">
    <div className="projects">
      {PROJECTS.map((p, i) => (
        <Reveal key={p.title} delay={i * 0.08} className={`card project ${p.featured ? "featured" : ""}`}>
          <div>
            {(p.featured || p.tag) && <span className={`tag ${p.tag ? "wip" : ""}`}>{p.featured ? "★ Featured" : p.tag}</span>}
            <h3>{p.title}</h3>
            <p className="sub">{p.sub} · {p.year}</p>
          </div>
          <ul className="tick">{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          <div className="tech">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
          {p.github && <div className="links-row"><a href={p.github} target="_blank" rel="noreferrer"><GithubIcon size={16} /> GitHub</a></div>}
        </Reveal>
      ))}
    </div>
  </Section>
);

const Education = () => (
  <Section id="education" eyebrow="05 / Education" title="Education & achievements">
    <div className="edu">
      <Reveal className="card">
        <p className="eyebrow-sm">B.Tech · 2023 – 2027</p>
        <h3>Computer Science & Technology</h3>
        <p>Dr. Akhilesh Das Gupta Institute of Professional Studies, New Delhi</p>
        <span className="pill">CGPA 8.84 / 10</span>
      </Reveal>
      <Reveal delay={0.08} className="card">
        <p className="eyebrow-sm">Achievements</p>
        <ul className="tick">
          <li>1st Place — Project-Based Documentary Competition</li>
          <li>Represented college at multiple hackathons and technical events</li>
        </ul>
      </Reveal>
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" eyebrow="06 / Contact" title="Let's build something together">
    <Reveal>
      <p style={{ color: "var(--muted)", maxWidth: 620 }}>I'm looking for opportunities where I can contribute across the stack and keep growing as an engineer. The best way to reach me is email.</p>
      <div className="contact-grid">
        <a className="contact-card" href={LINKS.email}><MailIcon size={22} /><div><small>Email</small><span>shivamnaithani39@gmail.com</span></div></a>
        <a className="contact-card" href={LINKS.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={22} /><div><small>LinkedIn</small><span>in/shivam-naithani</span></div></a>
        <a className="contact-card" href={LINKS.github} target="_blank" rel="noreferrer"><GithubIcon size={22} /><div><small>GitHub</small><span>shivam-naithani</span></div></a>
      </div>
    </Reveal>
  </Section>
);

export default function App() {
  return (
    <>
      <div className="bg-glow" />
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Experience /><Projects /><Education /><Contact />
      </main>
      <footer>Designed & built by Shivam Naithani · {new Date().getFullYear()}</footer>
    </>
  );
}
