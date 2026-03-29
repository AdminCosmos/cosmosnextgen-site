const services = [
	{
		title: "Consulting",
		desc: "Experienced software consultants and analysts who partner with you to design, build, and deliver solutions that move the business forward.",
	},
	{
		title: "Staffing",
		desc: "High-quality IT talent for fast-moving teams - contract, contract-to-hire, or direct placement across local and national engagements.",
	},
	{
		title: "Upskill",
		desc: "We provide practical technology training and upskilling programs to help teams adopt modern platforms, tools, and best practices with confidence.",
	},
	{
		title: "Data Engineering / AI",
		desc: "Pipelines, warehousing, analytics foundations, ML enablement, and production-grade data systems.",
	},
	{
		title: "Cloud Services",
		desc: "AWS, Azure, GCP — architecture, migrations, cost optimization, security baselines.",
	},
];

export default function Services() {
	return (
		<section id="services" className="section section-light">
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
          gap: 32px;
        }
        .svcCard{
          padding: 32px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: var(--card);
          border-radius: var(--radius-lg);
          border: 1px solid var(--stroke);
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
          animation: cardFadeIn 0.6s ease-out backwards;
        }
        
        .svcCard:nth-child(1) { animation-delay: 0.1s; }
        .svcCard:nth-child(2) { animation-delay: 0.2s; }
        .svcCard:nth-child(3) { animation-delay: 0.3s; }
        .svcCard:nth-child(4) { animation-delay: 0.4s; }
        .svcCard:nth-child(5) { animation-delay: 0.5s; }
        
        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .svcCard:hover{
          transform: translateY(-6px);
          border-color: var(--accent);
          background: var(--card-hover);
          box-shadow: var(--shadow-lg);
        }
        .svcTop{
          display:flex;
          gap: 16px;
          align-items:center;
          margin-bottom: 20px;
        }
        .svcDot{
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }
        .svcTitle{
          margin: 0;
          font-size: 20px;
          letter-spacing: -0.01em;
          color: var(--text);
          font-weight: 600;
        }
        .svcDesc{
          margin: 0;
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 16px;
        }
        @media (max-width: 900px){
          .svcGrid{ grid-template-columns: 1fr; }
        }
      `}</style>
		</section>
	);
}
