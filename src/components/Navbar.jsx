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
          <a href="#home" className="brand" aria-label="COSMOS Home">
            <img src="/images/logo.png" alt="COSMOS Logo" className="brandLogo" />
          </a>

          <nav className="links" aria-label="Primary">
            {nav.map((n) => (
                <a key={n.id} href={`#${n.id}`} className="navLink">
                  {n.label}
                </a>
            ))}
          </nav>

          <a href="#contact" className="btn btn-primary navCta">
            Contact Us
          </a>
        </div>

        <style>{`
        .navWrap{
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(14px);
          background: rgba(15, 14, 26, 0.7);
          border-bottom: 1px solid rgba(26, 159, 181, 0.15);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          animation: slideDown 0.6s ease-out;
          transition: all 0.4s ease;
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .navWrap:hover {
          background: rgba(15, 14, 26, 0.9);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
        }
        .nav{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding: 14px 20px;
        }
        .brand{
          display:flex;
          flex-direction:row;
          gap:12px;
          align-items:center;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .brand:hover {
          transform: scale(1.08) rotate(1deg);
          filter: drop-shadow(0 0 12px rgba(255, 107, 53, 0.4));
        }
        
        .brandLogo {
          /* doubled on desktop for stronger branding */
          height: 96px;
           width: auto;
           object-fit: contain;
           border-radius: 6px;
           box-shadow: 0 2px 8px rgba(255, 107, 53, 0.15);
           transition: all 0.4s ease;
         }
        
        .brand:hover .brandLogo {
          box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3);
          transform: translateY(-2px);
        }
        
        .links{
          display:flex;
          gap: 18px;
          align-items:center;
        }
        .navLink{
          color: rgba(232, 230, 225, 0.75);
          font-size: 13px;
          padding: 8px 16px;
          border-radius: 6px;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          font-weight: 500;
        }

        .navLink::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff6b35, #1a9fb5);
          transition: width 0.4s ease;
        }

        .navLink:hover {
          color: #1a9fb5;
          background: rgba(26, 159, 181, 0.1);
        }

        .navLink:hover::after {
          width: 100%;
        }
        .navCta{
          padding: 10px 14px;
          font-size: 13px;
        }
        @media (max-width: 900px){
          .links{ display:none; }
          /* keep the logo usable on smaller screens */
          .brandLogo { height: 56px; }
        }
      `}</style>
      </header>
  );
}
