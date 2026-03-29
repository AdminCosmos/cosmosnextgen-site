const services = [
	{
		title: "Cloud Architecture",
		desc: "Design and implement scalable cloud solutions on AWS, Azure, and GCP with enterprise-grade security and performance.",
		icon: "☁️",
		features: ["Infrastructure as Code", "Auto-scaling", "Cost Optimization", "Security Baselines"]
	},
	{
		title: "Data Engineering",
		desc: "Build robust data pipelines, warehouses, and analytics platforms that turn data into actionable insights.",
		icon: "📊",
		features: ["ETL Pipelines", "Data Warehousing", "Real-time Analytics", "ML Enablement"]
	},
	{
		title: "Product Engineering",
		desc: "Full-stack development of modern web and mobile applications with cutting-edge technologies and best practices.",
		icon: "⚙️",
		features: ["React/Vue/Angular", "Node.js/Python", "Microservices", "DevOps"]
	},
	{
		title: "Talent Solutions",
		desc: "Connect your team with top-tier IT professionals through consulting, staffing, and training programs.",
		icon: "👥",
		features: ["Contract Staffing", "Direct Placement", "Skills Assessment", "Team Augmentation"]
	},
	{
		title: "DevOps & Automation",
		desc: "Streamline development workflows with CI/CD pipelines, infrastructure automation, and monitoring solutions.",
		icon: "🔄",
		features: ["CI/CD Pipelines", "Container Orchestration", "Monitoring", "Security Automation"]
	},
	{
		title: "AI & Machine Learning",
		desc: "Implement intelligent solutions that leverage machine learning, natural language processing, and predictive analytics.",
		icon: "🤖",
		features: ["ML Model Development", "NLP Solutions", "Computer Vision", "Predictive Analytics"]
	}
];

export default function Services() {
	return (
		<section id="services" className="services">
			<div className="container">
				<div className="servicesHeader">
					<h2 className="section-title">Our Expertise</h2>
					<p className="section-subtitle">
						We combine deep technical expertise with business acumen to deliver
						solutions that drive real results and sustainable growth.
					</p>
				</div>

				<div className="servicesGrid">
					{services.map((service, index) => (
						<div key={service.title} className="serviceCard" style={{ animationDelay: `${index * 0.1}s` }}>
							<div className="serviceHeader">
								<div className="serviceIcon">{service.icon}</div>
								<h3 className="serviceTitle">{service.title}</h3>
							</div>

							<p className="serviceDesc">{service.desc}</p>

							<div className="serviceFeatures">
								{service.features.map((feature, idx) => (
									<span key={idx} className="featureTag">{feature}</span>
								))}
							</div>

							<div className="serviceGlow"></div>
						</div>
					))}
				</div>

				<div className="servicesCTA">
					<h3>Ready to Transform Your Business?</h3>
					<p>Let's discuss how we can help you achieve your technology goals.</p>
					<a href="#contact" className="btn btn-primary">Start a Conversation</a>
				</div>
			</div>

			<style>{`
        .services {
          padding: 120px 0;
          position: relative;
          background: var(--bg);
        }

        .services::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .servicesHeader {
          text-align: center;
          margin-bottom: 80px;
        }

        .servicesGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
          margin-bottom: 100px;
        }

        .serviceCard {
          position: relative;
          padding: 40px;
          border-radius: var(--radius-xl);
          background: var(--card);
          border: 1px solid var(--stroke);
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          animation: serviceSlideIn 0.8s ease-out backwards;
          cursor: pointer;
        }

        @keyframes serviceSlideIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .serviceCard:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: var(--shadow-xl);
          border-color: var(--accent);
        }

        .serviceCard:hover .serviceGlow {
          opacity: 1;
        }

        .serviceHeader {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
        }

        .serviceIcon {
          width: 64px;
          height: 64px;
          border-radius: var(--radius);
          background: var(--metallic);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          flex-shrink: 0;
          border: 1px solid rgba(251, 191, 36, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .serviceCard:hover .serviceIcon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: var(--glow-primary);
          border-color: var(--accent);
        }

        .serviceTitle {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
          color: var(--text);
          line-height: 1.2;
        }

        .serviceDesc {
          margin: 0 0 24px;
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 16px;
        }

        .serviceFeatures {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .featureTag {
          padding: 6px 12px;
          border-radius: var(--radius);
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          color: var(--accent);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
        }

        .serviceCard:hover .featureTag {
          background: rgba(99, 102, 241, 0.2);
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        .serviceGlow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .servicesCTA {
          text-align: center;
          padding: 60px;
          border-radius: var(--radius-xl);
          background: var(--card);
          border: 1px solid var(--stroke);
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
          max-width: 600px;
          margin: 0 auto;
        }

        .servicesCTA h3 {
          font-size: 32px;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 16px;
          background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .servicesCTA p {
          margin: 0 0 32px;
          color: var(--text-secondary);
          font-size: 18px;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .servicesGrid {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 32px;
          }
        }

        @media (max-width: 768px) {
          .services {
            padding: 80px 0;
          }

          .servicesHeader {
            margin-bottom: 60px;
          }

          .servicesGrid {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 60px;
          }

          .serviceCard {
            padding: 32px;
          }

          .serviceHeader {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }

          .serviceTitle {
            font-size: 20px;
          }

          .serviceFeatures {
            justify-content: center;
          }

          .servicesCTA {
            padding: 40px 24px;
          }

          .servicesCTA h3 {
            font-size: 24px;
          }

          .servicesCTA p {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .serviceCard {
            padding: 24px;
          }

          .serviceIcon {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }

          .serviceTitle {
            font-size: 18px;
          }

          .serviceDesc {
            font-size: 14px;
          }

          .featureTag {
            font-size: 11px;
            padding: 4px 8px;
          }
        }
      `}</style>
		</section>
	);
}

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
