export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="heroImage" aria-hidden="true">
        <img src="/images/cosmos-hero-visual.png" alt="" />
      </div>

      <div className="container heroInner">
        <div className="heroCopy">
          <h1 className="heroTitle">
            Building the <span>NextGen</span>.
          </h1>

          <p className="heroSub">
            Product engineering, cloud platforms, and consulting & staffing — built to scale.
            From strategy to delivery to talent, we help teams ship secure, reliable systems fast.
          </p>

          <div className="heroActions">
            <a className="btnPrimary" href="#contact">Send Email</a>
            <a className="btnGhost" href="#services">Explore Services</a>
          </div>
        </div>

        <div className="heroLower">
          <div className="heroStats" aria-label="COSMOS capabilities">
            <div className="statCard">
              <div className="statTop">Consulting & Staffing</div>
              <div className="statBig">Advisory • Teams • Talent</div>
              <div className="statSub">Exceptional IT Consultants +  real business goals</div>
            </div>
            <div className="statCard">
              <div className="statTop">Cloud-Native</div>
              <div className="statBig">AWS • Azure • GCP</div>
              <div className="statSub">Architecture, migration, optimization</div>
            </div>
          </div>

          <div className="heroManifesto" aria-hidden="true">
            <span>The NextGen Engineers </span>
            <strong>Serious engineering.</strong>
            <em>No fluff — just outcomes.</em>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: calc(100vh - 76px);
          overflow: hidden;
          margin-top: -76px;
          padding: 156px 0 46px;
          background:
            radial-gradient(ellipse at 14% 18%, rgba(255, 107, 74, 0.2), transparent 32%),
            radial-gradient(ellipse at 82% 20%, rgba(125, 223, 187, 0.18), transparent 34%),
            #fff7ed;
          color: #17202c;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(90deg, rgba(255, 250, 240, 0.78) 0%, rgba(255, 247, 237, 0.5) 38%, rgba(255, 250, 240, 0.04) 72%, rgba(255, 244, 196, 0.28) 100%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.34) 0%, rgba(255, 255, 255, 0.02) 48%, rgba(255, 247, 237, 0.7) 100%);
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(31, 41, 55, 0.045) 1px, transparent 1px),
            linear-gradient(180deg, rgba(31, 41, 55, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, transparent 0%, rgba(255, 107, 74, 0.18) 18%, rgba(247, 183, 51, 0.16) 34%, rgba(125, 223, 187, 0.16) 54%, rgba(19, 184, 200, 0.12) 72%, transparent 92%);
          background-size: 96px 96px, 96px 96px, 100% 100%;
          mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.72), transparent 78%);
        }

        .heroImage {
          position: absolute;
          inset: 0;
        }

        .heroImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 68% center;
          filter: saturate(1.18) contrast(1.03) brightness(1.08);
        }

        .heroInner {
          position: relative;
          z-index: 3;
          min-height: calc(100vh - 230px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 58px;
        }

        .heroCopy {
          max-width: 690px;
        }

        .heroTitle {
          margin: 0 0 20px;
          color: #17202c;
          font-size: clamp(44px, 7.2vw, 84px);
          line-height: 0.96;
          letter-spacing: 0;
          font-weight: 950;
        }

        .heroTitle span {
          position: relative;
          display: inline-block;
          isolation: isolate;
          color: #0f766e;
          background: none;
        }

        .heroTitle span::after {
          content: "";
          position: absolute;
          left: 0.03em;
          right: 0.03em;
          bottom: 0.03em;
          height: 0.08em;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(255, 107, 74, 0.82), rgba(247, 183, 51, 0.82));
          z-index: -1;
        }

        .heroSub {
          max-width: 620px;
          margin: 0 0 28px;
          color: rgba(31, 41, 55, 0.74);
          font-size: 16.5px;
          line-height: 1.76;
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .heroLower {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(260px, 0.48fr);
          gap: 22px;
          align-items: stretch;
        }

        .heroStats {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .statCard,
        .heroManifesto {
          border: 1px solid rgba(31, 41, 55, 0.1);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.66);
          box-shadow: 0 22px 58px rgba(31, 41, 55, 0.12);
          backdrop-filter: blur(22px);
        }

        .statCard {
          position: relative;
          overflow: hidden;
          min-height: 154px;
          padding: 21px;
        }

        .statCard::before {
          content: "";
          position: absolute;
          inset: 0 0 auto;
          height: 3px;
          background: linear-gradient(90deg, #ff6b4a, #f7b733, #7ddfbb, #13b8c8);
        }

        .statTop {
          margin-bottom: 14px;
          color: #0f766e;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .statBig {
          margin-bottom: 9px;
          color: #17202c;
          font-size: 16.5px;
          line-height: 1.35;
          font-weight: 950;
        }

        .statSub {
          color: rgba(31, 41, 55, 0.64);
          font-size: 14px;
          line-height: 1.62;
        }

        .heroManifesto {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          min-height: 154px;
          padding: 21px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.74), rgba(255, 241, 118, 0.2));
        }

        .heroManifesto span {
          margin-bottom: 18px;
          color: #ff5fa2;
          font-size: 11px;
          font-style: normal;
          font-weight: 950;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .heroManifesto strong {
          color: #17202c;
          font-size: 22px;
          line-height: 1.12;
          font-weight: 950;
        }

        .heroManifesto em {
          margin-top: 8px;
          color: rgba(31, 41, 55, 0.64);
          font-style: normal;
        }

        @media (max-width: 980px) {
          .hero {
            min-height: auto;
            padding-top: 144px;
          }

          .heroInner {
            min-height: 0;
          }

          .heroLower {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .hero {
            padding-bottom: 42px;
          }

          .heroTitle {
            font-size: clamp(39px, 13vw, 54px);
          }

          .hero::before {
            background:
              linear-gradient(180deg, rgba(255, 250, 240, 0.82) 0%, rgba(255, 250, 240, 0.58) 48%, rgba(255, 247, 237, 0.9) 100%);
          }

          .heroImage img {
            object-position: 66% center;
          }

          .heroStats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
