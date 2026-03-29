export default function Hero() {
  return (
      <section id="home" className="hero">
        <div className="heroContainer">
          {/* FLOATING GEOMETRIC ELEMENTS */}
          <div className="floatingShapes">
            <div className="shape shape1"></div>
            <div className="shape shape2"></div>
            <div className="shape shape3"></div>
            <div className="shape shape4"></div>
          </div>

          {/* MAIN CONTENT */}
          <div className="heroContent">
            <div className="heroBadge">
              <span className="badgeText">🚀 COSMOS NextGen IT LLC • Austin, TX</span>
            </div>

            <h1 className="heroTitle">
              Engineering the <span className="gradient">Future</span> of Technology
            </h1>

            <p className="heroSubtitle">
              We transform complex challenges into scalable solutions. From cloud architecture to product engineering,
              we deliver secure, reliable systems that drive real business outcomes.
            </p>

            <div className="heroActions">
              <a className="btn btn-primary" href="#contact">Start Your Project</a>
              <a className="btn btn-secondary" href="#services">View Our Work</a>
            </div>
          </div>

          {/* FEATURED CARDS */}
          <div className="heroFeatures">
            <div className="featureCard">
              <div className="featureIcon">⚡</div>
              <div className="featureContent">
                <h3>Cloud-Native Solutions</h3>
                <p>AWS, Azure, GCP - Enterprise-grade infrastructure</p>
              </div>
            </div>

            <div className="featureCard">
              <div className="featureIcon">👥</div>
              <div className="featureContent">
                <h3>Expert Teams</h3>
                <p>Top-tier consultants and developers ready to scale</p>
              </div>
            </div>

            <div className="featureCard">
              <div className="featureIcon">🎯</div>
              <div className="featureContent">
                <h3>Results-Driven</h3>
                <p>From strategy to delivery - measurable outcomes</p>
              </div>
            </div>
          </div>

          {/* TRUST BADGES */}
          <div className="heroTrust">
            <div className="trustBadge">
              <span className="badgeIcon">🏆</span>
              <span>Award-Winning Solutions</span>
            </div>
            <div className="trustBadge">
              <span className="badgeIcon">🔒</span>
              <span>Enterprise Security</span>
            </div>
            <div className="trustBadge">
              <span className="badgeIcon">⚡</span>
              <span>99.9% Uptime SLA</span>
            </div>
          </div>
        </div>

        <style>{`
        .hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 120px 0;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(ellipse at 30% 20%, rgba(251, 191, 36, 0.08) 0%, transparent 40%),
            radial-gradient(ellipse at 70% 80%, rgba(245, 158, 11, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(217, 119, 6, 0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .heroContainer {
          position: relative;
          z-index: 2;
          max-width: var(--max);
          margin: 0 auto;
          padding: 0 32px;
        }

        .floatingShapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
          opacity: 0.06;
          animation: float 25s ease-in-out infinite;
        }

        .shape1 {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 15%;
          animation-delay: 5s;
        }

        .shape3 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 20%;
          animation-delay: 10s;
        }

        .shape4 {
          width: 300px;
          height: 300px;
          top: 30%;
          right: 5%;
          animation-delay: 15s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(-40px) rotate(180deg); }
          75% { transform: translateY(-20px) rotate(270deg); }
        }

        .heroContent {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 80px;
        }

        .heroBadge {
          display: inline-block;
          margin-bottom: 32px;
        }

        .badgeText {
          display: inline-block;
          padding: 12px 24px;
          border-radius: var(--radius-xl);
          background: var(--card);
          border: 1px solid var(--stroke);
          color: var(--accent);
          font-weight: 600;
          font-size: 14px;
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
        }

        .heroTitle {
          font-size: 72px;
          font-weight: 900;
          line-height: 1;
          margin: 0 0 32px;
          letter-spacing: -0.04em;
        }

        .gradient {
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 50%, var(--accent-tertiary) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: var(--glow-primary);
          animation: gradientShift 4s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(30deg); }
        }

        .heroSubtitle {
          font-size: 24px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0 0 48px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .heroActions {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 80px;
        }

        .heroFeatures {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-bottom: 80px;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .featureCard {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 32px;
          border-radius: var(--radius-lg);
          background: var(--card);
          border: 1px solid var(--stroke);
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .featureCard:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent);
        }

        .featureIcon {
          font-size: 48px;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius);
          background: var(--metallic);
          border: 1px solid rgba(251, 191, 36, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .featureCard:hover .featureIcon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: var(--glow-primary);
          border-color: var(--accent);
        }

        .featureContent h3 {
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 8px;
          color: var(--text);
        }

        .featureContent p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 16px;
          line-height: 1.5;
        }

        .heroStats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 48px;
          max-width: 800px;
          margin: 0 auto;
        }

        .stat {
          text-align: center;
          padding: 32px;
          border-radius: var(--radius-xl);
          background: var(--card);
          border: 1px solid var(--stroke);
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent);
        }

        .statNumber {
          font-size: 48px;
          font-weight: 900;
          color: var(--accent);
          margin-bottom: 8px;
          text-shadow: var(--glow-primary);
        }

        .heroTrust {
          display: flex;
          justify-content: center;
          gap: 32px;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .trustBadge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: var(--radius);
          background: var(--card);
          border: 1px solid var(--stroke);
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .trustBadge:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow);
          border-color: var(--accent);
        }

        .badgeIcon {
          font-size: 16px;
        }

        @media (max-width: 1024px) {
          .heroTitle {
            font-size: 56px;
          }

          .heroSubtitle {
            font-size: 20px;
          }

          .heroFeatures {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .featureCard {
            padding: 24px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 100px 0;
            min-height: auto;
          }

          .heroTitle {
            font-size: 42px;
          }

          .heroSubtitle {
            font-size: 18px;
          }

          .heroActions {
            flex-direction: column;
            align-items: center;
          }

          .heroStats {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .shape1, .shape2, .shape3, .shape4 {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .heroTitle {
            font-size: 36px;
          }

          .featureCard {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }

          .featureIcon {
            width: 60px;
            height: 60px;
            font-size: 32px;
          }
        }
      `}</style>
      </section>
  );
}

        {/* ================= STYLES ================= */}
        <style>{`

/* ===== HERO WRAP ===== */
.hero{
  padding: 120px 0 100px;
  background: linear-gradient(135deg, var(--bg) 0%, var(--bg-secondary) 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(26, 159, 181, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 107, 53, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

/* ===== GRID ===== */
.heroGrid{
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}

/* ===== PILL ===== */
.pill{
  display: inline-block;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(124,77,255,0.12);
  border: 1px solid rgba(124,77,255,0.25);
  color: #4a3aff;
  font-size: 12px;
  margin-bottom: 18px;
}

/* ===== TITLE ===== */
.heroTitle{
  font-size: 56px;
  margin: 0 0 24px;
  letter-spacing: -0.025em;
  line-height: 1.1;
  color: var(--text);
  font-weight: 800;
}

.glow{
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: gradientFlow 3s ease-in-out infinite;
}

@keyframes gradientFlow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* ===== SUBTEXT ===== */
.heroSub{
  color: var(--text-secondary);
  max-width: 600px;
  line-height: 1.7;
  margin: 0 0 40px;
  font-size: 18px;
  font-weight: 400;
}

/* ===== ACTIONS ===== */
.heroActions{
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 60px;
}

.btnPrimary{
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%);
  padding: 16px 32px;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  box-shadow: var(--shadow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
}

.btnPrimary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btnGhost{
  background: transparent;
  padding: 16px 32px;
  border-radius: 50px;
  color: var(--accent);
  font-weight: 600;
  text-decoration: none;
  border: 2px solid var(--accent);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btnGhost:hover {
  background: var(--accent);
  color: white;
  transform: translateY(-2px);
}


/* ===== STATS ===== */
.heroStats{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.statCard{
  padding: 32px;
  border-radius: var(--radius-lg);
  background: var(--card);
  border: 1px solid var(--stroke);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.statCard:hover{
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--stroke-hover);
}

.statTop{
  font-size: 12px;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
  font-weight: 600;
}

.statBig{
  font-weight: 700;
  font-size: 20px;
  color: var(--text);
  margin-bottom: 12px;
  line-height: 1.3;
}

.statSub{
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* ===== ORB CARD ===== */
.heroOrb{
  position: relative;
  overflow: hidden;
  padding: 48px;
  min-height: 440px;
  border-radius: var(--radius-xl);
  background: var(--card);
  border: 1px solid var(--stroke);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-lg);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.heroOrb:hover {
  transform: translateY(-4px);
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.15);
}

/* ===== ORB GLOWS ===== */
.orbGlow1{
  position:absolute;
  width:400px;
  height:400px;
  border-radius:50%;
  top:-120px;
  left:-120px;
  background: radial-gradient(circle, rgba(26, 159, 181, 0.1), transparent 70%);
  filter: blur(20px);
}

.orbGlow2{
  position:absolute;
  width:420px;
  height:420px;
  border-radius:50%;
  bottom:-140px;
  right:-140px;
  background: radial-gradient(circle, rgba(255, 107, 53, 0.1), transparent 70%);
  filter: blur(20px);
}

/* ===== ORB TEXT ===== */
.orbText{
  position: relative;
  z-index: 2;
  margin-top: 220px;
}

.orbLabel{
  font-size: 12px;
  letter-spacing: .2em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 600;
}

.orbTitle{
  font-size: 28px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 16px;
  line-height: 1.2;
}

.orbSub{
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 16px;
}

/* ===== MOBILE ===== */
@media(max-width:900px){
  .heroGrid{ grid-template-columns:1fr; gap:60px; }
  .heroTitle{ font-size:48px; }
  .heroStats{ grid-template-columns:1fr; }
  .orbText{ margin-top:200px; }
}

      `}</style>
      </section>
  );
}
