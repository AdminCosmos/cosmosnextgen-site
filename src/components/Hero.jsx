export default function Hero() {
  return (
      <section id="home" className="section hero">
        <div className="container heroGrid">
          <div>
            <div className="pill">COSMOS NextGen IT LLC • Austin, TX</div>
            <h1 className="heroTitle">
              Building the <span className="glow">NextGen</span>.
            </h1>
            <p className="heroSub">
              Product engineering, cloud platforms, and modern software — built to scale.
              We help teams ship secure, reliable systems with speed and clean standards.
            </p>

            <div className="heroActions">
              <a className="btn btn-primary" href="#contact">
                Send Email
              </a>
              <a className="btn" href="#services">
                Explore Services
              </a>
            </div>

            <div className="heroStats">
              <div className="stat card">
                <div className="statTop">Cloud-Native</div>
                <div className="statBig">AWS • Azure • GCP</div>
                <div className="statSub">Architecture, migration, optimization</div>
              </div>
              <div className="stat card">
                <div className="statTop">Delivery</div>
                <div className="statBig">Agile • Fast • Clean</div>
                <div className="statSub">Quality-first, scalable systems</div>
              </div>
            </div>
          </div>

          <div className="heroOrb card" aria-hidden="true">
            <div className="orb" />
            <div className="orb2" />
            <div className="orbText">
              <div className="orbLabel">COSMIC MODERN</div>
              <div className="orbTitle">Subtle glow. Serious engineering.</div>
              <div className="orbSub">No fluff — just outcomes.</div>
            </div>
          </div>
        </div>

        <style>{`
        .hero{ 
          padding-top: 60px;
          padding-bottom: 120px;
          position: relative;
          /* lighter, subtler background: soft light radial highlight on a slightly brighter base */
          background: radial-gradient(circle at 50% -50%, rgba(255,255,255,0.04) 0%, transparent 60%),
                      linear-gradient(180deg, rgba(28,30,40,0.66), rgba(15,14,26,0.60));
        }
        
        .hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(26, 159, 181, 0.5), transparent);
          animation: shimmerLine 3s ease-in-out infinite;
        }
        
        @keyframes shimmerLine {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        .heroGrid{
          display:grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 80px;
          align-items: center;
        }
        
        .heroTitle{
          font-size: 64px;
          margin: 0 0 24px;
          letter-spacing: -0.03em;
          line-height: 1.15;
          color: #e8e6e1;
          font-weight: 900;
          position: relative;
          animation: titleSlideIn 0.8s ease-out;
        }
        
        @keyframes titleSlideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .glow{
          /* Brighter, more legible multi-color gradient and softer glow */
          background: linear-gradient(90deg, #00d1ff 0%, #7c4dff 50%, #ff8a00 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 900;
          letter-spacing: -0.02em;
          /* layered colored glow for depth without washing out text */
          text-shadow:
            0 2px 8px rgba(0, 209, 255, 0.20),
            0 6px 24px rgba(124, 77, 255, 0.12),
            0 12px 48px rgba(255, 138, 0, 0.08);
        }
        
        .heroSub{
          color: rgba(232, 230, 225, 0.85);
          max-width: 600px;
          line-height: 1.9;
          margin: 0 0 40px;
          font-size: 18px;
          font-weight: 400;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .heroActions{
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 60px;
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }
        
        .heroStats{
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 48px;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }
        
        .stat{ 
          padding: 28px; 
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.08) 0%, rgba(26, 159, 181, 0.05) 100%);
          border: 1.5px solid rgba(26, 159, 181, 0.25);
          backdrop-filter: blur(10px);
          box-shadow: 
            inset 0 1px 2px rgba(255, 255, 255, 0.15),
            0 8px 24px rgba(0, 0, 0, 0.1);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
        }
        
        .stat::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          animation: statShimmer 2s ease-in-out infinite;
        }
        
        @keyframes statShimmer {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
        
        .stat:hover {
          border-color: rgba(255, 107, 53, 0.6);
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.15) 0%, rgba(26, 159, 181, 0.1) 100%);
          box-shadow: 
            inset 0 1px 2px rgba(255, 255, 255, 0.15),
            0 16px 40px rgba(255, 107, 53, 0.25);
          transform: translateY(-6px) scale(1.02);
        }
        
        .statTop{
          font-size: 11px;
          color: #1a9fb5;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 700;
          opacity: 0.8;
        }
        
        .statBig{
          font-weight: 800;
          letter-spacing: -0.01em;
          margin-bottom: 10px;
          background: linear-gradient(135deg, #ff6b35 0%, #e8e6e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 20px;
        }
        
        .statSub{
          font-size: 14px;
          color: rgba(232, 230, 225, 0.75);
          line-height: 1.6;
          font-weight: 400;
        }

        .heroOrb{
          position: relative;
          overflow: hidden;
          padding: 40px;
          min-height: 420px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(26, 159, 181, 0.08) 100%);
          border: 2px solid rgba(26, 159, 181, 0.4);
          backdrop-filter: blur(15px);
          box-shadow: 
            inset 0 1px 3px rgba(255, 255, 255, 0.2),
            0 0 40px rgba(255, 107, 53, 0.25),
            0 0 80px rgba(26, 159, 181, 0.15);
          animation: floatUp 3.5s ease-in-out infinite;
        }
        
        .heroOrb::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.05), transparent 70%);
          border-radius: 20px;
          pointer-events: none;
        }
        
        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0px);
            box-shadow: 
              inset 0 1px 3px rgba(255, 255, 255, 0.2),
              0 0 40px rgba(255, 107, 53, 0.25),
              0 0 80px rgba(26, 159, 181, 0.15);
          }
          50% {
            transform: translateY(-12px);
            box-shadow: 
              inset 0 1px 3px rgba(255, 255, 255, 0.2),
              0 0 60px rgba(255, 107, 53, 0.4),
              0 0 120px rgba(26, 159, 181, 0.25);
          }
        }
        
        .orb{
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          top: -120px;
          left: -120px;
          background: radial-gradient(circle at 35% 35%, rgba(255,107,53,0.6), transparent 65%);
          filter: blur(4px);
          animation: orbPulse 4s ease-in-out infinite;
        }
        
        @keyframes orbPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.8;
          }
        }
        
        .orb2{
          position: absolute;
          width: 440px;
          height: 440px;
          border-radius: 50%;
          bottom: -160px;
          right: -160px;
          background: radial-gradient(circle at 35% 35%, rgba(26,159,181,0.5), transparent 65%);
          filter: blur(4px);
          animation: orbPulse2 5.5s ease-in-out infinite;
        }
        
        @keyframes orbPulse2 {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
        }
        
        .orbText{
          position: relative;
          z-index: 2;
          margin-top: 240px;
          animation: fadeInUp 1s ease-out 0.4s both;
        }
        
        .orbLabel{
          font-size: 11px;
          letter-spacing: 0.3em;
          background: linear-gradient(90deg, #1a9fb5 0%, #ff6b35 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 18px;
          text-transform: uppercase;
          font-weight: 900;
          animation: shimmer 3.5s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        .orbTitle{
          font-size: 32px;
          font-weight: 900;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #ff6b35 0%, #f77f00 35%, #1a9fb5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.25;
          animation: fadeInUp 1s ease-out 0.5s both;
        }
        
        .orbSub{
          color: rgba(232, 230, 225, 0.85);
          line-height: 1.8;
          font-size: 17px;
          font-weight: 500;
          text-shadow: 0 0 30px rgba(255, 107, 53, 0.25);
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        @media (max-width: 900px){
          .heroGrid{ 
            grid-template-columns: 1fr; 
            gap: 60px;
          }
          .heroTitle{ font-size: 48px; }
          .heroStats{ grid-template-columns: 1fr; }
          .orbText{ margin-top: 200px; }
          .heroOrb { min-height: 360px; }
        }
      `}</style>
      </section>
  );
}
