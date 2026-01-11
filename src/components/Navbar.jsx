import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const nav = [
    { label: "Home", href: "/#home" },
    { label: "About Us", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Training", to: "/training" },
    { label: "Why COSMOS", href: "/#why" },
    { label: "Contact", href: "/#contact" },
  ];

  // Close the mobile menu whenever the route changes
  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
      <header className="navWrap">
        <div className="container nav">
          {/* BRAND */}
          <a href="/#home" className="brand" aria-label="COSMOS Home">
            <div className="brandStack">
              <span className="brandText">COSMOS</span>
              <span className="brandTag">Building the NextGen</span>
            </div>
          </a>

          {/* DESKTOP LINKS */}
          <nav className="links desktop" aria-label="Primary">
            {nav.slice(0, 5).map((n) =>
                n.to ? (
                    <Link key={n.label} to={n.to} className="navLink">
                      {n.label}
                    </Link>
                ) : (
                    <a key={n.label} href={n.href} className="navLink">
                      {n.label}
                    </a>
                )
            )}
          </nav>

          {/* DESKTOP CTA */}
          <a href="/#contact" className="btn btn-primary navCta desktop">
            Contact
          </a>

          {/* MOBILE HAMBURGER */}
          <button
              className="mobileBtn"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
          >
            <span className={`bar ${open ? "x1" : ""}`} />
            <span className={`bar ${open ? "x2" : ""}`} />
            <span className={`bar ${open ? "x3" : ""}`} />
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
            <div className="mobileMenu" role="dialog" aria-label="Mobile menu">
              <div className="mobileInner">
                {nav.map((n) =>
                    n.to ? (
                        <Link
                            key={n.label}
                            to={n.to}
                            className="mobileLink"
                            onClick={() => setOpen(false)}
                        >
                          {n.label}
                        </Link>
                    ) : (
                        <a
                            key={n.label}
                            href={n.href}
                            className="mobileLink"
                            onClick={() => setOpen(false)}
                        >
                          {n.label}
                        </a>
                    )
                )}
              </div>
            </div>
        )}

        <style>{`
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

        .nav{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding: 10px 20px;
          position: relative;
        }

        .brand{ text-decoration:none; }
        .brandStack{ display:flex; flex-direction:column; line-height:1.05; }

        .brandText{
          font-size: 22px;
          font-weight: 900;
          letter-spacing: 0.08em;

          background: linear-gradient(
            90deg,
            #2563eb 0%,
            #2563eb 20%,
            #ff6b35 45%,
            #f77f00 65%,
            #2563eb 75%,
            #2563eb 100%
          );

          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 200% auto;
          animation: shine 4s linear infinite;

          text-shadow:
            0 0 12px rgba(255,107,53,0.35),
            0 0 22px rgba(37,99,235,0.25);
        }

        @keyframes shine {
          to { background-position: 200% center; }
        }

        .brandTag{
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(27,31,59,0.65);
          margin-top: 2px;
        }

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
          text-decoration: none;
          display: inline-block;
        }

        .navLink:hover{
          color: #4a3aff;
          background: rgba(124,77,255,0.12);
        }

        .navCta{
          padding: 8px 14px;
          font-size: 12px;
          border-radius: 999px;
          text-decoration: none;
        }

        /* Mobile button */
        .mobileBtn{
          display:none;
          background: transparent;
          border: 0;
          padding: 10px;
          border-radius: 10px;
          cursor: pointer;
        }

        .bar{
          display:block;
          width: 22px;
          height: 2px;
          background: rgba(27,31,59,0.75);
          margin: 5px 0;
          transition: transform .2s ease, opacity .2s ease;
        }
        .x1{ transform: translateY(7px) rotate(45deg); }
        .x2{ opacity: 0; }
        .x3{ transform: translateY(-7px) rotate(-45deg); }

        /* Mobile menu */
        .mobileMenu{
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(124,77,255,0.18);
          box-shadow: 0 14px 40px rgba(124,77,255,0.18);
        }

        .mobileInner{
          max-width: 1200px;
          margin: 0 auto;
          padding: 14px 20px 18px;
          display:flex;
          flex-direction: column;
          gap: 8px;
        }

        .mobileLink{
          padding: 12px 12px;
          border-radius: 12px;
          text-decoration: none;
          color: rgba(27,31,59,0.8);
          font-weight: 600;
          transition: all .2s ease;
        }

        .mobileLink:hover{
          background: rgba(124,77,255,0.12);
          color: #4a3aff;
        }

        /* Responsive rules */
        @media (max-width: 900px){
          .desktop{ display:none; }
          .mobileBtn{ display:block; }
          .brandTag{ font-size: 9px; }
        }
      `}</style>
      </header>
  );
}
