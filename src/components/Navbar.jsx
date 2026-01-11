export default function Navbar() {
  const nav = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Why Us", id: "why" },
    { label: "Contact", id: "contact" },
  ];

  return (
      <header className="navWrap">
        <div className="container nav">

          {/* BRAND */}
          <a href="#home" className="brand" aria-label="COSMOS Home">
            <span className="brandText">COSMOS</span>
          </a>

          {/* LINKS */}
          <nav className="links" aria-label="Primary">
            {nav.map((n) => (
                <a key={n.id} href={`#${n.id}`} className="navLink">
                  {n.label}
                </a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#contact" className="btn btn-primary navCta">
            Contact
          </a>
        </div>

        {/* ================= STYLES ================= */}
        <style>{`

/* ===== WRAP ===== */
.navWrap{
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(10px);
  background: rgba(255,255,255,0.78);
  border-bottom: 1px solid rgba(124,77,255,0.18);
  box-shadow: 0 6px 18px rgba(124,77,255,0.12);
  animation: slideDown 0.5s ease-out;
  transition: all 0.3s ease;
}

.navWrap:hover{
  background: rgba(255,255,255,0.92);
  box-shadow: 0 10px 28px rgba(124,77,255,0.2);
}

@keyframes slideDown {
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* ===== INNER ===== */
.nav{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 8px 20px;   /* THIN BAR */
}

/* ===== BRAND ===== */
.brand{
  text-decoration:none;
  font-weight: 900;
  letter-spacing: 0.12em;
}

.brandText{
  background: linear-gradient(90deg, #1a9fb5 0%, #ff6b35 50%, #f77f00 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 22px;
  letter-spacing: 0.08em;
  font-weight: 900;
}

/* ===== LINKS ===== */
.links{
  display:flex;
  gap: 16px;
  align-items:center;
}

.navLink{
  color: rgba(27,31,59,0.75);
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 8px;
  transition: all .25s ease;
  font-weight: 500;
}

.navLink:hover{
  color: #4a3aff;
  background: rgba(124,77,255,0.12);
}

/* ===== CTA ===== */
.navCta{
  padding: 8px 14px;
  font-size: 12px;
  border-radius: 999px;
}

/* ===== MOBILE ===== */
@media (max-width: 900px){
  .links{ display:none; }
}

      `}</style>
      </header>
  );
}
