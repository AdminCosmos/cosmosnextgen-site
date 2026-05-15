export default function About() {
    return (
        <section id="about" className="section section-light">
            <div className="container">
                <h2 className="section-title">About Us</h2>
                <p className="section-subtitle">
                    COSMOS partners with organizations to deliver modern software, cloud solutions,
                    and the right technical talent. From advisory and architecture to implementation and staffing,
                    we help teams move faster with clear execution and production-ready outcomes.
                </p>

                <div className="aboutFeature" aria-hidden="true">
                    <img src="/images/cosmos-talent-visual.png" alt="" />
                    <div className="aboutFeatureOverlay">
                        <span>Cloud</span>
                        <span>Data</span>
                        <span>Talent</span>
                    </div>
                </div>

                <div className="aboutGrid">
                    <div className="card aboutCard">
                        <div className="kicker">What we do</div>
                        <div className="headline">Build, modernize, and scale.</div>
                        <p className="copy">
                            We design and deliver cloud-ready systems, applications, and data platforms — built to be
                            maintainable, secure, and ready for growth.
                        </p>
                    </div>

                    <div className="card aboutCard">
                        <div className="kicker">How we work</div>
                        <div className="headline">Consultative + delivery-driven.</div>
                        <p className="copy">
                            We start with clarity: requirements, architecture, timelines, and measurable goals. Then we
                            execute with agile delivery, frequent touchpoints, and fast feedback loops.
                        </p>
                    </div>

                    <div className="card aboutCard">
                        <div className="kicker">How we support</div>
                        <div className="headline">Consulting & staffing that fits.</div>
                        <p className="copy">
                            Need expertise or extra capacity? We provide skilled consultants, business analysts, and
                            vetted engineers to support initiatives locally and nationally — contract or contract-to-hire.
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
        #about.section-light {
          color: #17202c;
          background:
            radial-gradient(ellipse at 10% 14%, rgba(255, 107, 74, 0.14), transparent 32%),
            radial-gradient(ellipse at 84% 6%, rgba(255, 95, 162, 0.12), transparent 32%),
            linear-gradient(135deg, #fff7ed 0%, #fff1f2 48%, #ecfeff 100%);
        }

        #about .section-subtitle {
          color: rgba(31, 41, 55, 0.72);
        }

        .aboutFeature {
          position: relative;
          overflow: hidden;
          min-height: 320px;
          margin: 0 0 24px;
          border: 1px solid rgba(31, 41, 55, 0.1);
          border-radius: 16px;
          background: #ffffff;
          box-shadow: var(--shadow-dark);
        }

        .aboutFeature img {
          width: 100%;
          height: 100%;
          min-height: 320px;
          object-fit: cover;
          object-position: center;
          filter: saturate(1.08) contrast(1.05);
        }

        .aboutFeature::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(255, 250, 240, 0.02), rgba(255, 255, 255, 0.38)),
            linear-gradient(180deg, transparent, rgba(23, 32, 44, 0.38));
        }

        .aboutFeatureOverlay {
          position: absolute;
          z-index: 1;
          right: 22px;
          bottom: 22px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .aboutFeatureOverlay span {
          display: inline-flex;
          align-items: center;
          min-height: 42px;
          padding: 0 16px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 999px;
          color: #17202c;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(18px);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .aboutGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .aboutCard {
          position: relative;
          min-height: 248px;
          padding: 28px;
          overflow: hidden;
          border-color: rgba(31, 41, 55, 0.1);
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.56));
          box-shadow: 0 22px 58px rgba(31, 41, 55, 0.1);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .aboutCard::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 107, 74, 0.11), rgba(247, 183, 51, 0.1) 44%, transparent 72%);
          opacity: 0;
          transition: opacity 0.25s ease;
          pointer-events: none;
        }

        .aboutCard::before {
          content: "";
          position: absolute;
          inset: 0 0 auto;
          height: 4px;
          background: linear-gradient(90deg, #ff6b4a, #f7b733, #7ddfbb, #13b8c8);
        }

        .aboutCard:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 107, 74, 0.28);
          box-shadow: 0 26px 68px rgba(255, 107, 74, 0.14);
        }

        .aboutCard:hover::after {
          opacity: 1;
        }

        .kicker {
          font-size: 12px;
          color: #0f766e;
          letter-spacing: 0.12em;
          margin-bottom: 12px;
          text-transform: uppercase;
          font-weight: 900;
        }

        .headline {
          font-size: 18.5px;
          font-weight: 900;
          letter-spacing: 0;
          margin-bottom: 12px;
          color: #17202c;
        }

        .copy {
          margin: 0;
          color: rgba(31, 41, 55, 0.68);
          line-height: 1.7;
          font-size: 14.5px;
        }

        @media (max-width: 900px) {
          .aboutGrid {
            grid-template-columns: 1fr;
          }

          .aboutCard {
            min-height: 0;
          }

          .aboutFeature,
          .aboutFeature img {
            min-height: 280px;
          }
        }
      `}</style>
        </section>
    );
}
