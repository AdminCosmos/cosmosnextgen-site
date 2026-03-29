export default function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="aboutHeader">
                    <h2 className="section-title">Our Journey</h2>
                    <p className="section-subtitle">
                        From vision to execution, we transform complex challenges into scalable solutions
                        that drive real business outcomes.
                    </p>
                </div>

                <div className="timeline">
                    <div className="timelineItem">
                        <div className="timelineContent">
                            <div className="timelineIcon">🎯</div>
                            <div className="timelineText">
                                <h3>Strategic Vision</h3>
                                <p>
                                    We begin every engagement with deep understanding of your business objectives,
                                    technical requirements, and success metrics. Our consultative approach ensures
                                    alignment from day one.
                                </p>
                            </div>
                        </div>
                        <div className="timelineConnector"></div>
                    </div>

                    <div className="timelineItem">
                        <div className="timelineContent">
                            <div className="timelineIcon">⚡</div>
                            <div className="timelineText">
                                <h3>Agile Execution</h3>
                                <p>
                                    Using modern methodologies and cloud-native technologies, we deliver
                                    production-ready systems with frequent iterations, automated testing,
                                    and continuous integration.
                                </p>
                            </div>
                        </div>
                        <div className="timelineConnector"></div>
                    </div>

                    <div className="timelineItem">
                        <div className="timelineContent">
                            <div className="timelineIcon">🚀</div>
                            <div className="timelineText">
                                <h3>Scale & Support</h3>
                                <p>
                                    Beyond delivery, we provide ongoing support, talent augmentation,
                                    and strategic consulting to ensure your systems grow with your business
                                    and maintain peak performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="aboutStats">
                    <div className="statItem">
                        <div className="statValue">10+</div>
                        <div className="statDesc">Years of Experience</div>
                    </div>
                    <div className="statItem">
                        <div className="statValue">100%</div>
                        <div className="statDesc">Client Satisfaction</div>
                    </div>
                    <div className="statItem">
                        <div className="statValue">24/7</div>
                        <div className="statDesc">Support Available</div>
                    </div>
                    <div className="statItem">
                        <div className="statValue">50+</div>
                        <div className="statDesc">Expert Engineers</div>
                    </div>
                </div>
            </div>

            <style>{`
        .about {
          padding: 120px 0;
          position: relative;
          background: var(--bg-secondary);
        }

        .about::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .aboutHeader {
          text-align: center;
          margin-bottom: 100px;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto 100px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent), var(--accent-secondary), var(--accent-tertiary));
          transform: translateX(-50%);
          border-radius: 1px;
        }

        .timelineItem {
          position: relative;
          margin-bottom: 80px;
        }

        .timelineItem:nth-child(even) .timelineContent {
          flex-direction: row-reverse;
          text-align: right;
        }

        .timelineItem:nth-child(even) .timelineText {
          text-align: right;
        }

        .timelineItem:last-child .timelineConnector {
          display: none;
        }

        .timelineContent {
          display: flex;
          align-items: center;
          gap: 40px;
          position: relative;
          z-index: 2;
        }

        .timelineIcon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          flex-shrink: 0;
          box-shadow: var(--glow-primary);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timelineIcon:hover {
          transform: scale(1.1);
          box-shadow: var(--glow-accent);
        }

        .timelineText {
          flex: 1;
          padding: 32px;
          border-radius: var(--radius-xl);
          background: var(--card);
          border: 1px solid var(--stroke);
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timelineText:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent);
        }

        .timelineText h3 {
          font-size: 28px;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 16px;
          background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .timelineText p {
          margin: 0;
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 16px;
        }

        .timelineConnector {
          position: absolute;
          left: 50%;
          top: 80px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--accent);
          transform: translateX(-50%);
          box-shadow: var(--glow-primary);
          z-index: 3;
        }

        .aboutStats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 32px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .statItem {
          text-align: center;
          padding: 40px 32px;
          border-radius: var(--radius-xl);
          background: var(--card);
          border: 1px solid var(--stroke);
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .statItem:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent);
        }

        .statValue {
          font-size: 48px;
          font-weight: 900;
          color: var(--accent);
          margin-bottom: 8px;
          text-shadow: var(--glow-primary);
        }

        .statDesc {
          font-size: 16px;
          color: var(--text-secondary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 1024px) {
          .timeline::before {
            left: 40px;
          }

          .timelineContent {
            flex-direction: row !important;
            text-align: left !important;
            gap: 24px;
          }

          .timelineText {
            text-align: left !important;
          }

          .timelineConnector {
            left: 40px;
          }
        }

        @media (max-width: 768px) {
          .about {
            padding: 80px 0;
          }

          .aboutHeader {
            margin-bottom: 60px;
          }

          .timeline {
            margin-bottom: 60px;
          }

          .timelineItem {
            margin-bottom: 60px;
          }

          .timelineContent {
            flex-direction: column !important;
            text-align: center !important;
            gap: 24px;
          }

          .timelineText {
            text-align: center !important;
          }

          .timeline::before {
            display: none;
          }

          .timelineConnector {
            display: none;
          }

          .aboutStats {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 480px) {
          .aboutStats {
            grid-template-columns: 1fr;
          }

          .statItem {
            padding: 32px 24px;
          }

          .statValue {
            font-size: 36px;
          }
        }
      `}</style>
        </section>
    );
}

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
