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

				<div className="svcShowcase" aria-hidden="true">
					<img src="/images/cosmos-services-visual.png" alt="" />
					<div className="svcShowcaseContent">
						<span>Delivery Systems</span>
						<strong>Consulting, cloud, data, and talent in one operating model.</strong>
					</div>
				</div>

				<div className="svcGrid">
					{services.map((s) => (
						<div key={s.title} className="card svcCard">
							<div className="svcTop">
								<h3 className="svcTitle">{s.title}</h3>
							</div>
							<p className="svcDesc">{s.desc}</p>
						</div>
					))}
				</div>
			</div>

			<style>{`
        #services.section-light {
          color: var(--ink-dark);
          background:
            radial-gradient(ellipse at 12% 12%, rgba(247, 183, 51, 0.18), transparent 34%),
            radial-gradient(ellipse at 86% 8%, rgba(19, 184, 200, 0.16), transparent 34%),
            linear-gradient(135deg, #fffbe6 0%, #ecfeff 46%, #fff1f2 100%);
        }

        #services .section-subtitle {
          color: rgba(31, 41, 55, 0.72);
        }

        .svcShowcase {
          position: relative;
          min-height: 330px;
          margin: 0 0 22px;
          overflow: hidden;
          border-radius: 16px;
          border: 1px solid rgba(31, 41, 55, 0.1);
          background: #ffffff;
          box-shadow: 0 30px 76px rgba(31, 41, 55, 0.12);
        }

        .svcShowcase img {
          width: 100%;
          height: 100%;
          min-height: 330px;
          object-fit: cover;
          object-position: center;
        }

        .svcShowcase::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(23, 32, 44, 0.74), rgba(23, 32, 44, 0.08)),
            linear-gradient(180deg, transparent, rgba(23, 32, 44, 0.62));
        }

        .svcShowcaseContent {
          position: absolute;
          z-index: 1;
          left: 28px;
          bottom: 28px;
          max-width: 520px;
        }

        .svcShowcaseContent span {
          display: block;
          margin-bottom: 14px;
          color: #fff176;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .svcShowcaseContent strong {
          display: block;
          color: #ffffff;
          font-size: clamp(22px, 3.2vw, 34px);
          line-height: 1.1;
          font-weight: 950;
        }

        .svcGrid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 18px;
        }

        .svcCard {
          grid-column: span 2;
          position: relative;
          min-height: 220px;
          padding: 28px;
          overflow: hidden;
          border-color: rgba(31, 41, 55, 0.09);
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.84), rgba(255, 255, 255, 0.58));
          box-shadow: 0 18px 48px rgba(31, 41, 55, 0.09);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .svcCard:nth-child(4),
        .svcCard:nth-child(5) {
          grid-column: span 3;
        }

        .svcCard::before {
          content: "";
          position: absolute;
          inset: 0 0 auto;
          height: 100%;
          background:
            linear-gradient(135deg, rgba(255, 241, 118, 0.18), rgba(125, 223, 187, 0.14) 48%, rgba(255, 95, 162, 0.1));
          opacity: 0.9;
          pointer-events: none;
        }

        .svcCard:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 107, 74, 0.3);
          box-shadow: 0 28px 74px rgba(255, 107, 74, 0.14);
        }

        .svcTop {
          margin-bottom: 18px;
          position: relative;
        }

        .svcTitle {
          margin: 0;
          font-size: 22px;
          line-height: 1.14;
          letter-spacing: 0;
          color: #17202c;
          font-weight: 950;
          position: relative;
        }

        .svcTitle::after {
          content: "";
          display: block;
          width: 56px;
          height: 4px;
          margin-top: 16px;
          border-radius: 999px;
          background: #0f766e;
          opacity: 0.76;
        }

        .svcDesc {
          margin: 0;
          color: rgba(31, 41, 55, 0.68);
          line-height: 1.7;
          font-size: 14.5px;
          position: relative;
        }

        @media (max-width: 900px) {
          .svcGrid {
            grid-template-columns: 1fr;
          }

          .svcCard,
          .svcCard:nth-child(4),
          .svcCard:nth-child(5) {
            grid-column: auto;
          }
        }
      `}</style>
		</section>
	);
}
