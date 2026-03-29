export default function Careers() {
  return (
    <section id="careers" className="section section-light">
      <div className="container">
        <h2 className="section-title">Careers</h2>
        <p className="section-subtitle">
          Join our team and build the future with us.
        </p>

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
            <h3 className="careersHeading">E-Verify Participation</h3>
            <p className="careersText">
              Cosmos participates in E-Verify and will provide the federal
              government with Form I-9 information to confirm that employees are
              authorized to work in the United States
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .careersContent {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 40px;
        }

        .careersCard {
          padding: 32px;
          border-radius: 12px;
          border: 1px solid rgba(26, 159, 181, 0.2);
          background: rgba(20, 18, 40, 0.4);
          backdrop-filter: blur(10px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .careersHeading {
          font-weight: 700;
          font-size: 18px;
          color: #181a20;
          margin: 0 0 16px 0;
          letter-spacing: -0.01em;
        }

        .careersText {
          color: #23242a;
          line-height: 1.7;
          font-size: 15px;
          margin: 0;
        }

        @media (max-width: 900px) {
          .careersContent {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
