export default function Footer() {
  return (
      <footer className="footer">
        <div className="container footerInner">
          {/* LEFT */}
          <div className="footerLeft">
            <img src="/images/logo.png" alt="COSMOS Logo" className="footerLogo" />
            <div className="footerBrandText">
              <div className="footerBrand">COSMOS</div>
              <div className="footerSub">An E-Verify Participant</div>
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
            <a href="/#about">About</a>
            <a href="/#services">Services</a>
            <a href="/#why">Why Us</a>
            <a href="/#contact">Contact</a>
            <a className="linkedInIconLink" href="https://www.linkedin.com/company/cosmos-nextgen-it/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="COSMOS LinkedIn Jobs and Posts">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.032 20.485h-2.8v-9.299h2.8v9.299zm-1.4-10.598c-.898 0-1.624-.73-1.624-1.627 0-.897.726-1.626 1.624-1.626s1.625.729 1.625 1.626c0 .897-.727 1.627-1.625 1.627zm12.432 10.598h-2.8v-4.76c0-1.137-.02-2.599-1.585-2.599-1.587 0-1.83 1.238-1.83 2.517v4.842h-2.8v-9.299h2.688v1.272h.038c.374-.707 1.287-1.45 2.649-1.45 2.833 0 3.355 1.865 3.355 4.29v5.187z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="container footerBottom">
          © {new Date().getFullYear()} COSMOS NextGen IT LLC
        </div>

        <style>{`
        .footer{
          padding: 40px 0 22px;
          border-top: 1px solid rgba(26, 159, 181, 0.15);
          background: rgba(250, 247, 242, 0.6);
        }

        .footerInner{
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          gap: 48px;
          padding-bottom: 18px;
          flex-wrap: wrap;
        }

        .footerLeft {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 220px;
        }

        .footerLogo {
          height: 48px;
          width: auto;
          object-fit: contain;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(255, 140, 66, 0.15);
        }

        .footerBrandText {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .footerBrand{
          font-weight: 900;
          letter-spacing: 0.10em;
          font-size: 13px;
          color: #181a20;
        }

        .footerSub{
          color: #23242a;
          font-size: 13px;
        }

        .footerCenter {
          flex: 1 1 360px;
          min-width: 320px;
        }

        .contactInfo {
          display: flex;
          gap: 36px;
          flex-wrap: wrap;
        }

        .infoItem {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .infoItem .label {
          font-size: 12px;
          font-weight: 600;
          color: #23242a;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .infoItem a {
          color: #181a20;
          font-size: 13px;
          text-decoration: none;
          transition: all 0.3s ease;
          line-height: 1.4;
        }

        .infoItem a:hover {
          color: #1a9fb5;
        }

        .infoText {
          color: #23242a;
          font-size: 13px;
          line-height: 1.5;
          margin: 0;
        }

        .footerRight{
          display:flex;
          gap: 18px;
          flex-wrap: wrap;
          min-width: 220px;
        }

        .footerRight a{
          color: #23242a;
          font-size: 13px;
          text-decoration: none;
        }

        .footerRight .linkedInIconLink {
          color: #0a66c2;
          font-size: 0;
          border: 1px solid rgba(10, 102, 194, 0.25);
          padding: 6px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease, transform 0.2s ease;
          margin-left: 12px;
        }

        .footerRight .linkedInIconLink:hover {
          background: rgba(10, 102, 194, 0.08);
          transform: translateY(-1px);
        }

        .footerRight .linkedInIconLink svg {
          width: 18px;
          height: 18px;
          color: #0a66c2;
        }

        .footerRight a:hover{
          color: #1a9fb5;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .footerBottom{
          padding-top: 14px;
          color: #23242a;
          font-size: 12px;
          border-top: 1px solid rgba(26, 159, 181, 0.1);
          text-align: center;
        }

        @media (max-width: 768px) {
          .footerInner {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 28px;
          }

          .contactInfo {
            justify-content: center;
            flex-direction: column;
            align-items: center;
            gap: 18px;
          }

          .footerRight {
            justify-content: center;
          }
        }
      `}</style>
      </footer>
  );
}
