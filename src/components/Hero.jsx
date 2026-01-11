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
                <div className="statTop">Cloud-Native</div>
                <div className="statBig">AWS • Azure • GCP</div>
                <div className="statSub">Architecture, migration, optimization</div>
              </div>

              <div className="statCard">
                <div className="statTop">Consulting & Staffing</div>
                <div className="statBig">Advisory • Teams • Talent</div>
                <div className="statSub">Architecture guidance + vetted engineers, on-demand</div>
              </div>
            </div>
          </div>

          {/* RIGHT ORB CARD */}
          <div className="heroOrb" aria-hidden="true">
            <div className="orbGlow1" />
            <div className="orbGlow2" />

            <div className="orbText">
              <div className="orbLabel">COSMIC MODERN</div>
              <div className="orbTitle">Subtle glow. Serious engineering.</div>
              <div className="orbSub">No fluff — just outcomes.</div>
            </div>
          </div>

        </div>

        {/* ================= STYLES ================= */}
        <style>{`

/* ===== HERO WRAP ===== */
.hero{
  padding: 110px 8% 140px;
  background:
    radial-gradient(circle at 30% -40%, rgba(124,77,255,0.18) 0%, transparent 55%),
    radial-gradient(circle at 80% -30%, rgba(0,209,255,0.18) 0%, transparent 60%),
    linear-gradient(180deg, #f6f8ff 0%, #eef2ff 100%);
}

/* ===== GRID ===== */
.heroGrid{
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 80px;
  align-items: center;
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
  font-size: 64px;
  margin: 0 0 24px;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: #181a20; /* much darker */
  font-weight: 900;
}

.glow{
  background: linear-gradient(90deg, #00d1ff, #7c4dff, #ff8a00);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* ===== SUBTEXT ===== */
.heroSub{
  color: #23242a; /* much darker */
  max-width: 620px;
  line-height: 1.9;
  margin: 0 0 40px;
  font-size: 18px;
}

/* ===== ACTIONS ===== */
.heroActions{
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 60px;
}

.btnPrimary{
  background: linear-gradient(135deg, #6cf2ff, #7c4dff);
  padding: 14px 26px;
  border-radius: 14px;
  color: #000;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 10px 40px rgba(124,77,255,0.25);
}

.btnGhost{
  background: linear-gradient(135deg, #6cf2ff, #7c4dff);
  padding: 14px 26px;
  border-radius: 14px;
  color: #000;
  font-weight: 700;
  text-decoration: none;
  border: none;
  box-shadow: 0 10px 40px rgba(124,77,255,0.25);
}


/* ===== STATS ===== */
.heroStats{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.statCard{
  padding: 26px;
  border-radius: 18px;
  background: rgba(255,255,255,0.75);
  border: 1px solid rgba(124,77,255,0.25);
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 40px rgba(124,77,255,0.15);
  transition: all .35s ease;
}

.statCard:hover{
  transform: translateY(-6px);
  box-shadow: 0 18px 60px rgba(124,77,255,0.25);
}

.statTop{
  font-size: 11px;
  color: #5b63ff;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 12px;
}

.statBig{
  font-weight: 800;
  font-size: 18px;
  color: #181a20; /* much darker */
  margin-bottom: 10px;
}

.statSub{
  font-size: 14px;
  color: #23242a; /* much darker */
  line-height: 1.6;
}

/* ===== ORB CARD ===== */
.heroOrb{
  position: relative;
  overflow: hidden;
  padding: 44px;
  min-height: 420px;
  border-radius: 24px;
  background: rgba(255,255,255,0.75);
  border: 1.5px solid rgba(124,77,255,0.35);
  backdrop-filter: blur(18px);
  box-shadow:
    0 0 40px rgba(124,77,255,0.25),
    0 0 80px rgba(0,209,255,0.15);
  animation: floatUp 4s ease-in-out infinite;
}

@keyframes floatUp{
  0%,100%{ transform: translateY(0); }
  50%{ transform: translateY(-12px); }
}

/* ===== ORB GLOWS ===== */
.orbGlow1{
  position:absolute;
  width:420px;height:420px;border-radius:50%;
  top:-140px;left:-140px;
  background: radial-gradient(circle, rgba(255,138,0,0.55), transparent 65%);
  filter: blur(6px);
}

.orbGlow2{
  position:absolute;
  width:460px;height:460px;border-radius:50%;
  bottom:-180px;right:-180px;
  background: radial-gradient(circle, rgba(0,209,255,0.55), transparent 65%);
  filter: blur(6px);
}

/* ===== ORB TEXT ===== */
.orbText{
  position: relative;
  z-index: 2;
  margin-top: 240px;
}

.orbLabel{
  font-size: 11px;
  letter-spacing: .3em;
  color: #5b63ff;
  text-transform: uppercase;
  margin-bottom: 18px;
  font-weight: 800;
}

.orbTitle{
  font-size: 30px;
  font-weight: 900;
  color: #181a20; /* much darker */
  margin-bottom: 14px;
}

.orbSub{
  color: #23242a; /* much darker */
  line-height: 1.8;
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
