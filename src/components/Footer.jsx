export default function Footer() {
  return (
      <footer className="footer">
        <div className="container footerInner">
          {/* LEFT */}
          <div className="footerLeft">
            <img src="/images/cosmos-logo.png" alt="COSMOS Logo" className="footerLogo" />
            <div className="footerBrandText">
              <div className="footerBrand">COSMOS</div>
              <div className="footerSub">An E-Verify® Participant</div>
              <div className="footerEverifyLogoWrapper">
                <img src="/images/e-verify-logo.jpg" alt="E-Verify® logo" className="footerEverifyLogo" />
              </div>
            </div>
          </div>

          {/* CENTER */}
          <div className="footerCenter">
            <div className="contactInfo">
              <div className="infoItem">
                <span className="label">📍 Address</span>
                <p className="infoText">
                  <strong>COSMOS NextGen IT LLC</strong>
                  <br />
                  5900 Balcones Drive, Suite 100
                  <br />
                  Austin, TX 78731
                </p>
              </div>

              <div className="infoItem">
                <span className="label">📞 Phone</span>
                <a href="tel:2103909950">210.390.9950</a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="footerRight">
            <div className="footerLinkGroup">
              <a href="/#about">About</a>
              <a href="/#services">Services</a>
              <a href="/#why">Why Us</a>
              <a href="/#contact">Contact</a>
            </div>
            <a className="linkedInIconLink" href="https://www.linkedin.com/company/cosmos-nextgen-it/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="COSMOS LinkedIn Jobs and Posts">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.032 20.485h-2.8v-9.299h2.8v9.299zm-1.4-10.598c-.898 0-1.624-.73-1.624-1.627 0-.897.726-1.626 1.624-1.626s1.625.729 1.625 1.626c0 .897-.727 1.627-1.625 1.627zm12.432 10.598h-2.8v-4.76c0-1.137-.02-2.599-1.585-2.599-1.587 0-1.83 1.238-1.83 2.517v4.842h-2.8v-9.299h2.688v1.272h.038c.374-.707 1.287-1.45 2.649-1.45 2.833 0 3.355 1.865 3.355 4.29v5.187z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="container footerBottom">
          <div className="footerBottomContent">
            <span>© {new Date().getFullYear()} COSMOS NextGen IT LLC</span>
            <span className="footerDivider">•</span>
            <span>Building the NextGen</span>
          </div>
        </div>

        <style>{`
        .footer{
          position: relative;
          padding: 60px 0 30px;
          border-top: 1px solid rgba(26, 159, 181, 0.2);
          background:
            linear-gradient(135deg, rgba(250, 247, 242, 0.95) 0%, rgba(245, 243, 238, 0.95) 100%),
            radial-gradient(circle at 20% 80%, rgba(26, 159, 181, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.06) 0%, transparent 50%);
          backdrop-filter: blur(20px);
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            radial-gradient(circle at 25% 25%, rgba(26, 159, 181, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 107, 53, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .footerInner{
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(240px, 280px) minmax(320px, 1fr) minmax(240px, 280px);
          gap: 36px;
          padding-bottom: 40px;
          align-items: start;
        }

        .footerLeft {
          display: flex;
          flex-direction: column;
          gap: 22px;
          min-width: 240px;
        }

        .footerLogo {
          height: 80px;
          width: auto;
          object-fit: contain;
          border-radius: 18px;
          box-shadow: 0 10px 32px rgba(26, 159, 181, 0.14);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .footerLogo:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(26, 159, 181, 0.2);
        }

        .footerBrandText {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footerEverifyLogoWrapper {
          padding: 18px 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 24px;
          box-shadow: 0 16px 40px rgba(26, 159, 181, 0.08);
          border: 1px solid rgba(26, 159, 181, 0.12);
          max-width: 280px;
        }

        .footerEverifyLogo {
          display: block;
          height: 100px;
          width: auto;
          max-width: 240px;
          object-fit: contain;
        }

        .footerBrand{
          font-weight: 900;
          letter-spacing: 0.12em;
          font-size: 14px;
          color: #181a20;
          background: linear-gradient(135deg, #181a20, #2a2d32);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footerSub{
          color: #3a3b40;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .footerCenter {
          flex: 1 1 380px;
          min-width: 320px;
        }

        .contactInfo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          flex-wrap: wrap;
        }

        .infoItem {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.4);
          border: 1px solid rgba(26, 159, 181, 0.15);
          backdrop-filter: blur(12px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .infoItem:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(26, 159, 181, 0.15);
        }

        .infoItem .label {
          font-size: 13px;
          font-weight: 700;
          color: #1a9fb5;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .infoItem a {
          color: #181a20;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          line-height: 1.4;
        }

        .infoItem a:hover {
          color: #1a9fb5;
          transform: translateX(2px);
        }

        .infoText {
          color: #23242a;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
          font-weight: 500;
        }

        .footerRight{
          display:flex;
          flex-direction: column;
          gap: 24px;
          min-width: 240px;
          align-items: flex-end;
          justify-content: space-between;
        }

        .footerLinkGroup {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 16px;
          max-width: 100%;
        }

        .footerLinkGroup > a{
          color: #23242a;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          padding: 10px 18px;
          border-radius: 999px;
          transition: all 0.25s ease;
          position: relative;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(26, 159, 181, 0.14);
          backdrop-filter: blur(8px);
        }

        .footerLinkGroup > a::before {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #1a9fb5, #ff6b35);
          transition: width 0.3s ease;
          transform: translateX(-50%);
        }

        .footerLinkGroup > a:hover {
          color: #1a9fb5;
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.9);
        }

        .footerLinkGroup > a:hover::before {
          width: 100%;
        }

        .footerRight .linkedInIconLink {
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

        .footerRight .linkedInIconLink:hover {
          background: rgba(10, 102, 194, 0.12);
          border-color: #0a66c2;
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 12px 34px rgba(10, 102, 194, 0.18);
        }

        .footerRight .linkedInIconLink svg {
          width: 20px;
          height: 20px;
          color: #0a66c2;
          transition: color 0.3s ease;
        }

        .footerRight .linkedInIconLink:hover svg {
          color: #005885;
        }

        .footerBottom{
          position: relative;
          z-index: 1;
          padding-top: 28px;
          border-top: 1px solid rgba(26, 159, 181, 0.2);
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
          color: #1a9fb5;
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .footerInner {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 40px;
          }

          .contactInfo {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .footerRight {
            justify-content: center;
            align-items: center;
            gap: 16px;
          }

          .footerLinkGroup {
            justify-content: center;
          }

          .footerBottomContent {
            flex-direction: column;
            gap: 8px;
          }
        }

        @media (max-width: 600px) {
          .footer {
            padding: 40px 0 24px;
          }

          .footerLeft {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }

          .footerRight {
            gap: 12px;
          }

          .footerRight a {
            padding: 6px 12px;
            font-size: 13px;
          }
        }
      `}</style>
      </footer>
  );
}
