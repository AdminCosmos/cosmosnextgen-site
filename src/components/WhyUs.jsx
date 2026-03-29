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
