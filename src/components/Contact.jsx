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
      const url = new URL("/api/contact", window.location.origin);

      const res = await fetch(url.toString(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatusMsg("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatusMsg(data?.error || "❌ Failed to send message.");
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
          padding: 100px 20px;
          background:
            radial-gradient(circle at 20% 30%, rgba(255, 107, 53, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(26, 159, 181, 0.1) 0%, transparent 40%),
            linear-gradient(135deg, rgba(254, 252, 247, 0.95) 0%, rgba(250, 247, 242, 0.85) 100%);
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
        }

        h2 {
          text-align: center;
          font-size: 42px;
          color: #181a20;
          margin-bottom: 14px;
        }

        .contact-subtitle {
          text-align: center;
          color: #23242a;
          margin-bottom: 60px;
        }

        .contactWrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .contactForm {
          background: rgba(255,255,255,0.85);
          padding: 40px;
          border-radius: 16px;
          border: 1px solid rgba(26,159,181,0.25);
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .contactForm input,
        .contactForm textarea {
          padding: 14px 16px;
          border-radius: 10px;
          border: 1px solid rgba(0,0,0,0.2);
          font-size: 15px;
        }

        .contactForm textarea {
          min-height: 150px;
          resize: vertical;
        }

        .contactForm button {
          background: linear-gradient(135deg,#ff6b35,#1a9fb5);
          border: none;
          color: white;
          padding: 14px;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
        }

        .contactForm button:disabled {
          opacity: 0.7;
        }

        .statusMsg {
          margin-top: 16px;
          text-align: center;
          font-weight: 600;
        }

        .contactDetails {
          background: rgba(255,255,255,0.85);
          padding: 40px;
          border-radius: 16px;
          border: 1px solid rgba(26,159,181,0.25);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .detailItem {
          display: flex;
          gap: 14px;
        }

        .detailLabel {
          font-weight: 700;
        }

        @media(max-width: 800px) {
          .contactWrapper {
            grid-template-columns: 1fr;
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
              />

              <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
              />

              <input
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
              />

              <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
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
