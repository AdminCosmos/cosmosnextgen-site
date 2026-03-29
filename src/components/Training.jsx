import React from "react";

const trainingAreas = [
    {
        title: "Foundational Technical Training",
        desc: "Core programming, cloud fundamentals, and system design for new and growing teams.",
    },
    {
        title: "Cloud & DevOps Enablement",
        desc: "AWS/Azure/GCP, CI/CD, IaC, observability—hands-on training that matches how teams ship.",
    },
    {
        title: "Skills Assessment & Training Plans",
        desc: "Pre-training assessments to identify gaps and build targeted learning paths.",
    },
    {
        title: "Certifications & Post-Training Validation",
        desc: "Knowledge checks, certifications guidance, and reinforcement to keep skills sticky.",
    },
];

export default function Training() {
    return (
        <main className="trainingPage">
            <section className="trainingHero">
                <div className="container">
                    <h1 className="title">Training & Education</h1>
                    <p className="subtitle">
                        Practical technology training designed to close skill gaps, accelerate adoption,
                        and turn learning into execution.
                    </p>

                    <div className="ctaRow">
                        <a className="btnPrimary" href="/#contact">Request Training</a>
                        {/* <a className="btnGhost" href="/#services">Explore Services</a> */}
                    </div>

                    <div className="pillRow">
                        <span className="pill">Instructor-led</span>
                        <span className="pill">Self-paced options</span>
                        <span className="pill">Custom curriculum</span>
                    </div>
                </div>
            </section>

            <section className="section section-light">
                <div className="container">
                    <h2 className="section-title">What we offer</h2>
                    <p className="section-subtitle">
                        Training built by engineers who actually ship production systems — not slide-deck merchants.
                    </p>

                    <div className="grid trainingGrid">
                        {trainingAreas.map((t) => (
                            <div key={t.title} className="card trainingCard">
                                <div className="kicker">Training Track</div>
                                <div className="headline">{t.title}</div>
                                <p className="copy">{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-light">
                <div className="container">
                    <h2 className="section-title">How it works</h2>

                    <div className="grid howGrid">
                        <div className="card howCard">
                            <div className="headline">1) Assess</div>
                            <p className="copy">We baseline skills, roles, and goals. No guessing. No vibes.</p>
                        </div>

                        <div className="card howCard">
                            <div className="headline">2) Train</div>
                            <p className="copy">Hands-on sessions using real examples aligned to your stack.</p>
                        </div>

                        <div className="card howCard">
                            <div className="headline">3) Validate</div>
                            <p className="copy">Post-training checks + optional certification support.</p>
                        </div>
                    </div>

                    <div className="bottomCta">
                        <a className="btnPrimary" href="/#contact">Talk to us about Training</a>
                    </div>
                </div>
            </section>

            <style>{`
        .trainingHero{
          padding: 120px 0 80px;
          background: linear-gradient(135deg, var(--bg) 0%, var(--bg-secondary) 100%);
          position: relative;
          overflow: hidden;
        }
        
        .trainingHero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 40%, rgba(26, 159, 181, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(255, 107, 53, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .container{ max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }
        .title{ font-size: 52px; margin: 0 0 20px; letter-spacing: -0.025em; color: var(--text); font-weight: 800; line-height: 1.1; }
        .subtitle{ margin: 0 0 32px; max-width: 700px; color: var(--text-secondary); line-height: 1.6; font-size: 18px; }
        .ctaRow{ display:flex; gap: 20px; flex-wrap: wrap; margin-bottom: 32px; }
        .btnPrimary{
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%);
          padding: 16px 32px; 
          border-radius: 50px; 
          color: white; 
          font-weight: 600; 
          text-decoration:none;
          box-shadow: var(--shadow);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display:inline-block;
        }
        .btnPrimary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
        .btnGhost{
          background: var(--card);
          padding: 16px 32px; 
          border-radius: 50px; 
          color: var(--text); 
          font-weight: 600; 
          text-decoration:none;
          border: 2px solid var(--stroke);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display:inline-block;
        }
        .btnGhost:hover {
          background: var(--accent);
          color: white;
          border-color: var(--accent);
          transform: translateY(-2px);
        }
        .pillRow{ display:flex; gap: 12px; flex-wrap: wrap; margin-top: 24px; }
        .pill{
          padding: 10px 16px; 
          border-radius: 50px;
          background: var(--card);
          border: 1px solid var(--stroke);
          color: var(--text-secondary); 
          font-size: 14px; 
          font-weight: 500;
          backdrop-filter: blur(10px);
        }
        .trainingGrid{ grid-template-columns: repeat(2, 1fr); gap: 32px; }
        .trainingCard, .howCard{
          padding: 32px;
          border-radius: var(--radius-lg);
          background: var(--card);
          border: 1px solid var(--stroke);
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .trainingCard:hover, .howCard:hover{
          transform: translateY(-6px);
          background: var(--card-hover);
          border-color: var(--stroke-hover);
          box-shadow: var(--shadow-lg);
        }
        .kicker{ font-size: 12px; color: var(--accent); letter-spacing: .1em; text-transform: uppercase; font-weight: 600; margin-bottom: 16px; }
        .headline{ font-size: 22px; font-weight: 700; color: var(--text); margin-bottom: 16px; line-height: 1.3; }
        .copy{ margin: 0; color: var(--text-secondary); line-height: 1.6; font-size: 16px; }
        .howGrid{ grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .bottomCta{ margin-top: 40px; display:flex; justify-content: center; }
        @media(max-width: 900px){
          .title{ font-size: 42px; }
          .trainingGrid{ grid-template-columns: 1fr; }
          .howGrid{ grid-template-columns: 1fr; }
        }
      `}</style>
        </main>
    );
}
