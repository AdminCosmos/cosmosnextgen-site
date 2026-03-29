const advantages = [
  {
    title: "Engineering Excellence",
    desc: "We don't just write code—we craft solutions that scale, perform, and evolve with your business needs.",
    icon: "⚡",
    metrics: ["99.9% Uptime", "Zero Security Breaches", "24/7 Monitoring"]
  },
  {
    title: "Agile Partnership",
    desc: "Transparent communication, frequent demos, and collaborative decision-making throughout every project.",
    icon: "🤝",
    metrics: ["Daily Standups", "Weekly Reviews", "Monthly Planning"]
  },
  {
    title: "Full-Stack Mastery",
    desc: "From frontend interfaces to backend systems, cloud infrastructure to data pipelines—we handle it all.",
    icon: "🔧",
    metrics: ["15+ Technologies", "Cross-Platform", "API-First Design"]
  },
  {
    title: "Quality Assurance",
    desc: "Rigorous testing, code reviews, and automated pipelines ensure production-ready code every time.",
    icon: "✅",
    metrics: ["100% Test Coverage", "Zero Critical Bugs", "Automated Deployments"]
  }
];

export default function WhyUs() {
  return (
      <section id="why" className="why">
        <div className="container">
          <div className="whyHeader">
            <h2 className="section-title">Why Choose COSMOS</h2>
            <p className="section-subtitle">
              We're not just another development agency. We're your strategic technology partner,
              committed to delivering exceptional results that drive your business forward.
            </p>
          </div>

          <div className="whyShowcase">
            {advantages.map((advantage, index) => (
              <div key={advantage.title} className="advantageCard" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="advantageVisual">
                  <div className="advantageIcon">{advantage.icon}</div>
                  <div className="advantageGlow"></div>
                </div>

                <div className="advantageContent">
                  <h3 className="advantageTitle">{advantage.title}</h3>
                  <p className="advantageDesc">{advantage.desc}</p>

                  <div className="advantageMetrics">
                    {advantage.metrics.map((metric, idx) => (
                      <span key={idx} className="metricBadge">{metric}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="whyComparison">
            <div className="comparisonItem">
              <h4>Traditional Agencies</h4>
              <ul>
                <li>Fixed scope, rigid timelines</li>
                <li>Limited transparency</li>
                <li>Single technology focus</li>
                <li>High overhead costs</li>
              </ul>
            </div>

            <div className="comparisonDivider">
              <span>VS</span>
            </div>

            <div className="comparisonItem highlight">
              <h4>COSMOS Approach</h4>
              <ul>
                <li>Flexible, iterative delivery</li>
                <li>Full transparency & collaboration</li>
                <li>Multi-stack engineering</li>
                <li>Efficient, results-driven</li>
              </ul>
            </div>
          </div>
        </div>

        <style>{`
        .why {
          padding: 120px 0;
          position: relative;
          background: var(--bg-secondary);
        }

        .why::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.06) 0%, transparent 50%);
          pointer-events: none;
        }

        .whyHeader {
          text-align: center;
          margin-bottom: 100px;
        }

        .whyShowcase {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
          margin-bottom: 100px;
        }

        .advantageCard {
          position: relative;
          padding: 40px;
          border-radius: var(--radius-xl);
          background: var(--card);
          border: 1px solid var(--stroke);
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          animation: advantageSlideIn 0.8s ease-out backwards;
        }

        @keyframes advantageSlideIn {
          from {
            opacity: 0;
            transform: translateX(-40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .advantageCard:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent);
        }

        .advantageVisual {
          position: relative;
          margin-bottom: 24px;
        }

        .advantageIcon {
          width: 80px;
          height: 80px;
          border-radius: var(--radius);
          background: var(--metallic);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          box-shadow: var(--glow-primary);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(251, 191, 36, 0.2);
        }

        .advantageCard:hover .advantageIcon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: var(--glow-accent);
          border-color: var(--accent);
        }

        .advantageGlow {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .advantageCard:hover .advantageGlow {
          opacity: 1;
        }

        .advantageTitle {
          font-size: 24px;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 16px;
          line-height: 1.2;
        }

        .advantageDesc {
          margin: 0 0 24px;
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 16px;
        }

        .advantageMetrics {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .metricBadge {
          padding: 6px 12px;
          border-radius: var(--radius);
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          color: var(--accent);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
        }

        .advantageCard:hover .metricBadge {
          background: rgba(99, 102, 241, 0.2);
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        .whyComparison {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 40px;
          align-items: start;
          max-width: 900px;
          margin: 0 auto;
          padding: 60px;
          border-radius: var(--radius-xl);
          background: var(--card);
          border: 1px solid var(--stroke);
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
        }

        .comparisonItem {
          padding: 32px;
          border-radius: var(--radius-lg);
          background: rgba(10, 10, 15, 0.5);
          border: 1px solid var(--stroke);
        }

        .comparisonItem.highlight {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
          border-color: var(--accent);
        }

        .comparisonItem h4 {
          font-size: 20px;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 20px;
          text-align: center;
        }

        .comparisonItem ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .comparisonItem li {
          padding: 8px 0;
          color: var(--text-secondary);
          font-size: 14px;
          position: relative;
          padding-left: 20px;
        }

        .comparisonItem li::before {
          content: '✗';
          position: absolute;
          left: 0;
          color: #ef4444;
          font-weight: bold;
        }

        .comparisonItem.highlight li::before {
          content: '✓';
          color: #10b981;
        }

        .comparisonDivider {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: var(--bg);
          border-radius: 50%;
          border: 2px solid var(--accent);
          width: 80px;
          height: 80px;
          margin-top: 32px;
        }

        .comparisonDivider span {
          font-size: 18px;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @media (max-width: 1024px) {
          .whyShowcase {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .why {
            padding: 80px 0;
          }

          .whyHeader {
            margin-bottom: 60px;
          }

          .whyShowcase {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 60px;
          }

          .advantageCard {
            padding: 32px;
          }

          .whyComparison {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 40px 24px;
          }

          .comparisonDivider {
            order: -1;
            width: 60px;
            height: 60px;
            padding: 16px;
          }

          .comparisonItem {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .advantageCard {
            padding: 24px;
          }

          .advantageIcon {
            width: 60px;
            height: 60px;
            font-size: 24px;
          }

          .advantageTitle {
            font-size: 20px;
          }

          .metricBadge {
            font-size: 11px;
            padding: 4px 8px;
          }
        }
      `}</style>
      </section>
  );
}

        <style>{`
        .whyGrid{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .whyCard{
          padding: 32px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--stroke);
          background: var(--card);
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .whyCard:hover {
          transform: translateY(-6px);
          background: var(--card-hover);
          border-color: var(--stroke-hover);
          box-shadow: var(--shadow-lg);
        }
        .whyTitle{
          font-weight: 600;
          letter-spacing: -0.01em;
          margin-bottom: 16px;
          color: var(--text);
          font-size: 20px;
          line-height: 1.3;
        }
        .whyDesc{
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 16px;
          margin: 0;
        }
        @media (max-width: 900px){
          .whyGrid{ grid-template-columns: 1fr; }
        }
      `}</style>
      </section>
  );
}
