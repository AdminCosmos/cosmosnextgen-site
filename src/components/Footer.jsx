export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div className="footerSection footerSectionBrand">
          <img src="/images/cosmos-logo.png" alt="COSMOS Logo" className="footerLogo" />
          <div className="footerBrandText">
            <div className="footerBrand">COSMOS</div>
            <div className="footerSub">An E-Verify® Participant</div>
          </div>
          <div className="footerEverifyLogoWrapper">
            <img src="/images/e-verify-logo.jpg" alt="E-Verify® logo" className="footerEverifyLogo" />
          </div>
        </div>

        <address className="footerSection footerSectionBlock" aria-label="Company address">
          <div className="footerSectionLabel">📍 Address</div>
          <p className="footerText">
            <strong>COSMOS NextGen IT LLC</strong>
            <br />
            5900 Balcones Drive, Suite 100
            <br />
            Austin, TX 78731
          </p>
        </address>

        <div className="footerSection footerSectionBlock">
          <div className="footerSectionLabel">📞 Phone</div>
          <a className="footerText footerPhoneLink" href="tel:2103909950">210.390.9950</a>
        </div>

        <div className="footerSection footerSectionNav">
          <nav aria-label="Footer navigation">
            <ul className="footerNavList">
              <li><a href="/#about">About</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#why">Why Us</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </nav>
          <a className="linkedInIconLink" href="https://www.linkedin.com/company/cosmos-nextgen-it/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="COSMOS LinkedIn Jobs and Posts">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.032 20.485h-2.8v-9.299h2.8v9.299zm-1.4-10.598c-.898 0-1.624-.73-1.624-1.627 0-.897.726-1.626 1.624-1.626s1.625.729 1.625 1.626c0 .897-.727 1.627-1.625 1.627zm12.432 10.598h-2.8v-4.76c0-1.137-.02-2.599-1.585-2.599-1.587 0-1.83 1.238-1.83 2.517v4.842h-2.8v-9.299h2.688v1.272h.038c.374-.707 1.287-1.45 2.649-1.45 2.833 0 3.355 1.865 3.355 4.29v5.187z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="container footerBottom">
        <div className="footerBottomRule" />
        <div className="footerBottomContent">
          <span>© {new Date().getFullYear()} COSMOS NextGen IT LLC</span>
          <span className="footerDivider">•</span>
          <span>Building the NextGen</span>
        </div>
      </div>

      <style>{`
        .footer {
          position: relative;
          padding: 48px 0 24px;
          border-top: 1px solid rgba(26, 159, 181, 0.18);
          background:
            linear-gradient(135deg, rgba(250, 247, 242, 0.95) 0%, rgba(245, 243, 238, 0.95) 100%),
            radial-gradient(circle at 20% 80%, rgba(26, 159, 181, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.05) 0%, transparent 50%);
          color: #181a20;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 25% 25%, rgba(26, 159, 181, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 107, 53, 0.03) 0%, transparent 50%);
          pointer-events: none;
          opacity: 0.65;
        }

        .footerGrid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(220px, 280px) minmax(220px, 260px) minmax(220px, 260px) minmax(240px, 300px);
          gap: 28px;
          align-items: start;
          padding-bottom: 32px;
        }

        .footerSection {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footerSectionBrand {
          max-width: 320px;
        }

        .footerLogo {
          height: 72px;
          width: auto;
          object-fit: contain;
          border-radius: 18px;
          box-shadow: 0 12px 28px rgba(26, 159, 181, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .footerLogo:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(26, 159, 181, 0.12);
        }

        .footerBrandText {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footerBrand {
          font-weight: 900;
          letter-spacing: 0.12em;
          font-size: 16px;
          color: #181a20;
          text-transform: uppercase;
        }

        .footerSub {
          color: #3a3b40;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.02em;
          line-height: 1.7;
        }

        .footerEverifyLogoWrapper {
          padding: 10px 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.92);
          border-radius: 18px;
          border: 1px solid rgba(26, 159, 181, 0.12);
          max-width: 240px;
        }

        .footerEverifyLogo {
          display: block;
          height: 64px;
          width: auto;
          max-width: 220px;
          object-fit: contain;
        }

        .footerSectionBlock {
          gap: 12px;
        }

        .footerSectionLabel {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1a9fb5;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .footerText {
          color: #23242a;
          font-size: 14px;
          line-height: 1.75;
          margin: 0;
          font-weight: 500;
        }

        .footerPhoneLink {
          color: #23242a;
          font-weight: 600;
          text-decoration: none;
        }

        .footerPhoneLink:hover {
          color: #1a9fb5;
        }

        .footerSectionNav {
          gap: 18px;
          align-items: flex-start;
        }

        .footerNavList {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footerNavList a {
          color: #23242a;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .footerNavList a:hover {
          color: #1a9fb5;
          text-decoration: underline;
        }

        .linkedInIconLink {
          color: #0a66c2;
          font-size: 0;
          border: 2px solid rgba(10, 102, 194, 0.22);
          padding: 12px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
        }

        .linkedInIconLink:hover {
          background: rgba(10, 102, 194, 0.12);
          border-color: #0a66c2;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(10, 102, 194, 0.14);
        }

        .linkedInIconLink svg {
          width: 20px;
          height: 20px;
          color: #0a66c2;
          transition: color 0.3s ease;
        }

        .linkedInIconLink:hover svg {
          color: #005885;
        }

        .footerBottom {
          position: relative;
          z-index: 1;
          padding-top: 24px;
        }

        .footerBottomRule {
          width: 100%;
          height: 1px;
          background: rgba(26, 159, 181, 0.18);
          margin-bottom: 18px;
        }

        .footerBottomContent {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          color: #3a3b40;
          font-size: 13px;
          font-weight: 500;
          flex-wrap: wrap;
        }

        .footerDivider {
          color: rgba(26, 159, 181, 0.72);
          font-weight: 700;
        }

        @media (max-width: 940px) {
          .footerGrid {
            grid-template-columns: repeat(2, minmax(220px, 1fr));
          }

          .footerSectionNav {
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .footer {
            padding: 36px 0 20px;
          }

          .footerGrid {
            grid-template-columns: 1fr;
          }

          .footerBottomContent {
            justify-content: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
