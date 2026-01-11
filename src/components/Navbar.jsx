import { Link } from "react-router-dom";

export default function Navbar() {
  const nav = [
    { label: "Home", href: "/#home" },
    { label: "About Us", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Training", to: "/training" }, // real page route
    { label: "Why COSMOS", href: "/#why" },
  ];

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

          {/* LINKS */}
          <nav className="links" aria-label="Primary">
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

          {/* CTA */}
          <a href="/#contact" className="btn btn-primary navCta">
            Contact
          </a>
        </div>

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
          padding: 8px 20px;
        }

        .brand{ text-decoration:none; }

        .brandStack{
          display:flex;
          flex-direction:column;
          line-height:1.05;
        }

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

        @media (max-width: 900px){
          .links{ display:none; }
          .brandTag{ font-size: 9px; }
        }
      `}</style>
      </header>
  );
}
