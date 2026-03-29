export default function Hero() {
  return (
      <section id="home" className="hero">
        <div className="heroGrid">

          {/* LEFT CONTENT */}
          <div>
            {/*<div className="pill">COSMOS NextGen IT LLC • Austin, TX</div>*/}

            <h1 className="heroTitle">
              Building the <span className="glow">NextGen</span>.
            </h1>

            <p className="heroSub">
              Product engineering, cloud platforms, and consulting & staffing — built to scale.
              From strategy to delivery to talent, we help teams ship secure, reliable systems fast.
            </p>

            <div className="heroActions">
              <a className="btnPrimary" href="#contact">Send Email</a>
              <a className="btnGhost" href="#services">Explore Services</a>
            </div>

            <div className="heroStats">
              <div className="statCard">
                <div className="statTop">Consulting & Staffing</div>
                <div className="statBig">Advisory • Teams • Talent</div>
                <div className="statSub">Exceptional IT Consultants +  real business goals</div>
              </div>
              <div className="statCard">
                <div className="statTop">Cloud-Native</div>
                <div className="statBig">AWS • Azure • GCP</div>
                <div className="statSub">Architecture, migration, optimization</div>
              </div>
            </div>
          </div>

          {/* RIGHT ORB CARD */}
          <div className="heroOrb" aria-hidden="true">
            <div className="orbGlow1" />
            <div className="orbGlow2" />

            <div className="orbText">
              <div className="orbLabel">The NextGen Engineers </div>
              <div className="orbTitle">Serious engineering.</div>
              <div className="orbSub">No fluff — just outcomes.</div>
            </div>
          </div>

        </div>

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
