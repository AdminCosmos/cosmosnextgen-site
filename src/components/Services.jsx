const services = [
	{
		title: "Microservices",
		desc: "Independently deployable services with clean boundaries, observability, and scale-ready design.",
	},
	{
		title: "DevOps",
		desc: "CI/CD pipelines, automation, infra hygiene, and fast, repeatable deployments.",
	},
	{
		title: "Cloud Services",
		desc: "AWS, Azure, GCP — architecture, migrations, cost optimization, security baselines.",
	},
	{
		title: "App Development",
		desc: "Modern web & mobile applications built with performance, reliability, and UX in mind.",
	},
	{
		title: "UI/UX Design",
		desc: "Design systems, wireframes, and clean UI patterns that users actually love using.",
	},
	{
		title: "Data Engineering / AI",
		desc: "Pipelines, warehousing, analytics foundations, ML enablement, and production-grade data systems.",
	},
];

export default function Services() {
	return (
		<section id="services" className="section">
			<div className="container">
				<h2 className="section-title">Services</h2>
				<p className="section-subtitle">
					What kinds of services do we provide? The short answer: we build the stuff
					that keeps modern businesses alive.
				</p>

				<div className="grid svcGrid">
					{services.map((s) => (
						<div key={s.title} className="card svcCard">
							<div className="svcTop">
								<span className="svcDot" />
								<h3 className="svcTitle">{s.title}</h3>
							</div>
							<p className="svcDesc">{s.desc}</p>
						</div>
					))}
				</div>
			</div>

			<style>{`
        .services{ }
        .svcGrid{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .svcCard{
          padding: 28px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          background: rgba(20, 18, 40, 0.4);
          border-radius: 12px;
          border: 1px solid rgba(26, 159, 181, 0.2);
          backdrop-filter: blur(10px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
          animation: cardFloat 0.8s ease-out backwards;
        }
        
        .svcCard:nth-child(1) { animation-delay: 0.1s; }
        .svcCard:nth-child(2) { animation-delay: 0.2s; }
        .svcCard:nth-child(3) { animation-delay: 0.3s; }
        .svcCard:nth-child(4) { animation-delay: 0.4s; }
        .svcCard:nth-child(5) { animation-delay: 0.5s; }
        .svcCard:nth-child(6) { animation-delay: 0.6s; }
        
        @keyframes cardFloat {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .svcCard:hover{
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(255, 107, 53, 0.4);
          background: rgba(255, 107, 53, 0.1);
          box-shadow: 0 24px 48px rgba(255, 107, 53, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        .svcTop{
          display:flex;
          gap: 12px;
          align-items:center;
          margin-bottom: 16px;
        }
        .svcDot{
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255,107,53,1) 0%, rgba(26,159,181,.8) 100%);
          box-shadow: 0 0 16px rgba(255,107,53,0.3);
          flex-shrink: 0;
        }
        .svcTitle{
          margin: 0;
          font-size: 18px;
          letter-spacing: -0.01em;
          color: #e8e6e1;
          font-weight: 600;
        }
        .svcDesc{
          margin: 0;
          color: rgba(232, 230, 225, 0.7);
          line-height: 1.7;
          font-size: 15px;
        }
        @media (max-width: 900px){
          .svcGrid{ grid-template-columns: 1fr; }
        }
      `}</style>
		</section>
	);
}
