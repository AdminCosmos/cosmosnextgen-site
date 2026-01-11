export default function Footer() {
  return (
      <footer className="footer">
        <div className="container footerInner">
          <div className="footerLeft">
            <img src="/images/logo.png" alt="COSMOS Logo" className="footerLogo" />
            <div className="footerBrandText">
              <div className="footerBrand">COSMOS</div>
              <div className="footerSub">Building the NextGen</div>
            </div>
          </div>

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

          <div className="footerRight">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#why">Why Us</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="container footerBottom">
          © {new Date().getFullYear()} COSMOS NextGen IT LLC
        </div>

        <style>{`
        .footer{
          padding: 34px 0 22px;
          border-top: 1px solid rgba(26, 159, 181, 0.15);
          background: rgba(250, 247, 242, 0.6);
        }
        .footerInner{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 16px;
          padding-bottom: 16px;
          flex-wrap: wrap;
        }
        .footerLeft {
          display: flex;
          align-items: center;
          gap: 12px;
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
          margin-bottom: 0px;
          color: #181a20; /* much darker */
        }
        .footerSub{
          color: #23242a; /* much darker */
          font-size: 13px;
        }
        
        .footerCenter {
          flex: 1;
          min-width: 250px;
        }
        
        .contactInfo {
          display: flex;
          gap: 24px;
        }
        
        .infoItem {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .infoItem .label {
          font-size: 12px;
          font-weight: 600;
          color: #23242a; /* much darker */
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .infoItem a {
          color: #181a20; /* much darker */
          font-size: 13px;
          text-decoration: none;
          transition: all 0.3s ease;
          line-height: 1.4;
        }
        
        .infoItem a:hover {
          color: #1a9fb5;
        }

        .infoText {
          color: #23242a; /* much darker */
          font-size: 13px;
          line-height: 1.4;
          margin: 0;
        }
        
        .footerRight{
          display:flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .footerRight a{
          color: #23242a; /* much darker */
          font-size: 13px;
        }
        .footerRight a:hover{
          color: #1a9fb5;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .footerBottom{
          padding-top: 12px;
          color: #23242a; /* much darker */
          font-size: 12px;
          border-top: 1px solid rgba(26, 159, 181, 0.1);
        }
        @media (max-width: 768px) {
          .footerInner {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          
          .contactInfo {
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }
          
          .footerRight {
            justify-content: center;
          }
        }
      `}</style>
      </footer>
  );
}
