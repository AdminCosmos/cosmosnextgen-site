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
          padding: 120px 0;
          background: linear-gradient(135deg, var(--bg) 0%, var(--bg-secondary) 100%);
          position: relative;
          overflow: hidden;
        }

        .contact::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 20%, rgba(26, 159, 181, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(255, 107, 53, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        h2 {
          text-align: center;
          font-size: 48px;
          color: var(--text);
          margin-bottom: 20px;
          font-weight: 700;
          line-height: 1.1;
        }

        .contact-subtitle {
          text-align: center;
          color: var(--text-secondary);
          margin-bottom: 80px;
          font-size: 18px;
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .contactWrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        .contactForm {
          background: var(--card);
          padding: 48px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--stroke);
          display: flex;
          flex-direction: column;
          gap: 20px;
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
        }

        .contactForm input,
        .contactForm textarea {
          padding: 16px 20px;
          border-radius: var(--radius);
          border: 1px solid var(--stroke);
          font-size: 16px;
          background: var(--bg);
          color: var(--text);
          transition: all 0.2s ease;
        }

        .contactForm input:focus,
        .contactForm textarea:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(26, 159, 181, 0.1);
        }

        .contactForm textarea {
          min-height: 150px;
          resize: vertical;
        }

        .contactForm button {
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%);
          border: none;
          color: white;
          padding: 16px 24px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--shadow);
        }

        .contactForm button:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .contactForm button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .statusMsg {
          margin-top: 20px;
          text-align: center;
          font-weight: 500;
          padding: 12px;
          border-radius: var(--radius);
        }

        .contactDetails {
          background: var(--card);
          padding: 48px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--stroke);
          display: flex;
          flex-direction: column;
          gap: 32px;
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
        }

        .detailItem {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .detailLabel {
          font-weight: 600;
          color: var(--text);
          margin-bottom: 4px;
        }

        .detailItem a {
          color: var(--accent);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .detailItem a:hover {
          color: var(--accent-secondary);
        }

        @media(max-width: 800px) {
          .contactWrapper {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          
          .contactForm,
          .contactDetails {
            padding: 32px;
          }
          
          h2 {
            font-size: 36px;
          }
        }
      `}</style>

        <div className="container">
          <h2>Get in Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind? Let’s build something powerful.
          </p>

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
                <div>📍</div>
                <div>
                  <div className="detailLabel">Address</div>
                  COSMOS NextGen IT LLC<br />
                  5900 Balcones Drive, Suite 100<br />
                  Austin, TX 78731
                </div>
              </div>

              <div className="detailItem">
                <div>📞</div>
                <div>
                  <div className="detailLabel">Phone</div>
                  <a href="tel:2103909950">210.390.9950</a>
                </div>
              </div>

              <div className="detailItem">
                <div>✉️</div>
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
