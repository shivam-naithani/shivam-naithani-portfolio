import { useEffect, useRef, useState } from "react";

/* Utility: intersection observer hook */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* SVG / inline icons */
const IconGithub = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const IconLinkedIn = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const IconMail = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconExternal = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const IconStar = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const IconMenu = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const IconClose = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* DATA */
const NAV_LINKS = ["About", "Skills", "Projects", "Education", "Experience", "Contact"];

const SKILLS = [
  { category: "Languages",  color: "#06b6d4", items: ["JavaScript", "PHP", "HTML5", "CSS3"] },
  { category: "Frameworks", color: "#818cf8", items: ["React.js", "Laravel", "Tailwind CSS"] },
  { category: "Database",   color: "#f59e0b", items: ["MySQL"] },
  { category: "Tools & Env",color: "#34d399", items: ["Git", "GitHub", "WAMP Server", "Vite"] },
];

const PROJECTS = [
  {
    star: true,
    title: "CRM System",
    subtitle: "Full-Stack Customer Relationship Management",
    description:
      "Built this to solve a real problem: most simple CRM tutorials skip auth entirely. I wanted to actually implement role-based access — where an admin, manager, and agent each see a different version of the same app. Laravel handled the backend logic and API routes, React consumed them, and getting those permission layers to stay in sync across both sides was the hardest part to get right.",
    tech: ["React.js", "PHP", "Laravel", "MySQL", "REST APIs", "HTML", "CSS"],
    github: "https://github.com/shivam-naithani",
    demo: null,
  },
  {
    star: false,
    title: "Personal Portfolio Website",
    subtitle: "Responsive Developer Portfolio",
    description:
      "The site you're looking at right now. Built in React with no UI library — every component written from scratch. Wanted to practice structuring a real multi-section SPA without reaching for a component library, and to have something I could actually put on my resume.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/shivam-naithani",
    demo: null,
  },
];

/* COMPONENTS */

/* Navbar */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "background 0.4s, box-shadow 0.4s",
      background: scrolled ? "rgba(3,7,18,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      boxShadow: scrolled ? "0 1px 0 rgba(6,182,212,0.15)" : "none",
      padding: "0 2rem",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        {/* Logo */}
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: "#06b6d4", letterSpacing: "-0.5px" }}>
          SN<span style={{ color: "#fff" }}>.</span>
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="nav-desktop">
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              style={{ background: "none", border: "none", color: "#94a3b8", fontSize: 14, cursor: "pointer", fontFamily: "inherit", letterSpacing: "0.05em", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#06b6d4"}
              onMouseLeave={e => e.target.style.color = "#94a3b8"}>
              {link}
            </button>
          ))}
          <button onClick={() => scrollTo("Contact")} style={{
            background: "transparent", border: "1px solid #06b6d4", color: "#06b6d4",
            padding: "6px 18px", borderRadius: 6, fontSize: 14, cursor: "pointer", fontFamily: "inherit",
            transition: "background 0.2s, color 0.2s",
          }}
            onMouseEnter={e => { e.target.style.background = "#06b6d4"; e.target.style.color = "#030712"; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#06b6d4"; }}>
            Hire Me
          </button>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="nav-burger"
          style={{ background: "none", border: "none", color: "#06b6d4", cursor: "pointer", display: "none" }}>
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          background: "rgba(3,7,18,0.97)", padding: "1rem 2rem 1.5rem",
          display: "flex", flexDirection: "column", gap: "1rem",
        }}>
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              style={{ background: "none", border: "none", color: "#94a3b8", fontSize: 16, cursor: "pointer", fontFamily: "inherit", textAlign: "left" }}>
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

/* Section wrapper with reveal */
function Section({ id, children, style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <section id={id} ref={ref} style={{
      padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto",
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
      ...style
    }}>
      {children}
    </section>
  );
}

/* Section heading */
function SectionHeading({ number, title }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <p style={{ color: "#06b6d4", fontFamily: "'Space Mono', monospace", fontSize: 13, marginBottom: 6, letterSpacing: "0.1em" }}>
        {number}
      </p>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#e2e8f0", margin: 0, letterSpacing: "-0.02em" }}>
        {title}
      </h2>
      <div style={{ width: 48, height: 3, background: "linear-gradient(90deg, #06b6d4, transparent)", marginTop: 12, borderRadius: 2 }} />
    </div>
  );
}

