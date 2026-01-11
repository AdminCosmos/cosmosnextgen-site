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
          padding: 110px 8% 70px;
          background:
            radial-gradient(circle at 30% -40%, rgba(124,77,255,0.18) 0%, transparent 55%),
            radial-gradient(circle at 80% -30%, rgba(0,209,255,0.18) 0%, transparent 60%),
            linear-gradient(180deg, #f6f8ff 0%, #eef2ff 100%);
        }
        .container{ max-width: 1200px; margin: 0 auto; }
        .title{ font-size: 56px; margin: 0 0 14px; letter-spacing: -0.03em; color:#181a20; font-weight: 900; }
        .subtitle{ margin: 0 0 26px; max-width: 760px; color:#23242a; line-height: 1.9; font-size: 18px; }
        .ctaRow{ display:flex; gap: 16px; flex-wrap: wrap; margin-bottom: 22px; }
        .btnPrimary{
          background: linear-gradient(135deg, #6cf2ff, #7c4dff);
          padding: 14px 26px; border-radius: 14px; color: #000; font-weight: 700; text-decoration:none;
          box-shadow: 0 10px 40px rgba(124,77,255,0.25);
          display:inline-block;
        }
        .btnGhost{
          background: rgba(255,255,255,0.7);
          padding: 14px 26px; border-radius: 14px; color:#181a20; font-weight:700; text-decoration:none;
          border: 1px solid rgba(124,77,255,0.25);
          display:inline-block;
        }
        .pillRow{ display:flex; gap: 10px; flex-wrap: wrap; }
        .pill{
          padding: 8px 12px; border-radius: 999px;
          background: rgba(124,77,255,0.12);
          border: 1px solid rgba(124,77,255,0.25);
          color: #4a3aff; font-size: 12px; font-weight: 600;
        }
        .trainingGrid{ grid-template-columns: repeat(2, 1fr); gap: 28px; }
        .trainingCard, .howCard{
          padding: 28px;
          border-radius: 12px;
          background: rgba(20, 18, 40, 0.4);
          border: 1px solid rgba(26, 159, 181, 0.2);
          backdrop-filter: blur(10px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }
        .trainingCard:hover, .howCard:hover{
          transform: translateY(-4px);
          background: rgba(255, 107, 53, 0.1);
          border-color: rgba(255, 107, 53, 0.4);
          box-shadow: 0 16px 32px rgba(255,107,53,0.15), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .kicker{ font-size: 12px; color: #1a9fb5; letter-spacing: .12em; text-transform: uppercase; font-weight: 600; margin-bottom: 10px; }
        .headline{ font-size: 20px; font-weight: 800; color:#181a20; margin-bottom: 10px; }
        .copy{ margin: 0; color:#23242a; line-height: 1.7; font-size: 15px; }
        .howGrid{ grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .bottomCta{ margin-top: 26px; display:flex; }
        @media(max-width: 900px){
          .title{ font-size: 42px; }
          .trainingGrid{ grid-template-columns: 1fr; }
          .howGrid{ grid-template-columns: 1fr; }
        }
      `}</style>
        </main>
    );
}
