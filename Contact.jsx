import React from "react";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [statusMsg, setStatusMsg] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Safely read text first (works even if server returns HTML)
      const raw = await res.text();
      let data = {};
      try {
        data = JSON.parse(raw);
      } catch {
        // Not JSON (likely HTML error page)
      }

      if (res.ok) {
        setStatusMsg("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatusMsg(data.error || `❌ Failed (${res.status}). ${raw.slice(0, 120)}`);
      }
    } catch (err) {
      console.error(err);
      setStatusMsg("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <section id="contact" className="contact">
        <style>{`
        .contact {
          position: relative;
          overflow: hidden;
          padding: 96px 0;
          background:
            radial-gradient(ellipse at 10% 14%, rgba(247, 183, 51, 0.18), transparent 34%),
            radial-gradient(ellipse at 90% 12%, rgba(19, 184, 200, 0.16), transparent 34%),
            linear-gradient(135deg, #fffbe6 0%, #fff7ed 42%, #ecfeff 100%);
        }

        .contact::before {
          content: "";
          position: absolute;
          inset: 42px 0 auto;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 107, 74, 0.32), rgba(247, 183, 51, 0.3), transparent);
        }

        .contactHeader {
          max-width: 780px;
          margin-bottom: 14px;
        }

        .contact h2 {
          margin: 0 0 14px;
          color: #17202c;
          font-size: clamp(32px, 4.4vw, 46px);
          line-height: 1.04;
          font-weight: 950;
          letter-spacing: 0;
        }

        .contact-subtitle {
          max-width: 680px;
          color: rgba(31, 41, 55, 0.72);
          margin: 0 0 40px;
          font-size: 16px;
          line-height: 1.74;
        }

        .contactWrapper {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.72fr);
          gap: 24px;
          align-items: stretch;
        }

        .contactForm {
          padding: 30px;
          border: 1px solid rgba(31, 41, 55, 0.1);
          border-radius: var(--radius-lg);
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.84), rgba(255, 255, 255, 0.6));
          box-shadow: 0 18px 52px rgba(31, 41, 55, 0.1);
          backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contactForm input,
        .contactForm textarea {
          width: 100%;
          padding: 15px 16px;
          border-radius: 10px;
          border: 1px solid rgba(17, 24, 39, 0.13);
          color: #17202c;
          background: #ffffff;
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .contactForm input:focus,
        .contactForm textarea:focus {
          border-color: rgba(255, 107, 74, 0.52);
          box-shadow: 0 0 0 4px rgba(255, 107, 74, 0.1);
        }

        .contactForm textarea {
          min-height: 150px;
          resize: vertical;
        }

        .contactForm button {
          min-height: 50px;
          margin-top: 4px;
          background: linear-gradient(135deg, #ff6b4a, #f7b733);
          border: none;
          color: #17202c;
          padding: 0 18px;
          border-radius: 10px;
          font-weight: 850;
          cursor: pointer;
          box-shadow: 0 16px 34px rgba(247, 183, 51, 0.24);
          transition: transform 0.22s ease, box-shadow 0.22s ease, opacity 0.22s ease;
        }

        .contactForm button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 22px 42px rgba(255, 107, 53, 0.22);
        }

        .contactForm button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .statusMsg {
          padding: 12px 14px;
          border-radius: var(--radius);
          background: rgba(125, 223, 187, 0.18);
          color: #17202c;
          font-weight: 800;
        }

        .contactDetails {
          padding: 30px;
          border-radius: var(--radius-lg);
          color: #17202c;
          position: relative;
          overflow: hidden;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.56));
          border: 1px solid rgba(31, 41, 55, 0.1);
          box-shadow: 0 18px 52px rgba(31, 41, 55, 0.1);
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .contactDetails::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.58), rgba(255, 255, 255, 0.9)),
            url("/images/cosmos-talent-visual.png") center / cover;
          opacity: 0.42;
        }

        .contactDetails > * {
          position: relative;
          z-index: 1;
        }

        .detailItem {
          display: flex;
          gap: 14px;
          padding: 18px 0;
          border-bottom: 1px solid rgba(31, 41, 55, 0.1);
          color: rgba(31, 41, 55, 0.72);
          line-height: 1.7;
        }

        .detailItem:last-child {
          border-bottom: 0;
        }

        .detailIcon {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          flex: 0 0 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 241, 118, 0.42), rgba(125, 223, 187, 0.32));
        }

        .detailLabel {
          color: #17202c;
          font-weight: 900;
          margin-bottom: 4px;
        }

        .contactDetails a {
          color: #0f766e;
          font-weight: 850;
        }

        @media(max-width: 800px) {
          .contact {
            padding: 72px 0;
          }

          .contactWrapper {
            grid-template-columns: 1fr;
          }

          .contactForm,
          .contactDetails {
            padding: 24px;
          }
        }
      `}</style>

        <div className="container">
          <div className="contactHeader">
            <h2>Get in Touch</h2>
            <p className="contact-subtitle">
              Have a project in mind? Let’s build something powerful.
            </p>
          </div>

          <div className="contactWrapper">
            <form onSubmit={handleSubmit} className="contactForm">
              <input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
              />

              <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
              />

              <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={loading}
              />

              <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
              />

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>

              {statusMsg && <div className="statusMsg">{statusMsg}</div>}
            </form>

            <div className="contactDetails">
              <div className="detailItem">
                <div className="detailIcon">📍</div>
                <div>
                  <div className="detailLabel">Address</div>
                  COSMOS NextGen IT LLC<br />
                  5900 Balcones Drive, Suite 100<br />
                  Austin, TX 78731
                </div>
              </div>

              <div className="detailItem">
                <div className="detailIcon">📞</div>
                <div>
                  <div className="detailLabel">Phone</div>
                  <a href="tel:2103909950">210.390.9950</a>
                </div>
              </div>

              <div className="detailItem">
                <div className="detailIcon">✉️</div>
                <div>
                  <div className="detailLabel">Email</div>
                  <a href="mailto:hr@cosmosnextgen.com">hr@cosmosnextgen.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