/* HERO */
function Hero() {
  const [typed, setTyped] = useState("");
  const roles = ["Full Stack Developer", "Backend Engineer", "Frontend Builder", "AI/ML Enthusiast"];
  const roleIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const tick = () => {
      const role = roles[roleIdx.current];
      if (!deleting.current) {
        charIdx.current++;
        setTyped(role.slice(0, charIdx.current));
        if (charIdx.current === role.length) { deleting.current = true; return setTimeout(tick, 1800); }
      } else {
        charIdx.current--;
        setTyped(role.slice(0, charIdx.current));
        if (charIdx.current === 0) { deleting.current = false; roleIdx.current = (roleIdx.current + 1) % roles.length; }
      }
      setTimeout(tick, deleting.current ? 60 : 90);
    };
    const t = setTimeout(tick, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "0 2rem", maxWidth: 1100, margin: "0 auto", position: "relative",
    }}>
      {/* Grid background pattern */}
      <div style={{
        position: "fixed", inset: 0, zIndex: -1,
        backgroundImage: `
          linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />
      {/* Radial glow */}
      <div style={{
        position: "fixed", top: "-20%", left: "-10%", width: "60vw", height: "60vh",
        background: "radial-gradient(ellipse, rgba(6,182,212,0.08) 0%, transparent 70%)",
        zIndex: -1, pointerEvents: "none",
      }} />

      <div style={{ paddingTop: "5rem" }}>
        <p style={{ color: "#06b6d4", fontFamily: "'Space Mono', monospace", fontSize: 14, marginBottom: "1.5rem", letterSpacing: "0.1em" }}>
          👋 Hello, I'm
        </p>
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800,
          fontSize: "clamp(2.8rem, 8vw, 5.5rem)", color: "#f1f5f9",
          margin: 0, lineHeight: 1.05, letterSpacing: "-0.03em",
        }}>
          Shivam<br />
          <span style={{ color: "#06b6d4" }}>Naithani</span>
        </h1>

        <div style={{ margin: "1.5rem 0", height: 48, display: "flex", alignItems: "center" }}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "clamp(1.1rem, 3vw, 1.5rem)", color: "#94a3b8" }}>
            {typed}
            <span style={{ color: "#06b6d4", animation: "blink 1s step-end infinite" }}>|</span>
          </span>
        </div>

        <p style={{ color: "#64748b", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", maxWidth: 520, lineHeight: 1.7, margin: "0 0 2.5rem" }}>
          I got into coding because I wanted to build things I could actually show people.
          Since then I've shipped a full-stack CRM, completed a dev internship, and picked up
          React + Laravel as my main stack. Currently in 3rd year CST at ADGIPS, New Delhi.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "#06b6d4", color: "#030712", border: "none",
              padding: "14px 28px", borderRadius: 8, fontSize: 15, fontWeight: 700,
              cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.01em",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 0 24px rgba(6,182,212,0.3)",
            }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 0 36px rgba(6,182,212,0.5)"; }}
            onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "0 0 24px rgba(6,182,212,0.3)"; }}>
            View Projects
          </button>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "transparent", color: "#06b6d4", border: "1px solid rgba(6,182,212,0.5)",
              padding: "14px 28px", borderRadius: 8, fontSize: 15, fontWeight: 600,
              cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(6,182,212,0.08)"; e.currentTarget.style.borderColor = "#06b6d4"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)"; }}>
            Contact Me
          </button>
        </div>

        {/* Social row */}
        <div style={{ display: "flex", gap: "1.25rem", marginTop: "2.5rem", alignItems: "center" }}>
          {[
            { icon: <IconGithub size={20} />, href: "https://github.com/shivam-naithani", label: "GitHub" },
            { icon: <IconLinkedIn size={20} />, href: "https://linkedin.com/in/shivam-naithani", label: "LinkedIn" },
            { icon: <IconMail size={20} />, href: "mailto:shivamnaithani39@gmail.com", label: "Email" },
          ].map(({ icon, href, label }) => (
            <a key={label} href={href} aria-label={label} style={{
              color: "#64748b", transition: "color 0.2s", display: "flex"
            }}
              onMouseEnter={e => e.currentTarget.style.color = "#06b6d4"}
              onMouseLeave={e => e.currentTarget.style.color = "#64748b"}>
              {icon}
            </a>
          ))}
          <div style={{ width: 48, height: 1, background: "rgba(6,182,212,0.3)" }} />
        </div>
      </div>
    </section>
  );
}

/* ABOUT */
function About() {
  return (
    <Section id="about">
      <SectionHeading number="01 / About" title="Who I Am" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="about-grid">
        <div>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
            I started coding because I wanted to build things I could show people — not just follow
            tutorials. That mindset led me to build a full CRM system from scratch, do a real
            dev internship at <span style={{ color: "#06b6d4" }}>Spiders Tech Services</span>, and actually ship working apps rather than
            leave half-finished repos lying around.
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
            My stack is <span style={{ color: "#06b6d4" }}>React.js on the front, Laravel + PHP on the back, MySQL underneath</span>.
            The thing I'm proudest of technically is getting role-based auth to work properly
            end-to-end — figuring out where the boundary lives between what the backend enforces
            and what the frontend controls took some real debugging.
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "1.05rem" }}>
            Outside of code I run things — literally. As <span style={{ color: "#06b6d4" }}>VP of Enactus ADGIPS</span> I coordinate
            80+ people across projects, which has taught me more about communication and
            follow-through than any course has. I also briefly ran an e-commerce store, which
            taught me that shipping something real is harder and more interesting than it looks.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { label: "Degree", value: "B.Tech – CS & Technology" },
            { label: "CGPA", value: "8.71 / 10" },
            { label: "Batch", value: "2023 – 2027" },
            { label: "Status", value: "Open to Opportunities" },
          ].map(({ label, value }) => (
            <div key={label} style={{
              padding: "1rem 1.25rem",
              background: "rgba(6,182,212,0.05)", border: "1px solid rgba(6,182,212,0.12)",
              borderRadius: 8, display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span style={{ color: "#475569", fontSize: 13, fontFamily: "'Space Mono', monospace" }}>{label}</span>
              <span style={{ color: "#e2e8f0", fontSize: 14, fontWeight: 600 }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* SKILLS */
function Skills() {
  return (
    <Section id="skills" style={{ background: "rgba(6,182,212,0.02)", borderTop: "1px solid rgba(6,182,212,0.08)", borderBottom: "1px solid rgba(6,182,212,0.08)" }}>
      <SectionHeading number="02 / Skills" title="What I Work With" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
        {SKILLS.map(({ category, color, items }) => (
          <div key={category} style={{
            padding: "1.5rem",
            background: "rgba(15,23,42,0.8)", border: `1px solid ${color}22`,
            borderRadius: 12, borderTop: `2px solid ${color}`,
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 16px 40px ${color}15`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
            <h3 style={{ color, fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: "0.1em", margin: "0 0 1rem", textTransform: "uppercase" }}>{category}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {items.map(skill => (
                <span key={skill} style={{
                  background: `${color}14`, color, border: `1px solid ${color}30`,
                  padding: "4px 12px", borderRadius: 20, fontSize: 13, fontWeight: 500,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* PROJECT CARD */
function ProjectCard({ project, delay = 0 }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      position: "relative",
      background: project.star ? "rgba(6,182,212,0.04)" : "rgba(15,23,42,0.7)",
      border: project.star ? "1px solid rgba(6,182,212,0.3)" : "1px solid rgba(255,255,255,0.06)",
      borderRadius: 16, padding: "2rem",
      display: "flex", flexDirection: "column", gap: "1rem",
      transition2: "box-shadow 0.2s",
    }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = project.star ? "0 24px 64px rgba(6,182,212,0.12)" : "0 24px 64px rgba(0,0,0,0.4)"}
      onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>

      {project.star && (
        <div style={{
          position: "absolute", top: -12, right: 24,
          background: "linear-gradient(135deg, #06b6d4, #0284c7)",
          color: "#030712", padding: "4px 14px", borderRadius: 20,
          fontSize: 12, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif",
          display: "flex", alignItems: "center", gap: 5,
          boxShadow: "0 4px 16px rgba(6,182,212,0.4)",
        }}>
          <IconStar size={12} /> Featured Project
        </div>
      )}

      <div>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.35rem", color: "#f1f5f9", margin: "0 0 4px" }}>
          {project.title}
        </h3>
        <p style={{ color: "#06b6d4", fontSize: 13, fontFamily: "'Space Mono', monospace", margin: 0 }}>{project.subtitle}</p>
      </div>

      <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "0.95rem", flex: 1 }}>{project.description}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.tech.map(t => (
          <span key={t} style={{
            background: "rgba(6,182,212,0.08)", color: "#06b6d4",
            border: "1px solid rgba(6,182,212,0.2)", padding: "3px 10px",
            borderRadius: 4, fontSize: 12, fontFamily: "'Space Mono', monospace",
          }}>{t}</span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center", paddingTop: "0.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <a href={project.github} style={{ color: "#94a3b8", display: "flex", alignItems: "center", gap: 6, fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.color = "#06b6d4"}
          onMouseLeave={e => e.currentTarget.style.color = "#94a3b8"}>
          <IconGithub size={16} /> GitHub
        </a>
        {project.demo && (
          <a href={project.demo} style={{ color: "#94a3b8", display: "flex", alignItems: "center", gap: 6, fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#06b6d4"}
            onMouseLeave={e => e.currentTarget.style.color = "#94a3b8"}>
            <IconExternal size={16} /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

/* PROJECTS */
function Projects() {
  return (
    <Section id="projects">
      <SectionHeading number="03 / Projects" title="Things I've Built" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
        {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} delay={i * 0.12} />)}
      </div>
    </Section>
  );
}

/* EDUCATION */
function Education() {
  return (
    <Section id="education" style={{ background: "rgba(6,182,212,0.02)", borderTop: "1px solid rgba(6,182,212,0.08)", borderBottom: "1px solid rgba(6,182,212,0.08)" }}>
      <SectionHeading number="04 / Education" title="Academic Background" />
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* B.Tech */}
        <div style={{
          padding: "2rem 2.5rem",
          background: "rgba(15,23,42,0.7)", border: "1px solid rgba(6,182,212,0.15)",
          borderRadius: 16, borderLeft: "3px solid #06b6d4",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem",
        }}>
          <div>
            <div style={{ color: "#06b6d4", fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: "0.08em", marginBottom: 8 }}>B.TECH – BACHELOR OF TECHNOLOGY</div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#f1f5f9", margin: "0 0 4px" }}>
              Computer Science & Technology
            </h3>
            <p style={{ color: "#94a3b8", margin: 0, fontSize: 15 }}>Dr. Akhilesh Das Gupta Institute of Professional Studies · New Delhi</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{
              background: "rgba(6,182,212,0.1)", color: "#06b6d4",
              border: "1px solid rgba(6,182,212,0.25)", padding: "8px 20px",
              borderRadius: 8, fontSize: 14, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
            }}>
              2023 – 2027
            </span>
            <p style={{ color: "#475569", fontSize: 13, marginTop: 8, fontFamily: "'Space Mono', monospace" }}>CGPA: 8.71 / 10</p>
          </div>
        </div>
        {/* Class XII */}
        <div style={{
          padding: "1.25rem 2rem",
          background: "rgba(15,23,42,0.5)", border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 12, borderLeft: "3px solid #475569",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem",
        }}>
          <div>
            <div style={{ color: "#64748b", fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: "0.08em", marginBottom: 4 }}>CLASS XII</div>
            <p style={{ color: "#94a3b8", margin: 0, fontSize: 14 }}>R.S.B.V Kalyan Puri, Delhi</p>
          </div>
          <span style={{ color: "#64748b", fontFamily: "'Space Mono', monospace", fontSize: 13 }}>2022</span>
        </div>
        {/* Class X */}
        <div style={{
          padding: "1.25rem 2rem",
          background: "rgba(15,23,42,0.5)", border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 12, borderLeft: "3px solid #475569",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem",
        }}>
          <div>
            <div style={{ color: "#64748b", fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: "0.08em", marginBottom: 4 }}>CLASS X</div>
            <p style={{ color: "#94a3b8", margin: 0, fontSize: 14 }}>R.D. Public School, Noida</p>
          </div>
          <span style={{ color: "#64748b", fontFamily: "'Space Mono', monospace", fontSize: 13 }}>2020</span>
        </div>
      </div>
    </Section>
  );
}

/* EXPERIENCE */
function Experience() {
  const EXPERIENCES = [
    {
      type: "internship",
      color: "#06b6d4",
      role: "Full Stack Development Intern",
      org: "Spiders Tech Services",
      period: "Feb 2026 – Jun 2026",
      bullets: [
        "Worked across the stack — React.js on the frontend, PHP/Laravel on the backend — on real client-facing apps, not internal tools.",
        "Wrote and consumed REST APIs, and had to actually fix slow MySQL queries when they became a problem in production.",
        "Debugged issues under a team setting, which meant reading other people's code and communicating what I found, not just fixing it silently.",
      ],
    },
    {
      type: "leadership",
      color: "#818cf8",
      role: "Vice President",
      org: "Enactus ADGIPS",
      period: "2025 – Present",
      bullets: [
        "Running the day-to-day of an 80+ member chapter — people management, project timelines, making sure things actually get done.",
        "Delivered 3 projects end-to-end. The biggest lesson: good communication saves more time than working harder.",
      ],
    },
    {
      type: "leadership",
      color: "#34d399",
      role: "Co-Founder",
      org: "The Doleo Store · E-commerce / Dropshipping",
      period: "2024 – 2025",
      bullets: [
        "Started a dropshipping store, handled everything from product selection to customer support. Learned that running something yourself — even a small thing — teaches you more than any case study.",
      ],
    },
  ];

  return (
    <Section id="experience">
      <SectionHeading number="05 / Experience" title="Where I've Worked" />
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {EXPERIENCES.map((exp, i) => (
          <div key={i} style={{
            padding: "1.75rem 2rem",
            background: "rgba(15,23,42,0.7)", border: `1px solid ${exp.color}22`,
            borderRadius: 16, borderLeft: `3px solid ${exp.color}`,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
              <div>
                <span style={{
                  display: "inline-block", background: `${exp.color}15`, color: exp.color,
                  border: `1px solid ${exp.color}30`, padding: "2px 10px", borderRadius: 4,
                  fontSize: 11, fontFamily: "'Space Mono', monospace", letterSpacing: "0.08em", marginBottom: 8,
                }}>
                  {exp.type.toUpperCase()}
                </span>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#f1f5f9", margin: "0 0 2px" }}>
                  {exp.role}
                </h3>
                <p style={{ color: "#94a3b8", margin: 0, fontSize: 14 }}>{exp.org}</p>
              </div>
              <span style={{ color: exp.color, fontFamily: "'Space Mono', monospace", fontSize: 12, paddingTop: 4, whiteSpace: "nowrap" }}>
                {exp.period}
              </span>
            </div>
            <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {exp.bullets.map((b, j) => (
                <li key={j} style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.65 }}>{b}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Achievements row */}
        <div style={{
          padding: "1.5rem 2rem",
          background: "rgba(245,158,11,0.04)", border: "1px solid rgba(245,158,11,0.15)",
          borderRadius: 16, borderLeft: "3px solid #f59e0b",
        }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#f1f5f9", margin: "0 0 1rem" }}>
            Achievements
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              "🥇 1st Place – Project-Based Documentary Competition",
              "🏆 Represented college at multiple hackathons and technical events",
            ].map((a, i) => (
              <p key={i} style={{ color: "#94a3b8", margin: 0, fontSize: "0.95rem", lineHeight: 1.6 }}>{a}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* CONTACT */
function Contact() {
  return (
    <Section id="contact" style={{ background: "rgba(6,182,212,0.02)", borderTop: "1px solid rgba(6,182,212,0.08)" }}>
      <SectionHeading number="06 / Contact" title="Let's Connect" />
      <div style={{ maxWidth: 640 }}>
        <p style={{ color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
          If you're hiring for an internship or full-time role, I'd genuinely like to hear from you.
          I learn fast, I've already done this in a real internship, and I don't need hand-holding
          to get up to speed. Drop me a message — I check my email daily.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
          {[
            { icon: <IconMail size={18} />, label: "Email", value: "shivamnaithani39@gmail.com", href: "mailto:shivamnaithani39@gmail.com" },
            { icon: <IconGithub size={18} />, label: "GitHub", value: "github.com/shivam-naithani", href: "https://github.com/shivam-naithani" },
            { icon: <IconLinkedIn size={18} />, label: "LinkedIn", value: "linkedin.com/in/shivam-naithani", href: "https://linkedin.com/in/shivam-naithani" },
          ].map(({ icon, label, value, href }) => (
            <a key={label} href={href} style={{
              display: "flex", alignItems: "center", gap: "1rem",
              padding: "1.25rem 1.5rem",
              background: "rgba(15,23,42,0.7)", border: "1px solid rgba(6,182,212,0.1)",
              borderRadius: 12, textDecoration: "none", transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(6,182,212,0.4)"; e.currentTarget.style.transform = "translateX(4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(6,182,212,0.1)"; e.currentTarget.style.transform = "none"; }}>
              <span style={{ color: "#06b6d4" }}>{icon}</span>
              <div>
                <div style={{ color: "#475569", fontSize: 11, fontFamily: "'Space Mono', monospace", letterSpacing: "0.08em" }}>{label}</div>
                <div style={{ color: "#e2e8f0", fontSize: 15, fontWeight: 500 }}>{value}</div>
              </div>
              <IconExternal size={14} style={{ marginLeft: "auto", color: "#475569" }} />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* FOOTER */
function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(6,182,212,0.1)", padding: "2rem",
      textAlign: "center",
    }}>
      <p style={{ color: "#475569", fontSize: 13, fontFamily: "'Space Mono', monospace", margin: 0 }}>
        Designed & Built by{" "}
        <span style={{ color: "#06b6d4" }}>Shivam Naithani</span>
        {" "}· {new Date().getFullYear()}
      </p>
    </footer>
  );
}

/* APP */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
