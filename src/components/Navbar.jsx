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
    { label: "Careers", href: "/#careers" },
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
              <img src="/images/cosmos-logo.png" alt="COSMOS Logo" className="navLogo" />
              <span className="brandText">COSMOS</span>
            </div>
          </a>

          {/* DESKTOP LINKS */}
          <nav className="links desktop" aria-label="Primary">
            {nav.slice(0, 6).map((n) =>
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
          <a href="/#contact" className="navCta desktop">
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
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.85);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navWrap:hover{
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        }

        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .nav{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding: 16px 24px;
          position: relative;
        }

        .brand{ text-decoration:none; }
        .brandStack{ display:flex; flex-direction:row; align-items:center; gap: 12px; }
        .navLogo{ height: 40px; width: auto; }

        .brandText{
          font-size: 26px;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #1a9fb5;
          transition: all 0.3s ease;
        }

        .brandText:hover {
          color: #ff6b35;
        }

        .links{
          display:flex;
          gap: 16px;
          align-items:center;
        }

        .navLink{
          color: rgba(27,31,59,0.75);
          font-size: 14px;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 500;
          text-decoration: none;
          position: relative;
          display: inline-block;
        }

        .navLink::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #1a9fb5, #ff6b35);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
        }

        .navLink:hover {
          color: #1a9fb5;
          background: rgba(26, 159, 181, 0.05);
        }

        .navLink:hover::before {
          width: 100%;
        }

        .navCta{
          padding: 10px 20px;
          font-size: 14px;
          border-radius: 50px;
          text-decoration: none;
          background: linear-gradient(135deg, #1a9fb5, #ff6b35);
          color: white;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 12px rgba(26, 159, 181, 0.3);
        }

        .navCta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(26, 159, 181, 0.4);
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
