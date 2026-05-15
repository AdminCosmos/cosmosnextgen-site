export default function Careers() {
  return (
    <section id="careers" className="section section-light">
      <div className="container">
        <h2 className="section-title">Careers</h2>
        <p className="section-subtitle">
          Join our team and build the future with us.
        </p>

        <div className="careersVisual" aria-hidden="true">
          <img src="/images/cosmos-talent-visual.png" alt="" />
          <div className="careersVisualCopy">
            <span>Talent Network</span>
            <strong>Built for teams that need capability, clarity, and momentum.</strong>
          </div>
        </div>

        <div className="careersContent">
          <div className="careersCard">
            <h3 className="careersHeading">Equal Employment Opportunity (EEO)</h3>
            <p className="careersText">
              Cosmos is an Equal Employment Opportunity employer. All qualified
              applicants will receive consideration for employment without regard
              to race, color, religion, sex, sexual orientation, gender identity,
              national origin, disability, age, veteran status, or any other
              characteristic protected by applicable federal, state, or local laws.
            </p>
          </div>

          <div className="careersCard">
            <h3 className="careersHeading">E-Verify® Participation</h3>
            <p className="careersText">
              Cosmos participates in E-Verify® and will provide the federal
              government with Form I-9 information to confirm that employees are
              authorized to work in the United States
            </p>
          </div>
        </div>

        <div className="careersFooter">
          <p>Want current job openings and company updates?</p>
          <a className="linkedInBtn" href="https://www.linkedin.com/company/cosmos-nextgen-it/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            Follow us on LinkedIn
          </a>
        </div>
      </div>

      <style>{`
        #careers.section-light {
          color: #17202c;
          background:
            radial-gradient(ellipse at 12% 10%, rgba(255, 95, 162, 0.12), transparent 34%),
            radial-gradient(ellipse at 86% 12%, rgba(125, 223, 187, 0.18), transparent 34%),
            linear-gradient(135deg, #fff7ed 0%, #fff1f2 42%, #ecfeff 100%);
        }

        #careers .section-subtitle {
          color: rgba(31, 41, 55, 0.72);
        }

        .careersVisual {
          position: relative;
          min-height: 300px;
          margin: 0 0 22px;
          overflow: hidden;
          border-radius: 16px;
          border: 1px solid rgba(31, 41, 55, 0.1);
          background: #ffffff;
          box-shadow: 0 28px 74px rgba(31, 41, 55, 0.12);
        }

        .careersVisual img {
          width: 100%;
          height: 100%;
          min-height: 300px;
          object-fit: cover;
          object-position: center;
        }

        .careersVisual::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(23, 32, 44, 0.7), rgba(23, 32, 44, 0.08)),
            linear-gradient(180deg, transparent, rgba(23, 32, 44, 0.56));
        }

        .careersVisualCopy {
          position: absolute;
          z-index: 1;
          left: 28px;
          right: 28px;
          bottom: 28px;
          max-width: 560px;
        }

        .careersVisualCopy span {
          display: block;
          margin-bottom: 14px;
          color: #fff176;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .careersVisualCopy strong {
          display: block;
          color: #ffffff;
          font-size: clamp(22px, 2.8vw, 32px);
          line-height: 1.12;
          font-weight: 950;
        }

        .careersContent {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
          margin-top: 34px;
        }

        .careersCard {
          position: relative;
          overflow: hidden;
          padding: 28px;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(31, 41, 55, 0.09);
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.58));
          box-shadow: 0 18px 48px rgba(31, 41, 55, 0.09);
          backdrop-filter: blur(20px);
        }

        .careersCard::before {
          content: "";
          position: absolute;
          inset: 0 0 auto;
          height: 4px;
          background: linear-gradient(90deg, #13b8c8, #ff5fa2, #f7b733);
        }

        .careersHeading {
          font-weight: 900;
          font-size: 17px;
          color: #17202c;
          margin: 0 0 16px 0;
          letter-spacing: 0;
        }

        .careersText {
          color: rgba(31, 41, 55, 0.68);
          line-height: 1.7;
          font-size: 14.5px;
          margin: 0;
        }

        .careersFooter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
          margin-top: 22px;
          padding: 22px;
          border: 1px solid rgba(31, 41, 55, 0.1);
          border-radius: var(--radius-lg);
          background:
            linear-gradient(135deg, rgba(255, 241, 118, 0.22), rgba(125, 223, 187, 0.18), rgba(255, 95, 162, 0.12)),
            rgba(255, 255, 255, 0.74);
          backdrop-filter: blur(18px);
        }

        .careersFooter p {
          color: #17202c;
          font-size: 15px;
          font-weight: 800;
          margin: 0;
          line-height: 1.6;
        }

        .linkedInBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 44px;
          padding: 0 18px;
          background: linear-gradient(135deg, #0a66c2, #00509d);
          border: 1px solid rgba(10, 102, 194, 0.6);
          border-radius: var(--radius);
          color: #ffffff;
          font-weight: 850;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(10, 102, 194, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .linkedInBtn:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 22px rgba(10, 102, 194, 0.45);
        }

        .linkedInBtn:active {
          transform: translateY(0);
          box-shadow: 0 8px 14px rgba(10, 102, 194, 0.35);
        }

        @media (max-width: 900px) {
          .careersContent {
            grid-template-columns: 1fr;
          }

          .careersFooter {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
