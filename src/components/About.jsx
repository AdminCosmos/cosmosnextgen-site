export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Us</h2>
                <p className="section-subtitle">
                    COSMOS is a team of experienced engineers dedicated to helping clients build reliable,
                    scalable, high-quality products. We leverage agile frameworks for clear execution and
                    iterative delivery — turning complex ideas into clean, production-ready systems.
                </p>

                <div className="grid aboutGrid">
                    <div className="card aboutCard">
                        <div className="kicker">What we do</div>
                        <div className="headline">Engineering that ships.</div>
                        <p className="copy">
                            From microservices to cloud-native deployments, we build systems that are maintainable,
                            testable, and ready to scale. No duct-tape architecture.
                        </p>
                    </div>

                    <div className="card aboutCard">
                        <div className="kicker">How we work</div>
                        <div className="headline">Agile + stakeholder clarity.</div>
                        <p className="copy">
                            Tight stakeholder touchpoints, frequent demos, and fast feedback loops — so delivery is
                            aligned and predictable, not chaotic.
                        </p>
                    </div>

                    <div className="card aboutCard">
                        <div className="kicker">What you get</div>
                        <div className="headline">Secure & scalable outcomes.</div>
                        <p className="copy">
                            Quality-first code standards, thoughtful testing, and cloud best practices — built for
                            performance and long-term reliability.
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
          color: #e8e6e1;
        }
        .copy{
          margin: 0;
          color: rgba(232, 230, 225, 0.7);
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
