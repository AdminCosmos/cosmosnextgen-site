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
      <section id="why" className="section">
        <div className="container">
          <h2 className="section-title">Why COSMOS</h2>
          <p className="section-subtitle">
            You’re not hiring a “vendor.” You’re getting an engineering partner that treats production like a first-class citizen.
          </p>

          <div className="grid whyGrid">
            {points.map((p) => (
                <div key={p.title} className="card whyCard">
                  <div className="whyTitle">{p.title}</div>
                  <div className="whyDesc">{p.desc}</div>
                </div>
            ))}
          </div>
        </div>

        <style>{`
        .whyGrid{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .whyCard{
          padding: 28px;
          border-radius: 12px;
          border: 1px solid rgba(26, 159, 181, 0.2);
          background: rgba(20, 18, 40, 0.4);
          backdrop-filter: blur(10px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .whyCard:hover {
          transform: translateY(-4px);
          background: rgba(255, 107, 53, 0.1);
          border-color: rgba(255, 107, 53, 0.4);
          box-shadow: 0 16px 32px rgba(255, 107, 53, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        .whyTitle{
          font-weight: 700;
          letter-spacing: -0.01em;
          margin-bottom: 12px;
          color: #e8e6e1;
          font-size: 18px;
        }
        .whyDesc{
          color: rgba(232, 230, 225, 0.7);
          line-height: 1.7;
          font-size: 15px;
          margin: 0;
        }
        @media (max-width: 900px){
          .whyGrid{ grid-template-columns: 1fr; }
        }
      `}</style>
      </section>
  );
}
