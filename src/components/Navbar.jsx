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
        <div className="nav">
          {/* LEFT: BRAND */}
          <div className="navLeft">
            <a href="/#home" className="brand" aria-label="COSMOS Home">
              <div className="brandStack">
                <img src="/images/cosmos-logo.png" alt="COSMOS Logo" className="navLogo" />
                <span className="brandText">COSMOS</span>
              </div>
            </a>
          </div>

          {/* CENTER: NAVIGATION */}
          <div className="navCenter">
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
          </div>

          {/* RIGHT: CTA */}
          <div className="navRight">
            <a href="/#contact" className="navCta desktop">
              Get Started
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
                <a href="/#contact" className="mobileCta" onClick={() => setOpen(false)}>
                  Get Started
                </a>
              </div>
            </div>
        )}

        <style>{`
        .navWrap{
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          backdrop-filter: blur(40px);
          background: rgba(10, 10, 10, 0.85);
          border-bottom: 1px solid var(--stroke);
          box-shadow: var(--shadow);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navWrap:hover{
          background: rgba(10, 10, 10, 0.95);
          box-shadow: var(--shadow-lg);
        }

        .nav{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 32px;
          position: relative;
          max-width: var(--max);
          margin: 0 auto;
          height: 80px;
        }

        .navLeft {
          flex: 0 0 auto;
        }

        .navCenter {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .navRight {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .brand{ text-decoration:none; }
        .brandStack{
          display:flex;
          flex-direction:row;
          align-items:center;
          gap: 12px;
          flex-shrink: 0;
        }
        .navLogo{
          height: 60px;
          width: auto;
          filter: drop-shadow(var(--glow-primary));
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navLogo:hover {
          transform: scale(1.05);
          filter: drop-shadow(var(--glow-secondary));
        }

        .brandText{
          font-size: 28px;
          font-weight: 900;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 50%, var(--accent-tertiary) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: var(--glow-primary);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .brandText:hover {
          text-shadow: var(--glow-accent);
          transform: translateY(-1px);
        }

        .links{
          display:flex;
          gap: 8px;
          align-items:center;
          flex-wrap: nowrap;
          background: var(--card);
          padding: 8px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--stroke);
          backdrop-filter: blur(20px);
        }

        .navLink{
          color: var(--text-secondary);
          font-size: 14px;
          padding: 12px 20px;
          border-radius: var(--radius);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 600;
          text-decoration: none;
          position: relative;
          display: inline-block;
          white-space: nowrap;
        }

        .navLink::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .navLink:hover {
          color: white;
          transform: translateY(-2px);
        }

        .navLink:hover::before {
          opacity: 1;
        }

        .navCta{
          padding: 14px 28px;
          font-size: 15px;
          border-radius: var(--radius-lg);
          text-decoration: none;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%);
          color: white;
          font-weight: 700;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--glow-primary);
          border: 1px solid transparent;
          flex-shrink: 0;
        }

        .navCta:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: var(--glow-accent);
          border-color: var(--accent-tertiary);
        }

        /* Mobile button */
        .mobileBtn{
          display:none;
          background: transparent;
          border: 0;
          padding: 12px;
          border-radius: var(--radius);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobileBtn:hover {
          background: var(--card);
        }

        .bar{
          display:block;
          width: 24px;
          height: 3px;
          background: var(--text);
          margin: 4px 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
          box-shadow: var(--glow-primary);
        }
        .x1{ transform: translateY(7px) rotate(45deg); }
        .x2{ opacity: 0; transform: scale(0); }
        .x3{ transform: translateY(-7px) rotate(-45deg); }

        /* Mobile menu */
        .mobileMenu{
          background: var(--bg);
          backdrop-filter: blur(40px);
          border-bottom: 1px solid var(--stroke);
          box-shadow: var(--shadow-lg);
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .mobileInner{
          max-width: var(--max);
          margin: 0 auto;
          padding: 32px;
          display:flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobileLink{
          padding: 20px 24px;
          border-radius: var(--radius-lg);
          text-decoration: none;
          color: var(--text);
          font-weight: 600;
          font-size: 18px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: var(--card);
          border: 1px solid var(--stroke);
          text-align: center;
        }

        .mobileLink:hover{
          background: var(--card-hover);
          color: var(--accent);
          transform: translateX(8px);
          box-shadow: var(--glow-primary);
        }

        .mobileCta {
          padding: 20px 24px;
          border-radius: var(--radius-lg);
          text-decoration: none;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%);
          color: white;
          font-weight: 700;
          font-size: 18px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--glow-primary);
          text-align: center;
          margin-top: 16px;
        }

        .mobileCta:hover {
          transform: translateY(-2px);
          box-shadow: var(--glow-accent);
        }

        /* Responsive rules */
        @media (max-width: 1024px){
          .desktop{ display:none; }
          .mobileBtn{ display:flex; }
          .navCenter { display: none; }
          .nav{
            padding: 16px 24px;
            height: 70px;
          }
          .navLogo{ height: 50px; }
          .brandText{ font-size: 24px; }
        }

        @media (max-width: 768px){
          .nav{ padding: 12px 20px; }
          .navLogo{ height: 40px; }
          .brandText{ font-size: 20px; }
          .mobileInner{ padding: 24px 20px; }
        }
      `}</style>
      </header>
  );
}
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
          justify-content:space-around;
          padding: 10px 24px;
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
        }

        .brand{ text-decoration:none; }
        .brandStack{ 
          display:flex; 
          flex-direction:row; 
          align-items:center; 
          gap: 6px;
          flex-shrink: 0;
        }
        .navLogo{ height: 45px; width: auto; }

        .brandText{
          font-size: 22px;
          font-weight: 800;
          letter-spacing: 0.02em;
          color: #1a9fb5;
          transition: all 0.3s ease;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .brandText:hover {
          color: #ff6b35;
        }

        .links{
          display:flex;
          gap: 20px;
          align-items:center;
          flex-wrap: nowrap;
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
          flex-shrink: 0;
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
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
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
          background: rgba(26, 159, 181, 0.1);
          color: #1a9fb5;
        }

        /* Responsive rules */
        @media (max-width: 900px){
          .desktop{ display:none; }
          .mobileBtn{ display:block; }
          .brandTag{ font-size: 9px; }
          .brandStack{ padding: 2px 12px; }
          .navLogo{ height: 36px; }
          .brandText{ font-size: 18px; }
        }
      `}</style>
      </header>
  );
}
