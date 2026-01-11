export default function About() {
    return (
        <section id="about" className="section section-light">
            <div className="container">
                <h2 className="section-title">About Us</h2>
                <p className="section-subtitle">
                    COSMOS NextGen IT LLC partners with organizations to deliver modern software, cloud solutions,
                    and the right technical talent. From advisory and architecture to implementation and staffing,
                    we help teams move faster with clear execution and production-ready outcomes.
                </p>

                <div className="grid aboutGrid">
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
        .aboutGrid{
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .aboutCard{
          padding: 28px;
          border-radius: 12px;
          background: rgba(20, 18, 40, 0.4);
          border: 1px solid rgba(26, 159, 181, 0.2);
          backdrop-filter: blur(10px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .aboutCard:hover {
          transform: translateY(-4px);
          background: rgba(255, 107, 53, 0.1);
          border-color: rgba(255, 107, 53, 0.4);
          box-shadow: 0 16px 32px rgba(255, 107, 53, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        .kicker{
          font-size: 12px;
          color: #1a9fb5;
          letter-spacing: 0.12em;
          margin-bottom: 12px;
          text-transform: uppercase;
          font-weight: 600;
        }
        .headline{
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.01em;
          margin-bottom: 12px;
          color: #181a20; /* much darker */
        }
        .copy{
          margin: 0;
          color: #23242a; /* much darker */
          line-height: 1.7;
          font-size: 15px;
        }
        @media (max-width: 900px){
          .aboutGrid{ grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
}
