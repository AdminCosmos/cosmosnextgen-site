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

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="navWrap">
      <div className="container nav">
        <a href="/#home" className="brand" aria-label="COSMOS Home">
          <img src="/images/cosmos-logo-transparent.png" alt="COSMOS Logo" className="navLogo" />
          <span className="brandCopy">
            <span className="brandText">COSMOS</span>
          </span>
        </a>

        <nav className="links desktop" aria-label="Primary">
          {nav.map((n) =>
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

        <a href="/#contact" className="navCta desktop">
          Contact
        </a>

        <button
          className="mobileBtn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`bar barTop ${open ? "open" : ""}`} />
          <span className={`bar barBottom ${open ? "open" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="mobileMenu" role="dialog" aria-label="Mobile menu">
          <div className="container mobileInner">
            {nav.map((n) =>
              n.to ? (
                <Link key={n.label} to={n.to} className="mobileLink" onClick={() => setOpen(false)}>
                  {n.label}
                </Link>
              ) : (
                <a key={n.label} href={n.href} className="mobileLink" onClick={() => setOpen(false)}>
                  {n.label}
                </a>
              )
            )}
            <a href="/#contact" className="mobileCta" onClick={() => setOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}

      <style>{`
        .navWrap {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.68);
          border-bottom: 1px solid rgba(31, 41, 55, 0.09);
          backdrop-filter: blur(22px);
          box-shadow: 0 16px 48px rgba(31, 41, 55, 0.1);
        }

        .navWrap::before {
          content: "";
          position: absolute;
          inset: 0 0 auto;
          height: 3px;
          background: linear-gradient(90deg, #ff6b4a, #f7b733, #7ddfbb, #13b8c8, #ff5fa2);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          min-height: 76px;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          min-width: max-content;
        }

        .navLogo {
          width: 54px;
          height: 54px;
          object-fit: contain;
        }

        .brandCopy {
          display: inline-flex;
          align-items: center;
        }

        .brandText {
          position: relative;
          display: inline-flex;
          align-items: center;
          color: #17202c;
          font-size: 24px;
          font-weight: 950;
          letter-spacing: 0.055em;
          line-height: 0.95;
          text-transform: uppercase;
        }

        .brandText::after {
          content: "";
          position: absolute;
          left: 2px;
          right: 3px;
          bottom: -8px;
          height: 4px;
          border-radius: 999px;
          background: linear-gradient(90deg, #ff6b4a, #f7b733, #0f766e);
        }

        .links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 6px;
          border: 1px solid rgba(31, 41, 55, 0.09);
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(255, 247, 237, 0.86), rgba(236, 254, 255, 0.82));
        }

        .navLink {
          display: inline-flex;
          align-items: center;
          min-height: 38px;
          padding: 0 13px;
          border-radius: 999px;
          color: rgba(31, 41, 55, 0.72);
          font-size: 13px;
          font-weight: 850;
          white-space: nowrap;
          transition: color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease;
        }

        .navLink:hover {
          color: #17202c;
          background: rgba(255, 255, 255, 0.85);
          box-shadow: inset 0 0 0 1px rgba(255, 107, 74, 0.18);
        }

        .navCta,
        .mobileCta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0 18px;
          border-radius: 999px;
          color: #17202c;
          font-size: 14px;
          font-weight: 950;
          background: linear-gradient(135deg, #fff176, #ffb86b, #ff6b4a);
          box-shadow: 0 16px 34px rgba(255, 107, 74, 0.2);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }

        .navCta:hover,
        .mobileCta:hover {
          transform: translateY(-2px);
          box-shadow: 0 24px 48px rgba(255, 122, 61, 0.24);
        }

        .mobileBtn {
          display: none;
          position: relative;
          width: 42px;
          height: 42px;
          place-items: center;
          align-content: center;
          justify-items: center;
          row-gap: 5px;
          padding: 0;
          border: 1px solid rgba(31, 41, 55, 0.1);
          border-radius: 13px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.88), rgba(255, 247, 237, 0.62)),
            rgba(255, 255, 255, 0.76);
          box-shadow: 0 12px 28px rgba(31, 41, 55, 0.1);
          cursor: pointer;
          transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
        }

        .mobileBtn:hover {
          transform: translateY(-1px);
          border-color: rgba(255, 107, 74, 0.28);
          box-shadow: 0 16px 34px rgba(255, 107, 74, 0.14);
        }

        .mobileBtn:focus-visible {
          outline: 3px solid rgba(19, 184, 200, 0.26);
          outline-offset: 3px;
        }

        .bar {
          display: block;
          width: 18px;
          height: 2px;
          border-radius: 999px;
          background: #17202c;
          transition: transform 0.22s ease, width 0.22s ease, background 0.22s ease;
        }

        .barBottom {
          width: 13px;
          justify-self: end;
          margin-right: 12px;
        }

        .barTop {
          margin: 0;
        }

        .barTop.open {
          width: 18px;
          transform: translateY(3.5px) rotate(45deg);
          background: #0f766e;
        }

        .barBottom.open {
          width: 18px;
          justify-self: center;
          margin-right: 0;
          transform: translateY(-3.5px) rotate(-45deg);
          background: #0f766e;
        }

        .mobileMenu {
          border-top: 1px solid rgba(31, 41, 55, 0.1);
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(22px);
        }

        .mobileInner {
          display: grid;
          gap: 8px;
          padding-top: 14px;
          padding-bottom: 18px;
        }

        .mobileLink {
          padding: 13px 14px;
          border-radius: 10px;
          color: rgba(31, 41, 55, 0.78);
          font-weight: 850;
          background: rgba(255, 247, 237, 0.92);
        }

        .mobileCta {
          margin-top: 4px;
        }

        @media (max-width: 1040px) {
          .navLink {
            padding: 0 10px;
          }
        }

        @media (max-width: 930px) {
          .desktop {
            display: none;
          }

          .mobileBtn {
            display: grid;
          }
        }
      `}</style>
    </header>
  );
}
