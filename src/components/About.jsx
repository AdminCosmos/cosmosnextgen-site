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
          gap: 32px;
        }
        .aboutCard{
          padding: 32px;
          border-radius: var(--radius-lg);
          background: var(--card);
          border: 1px solid var(--stroke);
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .aboutCard:hover {
          transform: translateY(-6px);
          background: var(--card-hover);
          border-color: var(--stroke-hover);
          box-shadow: var(--shadow-lg);
        }
        .kicker{
          font-size: 12px;
          color: var(--accent);
          letter-spacing: 0.1em;
          margin-bottom: 16px;
          text-transform: uppercase;
          font-weight: 600;
        }
        .headline{
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.01em;
          margin-bottom: 16px;
          color: var(--text);
          line-height: 1.3;
        }
        .copy{
          margin: 0;
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 16px;
        }
        @media (max-width: 900px){
          .aboutGrid{ grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
}
