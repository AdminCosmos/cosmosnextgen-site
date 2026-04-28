const points = [
  { title: "Collaborative Delivery", desc: "Frequent stakeholder touchpoints and demos across all phases." },
  { title: "Multi-Stack Engineering", desc: "Full-stack capability across platforms and architecture layers." },
  { title: "DevOps Support", desc: "From maintenance bursts to full lifecycle build + deploy support." },
  { title: "Quality-First Standards", desc: "Clean code, best practices, real testing — not vibes." },
  { title: "Fast Delivery / Agile", desc: "Iterative releases with clear scope and predictable outcomes." },
  { title: "Secure & Scalable Systems", desc: "Cloud-native designs with security + performance baked in." },
  { title: "Cloud-Native Expertise", desc: "AWS / Azure / GCP deployment strategies aligned to your needs." }
];

export default function WhyUs() {
  return (
      <section id="why" className="section section-light">
        <div className="container">
          <h2 className="section-title">Why COSMOS</h2>
          <p className="section-subtitle">
            You’re not hiring a “vendor.” You’re getting an engineering partner that treats production like a first-class citizen.
          </p>

          <div className="whyGrid">
            {points.map((p) => (
                <div key={p.title} className="card whyCard">
                  <div className="whyTitle">{p.title}</div>
                  <div className="whyDesc">{p.desc}</div>
                </div>
            ))}
          </div>
        </div>

        <style>{`
        #why.section-light {
          color: #17202c;
          background:
            radial-gradient(ellipse at 8% 8%, rgba(139, 92, 246, 0.12), transparent 32%),
            radial-gradient(ellipse at 88% 12%, rgba(255, 107, 74, 0.14), transparent 34%),
            linear-gradient(135deg, #f5f3ff 0%, #ecfeff 42%, #fff7ed 100%);
        }

        #why .section-subtitle {
          color: rgba(31, 41, 55, 0.72);
        }

        .whyGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .whyCard {
          min-height: 178px;
          padding: 26px;
          border-color: rgba(31, 41, 55, 0.09);
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.54));
          box-shadow: 0 18px 46px rgba(31, 41, 55, 0.09);
          backdrop-filter: blur(22px);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .whyCard::before {
          content: "";
          position: absolute;
          inset: 0 0 auto;
          height: 3px;
          background: linear-gradient(90deg, rgba(255, 107, 74, 0.86), rgba(247, 183, 51, 0.86), rgba(125, 223, 187, 0.86), rgba(19, 184, 200, 0.86));
        }

        .whyCard::after {
          content: "";
          display: block;
          width: 54px;
          height: 4px;
          margin-top: 22px;
          border-radius: 999px;
          background: #0f766e;
          opacity: 0.72;
        }

        .whyCard:nth-child(1),
        .whyCard:nth-child(7) {
          grid-column: span 2;
        }

        .whyCard:hover {
          transform: translateY(-5px);
          border-color: rgba(139, 92, 246, 0.28);
          box-shadow: 0 28px 70px rgba(139, 92, 246, 0.13);
        }

        .whyTitle {
          font-weight: 900;
          letter-spacing: 0;
          margin-bottom: 14px;
          color: #17202c;
          font-size: 19px;
          line-height: 1.22;
        }

        .whyDesc {
          color: rgba(31, 41, 55, 0.68);
          line-height: 1.7;
          font-size: 14.5px;
          margin: 0;
        }

        @media (max-width: 980px) {
          .whyGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .whyCard:nth-child(1),
          .whyCard:nth-child(7) {
            grid-column: auto;
          }
        }

        @media (max-width: 620px) {
          .whyGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      </section>
  );
}
